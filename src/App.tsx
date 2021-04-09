import React, { RefObject } from "react";
import Web3 from "web3";
import humanStandardTokenABI from "./humanStandardTokenABI";
import { format } from "d3-format";
import "./App.css";

interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI: string;
}

interface AppState {
  web3?: Web3;
  accountAddress?: string;
  isLoaded: boolean;
  // keys are the token names
  allTokens: Record<string, Token>;
  tokenBalances: Record<string, string>;
  tokenPrices: Record<string, string>;
}

declare global {
  interface Window {
    ethereum: any;
  }
}

declare global {
  interface Window {
    runMonteCarloSimulation: (
      successRate: number,
      totalNumbers: number,
      totalSimulations: number
    ) => string;
  }
}

// tokens with total USD amount below this threshold will not be displayed
const MIN_DISPLAY_AMOUNT = 0.05;

/**
 * ** Binomial distributions **
 * Returns the most likely outcome between [0..totalNumbers] of the provided `successRate` (s) of `totalNumbers`
 * by running a monte carlo simulator with total simulations `totalSimulations`
 *(0-1)
 */
window.runMonteCarloSimulation = function (
  successRate: number,
  totalNumbers: number,
  totalSimulations: number
): string {
  const determineOutcome = (_: number) => {
    if (Math.random() >= successRate) {
      return 0;
    } else {
      return 1;
    }
  };
  const sum = (arr: Array<number>) =>
    arr.reduce((acc: number, v: number, i, array) => {
      return acc + v;
    }, 0);
  const totalPositives = () => sum(numbersRange.map(determineOutcome));
  const numbersRange = Array.from(Array(totalNumbers).keys());
  const simulationsRange = Array.from(Array(totalSimulations).keys());
  const max = (arr: Array<number>) => {
    return Math.max.apply(null, arr);
  };

  const outcomesCount = {} as Record<number, number>;
  simulationsRange.forEach(() => {
    const positives = totalPositives();
    const curr = outcomesCount[positives];
    outcomesCount[positives] = (curr || 0) + 1;
  });
  console.log(outcomesCount);
  const maxOccurrences = max(Object.values(outcomesCount));
  for (const [num, ocurr] of Object.entries(outcomesCount)) {
    if (+ocurr === maxOccurrences) {
      return `most likely outcome: ${num}; ocurrences ${maxOccurrences}/${totalSimulations} (${format(
        ".2f"
      )((maxOccurrences / totalSimulations) * 100)}%)`;
    }
  }
  return "";
};

const TOKEN_LIST_API_ENDPOINT = "https://api.1inch.exchange/v2.0/tokens";
const ETH_PRICE_API_ENDPOINT =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

class App extends React.Component<any, AppState> {
  canvas: RefObject<HTMLCanvasElement>;

  constructor(props: any) {
    super(props);
    this.canvas = React.createRef();

    this.state = {
      web3: undefined,
      accountAddress: undefined,
      isLoaded: false,
      allTokens: {},
      tokenBalances: {},
      tokenPrices: {},
    };
  }

  isMetamaskInstalled() {
    return typeof window.ethereum !== "undefined";
  }

  async updateEthBalance(balance: any) {
    if (this.state.web3) {
      const { tokenPrices, tokenBalances, allTokens } = this.state;
      tokenBalances["ETH"] = this.state.web3.utils.fromWei(balance);
      tokenPrices["ETH"] = await this.fetchEthPrice();
      allTokens["ETH"] = {
        symbol: "ETH",
        name: "Ehereum",
        address: "",
        decimals: 18,
        logoURI: "",
      };
      this.setState({ tokenPrices, tokenBalances, allTokens });
    } else {
      console.error("web3 is not yet initialized");
    }
  }

  updateTokenBalance(token: string, balance: any) {
    if (this.state.web3) {
      const tokenBalance = this.state.web3.utils.fromWei(balance);
      if (+tokenBalance > 0) {
        const { tokenBalances, allTokens } = this.state;
        tokenBalances[token] = tokenBalance;
        // TODO: Batch these one-off calls into a single API call with all tokens with balance > 0
        this.fetchTokenPrices([allTokens[token].address]);
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
      humanStandardTokenABI as any,
      tokenContractAddress
    );
    const balance = await tokenPromise.methods.balanceOf(accountAddress).call();
    this.updateTokenBalance(token.symbol, balance);
  }

  async connectToMetaMask() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const accountAddress = accounts[0];
    const web3 = new Web3(window.ethereum);
    this.setState({ web3, accountAddress });
    web3.eth.getBalance(accountAddress).then(this.updateEthBalance.bind(this));
    Object.values(this.state.allTokens).forEach((token: Token) => {
      this.fetchTokenBalance(web3, token);
    });
  }

  findTokenByAddress(tokenAddress: string): Token | undefined {
    const { allTokens } = this.state;
    return Object.values(allTokens).find(
      (t: Token) => t.address === tokenAddress
    );
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
    Object.entries(results).forEach(
      ([tokenAddress, priceObj]: [string, any]) => {
        const token = this.findTokenByAddress(tokenAddress);
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
    const res = await fetch(TOKEN_LIST_API_ENDPOINT);
    const results = (await res.json()) as any;
    const allTokens = {} as Record<string, Token>;
    Object.values(results.tokens).forEach(
      (token: any, i: number, array: any) => {
        allTokens[token.symbol] = token as Token;
      }
    );
    this.setState({
      isLoaded: true,
      allTokens: allTokens,
    });
    this.renderBackground();
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
          <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
            {symbol}
          </td>
          <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
            {amountFormat(balance)}
          </td>
          <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
            {currencyFormat(price)}
          </td>
          <td className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
            {currencyFormat(equity)}
          </td>
        </tr>
      );
    }
  }

  renderBackground() {
    // This is kinda slow but looks cool :)
    const canvas = this.canvas.current;
    const context = canvas?.getContext("2d");
    if (context && canvas) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      for (let x = 0; x < width / 2; x++) {
        for (let y = 0; y < height / 2; y++) {
          const r = (255 * x) / width;
          const g = (255 * y) / height;
          const b = 0;
          context.fillStyle = `rgb(${r}, ${g}, ${b})`;
          context.fillRect(x * 2, y * 2, 2, 2);
          if ((x ^ y) % 7) {
            context.fillStyle = `rgb(0, 0, 0)`;
            context.fillRect(x * 2, y * 2, 2, 2);
          }
        }
      }
    }
  }

  sortTokenList(): Token[] {
    const { allTokens } = this.state;
    const sortedTokens = Object.values(allTokens);
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
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <canvas ref={this.canvas} style={{ position: "absolute" }} />
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl bg-gray-400"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Deephy
                  </h1>
                  <p>
                    Get a detailed balance of your DeFi tokens and an account
                    overview. Click the button below to get started.
                  </p>
                  {this.isMetamaskInstalled() && !this.state.web3 && (
                    <button
                      onClick={this.connectToMetaMask.bind(this)}
                      className="text-white mt-auto bg-emerald-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex"
                    >
                      Connect to MetaMask
                    </button>
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
                      <table className="table-auto">
                        <thead className="bg-indigo-200">
                          <tr>
                            <th className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                              Token
                            </th>
                            <th className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                              Amount
                            </th>
                            <th className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                              Current price
                            </th>
                            <th className="border border-light-blue-500 px-4 py-2 text-light-blue-600 font-medium">
                              Equity
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {sortedTokens.map(this.renderTokenBalance.bind(this))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
