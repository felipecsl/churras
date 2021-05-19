import React from "react";
import ThemeSelector from "./themeSelector";
import Logo from "../images/logo.svg";

export default class NavigationComponent extends React.Component<any, any> {
  render() {
    return (
      <nav className="bg-gray-800 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-4xl">
                <a href="https://churras.org">
                  <img
                    src={Logo}
                    alt="Churras logo"
                    className="fill-current filter dark:invert h-12"
                  />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-start space-x-4">
                  <a
                    href="/"
                    className="bg-gray-900 text-white px-3 py-3 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <ThemeSelector />
              </div>
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
          </div>
        </div>
      </nav>
    );
  }
}
