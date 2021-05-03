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

// returns true if the provided array is not empty
export function any<T>(arr: T[]): boolean {
  return Array.isArray(arr) && arr.length > 0;
}

export function none<T>(arr: T[]): boolean {
  return Array.isArray(arr) && arr.length === 0;
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
