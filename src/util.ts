import { format } from "d3-format";
import { Chain } from "./chain";

export const percentFormat = format(".2%");
export const currencyFormat = format("($.2f");

export function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

export function ensure<T>(fn: () => T, errorMessage: string): T {
  return fn() ?? throwError(errorMessage);
}

export function ensureValue<T>(val: T | undefined, errorMessage: string): T {
  return val ?? throwError(errorMessage);
}

// returns true if the provided array is not empty
export function any<T>(arr: T[]): boolean {
  return Array.isArray(arr) && arr.length > 0;
}

export function none<T>(arr: T[]): boolean {
  return Array.isArray(arr) && arr.length === 0;
}

export function isChainSupported(chain: number): boolean {
  // For now only Ethereum Mainnet supported
  return chain === Chain.ETHEREUM_MAINNET || chain === Chain.BSC_MAINNET;
}

// to make jest tests happy
// https://stackoverflow.com/questions/54021037/how-to-mock-window-location-href-with-jest-vuejs
export function navigateTo(href: string) {
  window.location.href = href;
}

export function addressShorthand(address: string): string {
  const length = address.length;
  const prefix = address.substring(0, 6);
  const suffix = address.substring(length - 4, length);
  return `${prefix}...${suffix}`;
}
