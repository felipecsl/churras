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

export default class BscAccountTokensProvider implements AccountTokensProvider {
  private readonly tokenDatabase: TokenDatabase;
  private readonly bscProvider: BaseProvider;

  constructor(
    tokenDatabaseFactory: TokenDatabaseFactory,
    networkProviderFactory: NetworkProviderFactory
  ) {
    this.tokenDatabase = tokenDatabaseFactory(Network[Network.BSC]);
    this.bscProvider = networkProviderFactory(Network[Network.BSC]);
  }

  async accountTokens(accountAddress: string): Promise<Token[]> {
    // See https://github.com/binance-chain/bsc/issues/113
    // Unfortunately, BSC dataseed nodes won't allow us to query events for more than 5000 blocks at
    // at time, which corresponds to ~4h of blocks, making it impossible to use it to query transfer
    // events, like we do on Ethereum. As a last resort, we return all BSC database tokens, since
    // we can't tell whether or not any of them are relevant for the provided account, so we have
    // to play it safe and query all of them (ewww)...
    // return Promise.resolve(this.tokenDatabase.allTokens());
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
    const logs = await this.bscProvider.getLogs(filter);
    // Any ERC-721 tokens would fail to `findByAddress` since they are not in the tokenDatabase,
    // so for now we just filter them out.
    return [...new Set(logs.map((log) => log.address))]
      .map((address) => this.tokenDatabase.findByAddress(address))
      .filter((token) => token !== undefined) as Token[];
  }
}
