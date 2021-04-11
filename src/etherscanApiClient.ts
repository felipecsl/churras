export interface EtherscanApiClient {
  loadTransactions(address: string): Promise<any>;
}

export class RealEtherscanApiClient implements EtherscanApiClient {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async loadTransactions(address: string): Promise<any> {
    const results = await fetch(
      `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${this.apiKey}`
    );
    const response = await results.json();
    return response.result;
  }
}
