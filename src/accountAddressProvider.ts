// Simple localStorage-backed wallet address provider
export default class AccountAddressProvider {
  currentAccountAddress(): string | undefined {
    return localStorage.accountAddress;
  }

  setCurrentAccountAddress(accountAddress: string) {
    localStorage.accountAddress = accountAddress;
  }
}
