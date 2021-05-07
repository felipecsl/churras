import { CircularProgress } from "@material-ui/core";
import AnimatedNumber from "animated-number-react";
import { format } from "d3-format";
import _ from "lodash";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import AccountSnapshot from "../accountSnapshot";
import { Chain } from "../chain";
import AccountCacheProvider from "../providers/accountCacheProvider";
import { MetaMaskProvider } from "../providers/metamaskProvider";
import { WalletToken } from "../token/walletToken";
import { any, isChainSupported, none } from "../util";
import TokenTableRow from "./tokenTableRow";

export type RoutePropsParams = { accountAddress: string };

interface AccountDetailsProps {
  accountCacheProvider: AccountCacheProvider;
  metaMaskProvider: MetaMaskProvider;
  accountSnapshot: AccountSnapshot;
  route: RouteComponentProps<RoutePropsParams>;
  chain: Chain;
}

interface AccountDetailsState {
  sortOrder: string;
  sortDirection: string;
  isLoadingTokens: boolean;
  walletTokens: WalletToken[];
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
    };
  }
  private async loadAccount(accountAddress: string) {
    const { accountCacheProvider, accountSnapshot, chain } = this.props;
    if (!isChainSupported(chain)) {
      console.log(`Unsupported chain ${Chain[chain]}`);
      return;
    } else {
      this.setState({ isLoadingTokens: true });
      const walletTokens = await accountSnapshot.loadAccount(accountAddress);
      accountCacheProvider.update(accountAddress, walletTokens);
      this.setState({
        walletTokens: walletTokens,
        isLoadingTokens: false,
      });
    }
  }

  async componentDidMount() {
    const { accountCacheProvider, accountSnapshot, route } = this.props;
    const accountAddress = route.match.params.accountAddress;
    const tokens = accountCacheProvider.get(accountAddress);
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
    const {
      walletTokens,
      isLoadingTokens,
      sortOrder,
      sortDirection,
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
      <>
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
      </>
    );
  }
}
