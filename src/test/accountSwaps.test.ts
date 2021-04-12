import { DEFAULT_PROVIDER } from "../constants";
import AccountSwaps from "../transaction/accountSwaps";
import TransactionsLoader from "../transaction/transactionsLoader";
import UniswapTransactionParser from "../transaction/uniswapTransactionParser";
import { FakeEtherscanApiClient } from "./fakeEtherscanApiClient";
import { TOKENS } from "./fixtures/tokenFixtures";

jest.setTimeout(10000);

test("loads all Uniswap transactions from account", async () => {
  const fakeEtherscanApiClient = new FakeEtherscanApiClient();
  const transactionLoader = new TransactionsLoader(fakeEtherscanApiClient);
  const uniswapTransaction = new UniswapTransactionParser(
    TOKENS,
    DEFAULT_PROVIDER
  );
  const accountSwaps = new AccountSwaps(transactionLoader, uniswapTransaction);
  const swaps = await accountSwaps.loadAccountSwaps("0xDoesNotMatter");
  expect(swaps).toEqual([
    {
      amountIn: "225.891707515417109037",
      amountOutMin: "29.024199676065787279",
      gasPrice: "125.66",
      gasUsed: 243634,
      hash:
        "0x2959cd3d09cca9b1e302e9feba8b3ba36b0dd75dff95bbfd3a146170d6f97aa2",
      path: ["1INCH", "WETH", "USDT", "UNI"],
      transactionFee: "0.03061504844",
      transfers: [
        {
          amount: "225.891707515417109037",
          from: "0x6A707ed3d020e8EBc39DfD1cb9a332F5c4420cAF",
          to: "0x26aAd2da94C59524ac0D93F6D6Cbf9071d7086f2",
        },
        {
          amount: "0.524351462401587594",
          from: "0x26aAd2da94C59524ac0D93F6D6Cbf9071d7086f2",
          to: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
        },
        {
          amount: "965.80434",
          from: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
          to: "0x5ac13261c181a9c3938BfE1b649E65D10F98566B",
        },
        {
          amount: "29.155679483254742122",
          from: "0x5ac13261c181a9c3938BfE1b649E65D10F98566B",
          to: "0x6A707ed3d020e8EBc39DfD1cb9a332F5c4420cAF",
        },
      ],
    },
    {
      amountIn: "0.7",
      amountOutMin: "1324.245299",
      gasPrice: "103.0",
      gasUsed: 130397,
      hash:
        "0x8102131bfe2b21fddbc1a57de3248e0103adbd766f15da2bab44c6a60d28acdf",
      path: ["WETH", "USDT"],
      transactionFee: "0.013430891",
      transfers: [
        {
          amount: "0.7",
          from: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
          to: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
        },
        {
          amount: "1333.542216",
          from: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
          to: "0x6A707ed3d020e8EBc39DfD1cb9a332F5c4420cAF",
        },
      ],
    },
  ]);
});
