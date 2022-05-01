import React from "react";
import AccountCacheProvider from "../api/providers/accountCacheProvider";
import { MetaMaskProvider } from "../api/providers/metamaskProvider";
import { isChainSupported } from "../api/util";
import { navigateTo } from "../browserUtil";
import { Chain } from "../chain";
import FooterComponent from "./footerComponent";
import NavigationComponent from "./navigationComponent";

interface LandingProps {
  accountCacheProvider: AccountCacheProvider;
  metaMaskProvider: MetaMaskProvider;
  chain: Chain;
}

export default class ChurrasApp extends React.Component<LandingProps, any> {
  async connectToMetaMask() {
    const { accountCacheProvider, metaMaskProvider } = this.props;
    const accounts = await metaMaskProvider.requestAccounts();
    const accountAddress = accounts[0];
    accountCacheProvider.update(accountAddress, []);
    navigateTo(`#/address/${accountAddress}`);
  }

  render() {
    const { metaMaskProvider, chain } = this.props;
    const isMetaMaskInstalled = metaMaskProvider.isMetaMaskInstalled();
    const isUnsupportedChain = isMetaMaskInstalled && !isChainSupported(chain);
    const showConnectToMetamaskButton = isMetaMaskInstalled;
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
              {!isMetaMaskInstalled && (
                <p>
                  Sorry, you must first install{" "}
                  <a href="https://metamask.io/">Metamask</a> in order to use
                  Churras. <br />
                  Just refresh this page once you have it installed and you'll
                  be all set.
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
                  Sorry, the network you have currently selected in Metamask is
                  not yet supported.
                </p>
              )}
            </div>
          </div>
        </main>
        <FooterComponent />
      </div>
    );
  }
}
