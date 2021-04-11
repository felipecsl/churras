import TransactionsLoader from "../transaction/transactionsLoader";
import { FakeEtherscanApiClient } from "./fakeEtherscanApiClient";
import fakeTransactions from "./fixtures/fakeTransactions.json";

test("Loads all transactions to and from my address", async () => {
  const fakeEtherscanApiClient = new FakeEtherscanApiClient(fakeTransactions);
  const transfersLoader = new TransactionsLoader(fakeEtherscanApiClient);
  const transactions = await transfersLoader.loadTransactions(
    "0x6A707ed3d020e8EBc39DfD1cb9a332F5c4420cAF"
  );
  expect(transactions.length).toEqual(88);
});
