import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Chain } from "./chain";
import AccountDetails from "./components/accountDetails";
import ChurrasApp from "./components/churrasApp";
import AccountCacheProvider from "./api/providers/accountCacheProvider";
import DefaultMetaMaskProvider, {
  MetaMaskProvider,
} from "./api/providers/metamaskProvider";
import DefaultChurrasApiClient from "./churrasApiClient";
import LandingPage from "./landingPage";

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

export default class ChurrasRouter extends React.Component<AppProps, AppState> {
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
    // const chain = await this.props.metaMaskProvider.chainId();
    // this.setState({ chain }, async () => {
    //   const { accountCacheProvider } = this.props;
    //   // Register this as a callback after setState() finished because loadBalances() relies on
    //   // this state that we just set above.
    //   const accountAddress = accountCacheProvider.getSingleAccountAddress();
    //   if (["", "#/"].includes(window.location.hash) && accountAddress) {
    //     navigateTo(`#/address/${accountAddress}`);
    //   }
    // });
  }

  render() {
    const { accountCacheProvider, metaMaskProvider } = this.props;
    const { chain } = this.state;
    return (
      <React.StrictMode>
        <Router>
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
            <Route path="/" render={(props) => <LandingPage />} />
            <Route
              path="/app"
              render={(props) => (
                <ChurrasApp
                  accountCacheProvider={accountCacheProvider}
                  metaMaskProvider={metaMaskProvider}
                  chain={chain}
                />
              )}
            />
          </Switch>
        </Router>
      </React.StrictMode>
    );
  }
}
