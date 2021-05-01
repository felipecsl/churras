import { CircularProgress } from "@material-ui/core";
import AnimatedNumber from "animated-number-react";
import { format } from "d3-format";
import { utils } from "ethers";
import _ from "lodash";
import React from "react";
import "./App.css";
import { Chain, Network } from "./chain";
import ThemeSelector from "./components/themeSelector";
import TokenTableRow from "./components/tokenTableRow";
import { DEFAULT_BSC_PROVIDER, DEFAULT_ETHEREUM_PROVIDER } from "./constants";
import GithubLogo from "./images/github.svg";
import AccountCacheProvider from "./providers/accountCacheProvider";
import BscTokenPricesProvider from "./providers/bscTokenPricesProvider";
import EthereumTokenPricesProvider from "./providers/ethereumTokenPricesProvider";
import DefaultMetaMaskProvider, {
  MetaMaskProvider,
} from "./providers/metamaskProvider";
import TokenPricesProvider from "./providers/tokenPricesProvider";
import EthBnbPriceFetcher from "./token/ethBnbPriceFetcher";
import Token, { BNB_TOKEN, ETH_TOKEN } from "./token/token";
import DefaultTokenBalanceResolver, {
  TokenBalanceResolver,
} from "./token/tokenBalanceResolver";
import TokenDatabase from "./token/tokenDatabase";
import { WalletToken } from "./token/walletToken";
import { any, ensure, groupBy, none } from "./util";

interface AppState {
  isLoadingTokens: boolean;
  chain: number;
  walletTokens: WalletToken[];
}

interface AppProps {
  networkToPriceProviders: Record<string, TokenPricesProvider>;
  tokenDatabases: Record<string, TokenDatabase>;
  tokenBalanceResolver: TokenBalanceResolver;
  accountCacheProvider: AccountCacheProvider;
  metaMaskProvider: MetaMaskProvider;
  ethBnbPriceFetcher: () => Promise<{ eth: string; bnb: string }>;
}

declare global {
  interface Window {
    ethereum: any;
  }
}

class App extends React.Component<AppProps, AppState> {
  public static defaultProps = {
    networkToPriceProviders: Object.fromEntries([
      [Network[Network.ETHEREUM], new EthereumTokenPricesProvider()],
      [Network[Network.BSC], new BscTokenPricesProvider()],
    ]),
    tokenDatabases: Object.fromEntries([
      [Network[Network.ETHEREUM], new TokenDatabase(Network.ETHEREUM)],
      [Network[Network.BSC], new TokenDatabase(Network.BSC)],
    ]),
    tokenBalanceResolver: new DefaultTokenBalanceResolver(
      Object.fromEntries([
        [Network[Network.ETHEREUM], DEFAULT_ETHEREUM_PROVIDER],
        [Network[Network.BSC], DEFAULT_BSC_PROVIDER],
      ])
    ),
    accountCacheProvider: new AccountCacheProvider(),
    metaMaskProvider: new DefaultMetaMaskProvider(),
    ethBnbPriceFetcher: new EthBnbPriceFetcher().fetchEthBnbPrice,
  };

  constructor(props: AppProps) {
    super(props);

    this.state = {
      isLoadingTokens: false,
      chain: Chain.ETHEREUM_MAINNET,
      walletTokens: [],
    };
  }

  private async fetchEthBnbTokens(): Promise<{
    eth: WalletToken;
    bnb: WalletToken;
  }> {
    const { tokenBalanceResolver, ethBnbPriceFetcher } = this.props;
    const accountAddress = this.ensureAccountAddress();
    const ethBnbPrice = await ethBnbPriceFetcher();
    const ethBalance = await tokenBalanceResolver.ethBalance(accountAddress);
    const bnbBalance = await tokenBalanceResolver.bnbBalance(accountAddress);
    return {
      eth: new WalletToken(ETH_TOKEN, {
        balance: ethBalance.toString(),
        price: ethBnbPrice.eth,
      }),
      bnb: new WalletToken(BNB_TOKEN, {
        balance: bnbBalance.toString(),
        price: ethBnbPrice.bnb,
      }),
    };
  }

  private ensureAccountAddress(): string {
    return ensure(
      this.accountAddress.bind(this),
      "Missing account address"
    ) as string;
  }

  /*async loadAccountTransactions() {
    const accountAddress = this.ensureAccountAddress();
    if (accountAddress) {
      const transactionsLoader = new TransactionsLoader(
        new RealEtherscanApiClient()
      );
      const uniswapTransactionParser = new UniswapTransactionParser(
        TOKENS_BY_NETWORK[this.state.chain],
        DEFAULT_ETHEREUM_PROVIDER
      );
      const accountSwaps = new AccountSwaps(
        transactionsLoader,
        uniswapTransactionParser
      );
      console.log(await accountSwaps.loadAccountSwaps(accountAddress));
    }
  }*/

  private isChainSupported(chain: number) {
    // For now only Ethereum Mainnet supported
    return chain === Chain.ETHEREUM_MAINNET || chain === Chain.BSC_MAINNET;
  }

  private async loadBalances(accountAddress: string) {
    if (!this.props.metaMaskProvider.isMetaMaskInstalled()) {
      return;
    }
    const { chain } = this.state;
    if (!this.isChainSupported(chain)) {
      console.log(`Unsupported chain ${Chain[chain]}`);
      return;
    }
    this.setState({ isLoadingTokens: true });
    const {
      tokenDatabases,
      tokenBalanceResolver,
      accountCacheProvider,
    } = this.props;
    // 1. fetch all token balances
    const tokensToBalances = Object.values(tokenDatabases)
      .flatMap((db) => db.allTokens())
      .map((t) => tokenBalanceResolver.resolveBalance(accountAddress, t));
    const results = await Promise.all(tokensToBalances);
    // 2. filter results to only the tokens which have a positive balance
    const positiveBalances = results.filter(({ balance }) => balance > 0);
    // 3. fetch the prices for each token with a positive balance
    const positiveBalanceTokens = positiveBalances.map(({ token }) => token);
    const tokenPrices = await this.fetchTokenPrices(positiveBalanceTokens);
    const walletTokens = positiveBalances.map(({ token, balance }) => {
      const price = tokenPrices.get(token) as string;
      return new WalletToken(token, { balance, price });
    });
    const ethBnbTokens = await this.fetchEthBnbTokens();
    const completeWalletTokens = [
      ...walletTokens,
      ...Object.values(ethBnbTokens),
    ];
    accountCacheProvider.update({ tokens: completeWalletTokens });
    this.setState({
      walletTokens: completeWalletTokens,
      isLoadingTokens: false,
    });
  }

  private async refreshPrices(
    walletTokens: WalletToken[]
  ): Promise<WalletToken[]> {
    const tokenPrices = await this.fetchTokenPrices(walletTokens);
    const keySet = Array.from(tokenPrices.keys());
    const findTokenPrice = (predicate: (t: Token) => boolean) => {
      const key = keySet.find((t) => predicate(t));
      return key && tokenPrices.get(key);
    };
    walletTokens.forEach((walletToken) => {
      const asToken = WalletToken.toToken(walletToken);
      // We cannot simply call `tokenPrices.get(asToken)` here because the key equality check will fail.
      // Instead, using `isEqual()` will perform a deep comparison (similarly to how Kotlin data classes work)
      const price = findTokenPrice((t) => _.isEqual(t, asToken));
      walletToken.price = price as string;
    });
    const ethBnbTokens = await this.fetchEthBnbTokens();
    const bnb = walletTokens.find((wt) => wt.symbol === "BNB");
    if (bnb) {
      bnb.price = ethBnbTokens.bnb.price;
      bnb.balance = ethBnbTokens.bnb.balance;
    }
    const eth = walletTokens.find((wt) => wt.symbol === "ETH");
    if (eth) {
      eth.price = ethBnbTokens.eth.price;
      eth.balance = ethBnbTokens.eth.balance;
    }
    return walletTokens;
  }

  // // WIP
  // private async loadYieldFarms() {
  //   // autofarm
  //   const accountAddress = this.ensureAccountAddress();
  //   const pendingAuto = await this.props.tokenBalanceResolver.autoFarmContractPendingAuto(
  //     6,
  //     accountAddress
  //   );
  //   console.log(utils.formatEther(pendingAuto));
  // }

  async connectToMetaMask() {
    const { accountCacheProvider, metaMaskProvider } = this.props;
    const accounts = await metaMaskProvider.requestAccounts();
    const accountAddress = accounts[0];
    accountCacheProvider.update({ accountAddress, tokens: [] });
    this.loadBalances(accountAddress);
  }

  /* Fetch prices for all the provided tokens. Returns a map of Token to price */
  async fetchTokenPrices(tokens: Token[]): Promise<Map<Token, string>> {
    const { tokenDatabases, networkToPriceProviders } = this.props;
    // select correct provider and token database based on the tokens network
    const tokensByNetwork = groupBy(tokens, (t) => t.network);
    const tokenToPrice = new Map<Token, string>();
    for (const [network, tokens] of Object.entries(tokensByNetwork)) {
      const priceProvider = networkToPriceProviders[network];
      const tokenDatabase = tokenDatabases[network];
      const tokenAddresses = tokens.map((t) => t.address);
      const prices = await priceProvider.fetchPrices(tokenAddresses);
      prices.forEach(([tokenAddress, price]) => {
        const token =
          tokenDatabase.tokensByAddress[utils.getAddress(tokenAddress)];
        if (token && price) {
          tokenToPrice.set(token, price);
        } else {
          console.error(
            `Unable to find price for token with address ${tokenAddress}`
          );
        }
      });
    }
    return tokenToPrice;
  }

  private accountAddress(): string | undefined {
    return this.props.accountCacheProvider.get().accountAddress;
  }

  async componentDidMount() {
    const chain = await this.props.metaMaskProvider.chainId();
    this.setState({ chain }, async () => {
      const { accountCacheProvider } = this.props;
      // Register this as a callback after setState() finished because loadBalances() relies on
      // this state that we just set above.
      const { accountAddress, tokens } = accountCacheProvider.get();
      if (accountAddress) {
        if (none(tokens)) {
          // User has previously connected to MetaMask, but wallet tokens array is empty,
          // so we'll make an attempt to load 'em all
          this.loadBalances(accountAddress as string);
        } else {
          // we already have tokens, update the state and we're done
          this.setState({ walletTokens: tokens });
          // TODO: refresh prices and balances in the background
          const updatedTokens = await this.refreshPrices(tokens);
          this.setState({ walletTokens: updatedTokens });
        }
      }
    });
  }

  /* Returns the total account size in USD */
  determineUSDAccountSize(): number {
    const { walletTokens, isLoadingTokens } = this.state;
    if (isLoadingTokens) {
      return 0;
    } else {
      return walletTokens.reduce(
        (acc: number, wt: WalletToken) => acc + +wt.price * +wt.balance,
        0
      );
    }
  }

  sortTokenList(): WalletToken[] {
    const { walletTokens } = this.state;
    const sortedTokens = walletTokens;
    sortedTokens.sort((a, b) => {
      var nameA = a.symbol;
      var nameB = b.symbol;
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
    return sortedTokens;
  }

  render() {
    if (!this.state) {
      return <div>Loading...</div>;
    }
    const accountAddress = this.accountAddress();
    const { walletTokens, isLoadingTokens, chain } = this.state;
    const currencyFormat = format("$,.2f");
    const accountSize = this.determineUSDAccountSize();
    const sortedTokens = this.sortTokenList();
    const isMetaMaskInstalled = this.props.metaMaskProvider.isMetaMaskInstalled();
    const isUnsupportedChain =
      isMetaMaskInstalled && !this.isChainSupported(chain);
    const showConnectToMetamaskButton = isMetaMaskInstalled && !accountAddress;
    return (
      <div>
        <nav className="bg-gray-800 dark:bg-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-4xl">🥩</div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-start space-x-4">
                    <a
                      href="/"
                      className="bg-gray-900 text-white px-3 py-3 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <ThemeSelector />
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </a>
            </div>
          </div>
        </nav>
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-7">
              {!isMetaMaskInstalled && (
                <p>
                  Sorry, you must first install{" "}
                  <a href="https://metamask.io/">Metamask</a> in order to use
                  Churras. <br />
                  Just refresh this page once you have it installed and you'll
                  be all set.
                </p>
              )}
              {showConnectToMetamaskButton && (
                <div>
                  <p>
                    Get a detailed balance of your DeFi tokens and an account
                    overview. Click the button below to get started.
                  </p>
                  <br />
                  <button
                    onClick={this.connectToMetaMask.bind(this)}
                    className="text-white mt-auto bg-emerald-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex"
                  >
                    Connect to MetaMask
                  </button>
                </div>
              )}
              {isUnsupportedChain && (
                <p>
                  Sorry, the network you have currently selected in Metamask is
                  not yet supported.
                </p>
              )}
              {isLoadingTokens ? (
                <div className="text-center">
                  <CircularProgress color="secondary" />
                </div>
              ) : (
                any(walletTokens) && (
                  <div>
                    {accountAddress && (
                      <div className="pb-3">
                        <code className="float-left">
                          <small>{accountAddress}</small>
                        </code>
                        <p className="font-semibold text-2xl text-right">
                          <AnimatedNumber
                            value={accountSize}
                            formatValue={currencyFormat}
                          />
                        </p>
                      </div>
                    )}
                    <div className="clear-both flex flex-col">
                      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                          <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                              <thead className="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                  {["Token", "Quantity", "Price", "Value"].map(
                                    (col: string) => (
                                      <th
                                        scope="col"
                                        key={col}
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                      >
                                        {col}
                                      </th>
                                    )
                                  )}
                                </tr>
                              </thead>
                              <tbody className="bg-white dark:bg-black divide-y divide-gray-200 dark:divide-gray-800">
                                {sortedTokens.map((token: WalletToken) => (
                                  <TokenTableRow
                                    key={token.symbol}
                                    token={token}
                                  />
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </main>
        <footer className="footer bg-white dark:text-gray-300 dark:bg-gray-700 relative pt-1 border-b-2 border-blue-700">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="sm:flex sm:mt-8">
              <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 grid grid-cols-2 justify-items-start">
                <div>
                  <div className="my-2 text-5xl">🥩</div>
                  <div className="my-5">
                    <p className="leading-relaxed">
                      Churras is your DeFi wallet dashboard. <br /> It supports
                      both Ethereum and Binance Smart Chain. <br /> Track your
                      balance, tokens, yields and be your own bank.
                    </p>
                  </div>
                  <div className="my-5">
                    <a
                      href="https://github.com/felipecsl/churras"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={GithubLogo}
                        alt="Churras Github"
                        className="fill-current filter dark:invert"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-gray-200 uppercase mb-8">
                    About
                  </div>
                  <div className="my-4">
                    <a
                      href="#"
                      className="text-blue-700  text-md hover:text-blue-500"
                    >
                      What is this?
                    </a>
                  </div>
                  <div className="my-4">
                    <a
                      href="#"
                      className="text-blue-700  text-md hover:text-blue-500"
                    >
                      Docs
                    </a>
                  </div>
                  <div className="my-4">
                    <a
                      href="#"
                      className="text-blue-700  text-md hover:text-blue-500"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-6">
            <div className="mt-16 border-t-2 border-gray-200 dark:border-gray-600 flex flex-col items-center">
              <div className="sm:w-2/3 text-center py-6">
                <p className="text-sm text-blue-700 font-bold mb-2">
                  Built with ☕️ by{" "}
                  <a className="underline" href="https://felipecsl.com">
                    Felipe Lima
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
