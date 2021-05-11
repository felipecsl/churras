import { WalletToken } from "./api/token/walletToken";
import { ensure, fetchJson } from "./api/util";
import { DEV_API_PORT } from "./constants";

export default class ChurrasApiClient {
  private readonly apiBaseUrl: string;

  constructor(location: Location = window.location) {
    const hostname = location.hostname;
    ensure(
      () => ["localhost", "churras.org"].includes(hostname),
      `Unknown hostname ${hostname}`
    );
    const environment =
      hostname === "churras.org" ? "production" : "development";
    const API_PORT = environment === "production" ? 80 : DEV_API_PORT;
    const protocol = location.protocol;
    this.apiBaseUrl = `${protocol}//${hostname}:${API_PORT}`;
  }

  async accountTokens(accountAddress: string): Promise<WalletToken[]> {
    const endpoint = `${this.apiBaseUrl}/address/${accountAddress}/tokens`;
    return await fetchJson(endpoint);
  }
}
