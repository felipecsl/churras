import { CircularProgress } from "@material-ui/core";
import AnimatedNumber from "animated-number-react";
import { format } from "d3-format";
import React from "react";
import AccountSnapshot from "./accountSnapshot";
import "./App.css";
import { Chain } from "./chain";
import TokenTableRow from "./components/tokenTableRow";
import FooterComponent from "./footerComponent";
import NavigationComponent from "./navigationComponent";
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
        <NavigationComponent />
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
        <FooterComponent />
      </div>
    );
  }
}

export default App;
