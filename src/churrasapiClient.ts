import { WalletToken } from "./api/token/walletToken";
import { ensure, fetchJson } from "./api/util";
import { DEV_API_PORT, PROD_API_HOSTNAME } from "./constants";

export interface ChurrasApiClient {
  accountTokens(accountAddress: string): Promise<WalletToken[]>;
}

export default class DefaultChurrasApiClient {
  private readonly apiBaseUrl: string;

  constructor(location: Location = window.location) {
    const hostname = location.hostname;
    ensure(
      () => ["localhost", "churras.org"].includes(hostname),
      `Unknown hostname ${hostname}`
    );
    const env = hostname === "churras.org" ? "production" : "development";
    const isProduction = env === "production";
    const apiPort = isProduction ? "" : `:${DEV_API_PORT}`;
    const apiHost = isProduction ? PROD_API_HOSTNAME : hostname;
    const protocol = location.protocol;
    this.apiBaseUrl = `${protocol}//${apiHost}${apiPort}`;
  }

  async accountTokens(accountAddress: string): Promise<WalletToken[]> {
    const endpoint = `${this.apiBaseUrl}/address/${accountAddress}/tokens`;
    return await fetchJson(endpoint);
  }
}
