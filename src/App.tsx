import { CircularProgress } from "@material-ui/core";
import AnimatedNumber from "animated-number-react";
import { format } from "d3-format";
import { utils } from "ethers";
import React from "react";
import Web3 from "web3";
import "./App.css";
import { Chain, Network } from "./chain";
import ChainUtils from "./chainUtils";
import ThemeSelector from "./components/themeSelector";
import TokenTableRow from "./components/tokenTableRow";
import { DEFAULT_BSC_PROVIDER, DEFAULT_ETHEREUM_PROVIDER } from "./constants";
import { RealEtherscanApiClient } from "./etherscanApiClient";
import AccountAddressProvider from "./providers/accountAddressProvider";
import BscTokenPricesProvider from "./providers/bscTokenPricesProvider";
import EthereumTokenPricesProvider from "./providers/ethereumTokenPricesProvider";
import TokenPricesProvider from "./providers/tokenPricesProvider";
import Token, { BNB_TOKEN, ETH_TOKEN } from "./token/token";
import TokenBalanceResolver from "./token/tokenBalanceResolver";
import TokenDatabase from "./token/tokenDatabase";
import { TOKENS_BY_NETWORK } from "./token/tokenList";
import { WalletToken } from "./token/walletToken";
import AccountSwaps from "./transaction/accountSwaps";
import TransactionsLoader from "./transaction/transactionsLoader";
import UniswapTransactionParser from "./transaction/uniswapTransactionParser";
import { ensure, groupBy } from "./util";

interface AppState {
  web3?: Web3;
  isLoadingTokens: boolean;
  chain: number;
  walletTokens: WalletToken[];
}

interface AppProps {
  networkToPriceProviders: Record<string, TokenPricesProvider>;
  tokenDatabases: Record<string, TokenDatabase>;
}

declare global {
  interface Window {
    ethereum: any;
  }
}

const ETH_PRICE_API_ENDPOINT =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

class App extends React.Component<AppProps, AppState> {
  static defaultProps = {
    networkToPriceProviders: Object.fromEntries([
      [Network[Network.ETHEREUM], new EthereumTokenPricesProvider()],
      [Network[Network.BSC], new BscTokenPricesProvider()],
    ]),
    tokenDatabases: Object.fromEntries([
      [Network[Network.ETHEREUM], new TokenDatabase(Network.ETHEREUM)],
      [Network[Network.BSC], new TokenDatabase(Network.BSC)],
    ]),
  };

  private readonly addressProvider = new AccountAddressProvider();

  constructor(props: AppProps) {
    super(props);

    this.state = {
      web3: undefined,
      isLoadingTokens: false,
      chain: Chain.ETHEREUM_MAINNET,
      walletTokens: [],
    };
  }

  private async updateEthOrBnbBalance(balance: any) {
    if (this.state.web3) {
      const { walletTokens, chain } = this.state;
      const mainToken = ChainUtils.isEthereum(chain) ? ETH_TOKEN : BNB_TOKEN;
      walletTokens.push(
        new WalletToken(mainToken, {
          balance: this.state.web3.utils.fromWei(balance),
          price: await this.fetchEthPrice(),
        })
      );
      this.setState({ walletTokens });
    } else {
      console.error("web3 is not yet initialized");
    }
  }

  private ensureAccountAddress(): string {
    return ensure(
      this.addressProvider.currentAccountAddress,
      "Missing account address"
    ) as string;
  }

  async loadAccountTransactions() {
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
  }

  private isChainSupported(chain: number) {
    // For now only Ethereum Mainnet supported
    return chain === Chain.ETHEREUM_MAINNET || chain === Chain.BSC_MAINNET;
  }

  private async loadBalances(accountAddress: string) {
    if (!ChainUtils.isMetamaskInstalled()) {
      return;
    }
    const { chain } = this.state;
    if (!this.isChainSupported(chain)) {
      console.log(`Unsupported chain ${Chain[chain]}`);
      return;
    }
    const web3 = new Web3(window.ethereum);
    this.setState({ web3, isLoadingTokens: true });
    const { walletTokens } = this.state;
    const tokenBalanceResolver = new TokenBalanceResolver(
      accountAddress,
      DEFAULT_ETHEREUM_PROVIDER,
      DEFAULT_BSC_PROVIDER
    );
    const { tokenDatabases } = this.props;
    // 1. fetch all token balances
    const tokensToBalances = Object.values(tokenDatabases)
      .flatMap((db) => db.allTokens())
      .map((t) => tokenBalanceResolver.resolveBalance(t));
    const results = await Promise.all(tokensToBalances);
    // 2. filter results to only the tokens which have a positive balance
    const positiveBalances = results.filter(({ balance }) => balance > 0);
    // 3. fetch the prices for each token with a positive balance
    const positiveBalanceTokens = positiveBalances.map(({ token }) => token);
    const tokenPrices = await this.fetchTokenPrices(positiveBalanceTokens);
    positiveBalances.forEach(({ token, balance }) => {
      const price = tokenPrices.get(token) as string;
      walletTokens.push(new WalletToken(token, { balance, price }));
    });
    this.setState({ walletTokens });
    const ethOrBnbBalance = await web3.eth.getBalance(accountAddress);
    await this.updateEthOrBnbBalance(ethOrBnbBalance);
    this.setState({ isLoadingTokens: false });
  }

  async connectToMetaMask() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const accountAddress = accounts[0];
    this.addressProvider.setCurrentAccountAddress(accountAddress);
    this.loadBalances(accountAddress);
  }

  private async fetchEthPrice(): Promise<string> {
    const res = await fetch(ETH_PRICE_API_ENDPOINT);
    const results = await res.json();
    return results["ethereum"]["usd"];
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
        if (token) {
          tokenToPrice.set(token, price);
        } else {
          console.error(`Unable to find token with address ${tokenAddress}`);
        }
      });
    }
    return tokenToPrice;
  }

  async componentDidMount() {
    const chain = await ChainUtils.checkChainId();
    this.setState({ chain }, () => {
      // Register this as a callback after setState() finished because loadBalances() relies on
      // this state that we just set above.
      const connectedAccountAddress = this.addressProvider.currentAccountAddress();
      if (connectedAccountAddress) {
        // User has previously connected to Metamask, so we can immediately load the account
        this.loadBalances(connectedAccountAddress);
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
    const accountAddress = this.addressProvider.currentAccountAddress();
    const { walletTokens, isLoadingTokens, chain } = this.state;
    const currencyFormat = format("$,.2f");
    const accountSize = this.determineUSDAccountSize();
    const sortedTokens = this.sortTokenList();
    const isMetamaskInstalled = ChainUtils.isMetamaskInstalled();
    const isUnsupportedChain =
      isMetamaskInstalled && !this.isChainSupported(chain);
    const showConnectToMetamaskButton = isMetamaskInstalled && !accountAddress;
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
              {!isMetamaskInstalled && (
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
                walletTokens.length > 0 && (
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
      </div>
    );
  }
}

export default App;
