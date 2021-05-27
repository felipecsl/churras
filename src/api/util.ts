import { format } from "d3-format";
import debug from "debug";
import fetch from "node-fetch";
import { Chain } from "../chain";

export const percentFormat = format(".2%");
export const currencyFormat = format("($.2f");

export function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

export function ensure<T>(
  fn: () => T,
  errorMessage: string = "Failed assertion"
): T {
  return fn() ?? throwError(errorMessage);
}

export function ensureValue<T>(
  val: T | undefined,
  errorMessage: string = "Failed assertion"
): T {
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

export function addressShorthand(address: string): string {
  const length = address.length;
  const prefix = address.substring(0, 6);
  const suffix = address.substring(length - 4, length);
  return `${prefix}...${suffix}`;
}

export async function fetchJson(url: string): Promise<any> {
  const log = debug("churras:fetch");
  log(`Fetching ${url}`);
  const res = await fetch(url);
  return await res.json();
}

export async function postJson(url: string, postParams: any): Promise<any> {
  const log = debug("churras:postJson");
  log(`Fetching ${url}`);
  const res = await fetch(url, postParams);
  return await res.json();
}