import React, { RefObject } from "react";

export default class ThemeSelector extends React.Component<any, any> {
  private darkModeToggle: RefObject<SVGSVGElement>;
  private lightModeToggle: RefObject<SVGSVGElement>;

  constructor(props: any) {
    super(props);
    this.darkModeToggle = React.createRef();
    this.lightModeToggle = React.createRef();
  }

  toggleOption() {
    this.updateClassList();
  }

  private isSetToDarkMode(): boolean {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)")?.matches)
    );
  }

  private updateClassList() {
    const darkModeToggle = this.darkModeToggle.current?.classList;
    const lightModeToggle = this.lightModeToggle.current?.classList;
    const isCurrentlySetToDarkMode = darkModeToggle?.contains("on");
    if (isCurrentlySetToDarkMode) {
      darkModeToggle?.add("off");
      darkModeToggle?.remove("on");
      lightModeToggle?.add("on");
      lightModeToggle?.remove("off");
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      darkModeToggle?.add("on");
      darkModeToggle?.remove("off");
      lightModeToggle?.add("off");
      lightModeToggle?.remove("on");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  }

  componentDidMount() {
    if (this.isSetToDarkMode()) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  render() {
    const isSetToDarkMode = this.isSetToDarkMode();
    return (
      <div className="themeselector-wrapper">
        <svg
          viewBox="0 0 24 24"
          color="textDisabled"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
          className={`cursor-pointer ${isSetToDarkMode ? "off" : "on"}`}
          ref={this.lightModeToggle}
          onClick={this.toggleOption.bind(this)}
        >
          <path d="M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z"></path>
          <path d="M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z"></path>
          <path d="M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z"></path>
          <path d="M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z"></path>
          <path d="M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z"></path>
          <path d="M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z"></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          ></path>
          <path d="M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z"></path>
          <path d="M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z"></path>
        </svg>
        <div color="textDisabled" className="divider">
          /
        </div>
        <svg
          viewBox="0 0 24 24"
          color="text"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
          className={`cursor-pointer ${isSetToDarkMode ? "on" : "off"}`}
          ref={this.darkModeToggle}
          onClick={this.toggleOption.bind(this)}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z"
          ></path>
        </svg>
      </div>
    );
  }
}
