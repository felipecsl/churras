import { CircularProgress, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import AnimatedNumber from "animated-number-react";
import ClipboardJS from "clipboard";
import { format } from "d3-format";
import _ from "lodash";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import AccountCacheProvider from "../api/providers/accountCacheProvider";
import { MetaMaskProvider } from "../api/providers/metamaskProvider";
import { WalletToken } from "../api/token/walletToken";
import { addressShorthand, any, isChainSupported, none } from "../api/util";
import { Chain } from "../chain";
import { ChurrasApiClient } from "../churrasApiClient";
import Copy from "../images/copy.svg";
import FooterComponent from "./footerComponent";
import NavigationComponent from "./navigationComponent";
import TokenTableRow from "./tokenTableRow";

export type RoutePropsParams = { accountAddress: string };

interface AccountDetailsProps {
  accountCacheProvider: AccountCacheProvider;
  metaMaskProvider: MetaMaskProvider;
  route: RouteComponentProps<RoutePropsParams>;
  chain: Chain;
  apiClient: ChurrasApiClient;
}

interface AccountDetailsState {
  sortOrder: string;
  sortDirection: string;
  isLoadingTokens: boolean;
  walletTokens: WalletToken[];
  snackbarOpen: boolean;
}

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default class AccountDetails extends React.Component<
  AccountDetailsProps,
  AccountDetailsState
> {
  constructor(props: AccountDetailsProps) {
    super(props);
    this.state = {
      isLoadingTokens: false,
      sortOrder: "token",
      sortDirection: "asc", // asc or desc
      walletTokens: [],
      snackbarOpen: false,
    };
  }
  private async loadAccount(accountAddress: string) {
    const { accountCacheProvider, chain, apiClient } = this.props;
    if (!isChainSupported(chain)) {
      console.log(`Unsupported chain ${Chain[chain]}`);
      return;
    } else {
      this.setState({ isLoadingTokens: true });
      const walletTokens = await apiClient.accountTokens(accountAddress);
      accountCacheProvider.update(accountAddress, walletTokens);
      this.setState({
        walletTokens: walletTokens,
        isLoadingTokens: false,
      });
    }
  }

  async componentDidMount() {
    const { accountCacheProvider, route, apiClient } = this.props;
    const accountAddress = route.match.params.accountAddress;
    const tokens = accountCacheProvider.get(accountAddress);
    if (none(tokens)) {
      // We already have the user account address but wallet tokens is empty, so we'll make
      // an attempt to load them.
      this.loadAccount(accountAddress);
    } else {
      // we already have tokens, update the state first and then refresh prices in the background
      this.setState({ walletTokens: tokens });
      const updatedTokens = await apiClient.accountTokens(accountAddress);
      // console.log(await accountSnapshot.loadYieldFarms(accountAddress));
      this.setState({ walletTokens: updatedTokens });
      accountCacheProvider.update(accountAddress, updatedTokens);
    }
  }

  /* Returns the total account size in USD */
  determineUSDAccountSize(): number {
    const { walletTokens, isLoadingTokens } = this.state;
    if (isLoadingTokens) {
      return 0;
    } else {
      return walletTokens
        .filter((wt) => wt.price && wt.balance)
        .reduce((acc, wt) => acc + +wt.price * +wt.balance, 0);
    }
  }

  sortTableBy(target: HTMLElement) {
    const { sortOrder, sortDirection } = this.state;
    const newSortorder = target.innerText.toLowerCase();
    if (sortOrder === newSortorder) {
      // if the new sort order is the same as the previous one, just invert the direction
      this.setState({
        sortDirection: sortDirection === "asc" ? "desc" : "asc",
      });
    }
    this.setState({ sortOrder: newSortorder });
  }

  handleCloseSnackbar(event: any, reason: string) {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ snackbarOpen: false });
  }

  render() {
    if (!this.state) {
      return <div>Loading...</div>;
    }
    const columns = {
      token: "symbol",
      network: "network",
      quantity: "balance",
      price: "price",
      value: "equity",
    } as Record<string, string>;
    const { route } = this.props;
    const accountAddress = route.match.params.accountAddress;
    const shorthandAddress = addressShorthand(accountAddress);
    const clipboard = new ClipboardJS("#copy");
    clipboard.on("success", (e) => {
      this.setState({ snackbarOpen: true });
    });
    const {
      walletTokens,
      isLoadingTokens,
      sortOrder,
      sortDirection,
      snackbarOpen,
    } = this.state;
    const sortKey = columns[sortOrder];
    const currencyFormat = format("$,.2f");
    const accountSize = this.determineUSDAccountSize();
    const tokens = _.sortBy(
      walletTokens,
      (t) => (t as Record<string, any>)[sortKey] as any
    );
    const sortedTokens = sortDirection === "asc" ? tokens : tokens.reverse();
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
              {isLoadingTokens ? (
                <div className="text-center">
                  <CircularProgress color="secondary" />
                </div>
              ) : (
                any(walletTokens) && (
                  <div>
                    <h1 className="font-bold leading-8 text-4xl text-center mb-8">
                      <AnimatedNumber
                        value={accountSize}
                        formatValue={currencyFormat}
                      />
                    </h1>
                    {accountAddress && (
                      <div className="pb-3 overflow-auto">
                        <code className="float-left">
                          <small>{shorthandAddress}</small>
                        </code>
                        <img
                          data-clipboard-text={accountAddress}
                          alt="Copy to clipboard"
                          title="Copy to clipboard"
                          className="fill-current filter dark:invert ml-3 mt-2 cursor-pointer float-left"
                          id="copy"
                          src={Copy}
                        />
                        <Snackbar
                          open={snackbarOpen}
                          autoHideDuration={3000}
                          onClose={this.handleCloseSnackbar.bind(this)}
                        >
                          <Alert
                            onClose={this.handleCloseSnackbar.bind(this)}
                            severity="info"
                          >
                            Copied!
                          </Alert>
                        </Snackbar>
                      </div>
                    )}
                    <div className="clear-both flex flex-col">
                      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                          <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-700 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-800">
                              <thead className="bg-gray-50 dark:bg-gray-900">
                                <tr>
                                  {Object.keys(columns).map((col: string) => (
                                    <th
                                      scope="col"
                                      key={col}
                                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hover:text-gray-900 dark:hover:text-gray-100"
                                    >
                                      <span
                                        className="cursor-pointer"
                                        onClick={(e) =>
                                          this.sortTableBy(e.currentTarget)
                                        }
                                      >
                                        {col}
                                      </span>
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="bg-white dark:bg-black divide-y divide-gray-200 dark:divide-gray-800">
                                {sortedTokens.map((token: WalletToken) => (
                                  <TokenTableRow
                                    key={`${token.symbol}-${token.network}`}
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
