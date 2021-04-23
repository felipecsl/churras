import React from "react";
import { WalletToken } from "../token/walletToken";
import { format } from "d3-format";
import { MIN_DISPLAY_AMOUNT } from "../constants";

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
    const price = +token.price;
    const balance = +token.balance;
    // total token amount in USD
    const equity = price * balance;
    const currencyFormat = format("$,.2f");
    const amountFormat = format(".2f");
    // do not display row if amount is not more than $5 cents
    if (equity > MIN_DISPLAY_AMOUNT) {
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
            <div className="text-sm text-gray-900 dark:text-gray-100">
              {amountFormat(balance)}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {currencyFormat(price)}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-100">
            {currencyFormat(equity)}
          </td>
        </tr>
      );
    } else {
      return null;
    }
  }
}
