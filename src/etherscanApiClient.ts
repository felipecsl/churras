import { fetchJson } from "./api/util";
import { ETHERSCAN_API_KEY } from "./constants";

export interface EtherscanApiClient {
  loadTransactions(address: string): Promise<any>;
}

export class RealEtherscanApiClient implements EtherscanApiClient {
  private apiKey: string;

  constructor(apiKey: string = ETHERSCAN_API_KEY) {
    this.apiKey = apiKey;
  }

  async loadTransactions(address: string): Promise<any> {
    const response = await fetchJson(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${this.apiKey}`
    );
    return response.result;
  }
}
