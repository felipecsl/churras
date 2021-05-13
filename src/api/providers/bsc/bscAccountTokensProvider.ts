import { Network } from "../../../chain";
import { TokenDatabaseFactory } from "../../modulesProvider";
import Token from "../../token/token";
import TokenDatabase from "../../token/tokenDatabase";

export default class BscAccountTokensProvider {
  private readonly tokenDatabase: TokenDatabase;

  constructor(tokenDatabaseFactory: TokenDatabaseFactory) {
    this.tokenDatabase = tokenDatabaseFactory(Network[Network.BSC]);
  }

  async accountTokens(accountAddress: string): Promise<Token[]> {
    // See https://github.com/binance-chain/bsc/issues/113
    // Unfortunately, BSC dataseed nodes won't allow us to query events for more than 5000 blocks at
    // at time, which corresponds to ~4h of blocks, making it impossible to use it to query transfer
    // events, like we do on Ethereum. As a last resort, we return all BSC database tokens, since
    // we can't tell whether or not any of them are relevant for the provided account, so we have
    // to play it safe and query all of them (ewww)...
    return Promise.resolve(this.tokenDatabase.allTokens());
  }
}
