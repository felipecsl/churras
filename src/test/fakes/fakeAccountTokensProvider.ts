import { AccountTokensProvider } from "../../api/providers/accountTokensProvider";
import { default as Token, default as token } from "../../api/token/token";

export default class FakeAccountTokensProvider
  implements AccountTokensProvider
{
  private readonly tokens: Token[];

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  accountTokens(accountAddress: string): Promise<token[]> {
    return Promise.resolve(this.tokens);
  }
}
