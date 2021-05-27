import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AccountCacheProvider from "./api/providers/accountCacheProvider";
import DefaultMetaMaskProvider, {
  MetaMaskProvider
} from "./api/providers/metamaskProvider";
import "./App.css";
import { navigateTo } from "./browserUtil";
import { Chain } from "./chain";
import DefaultChurrasApiClient from "./churrasApiClient";
import AccountDetails from "./components/accountDetails";
import FooterComponent from "./components/footerComponent";
import Landing from "./components/landing";
import NavigationComponent from "./components/navigationComponent";

interface AppState {
  chain: number;
}

interface AppProps {
  accountCacheProvider: AccountCacheProvider;
  metaMaskProvider: MetaMaskProvider;
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
  };

  constructor(props: AppProps) {
    super(props);

    this.state = {
      chain: Chain.ETHEREUM_MAINNET,
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

  async componentDidMount() {
    const chain = await this.props.metaMaskProvider.chainId();
    this.setState({ chain }, async () => {
      const { accountCacheProvider } = this.props;
      // Register this as a callback after setState() finished because loadBalances() relies on
      // this state that we just set above.
      const accountAddress = accountCacheProvider.getSingleAccountAddress();
      if (["", "#/"].includes(window.location.hash) && accountAddress) {
        navigateTo(`#/address/${accountAddress}`);
      }
    });
  }

  render() {
    const { accountCacheProvider, metaMaskProvider } = this.props;
    const { chain } = this.state;
    return (
      <React.StrictMode>
        <Router>
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
                  <Switch>
                    <Route
                      path="/address/:accountAddress"
                      render={(props) => (
                        <AccountDetails
                          apiClient={new DefaultChurrasApiClient()}
                          metaMaskProvider={metaMaskProvider}
                          accountCacheProvider={accountCacheProvider}
                          route={props}
                          chain={chain}
                        />
                      )}
                    />
                    <Route
                      path="/"
                      render={(props) => (
                        <Landing
                          accountCacheProvider={accountCacheProvider}
                          metaMaskProvider={metaMaskProvider}
                          chain={chain}
                        />
                      )}
                    />
                  </Switch>
                </div>
              </div>
            </main>
            <FooterComponent />
          </div>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
