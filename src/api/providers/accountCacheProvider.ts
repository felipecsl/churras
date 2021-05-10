import { WalletToken } from "../token/walletToken";
import { any } from "../util";

export default class AccountCacheProvider {
  private readonly storage: Storage;

  constructor(storage: Storage = localStorage) {
    this.storage = storage;
  }

  private getCache() {
    return JSON.parse(this.storage.churrasCache || "{}");
  }

  /** Returns the first cached address found or undefined if none exist */
  getSingleAccountAddress(): string | undefined {
    const churrasCache = this.getCache();
    const addresses = Object.keys(churrasCache);
    if (any(addresses)) {
      return addresses[0];
    } else {
      return undefined;
    }
  }

  /** Returns the cached tokens array for the provided address or empty array if account not found */
  get(address: string): WalletToken[] {
    const churrasCache = this.getCache();
    return churrasCache[address] || [];
  }

  update(address: string, tokens: WalletToken[]) {
    const churrasCache = this.getCache();
    churrasCache[address] = tokens;
    this.storage.churrasCache = JSON.stringify(churrasCache);
  }

  clear() {
    delete this.storage.churrasCache;
  }
}
