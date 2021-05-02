import { CircularProgress } from "@material-ui/core";
import AnimatedNumber from "animated-number-react";
import { format } from "d3-format";
import React from "react";
import AccountSnapshot from "./accountSnapshot";
import "./App.css";
import { Chain } from "./chain";
import ThemeSelector from "./components/themeSelector";
import TokenTableRow from "./components/tokenTableRow";
import GithubLogo from "./images/github.svg";
import Logo from "./images/logo.svg";
import TwitterLogo from "./images/twitter.svg";
import AccountCacheProvider from "./providers/accountCacheProvider";
import DefaultMetaMaskProvider, {
  MetaMaskProvider,
} from "./providers/metamaskProvider";
import { WalletToken } from "./token/walletToken";
import { any, none, sortTokens } from "./util";

interface AppState {
  isLoadingTokens: boolean;
  chain: number;
  walletTokens: WalletToken[];
}

interface AppProps {
  accountCacheProvider: AccountCacheProvider;
  metaMaskProvider: MetaMaskProvider;
  accountSnapshot: AccountSnapshot;
}

declare global {
  interface Window {
    ethereum: any;
  }
}

class App extends React.Component<AppProps, AppState> {
  public static defaultProps = {
    accountCacheProvider: new AccountCacheProvider(),
    metaMaskProvider: new DefaultMetaMaskProvider(),
    accountSnapshot: new AccountSnapshot(),
  };

  constructor(props: AppProps) {
    super(props);

    this.state = {
      isLoadingTokens: false,
      chain: Chain.ETHEREUM_MAINNET,
      walletTokens: [],
    };
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
    this.loadAccount(accountAddress);
  }

  async componentDidMount() {
    const chain = await this.props.metaMaskProvider.chainId();
    this.setState({ chain }, async () => {
      const { accountCacheProvider, accountSnapshot } = this.props;
      // Register this as a callback after setState() finished because loadBalances() relies on
      // this state that we just set above.
      const { accountAddress, tokens } = accountCacheProvider.get();
      if (accountAddress) {
        if (none(tokens)) {
          // We already have the user account address but wallet tokens is empty, so we'll make
          // an attempt to load them.
          this.loadAccount(accountAddress);
        } else {
          // we already have tokens, update the state first and then refresh prices in the background
          this.setState({ walletTokens: tokens });
          // TODO: also refresh balances in the background
          const updatedTokens = await accountSnapshot.refreshPrices(
            accountAddress,
            tokens
          );
          this.setState({ walletTokens: updatedTokens });
          accountCacheProvider.update({ tokens: updatedTokens });
        }
      }
    });
  }

  private async loadAccount(accountAddress: string) {
    const { chain } = this.state;
    const { accountCacheProvider, accountSnapshot } = this.props;
    if (!this.isChainSupported(chain)) {
      console.log(`Unsupported chain ${Chain[chain]}`);
      return;
    } else {
      this.setState({ isLoadingTokens: true });
      const walletTokens = await accountSnapshot.loadAccount(accountAddress);
      accountCacheProvider.update({ tokens: walletTokens });
      this.setState({
        walletTokens: walletTokens,
        isLoadingTokens: false,
      });
    }
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

  private isChainSupported(chain: number) {
    // For now only Ethereum Mainnet supported
    return chain === Chain.ETHEREUM_MAINNET || chain === Chain.BSC_MAINNET;
  }

  render() {
    if (!this.state) {
      return <div>Loading...</div>;
    }
    const { accountCacheProvider } = this.props;
    const { accountAddress } = accountCacheProvider.get();
    const { walletTokens, isLoadingTokens, chain } = this.state;
    const currencyFormat = format("$,.2f");
    const accountSize = this.determineUSDAccountSize();
    const sortedTokens = sortTokens(walletTokens);
    const isMetaMaskInstalled = this.props.metaMaskProvider.isMetaMaskInstalled();
    const isUnsupportedChain =
      isMetaMaskInstalled && !this.isChainSupported(chain);
    const showConnectToMetamaskButton = isMetaMaskInstalled && !accountAddress;
    return (
      <div className="flex flex-col h-screen justify-between">
        <nav className="bg-gray-800 dark:bg-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-4xl">
                  <a href="https://churras.org">
                    <img src={Logo} alt="Churras logo" width="64" height="64" />
                  </a>
                </div>
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
        <main className="mb-auto">
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
                                  {[
                                    "Token",
                                    "Network",
                                    "Quantity",
                                    "Price",
                                    "Value",
                                  ].map((col: string) => (
                                    <th
                                      scope="col"
                                      key={col}
                                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                                    >
                                      {col}
                                    </th>
                                  ))}
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
        <footer className="footer bg-white dark:text-gray-300 dark:bg-gray-700 relative pt-1 border-b-2 border-gray-700">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="sm:flex sm:mt-8">
              <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 grid grid-cols-2 justify-items-start">
                <div>
                  <div className="my-2 text-5xl">
                    <a href="https://churras.org">
                      <img
                        src={Logo}
                        alt="Churras logo"
                        width="64"
                        height="64"
                      />
                    </a>
                  </div>
                  <div className="my-5">
                    <p className="leading-relaxed">
                      Churras is your DeFi wallet dashboard. <br /> It supports
                      both Ethereum and Binance Smart Chain. <br /> Track your
                      account balance, tokens, yields and <br /> be your own
                      bank.
                    </p>
                  </div>
                  <div className="my-5 flex">
                    <a
                      href="https://github.com/felipecsl/churras"
                      target="_blank"
                      rel="noreferrer"
                      className="flex mr-4"
                    >
                      <img
                        src={GithubLogo}
                        alt="Churras Github"
                        className="fill-current filter dark:invert"
                      />
                    </a>
                    <a
                      href="https://twitter.com/churras_org"
                      target="_blank"
                      rel="noreferrer"
                      className="flex"
                    >
                      <img
                        src={TwitterLogo}
                        alt="Churras Twitter"
                        className="fill-current filter dark:invert"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-gray-200 uppercase my-8">
                    About
                  </div>
                  <div className="my-4">
                    <a href="https://docs.churras.org/" className="text-md">
                      Documentation
                    </a>
                  </div>
                  <div className="my-4">
                    <a
                      href="https://github.com/felipecsl/churras"
                      className="text-md"
                    >
                      Source Code
                    </a>
                  </div>
                  <div className="my-4">
                    <a href="mailto:felipe.lima@gmail.com" className="text-md">
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
                <p className="text-sm font-bold mb-2">
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
