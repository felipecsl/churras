import { format } from "d3-format";
import React from "react";
import { Network } from "../chain";
import { MIN_DISPLAY_AMOUNT } from "../constants";
import { WalletToken } from "../api/token/walletToken";

interface TokenTableRowProps {
  token: WalletToken;
}

export default class TokenTableRow extends React.Component<
  TokenTableRowProps,
  any
> {
  render() {
    const { token } = this.props;
    const symbol = token.symbol;
    // total token amount in USD
    const isEthereum = token.network === Network[Network.ETHEREUM];
    const network = isEthereum ? "Ethereum" : "BSC";
    const networkPillColor = isEthereum
      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400";
    const currencyFormat = format("$,.2f");
    const amountFormat = format(",.2f");
    // do not display row if amount is not more than $5 cents
    if (token.equity > MIN_DISPLAY_AMOUNT) {
      return (
        <tr key={symbol}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  <img
                    src={token.logoURI}
                    alt={token.name}
                    className="w-5 mr-2 float-left"
                  />
                  {symbol}
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${networkPillColor}`}
            >
              {network}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900 dark:text-gray-100">
              {amountFormat(token.balance)}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {currencyFormat(token.price)}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-100">
            {currencyFormat(token.equity)}
          </td>
        </tr>
      );
    } else {
      return null;
    }
  }
}
