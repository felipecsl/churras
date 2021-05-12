import TransactionsLoader from "../api/transaction/transactionsLoader";
import { FakeEtherscanApiClient } from "./fakes/fakeEtherscanApiClient";

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
  // application specific logging, throwing an error, or other logic here
});

test("Loads all transactions to and from my address", async () => {
  const fakeEtherscanApiClient = new FakeEtherscanApiClient();
  const transfersLoader = new TransactionsLoader(fakeEtherscanApiClient);
  const transactions = await transfersLoader.loadTransactions("0xFoo");
  expect(transactions.length).toEqual(44);
});
