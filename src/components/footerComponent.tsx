import React from "react";
import DiscordLogo from "../images/discord.svg";
import GithubLogo from "../images/github.svg";
import Logo from "../images/logo.svg";
import TwitterLogo from "../images/twitter.svg";

export default class FooterComponent extends React.Component<any, any> {
  render() {
    return (
      <footer className="footer bg-white dark:text-gray-300 dark:bg-gray-700 relative pt-1 border-b-2 border-gray-700">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 grid grid-cols-2 justify-items-start">
              <div>
                <div className="my-2 text-5xl">
                  <a href="https://churras.org">
                    <img
                      src={Logo}
                      alt="Churras logo"
                      width="64"
                      height="64"
                      className="fill-current filter dark:invert"
                    />
                  </a>
                </div>
                <div className="my-5">
                  <p className="leading-relaxed">
                    Churras is a comprehensive and reliable API for manipulating
                    <br />
                    crypto wallets. It currently supports both Ethereum and{" "}
                    <br />
                    Binance Smart Chain. Track your account balance, tokens,{" "}
                    <br />
                    transactions, yields and be your own bank.
                  </p>
                </div>
                <div className="my-5 flex">
                  <a
                    href="https://github.com/felipecsl/churras"
                    target="_blank"
                    rel="noreferrer"
                    className="flex mr-4"
                  >
                    <img
                      src={GithubLogo}
                      alt="Churras Github"
                      className="fill-current filter dark:invert"
                    />
                  </a>
                  <a
                    href="https://twitter.com/churras_org"
                    target="_blank"
                    rel="noreferrer"
                    className="flex mr-4"
                  >
                    <img
                      src={TwitterLogo}
                      alt="Churras Twitter"
                      className="fill-current filter dark:invert"
                    />
                  </a>
                  <a
                    href="https://discord.gg/gqvNGw25XF"
                    target="_blank"
                    rel="noreferrer"
                    className="flex mr-4"
                  >
                    <img
                      src={DiscordLogo}
                      alt="Churras Discord"
                      className="fill-current filter dark:invert"
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-gray-200 uppercase my-8">
                  About
                </div>
                <div className="my-4">
                  <a href="https://docs.churras.org/" className="text-md">
                    Documentation
                  </a>
                </div>
                <div className="my-4">
                  <a
                    href="https://github.com/felipecsl/churras"
                    className="text-md"
                  >
                    Source Code
                  </a>
                </div>
                <div className="my-4">
                  <a href="mailto:felipe.lima@gmail.com" className="text-md">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-16 border-t-2 border-gray-200 dark:border-gray-600 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm font-bold mb-2">Built with ❤️ and ☕️ from around the world</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
