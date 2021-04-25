import { format } from "d3-format";

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

export const groupBy = <T, K extends keyof any>(
  list: T[],
  getKey: (item: T) => K
): Record<K, T[]> =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);
