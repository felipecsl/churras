import React from "react";
import Web3 from "web3";
import { format } from "d3-format";
import "./App.css";
import { utils } from "ethers";
import Token, { ETH_TOKEN } from "./token";
import { DEFAULT_PROVIDER, MIN_DISPLAY_AMOUNT } from "./constants";
import AccountSwaps from "./transaction/accountSwaps";
import TransactionsLoader from "./transaction/transactionsLoader";
import { RealEtherscanApiClient } from "./etherscanApiClient";
import UniswapTransactionParser from "./transaction/uniswapTransactionParser";
import { ALL_TOKENS } from "./tokenList";

interface AppState {
  web3?: Web3;
  accountAddress?: string;
  isLoaded: boolean;
  tokensByAddress: Record<string, Token>;
  // keys are the token names
  tokensByName: Record<string, Token>;
  tokenBalances: Record<string, string>;
  tokenPrices: Record<string, string>;
}

declare global {
  interface Window {
    ethereum: any;
  }
}

const ETH_PRICE_API_ENDPOINT =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      web3: undefined,
      accountAddress: undefined,
      isLoaded: false,
      tokensByAddress: {},
      tokensByName: {},
      tokenBalances: {},
      tokenPrices: {},
    };
  }

  isMetamaskInstalled() {
    return typeof window.ethereum !== "undefined";
  }

  async updateEthBalance(balance: any) {
    if (this.state.web3) {
      const { tokenPrices, tokenBalances, tokensByName } = this.state;
      tokenBalances["ETH"] = this.state.web3.utils.fromWei(balance);
      tokenPrices["ETH"] = await this.fetchEthPrice();
      tokensByName["ETH"] = ETH_TOKEN;
      this.setState({ tokenPrices, tokenBalances, tokensByName });
    } else {
      console.error("web3 is not yet initialized");
    }
  }

  updateTokenBalance(token: string, balance: any) {
    if (this.state.web3) {
      const tokenBalance = this.state.web3.utils.fromWei(balance);
      if (+tokenBalance > 0) {
        const { tokenBalances, tokensByName } = this.state;
        tokenBalances[token] = tokenBalance;
        // TODO: Batch these one-off calls into a single API call with all tokens with balance > 0
        this.fetchTokenPrices([tokensByName[token].address]);
        this.setState({ tokenBalances });
      }
    } else {
      console.error("web3 is not yet initialized");
    }
  }

  async fetchTokenBalance(web3: Web3, token: Token) {
    const { accountAddress } = this.state;
    const tokenContractAddress = token.address;
    const tokenPromise = new web3.eth.Contract(
      [
        {
          constant: true,
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ],
      tokenContractAddress
    );
    const balance = await tokenPromise.methods.balanceOf(accountAddress).call();
    this.updateTokenBalance(token.symbol, balance);
  }

  async loadAccountTransactions() {
    if (this.state.accountAddress) {
      const transactionsLoader = new TransactionsLoader(
        new RealEtherscanApiClient()
      );
      const uniswapTransactionParser = new UniswapTransactionParser(
        ALL_TOKENS,
        DEFAULT_PROVIDER
      );
      const accountSwaps = new AccountSwaps(
        transactionsLoader,
        uniswapTransactionParser
      );
      console.log(
        await accountSwaps.loadAccountSwaps(this.state.accountAddress)
      );
    }
  }

  async connectToMetaMask() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const accountAddress = accounts[0];
    const web3 = new Web3(window.ethereum);
    this.setState({ web3, accountAddress });
    web3.eth.getBalance(accountAddress).then(this.updateEthBalance.bind(this));
    Object.values(this.state.tokensByName).forEach((token: Token) => {
      this.fetchTokenBalance(web3, token);
    });
  }

  async fetchEthPrice(): Promise<string> {
    const res = await fetch(ETH_PRICE_API_ENDPOINT);
    const results = await res.json();
    return results["ethereum"]["usd"];
  }

  async fetchTokenPrices(tokenAddresses: Array<string>) {
    const addressList = tokenAddresses.join(",");
    const apiUrl = `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${addressList}&vs_currencies=usd`;
    const res = await fetch(apiUrl);
    const results = await res.json();
    const tokens = Object.values(this.state.tokensByName);
    Object.entries(results).forEach(
      ([tokenAddress, priceObj]: [string, any]) => {
        const token = tokens.find((t: Token) => t.address === tokenAddress);
        if (token) {
          const price = priceObj["usd"];
          const { tokenPrices } = this.state;
          tokenPrices[token.symbol] = price;
          this.setState({ tokenPrices });
        } else {
          console.error(`Unable to find token with address ${tokenAddress}`);
        }
      }
    );
  }

  async componentDidMount() {
    const tokensByName = {} as Record<string, Token>;
    Object.values(ALL_TOKENS).forEach((token: any, i: number, array: any) => {
      tokensByName[token.symbol] = token as Token;
    });
    this.setState({
      isLoaded: true,
      tokensByAddress: ALL_TOKENS,
      tokensByName: tokensByName,
    });
  }

  /** Returns the amount of tokens held for the provided `symbol` */
  tokenBalance(symbol: string): number | undefined {
    const { tokenBalances } = this.state;
    return +tokenBalances[symbol];
  }

  /** Returns the current USD price for the provided `symbol` */
  tokenPrice(symbol: string): number | undefined {
    const { tokenPrices } = this.state;
    return +tokenPrices[symbol];
  }

  /** Returns the token whose address matches `address` or undefined */
  findTokenByContractAddress(address: string): Token | undefined {
    const { tokensByName } = this.state;
    const normalizedAddress = utils.getAddress(address);
    return Object.values(tokensByName).find(
      (t: Token) => utils.getAddress(t.address) === normalizedAddress
    );
  }

  /* Returns the total account size in USD */
  determineUSDAccountSize(): number {
    const { tokenBalances, tokenPrices } = this.state;
    return Object.entries(tokenBalances).reduce(
      (acc: number, [symbol, balance]: [string, string]) => {
        return acc + +tokenPrices[symbol] * +balance;
      },
      0
    );
  }

  renderTokenBalance(token: Token) {
    const symbol = token.symbol;
    const price = this.tokenPrice(symbol) || 0;
    const balance = this.tokenBalance(symbol) || 0;
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
                <div className="text-sm font-medium text-gray-900">
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
            <div className="text-sm text-gray-900">{amountFormat(balance)}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-medium text-gray-900">
              {currencyFormat(price)}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {currencyFormat(equity)}
          </td>
        </tr>
      );
    }
  }

  sortTokenList(): Token[] {
    const { tokensByName } = this.state;
    const sortedTokens = Object.values(tokensByName);
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
    const { accountAddress, tokenBalances } = this.state;
    const currencyFormat = format("$,.2f");
    const accountSize = this.determineUSDAccountSize();
    const sortedTokens = this.sortTokenList();
    return (
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="/"
                      className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </a>
                    {/* <a
                      href="/transactions"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Transactions
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
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
              {/* <a
                href="/transactions"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Transactions
              </a> */}
            </div>
          </div>
        </nav>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              {this.isMetamaskInstalled() && !this.state.web3 && (
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
              {accountAddress && (
                <p>
                  Address:
                  <br />
                  <code>
                    <small>{accountAddress}</small>
                  </code>
                </p>
              )}
              {accountSize > 0 && (
                <p className="font-semibold text-2xl pb-3">
                  {currencyFormat(accountSize)}
                </p>
              )}
              {Object.values(tokenBalances).length > 0 && (
                <div>
                  <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Token
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Quantity
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Price
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Equity
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {sortedTokens.map(
                                this.renderTokenBalance.bind(this)
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
