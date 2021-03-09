"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var sdk_1 = require("@uniswap/sdk");
var ethers_1 = require("ethers");
var node_fetch_1 = require("node-fetch");
// 50 bips, or 0.50%
var DEFAULT_SLIPPAGE_TOLERANCE = new sdk_1.Percent("50", "10000");
// 20 minutes from the current Unix time
var DEFAULT_DEADLINE = function (now) { return Math.floor(now / 1000) + 60 * 20; };
var WALLET_PRIVATE_KEY = "TBD";
function throwError(errorMessage) {
    throw new Error(errorMessage);
}
// Look for DeFi arbitrage opportunities
var DeFiTrader = /** @class */ (function () {
    function DeFiTrader(tokenListApiEndpoint, chainId) {
        if (tokenListApiEndpoint === void 0) { tokenListApiEndpoint = "https://api.1inch.exchange/v2.0/tokens"; }
        if (chainId === void 0) { chainId = sdk_1.ChainId.MAINNET; }
        this.tokenListApiEndpoint = tokenListApiEndpoint;
        this.chainId = chainId;
        this.provider = ethers_1.ethers.getDefaultProvider("homestead", {
            etherscan: "5E9AEFB4BCJZ71MGI2CZV8NP3CF9FM8Q2H"
        });
    }
    DeFiTrader.prototype.fetchTokens = function (symbol0, symbol1) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var res, results, tokens, token0, token1, token0Data, token1Data;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, node_fetch_1["default"](this.tokenListApiEndpoint)];
                    case 1:
                        res = _c.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        results = (_c.sent());
                        tokens = Object.values(results.tokens);
                        token0 = (_a = tokens.find(function (t) { return t.symbol === symbol0; })) !== null && _a !== void 0 ? _a : throwError("Could not find token0");
                        token1 = (_b = tokens.find(function (t) { return t.symbol === symbol1; })) !== null && _b !== void 0 ? _b : throwError("Could not find token1");
                        return [4 /*yield*/, sdk_1.Fetcher.fetchTokenData(this.chainId, ethers_1.utils.getAddress(token0.address), this.provider)];
                    case 3:
                        token0Data = _c.sent();
                        return [4 /*yield*/, sdk_1.Fetcher.fetchTokenData(this.chainId, ethers_1.utils.getAddress(token1.address), this.provider)];
                    case 4:
                        token1Data = _c.sent();
                        return [2 /*return*/, [token0Data, token1Data]];
                }
            });
        });
    };
    DeFiTrader.prototype.getTrade = function (symbol0, symbol1, symbol1Amount) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, token0, token1, pair, route, tradeAmount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fetchTokens(symbol0, symbol1)];
                    case 1:
                        _a = _b.sent(), token0 = _a[0], token1 = _a[1];
                        return [4 /*yield*/, sdk_1.Fetcher.fetchPairData(token0, token1, this.provider)];
                    case 2:
                        pair = _b.sent();
                        route = new sdk_1.Route([pair], token1);
                        tradeAmount = new sdk_1.TokenAmount(token1, symbol1Amount);
                        return [2 /*return*/, new sdk_1.Trade(route, tradeAmount, sdk_1.TradeType.EXACT_INPUT)];
                }
            });
        });
    };
    DeFiTrader.prototype.sendTrade = function (trade, recipientAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var pair, _a, token0, token1, amountOutMin, path, value, signer, account, deadline, functionABI, uniswapRouter02, transaction, hash, receipt;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        pair = trade.route.pairs[0];
                        _a = [pair.token0, pair.token1], token0 = _a[0], token1 = _a[1];
                        amountOutMin = ethers_1.BigNumber.from(trade.minimumAmountOut(DEFAULT_SLIPPAGE_TOLERANCE).raw).toHexString();
                        path = [
                            ethers_1.BigNumber.from(token1.address).toHexString(),
                            ethers_1.BigNumber.from(token0.address).toHexString(),
                        ];
                        value = ethers_1.BigNumber.from(trade.inputAmount.raw).toHexString();
                        signer = ethers_1.Wallet.createRandom();
                        account = signer.connect(this.provider);
                        deadline = ethers_1.BigNumber.from(DEFAULT_DEADLINE(Date.now())).toHexString();
                        functionABI = [
                            "function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)",
                        ];
                        uniswapRouter02 = new ethers_1.Contract("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D", functionABI, account);
                        return [4 /*yield*/, uniswapRouter02.swapExactETHForTokens(amountOutMin, path, recipientAddress, deadline, { value: value })];
                    case 1:
                        transaction = _b.sent();
                        hash = transaction.hash;
                        console.log("Transaction hash=" + hash);
                        return [4 /*yield*/, transaction.wait()];
                    case 2:
                        receipt = _b.sent();
                        console.log("Transaction was mined in block " + receipt.blockNumber);
                        return [2 /*return*/];
                }
            });
        });
    };
    return DeFiTrader;
}());
var amount = ethers_1.utils.parseEther("0.001").toString();
var trader = new DeFiTrader();
trader.getTrade("DAI", "WETH", amount).then(function (trade) {
    var executionPrice = trade.executionPrice.toSignificant(6);
    var inputAmount = trade.inputAmount.toSignificant(6);
    var outputAmount = trade.outputAmount.toSignificant(6);
    console.log("WETH/DAI executionPrice=" + executionPrice + ", input=" + inputAmount + ", output=" + outputAmount);
    trader.sendTrade(trade, ethers_1.utils.getAddress("0xd34da143fc2f16a6b303bcacdb2b12d4b9d7c0b6"));
});
// Estimate gas amount
// Loop on a few tokens:
// 1. Look up Uniswap trade price for token T - OK
// 2. Look up Binance trade price for token T
// 3. Determine percent difference percentage between exchanges
// 4. Place trade if (difference - fees) > X
// 5. Profit
