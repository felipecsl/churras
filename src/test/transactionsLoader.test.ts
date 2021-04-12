import TransactionsLoader from "../transaction/transactionsLoader";
import { FakeEtherscanApiClient } from "./fakeEtherscanApiClient";

test("Loads all transactions to and from my address", async () => {
  const fakeEtherscanApiClient = new FakeEtherscanApiClient();
  const transfersLoader = new TransactionsLoader(fakeEtherscanApiClient);
  const transactions = await transfersLoader.loadTransactions(
    "0xDoesNotMatter"
  );
  expect(transactions.length).toEqual(44);
});
