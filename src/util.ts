import { format } from "d3-format";

export const percentFormat = format(".2%");
export const currencyFormat = format("($.2f");

export function throwError(errorMessage: string): never {
  throw new Error(errorMessage);
}

export function ensure<T>(fn: () => T, errorMessage: string): T {
  return fn() ?? throwError(errorMessage);
}
