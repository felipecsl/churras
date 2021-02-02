import React from "react";
import Web3 from "web3";
import humanStandardTokenABI from "./humanStandardTokenABI";
import "./App.css";

interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI: string;
}

interface AppState {
  web3: Web3;
  isLoaded: boolean;
  ethBalance: string;
  tokenBalances: Record<string, string>;
  allTokens: Record<string, Token>;
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

  isMetamaskInstalled() {
    return typeof window.ethereum !== "undefined";
  }

  updateEthBalance(balance: any) {
    this.setState({ ethBalance: this.state.web3.utils.fromWei(balance) });
  }

  updateTokenBalance(token: string, balance: any) {
    const tokenBalances = this.state.tokenBalances || {};
    tokenBalances[token] = this.state.web3.utils.fromWei(balance);
    this.setState({ tokenBalances });
  }

  async connectToMetaMask() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    console.log(`ETH account address: ${account}`);
    const web3 = new Web3(window.ethereum);
    this.setState({ web3 });
    web3.eth.getBalance(account).then(this.updateEthBalance.bind(this));
    this.relevantTokens.forEach((token: string) => {
      const tokenContractAddress = this.state.allTokens[token].address;
      const tokenPromise = new web3.eth.Contract(
        humanStandardTokenABI as any,
        tokenContractAddress
      );
      tokenPromise.methods
        .balanceOf(account)
        .call()
        .then((balance: any) => {
          this.updateTokenBalance(token, balance);
        });
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
    const tokenBalances = this.state.tokenBalances || {};
    const balance = tokenBalances[token.symbol];
    if (balance) {
      return (
        <li key={token.symbol}>
          {token.symbol}: {tokenBalances[token.symbol]}
        </li>
      );
    }
  }

  render() {
    if (!this.state) {
      return <div>Loading...</div>;
    }
    const { allTokens } = this.state;
    return (
      <div className="App">
        <h1>DeFi account summary</h1>
        <p>ETH balance: {this.state.ethBalance}</p>
        {this.isMetamaskInstalled() && (
          <button onClick={this.connectToMetaMask.bind(this)}>
            Connect to MetaMask
          </button>
        )}
        <ul>
          {Object.values(allTokens).map(this.renderTokenBalance.bind(this))}
        </ul>
      </div>
    );
  }
}

export default App;
