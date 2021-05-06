import React from "react";
import { Chain } from "../chain";
import AccountCacheProvider from "../providers/accountCacheProvider";
import { MetaMaskProvider } from "../providers/metamaskProvider";
import { isChainSupported } from "../util";

interface LandingProps {
  accountCacheProvider: AccountCacheProvider;
  metaMaskProvider: MetaMaskProvider;
  chain: Chain;
}

export default class Landing extends React.Component<LandingProps, any> {
  async connectToMetaMask() {
    const { accountCacheProvider, metaMaskProvider } = this.props;
    const accounts = await metaMaskProvider.requestAccounts();
    const accountAddress = accounts[0];
    accountCacheProvider.update({ accountAddress, tokens: [] });
    window.location.href = `/address/${accountAddress}`;
  }

  render() {
    const { accountCacheProvider, metaMaskProvider, chain } = this.props;
    const { accountAddress } = accountCacheProvider.get();
    const isMetaMaskInstalled = metaMaskProvider.isMetaMaskInstalled();
    const isUnsupportedChain = isMetaMaskInstalled && !isChainSupported(chain);
    const showConnectToMetamaskButton = isMetaMaskInstalled && !accountAddress;
    return (
      <>
        {!isMetaMaskInstalled && (
          <p>
            Sorry, you must first install{" "}
            <a href="https://metamask.io/">Metamask</a> in order to use Churras.{" "}
            <br />
            Just refresh this page once you have it installed and you'll be all
            set.
          </p>
        )}
        {showConnectToMetamaskButton && (
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
        {isUnsupportedChain && (
          <p>
            Sorry, the network you have currently selected in Metamask is not
            yet supported.
          </p>
        )}
      </>
    );
  }
}
