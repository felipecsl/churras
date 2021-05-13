import Token from "../token/token";

/**
 * Provides an array of tokens associated with an account address. The tokens returned are likely
 * to have a non-zero balance in the user wallet, but the exact balance is not yet known.
 */
export interface AccountTokensProvider {
  accountTokens(accountAddress: string): Promise<Token[]>;
}
