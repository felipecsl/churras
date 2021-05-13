import { BaseProvider } from "@ethersproject/providers";
import { utils } from "ethers";
import { hexZeroPad } from "ethers/lib/utils";
import { Network } from "../../../chain";
import {
  NetworkProviderFactory,
  TokenDatabaseFactory,
} from "../../modulesProvider";
import Token from "../../token/token";
import TokenDatabase from "../../token/tokenDatabase";
import { AccountTokensProvider } from "../accountTokensProvider";

export default class EthereumAccountTokensProvider
  implements AccountTokensProvider
{
  private readonly tokenDatabase: TokenDatabase;
  private readonly ethereumProvider: BaseProvider;

  constructor(
    tokenDatabaseFactory: TokenDatabaseFactory,
    networkProviderFactory: NetworkProviderFactory
  ) {
    this.tokenDatabase = tokenDatabaseFactory(Network[Network.ETHEREUM]);
    this.ethereumProvider = networkProviderFactory(Network[Network.ETHEREUM]);
  }

  /** Fetches all tokens that were transferred to the provided account address */
  async accountTokens(accountAddress: string): Promise<Token[]> {
    // Filter all token transfers from any address to `accountAddress`
    var filter = {
      topics: [
        utils.id("Transfer(address,address,uint256)"),
        null,
        hexZeroPad(accountAddress, 32),
      ] as string[],
      fromBlock: 0,
      toBlock: "latest",
    };
    const logs = await this.ethereumProvider.getLogs(filter);
    // Any ERC-721 tokens would fail to `findByAddress` since they are not in the tokenDatabase,
    // so for now we just filter them out.
    return [...new Set(logs.map((log) => log.address))]
      .map((address) => this.tokenDatabase.findByAddress(address))
      .filter((token) => token !== undefined) as Token[];
  }
}
