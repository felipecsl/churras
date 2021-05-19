import React from "react";
import FooterComponent from "./components/footerComponent";
import ThemeSelector from "./components/themeSelector";
import Logo from "./images/logo.svg";

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 px-4 py-4">
          <div className="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
            <div className="flex justify-between items-center">
              <a
                href="https://churras.org"
                className="inline-block py-2 text-white text-xl font-bold flex"
              >
                <img
                  src={Logo}
                  alt="Churras logo"
                  className="fill-current filter dark:invert w-8 mr-2"
                />{" "}
                <span className="text-2xl">churras</span>
              </a>
              <div className="inline-block cursor-pointer md:hidden">
                <div
                  className="bg-gray-400 w-8 mb-2"
                  style={{ height: "2px" }}
                ></div>
                <div
                  className="bg-gray-400 w-8 mb-2"
                  style={{ height: "2px" }}
                ></div>
                <div
                  className="bg-gray-400 w-8"
                  style={{ height: "2px" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="hidden md:block">
                <a
                  href="#"
                  className="inline-block py-1 md:py-4 text-gray-100 mr-6 font-bold"
                >
                  How it Works
                </a>
                <a
                  href="#"
                  className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100"
                >
                  Blog
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex mt-4 my-2 items-center md:ml-6 hidden">
                <ThemeSelector />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 md:overflow-hidden">
          <div className="px-4 py-20 md:py-4">
            <div className="md:max-w-6xl md:mx-auto">
              <div className="md:flex md:flex-wrap">
                <div className="md:w-1/2 text-center md:text-left md:pt-16">
                  <h1 className="font-bold text-2xl md:text-5xl md:leading-tight mb-4 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                    The cross-blockchain developer API
                  </h1>
                  <p className="text-indigo-200 md:text-xl md:pr-48">
                    Build dApps in hours instead of months with our easy to use
                    API. Manage your crypto wallets, tokens and transactions.
                  </p>

                  <a
                    href="#"
                    className="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-gray-700 font-semibold bg-yellow-500 hover:bg-yellow-600 rounded-lg shadow"
                  >
                    Get Started
                  </a>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="hidden md:block">
                    <div
                      className="-ml-24 -mb-40 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                      style={{ transform: "rotate(-8deg)" }}
                    >
                      <div className="bg-indigo-800 mx-auto rounded-lg px-2 pb-2 relative mb-8">
                        <div className="mb-1">
                          <span
                            className="w-1 h-1 bg-indigo-100 rounded-full inline-block"
                            style={{ marginRight: "1px" }}
                          ></span>
                          <span
                            className="w-1 h-1 bg-indigo-100 rounded-full inline-block"
                            style={{ marginRight: "1px" }}
                          ></span>
                          <span className="w-1 h-1 bg-indigo-100 rounded-full inline-block"></span>
                        </div>
                        <div className="h-1 w-12 bg-indigo-100 rounded mb-1"></div>
                        <div className="h-1 w-10 bg-indigo-100 rounded mb-2"></div>
                        <div className="flex">
                          <div className="w-6 h-3 rounded bg-indigo-100 mr-1"></div>
                          <div className="w-6 h-3 rounded bg-indigo-100"></div>
                        </div>
                        <div className="-mr-2 -mb-4 absolute bottom-0 right-0 h-16 w-10 rounded-lg bg-green-700 border-2 border-white"></div>
                        <div className="w-2 h-2 rounded-full bg-green-800 mx-auto absolute bottom-0 right-0 mr-2 -mb-2 z-10 border-2 border-white"></div>
                      </div>
                      <div className="text-gray-800 text-center font-medium">
                        Token <br />
                        Transfers
                      </div>
                    </div>

                    <div
                      className="ml-24 mb-16 absolute left-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-6 py-8"
                      style={{ transform: "rotate(-8deg)", zIndex: 2 }}
                    >
                      <div className="bg-indigo-800 mx-auto rounded-lg relative mb-8 py-2 w-20 border-2 border-white">
                        <div
                          className="h-8 bg-green-700 w-8 rounded absolute left-0 top-0 -mt-3 ml-4"
                          style={{ transform: "rotate(-45deg)", zIndex: -1 }}
                        ></div>
                        <div
                          className="h-8 bg-green-800 w-8 rounded absolute left-0 top-0 -mt-3 ml-8"
                          style={{ transform: "rotate(-12deg)", zIndex: -2 }}
                        ></div>

                        <div className="flex items-center justify-center h-6 bg-indigo-800 w-6 rounded-l-lg ml-auto border-4 border-white -mr-1">
                          <div className="h-2 w-2 rounded-full bg-indigo-800 border-2 border-white"></div>
                        </div>

                        <div className="w-8 h-8 bg-green-700 border-4 border-white rounded-full -ml-3 -mb-5"></div>
                      </div>

                      <div className="text-gray-800 text-center font-medium">
                        Wallet <br />
                        Services
                      </div>
                    </div>

                    <div
                      className="ml-32 absolute left-0 bottom-0 w-48 bg-white rounded-lg shadow-lg px-10 py-8"
                      style={{
                        transform: "rotate(-8deg)",
                        zIndex: 2,
                        marginBottom: "-220px",
                      }}
                    >
                      <div className="bg-indigo-800 mx-auto rounded-lg pt-4 mb-16 relative">
                        <div className="h-4 bg-white"></div>

                        <div className="text-right my-2 pb-1">
                          <div className="inline-flex w-3 h-3 rounded-full bg-white -mr-2"></div>
                          <div className="inline-flex w-3 h-3 rounded-full bg-indigo-800 border-2 border-white mr-2"></div>
                        </div>

                        <div className="-ml-4 -mb-6 absolute left-0 bottom-0 w-16 bg-green-700 mx-auto rounded-lg pb-2 pt-3">
                          <div className="h-2 bg-white mb-2"></div>
                          <div className="h-2 bg-white w-6 ml-auto rounded mr-2"></div>
                        </div>
                      </div>

                      <div className="text-gray-800 text-center font-medium">
                        Transaction <br />
                        History
                      </div>
                    </div>

                    <div
                      className="mt-10 w-full absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden shadow-lg"
                      style={{
                        transform: "rotate(-8deg)",
                        marginRight: "-250px",
                        zIndex: 1,
                      }}
                    >
                      <div
                        className="w-32 bg-gray-200"
                        style={{ height: "560px" }}
                      ></div>
                      <div className="flex-1 p-6">
                        <h2 className="text-lg text-gray-700 font-bold mb-3">
                          Wallet Dashboard
                        </h2>
                        <div className="flex mb-5">
                          <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                            <div className="p-1 rounded-full bg-gray-300"></div>
                          </div>
                          <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                            <div className="p-1 rounded-full bg-gray-300"></div>
                          </div>
                          <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                            <div className="p-1 rounded-full bg-gray-300"></div>
                          </div>
                          <div className="w-16 rounded-full bg-gray-100 py-2 px-4">
                            <div className="p-1 rounded-full bg-gray-300"></div>
                          </div>
                        </div>

                        <div className="flex flex-wrap -mx-4 mb-5">
                          <div className="w-1/3 px-4">
                            <div className="h-40 rounded-lg bg-white shadow-lg p-6">
                              <div className="w-16 h-16 rounded-full bg-gray-200 mb-6"></div>
                              <div className="h-2 w-16 bg-gray-200 mb-2 rounded-full"></div>
                              <div className="h-2 w-10 bg-gray-200 rounded-full"></div>
                            </div>
                          </div>
                          <div className="w-1/3 px-4">
                            <div className="h-40 rounded-lg bg-white shadow-lg p-6">
                              <div className="w-16 h-16 rounded-full bg-gray-200 mb-6"></div>
                              <div className="h-2 w-16 bg-gray-200 mb-2 rounded-full"></div>
                              <div className="h-2 w-10 bg-gray-200 rounded-full"></div>
                            </div>
                          </div>
                          <div className="w-1/3 px-4">
                            <div className="h-40 rounded-lg bg-white shadow-lg p-6">
                              <div className="w-16 h-16 rounded-full bg-gray-200 mb-6"></div>
                              <div className="h-2 w-16 bg-gray-200 mb-2 rounded-full"></div>
                              <div className="h-2 w-10 bg-gray-200 rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        <h2 className="text-lg text-gray-700 font-bold mb-3">
                          Latest Transactions
                        </h2>

                        <div className="w-full flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                          <div className="w-1/3">
                            <div className="flex">
                              <div className="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                              <div>
                                <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="w-16 rounded-full bg-green-100 py-2 px-4 mx-auto">
                              <div className="p-1 rounded-full bg-green-200"></div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="h-2 w-10 bg-gray-100 rounded-full mx-auto"></div>
                          </div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                          <div className="w-1/3">
                            <div className="flex">
                              <div className="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                              <div>
                                <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="w-16 rounded-full bg-orange-100 py-2 px-4 mx-auto">
                              <div className="p-1 rounded-full bg-orange-200"></div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="h-2 w-16 bg-gray-100 rounded-full mx-auto"></div>
                          </div>
                        </div>
                        <div className="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                          <div className="w-1/3">
                            <div className="flex">
                              <div className="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                              <div>
                                <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                                <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="w-16 rounded-full bg-blue-100 py-2 px-4 mx-auto">
                              <div className="p-1 rounded-full bg-blue-200"></div>
                            </div>
                          </div>
                          <div className="w-1/3">
                            <div className="h-2 w-8 bg-gray-100 rounded-full mx-auto"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-full absolute left-0 bottom-0 ml-1"
                      style={{
                        transform: "rotate(-8deg)",
                        zIndex: 1,
                        marginBottom: "-360px",
                      }}
                    >
                      <div className="grid--gray h-48 w-48"></div>
                    </div>
                  </div>
                  <div className="md:hidden w-full absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden shadow">
                    <div className="h-4 bg-gray-200 absolute top-0 left-0 right-0 rounded-t-lg flex items-center">
                      <span className="h-2 w-2 rounded-full bg-red-500 inline-block mr-1 ml-2"></span>
                      <span className="h-2 w-2 rounded-full bg-orange-400 inline-block mr-1"></span>
                      <span className="h-2 w-2 rounded-full bg-green-500 inline-block mr-1"></span>
                    </div>
                    <div
                      className="w-32 bg-gray-100 px-2 py-8"
                      style={{ height: "340px" }}
                    >
                      <div className="h-2 w-16 bg-gray-300 rounded-full mb-4"></div>
                      <div className="flex items-center mb-4">
                        <div className="h-5 w-5 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
                        <div>
                          <div className="h-2 w-10 bg-gray-300 rounded-full"></div>
                        </div>
                      </div>
                      <div className="h-2 w-16 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-2 w-10 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-2 w-6 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-2 w-16 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-2 w-10 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-2 w-20 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-2 w-6 bg-gray-200 rounded-full mb-2"></div>
                    </div>
                    <div className="flex-1 px-4 py-8">
                      <h2 className="text-xs text-gray-700 font-bold mb-1">
                        Popular Payments
                      </h2>
                      <div className="flex mb-5">
                        <div className="p-2 w-12 rounded-full bg-gray-100 mr-2"></div>
                        <div className="p-2 w-12 rounded-full bg-gray-100 mr-2"></div>
                        <div className="p-2 w-12 rounded-full bg-gray-100 mr-2"></div>
                        <div className="p-2 w-12 rounded-full bg-gray-100 mr-2"></div>
                      </div>
                      <div className="flex flex-wrap -mx-2 mb-5">
                        <div className="w-1/3 px-2">
                          <div className="p-3 rounded-lg bg-white shadow">
                            <div className="w-6 h-6 rounded-full bg-gray-200 mb-2"></div>
                            <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                            <div className="h-2 w-6 bg-gray-200 rounded-full"></div>
                          </div>
                        </div>
                        <div className="w-1/3 px-2">
                          <div className="p-3 rounded-lg bg-white shadow">
                            <div className="w-6 h-6 rounded-full bg-gray-200 mb-2"></div>
                            <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                            <div className="h-2 w-6 bg-gray-200 rounded-full"></div>
                          </div>
                        </div>
                        <div className="w-1/3 px-2">
                          <div className="p-3 rounded-lg bg-white shadow">
                            <div className="w-6 h-6 rounded-full bg-gray-200 mb-2"></div>
                            <div className="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                            <div className="h-2 w-6 bg-gray-200 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <h2 className="text-xs text-gray-700 font-bold mb-1">
                        Popular Payments
                      </h2>
                      <div className="w-full flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3">
                        <div className="w-1/3">
                          <div className="flex">
                            <div className="h-5 w-5 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                            <div>
                              <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                              <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="w-16 rounded-full bg-green-100 py-2 px-4 mx-auto">
                            <div className="p-1 rounded-full bg-green-200"></div>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="h-2 w-10 bg-gray-100 rounded-full mx-auto"></div>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-between items-center py-3">
                        <div className="w-1/3">
                          <div className="flex">
                            <div className="h-5 w-5 rounded-full bg-gray-200 mr-3 flex-shrink-0"></div>
                            <div>
                              <div className="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                              <div className="h-2 w-10 bg-gray-100 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="w-16 rounded-full bg-orange-100 py-2 px-4 mx-auto">
                            <div className="p-1 rounded-full bg-orange-200"></div>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="h-2 w-16 bg-gray-100 rounded-full mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mr-3 md:hidden absolute right-0 bottom-0 w-40 bg-white rounded-lg shadow-lg px-10 py-6"
                    style={{ zIndex: 2, marginBottom: "-380px" }}
                  >
                    <div className="bg-indigo-800 mx-auto rounded-lg w-20 pt-3 mb-12 relative">
                      <div className="h-3 bg-white"></div>

                      <div className="text-right my-2">
                        <div className="inline-flex w-3 h-3 rounded-full bg-white -mr-2"></div>
                        <div className="inline-flex w-3 h-3 rounded-full bg-indigo-800 border-2 border-white mr-2"></div>
                      </div>

                      <div className="-ml-4 -mb-6 absolute left-0 bottom-0 w-16 bg-green-700 mx-auto rounded-lg pb-2 pt-3">
                        <div className="h-2 bg-white mb-2"></div>
                        <div className="h-2 bg-white w-6 ml-auto rounded mr-2"></div>
                      </div>
                    </div>

                    <div className="text-gray-800 text-center text-sm">
                      Payment for <br />
                      Internet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="fill-current text-white hidden md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path fillOpacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
          </svg>
        </div>
        <div className="px-4 py-20 md:py-4 dark:bg-white">
          <div className="md:max-w-6xl md:mx-auto flex pb-20">
            <div className="md:flex md:flex-wrap w-1/2 pr-20">
              <header className="text-center md:text-left">
                <h2 className="text-xl mb-5 font-semibold text-yellow-600">
                  When Stripe meets crypto
                </h2>
                <h1 className="text-3xl font-bold mb-7">
                  Try our simple and intuitive API
                </h1>
              </header>
              <p className="text-gray-500 text-lg font-medium">
                Stop wasting hours figuring out how to call a contract method, finding the exact ABI signature,
                parsing raw logs and connecting to nodes directly. Churras abstracts away that complexity
                from you, so you can focus on what matters: building your application. We obsess over
                those details so you don't have to.
              </p>
            </div>
            <div className="rounded-xl bg-gray-800 w-1/2 shadow-lg font-mono text-white text-sm">
              <div className="h-9 bg-gray-700 rounded-t-xl flex">
                <div className="bg-red-500 w-3 rounded-full my-3 ml-5 mr-2" />
                <div className="bg-yellow-400 w-3 rounded-full my-3 mr-2" />
                <div className="bg-green-400 w-3 rounded-full my-3" />
              </div>
              <div className="py-7 flex">
                <div className="w-5 px-5 text-gray-500">
                  <div className="">1</div>
                  <div className="">2</div>
                  <div className="">3</div>
                  <div className="">4</div>
                  <div className="">5</div>
                  <div className="">~</div>
                  <div className="">~</div>
                  <div className="">~</div>
                  <div className="">~</div>
                  <div className="">~</div>
                </div>
                <code>
                  <span className="text-blue-400">import</span> ChurrasClient <span className="text-blue-400">from</span> <span className="text-yellow-500">"Churras"</span>;<br/><br/>
                  <span className="text-blue-400">const</span> address = <span className="text-yellow-500">"0xd8da6bf26964af9d7eed9e03e53415d37aa96045"</span>;<br/>
                  <span className="text-blue-400">const</span> apiClient = <span className="text-blue-400">new</span> ChurrasClient();<br/>
                  <span className="text-blue-400">const</span> tokens = <span className="text-blue-400">await</span> apiClient.accountTokens(address);
                </code>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}
