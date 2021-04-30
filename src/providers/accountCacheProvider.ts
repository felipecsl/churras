import { WalletToken } from "../token/walletToken";

// Simple localStorage-backed wallet data cache
interface AccountCache {
  // wallet address
  accountAddress?: string;
  tokens: WalletToken[];
}

export default class AccountCacheProvider {
  private readonly storage: Storage;

  constructor(storage: Storage = localStorage) {
    this.storage = storage;
  }

  get(): AccountCache {
    const accountAddress = this.storage.accountAddress;
    const tokens = JSON.parse(this.storage.tokens || "[]");
    return { accountAddress, tokens };
  }

  update({ accountAddress, tokens }: AccountCache) {
    if (accountAddress) {
      this.storage.accountAddress = accountAddress;
    }
    if (tokens) {
      this.storage.tokens = JSON.stringify(tokens);
    }
  }

  clear() {
    this.storage.accountAddress = undefined;
    this.storage.tokens = undefined;
  }
}
