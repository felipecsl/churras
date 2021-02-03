import React from "react";
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
  ethBalance?: string;
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

class App extends React.Component<any, AppState> {
  relevantTokens = [
    "DAI",
    "LINK",
    "UNI",
    "AAVE",
    "SUSHI",
    "SNX",
    "COMP",
    "ZRX",
    "FTM",
    "MIR",
    "1INCH",
  ] as Array<string>;

  constructor(props: any) {
    super(props);

    this.state = {
      web3: undefined,
      accountAddress: undefined,
      isLoaded: false,
      ethBalance: undefined,
      allTokens: {},
      tokenBalances: {},
      tokenPrices: {},
    };
  }

  isMetamaskInstalled() {
    return typeof window.ethereum !== "undefined";
  }

  updateEthBalance(balance: any) {
    if (this.state.web3) {
      const ethBalance = this.state.web3.utils.fromWei(balance);
      this.setState({ ethBalance });
    } else {
      console.error("web3 is not yet initialized");
    }
  }

  updateTokenBalance(token: string, balance: any) {
    if (this.state.web3) {
      const { tokenBalances, web3 } = this.state;
      tokenBalances[token] = web3.utils.fromWei(balance);
      this.setState({ tokenBalances });
    } else {
      console.error("web3 is not yet initialized");
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
    this.relevantTokens.forEach((token: string) => {
      const tokenContractAddress = this.state.allTokens[token].address;
      const tokenPromise = new web3.eth.Contract(
        humanStandardTokenABI as any,
        tokenContractAddress
      );
      tokenPromise.methods
        .balanceOf(accountAddress)
        .call()
        .then((balance: any) => {
          this.updateTokenBalance(token, balance);
        });
      this.fetchTokenPrice(tokenContractAddress).then((price) => {
        const { tokenPrices } = this.state;
        tokenPrices[token] = price;
        this.setState({ tokenPrices });
      });
    });
  }

  async fetchTokenPrice(tokenAddress: string): Promise<string> {
    return fetch(
      `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${tokenAddress}&vs_currencies=usd`
    )
      .then((res) => res.json())
      .then((results) => {
        const price = Object.values(results)[0] as any;
        return price["usd"];
      });
  }

  componentDidMount() {
    fetch("https://api.1inch.exchange/v2.0/tokens")
      .then((res) => res.json())
      .then((results) => {
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
      });
  }

  renderTokenBalance(token: Token) {
    const { tokenBalances, tokenPrices } = this.state;
    const symbol = token.symbol;
    const balance = +tokenBalances[symbol];
    const positionSizeUSD = +tokenPrices[symbol] * balance;
    const currencyFormat = format("$,.2f");
    const amountFormat = format(".2f");
    if (balance) {
      return (
        <li key={symbol}>
          <strong>{symbol}</strong>: {amountFormat(balance)} (
          {currencyFormat(positionSizeUSD)})
        </li>
      );
    }
  }

  render() {
    if (!this.state) {
      return <div>Loading...</div>;
    }
    const { allTokens, ethBalance, accountAddress } = this.state;
    const amountFormat = format(".2f");
    return (
      <div className="App">
        <h1>DeFi account summary</h1>
        <h2>Account token balances</h2>
        {this.isMetamaskInstalled() && !this.state.web3 && (
          <button onClick={this.connectToMetaMask.bind(this)}>
            Connect to MetaMask
          </button>
        )}
        {accountAddress && <p>Address: {accountAddress}</p>}
        <ul>
          {ethBalance && (
            <li>
              <strong>ETH</strong>: {amountFormat(+ethBalance)}
            </li>
          )}
          {Object.values(allTokens).map(this.renderTokenBalance.bind(this))}
        </ul>
      </div>
    );
  }
}

export default App;
