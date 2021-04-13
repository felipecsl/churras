import { utils } from "ethers";
import Token from "./token";

export const ALL_TOKENS = {
  "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45": {
    symbol: "STX",
    name: "Stox",
    address: "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x006bea43baa3f7a6f765f14f10a1a1b08334ef45.png",
  },
  "0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd": {
    symbol: "BTC++",
    name: "PieDAO BTC++",
    decimals: 18,
    address: "0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd",
    logoURI:
      "https://tokens.1inch.exchange/0x0327112423f3a68efdf1fcf402f6c5cb9f7c33fd.png",
  },
  "0x0417912b3a7af768051765040a55bb0925d4ddcf": {
    symbol: "LID",
    name: "Liquidity Dividends Protocol",
    address: "0x0417912b3a7af768051765040a55bb0925d4ddcf",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x0417912b3a7af768051765040a55bb0925d4ddcf.png",
  },
  "0x04fa0d235c4abf4bcf4787af4cf447de572ef828": {
    symbol: "UMA",
    name: "UMA Voting Token v1",
    decimals: 18,
    address: "0x04fa0d235c4abf4bcf4787af4cf447de572ef828",
    logoURI:
      "https://tokens.1inch.exchange/0x04fa0d235c4abf4bcf4787af4cf447de572ef828.png",
  },
  "0x07597255910a51509ca469568b048f2597e72504": {
    symbol: "1UP",
    name: "Uptrennd",
    address: "0x07597255910a51509ca469568b048f2597e72504",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x07597255910a51509ca469568b048f2597e72504.png",
  },
  "0x08d967bb0134f2d07f7cfb6e246680c53927dd30": {
    symbol: "MATH",
    name: "MATH Token",
    address: "0x08d967bb0134f2d07f7cfb6e246680c53927dd30",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png",
  },
  "0x0a913bead80f321e7ac35285ee10d9d922659cb7": {
    symbol: "DOS",
    name: "DOS Network Token",
    decimals: 18,
    address: "0x0a913bead80f321e7ac35285ee10d9d922659cb7",
    logoURI:
      "https://tokens.1inch.exchange/0x0a913bead80f321e7ac35285ee10d9d922659cb7.png",
  },
  "0x0ae055097c6d159879521c384f1d2123d1f195e6": {
    symbol: "STAKE",
    name: "STAKE",
    address: "0x0ae055097c6d159879521c384f1d2123d1f195e6",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x0ae055097c6d159879521c384f1d2123d1f195e6.png",
  },
  "0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0": {
    symbol: "TRB",
    name: "Tellor Tributes",
    address: "0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5.png",
  },
  "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e": {
    symbol: "YFI",
    name: "yearn.finance",
    decimals: 18,
    address: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
    logoURI:
      "https://tokens.1inch.exchange/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png",
  },
  "0x0cf0ee63788a0849fe5297f3407f701e122cc023": {
    symbol: "DATA",
    name: "Streamr",
    address: "0x0cf0ee63788a0849fe5297f3407f701e122cc023",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x0cf0ee63788a0849fe5297f3407f701e122cc023.png",
  },
  "0x0d438f3b5175bebc262bf23753c1e53d03432bde": {
    symbol: "wNXM",
    name: "Wrapped NXM",
    decimals: 18,
    address: "0x0d438f3b5175bebc262bf23753c1e53d03432bde",
    logoURI:
      "https://tokens.1inch.exchange/0x0d438f3b5175bebc262bf23753c1e53d03432bde.png",
  },
  "0x0d8775f648430679a709e98d2b0cb6250d2887ef": {
    symbol: "BAT",
    name: "Basic Attention Token",
    address: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png",
  },
  "0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6": {
    symbol: "ABYSS",
    name: "Abyss",
    decimals: 18,
    address: "0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6",
    logoURI:
      "https://tokens.1inch.exchange/0x0e8d6b471e332f140e7d9dbb99e5e3822f728da6.png",
  },
  "0x0f5d2fb29fb7d3cfee444a200298f468908cc942": {
    symbol: "MANA",
    name: "Mana",
    address: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x0f5d2fb29fb7d3cfee444a200298f468908cc942.png",
  },
  "0x0f7f961648ae6db43c75663ac7e5414eb79b5704": {
    symbol: "XIO",
    name: "XIO Network",
    address: "0x0f7f961648ae6db43c75663ac7e5414eb79b5704",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x0f7f961648ae6db43c75663ac7e5414eb79b5704.png",
  },
  "0x1234567461d3f8db7496581774bd869c83d51c93": {
    symbol: "CAT",
    name: "BitClave",
    address: "0x1234567461d3f8db7496581774bd869c83d51c93",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x1234567461d3f8db7496581774bd869c83d51c93.png",
  },
  "0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd": {
    symbol: "GRID",
    name: "GRID",
    address: "0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd",
    decimals: 12,
    logoURI:
      "https://tokens.1inch.exchange/0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd.png",
  },
  "0x12f649a9e821f90bb143089a6e56846945892ffb": {
    symbol: "uDOO",
    name: "uDOO",
    address: "0x12f649a9e821f90bb143089a6e56846945892ffb",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x12f649a9e821f90bb143089a6e56846945892ffb.png",
  },
  "0x13339fd07934cd674269726edf3b5ccee9dd93de": {
    symbol: "CUR",
    name: "CurToken",
    decimals: 18,
    address: "0x13339fd07934cd674269726edf3b5ccee9dd93de",
    logoURI:
      "https://tokens.1inch.exchange/0x13339fd07934cd674269726edf3b5ccee9dd93de.png",
  },
  "0x1453dbb8a29551ade11d89825ca812e05317eaeb": {
    symbol: "TEND",
    name: "Tendies Token",
    decimals: 18,
    address: "0x1453dbb8a29551ade11d89825ca812e05317eaeb",
    logoURI:
      "https://tokens.1inch.exchange/0x1453dbb8a29551ade11d89825ca812e05317eaeb.png",
  },
  "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671": {
    symbol: "NMR",
    name: "Numeraire",
    address: "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x1776e1f26f98b1a5df9cd347953a26dd3cb46671.png",
  },
  "0x178c820f862b14f316509ec36b13123da19a6054": {
    symbol: "EWTB",
    name: "Energy Web Token Bridged",
    address: "0x178c820f862b14f316509ec36b13123da19a6054",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x178c820f862b14f316509ec36b13123da19a6054.png",
  },
  "0x1a5f9352af8af974bfc03399e3767df6370d82e4": {
    symbol: "OWL",
    name: "OWL Token",
    address: "0x1a5f9352af8af974bfc03399e3767df6370d82e4",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x1a5f9352af8af974bfc03399e3767df6370d82e4.png",
  },
  "0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06": {
    symbol: "PAR",
    name: "Parachute",
    address: "0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x1beef31946fbbb40b877a72e4ae04a8d1a5cee06.png",
  },
  "0x196f4727526ea7fb1e17b2071b3d8eaa38486988": {
    symbol: "RSV",
    name: "Reserve",
    address: "0x196f4727526ea7fb1e17b2071b3d8eaa38486988",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x196f4727526ea7fb1e17b2071b3d8eaa38486988.png",
  },
  "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c": {
    symbol: "BNT",
    name: "Bancor",
    address: "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c.png",
  },
  "0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a": {
    symbol: "SPN",
    name: "Sapien Network",
    address: "0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a",
    decimals: 6,
    logoURI:
      "https://tokens.1inch.exchange/0x20f7a3ddf244dc9299975b4da1c39f8d5d75f05a.png",
  },
  "0x221657776846890989a759ba2973e427dff5c9bb": {
    symbol: "REPv2",
    name: "Reputation V2",
    decimals: 18,
    address: "0x221657776846890989a759ba2973e427dff5c9bb",
    logoURI:
      "https://tokens.1inch.exchange/0x221657776846890989a759ba2973e427dff5c9bb.png",
  },
  "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": {
    symbol: "WBTC",
    name: "Wrapped BTC",
    address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    decimals: 8,
    logoURI:
      "https://tokens.1inch.exchange/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
  },
  "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6": {
    symbol: "RDN",
    name: "Raiden Network Token",
    address: "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6.png",
  },
  "0x26b3038a7fc10b36c426846a9086ef87328da702": {
    symbol: "YFT",
    name: "Yield Farming Token",
    decimals: 18,
    address: "0x26b3038a7fc10b36c426846a9086ef87328da702",
    logoURI:
      "https://tokens.1inch.exchange/0x26b3038a7fc10b36c426846a9086ef87328da702.png",
  },
  "0x26ce25148832c04f3d7f26f32478a9fe55197166": {
    symbol: "DEXT",
    name: "DEXTools",
    address: "0x26ce25148832c04f3d7f26f32478a9fe55197166",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x26ce25148832c04f3d7f26f32478a9fe55197166.png",
  },
  "0x27054b13b1b798b345b591a4d22e6562d47ea75a": {
    symbol: "AST",
    name: "AirSwap",
    decimals: 4,
    address: "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
    logoURI:
      "https://tokens.1inch.exchange/0x27054b13b1b798b345b591a4d22e6562d47ea75a.png",
  },
  "0x28cb7e841ee97947a86b06fa4090c8451f64c0be": {
    symbol: "YFL",
    name: "YFLink",
    address: "0x28cb7e841ee97947a86b06fa4090c8451f64c0be",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x28cb7e841ee97947a86b06fa4090c8451f64c0be.png",
  },
  "0x28dee01d53fed0edf5f6e310bf8ef9311513ae40": {
    symbol: "XBP",
    name: "BlitzPredict",
    address: "0x28dee01d53fed0edf5f6e310bf8ef9311513ae40",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x28dee01d53fed0edf5f6e310bf8ef9311513ae40.png",
  },
  "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39": {
    symbol: "HEX",
    name: "HEX",
    address: "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
    decimals: 8,
    logoURI:
      "https://tokens.1inch.exchange/0x2b591e99afe9f32eaa6214f7b7629768c40eeb39.png",
  },
  "0x2ba592f78db6436527729929aaf6c908497cb200": {
    symbol: "CREAM",
    name: "Cream",
    address: "0x2ba592f78db6436527729929aaf6c908497cb200",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x2ba592f78db6436527729929aaf6c908497cb200.png",
  },
  "0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca": {
    symbol: "OST",
    name: "Open Simple Token",
    address: "0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x2c4e8f2d746113d0696ce89b35f0d8bf88e0aeca.png",
  },
  "0x2c537e5624e4af88a7ae4060c022609376c8d0eb": {
    symbol: "TRYB",
    name: "BiLira",
    address: "0x2c537e5624e4af88a7ae4060c022609376c8d0eb",
    decimals: 6,
    logoURI:
      "https://tokens.1inch.exchange/0x2c537e5624e4af88a7ae4060c022609376c8d0eb.png",
  },
  "0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724": {
    symbol: "VIB",
    name: "Viberate",
    address: "0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724.png",
  },
  "0x301c755ba0fca00b1923768fffb3df7f4e63af31": {
    symbol: "GDC",
    name: "Global Digital Content",
    address: "0x301c755ba0fca00b1923768fffb3df7f4e63af31",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x301c755ba0fca00b1923768fffb3df7f4e63af31.png",
  },
  "0x309627af60f0926daa6041b8279484312f2bf060": {
    symbol: "USDB",
    name: "USDB",
    address: "0x309627af60f0926daa6041b8279484312f2bf060",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x309627af60f0926daa6041b8279484312f2bf060.png",
  },
  "0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3": {
    symbol: "DEC",
    name: "Decentr",
    address: "0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x30f271c9e86d2b7d00a6376cd96a1cfbd5f0b9b3.png",
  },
  "0x3166c570935a7d8554c8f4ea792ff965d2efe1f2": {
    symbol: "QDAO",
    name: "QDAO",
    address: "0x3166c570935a7d8554c8f4ea792ff965d2efe1f2",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x3166c570935a7d8554c8f4ea792ff965d2efe1f2.png",
  },
  "0x340d2bde5eb28c1eed91b2f790723e3b160613b7": {
    symbol: "VEE",
    name: "BLOCKv",
    address: "0x340d2bde5eb28c1eed91b2f790723e3b160613b7",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x340d2bde5eb28c1eed91b2f790723e3b160613b7.png",
  },
  "0x37e8789bb9996cac9156cd5f5fd32599e6b91289": {
    symbol: "AID",
    name: "AidCoin",
    address: "0x37e8789bb9996cac9156cd5f5fd32599e6b91289",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x37e8789bb9996cac9156cd5f5fd32599e6b91289.png",
  },
  "0x3a92bd396aef82af98ebc0aa9030d25a23b11c6b": {
    symbol: "TBX",
    name: "Tokenbox",
    address: "0x3a92bd396aef82af98ebc0aa9030d25a23b11c6b",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x3a92bd396aef82af98ebc0aa9030d25a23b11c6b.png",
  },
  "0x3c6ff50c9ec362efa359317009428d52115fe643": {
    symbol: "PERX",
    name: "PeerEx Network",
    address: "0x3c6ff50c9ec362efa359317009428d52115fe643",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x3c6ff50c9ec362efa359317009428d52115fe643.png",
  },
  "0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244": {
    symbol: "RVT",
    name: "Rivetz",
    address: "0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244.png",
  },
  "0x408e41876cccdc0f92210600ef50372656052a38": {
    symbol: "REN",
    name: "Republic",
    address: "0x408e41876cccdc0f92210600ef50372656052a38",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x408e41876cccdc0f92210600ef50372656052a38.png",
  },
  "0x40fd72257597aa14c7231a7b1aaa29fce868f677": {
    symbol: "XOR",
    name: "Sora Token",
    address: "0x40fd72257597aa14c7231a7b1aaa29fce868f677",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x40fd72257597aa14c7231a7b1aaa29fce868f677.png",
  },
  "0x419d0d8bdd9af5e606ae2232ed285aff190e711b": {
    symbol: "FUN",
    name: "FunFair",
    address: "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
    decimals: 8,
    logoURI:
      "https://tokens.1inch.exchange/0x419d0d8bdd9af5e606ae2232ed285aff190e711b.png",
  },
  "0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2": {
    symbol: "XDCE",
    name: "XinFin",
    address: "0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2.png",
  },
  "0x41e5560054824ea6b0732e656e3ad64e20e94e45": {
    symbol: "CVC",
    name: "Civic",
    address: "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
    decimals: 8,
    logoURI:
      "https://tokens.1inch.exchange/0x41e5560054824ea6b0732e656e3ad64e20e94e45.png",
  },
  "0x42d6622dece394b54999fbd73d108123806f6a18": {
    symbol: "SPANK",
    name: "SPANK",
    address: "0x42d6622dece394b54999fbd73d108123806f6a18",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x42d6622dece394b54999fbd73d108123806f6a18.png",
  },
  "0x43044f861ec040db59a7e324c40507addb673142": {
    symbol: "CAP",
    name: "Cap",
    address: "0x43044f861ec040db59a7e324c40507addb673142",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x43044f861ec040db59a7e324c40507addb673142.png",
  },
  "0xfef4185594457050cc9c23980d301908fe057bb1": {
    symbol: "VIDT",
    name: "VIDT Datalink",
    address: "0xfef4185594457050cc9c23980d301908fe057bb1",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xfef4185594457050cc9c23980d301908fe057bb1.png",
  },
  "0x4470bb87d77b963a013db939be332f927f2b992e": {
    symbol: "ADXv1",
    name: "AdEx Network V1",
    decimals: 4,
    address: "0x4470bb87d77b963a013db939be332f927f2b992e",
    logoURI:
      "https://tokens.1inch.exchange/0x4470bb87d77b963a013db939be332f927f2b992e.png",
  },
  "0x456ae45c0ce901e2e7c99c0718031cec0a7a59ff": {
    symbol: "VSN",
    name: "Vision Network",
    address: "0x456ae45c0ce901e2e7c99c0718031cec0a7a59ff",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x456ae45c0ce901e2e7c99c0718031cec0a7a59ff.png",
  },
  "0x49184e6dae8c8ecd89d8bdc1b950c597b8167c90": {
    symbol: "LIBERTAS",
    name: "LIBERTAS",
    address: "0x49184e6dae8c8ecd89d8bdc1b950c597b8167c90",
    decimals: 2,
    logoURI:
      "https://tokens.1inch.exchange/0x49184e6dae8c8ecd89d8bdc1b950c597b8167c90.png",
  },
  "0x4946fcea7c692606e8908002e55a582af44ac121": {
    symbol: "FOAM",
    name: "FOAM Token",
    address: "0x4946fcea7c692606e8908002e55a582af44ac121",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x4946fcea7c692606e8908002e55a582af44ac121.png",
  },
  "0x4954db6391f4feb5468b6b943d4935353596aec9": {
    symbol: "USDQ",
    name: "USDQ",
    address: "0x4954db6391f4feb5468b6b943d4935353596aec9",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x4954db6391f4feb5468b6b943d4935353596aec9.png",
  },
  "0x4a220e6096b25eadb88358cb44068a3248254675": {
    symbol: "QNT",
    name: "Quant",
    address: "0x4a220e6096b25eadb88358cb44068a3248254675",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x4a220e6096b25eadb88358cb44068a3248254675.png",
  },
  "0x4a57e687b9126435a9b19e4a802113e266adebde": {
    symbol: "FXC",
    name: "Flexacoin",
    decimals: 18,
    address: "0x4a57e687b9126435a9b19e4a802113e266adebde",
    logoURI:
      "https://tokens.1inch.exchange/0x4a57e687b9126435a9b19e4a802113e266adebde.png",
  },
  "0x4aac461c86abfa71e9d00d9a2cde8d74e4e1aeea": {
    symbol: "ZINC",
    name: "ZINC",
    address: "0x4aac461c86abfa71e9d00d9a2cde8d74e4e1aeea",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x4aac461c86abfa71e9d00d9a2cde8d74e4e1aeea.png",
  },
  "0x4c327471c44b2dacd6e90525f9d629bd2e4f662c": {
    symbol: "GHOST",
    name: "GHOST",
    address: "0x4c327471c44b2dacd6e90525f9d629bd2e4f662c",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x4c327471c44b2dacd6e90525f9d629bd2e4f662c.png",
  },
  "0x4cc19356f2d37338b9802aa8e8fc58b0373296e7": {
    symbol: "KEY",
    name: "SelfKey",
    address: "0x4cc19356f2d37338b9802aa8e8fc58b0373296e7",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x4cc19356f2d37338b9802aa8e8fc58b0373296e7.png",
  },
  "0x4d953cf077c0c95ba090226e59a18fcf97db44ec": {
    symbol: "MINI",
    name: "MINISWAP",
    address: "0x4d953cf077c0c95ba090226e59a18fcf97db44ec",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x4d953cf077c0c95ba090226e59a18fcf97db44ec.png",
  },
  "0x4da9b813057d04baef4e5800e36083717b4a0341": {
    symbol: "aTUSDv1",
    name: "Aave Interest bearing TUSD",
    decimals: 18,
    address: "0x4da9b813057d04baef4e5800e36083717b4a0341",
    logoURI:
      "https://tokens.1inch.exchange/0x4da9b813057d04baef4e5800e36083717b4a0341.png",
  },
  "0x4e352cf164e64adcbad318c3a1e222e9eba4ce42": {
    symbol: "MCB",
    name: "MCDEX Token",
    address: "0x4e352cf164e64adcbad318c3a1e222e9eba4ce42",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x4e352cf164e64adcbad318c3a1e222e9eba4ce42.png",
  },
  "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf": {
    symbol: "DGX",
    name: "Digix Gold Token",
    address: "0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf",
    decimals: 9,
    logoURI:
      "https://tokens.1inch.exchange/0x4f3afec4e5a3f2a6a1a411def7d7dfe50ee057bf.png",
  },
  "0x4fabb145d64652a948d72533023f6e7a623c7c53": {
    symbol: "BUSD",
    name: "Binance USD",
    decimals: 18,
    address: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
    logoURI:
      "https://tokens.1inch.exchange/0x4fabb145d64652a948d72533023f6e7a623c7c53.png",
  },
  "0x5102791ca02fc3595398400bfe0e33d7b6c82267": {
    symbol: "LDC",
    name: "Lead Coin",
    address: "0x5102791ca02fc3595398400bfe0e33d7b6c82267",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x5102791ca02fc3595398400bfe0e33d7b6c82267.png",
  },
  "0x514910771af9ca656af840dff83e8264ecf986ca": {
    symbol: "LINK",
    name: "Chain Link",
    address: "0x514910771af9ca656af840dff83e8264ecf986ca",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x514910771af9ca656af840dff83e8264ecf986ca.png",
  },
  "0x543ff227f64aa17ea132bf9886cab5db55dcaddf": {
    symbol: "GEN",
    name: "DAOStack",
    address: "0x543ff227f64aa17ea132bf9886cab5db55dcaddf",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x543ff227f64aa17ea132bf9886cab5db55dcaddf.png",
  },
  "0x56d811088235f11c8920698a204a5010a788f4b3": {
    symbol: "BZRX",
    name: "bZx Protocol Token",
    decimals: 18,
    address: "0x56d811088235f11c8920698a204a5010a788f4b3",
    logoURI:
      "https://tokens.1inch.exchange/0x56d811088235f11c8920698a204a5010a788f4b3.png",
  },
  "0x5732046a883704404f284ce41ffadd5b007fd668": {
    symbol: "BLZ",
    name: "Bluzelle",
    address: "0x5732046a883704404f284ce41ffadd5b007fd668",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x5732046a883704404f284ce41ffadd5b007fd668.png",
  },
  "0x57700244b20f84799a31c6c96dadff373ca9d6c5": {
    symbol: "TRUST",
    name: "TRUST DAO",
    address: "0x57700244b20f84799a31c6c96dadff373ca9d6c5",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x57700244b20f84799a31c6c96dadff373ca9d6c5.png",
  },
  "0x58b6a8a3302369daec383334672404ee733ab239": {
    symbol: "LPT",
    name: "Livepeer Token",
    decimals: 18,
    address: "0x58b6a8a3302369daec383334672404ee733ab239",
    logoURI:
      "https://tokens.1inch.exchange/0x58b6a8a3302369daec383334672404ee733ab239.png",
  },
  "0x595832f8fc6bf59c85c527fec3740a1b7a361269": {
    symbol: "POWR",
    name: "Power Ledger",
    address: "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
    decimals: 6,
    logoURI:
      "https://tokens.1inch.exchange/0x595832f8fc6bf59c85c527fec3740a1b7a361269.png",
  },
  "0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190": {
    symbol: "DTH",
    name: "Dether",
    address: "0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x5adc961d6ac3f7062d2ea45fefb8d8167d44b190.png",
  },
  "0x5c872500c00565505f3624ab435c222e558e9ff8": {
    symbol: "COT",
    name: "CoTrader",
    address: "0x5c872500c00565505f3624ab435c222e558e9ff8",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x5c872500c00565505f3624ab435c222e558e9ff8.png",
  },
  "0x5caf454ba92e6f2c929df14667ee360ed9fd5b26": {
    symbol: "DEV",
    name: "Dev",
    address: "0x5caf454ba92e6f2c929df14667ee360ed9fd5b26",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x5caf454ba92e6f2c929df14667ee360ed9fd5b26.png",
  },
  "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643": {
    symbol: "cDAI",
    name: "Compound Dai",
    decimals: 8,
    address: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
    logoURI:
      "https://tokens.1inch.exchange/0x5d3a536e4d6dbd6114cc1ead35777bab948e3643.png",
  },
  "0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc": {
    symbol: "MYB",
    name: "MyBit",
    address: "0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x5d60d8d7ef6d37e16ebabc324de3be57f135e0bc.png",
  },
  "0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb": {
    symbol: "sETH",
    name: "Synth sETH",
    decimals: 18,
    address: "0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb",
    logoURI:
      "https://tokens.1inch.exchange/0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb.png",
  },
  "0x607c794cda77efb21f8848b7910ecf27451ae842": {
    symbol: "PIE",
    name: "DeFiPIE Token",
    decimals: 18,
    address: "0x607c794cda77efb21f8848b7910ecf27451ae842",
    logoURI:
      "https://tokens.1inch.exchange/0x607c794cda77efb21f8848b7910ecf27451ae842.png",
  },
  "0x607f4c5bb672230e8672085532f7e901544a7375": {
    symbol: "RLC",
    name: "iExec RLC",
    address: "0x607f4c5bb672230e8672085532f7e901544a7375",
    decimals: 9,
    logoURI:
      "https://tokens.1inch.exchange/0x607f4c5bb672230e8672085532f7e901544a7375.png",
  },
  "0x6226caa1857afbc6dfb6ca66071eb241228031a1": {
    symbol: "LAR",
    name: "Linkart",
    address: "0x6226caa1857afbc6dfb6ca66071eb241228031a1",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x6226caa1857afbc6dfb6ca66071eb241228031a1.png",
  },
  "0x6251e725cd45fb1af99354035a414a2c0890b929": {
    symbol: "MXT",
    name: "MixTrust",
    address: "0x6251e725cd45fb1af99354035a414a2c0890b929",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x6251e725cd45fb1af99354035a414a2c0890b929.png",
  },
  "0x625ae63000f46200499120b906716420bd059240": {
    symbol: "aSUSDv1",
    name: "Aave Interest bearing SUSD",
    decimals: 18,
    address: "0x625ae63000f46200499120b906716420bd059240",
    logoURI:
      "https://tokens.1inch.exchange/0x625ae63000f46200499120b906716420bd059240.png",
  },
  "0x667088b212ce3d06a1b553a7221e1fd19000d9af": {
    symbol: "WINGS",
    name: "Wings",
    address: "0x667088b212ce3d06a1b553a7221e1fd19000d9af",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x667088b212ce3d06a1b553a7221e1fd19000d9af.png",
  },
  "0x6710c63432a2de02954fc0f851db07146a6c0312": {
    symbol: "MFG",
    name: "SyncFab",
    address: "0x6710c63432a2de02954fc0f851db07146a6c0312",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x6710c63432a2de02954fc0f851db07146a6c0312.png",
  },
  "0x6758b7d441a9739b98552b373703d8d3d14f9e62": {
    symbol: "POA20",
    name: "POA",
    address: "0x6758b7d441a9739b98552b373703d8d3d14f9e62",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x6758b7d441a9739b98552b373703d8d3d14f9e62.png",
  },
  "0x6810e776880c02933d47db1b9fc05908e5386b96": {
    symbol: "GNO",
    name: "Gnosis",
    address: "0x6810e776880c02933d47db1b9fc05908e5386b96",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x6810e776880c02933d47db1b9fc05908e5386b96.png",
  },
  "0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25": {
    symbol: "SRN",
    name: "Sirin Labs",
    address: "0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x68d57c9a1c35f63e2c83ee8e49a64e9d70528d25.png",
  },
  "0x6b785a0322126826d8226d77e173d75dafb84d11": {
    symbol: "VLT",
    name: "Bankroll Vault",
    address: "0x6b785a0322126826d8226d77e173d75dafb84d11",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x6b785a0322126826d8226d77e173d75dafb84d11.png",
  },
  "0x6b9f031d718dded0d681c20cb754f97b3bb81b78": {
    symbol: "GEEQ",
    name: "Geeq",
    address: "0x6b9f031d718dded0d681c20cb754f97b3bb81b78",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x6b9f031d718dded0d681c20cb754f97b3bb81b78.png",
  },
  "0x6ba460ab75cd2c56343b3517ffeba60748654d26": {
    symbol: "UP",
    name: "UpToken",
    address: "0x6ba460ab75cd2c56343b3517ffeba60748654d26",
    decimals: 8,
    logoURI:
      "https://tokens.1inch.exchange/0x6ba460ab75cd2c56343b3517ffeba60748654d26.png",
  },
  "0x6c6ee5e31d828de241282b9606c8e98ea48526e2": {
    symbol: "HOT",
    name: "HoloToken",
    address: "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x6c6ee5e31d828de241282b9606c8e98ea48526e2.png",
  },
  "0x6f87d756daf0503d08eb8993686c7fc01dc44fb1": {
    symbol: "TRADE",
    name: "UniTrade",
    decimals: 18,
    address: "0x6f87d756daf0503d08eb8993686c7fc01dc44fb1",
    logoURI:
      "https://tokens.1inch.exchange/0x6f87d756daf0503d08eb8993686c7fc01dc44fb1.png",
  },
  "0x6fe56c0bcdd471359019fcbc48863d6c3e9d4f41": {
    symbol: "PROPS",
    name: "Props Token",
    address: "0x6fe56c0bcdd471359019fcbc48863d6c3e9d4f41",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x6fe56c0bcdd471359019fcbc48863d6c3e9d4f41.png",
  },
  "0x71fc860f7d3a592a4a98740e39db31d25db65ae8": {
    symbol: "aUSDTv1",
    name: "Aave Interest bearing USDT",
    decimals: 6,
    address: "0x71fc860f7d3a592a4a98740e39db31d25db65ae8",
    logoURI:
      "https://tokens.1inch.exchange/0x71fc860f7d3a592a4a98740e39db31d25db65ae8.png",
  },
  "0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c": {
    symbol: "AMN",
    name: "Amon",
    address: "0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x737f98ac8ca59f2c68ad658e3c3d8c8963e40a4c.png",
  },
  "0x744d70fdbe2ba4cf95131626614a1763df805b9e": {
    symbol: "SNT",
    name: "Status",
    address: "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x744d70fdbe2ba4cf95131626614a1763df805b9e.png",
  },
  "0x763186eb8d4856d536ed4478302971214febc6a9": {
    symbol: "BETR",
    name: "BetterBetting",
    address: "0x763186eb8d4856d536ed4478302971214febc6a9",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x763186eb8d4856d536ed4478302971214febc6a9.png",
  },
  "0x780116d91e5592e58a3b3c76a351571b39abcec6": {
    symbol: "BOXX",
    name: "Blockparty",
    address: "0x780116d91e5592e58a3b3c76a351571b39abcec6",
    decimals: 15,
    logoURI:
      "https://tokens.1inch.exchange/0x780116d91e5592e58a3b3c76a351571b39abcec6.png",
  },
  "0x7b0c06043468469967dba22d1af33d77d44056c8": {
    symbol: "MRPH",
    name: "Morpheus Network",
    address: "0x7b0c06043468469967dba22d1af33d77d44056c8",
    decimals: 4,
    logoURI:
      "https://tokens.1inch.exchange/0x7b0c06043468469967dba22d1af33d77d44056c8.png",
  },
  "0x7b123f53421b1bf8533339bfbdc7c98aa94163db": {
    symbol: "buidl",
    name: "dfohub",
    decimals: 18,
    address: "0x7b123f53421b1bf8533339bfbdc7c98aa94163db",
    logoURI:
      "https://tokens.1inch.exchange/0x7b123f53421b1bf8533339bfbdc7c98aa94163db.png",
  },
  "0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098": {
    symbol: "SAN",
    name: "Santiment",
    address: "0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098.png",
  },
  "0x7de91b204c1c737bcee6f000aaa6569cf7061cb7": {
    symbol: "XRT",
    name: "Robonomics",
    address: "0x7de91b204c1c737bcee6f000aaa6569cf7061cb7",
    decimals: 9,
    logoURI:
      "https://tokens.1inch.exchange/0x7de91b204c1c737bcee6f000aaa6569cf7061cb7.png",
  },
  "0x80fb784b7ed66730e8b1dbd9820afd29931aab03": {
    symbol: "LEND",
    name: "EthLend",
    address: "0x80fb784b7ed66730e8b1dbd9820afd29931aab03",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x80fb784b7ed66730e8b1dbd9820afd29931aab03.png",
  },
  "0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26": {
    symbol: "MDT",
    name: "Measurable Data Token",
    address: "0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x814e0908b12a99fecf5bc101bb5d0b8b5cdf7d26.png",
  },
  "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26": {
    symbol: "OGN",
    name: "Origin Protocol",
    address: "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x8207c1ffc5b6804f6024322ccf34f29c3541ae26.png",
  },
  "0x821144518dfe9e7b44fcf4d0824e15e8390d4637": {
    symbol: "ATIS",
    name: "ATIS Token",
    address: "0x821144518dfe9e7b44fcf4d0824e15e8390d4637",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x821144518dfe9e7b44fcf4d0824e15e8390d4637.png",
  },
  "0x83984d6142934bb535793a82adb0a46ef0f66b6d": {
    symbol: "REM",
    name: "Remme",
    address: "0x83984d6142934bb535793a82adb0a46ef0f66b6d",
    decimals: 4,
    logoURI:
      "https://tokens.1inch.exchange/0x83984d6142934bb535793a82adb0a46ef0f66b6d.png",
  },
  "0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc": {
    symbol: "MNTP",
    name: "Goldmint",
    address: "0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc.png",
  },
  "0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e": {
    symbol: "UBT",
    name: "UniBright",
    decimals: 8,
    address: "0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e",
    logoURI:
      "https://tokens.1inch.exchange/0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e.png",
  },
  "0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419": {
    symbol: "DIA",
    name: "DIAToken",
    decimals: 18,
    address: "0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419",
    logoURI:
      "https://tokens.1inch.exchange/0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419.png",
  },
  "0x8762db106b2c2a0bccb3a80d1ed41273552616e8": {
    symbol: "RSR",
    name: "Reserve Rights",
    address: "0x8762db106b2c2a0bccb3a80d1ed41273552616e8",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x8762db106b2c2a0bccb3a80d1ed41273552616e8.png",
  },
  "0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed": {
    symbol: "PNT",
    name: "pNetwork Token",
    address: "0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed.png",
  },
  "0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7": {
    symbol: "AKRO",
    name: "Akropolis",
    address: "0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7.png",
  },
  "0x7b6f71c8b123b38aa8099e0098bec7fbc35b8a13": {
    symbol: "NVT",
    name: "Nerve Network",
    address: "0x7b6f71c8b123b38aa8099e0098bec7fbc35b8a13",
    decimals: 8,
    logoURI:
      "https://tokens.1inch.exchange/0x7b6f71c8b123b38aa8099e0098bec7fbc35b8a13.png",
  },
  "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9": {
    symbol: "SXP",
    name: "Swipe",
    address: "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png",
  },
  "0x8e870d67f660d95d5be530380d0ec0bd388289e1": {
    symbol: "PAX",
    name: "Paxos Standard",
    address: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x8e870d67f660d95d5be530380d0ec0bd388289e1.png",
  },
  "0x8eb24319393716668d768dcec29356ae9cffe285": {
    symbol: "AGI",
    name: "SingularityNET Token",
    address: "0x8eb24319393716668d768dcec29356ae9cffe285",
    decimals: 8,
    logoURI:
      "https://tokens.1inch.exchange/0x8eb24319393716668d768dcec29356ae9cffe285.png",
  },
  "0x8f8221afbb33998d8584a2b05749ba73c37a938a": {
    symbol: "REQ",
    name: "Request",
    address: "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x8f8221afbb33998d8584a2b05749ba73c37a938a.png",
  },
  "0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a": {
    symbol: "ORN",
    name: "Orion Protocol",
    address: "0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a",
    decimals: 8,
    logoURI:
      "https://tokens.1inch.exchange/0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a.png",
  },
  "0x9214ec02cb71cba0ada6896b8da260736a67ab10": {
    symbol: "REAL",
    name: "REAL",
    address: "0x9214ec02cb71cba0ada6896b8da260736a67ab10",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x9214ec02cb71cba0ada6896b8da260736a67ab10.png",
  },
  "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d": {
    symbol: "PNK",
    name: "Kleros",
    address: "0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d.png",
  },
  "0x95172ccbe8344fecd73d0a30f54123652981bd6f": {
    symbol: "LOCK",
    name: "Meridian Network",
    address: "0x95172ccbe8344fecd73d0a30f54123652981bd6f",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x95172ccbe8344fecd73d0a30f54123652981bd6f.png",
  },
  "0x960b236a07cf122663c4303350609a66a7b288c0": {
    symbol: "ANTv1",
    name: "Aragon Network Token",
    address: "0x960b236a07cf122663c4303350609a66a7b288c0",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x960b236a07cf122663c4303350609a66a7b288c0.png",
  },
  "0x97af10d3fc7c70f67711bf715d8397c6da79c1ab": {
    symbol: "DIP",
    name: "Dipper Network",
    address: "0x97af10d3fc7c70f67711bf715d8397c6da79c1ab",
    decimals: 12,
    logoURI:
      "https://tokens.1inch.exchange/0x97af10d3fc7c70f67711bf715d8397c6da79c1ab.png",
  },
  "0x967da4048cd07ab37855c090aaf366e4ce1b9f48": {
    symbol: "OCEAN",
    name: "OceanToken",
    address: "0x967da4048cd07ab37855c090aaf366e4ce1b9f48",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x967da4048cd07ab37855c090aaf366e4ce1b9f48.png",
  },
  "0x990f341946a3fdb507ae7e52d17851b87168017c": {
    symbol: "STRONG",
    name: "Strong",
    address: "0x990f341946a3fdb507ae7e52d17851b87168017c",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x990f341946a3fdb507ae7e52d17851b87168017c.png",
  },
  "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec": {
    symbol: "POLY",
    name: "Polymath",
    address: "0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec.png",
  },
  "0x9ba00d6856a4edf4665bca2c2309936572473b7e": {
    symbol: "aUSDCv1",
    name: "Aave Interest bearing USDC",
    decimals: 6,
    address: "0x9ba00d6856a4edf4665bca2c2309936572473b7e",
    logoURI:
      "https://tokens.1inch.exchange/0x9ba00d6856a4edf4665bca2c2309936572473b7e.png",
  },
  "0x9cb2f26a23b8d89973f08c957c4d7cdf75cd341c": {
    symbol: "DZAR",
    name: "Digital Rand",
    decimals: 6,
    address: "0x9cb2f26a23b8d89973f08c957c4d7cdf75cd341c",
    logoURI:
      "https://tokens.1inch.exchange/0x9cb2f26a23b8d89973f08c957c4d7cdf75cd341c.png",
  },
  "0x9f49ed43c90a540d1cf12f6170ace8d0b88a14e6": {
    symbol: "ETHRSIAPY",
    name: "ETH RSI 60/40 Yield II",
    address: "0x9f49ed43c90a540d1cf12f6170ace8d0b88a14e6",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x9f49ed43c90a540d1cf12f6170ace8d0b88a14e6.png",
  },
  "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2": {
    symbol: "MKR",
    name: "Maker",
    address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png",
  },
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": {
    symbol: "USDC",
    name: "USD Coin",
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    decimals: 6,
    logoURI:
      "https://tokens.1inch.exchange/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
  },
  "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3": {
    symbol: "NPXS",
    name: "Pundi X",
    address: "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3.png",
  },
  "0xa1d0e215a23d7030842fc67ce582a6afa3ccab83": {
    symbol: "YFII",
    name: "YFII.finance",
    address: "0xa1d0e215a23d7030842fc67ce582a6afa3ccab83",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xa1d0e215a23d7030842fc67ce582a6afa3ccab83.png",
  },
  "0xa1d65e8fb6e87b60feccbc582f7f97804b725521": {
    symbol: "DXD",
    name: "DXdao",
    address: "0xa1d65e8fb6e87b60feccbc582f7f97804b725521",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xa1d65e8fb6e87b60feccbc582f7f97804b725521.png",
  },
  "0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2": {
    symbol: "MTA",
    name: "Meta",
    decimals: 18,
    address: "0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2",
    logoURI:
      "https://tokens.1inch.exchange/0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2.png",
  },
  "0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e": {
    symbol: "MET",
    name: "Metronome",
    decimals: 18,
    address: "0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e",
    logoURI:
      "https://tokens.1inch.exchange/0xa3d58c4e56fedcae3a7c43a725aee9a71f0ece4e.png",
  },
  "0xa462d0e6bb788c7807b1b1c96992ce1f7069e195": {
    symbol: "EQMT",
    name: "EQUUSMiningToken",
    address: "0xa462d0e6bb788c7807b1b1c96992ce1f7069e195",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xa462d0e6bb788c7807b1b1c96992ce1f7069e195.png",
  },
  "0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe": {
    symbol: "USDS",
    name: "StableUSD",
    address: "0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe",
    decimals: 6,
    logoURI:
      "https://tokens.1inch.exchange/0xa4bdb11dc0a2bec88d24a3aa1e6bb17201112ebe.png",
  },
  "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0": {
    symbol: "LOOM",
    name: "Loom Network",
    address: "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0.png",
  },
  "0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84": {
    symbol: "aLINKv1",
    name: "Aave Interest bearing LINK",
    decimals: 18,
    address: "0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84",
    logoURI:
      "https://tokens.1inch.exchange/0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84.png",
  },
  "0xa704fce7b309ec09df16e2f5ab8caf6fe8a4baa9": {
    symbol: "AGRI",
    name: "AgriChain",
    address: "0xa704fce7b309ec09df16e2f5ab8caf6fe8a4baa9",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xa704fce7b309ec09df16e2f5ab8caf6fe8a4baa9.png",
  },
  "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d": {
    symbol: "CEL",
    name: "Celsius",
    address: "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
    decimals: 4,
    logoURI:
      "https://tokens.1inch.exchange/0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d.png",
  },
  "0xaaaf91d9b90df800df4f55c205fd6989c977e73a": {
    symbol: "TKN",
    name: "Monolith",
    address: "0xaaaf91d9b90df800df4f55c205fd6989c977e73a",
    decimals: 8,
    logoURI:
      "https://tokens.1inch.exchange/0xaaaf91d9b90df800df4f55c205fd6989c977e73a.png",
  },
  "0xb0280743b44bf7db4b6be482b2ba7b75e5da096c": {
    symbol: "TNS",
    name: "Transcodium",
    address: "0xb0280743b44bf7db4b6be482b2ba7b75e5da096c",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xb0280743b44bf7db4b6be482b2ba7b75e5da096c.png",
  },
  "0xb056c38f6b7dc4064367403e26424cd2c60655e1": {
    symbol: "CEEK",
    name: "CEEK VR",
    address: "0xb056c38f6b7dc4064367403e26424cd2c60655e1",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xb056c38f6b7dc4064367403e26424cd2c60655e1.png",
  },
  "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407": {
    symbol: "cZRX",
    name: "Compound 0x",
    decimals: 8,
    address: "0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407",
    logoURI:
      "https://tokens.1inch.exchange/0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407.png",
  },
  "0xb4272071ecadd69d933adcd19ca99fe80664fc08": {
    symbol: "XCHF",
    name: "CryptoFranc",
    address: "0xb4272071ecadd69d933adcd19ca99fe80664fc08",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xb4272071ecadd69d933adcd19ca99fe80664fc08.png",
  },
  "0xb4efd85c19999d84251304bda99e90b92300bd93": {
    symbol: "RPL",
    name: "Rocket Pool",
    address: "0xb4efd85c19999d84251304bda99e90b92300bd93",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xb4efd85c19999d84251304bda99e90b92300bd93.png",
  },
  "0xeca82185adce47f39c684352b0439f030f860318": {
    symbol: "PERL",
    name: "Perlin",
    address: "0xeca82185adce47f39c684352b0439f030f860318",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xeca82185adce47f39c684352b0439f030f860318.png",
  },
  "0xb4058411967d5046f3510943103805be61f0600e": {
    symbol: "STONK",
    name: "STONK",
    address: "0xb4058411967d5046f3510943103805be61f0600e",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xb4058411967d5046f3510943103805be61f0600e.png",
  },
  "0xb683d83a532e2cb7dfa5275eed3698436371cc9f": {
    symbol: "BTU",
    name: "BTU Protocol",
    address: "0xb683d83a532e2cb7dfa5275eed3698436371cc9f",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xb683d83a532e2cb7dfa5275eed3698436371cc9f.png",
  },
  "0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec": {
    symbol: "REL",
    name: "Relevant",
    address: "0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xb6c4267c4877bb0d6b1685cfd85b0fbe82f105ec.png",
  },
  "0xba100000625a3754423978a60c9317c58a424e3d": {
    symbol: "BAL",
    name: "Balancer",
    decimals: 18,
    address: "0xba100000625a3754423978a60c9317c58a424e3d",
    logoURI:
      "https://tokens.1inch.exchange/0xba100000625a3754423978a60c9317c58a424e3d.png",
  },
  "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55": {
    symbol: "BAND",
    name: "Band Protocol",
    address: "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55.png",
  },
  "0xbb1fa4fdeb3459733bf67ebc6f893003fa976a82": {
    symbol: "XPAT",
    name: "Bitnation",
    address: "0xbb1fa4fdeb3459733bf67ebc6f893003fa976a82",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xbb1fa4fdeb3459733bf67ebc6f893003fa976a82.png",
  },
  "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd": {
    symbol: "LRC",
    name: "Loopring",
    address: "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xbbbbca6a901c926f240b89eacb641d8aec7aeafd.png",
  },
  "0xbc86727e770de68b1060c91f6bb6945c73e10388": {
    symbol: "XNK",
    name: "Ink Protocol",
    address: "0xbc86727e770de68b1060c91f6bb6945c73e10388",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xbc86727e770de68b1060c91f6bb6945c73e10388.png",
  },
  "0xbd2949f67dcdc549c6ebe98696449fa79d988a9f": {
    symbol: "eMTRG",
    name: "Meter Governance mapped by Meter.io",
    address: "0xbd2949f67dcdc549c6ebe98696449fa79d988a9f",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xbd2949f67dcdc549c6ebe98696449fa79d988a9f.png",
  },
  "0xd9ec3ff1f8be459bb9369b4e79e9ebcf7141c093": {
    symbol: "KAI",
    name: "KardiaChain Token",
    decimals: 18,
    address: "0xd9ec3ff1f8be459bb9369b4e79e9ebcf7141c093",
    logoURI:
      "https://tokens.1inch.exchange/0xd9ec3ff1f8be459bb9369b4e79e9ebcf7141c093.png",
  },
  "0xbe9375c6a420d2eeb258962efb95551a5b722803": {
    symbol: "STMX",
    name: "Kyber StormX Token",
    address: "0xbe9375c6a420d2eeb258962efb95551a5b722803",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xbe9375c6a420d2eeb258962efb95551a5b722803.png",
  },
  "0xbf2179859fc6d5bee9bf9158632dc51678a4100e": {
    symbol: "ELF",
    name: "Aelf",
    address: "0xbf2179859fc6d5bee9bf9158632dc51678a4100e",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xbf2179859fc6d5bee9bf9158632dc51678a4100e.png",
  },
  "0xc00e94cb662c3520282e6f5717214004a7f26888": {
    symbol: "COMP",
    name: "Compound",
    decimals: 18,
    address: "0xc00e94cb662c3520282e6f5717214004a7f26888",
    logoURI:
      "https://tokens.1inch.exchange/0xc00e94cb662c3520282e6f5717214004a7f26888.png",
  },
  "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f": {
    symbol: "SNX",
    name: "Synthetix Network Token",
    decimals: 18,
    address: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    logoURI:
      "https://tokens.1inch.exchange/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f.png",
  },
  "0x27702a26126e0b3702af63ee09ac4d1a084ef628": {
    symbol: "ALEPH",
    name: "aleph.im v2",
    address: "0x27702a26126e0b3702af63ee09ac4d1a084ef628",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0x27702a26126e0b3702af63ee09ac4d1a084ef628.png",
  },
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": {
    symbol: "WETH",
    name: "Wrapped Ether",
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
  },
  "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4": {
    symbol: "cWBTC",
    name: "Compound Wrapped BTC",
    decimals: 8,
    address: "0xc11b1268c1a384e55c48c2391d8d480264a3a7f4",
    logoURI:
      "https://tokens.1inch.exchange/0xc11b1268c1a384e55c48c2391d8d480264a3a7f4.png",
  },
  "0xc12d099be31567add4e4e4d0d45691c3f58f5663": {
    symbol: "AUC",
    name: "Auctus",
    address: "0xc12d099be31567add4e4e4d0d45691c3f58f5663",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xc12d099be31567add4e4e4d0d45691c3f58f5663.png",
  },
  "0xc27a2f05fa577a83ba0fdb4c38443c0718356501": {
    symbol: "TAU",
    name: "Lamden Tau",
    address: "0xc27a2f05fa577a83ba0fdb4c38443c0718356501",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xc27a2f05fa577a83ba0fdb4c38443c0718356501.png",
  },
  "0xc28e931814725bbeb9e670676fabbcb694fe7df2": {
    symbol: "EQUAD",
    name: "Quadrant Protocol",
    address: "0xc28e931814725bbeb9e670676fabbcb694fe7df2",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xc28e931814725bbeb9e670676fabbcb694fe7df2.png",
  },
  "0xc3dd23a0a854b4f9ae80670f528094e9eb607ccb": {
    symbol: "TRND",
    name: "Trendering",
    address: "0xc3dd23a0a854b4f9ae80670f528094e9eb607ccb",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xc3dd23a0a854b4f9ae80670f528094e9eb607ccb.png",
  },
  "0xc5bbae50781be1669306b9e001eff57a2957b09d": {
    symbol: "GTO",
    name: "Gifto",
    address: "0xc5bbae50781be1669306b9e001eff57a2957b09d",
    decimals: 5,
    logoURI:
      "https://tokens.1inch.exchange/0xc5bbae50781be1669306b9e001eff57a2957b09d.png",
  },
  "0xc75f15ada581219c95485c578e124df3985e4ce0": {
    symbol: "ZZZ",
    name: "zzz.finance",
    address: "0xc75f15ada581219c95485c578e124df3985e4ce0",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xc75f15ada581219c95485c578e124df3985e4ce0.png",
  },
  "0xcc4304a31d09258b0029ea7fe63d032f52e44efe": {
    symbol: "SWAP",
    name: "TrustSwap Token",
    address: "0xcc4304a31d09258b0029ea7fe63d032f52e44efe",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xcc4304a31d09258b0029ea7fe63d032f52e44efe.png",
  },
  "0xcc80c051057b774cd75067dc48f8987c4eb97a5e": {
    symbol: "NEC",
    name: "Ethfinex Nectar Token",
    address: "0xcc80c051057b774cd75067dc48f8987c4eb97a5e",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xcc80c051057b774cd75067dc48f8987c4eb97a5e.png",
  },
  "0xcd62b1c403fa761baadfc74c525ce2b51780b184": {
    symbol: "ANJ",
    name: "Aragon Network Juror",
    address: "0xcd62b1c403fa761baadfc74c525ce2b51780b184",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xcd62b1c403fa761baadfc74c525ce2b51780b184.png",
  },
  "0xcee1d3c3a02267e37e6b373060f79d5d7b9e1669": {
    symbol: "YFFI",
    name: "yffi.finance",
    address: "0xcee1d3c3a02267e37e6b373060f79d5d7b9e1669",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xcee1d3c3a02267e37e6b373060f79d5d7b9e1669.png",
  },
  "0xcf8f9555d55ce45a3a33a81d6ef99a2a2e71dee2": {
    symbol: "CBIX7",
    name: "CBI Index 7",
    address: "0xcf8f9555d55ce45a3a33a81d6ef99a2a2e71dee2",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xcf8f9555d55ce45a3a33a81d6ef99a2a2e71dee2.png",
  },
  "0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8": {
    symbol: "MCX",
    name: "MachiX Token",
    address: "0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xd15ecdcf5ea68e3995b2d0527a0ae0a3258302f8.png",
  },
  "0xd26114cd6ee289accf82350c8d8487fedb8a0c07": {
    symbol: "OMG",
    name: "OmiseGO",
    address: "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xd26114cd6ee289accf82350c8d8487fedb8a0c07.png",
  },
  "0xd341d1680eeee3255b8c4c75bcce7eb57f144dae": {
    symbol: "ONG",
    name: "onG.social",
    address: "0xd341d1680eeee3255b8c4c75bcce7eb57f144dae",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xd341d1680eeee3255b8c4c75bcce7eb57f144dae.png",
  },
  "0xd46ba6d942050d489dbd938a2c909a5d5039a161": {
    symbol: "AMPL",
    name: "Ampleforth",
    address: "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
    decimals: 9,
    logoURI:
      "https://tokens.1inch.exchange/0xd46ba6d942050d489dbd938a2c909a5d5039a161.png",
  },
  "0xd4c435f5b09f855c3317c8524cb1f586e42795fa": {
    symbol: "CND",
    name: "Cindicator",
    address: "0xd4c435f5b09f855c3317c8524cb1f586e42795fa",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xd4c435f5b09f855c3317c8524cb1f586e42795fa.png",
  },
  "0xd559f20296ff4895da39b5bd9add54b442596a61": {
    symbol: "FTX",
    name: "FintruX",
    address: "0xd559f20296ff4895da39b5bd9add54b442596a61",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xd559f20296ff4895da39b5bd9add54b442596a61.png",
  },
  "0xd6f0bb2a45110f819e908a915237d652ac7c5aa8": {
    symbol: "BUIDL",
    name: "DFOHub",
    address: "0xd6f0bb2a45110f819e908a915237d652ac7c5aa8",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xd6f0bb2a45110f819e908a915237d652ac7c5aa8.png",
  },
  "0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8": {
    symbol: "SCL",
    name: "Sociall",
    address: "0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8",
    decimals: 8,
    logoURI:
      "https://tokens.1inch.exchange/0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8.png",
  },
  "0xd8912c10681d8b21fd3742244f44658dba12264e": {
    symbol: "PLU",
    name: "Pluton",
    address: "0xd8912c10681d8b21fd3742244f44658dba12264e",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xd8912c10681d8b21fd3742244f44658dba12264e.png",
  },
  "0xdac17f958d2ee523a2206206994597c13d831ec7": {
    symbol: "USDT",
    name: "Tether USD",
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    decimals: 6,
    logoURI:
      "https://tokens.1inch.exchange/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
  },
  "0xdb25f211ab05b1c97d595516f45794528a807ad8": {
    symbol: "EURS",
    name: "STASIS EURS",
    address: "0xdb25f211ab05b1c97d595516f45794528a807ad8",
    decimals: 2,
    logoURI:
      "https://tokens.1inch.exchange/0xdb25f211ab05b1c97d595516f45794528a807ad8.png",
  },
  "0xdd974d5c2e2928dea5f71b9825b8b646686bd200": {
    symbol: "KNC",
    name: "KyberNetwork",
    address: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xdd974d5c2e2928dea5f71b9825b8b646686bd200.png",
  },
  "0xdf2c7238198ad8b389666574f2d8bc411a4b7428": {
    symbol: "MFT",
    name: "Mainframe",
    address: "0xdf2c7238198ad8b389666574f2d8bc411a4b7428",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xdf2c7238198ad8b389666574f2d8bc411a4b7428.png",
  },
  "0xdf574c24545e5ffecb9a659c229253d4111d87e1": {
    symbol: "HUSD",
    name: "HUSD",
    decimals: 8,
    address: "0xdf574c24545e5ffecb9a659c229253d4111d87e1",
    logoURI:
      "https://tokens.1inch.exchange/0xdf574c24545e5ffecb9a659c229253d4111d87e1.png",
  },
  "0xdfe691f37b6264a90ff507eb359c45d55037951c": {
    symbol: "KARMA",
    name: "Karma",
    address: "0xdfe691f37b6264a90ff507eb359c45d55037951c",
    decimals: 4,
    logoURI:
      "https://tokens.1inch.exchange/0xdfe691f37b6264a90ff507eb359c45d55037951c.png",
  },
  "0xe17f017475a709de58e976081eb916081ff4c9d5": {
    symbol: "RMPL",
    name: "RMPL",
    address: "0xe17f017475a709de58e976081eb916081ff4c9d5",
    decimals: 9,
    logoURI:
      "https://tokens.1inch.exchange/0xe17f017475a709de58e976081eb916081ff4c9d5.png",
  },
  "0xe25b0bba01dc5630312b6a21927e578061a13f55": {
    symbol: "SHIP",
    name: "ShipChain SHIP",
    address: "0xe25b0bba01dc5630312b6a21927e578061a13f55",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xe25b0bba01dc5630312b6a21927e578061a13f55.png",
  },
  "0xe3818504c1b32bf1557b16c238b2e01fd3149c17": {
    symbol: "PLR",
    name: "Pillar",
    address: "0xe3818504c1b32bf1557b16c238b2e01fd3149c17",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xe3818504c1b32bf1557b16c238b2e01fd3149c17.png",
  },
  "0xe41d2489571d322189246dafa5ebde1f4699f498": {
    symbol: "ZRX",
    name: "0x Protocol",
    address: "0xe41d2489571d322189246dafa5ebde1f4699f498",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xe41d2489571d322189246dafa5ebde1f4699f498.png",
  },
  "0xe48972fcd82a274411c01834e2f031d4377fa2c0": {
    symbol: "2KEY",
    name: "2key.network",
    address: "0xe48972fcd82a274411c01834e2f031d4377fa2c0",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xe48972fcd82a274411c01834e2f031d4377fa2c0.png",
  },
  "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d": {
    symbol: "renBTC",
    name: "renBTC",
    decimals: 8,
    address: "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
    logoURI:
      "https://tokens.1inch.exchange/0xeb4c2781e4eba804ce9a9803c67d0893436bb27d.png",
  },
  "0xec67005c4e498ec7f55e092bd1d35cbc47c91892": {
    symbol: "MLN",
    name: "Melon Token",
    address: "0xec67005c4e498ec7f55e092bd1d35cbc47c91892",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xec67005c4e498ec7f55e092bd1d35cbc47c91892.png",
  },
  "0xedd7c94fd7b4971b916d15067bc454b9e1bad980": {
    symbol: "ZIPT",
    name: "Zippie",
    address: "0xedd7c94fd7b4971b916d15067bc454b9e1bad980",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xedd7c94fd7b4971b916d15067bc454b9e1bad980.png",
  },
  "0xeeee2a622330e6d2036691e983dee87330588603": {
    symbol: "ASKO",
    name: "Askobar Network",
    address: "0xeeee2a622330e6d2036691e983dee87330588603",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xeeee2a622330e6d2036691e983dee87330588603.png",
  },
  "0xeeeeeeeee2af8d0e1940679860398308e0ef24d6": {
    symbol: "ETHV",
    name: "Ethverse Token",
    address: "0xeeeeeeeee2af8d0e1940679860398308e0ef24d6",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xeeeeeeeee2af8d0e1940679860398308e0ef24d6.png",
  },
  "0xef9cd7882c067686691b6ff49e650b43afbbcc6b": {
    symbol: "FNX",
    name: "FinNexus",
    address: "0xef9cd7882c067686691b6ff49e650b43afbbcc6b",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xef9cd7882c067686691b6ff49e650b43afbbcc6b.png",
  },
  "0xefbd6d7def37ffae990503ecdb1291b2f7e38788": {
    symbol: "EVO",
    name: "Evolution",
    address: "0xefbd6d7def37ffae990503ecdb1291b2f7e38788",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xefbd6d7def37ffae990503ecdb1291b2f7e38788.png",
  },
  "0xf04a8ac553fcedb5ba99a64799155826c136b0be": {
    symbol: "FLIXX",
    name: "Flixxo",
    address: "0xf04a8ac553fcedb5ba99a64799155826c136b0be",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xf04a8ac553fcedb5ba99a64799155826c136b0be.png",
  },
  "0xf0fac7104aac544e4a7ce1a55adf2b5a25c65bd1": {
    symbol: "PAMP",
    name: "Pamp Network",
    address: "0xf0fac7104aac544e4a7ce1a55adf2b5a25c65bd1",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xf0fac7104aac544e4a7ce1a55adf2b5a25c65bd1.png",
  },
  "0xf1290473e210b2108a85237fbcd7b6eb42cc654f": {
    symbol: "HEDG",
    name: "Hedge Trade",
    address: "0xf1290473e210b2108a85237fbcd7b6eb42cc654f",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xf1290473e210b2108a85237fbcd7b6eb42cc654f.png",
  },
  "0xf29992d7b589a0a6bd2de7be29a97a6eb73eaf85": {
    symbol: "DMST",
    name: "DMScript",
    address: "0xf29992d7b589a0a6bd2de7be29a97a6eb73eaf85",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xf29992d7b589a0a6bd2de7be29a97a6eb73eaf85.png",
  },
  "0xf29e46887ffae92f1ff87dfe39713875da541373": {
    symbol: "UNC",
    name: "UniCrypt",
    address: "0xf29e46887ffae92f1ff87dfe39713875da541373",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xf29e46887ffae92f1ff87dfe39713875da541373.png",
  },
  "0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509": {
    symbol: "POWER",
    name: "UniPower",
    address: "0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xf2f9a7e93f845b3ce154efbeb64fb9346fcce509.png",
  },
  "0xf433089366899d83a9f26a773d59ec7ecf30355e": {
    symbol: "MTL",
    name: "Metal",
    address: "0xf433089366899d83a9f26a773d59ec7ecf30355e",
    decimals: 8,
    logoURI:
      "https://tokens.1inch.exchange/0xf433089366899d83a9f26a773d59ec7ecf30355e.png",
  },
  "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c": {
    symbol: "ENJ",
    name: "Enjin Coin",
    address: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c.png",
  },
  "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9": {
    symbol: "cUSDT",
    name: "Compound USDT",
    decimals: 8,
    address: "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
    logoURI:
      "https://tokens.1inch.exchange/0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9.png",
  },
  "0xf8e386eda857484f5a12e4b5daa9984e06e73705": {
    symbol: "IND",
    name: "Indorse",
    address: "0xf8e386eda857484f5a12e4b5daa9984e06e73705",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xf8e386eda857484f5a12e4b5daa9984e06e73705.png",
  },
  "0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27": {
    symbol: "XAMP",
    name: "Antiample",
    decimals: 9,
    address: "0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27",
    logoURI:
      "https://tokens.1inch.exchange/0xf911a7ec46a2c6fa49193212fe4a2a9b95851c27.png",
  },
  "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6": {
    symbol: "RCN",
    name: "Ripio",
    address: "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
    decimals: 18,
    logoURI:
      "https://tokens.1inch.exchange/0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6.png",
  },
  "0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d": {
    symbol: "aDAIv1",
    name: "Aave Interest bearing DAI",
    decimals: 18,
    address: "0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d",
    logoURI:
      "https://tokens.1inch.exchange/0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85d.png",
  },
  "0x00006100f7090010005f1bd7ae6122c3c2cf0090": {
    symbol: "TAUD",
    name: "TrueAUD",
    decimals: 18,
    address: "0x00006100f7090010005f1bd7ae6122c3c2cf0090",
    logoURI:
      "https://tokens.1inch.exchange/0x00006100f7090010005f1bd7ae6122c3c2cf0090.png",
  },
  "0x00000000441378008ea67f4284a57932b1c000a5": {
    symbol: "TGBP",
    name: "TrueGBP",
    decimals: 18,
    address: "0x00000000441378008ea67f4284a57932b1c000a5",
    logoURI:
      "https://tokens.1inch.exchange/0x00000000441378008ea67f4284a57932b1c000a5.png",
  },
  "0x00000100f2a2bd000715001920eb70d229700085": {
    symbol: "TCAD",
    name: "TrueCAD",
    decimals: 18,
    address: "0x00000100f2a2bd000715001920eb70d229700085",
    logoURI:
      "https://tokens.1inch.exchange/0x00000100f2a2bd000715001920eb70d229700085.png",
  },
  "0x0000852600ceb001e08e00bc008be620d60031f2": {
    symbol: "THKD",
    name: "TrueHKD",
    decimals: 18,
    address: "0x0000852600ceb001e08e00bc008be620d60031f2",
    logoURI:
      "https://tokens.1inch.exchange/0x0000852600ceb001e08e00bc008be620d60031f2.png",
  },
  "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
    symbol: "ETH",
    name: "Ethereum",
    decimals: 18,
    address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    logoURI:
      "https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
  },
  "0x0000000000b3f879cb30fe243b4dfee438691c04": {
    symbol: "GST2",
    name: "Gastoken.io 2",
    decimals: 2,
    address: "0x0000000000b3f879cb30fe243b4dfee438691c04",
    logoURI:
      "https://tokens.1inch.exchange/0x0000000000b3f879cb30fe243b4dfee438691c04.png",
  },
  "0x06af07097c9eeb7fd685c692751d5c66db49c215": {
    symbol: "CHAI",
    name: "Chai Token",
    decimals: 18,
    address: "0x06af07097c9eeb7fd685c692751d5c66db49c215",
    logoURI:
      "https://tokens.1inch.exchange/0x06af07097c9eeb7fd685c692751d5c66db49c215.png",
  },
  "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e": {
    symbol: "cBAT",
    name: "Compound Basic Attention Token",
    decimals: 8,
    address: "0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e",
    logoURI:
      "https://tokens.1inch.exchange/0x6c8c6b02e7b2be14d4fa6022dfd6d75921d90e4e.png",
  },
  "0xf5dce57282a584d2746faf1593d3121fcac444dc": {
    symbol: "cSAI",
    name: "Compound Sai",
    decimals: 8,
    address: "0xf5dce57282a584d2746faf1593d3121fcac444dc",
    logoURI:
      "https://tokens.1inch.exchange/0xf5dce57282a584d2746faf1593d3121fcac444dc.png",
  },
  "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5": {
    symbol: "cETH",
    name: "Compound ETH",
    decimals: 8,
    address: "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
    logoURI:
      "https://tokens.1inch.exchange/0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5.png",
  },
  "0x39aa39c021dfbae8fac545936693ac917d5e7563": {
    symbol: "cUSDC",
    name: "Compound USD Coin",
    decimals: 8,
    address: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
    logoURI:
      "https://tokens.1inch.exchange/0x39aa39c021dfbae8fac545936693ac917d5e7563.png",
  },
  "0x158079ee67fce2f58472a96584a73c7ab9ac95c1": {
    symbol: "cREP",
    name: "Compound Augur",
    decimals: 8,
    address: "0x158079ee67fce2f58472a96584a73c7ab9ac95c1",
    logoURI:
      "https://tokens.1inch.exchange/0x158079ee67fce2f58472a96584a73c7ab9ac95c1.png",
  },
  "0x493c57c4763932315a328269e1adad09653b9081": {
    symbol: "fiDAI",
    name: "bZx DAI iToken",
    decimals: 18,
    address: "0x493c57c4763932315a328269e1adad09653b9081",
    logoURI:
      "https://tokens.1inch.exchange/0x493c57c4763932315a328269e1adad09653b9081.png",
  },
  "0x77f973fcaf871459aa58cd81881ce453759281bc": {
    symbol: "fiETH",
    name: "bZx ETH iToken",
    decimals: 18,
    address: "0x77f973fcaf871459aa58cd81881ce453759281bc",
    logoURI:
      "https://tokens.1inch.exchange/0x77f973fcaf871459aa58cd81881ce453759281bc.png",
  },
  "0x8a8079c7149b8a1611e5c5d978dca3be16545f83": {
    symbol: "iADA",
    name: "Synth iADA",
    decimals: 18,
    address: "0x8a8079c7149b8a1611e5c5d978dca3be16545f83",
    logoURI:
      "https://tokens.1inch.exchange/0x8a8079c7149b8a1611e5c5d978dca3be16545f83.png",
  },
  "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3": {
    symbol: "LEO",
    name: "Bitfinex LEO Token",
    decimals: 18,
    address: "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
    logoURI:
      "https://tokens.1inch.exchange/0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3.png",
  },
  "0x6f259637dcd74c767781e37bc6133cd6a68aa161": {
    symbol: "HT",
    name: "HuobiToken",
    decimals: 18,
    address: "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
    logoURI:
      "https://tokens.1inch.exchange/0x6f259637dcd74c767781e37bc6133cd6a68aa161.png",
  },
  "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0": {
    symbol: "MATIC",
    name: "Matic Token",
    decimals: 18,
    address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    logoURI:
      "https://tokens.1inch.exchange/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
  },
  "0x6b175474e89094c44da98b954eedeac495271d0f": {
    symbol: "DAI",
    name: "Dai Stablecoin",
    decimals: 18,
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    logoURI:
      "https://tokens.1inch.exchange/0x6b175474e89094c44da98b954eedeac495271d0f.png",
  },
  "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359": {
    symbol: "SAI",
    name: "Sai Stablecoin",
    decimals: 18,
    address: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
    logoURI:
      "https://tokens.1inch.exchange/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359.png",
  },
  "0x57ab1ec28d129707052df4df418d58a2d46d5f51": {
    symbol: "sUSD",
    name: "Synth sUSD",
    decimals: 18,
    address: "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
    logoURI:
      "https://tokens.1inch.exchange/0x57ab1ec28d129707052df4df418d58a2d46d5f51.png",
  },
  "0xd71ecff9342a5ced620049e616c5035f1db98620": {
    symbol: "sEUR",
    name: "Synth sEUR",
    decimals: 18,
    address: "0xd71ecff9342a5ced620049e616c5035f1db98620",
    logoURI:
      "https://tokens.1inch.exchange/0xd71ecff9342a5ced620049e616c5035f1db98620.png",
  },
  "0xd6014ea05bde904448b743833ddf07c3c7837481": {
    symbol: "iBTC",
    name: "Synth iBTC",
    decimals: 18,
    address: "0xd6014ea05bde904448b743833ddf07c3c7837481",
    logoURI:
      "https://tokens.1inch.exchange/0xd6014ea05bde904448b743833ddf07c3c7837481.png",
  },
  "0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6": {
    symbol: "sBTC",
    name: "Synth sBTC",
    decimals: 18,
    address: "0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6",
    logoURI:
      "https://tokens.1inch.exchange/0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6.png",
  },
  "0xf48e200eaf9906362bb1442fca31e0835773b8b4": {
    symbol: "sAUD",
    name: "Synth sAUD",
    decimals: 18,
    address: "0xf48e200eaf9906362bb1442fca31e0835773b8b4",
    logoURI:
      "https://tokens.1inch.exchange/0xf48e200eaf9906362bb1442fca31e0835773b8b4.png",
  },
  "0xeabacd844a196d7faf3ce596edebf9900341b420": {
    symbol: "sCEX",
    name: "Synth sCEX",
    decimals: 18,
    address: "0xeabacd844a196d7faf3ce596edebf9900341b420",
    logoURI:
      "https://tokens.1inch.exchange/0xeabacd844a196d7faf3ce596edebf9900341b420.png",
  },
  "0x27269b3e45a4d3e79a3d6bfee0c8fb13d0d711a6": {
    symbol: "iXRP",
    name: "Synth iXRP",
    decimals: 18,
    address: "0x27269b3e45a4d3e79a3d6bfee0c8fb13d0d711a6",
    logoURI:
      "https://tokens.1inch.exchange/0x27269b3e45a4d3e79a3d6bfee0c8fb13d0d711a6.png",
  },
  "0x336213e1ddfc69f4701fc3f86f4ef4a160c1159d": {
    symbol: "iCEX",
    name: "Synth iCEX",
    decimals: 18,
    address: "0x336213e1ddfc69f4701fc3f86f4ef4a160c1159d",
    logoURI:
      "https://tokens.1inch.exchange/0x336213e1ddfc69f4701fc3f86f4ef4a160c1159d.png",
  },
  "0xcb98f42221b2c251a4e74a1609722ee09f0cc08e": {
    symbol: "iDASH",
    name: "Synth iDASH",
    decimals: 18,
    address: "0xcb98f42221b2c251a4e74a1609722ee09f0cc08e",
    logoURI:
      "https://tokens.1inch.exchange/0xcb98f42221b2c251a4e74a1609722ee09f0cc08e.png",
  },
  "0xd50c1746d835d2770dda3703b69187bffeb14126": {
    symbol: "iETC",
    name: "Synth iETC",
    decimals: 18,
    address: "0xd50c1746d835d2770dda3703b69187bffeb14126",
    logoURI:
      "https://tokens.1inch.exchange/0xd50c1746d835d2770dda3703b69187bffeb14126.png",
  },
  "0x4adf728e2df4945082cdd6053869f51278fae196": {
    symbol: "iXMR",
    name: "Synth iXMR",
    decimals: 18,
    address: "0x4adf728e2df4945082cdd6053869f51278fae196",
    logoURI:
      "https://tokens.1inch.exchange/0x4adf728e2df4945082cdd6053869f51278fae196.png",
  },
  "0xe36e2d3c7c34281fa3bc737950a68571736880a1": {
    symbol: "sADA",
    name: "Synth sADA",
    decimals: 18,
    address: "0xe36e2d3c7c34281fa3bc737950a68571736880a1",
    logoURI:
      "https://tokens.1inch.exchange/0xe36e2d3c7c34281fa3bc737950a68571736880a1.png",
  },
  "0xfe33ae95a9f0da8a845af33516edc240dcd711d6": {
    symbol: "sDASH",
    name: "Synth sDASH",
    decimals: 18,
    address: "0xfe33ae95a9f0da8a845af33516edc240dcd711d6",
    logoURI:
      "https://tokens.1inch.exchange/0xfe33ae95a9f0da8a845af33516edc240dcd711d6.png",
  },
  "0x88c8cf3a212c0369698d13fe98fcb76620389841": {
    symbol: "sEOS",
    name: "Synth sEOS",
    decimals: 18,
    address: "0x88c8cf3a212c0369698d13fe98fcb76620389841",
    logoURI:
      "https://tokens.1inch.exchange/0x88c8cf3a212c0369698d13fe98fcb76620389841.png",
  },
  "0x22602469d704bffb0936c7a7cfcd18f7aa269375": {
    symbol: "sETC",
    name: "Synth sETC",
    decimals: 18,
    address: "0x22602469d704bffb0936c7a7cfcd18f7aa269375",
    logoURI:
      "https://tokens.1inch.exchange/0x22602469d704bffb0936c7a7cfcd18f7aa269375.png",
  },
  "0x23348160d7f5aca21195df2b70f28fce2b0be9fc": {
    symbol: "sFTSE",
    name: "Synth sFTSE",
    decimals: 18,
    address: "0x23348160d7f5aca21195df2b70f28fce2b0be9fc",
    logoURI:
      "https://tokens.1inch.exchange/0x23348160d7f5aca21195df2b70f28fce2b0be9fc.png",
  },
  "0x757de3ac6b830a931ef178c6634c5c551773155c": {
    symbol: "sNIKKEI",
    name: "Synth sNIKKEI",
    decimals: 18,
    address: "0x757de3ac6b830a931ef178c6634c5c551773155c",
    logoURI:
      "https://tokens.1inch.exchange/0x757de3ac6b830a931ef178c6634c5c551773155c.png",
  },
  "0x5299d6f7472dcc137d7f3c4bcfbbb514babf341a": {
    symbol: "sXMR",
    name: "Synth sXMR",
    decimals: 18,
    address: "0x5299d6f7472dcc137d7f3c4bcfbbb514babf341a",
    logoURI:
      "https://tokens.1inch.exchange/0x5299d6f7472dcc137d7f3c4bcfbbb514babf341a.png",
  },
  "0xa2b0fde6d710e201d0d608e924a484d1a5fed57c": {
    symbol: "sXRP",
    name: "Synth sXRP",
    decimals: 18,
    address: "0xa2b0fde6d710e201d0d608e924a484d1a5fed57c",
    logoURI:
      "https://tokens.1inch.exchange/0xa2b0fde6d710e201d0d608e924a484d1a5fed57c.png",
  },
  "0x0f83287ff768d1c1e17a42f44d644d7f22e8ee1d": {
    symbol: "sCHF",
    name: "Synth sCHF",
    decimals: 18,
    address: "0x0f83287ff768d1c1e17a42f44d644d7f22e8ee1d",
    logoURI:
      "https://tokens.1inch.exchange/0x0f83287ff768d1c1e17a42f44d644d7f22e8ee1d.png",
  },
  "0xf6b1c627e95bfc3c1b4c9b825a032ff0fbf3e07d": {
    symbol: "sJPY",
    name: "Synth sJPY",
    decimals: 18,
    address: "0xf6b1c627e95bfc3c1b4c9b825a032ff0fbf3e07d",
    logoURI:
      "https://tokens.1inch.exchange/0xf6b1c627e95bfc3c1b4c9b825a032ff0fbf3e07d.png",
  },
  "0x6a22e5e94388464181578aa7a6b869e00fe27846": {
    symbol: "sXAG",
    name: "Synth sXAG",
    decimals: 18,
    address: "0x6a22e5e94388464181578aa7a6b869e00fe27846",
    logoURI:
      "https://tokens.1inch.exchange/0x6a22e5e94388464181578aa7a6b869e00fe27846.png",
  },
  "0xf2e08356588ec5cd9e437552da87c0076b4970b0": {
    symbol: "sTRX",
    name: "Synth sTRX",
    decimals: 18,
    address: "0xf2e08356588ec5cd9e437552da87c0076b4970b0",
    logoURI:
      "https://tokens.1inch.exchange/0xf2e08356588ec5cd9e437552da87c0076b4970b0.png",
  },
  "0xc14103c2141e842e228fbac594579e798616ce7a": {
    symbol: "sLTC",
    name: "Synth sLTC",
    decimals: 18,
    address: "0xc14103c2141e842e228fbac594579e798616ce7a",
    logoURI:
      "https://tokens.1inch.exchange/0xc14103c2141e842e228fbac594579e798616ce7a.png",
  },
  "0xa9859874e1743a32409f75bb11549892138bba1e": {
    symbol: "iETH",
    name: "Synth iETH",
    decimals: 18,
    address: "0xa9859874e1743a32409f75bb11549892138bba1e",
    logoURI:
      "https://tokens.1inch.exchange/0xa9859874e1743a32409f75bb11549892138bba1e.png",
  },
  "0xc5807183a9661a533cb08cbc297594a0b864dc12": {
    symbol: "iTRX",
    name: "Synth iTRX",
    decimals: 18,
    address: "0xc5807183a9661a533cb08cbc297594a0b864dc12",
    logoURI:
      "https://tokens.1inch.exchange/0xc5807183a9661a533cb08cbc297594a0b864dc12.png",
  },
  "0x2d7ac061fc3db53c39fe1607fb8cec1b2c162b01": {
    symbol: "iLINK",
    name: "Synth iLINK",
    decimals: 18,
    address: "0x2d7ac061fc3db53c39fe1607fb8cec1b2c162b01",
    logoURI:
      "https://tokens.1inch.exchange/0x2d7ac061fc3db53c39fe1607fb8cec1b2c162b01.png",
  },
  "0xe1afe1fd76fd88f78cbf599ea1846231b8ba3b6b": {
    symbol: "sDEFI",
    name: "Synth sDEFI",
    decimals: 18,
    address: "0xe1afe1fd76fd88f78cbf599ea1846231b8ba3b6b",
    logoURI:
      "https://tokens.1inch.exchange/0xe1afe1fd76fd88f78cbf599ea1846231b8ba3b6b.png",
  },
  "0x97fe22e7341a0cd8db6f6c021a24dc8f4dad855f": {
    symbol: "sGBP",
    name: "Synth sGBP",
    decimals: 18,
    address: "0x97fe22e7341a0cd8db6f6c021a24dc8f4dad855f",
    logoURI:
      "https://tokens.1inch.exchange/0x97fe22e7341a0cd8db6f6c021a24dc8f4dad855f.png",
  },
  "0x261efcdd24cea98652b9700800a13dfbca4103ff": {
    symbol: "sXAU",
    name: "Synth sXAU",
    decimals: 18,
    address: "0x261efcdd24cea98652b9700800a13dfbca4103ff",
    logoURI:
      "https://tokens.1inch.exchange/0x261efcdd24cea98652b9700800a13dfbca4103ff.png",
  },
  "0x617aecb6137b5108d1e7d4918e3725c8cebdb848": {
    symbol: "sBNB",
    name: "Synth sBNB",
    decimals: 18,
    address: "0x617aecb6137b5108d1e7d4918e3725c8cebdb848",
    logoURI:
      "https://tokens.1inch.exchange/0x617aecb6137b5108d1e7d4918e3725c8cebdb848.png",
  },
  "0x2e59005c5c0f0a4d77cca82653d48b46322ee5cd": {
    symbol: "sXTZ",
    name: "Synth sXTZ",
    decimals: 18,
    address: "0x2e59005c5c0f0a4d77cca82653d48b46322ee5cd",
    logoURI:
      "https://tokens.1inch.exchange/0x2e59005c5c0f0a4d77cca82653d48b46322ee5cd.png",
  },
  "0xbbc455cb4f1b9e4bfc4b73970d360c8f032efee6": {
    symbol: "sLINK",
    name: "Synth sLINK",
    decimals: 18,
    address: "0xbbc455cb4f1b9e4bfc4b73970d360c8f032efee6",
    logoURI:
      "https://tokens.1inch.exchange/0xbbc455cb4f1b9e4bfc4b73970d360c8f032efee6.png",
  },
  "0xafd870f32ce54efdbf677466b612bf8ad164454b": {
    symbol: "iBNB",
    name: "Synth iBNB",
    decimals: 18,
    address: "0xafd870f32ce54efdbf677466b612bf8ad164454b",
    logoURI:
      "https://tokens.1inch.exchange/0xafd870f32ce54efdbf677466b612bf8ad164454b.png",
  },
  "0x8deef89058090ac5655a99eeb451a4f9183d1678": {
    symbol: "iXTZ",
    name: "Synth iXTZ",
    decimals: 18,
    address: "0x8deef89058090ac5655a99eeb451a4f9183d1678",
    logoURI:
      "https://tokens.1inch.exchange/0x8deef89058090ac5655a99eeb451a4f9183d1678.png",
  },
  "0x79da1431150c9b82d2e5dfc1c68b33216846851e": {
    symbol: "iLTC",
    name: "Synth iLTC",
    decimals: 18,
    address: "0x79da1431150c9b82d2e5dfc1c68b33216846851e",
    logoURI:
      "https://tokens.1inch.exchange/0x79da1431150c9b82d2e5dfc1c68b33216846851e.png",
  },
  "0xf4eebdd0704021ef2a6bbe993fdf93030cd784b4": {
    symbol: "iEOS",
    name: "Synth iEOS",
    decimals: 18,
    address: "0xf4eebdd0704021ef2a6bbe993fdf93030cd784b4",
    logoURI:
      "https://tokens.1inch.exchange/0xf4eebdd0704021ef2a6bbe993fdf93030cd784b4.png",
  },
  "0x14d10003807ac60d07bb0ba82caeac8d2087c157": {
    symbol: "iDEFI",
    name: "Synth iDEFI",
    decimals: 18,
    address: "0x14d10003807ac60d07bb0ba82caeac8d2087c157",
    logoURI:
      "https://tokens.1inch.exchange/0x14d10003807ac60d07bb0ba82caeac8d2087c157.png",
  },
  "0xeb269732ab75a6fd61ea60b06fe994cd32a83549": {
    symbol: "USDx",
    name: "dForce",
    decimals: 18,
    address: "0xeb269732ab75a6fd61ea60b06fe994cd32a83549",
    logoURI:
      "https://tokens.1inch.exchange/0xeb269732ab75a6fd61ea60b06fe994cd32a83549.png",
  },
  "0x0000000000085d4780b73119b644ae5ecd22b376": {
    symbol: "TUSD",
    name: "TrueUSD",
    decimals: 18,
    address: "0x0000000000085d4780b73119b644ae5ecd22b376",
    logoURI:
      "https://tokens.1inch.exchange/0x0000000000085d4780b73119b644ae5ecd22b376.png",
  },
  "0x679131f591b4f369acb8cd8c51e68596806c3916": {
    symbol: "TLN",
    name: "Trustlines Network Token",
    decimals: 18,
    address: "0x679131f591b4f369acb8cd8c51e68596806c3916",
    logoURI:
      "https://tokens.1inch.exchange/0x679131f591b4f369acb8cd8c51e68596806c3916.png",
  },
  "0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04": {
    symbol: "aETHv1",
    name: "Aave Interest bearing ETH",
    decimals: 18,
    address: "0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04",
    logoURI:
      "https://tokens.1inch.exchange/0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04.png",
  },
  "0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00": {
    symbol: "aBATv1",
    name: "Aave Interest bearing BAT",
    decimals: 18,
    address: "0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00",
    logoURI:
      "https://tokens.1inch.exchange/0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00.png",
  },
  "0x9d91be44c06d373a8a226e1f3b146956083803eb": {
    symbol: "aKNCv1",
    name: "Aave Interest bearing KNC",
    decimals: 18,
    address: "0x9d91be44c06d373a8a226e1f3b146956083803eb",
    logoURI:
      "https://tokens.1inch.exchange/0x9d91be44c06d373a8a226e1f3b146956083803eb.png",
  },
  "0x7d2d3688df45ce7c552e19c27e007673da9204b8": {
    symbol: "aLENDv1",
    name: "Aave Interest bearing LEND",
    decimals: 18,
    address: "0x7d2d3688df45ce7c552e19c27e007673da9204b8",
    logoURI:
      "https://tokens.1inch.exchange/0x7d2d3688df45ce7c552e19c27e007673da9204b8.png",
  },
  "0x6fce4a401b6b80ace52baaefe4421bd188e76f6f": {
    symbol: "aMANAv1",
    name: "Aave Interest bearing MANA",
    decimals: 18,
    address: "0x6fce4a401b6b80ace52baaefe4421bd188e76f6f",
    logoURI:
      "https://tokens.1inch.exchange/0x6fce4a401b6b80ace52baaefe4421bd188e76f6f.png",
  },
  "0x7deb5e830be29f91e298ba5ff1356bb7f8146998": {
    symbol: "aMKRv1",
    name: "Aave Interest bearing MKR",
    decimals: 18,
    address: "0x7deb5e830be29f91e298ba5ff1356bb7f8146998",
    logoURI:
      "https://tokens.1inch.exchange/0x7deb5e830be29f91e298ba5ff1356bb7f8146998.png",
  },
  "0x71010a9d003445ac60c4e6a7017c1e89a477b438": {
    symbol: "aREPv1",
    name: "Aave Interest bearing REP",
    decimals: 18,
    address: "0x71010a9d003445ac60c4e6a7017c1e89a477b438",
    logoURI:
      "https://tokens.1inch.exchange/0x71010a9d003445ac60c4e6a7017c1e89a477b438.png",
  },
  "0x328c4c80bc7aca0834db37e6600a6c49e12da4de": {
    symbol: "aSNXv1",
    name: "Aave Interest bearing SNX",
    decimals: 18,
    address: "0x328c4c80bc7aca0834db37e6600a6c49e12da4de",
    logoURI:
      "https://tokens.1inch.exchange/0x328c4c80bc7aca0834db37e6600a6c49e12da4de.png",
  },
  "0xfc4b8ed459e00e5400be803a9bb3954234fd50e3": {
    symbol: "aWBTCv1",
    name: "Aave Interest bearing WBTC",
    decimals: 8,
    address: "0xfc4b8ed459e00e5400be803a9bb3954234fd50e3",
    logoURI:
      "https://tokens.1inch.exchange/0xfc4b8ed459e00e5400be803a9bb3954234fd50e3.png",
  },
  "0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f": {
    symbol: "aZRXv1",
    name: "Aave Interest bearing ZRX",
    decimals: 18,
    address: "0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f",
    logoURI:
      "https://tokens.1inch.exchange/0x6fb0855c404e09c47c3fbca25f08d4e41f9f062f.png",
  },
  "0x66fd97a78d8854fec445cd1c80a07896b0b4851f": {
    symbol: "LMY",
    name: "Lunch Money",
    decimals: 18,
    address: "0x66fd97a78d8854fec445cd1c80a07896b0b4851f",
    logoURI:
      "https://tokens.1inch.exchange/0x66fd97a78d8854fec445cd1c80a07896b0b4851f.png",
  },
  "0x16de59092dae5ccf4a1e6439d611fd0653f0bd01": {
    symbol: "yDAIv2",
    name: "iearn DAIv2",
    decimals: 18,
    address: "0x16de59092dae5ccf4a1e6439d611fd0653f0bd01",
    logoURI:
      "https://tokens.1inch.exchange/0x16de59092dae5ccf4a1e6439d611fd0653f0bd01.png",
  },
  "0xc2cb1040220768554cf699b0d863a3cd4324ce32": {
    symbol: "yDAIv3",
    name: "iearn DAI v3",
    decimals: 18,
    address: "0xc2cb1040220768554cf699b0d863a3cd4324ce32",
    logoURI:
      "https://tokens.1inch.exchange/0xc2cb1040220768554cf699b0d863a3cd4324ce32.png",
  },
  "0x04bc0ab673d88ae9dbc9da2380cb6b79c4bca9ae": {
    symbol: "yBUSD",
    name: "iearn BUSD",
    decimals: 18,
    address: "0x04bc0ab673d88ae9dbc9da2380cb6b79c4bca9ae",
    logoURI:
      "https://tokens.1inch.exchange/0x04bc0ab673d88ae9dbc9da2380cb6b79c4bca9ae.png",
  },
  "0x04aa51bbcb46541455ccf1b8bef2ebc5d3787ec9": {
    symbol: "yBTC",
    name: "iearn WBTC",
    decimals: 8,
    address: "0x04aa51bbcb46541455ccf1b8bef2ebc5d3787ec9",
    logoURI:
      "https://tokens.1inch.exchange/0x04aa51bbcb46541455ccf1b8bef2ebc5d3787ec9.png",
  },
  "0x73a052500105205d34daf004eab301916da8190f": {
    symbol: "yTUSD",
    name: "iearn TUSD",
    decimals: 18,
    address: "0x73a052500105205d34daf004eab301916da8190f",
    logoURI:
      "https://tokens.1inch.exchange/0x73a052500105205d34daf004eab301916da8190f.png",
  },
  "0x83f798e925bcd4017eb265844fddabb448f1707d": {
    symbol: "yUSDTv2",
    name: "iearn USDT v2",
    decimals: 6,
    address: "0x83f798e925bcd4017eb265844fddabb448f1707d",
    logoURI:
      "https://tokens.1inch.exchange/0x83f798e925bcd4017eb265844fddabb448f1707d.png",
  },
  "0xe6354ed5bc4b393a5aad09f21c46e101e692d447": {
    symbol: "yUSDTv3",
    name: "iearn USDT v3",
    decimals: 6,
    address: "0xe6354ed5bc4b393a5aad09f21c46e101e692d447",
    logoURI:
      "https://tokens.1inch.exchange/0xe6354ed5bc4b393a5aad09f21c46e101e692d447.png",
  },
  "0xd6ad7a6750a7593e092a9b218d66c0a814a3436e": {
    symbol: "yUSDCv2",
    name: "iearn USDC v2",
    decimals: 6,
    address: "0xd6ad7a6750a7593e092a9b218d66c0a814a3436e",
    logoURI:
      "https://tokens.1inch.exchange/0xd6ad7a6750a7593e092a9b218d66c0a814a3436e.png",
  },
  "0x26ea744e5b887e5205727f55dfbe8685e3b21951": {
    symbol: "yUSDCv3",
    name: "iearn USDC v3",
    decimals: 6,
    address: "0x26ea744e5b887e5205727f55dfbe8685e3b21951",
    logoURI:
      "https://tokens.1inch.exchange/0x26ea744e5b887e5205727f55dfbe8685e3b21951.png",
  },
  "0xf61718057901f84c4eec4339ef8f0d86d2b45600": {
    symbol: "ySUSD",
    name: "iearn SUSD",
    decimals: 18,
    address: "0xf61718057901f84c4eec4339ef8f0d86d2b45600",
    logoURI:
      "https://tokens.1inch.exchange/0xf61718057901f84c4eec4339ef8f0d86d2b45600.png",
  },
  "0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5": {
    symbol: "BCDT",
    name: "Blockchain Certified Data Token",
    decimals: 18,
    address: "0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5",
    logoURI:
      "https://tokens.1inch.exchange/0xacfa209fb73bf3dd5bbfb1101b9bc999c49062a5.png",
  },
  "0x4de2573e27e648607b50e1cfff921a33e4a34405": {
    symbol: "LST",
    name: "Lendroid Support Token",
    decimals: 18,
    address: "0x4de2573e27e648607b50e1cfff921a33e4a34405",
    logoURI:
      "https://tokens.1inch.exchange/0x4de2573e27e648607b50e1cfff921a33e4a34405.png",
  },
  "0x630d98424efe0ea27fb1b3ab7741907dffeaad78": {
    symbol: "PEAK",
    name: "PEAKDEFI",
    decimals: 8,
    address: "0x630d98424efe0ea27fb1b3ab7741907dffeaad78",
    logoURI:
      "https://tokens.1inch.exchange/0x630d98424efe0ea27fb1b3ab7741907dffeaad78.png",
  },
  "0xd56dac73a4d6766464b38ec6d91eb45ce7457c44": {
    symbol: "PAN",
    name: "Panvala pan",
    decimals: 18,
    address: "0xd56dac73a4d6766464b38ec6d91eb45ce7457c44",
    logoURI:
      "https://tokens.1inch.exchange/0xd56dac73a4d6766464b38ec6d91eb45ce7457c44.png",
  },
  "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd": {
    symbol: "GUSD",
    name: "Gemini dollar",
    decimals: 2,
    address: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
    logoURI:
      "https://tokens.1inch.exchange/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd.png",
  },
  "0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8": {
    symbol: "aBUSDv1",
    name: "Aave Interest bearing Binance USD",
    decimals: 18,
    address: "0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8",
    logoURI:
      "https://tokens.1inch.exchange/0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8.png",
  },
  "0xd7efb00d12c2c13131fd319336fdf952525da2af": {
    symbol: "XPR",
    name: "Proton",
    decimals: 4,
    address: "0xd7efb00d12c2c13131fd319336fdf952525da2af",
    logoURI:
      "https://tokens.1inch.exchange/0xd7efb00d12c2c13131fd319336fdf952525da2af.png",
  },
  "0x85eee30c52b0b379b046fb0f85f4f3dc3009afec": {
    symbol: "KEEP",
    name: "KEEP Token",
    decimals: 18,
    address: "0x85eee30c52b0b379b046fb0f85f4f3dc3009afec",
    logoURI:
      "https://tokens.1inch.exchange/0x85eee30c52b0b379b046fb0f85f4f3dc3009afec.png",
  },
  "0x1c5db575e2ff833e46a2e9864c22f4b22e0b37c2": {
    symbol: "renZEC",
    name: "renZEC",
    decimals: 8,
    address: "0x1c5db575e2ff833e46a2e9864c22f4b22e0b37c2",
    logoURI:
      "https://tokens.1inch.exchange/0x1c5db575e2ff833e46a2e9864c22f4b22e0b37c2.png",
  },
  "0x459086f2376525bdceba5bdda135e4e9d3fef5bf": {
    symbol: "renBCH",
    name: "renBCH",
    decimals: 8,
    address: "0x459086f2376525bdceba5bdda135e4e9d3fef5bf",
    logoURI:
      "https://tokens.1inch.exchange/0x459086f2376525bdceba5bdda135e4e9d3fef5bf.png",
  },
  "0x8daebade922df735c38c80c7ebd708af50815faa": {
    symbol: "tBTC",
    name: "tBTC",
    decimals: 18,
    address: "0x8daebade922df735c38c80c7ebd708af50815faa",
    logoURI:
      "https://tokens.1inch.exchange/0x8daebade922df735c38c80c7ebd708af50815faa.png",
  },
  "0x0316eb71485b0ab14103307bf65a021042c6d380": {
    symbol: "HBTC",
    name: "Huobi BTC",
    decimals: 18,
    address: "0x0316eb71485b0ab14103307bf65a021042c6d380",
    logoURI:
      "https://tokens.1inch.exchange/0x0316eb71485b0ab14103307bf65a021042c6d380.png",
  },
  "0x3a9fff453d50d4ac52a6890647b823379ba36b9e": {
    symbol: "SHUF",
    name: "Shuffle.Monster V3",
    decimals: 18,
    address: "0x3a9fff453d50d4ac52a6890647b823379ba36b9e",
    logoURI:
      "https://tokens.1inch.exchange/0x3a9fff453d50d4ac52a6890647b823379ba36b9e.png",
  },
  "0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9": {
    symbol: "DONUT",
    name: "DONUT",
    decimals: 18,
    address: "0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9",
    logoURI:
      "https://tokens.1inch.exchange/0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9.png",
  },
  "0x0000000000004946c0e9f43f4dee607b0ef1fa1c": {
    symbol: "CHI",
    name: "Chi Gastoken by 1inch",
    decimals: 0,
    address: "0x0000000000004946c0e9f43f4dee607b0ef1fa1c",
    logoURI:
      "https://tokens.1inch.exchange/0x0000000000004946c0e9f43f4dee607b0ef1fa1c.png",
  },
  "0xd6a55c63865affd67e2fb9f284f87b7a9e5ff3bd": {
    symbol: "ESH",
    name: "Switch",
    decimals: 18,
    address: "0xd6a55c63865affd67e2fb9f284f87b7a9e5ff3bd",
    logoURI:
      "https://tokens.1inch.exchange/0xd6a55c63865affd67e2fb9f284f87b7a9e5ff3bd.png",
  },
  "0x1fc31488f28ac846588ffa201cde0669168471bd": {
    symbol: "UAX",
    name: "UAX",
    decimals: 2,
    address: "0x1fc31488f28ac846588ffa201cde0669168471bd",
    logoURI:
      "https://tokens.1inch.exchange/0x1fc31488f28ac846588ffa201cde0669168471bd.png",
  },
  "0x45804880de22913dafe09f4980848ece6ecbaf78": {
    symbol: "PAXG",
    name: "Paxos Gold",
    decimals: 18,
    address: "0x45804880de22913dafe09f4980848ece6ecbaf78",
    logoURI:
      "https://tokens.1inch.exchange/0x45804880de22913dafe09f4980848ece6ecbaf78.png",
  },
  "0x035df12e0f3ac6671126525f1015e47d79dfeddf": {
    symbol: "0xMR",
    name: "0xMonero",
    decimals: 18,
    address: "0x035df12e0f3ac6671126525f1015e47d79dfeddf",
    logoURI:
      "https://tokens.1inch.exchange/0x035df12e0f3ac6671126525f1015e47d79dfeddf.png",
  },
  "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac": {
    symbol: "STORJ",
    name: "Storj",
    decimals: 8,
    address: "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
    logoURI:
      "https://tokens.1inch.exchange/0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac.png",
  },
  "0x4156d3342d5c385a87d264f90653733592000581": {
    symbol: "SALT",
    name: "Salt",
    decimals: 8,
    address: "0x4156d3342d5c385a87d264f90653733592000581",
    logoURI:
      "https://tokens.1inch.exchange/0x4156d3342d5c385a87d264f90653733592000581.png",
  },
  "0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8": {
    symbol: "yCurve",
    name: "Curve.fi iearn pool token",
    decimals: 18,
    address: "0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8",
    logoURI:
      "https://tokens.1inch.exchange/0xdf5e0e81dff6faf3a7e52ba697820c5e32d806a8.png",
  },
  "0xfca59cd816ab1ead66534d82bc21e7515ce441cf": {
    symbol: "RARI",
    name: "Rarible",
    decimals: 18,
    address: "0xfca59cd816ab1ead66534d82bc21e7515ce441cf",
    logoURI:
      "https://tokens.1inch.exchange/0xfca59cd816ab1ead66534d82bc21e7515ce441cf.png",
  },
  "0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc": {
    symbol: "PARETO",
    name: "Pareto Network Token",
    decimals: 18,
    address: "0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc",
    logoURI:
      "https://tokens.1inch.exchange/0xea5f88e54d982cbb0c441cde4e79bc305e5b43bc.png",
  },
  "0x9fbfed658919a896b5dc7b00456ce22d780f9b65": {
    symbol: "PLT",
    name: "PlutusDeFi",
    decimals: 18,
    address: "0x9fbfed658919a896b5dc7b00456ce22d780f9b65",
    logoURI:
      "https://tokens.1inch.exchange/0x9fbfed658919a896b5dc7b00456ce22d780f9b65.png",
  },
  "0x5228a22e72ccc52d415ecfd199f99d0665e7733b": {
    symbol: "pBTC",
    name: "pTokens BTC",
    decimals: 18,
    address: "0x5228a22e72ccc52d415ecfd199f99d0665e7733b",
    logoURI:
      "https://tokens.1inch.exchange/0x5228a22e72ccc52d415ecfd199f99d0665e7733b.png",
  },
  "0x476c5e26a75bd202a9683ffd34359c0cc15be0ff": {
    symbol: "SRM",
    name: "Serum",
    decimals: 6,
    address: "0x476c5e26a75bd202a9683ffd34359c0cc15be0ff",
    logoURI:
      "https://tokens.1inch.exchange/0x476c5e26a75bd202a9683ffd34359c0cc15be0ff.png",
  },
  "0xc813ea5e3b48bebeedb796ab42a30c5599b01740": {
    symbol: "NIOX",
    name: "Autonio",
    decimals: 4,
    address: "0xc813ea5e3b48bebeedb796ab42a30c5599b01740",
    logoURI:
      "https://tokens.1inch.exchange/0xc813ea5e3b48bebeedb796ab42a30c5599b01740.png",
  },
  "0xa7de087329bfcda5639247f96140f9dabe3deed1": {
    symbol: "STA",
    name: "Statera",
    decimals: 18,
    address: "0xa7de087329bfcda5639247f96140f9dabe3deed1",
    logoURI:
      "https://tokens.1inch.exchange/0xa7de087329bfcda5639247f96140f9dabe3deed1.png",
  },
  "0xdc5864ede28bd4405aa04d93e05a0531797d9d59": {
    symbol: "FNT",
    name: "Falcon",
    decimals: 6,
    address: "0xdc5864ede28bd4405aa04d93e05a0531797d9d59",
    logoURI:
      "https://tokens.1inch.exchange/0xdc5864ede28bd4405aa04d93e05a0531797d9d59.png",
  },
  "0x0aacfbec6a24756c20d41914f2caba817c0d8521": {
    symbol: "YAM",
    name: "YAM",
    decimals: 18,
    address: "0x0aacfbec6a24756c20d41914f2caba817c0d8521",
    logoURI:
      "https://tokens.1inch.exchange/0x0aacfbec6a24756c20d41914f2caba817c0d8521.png",
  },
  "0xade00c28244d5ce17d72e40330b1c318cd12b7c3": {
    symbol: "ADX",
    name: "AdEx Network",
    decimals: 18,
    address: "0xade00c28244d5ce17d72e40330b1c318cd12b7c3",
    logoURI:
      "https://tokens.1inch.exchange/0xade00c28244d5ce17d72e40330b1c318cd12b7c3.png",
  },
  "0xd533a949740bb3306d119cc777fa900ba034cd52": {
    symbol: "CRV",
    name: "Curve DAO Token",
    decimals: 18,
    address: "0xd533a949740bb3306d119cc777fa900ba034cd52",
    logoURI:
      "https://tokens.1inch.exchange/0xd533a949740bb3306d119cc777fa900ba034cd52.png",
  },
  "0x9469d013805bffb7d3debe5e7839237e535ec483": {
    symbol: "RING",
    name: "Darwinia Network Native Token",
    decimals: 18,
    address: "0x9469d013805bffb7d3debe5e7839237e535ec483",
    logoURI:
      "https://tokens.1inch.exchange/0x9469d013805bffb7d3debe5e7839237e535ec483.png",
  },
  "0x2baecdf43734f22fd5c152db08e3c27233f0c7d2": {
    symbol: "OMv1",
    name: "OM Token",
    decimals: 18,
    address: "0x2baecdf43734f22fd5c152db08e3c27233f0c7d2",
    logoURI:
      "https://tokens.1inch.exchange/0x2baecdf43734f22fd5c152db08e3c27233f0c7d2.png",
  },
  "0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d": {
    symbol: "CTSI",
    name: "Cartesi Token",
    decimals: 18,
    address: "0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d",
    logoURI:
      "https://tokens.1inch.exchange/0x491604c0fdf08347dd1fa4ee062a822a5dd06b5d.png",
  },
  "0x0ff6ffcfda92c53f615a4a75d982f399c989366b": {
    symbol: "LAYER",
    name: "Unilayer",
    decimals: 18,
    address: "0x0ff6ffcfda92c53f615a4a75d982f399c989366b",
    logoURI:
      "https://tokens.1inch.exchange/0x0ff6ffcfda92c53f615a4a75d982f399c989366b.png",
  },
  "0xd5525d397898e5502075ea5e830d8914f6f0affe": {
    symbol: "MEME",
    name: "MEME",
    decimals: 8,
    address: "0xd5525d397898e5502075ea5e830d8914f6f0affe",
    logoURI:
      "https://tokens.1inch.exchange/0xd5525d397898e5502075ea5e830d8914f6f0affe.png",
  },
  "0x68a118ef45063051eac49c7e647ce5ace48a68a5": {
    symbol: "$BASED",
    name: "$BASED",
    decimals: 18,
    address: "0x68a118ef45063051eac49c7e647ce5ace48a68a5",
    logoURI:
      "https://tokens.1inch.exchange/0x68a118ef45063051eac49c7e647ce5ace48a68a5.png",
  },
  "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f": {
    symbol: "TRAC",
    name: "Trace",
    decimals: 18,
    address: "0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f",
    logoURI:
      "https://tokens.1inch.exchange/0xaa7a9ca87d3694b5755f213b5d04094b8d0f0a6f.png",
  },
  "0x4dfd148b532e934a2a26ea65689cf6268753e130": {
    symbol: "MDT",
    name: "Governance token MonolithosDAO",
    decimals: 18,
    address: "0x4dfd148b532e934a2a26ea65689cf6268753e130",
    logoURI:
      "https://tokens.1inch.exchange/0x4dfd148b532e934a2a26ea65689cf6268753e130.png",
  },
  "0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a": {
    symbol: "YAMv2",
    name: "YAMv2",
    decimals: 24,
    address: "0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a",
    logoURI:
      "https://tokens.1inch.exchange/0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a.png",
  },
  "0x8a9c67fee641579deba04928c4bc45f66e26343a": {
    symbol: "JRT",
    name: "Jarvis Reward Token",
    decimals: 18,
    address: "0x8a9c67fee641579deba04928c4bc45f66e26343a",
    logoURI:
      "https://tokens.1inch.exchange/0x8a9c67fee641579deba04928c4bc45f66e26343a.png",
  },
  "0x45f24baeef268bb6d63aee5129015d69702bcdfa": {
    symbol: "YFV",
    name: "YFValue",
    decimals: 18,
    address: "0x45f24baeef268bb6d63aee5129015d69702bcdfa",
    logoURI:
      "https://tokens.1inch.exchange/0x45f24baeef268bb6d63aee5129015d69702bcdfa.png",
  },
  "0x674c6ad92fd080e4004b2312b45f796a192d27a0": {
    symbol: "USDN",
    name: "Neutrino",
    decimals: 18,
    address: "0x674c6ad92fd080e4004b2312b45f796a192d27a0",
    logoURI:
      "https://tokens.1inch.exchange/0x674c6ad92fd080e4004b2312b45f796a192d27a0.png",
  },
  "0x362bc847a3a9637d3af6624eec853618a43ed7d2": {
    symbol: "PRQ",
    name: "Parsiq Token",
    decimals: 18,
    address: "0x362bc847a3a9637d3af6624eec853618a43ed7d2",
    logoURI:
      "https://tokens.1inch.exchange/0x362bc847a3a9637d3af6624eec853618a43ed7d2.png",
  },
  "0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd": {
    symbol: "HAKKA",
    name: "Hakka Finance",
    decimals: 18,
    address: "0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd",
    logoURI:
      "https://tokens.1inch.exchange/0x0e29e5abbb5fd88e28b2d355774e73bd47de3bcd.png",
  },
  "0x08ad83d779bdf2bbe1ad9cc0f78aa0d24ab97802": {
    symbol: "RWS",
    name: "Robonomics Web Services :: V1",
    decimals: 18,
    address: "0x08ad83d779bdf2bbe1ad9cc0f78aa0d24ab97802",
    logoURI:
      "https://tokens.1inch.exchange/0x08ad83d779bdf2bbe1ad9cc0f78aa0d24ab97802.png",
  },
  "0x09e64c2b61a5f1690ee6fbed9baf5d6990f8dfd0": {
    symbol: "GRO",
    name: "Growth",
    decimals: 18,
    address: "0x09e64c2b61a5f1690ee6fbed9baf5d6990f8dfd0",
    logoURI:
      "https://tokens.1inch.exchange/0x09e64c2b61a5f1690ee6fbed9baf5d6990f8dfd0.png",
  },
  "0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1": {
    symbol: "CVP",
    name: "Concentrated Voting Power",
    decimals: 18,
    address: "0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1",
    logoURI:
      "https://tokens.1inch.exchange/0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1.png",
  },
  "0x4fe5851c9af07df9e5ad8217afae1ea72737ebda": {
    symbol: "OPT",
    name: "Open Predict Token",
    decimals: 18,
    address: "0x4fe5851c9af07df9e5ad8217afae1ea72737ebda",
    logoURI:
      "https://tokens.1inch.exchange/0x4fe5851c9af07df9e5ad8217afae1ea72737ebda.png",
  },
  "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2": {
    symbol: "SUSHI",
    name: "SushiToken",
    decimals: 18,
    address: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    logoURI:
      "https://tokens.1inch.exchange/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png",
  },
  "0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe": {
    symbol: "DSLA",
    name: "DSLA",
    decimals: 18,
    address: "0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe",
    logoURI:
      "https://tokens.1inch.exchange/0x3affcca64c2a6f4e3b6bd9c64cd2c969efd1ecbe.png",
  },
  "0xba21ef4c9f433ede00badefcc2754b8e74bd538a": {
    symbol: "SWFL",
    name: "Swapfolio",
    decimals: 18,
    address: "0xba21ef4c9f433ede00badefcc2754b8e74bd538a",
    logoURI:
      "https://tokens.1inch.exchange/0xba21ef4c9f433ede00badefcc2754b8e74bd538a.png",
  },
  "0xfffffffff15abf397da76f1dcc1a1604f45126db": {
    symbol: "FSW",
    name: "FalconSwap Token",
    decimals: 18,
    address: "0xfffffffff15abf397da76f1dcc1a1604f45126db",
    logoURI:
      "https://tokens.1inch.exchange/0xfffffffff15abf397da76f1dcc1a1604f45126db.png",
  },
  "0x94d863173ee77439e4292284ff13fad54b3ba182": {
    symbol: "ADEL",
    name: "Akropolis Delphi",
    decimals: 18,
    address: "0x94d863173ee77439e4292284ff13fad54b3ba182",
    logoURI:
      "https://tokens.1inch.exchange/0x94d863173ee77439e4292284ff13fad54b3ba182.png",
  },
  "0xb8baa0e4287890a5f79863ab62b7f175cecbd433": {
    symbol: "SWRV",
    name: "Swerve DAO Token",
    decimals: 18,
    address: "0xb8baa0e4287890a5f79863ab62b7f175cecbd433",
    logoURI:
      "https://tokens.1inch.exchange/0xb8baa0e4287890a5f79863ab62b7f175cecbd433.png",
  },
  "0xf8ad7dfe656188a23e89da09506adf7ad9290d5d": {
    symbol: "BLY",
    name: "Blocery Token",
    decimals: 18,
    address: "0xf8ad7dfe656188a23e89da09506adf7ad9290d5d",
    logoURI:
      "https://tokens.1inch.exchange/0xf8ad7dfe656188a23e89da09506adf7ad9290d5d.png",
  },
  "0x8a6f3bf52a26a21531514e23016eeae8ba7e7018": {
    symbol: "MXX",
    name: "Multiplier",
    decimals: 8,
    address: "0x8a6f3bf52a26a21531514e23016eeae8ba7e7018",
    logoURI:
      "https://tokens.1inch.exchange/0x8a6f3bf52a26a21531514e23016eeae8ba7e7018.png",
  },
  "0x103c3a209da59d3e7c4a89307e66521e081cfdf0": {
    symbol: "GVT",
    name: "Genesis Vision",
    decimals: 18,
    address: "0x103c3a209da59d3e7c4a89307e66521e081cfdf0",
    logoURI:
      "https://tokens.1inch.exchange/0x103c3a209da59d3e7c4a89307e66521e081cfdf0.png",
  },
  "0x892b14321a4fcba80669ae30bd0cd99a7ecf6ac0": {
    symbol: "crCream",
    name: "Cream Cream",
    decimals: 8,
    address: "0x892b14321a4fcba80669ae30bd0cd99a7ecf6ac0",
    logoURI:
      "https://tokens.1inch.exchange/0x892b14321a4fcba80669ae30bd0cd99a7ecf6ac0.png",
  },
  "0xe1237aa7f535b0cc33fd973d66cbf830354d16c7": {
    symbol: "yWETH",
    name: "yearn Wrapped Ether",
    decimals: 18,
    address: "0xe1237aa7f535b0cc33fd973d66cbf830354d16c7",
    logoURI:
      "https://tokens.1inch.exchange/0xe1237aa7f535b0cc33fd973d66cbf830354d16c7.png",
  },
  "0x5dbcf33d8c2e976c6b560249878e6f1491bca25c": {
    symbol: "yUSD",
    name: "yearn Curve.fi yDAI/yUSDC/yUSDT/yTUSD",
    decimals: 18,
    address: "0x5dbcf33d8c2e976c6b560249878e6f1491bca25c",
    logoURI:
      "https://tokens.1inch.exchange/0x5dbcf33d8c2e976c6b560249878e6f1491bca25c.png",
  },
  "0x50026ad58b338cf3eccc2b422deb8faa725f377f": {
    symbol: "STEP",
    name: "1Step.finance",
    decimals: 8,
    address: "0x50026ad58b338cf3eccc2b422deb8faa725f377f",
    logoURI:
      "https://tokens.1inch.exchange/0x50026ad58b338cf3eccc2b422deb8faa725f377f.png",
  },
  "0x1aa61c196e76805fcbe394ea00e4ffced24fc469": {
    symbol: "SAFE",
    name: "yieldfarming.insure",
    decimals: 18,
    address: "0x1aa61c196e76805fcbe394ea00e4ffced24fc469",
    logoURI:
      "https://tokens.1inch.exchange/0x1aa61c196e76805fcbe394ea00e4ffced24fc469.png",
  },
  "0x556148562d5ddeb72545d7ec4b3ec8edc8f55ba7": {
    symbol: "PRDX",
    name: "Predix Network",
    decimals: 18,
    address: "0x556148562d5ddeb72545d7ec4b3ec8edc8f55ba7",
    logoURI:
      "https://tokens.1inch.exchange/0x556148562d5ddeb72545d7ec4b3ec8edc8f55ba7.png",
  },
  "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b": {
    symbol: "DPI",
    name: "DefiPulse Index",
    decimals: 18,
    address: "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b",
    logoURI:
      "https://tokens.1inch.exchange/0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b.png",
  },
  "0x3f382dbd960e3a9bbceae22651e88158d2791550": {
    symbol: "GHST",
    name: "Aavegotchi GHST Token",
    decimals: 18,
    address: "0x3f382dbd960e3a9bbceae22651e88158d2791550",
    logoURI:
      "https://tokens.1inch.exchange/0x3f382dbd960e3a9bbceae22651e88158d2791550.png",
  },
  "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984": {
    symbol: "UNI",
    name: "Uniswap",
    decimals: 18,
    address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    logoURI:
      "https://tokens.1inch.exchange/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
  },
  "0x2e93fe8d550a7b7e7b2e561cd45cebccbaa79358": {
    symbol: "GXC",
    name: "GXChain Core Asset",
    decimals: 5,
    address: "0x2e93fe8d550a7b7e7b2e561cd45cebccbaa79358",
    logoURI:
      "https://tokens.1inch.exchange/0x2e93fe8d550a7b7e7b2e561cd45cebccbaa79358.png",
  },
  "0x429881672b9ae42b8eba0e26cd9c73711b891ca5": {
    symbol: "PICKLE",
    name: "PickleToken",
    decimals: 18,
    address: "0x429881672b9ae42b8eba0e26cd9c73711b891ca5",
    logoURI:
      "https://tokens.1inch.exchange/0x429881672b9ae42b8eba0e26cd9c73711b891ca5.png",
  },
  "0xf8c3527cc04340b208c854e985240c02f7b7793f": {
    symbol: "FRONT",
    name: "Frontier Token",
    decimals: 18,
    address: "0xf8c3527cc04340b208c854e985240c02f7b7793f",
    logoURI:
      "https://tokens.1inch.exchange/0xf8c3527cc04340b208c854e985240c02f7b7793f.png",
  },
  "0xca1207647ff814039530d7d35df0e1dd2e91fa84": {
    symbol: "DHT",
    name: "dHedge DAO Token",
    decimals: 18,
    address: "0xca1207647ff814039530d7d35df0e1dd2e91fa84",
    logoURI:
      "https://tokens.1inch.exchange/0xca1207647ff814039530d7d35df0e1dd2e91fa84.png",
  },
  "0xa0246c9032bc3a600820415ae600c6388619a14d": {
    symbol: "FARM",
    name: "FARM Reward Token",
    decimals: 18,
    address: "0xa0246c9032bc3a600820415ae600c6388619a14d",
    logoURI:
      "https://tokens.1inch.exchange/0xa0246c9032bc3a600820415ae600c6388619a14d.png",
  },
  "0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c": {
    symbol: "GOF",
    name: "Golff.finance",
    decimals: 18,
    address: "0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c",
    logoURI:
      "https://tokens.1inch.exchange/0x488e0369f9bc5c40c002ea7c1fe4fd01a198801c.png",
  },
  "0xecbf566944250dde88322581024e611419715f7a": {
    symbol: "xBTC",
    name: "xBTC",
    decimals: 9,
    address: "0xecbf566944250dde88322581024e611419715f7a",
    logoURI:
      "https://tokens.1inch.exchange/0xecbf566944250dde88322581024e611419715f7a.png",
  },
  "0x2a8e1e676ec238d8a992307b495b45b3feaa5e86": {
    symbol: "OUSD",
    name: "Origin Dollar",
    decimals: 18,
    address: "0x2a8e1e676ec238d8a992307b495b45b3feaa5e86",
    logoURI:
      "https://tokens.1inch.exchange/0x2a8e1e676ec238d8a992307b495b45b3feaa5e86.png",
  },
  "0x1d09144f3479bb805cb7c92346987420bcbdc10c": {
    symbol: "cyUSD",
    name: "CreamY USD",
    decimals: 18,
    address: "0x1d09144f3479bb805cb7c92346987420bcbdc10c",
    logoURI:
      "https://tokens.1inch.exchange/0x1d09144f3479bb805cb7c92346987420bcbdc10c.png",
  },
  "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9": {
    symbol: "AAVE",
    name: "Aave Token",
    decimals: 18,
    address: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
    logoURI:
      "https://tokens.1inch.exchange/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
  },
  "0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd": {
    symbol: "DODO",
    name: "DODO bird",
    decimals: 18,
    address: "0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd",
    logoURI:
      "https://tokens.1inch.exchange/0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd.png",
  },
  "0x250a3500f48666561386832f1f1f1019b89a2699": {
    symbol: "SAFE2",
    name: "SAFE2",
    decimals: 18,
    address: "0x250a3500f48666561386832f1f1f1019b89a2699",
    logoURI:
      "https://tokens.1inch.exchange/0x250a3500f48666561386832f1f1f1019b89a2699.png",
  },
  "0x6006fc2a849fedaba8330ce36f5133de01f96189": {
    symbol: "SHAKE",
    name: "SHAKE token by SpaceSwap v2 ",
    decimals: 18,
    address: "0x6006fc2a849fedaba8330ce36f5133de01f96189",
    logoURI:
      "https://tokens.1inch.exchange/0x6006fc2a849fedaba8330ce36f5133de01f96189.png",
  },
  "0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de": {
    symbol: "MILK2",
    name: "MilkyWay Token by SpaceSwap v2",
    decimals: 18,
    address: "0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de",
    logoURI:
      "https://tokens.1inch.exchange/0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de.png",
  },
  "0x62359ed7505efc61ff1d56fef82158ccaffa23d7": {
    symbol: "CORE",
    name: "cVault.finance",
    decimals: 18,
    address: "0x62359ed7505efc61ff1d56fef82158ccaffa23d7",
    logoURI:
      "https://tokens.1inch.exchange/0x62359ed7505efc61ff1d56fef82158ccaffa23d7.png",
  },
  "0xbc396689893d065f41bc2c6ecbee5e0085233447": {
    symbol: "PERP",
    name: "Perpetual",
    decimals: 18,
    address: "0xbc396689893d065f41bc2c6ecbee5e0085233447",
    logoURI:
      "https://tokens.1inch.exchange/0xbc396689893d065f41bc2c6ecbee5e0085233447.png",
  },
  "0x49e833337ece7afe375e44f4e3e8481029218e5c": {
    symbol: "VALUE",
    name: "Value Liquidity",
    decimals: 18,
    address: "0x49e833337ece7afe375e44f4e3e8481029218e5c",
    logoURI:
      "https://tokens.1inch.exchange/0x49e833337ece7afe375e44f4e3e8481029218e5c.png",
  },
  "0x4b7ad3a56810032782afce12d7d27122bdb96eff": {
    symbol: "SPRKL",
    name: "Sparkle",
    decimals: 8,
    address: "0x4b7ad3a56810032782afce12d7d27122bdb96eff",
    logoURI:
      "https://tokens.1inch.exchange/0x4b7ad3a56810032782afce12d7d27122bdb96eff.png",
  },
  "0x1c48f86ae57291f7686349f12601910bd8d470bb": {
    symbol: "USDK",
    name: "USDK",
    decimals: 18,
    address: "0x1c48f86ae57291f7686349f12601910bd8d470bb",
    logoURI:
      "https://tokens.1inch.exchange/0x1c48f86ae57291f7686349f12601910bd8d470bb.png",
  },
  "0x87edffde3e14c7a66c9b9724747a1c5696b742e6": {
    symbol: "SWAG",
    name: "Swag Token",
    decimals: 18,
    address: "0x87edffde3e14c7a66c9b9724747a1c5696b742e6",
    logoURI:
      "https://tokens.1inch.exchange/0x87edffde3e14c7a66c9b9724747a1c5696b742e6.png",
  },
  "0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c": {
    symbol: "DEFI+S",
    name: "PieDAO DEFI Small Cap",
    decimals: 18,
    address: "0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c",
    logoURI:
      "https://tokens.1inch.exchange/0xad6a626ae2b43dcb1b39430ce496d2fa0365ba9c.png",
  },
  "0xad32a8e6220741182940c5abf610bde99e737b2d": {
    symbol: "DOUGH",
    name: "PieDAO DOUGH v2",
    decimals: 18,
    address: "0xad32a8e6220741182940c5abf610bde99e737b2d",
    logoURI:
      "https://tokens.1inch.exchange/0xad32a8e6220741182940c5abf610bde99e737b2d.png",
  },
  "0x3f09400313e83d53366147e3ea0e4e2279d80850": {
    symbol: "kSEED",
    name: "KUSH.FINANCE",
    decimals: 18,
    address: "0x3f09400313e83d53366147e3ea0e4e2279d80850",
    logoURI:
      "https://tokens.1inch.exchange/0x3f09400313e83d53366147e3ea0e4e2279d80850.png",
  },
  "0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4": {
    symbol: "cCOMP",
    name: "Compound Collateral",
    decimals: 8,
    address: "0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4",
    logoURI:
      "https://tokens.1inch.exchange/0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4.png",
  },
  "0x35a18000230da775cac24873d00ff85bccded550": {
    symbol: "cUNI",
    name: "Compound Uniswap",
    decimals: 8,
    address: "0x35a18000230da775cac24873d00ff85bccded550",
    logoURI:
      "https://tokens.1inch.exchange/0x35a18000230da775cac24873d00ff85bccded550.png",
  },
  "0x70da48f4b7e83c386ef983d4cef4e58c2c09d8ac": {
    symbol: "XQC",
    name: "Quras Token",
    decimals: 8,
    address: "0x70da48f4b7e83c386ef983d4cef4e58c2c09d8ac",
    logoURI:
      "https://tokens.1inch.exchange/0x70da48f4b7e83c386ef983d4cef4e58c2c09d8ac.png",
  },
  "0xe2f2a5c287993345a840db3b0845fbc70f5935a5": {
    symbol: "mUSD",
    name: "mStable USD",
    decimals: 18,
    address: "0xe2f2a5c287993345a840db3b0845fbc70f5935a5",
    logoURI:
      "https://tokens.1inch.exchange/0xe2f2a5c287993345a840db3b0845fbc70f5935a5.png",
  },
  "0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5": {
    symbol: "ZEE",
    name: "ZeroSwapToken",
    decimals: 18,
    address: "0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5",
    logoURI:
      "https://tokens.1inch.exchange/0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5.png",
  },
  "0x584bc13c7d411c00c01a62e8019472de68768430": {
    symbol: "HEGIC",
    name: "Hegic",
    decimals: 18,
    address: "0x584bc13c7d411c00c01a62e8019472de68768430",
    logoURI:
      "https://tokens.1inch.exchange/0x584bc13c7d411c00c01a62e8019472de68768430.png",
  },
  "0x054f76beed60ab6dbeb23502178c52d6c5debe40": {
    symbol: "FIN",
    name: "DeFiner",
    decimals: 18,
    address: "0x054f76beed60ab6dbeb23502178c52d6c5debe40",
    logoURI:
      "https://tokens.1inch.exchange/0x054f76beed60ab6dbeb23502178c52d6c5debe40.png",
  },
  "0xcbd55d4ffc43467142761a764763652b48b969ff": {
    symbol: "ASTRO",
    name: "AstroTools.io",
    decimals: 18,
    address: "0xcbd55d4ffc43467142761a764763652b48b969ff",
    logoURI:
      "https://tokens.1inch.exchange/0xcbd55d4ffc43467142761a764763652b48b969ff.png",
  },
  "0xff20817765cb7f73d4bde2e66e067e58d11095c2": {
    symbol: "AMP",
    name: "Amp",
    decimals: 18,
    address: "0xff20817765cb7f73d4bde2e66e067e58d11095c2",
    logoURI:
      "https://tokens.1inch.exchange/0xff20817765cb7f73d4bde2e66e067e58d11095c2.png",
  },
  "0x0391d2021f89dc339f60fff84546ea23e337750f": {
    symbol: "BOND",
    name: "BarnBridge Governance Token",
    decimals: 18,
    address: "0x0391d2021f89dc339f60fff84546ea23e337750f",
    logoURI:
      "https://tokens.1inch.exchange/0x0391d2021f89dc339f60fff84546ea23e337750f.png",
  },
  "0xa117000000f279d81a1d3cc75430faa017fa5a2e": {
    symbol: "ANT",
    name: "Aragon Network Token",
    decimals: 18,
    address: "0xa117000000f279d81a1d3cc75430faa017fa5a2e",
    logoURI:
      "https://tokens.1inch.exchange/0xa117000000f279d81a1d3cc75430faa017fa5a2e.png",
  },
  "0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d": {
    symbol: "FUSE",
    name: "Fuse Token",
    decimals: 18,
    address: "0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d",
    logoURI:
      "https://tokens.1inch.exchange/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d.png",
  },
  "0x36f3fd68e7325a35eb768f1aedaae9ea0689d723": {
    symbol: "ESD",
    name: "Empty Set Dollar",
    decimals: 18,
    address: "0x36f3fd68e7325a35eb768f1aedaae9ea0689d723",
    logoURI:
      "https://tokens.1inch.exchange/0x36f3fd68e7325a35eb768f1aedaae9ea0689d723.png",
  },
  "0xa9af25a2d43eb04723a6ec0749913519cf347842": {
    symbol: "TEAC",
    name: "TealCoin",
    decimals: 6,
    address: "0xa9af25a2d43eb04723a6ec0749913519cf347842",
    logoURI:
      "https://tokens.1inch.exchange/0xa9af25a2d43eb04723a6ec0749913519cf347842.png",
  },
  "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44": {
    symbol: "KP3R",
    name: "Keep3rV1",
    decimals: 18,
    address: "0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44",
    logoURI:
      "https://tokens.1inch.exchange/0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44.png",
  },
  "0x5bc25f649fc4e26069ddf4cf4010f9f706c23831": {
    symbol: "DUSD",
    name: "DefiDollar",
    decimals: 18,
    address: "0x5bc25f649fc4e26069ddf4cf4010f9f706c23831",
    logoURI:
      "https://tokens.1inch.exchange/0x5bc25f649fc4e26069ddf4cf4010f9f706c23831.png",
  },
  "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae": {
    symbol: "IDEX",
    name: "IDEX Token",
    decimals: 18,
    address: "0xb705268213d593b8fd88d3fdeff93aff5cbdcfae",
    logoURI:
      "https://tokens.1inch.exchange/0xb705268213d593b8fd88d3fdeff93aff5cbdcfae.png",
  },
  "0x2e2364966267b5d7d2ce6cd9a9b5bd19d9c7c6a9": {
    symbol: "VOICE",
    name: "Voice Token",
    decimals: 18,
    address: "0x2e2364966267b5d7d2ce6cd9a9b5bd19d9c7c6a9",
    logoURI:
      "https://tokens.1inch.exchange/0x2e2364966267b5d7d2ce6cd9a9b5bd19d9c7c6a9.png",
  },
  "0xeef9f339514298c6a857efcfc1a762af84438dee": {
    symbol: "HEZ",
    name: "Hermez Network Token",
    decimals: 18,
    address: "0xeef9f339514298c6a857efcfc1a762af84438dee",
    logoURI:
      "https://tokens.1inch.exchange/0xeef9f339514298c6a857efcfc1a762af84438dee.png",
  },
  "0xea319e87cf06203dae107dd8e5672175e3ee976c": {
    symbol: "SURF",
    name: "SURF.Finance",
    decimals: 18,
    address: "0xea319e87cf06203dae107dd8e5672175e3ee976c",
    logoURI:
      "https://tokens.1inch.exchange/0xea319e87cf06203dae107dd8e5672175e3ee976c.png",
  },
  "0x3383c5a8969dc413bfddc9656eb80a1408e4ba20": {
    symbol: "wANATHA",
    name: "Wrapped ANATHA",
    decimals: 18,
    address: "0x3383c5a8969dc413bfddc9656eb80a1408e4ba20",
    logoURI:
      "https://tokens.1inch.exchange/0x3383c5a8969dc413bfddc9656eb80a1408e4ba20.png",
  },
  "0x18aaa7115705e8be94bffebde57af9bfc265b998": {
    symbol: "AUDIO",
    name: "Audius",
    decimals: 18,
    address: "0x18aaa7115705e8be94bffebde57af9bfc265b998",
    logoURI:
      "https://tokens.1inch.exchange/0x18aaa7115705e8be94bffebde57af9bfc265b998.png",
  },
  "0xa665fed1b0c9da00e91ca582f77df36e325048c5": {
    symbol: "YFM",
    name: "yfarm.finance",
    decimals: 18,
    address: "0xa665fed1b0c9da00e91ca582f77df36e325048c5",
    logoURI:
      "https://tokens.1inch.exchange/0xa665fed1b0c9da00e91ca582f77df36e325048c5.png",
  },
  "0xdacd69347de42babfaecd09dc88958378780fb62": {
    symbol: "ATRI",
    name: "AtariToken",
    decimals: 0,
    address: "0xdacd69347de42babfaecd09dc88958378780fb62",
    logoURI:
      "https://tokens.1inch.exchange/0xdacd69347de42babfaecd09dc88958378780fb62.png",
  },
  "0x0954906da0bf32d5479e25f46056d22f08464cab": {
    symbol: "INDEX",
    name: "Index",
    decimals: 18,
    address: "0x0954906da0bf32d5479e25f46056d22f08464cab",
    logoURI:
      "https://tokens.1inch.exchange/0x0954906da0bf32d5479e25f46056d22f08464cab.png",
  },
  "0xc57d533c50bc22247d49a368880fb49a1caa39f7": {
    symbol: "PTF",
    name: "PowerTrade Fuel Token",
    decimals: 18,
    address: "0xc57d533c50bc22247d49a368880fb49a1caa39f7",
    logoURI:
      "https://tokens.1inch.exchange/0xc57d533c50bc22247d49a368880fb49a1caa39f7.png",
  },
  "0x20c36f062a31865bed8a5b1e512d9a1a20aa333a": {
    symbol: "DFD",
    name: "DefiDollar DAO",
    decimals: 18,
    address: "0x20c36f062a31865bed8a5b1e512d9a1a20aa333a",
    logoURI:
      "https://tokens.1inch.exchange/0x20c36f062a31865bed8a5b1e512d9a1a20aa333a.png",
  },
  "0x95a4492f028aa1fd432ea71146b433e7b4446611": {
    symbol: "APY",
    name: "APY Governance Token",
    decimals: 18,
    address: "0x95a4492f028aa1fd432ea71146b433e7b4446611",
    logoURI:
      "https://tokens.1inch.exchange/0x95a4492f028aa1fd432ea71146b433e7b4446611.png",
  },
  "0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab": {
    symbol: "GYSR",
    name: "Geyser",
    decimals: 18,
    address: "0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab",
    logoURI:
      "https://tokens.1inch.exchange/0xbea98c05eeae2f3bc8c3565db7551eb738c8ccab.png",
  },
  "0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e": {
    symbol: "KP4R",
    name: "Keep4r",
    decimals: 18,
    address: "0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e",
    logoURI:
      "https://tokens.1inch.exchange/0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e.png",
  },
  "0xf5d669627376ebd411e34b98f19c868c8aba5ada": {
    symbol: "AXS",
    name: "Axie Infinity Shard",
    decimals: 18,
    address: "0xf5d669627376ebd411e34b98f19c868c8aba5ada",
    logoURI:
      "https://tokens.1inch.exchange/0xf5d669627376ebd411e34b98f19c868c8aba5ada.png",
  },
  "0x297e4e5e59ad72b1b0a2fd446929e76117be0e0a": {
    symbol: "VALOR",
    name: "ValorToken",
    decimals: 18,
    address: "0x297e4e5e59ad72b1b0a2fd446929e76117be0e0a",
    logoURI:
      "https://tokens.1inch.exchange/0x297e4e5e59ad72b1b0a2fd446929e76117be0e0a.png",
  },
  "0x00a8b738e453ffd858a7edf03bccfe20412f0eb0": {
    symbol: "ALBT",
    name: "AllianceBlock Token",
    decimals: 18,
    address: "0x00a8b738e453ffd858a7edf03bccfe20412f0eb0",
    logoURI:
      "https://tokens.1inch.exchange/0x00a8b738e453ffd858a7edf03bccfe20412f0eb0.png",
  },
  "0x5beabaebb3146685dd74176f68a0721f91297d37": {
    symbol: "BOT",
    name: "Bounce Token",
    decimals: 18,
    address: "0x5beabaebb3146685dd74176f68a0721f91297d37",
    logoURI:
      "https://tokens.1inch.exchange/0x5beabaebb3146685dd74176f68a0721f91297d37.png",
  },
  "0x05d3606d5c81eb9b7b18530995ec9b29da05faba": {
    symbol: "TOMOE",
    name: "TomoChain",
    decimals: 18,
    address: "0x05d3606d5c81eb9b7b18530995ec9b29da05faba",
    logoURI:
      "https://tokens.1inch.exchange/0x05d3606d5c81eb9b7b18530995ec9b29da05faba.png",
  },
  "0xb1f66997a5760428d3a87d68b90bfe0ae64121cc": {
    symbol: "LUA",
    name: "LuaToken",
    decimals: 18,
    address: "0xb1f66997a5760428d3a87d68b90bfe0ae64121cc",
    logoURI:
      "https://tokens.1inch.exchange/0xb1f66997a5760428d3a87d68b90bfe0ae64121cc.png",
  },
  "0x39eae99e685906ff1c11a962a743440d0a1a6e09": {
    symbol: "HOLY",
    name: "Holyheld",
    decimals: 18,
    address: "0x39eae99e685906ff1c11a962a743440d0a1a6e09",
    logoURI:
      "https://tokens.1inch.exchange/0x39eae99e685906ff1c11a962a743440d0a1a6e09.png",
  },
  "0x9d942bd31169ed25a1ca78c776dab92de104e50e": {
    symbol: "DEFISOCKS",
    name: "DeFI Socks 2020",
    decimals: 18,
    address: "0x9d942bd31169ed25a1ca78c776dab92de104e50e",
    logoURI:
      "https://tokens.1inch.exchange/0x9d942bd31169ed25a1ca78c776dab92de104e50e.png",
  },
  "0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577": {
    symbol: "Yf-DAI",
    name: "YfDAI.finance",
    decimals: 18,
    address: "0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577",
    logoURI:
      "https://tokens.1inch.exchange/0xf4cd3d3fda8d7fd6c5a500203e38640a70bf9577.png",
  },
  "0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa": {
    symbol: "POLS",
    name: "PolkastarterToken",
    decimals: 18,
    address: "0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa",
    logoURI:
      "https://tokens.1inch.exchange/0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa.png",
  },
  "0xaf9f549774ecedbd0966c52f250acc548d3f36e5": {
    symbol: "RFuel",
    name: "Rio Fuel Token",
    decimals: 18,
    address: "0xaf9f549774ecedbd0966c52f250acc548d3f36e5",
    logoURI:
      "https://tokens.1inch.exchange/0xaf9f549774ecedbd0966c52f250acc548d3f36e5.png",
  },
  "0x0202be363b8a4820f3f4de7faf5224ff05943ab1": {
    symbol: "UFT",
    name: "UniLend Finance Token",
    decimals: 18,
    address: "0x0202be363b8a4820f3f4de7faf5224ff05943ab1",
    logoURI:
      "https://tokens.1inch.exchange/0x0202be363b8a4820f3f4de7faf5224ff05943ab1.png",
  },
  "0xae697f994fc5ebc000f8e22ebffee04612f98a0d": {
    symbol: "LGCY",
    name: "LGCY Network",
    decimals: 18,
    address: "0xae697f994fc5ebc000f8e22ebffee04612f98a0d",
    logoURI:
      "https://tokens.1inch.exchange/0xae697f994fc5ebc000f8e22ebffee04612f98a0d.png",
  },
  "0x9d47894f8becb68b9cf3428d256311affe8b068b": {
    symbol: "$ROPE",
    name: "$ROPE",
    decimals: 18,
    address: "0x9d47894f8becb68b9cf3428d256311affe8b068b",
    logoURI:
      "https://tokens.1inch.exchange/0x9d47894f8becb68b9cf3428d256311affe8b068b.png",
  },
  "0x72f020f8f3e8fd9382705723cd26380f8d0c66bb": {
    symbol: "PLOT",
    name: "PLOT",
    decimals: 18,
    address: "0x72f020f8f3e8fd9382705723cd26380f8d0c66bb",
    logoURI:
      "https://tokens.1inch.exchange/0x72f020f8f3e8fd9382705723cd26380f8d0c66bb.png",
  },
  "0x6a7ef4998eb9d0f706238756949f311a59e05745": {
    symbol: "KEN",
    name: "Kenysians Network",
    decimals: 18,
    address: "0x6a7ef4998eb9d0f706238756949f311a59e05745",
    logoURI:
      "https://tokens.1inch.exchange/0x6a7ef4998eb9d0f706238756949f311a59e05745.png",
  },
  "0x20945ca1df56d237fd40036d47e866c7dccd2114": {
    symbol: "Nsure",
    name: "Nsure Network Token",
    decimals: 18,
    address: "0x20945ca1df56d237fd40036d47e866c7dccd2114",
    logoURI:
      "https://tokens.1inch.exchange/0x20945ca1df56d237fd40036d47e866c7dccd2114.png",
  },
  "0x485d17a6f1b8780392d53d64751824253011a260": {
    symbol: "TIME",
    name: "ChronoTech Token",
    decimals: 8,
    address: "0x485d17a6f1b8780392d53d64751824253011a260",
    logoURI:
      "https://tokens.1inch.exchange/0x485d17a6f1b8780392d53d64751824253011a260.png",
  },
  "0x12e51e77daaa58aa0e9247db7510ea4b46f9bead": {
    symbol: "aYFIv1",
    name: "Aave Interest bearing YFI",
    decimals: 18,
    address: "0x12e51e77daaa58aa0e9247db7510ea4b46f9bead",
    logoURI:
      "https://tokens.1inch.exchange/0x12e51e77daaa58aa0e9247db7510ea4b46f9bead.png",
  },
  "0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5": {
    symbol: "aAAVEv1",
    name: "Aave Interest bearing Aave Token",
    decimals: 18,
    address: "0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5",
    logoURI:
      "https://tokens.1inch.exchange/0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5.png",
  },
  "0xb124541127a0a657f056d9dd06188c4f1b0e5aab": {
    symbol: "aUNIv1",
    name: "Aave Interest bearing Uniswap",
    decimals: 18,
    address: "0xb124541127a0a657f056d9dd06188c4f1b0e5aab",
    logoURI:
      "https://tokens.1inch.exchange/0xb124541127a0a657f056d9dd06188c4f1b0e5aab.png",
  },
  "0x712db54daa836b53ef1ecbb9c6ba3b9efb073f40": {
    symbol: "aENJv1",
    name: "Aave Interest bearing ENJ",
    decimals: 18,
    address: "0x712db54daa836b53ef1ecbb9c6ba3b9efb073f40",
    logoURI:
      "https://tokens.1inch.exchange/0x712db54daa836b53ef1ecbb9c6ba3b9efb073f40.png",
  },
  "0xb753428af26e81097e7fd17f40c88aaa3e04902c": {
    symbol: "SFI",
    name: "Spice",
    decimals: 18,
    address: "0xb753428af26e81097e7fd17f40c88aaa3e04902c",
    logoURI:
      "https://tokens.1inch.exchange/0xb753428af26e81097e7fd17f40c88aaa3e04902c.png",
  },
  "0x8888801af4d980682e47f1a9036e589479e835c5": {
    symbol: "MPH",
    name: "88mph.app",
    decimals: 18,
    address: "0x8888801af4d980682e47f1a9036e589479e835c5",
    logoURI:
      "https://tokens.1inch.exchange/0x8888801af4d980682e47f1a9036e589479e835c5.png",
  },
  "0x5d8d9f5b96f4438195be9b99eee6118ed4304286": {
    symbol: "COVER_v1",
    name: "Cover Protocol",
    decimals: 18,
    address: "0x5d8d9f5b96f4438195be9b99eee6118ed4304286",
    logoURI:
      "https://tokens.1inch.exchange/0x5d8d9f5b96f4438195be9b99eee6118ed4304286.png",
  },
  "0xc3eb2622190c57429aac3901808994443b64b466": {
    symbol: "ORO",
    name: "ORO Token",
    decimals: 18,
    address: "0xc3eb2622190c57429aac3901808994443b64b466",
    logoURI:
      "https://tokens.1inch.exchange/0xc3eb2622190c57429aac3901808994443b64b466.png",
  },
  "0x6468e79a80c0eab0f9a2b574c8d5bc374af59414": {
    symbol: "eXRD",
    name: "E-RADIX",
    decimals: 18,
    address: "0x6468e79a80c0eab0f9a2b574c8d5bc374af59414",
    logoURI:
      "https://tokens.1inch.exchange/0x6468e79a80c0eab0f9a2b574c8d5bc374af59414.png",
  },
  "0x3e780920601d61cedb860fe9c4a90c9ea6a35e78": {
    symbol: "BOOST",
    name: "Boosted Finance",
    decimals: 18,
    address: "0x3e780920601d61cedb860fe9c4a90c9ea6a35e78",
    logoURI:
      "https://tokens.1inch.exchange/0x3e780920601d61cedb860fe9c4a90c9ea6a35e78.png",
  },
  "0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0": {
    symbol: "DF",
    name: "dForce",
    decimals: 18,
    address: "0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0",
    logoURI:
      "https://tokens.1inch.exchange/0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0.png",
  },
  "0x1695936d6a953df699c38ca21c2140d497c08bd9": {
    symbol: "SYN",
    name: "SynLev",
    decimals: 18,
    address: "0x1695936d6a953df699c38ca21c2140d497c08bd9",
    logoURI:
      "https://tokens.1inch.exchange/0x1695936d6a953df699c38ca21c2140d497c08bd9.png",
  },
  "0x3db6ba6ab6f95efed1a6e794cad492faaabf294d": {
    symbol: "LTO",
    name: "LTO Network Token",
    decimals: 8,
    address: "0x3db6ba6ab6f95efed1a6e794cad492faaabf294d",
    logoURI:
      "https://tokens.1inch.exchange/0x3db6ba6ab6f95efed1a6e794cad492faaabf294d.png",
  },
  "0x6d16cf3ec5f763d4d99cb0b0b110eefd93b11b56": {
    symbol: "sOIL",
    name: "Synth sOIL",
    decimals: 18,
    address: "0x6d16cf3ec5f763d4d99cb0b0b110eefd93b11b56",
    logoURI:
      "https://tokens.1inch.exchange/0x6d16cf3ec5f763d4d99cb0b0b110eefd93b11b56.png",
  },
  "0xa5a5df41883cdc00c4ccc6e8097130535399d9a3": {
    symbol: "iOIL",
    name: "Synth iOIL",
    decimals: 18,
    address: "0xa5a5df41883cdc00c4ccc6e8097130535399d9a3",
    logoURI:
      "https://tokens.1inch.exchange/0xa5a5df41883cdc00c4ccc6e8097130535399d9a3.png",
  },
  "0xf5238462e7235c7b62811567e63dd17d12c2eaa0": {
    symbol: "CGT",
    name: "CACHE Gold",
    decimals: 8,
    address: "0xf5238462e7235c7b62811567e63dd17d12c2eaa0",
    logoURI:
      "https://tokens.1inch.exchange/0xf5238462e7235c7b62811567e63dd17d12c2eaa0.png",
  },
  "0x4fe83213d56308330ec302a8bd641f1d0113a4cc": {
    symbol: "NU",
    name: "NuCypher",
    decimals: 18,
    address: "0x4fe83213d56308330ec302a8bd641f1d0113a4cc",
    logoURI:
      "https://tokens.1inch.exchange/0x4fe83213d56308330ec302a8bd641f1d0113a4cc.png",
  },
  "0x9e70240d2a8a30a592d3f076441c4f303b26de12": {
    symbol: "OCT",
    name: "Wrapped OCT",
    decimals: 8,
    address: "0x9e70240d2a8a30a592d3f076441c4f303b26de12",
    logoURI:
      "https://tokens.1inch.exchange/0x9e70240d2a8a30a592d3f076441c4f303b26de12.png",
  },
  "0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8": {
    symbol: "QRX",
    name: "QuiverX",
    decimals: 18,
    address: "0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8",
    logoURI:
      "https://tokens.1inch.exchange/0x6e0dade58d2d89ebbe7afc384e3e4f15b70b14d8.png",
  },
  "0x05079687d35b93538cbd59fe5596380cae9054a9": {
    symbol: "BTSG",
    name: "BitSong",
    decimals: 18,
    address: "0x05079687d35b93538cbd59fe5596380cae9054a9",
    logoURI:
      "https://tokens.1inch.exchange/0x05079687d35b93538cbd59fe5596380cae9054a9.png",
  },
  "0x355c665e101b9da58704a8fddb5feef210ef20c0": {
    symbol: "GOLDx",
    name: "dForce GOLDx",
    decimals: 18,
    address: "0x355c665e101b9da58704a8fddb5feef210ef20c0",
    logoURI:
      "https://tokens.1inch.exchange/0x355c665e101b9da58704a8fddb5feef210ef20c0.png",
  },
  "0x69948cc03f478b95283f7dbf1ce764d0fc7ec54c": {
    symbol: "aRENv1",
    name: "Aave Interest bearing REN",
    decimals: 18,
    address: "0x69948cc03f478b95283f7dbf1ce764d0fc7ec54c",
    logoURI:
      "https://tokens.1inch.exchange/0x69948cc03f478b95283f7dbf1ce764d0fc7ec54c.png",
  },
  "0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4": {
    symbol: "VAL",
    name: "Sora Validator Token",
    decimals: 18,
    address: "0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4",
    logoURI:
      "https://tokens.1inch.exchange/0xe88f8313e61a97cec1871ee37fbbe2a8bf3ed1e4.png",
  },
  "0xbaa70614c7aafb568a93e62a98d55696bcc85dfe": {
    symbol: "UCAP",
    name: "UniCap.finance",
    decimals: 18,
    address: "0xbaa70614c7aafb568a93e62a98d55696bcc85dfe",
    logoURI:
      "https://tokens.1inch.exchange/0xbaa70614c7aafb568a93e62a98d55696bcc85dfe.png",
  },
  "0x0b38210ea11411557c13457d4da7dc6ea731b88a": {
    symbol: "API3",
    name: "API3",
    decimals: 18,
    address: "0x0b38210ea11411557c13457d4da7dc6ea731b88a",
    logoURI:
      "https://tokens.1inch.exchange/0x0b38210ea11411557c13457d4da7dc6ea731b88a.png",
  },
  "0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a": {
    symbol: "BAC",
    name: "BAC",
    decimals: 18,
    address: "0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a",
    logoURI:
      "https://tokens.1inch.exchange/0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a.png",
  },
  "0xa7ed29b253d8b4e3109ce07c80fc570f81b63696": {
    symbol: "BAS",
    name: "BAS",
    decimals: 18,
    address: "0xa7ed29b253d8b4e3109ce07c80fc570f81b63696",
    logoURI:
      "https://tokens.1inch.exchange/0xa7ed29b253d8b4e3109ce07c80fc570f81b63696.png",
  },
  "0x26607ac599266b21d13c7acf7942c7701a8b699c": {
    symbol: "PIPT",
    name: "Power Index Pool Token",
    decimals: 18,
    address: "0x26607ac599266b21d13c7acf7942c7701a8b699c",
    logoURI:
      "https://tokens.1inch.exchange/0x26607ac599266b21d13c7acf7942c7701a8b699c.png",
  },
  "0x3218a02f8f8b5c3894ce30eb255f10bcba13e654": {
    symbol: "MEGA",
    name: "MegaCryptoPolis $MEGA Token (MEGA)",
    decimals: 18,
    address: "0x3218a02f8f8b5c3894ce30eb255f10bcba13e654",
    logoURI:
      "https://tokens.1inch.exchange/0x3218a02f8f8b5c3894ce30eb255f10bcba13e654.png",
  },
  "0x07150e919b4de5fd6a63de1f9384828396f25fdc": {
    symbol: "BASE",
    name: "Base Protocol",
    decimals: 9,
    address: "0x07150e919b4de5fd6a63de1f9384828396f25fdc",
    logoURI:
      "https://tokens.1inch.exchange/0x07150e919b4de5fd6a63de1f9384828396f25fdc.png",
  },
  "0xd2dda223b2617cb616c1580db421e4cfae6a8a85": {
    symbol: "BONDLY",
    name: "Bondly Token",
    decimals: 18,
    address: "0xd2dda223b2617cb616c1580db421e4cfae6a8a85",
    logoURI:
      "https://tokens.1inch.exchange/0xd2dda223b2617cb616c1580db421e4cfae6a8a85.png",
  },
  "0x9d79d5b61de59d882ce90125b18f74af650acb93": {
    symbol: "NSBT",
    name: "Neutrino System Base Token",
    decimals: 6,
    address: "0x9d79d5b61de59d882ce90125b18f74af650acb93",
    logoURI:
      "https://tokens.1inch.exchange/0x9d79d5b61de59d882ce90125b18f74af650acb93.png",
  },
  "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206": {
    symbol: "NEXO",
    name: "Nexo",
    decimals: 18,
    address: "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
    logoURI:
      "https://tokens.1inch.exchange/0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206.png",
  },
  "0xffc97d72e13e01096502cb8eb52dee56f74dad7b": {
    symbol: "aAAVE",
    name: "Aave interest bearing AAVE",
    decimals: 18,
    address: "0xffc97d72e13e01096502cb8eb52dee56f74dad7b",
    logoURI:
      "https://tokens.1inch.exchange/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png",
  },
  "0x05ec93c0365baaeabf7aeffb0972ea7ecdd39cf1": {
    symbol: "aBAT",
    name: "Aave interest bearing BAT",
    decimals: 18,
    address: "0x05ec93c0365baaeabf7aeffb0972ea7ecdd39cf1",
    logoURI:
      "https://tokens.1inch.exchange/0x05ec93c0365baaeabf7aeffb0972ea7ecdd39cf1.png",
  },
  "0xa361718326c15715591c299427c62086f69923d9": {
    symbol: "aBUSD",
    name: "Aave interest bearing BUSD",
    decimals: 18,
    address: "0xa361718326c15715591c299427c62086f69923d9",
    logoURI:
      "https://tokens.1inch.exchange/0xa361718326c15715591c299427c62086f69923d9.png",
  },
  "0x028171bca77440897b824ca71d1c56cac55b68a3": {
    symbol: "aDAI",
    name: "Aave interest bearing DAI",
    decimals: 18,
    address: "0x028171bca77440897b824ca71d1c56cac55b68a3",
    logoURI:
      "https://tokens.1inch.exchange/0x028171bca77440897b824ca71d1c56cac55b68a3.png",
  },
  "0xac6df26a590f08dcc95d5a4705ae8abbc88509ef": {
    symbol: "aENJ",
    name: "Aave interest bearing ENJ",
    decimals: 18,
    address: "0xac6df26a590f08dcc95d5a4705ae8abbc88509ef",
    logoURI:
      "https://tokens.1inch.exchange/0xac6df26a590f08dcc95d5a4705ae8abbc88509ef.png",
  },
  "0x39c6b3e42d6a679d7d776778fe880bc9487c2eda": {
    symbol: "aKNC",
    name: "Aave interest bearing KNC",
    decimals: 18,
    address: "0x39c6b3e42d6a679d7d776778fe880bc9487c2eda",
    logoURI:
      "https://tokens.1inch.exchange/0x39c6b3e42d6a679d7d776778fe880bc9487c2eda.png",
  },
  "0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0": {
    symbol: "aLINK",
    name: "Aave interest bearing LINK",
    decimals: 18,
    address: "0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0",
    logoURI:
      "https://tokens.1inch.exchange/0xa06bc25b5805d5f8d82847d191cb4af5a3e873e0.png",
  },
  "0xa685a61171bb30d4072b338c80cb7b2c865c873e": {
    symbol: "aMANA",
    name: "Aave interest bearing MANA",
    decimals: 18,
    address: "0xa685a61171bb30d4072b338c80cb7b2c865c873e",
    logoURI:
      "https://tokens.1inch.exchange/0xa685a61171bb30d4072b338c80cb7b2c865c873e.png",
  },
  "0xc713e5e149d5d0715dcd1c156a020976e7e56b88": {
    symbol: "aMKR",
    name: "Aave interest bearing MKR",
    decimals: 18,
    address: "0xc713e5e149d5d0715dcd1c156a020976e7e56b88",
    logoURI:
      "https://tokens.1inch.exchange/0xc713e5e149d5d0715dcd1c156a020976e7e56b88.png",
  },
  "0xcc12abe4ff81c9378d670de1b57f8e0dd228d77a": {
    symbol: "aREN",
    name: "Aave Interest bearing REN",
    decimals: 18,
    address: "0xcc12abe4ff81c9378d670de1b57f8e0dd228d77a",
    logoURI:
      "https://tokens.1inch.exchange/0xcc12abe4ff81c9378d670de1b57f8e0dd228d77a.png",
  },
  "0x35f6b052c598d933d69a4eec4d04c73a191fe6c2": {
    symbol: "aSNX",
    name: "Aave interest bearing SNX",
    decimals: 18,
    address: "0x35f6b052c598d933d69a4eec4d04c73a191fe6c2",
    logoURI:
      "https://tokens.1inch.exchange/0x35f6b052c598d933d69a4eec4d04c73a191fe6c2.png",
  },
  "0x6c5024cd4f8a59110119c56f8933403a539555eb": {
    symbol: "aSUSD",
    name: "Aave interest bearing SUSD",
    decimals: 18,
    address: "0x6c5024cd4f8a59110119c56f8933403a539555eb",
    logoURI:
      "https://tokens.1inch.exchange/0x6c5024cd4f8a59110119c56f8933403a539555eb.png",
  },
  "0x101cc05f4a51c0319f570d5e146a8c625198e636": {
    symbol: "aTUSD",
    name: "Aave interest bearing TUSD",
    decimals: 18,
    address: "0x101cc05f4a51c0319f570d5e146a8c625198e636",
    logoURI:
      "https://tokens.1inch.exchange/0x101cc05f4a51c0319f570d5e146a8c625198e636.png",
  },
  "0xb9d7cb55f463405cdfbe4e90a6d2df01c2b92bf1": {
    symbol: "aUNI",
    name: "Aave interest bearing UNI",
    decimals: 18,
    address: "0xb9d7cb55f463405cdfbe4e90a6d2df01c2b92bf1",
    logoURI:
      "https://tokens.1inch.exchange/0xb9d7cb55f463405cdfbe4e90a6d2df01c2b92bf1.png",
  },
  "0xbcca60bb61934080951369a648fb03df4f96263c": {
    symbol: "aUSDC",
    name: "Aave interest bearing USDC",
    decimals: 6,
    address: "0xbcca60bb61934080951369a648fb03df4f96263c",
    logoURI:
      "https://tokens.1inch.exchange/0xbcca60bb61934080951369a648fb03df4f96263c.png",
  },
  "0x3ed3b47dd13ec9a98b44e6204a523e766b225811": {
    symbol: "aUSDT",
    name: "Aave interest bearing USDT",
    decimals: 6,
    address: "0x3ed3b47dd13ec9a98b44e6204a523e766b225811",
    logoURI:
      "https://tokens.1inch.exchange/0x3ed3b47dd13ec9a98b44e6204a523e766b225811.png",
  },
  "0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656": {
    symbol: "aWBTC",
    name: "Aave interest bearing WBTC",
    decimals: 8,
    address: "0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656",
    logoURI:
      "https://tokens.1inch.exchange/0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656.png",
  },
  "0x030ba81f1c18d280636f32af80b9aad02cf0854e": {
    symbol: "aWETH",
    name: "Aave interest bearing WETH",
    decimals: 18,
    address: "0x030ba81f1c18d280636f32af80b9aad02cf0854e",
    logoURI:
      "https://tokens.1inch.exchange/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png",
  },
  "0x5165d24277cd063f5ac44efd447b27025e888f37": {
    symbol: "aYFI",
    name: "Aave interest bearing YFI",
    decimals: 18,
    address: "0x5165d24277cd063f5ac44efd447b27025e888f37",
    logoURI:
      "https://tokens.1inch.exchange/0x5165d24277cd063f5ac44efd447b27025e888f37.png",
  },
  "0xdf7ff54aacacbff42dfe29dd6144a69b629f8c9e": {
    symbol: "aZRX",
    name: "Aave interest bearing ZRX",
    decimals: 18,
    address: "0xdf7ff54aacacbff42dfe29dd6144a69b629f8c9e",
    logoURI:
      "https://tokens.1inch.exchange/0xdf7ff54aacacbff42dfe29dd6144a69b629f8c9e.png",
  },
  "0xf644d4477cd8db7791cea3013cb053b3fec4beb3": {
    symbol: "LION",
    name: "Cryptoenter LION token",
    decimals: 8,
    address: "0xf644d4477cd8db7791cea3013cb053b3fec4beb3",
    logoURI:
      "https://tokens.1inch.exchange/0xf644d4477cd8db7791cea3013cb053b3fec4beb3.png",
  },
  "0xa8e7ad77c60ee6f30bac54e2e7c0617bd7b5a03e": {
    symbol: "zLOT",
    name: "zLOT",
    decimals: 18,
    address: "0xa8e7ad77c60ee6f30bac54e2e7c0617bd7b5a03e",
    logoURI:
      "https://tokens.1inch.exchange/0xa8e7ad77c60ee6f30bac54e2e7c0617bd7b5a03e.png",
  },
  "0x191557728e4d8caa4ac94f86af842148c0fa8f7e": {
    symbol: "ECO",
    name: "ECO TOKEN",
    decimals: 8,
    address: "0x191557728e4d8caa4ac94f86af842148c0fa8f7e",
    logoURI:
      "https://tokens.1inch.exchange/0x191557728e4d8caa4ac94f86af842148c0fa8f7e.png",
  },
  "0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c": {
    symbol: "UTK",
    name: "Utrust Token",
    decimals: 18,
    address: "0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c",
    logoURI:
      "https://tokens.1inch.exchange/0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c.png",
  },
  "0x3472a5a71965499acd81997a54bba8d852c6e53d": {
    symbol: "BADGER",
    name: "Badger",
    decimals: 18,
    address: "0x3472a5a71965499acd81997a54bba8d852c6e53d",
    logoURI:
      "https://tokens.1inch.exchange/0x3472a5a71965499acd81997a54bba8d852c6e53d.png",
  },
  "0xc944e90c64b2c07662a292be6244bdf05cda44a7": {
    symbol: "GRT",
    name: "Graph Token",
    decimals: 18,
    address: "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
    logoURI:
      "https://tokens.1inch.exchange/0xc944e90c64b2c07662a292be6244bdf05cda44a7.png",
  },
  "0x5a98fcbea516cf06857215779fd812ca3bef1b32": {
    symbol: "LDO",
    name: "Lido DAO Token",
    decimals: 18,
    address: "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
    logoURI:
      "https://tokens.1inch.exchange/0x5a98fcbea516cf06857215779fd812ca3bef1b32.png",
  },
  "0x77777feddddffc19ff86db637967013e6c6a116c": {
    symbol: "TORN",
    name: "TornadoCash",
    decimals: 18,
    address: "0x77777feddddffc19ff86db637967013e6c6a116c",
    logoURI:
      "https://tokens.1inch.exchange/0x77777feddddffc19ff86db637967013e6c6a116c.png",
  },
  "0xae7ab96520de3a18e5e111b5eaab095312d7fe84": {
    symbol: "stETH",
    name: "stETH",
    decimals: 18,
    address: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
    logoURI:
      "https://tokens.1inch.exchange/0xae7ab96520de3a18e5e111b5eaab095312d7fe84.png",
  },
  "0xb4d930279552397bba2ee473229f89ec245bc365": {
    symbol: "MAHA",
    name: "MahaDAO",
    decimals: 18,
    address: "0xb4d930279552397bba2ee473229f89ec245bc365",
    logoURI:
      "https://tokens.1inch.exchange/0xb4d930279552397bba2ee473229f89ec245bc365.png",
  },
  "0x57b946008913b82e4df85f501cbaed910e58d26c": {
    symbol: "POND",
    name: "Marlin POND",
    decimals: 18,
    address: "0x57b946008913b82e4df85f501cbaed910e58d26c",
    logoURI:
      "https://tokens.1inch.exchange/0x57b946008913b82e4df85f501cbaed910e58d26c.png",
  },
  "0x3593d125a4f7849a1b059e64f4517a86dd60c95d": {
    symbol: "OMv2",
    name: "MANTRA DAO",
    decimals: 18,
    address: "0x3593d125a4f7849a1b059e64f4517a86dd60c95d",
    logoURI:
      "https://tokens.1inch.exchange/0x3593d125a4f7849a1b059e64f4517a86dd60c95d.png",
  },
  "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0": {
    symbol: "FXS",
    name: "Frax Share",
    decimals: 18,
    address: "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
    logoURI:
      "https://tokens.1inch.exchange/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0.png",
  },
  "0x1fdab294eda5112b7d066ed8f2e4e562d5bcc664": {
    symbol: "SPICE",
    name: "Spice",
    decimals: 18,
    address: "0x1fdab294eda5112b7d066ed8f2e4e562d5bcc664",
    logoURI:
      "https://tokens.1inch.exchange/0x1fdab294eda5112b7d066ed8f2e4e562d5bcc664.png",
  },
  "0x111111111117dc0aa78b770fa6a738034120c302": {
    symbol: "1INCH",
    name: "1INCH Token",
    decimals: 18,
    address: "0x111111111117dc0aa78b770fa6a738034120c302",
    logoURI:
      "https://tokens.1inch.exchange/0x111111111117dc0aa78b770fa6a738034120c302.png",
  },
  "0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2": {
    symbol: "PPAY",
    name: "Plasma",
    decimals: 18,
    address: "0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2",
    logoURI:
      "https://tokens.1inch.exchange/0x054d64b73d3d8a21af3d764efd76bcaa774f3bb2.png",
  },
  "0x368b3a58b5f49392e5c9e4c998cb0bb966752e51": {
    symbol: "MIC",
    name: "MIC",
    decimals: 18,
    address: "0x368b3a58b5f49392e5c9e4c998cb0bb966752e51",
    logoURI:
      "https://tokens.1inch.exchange/0x368b3a58b5f49392e5c9e4c998cb0bb966752e51.png",
  },
  "0x4b4d2e899658fb59b1d518b68fe836b100ee8958": {
    symbol: "MIS",
    name: "MIS",
    decimals: 18,
    address: "0x4b4d2e899658fb59b1d518b68fe836b100ee8958",
    logoURI:
      "https://tokens.1inch.exchange/0x4b4d2e899658fb59b1d518b68fe836b100ee8958.png",
  },
  "0x03066da434e5264ef0b32f787923f974a5726fdc": {
    symbol: "BCS",
    name: "BCS",
    decimals: 18,
    address: "0x03066da434e5264ef0b32f787923f974a5726fdc",
    logoURI:
      "https://tokens.1inch.exchange/0x03066da434e5264ef0b32f787923f974a5726fdc.png",
  },
  "0xee573a945b01b788b9287ce062a0cfc15be9fd86": {
    symbol: "XED",
    name: "Exeedme",
    decimals: 18,
    address: "0xee573a945b01b788b9287ce062a0cfc15be9fd86",
    logoURI:
      "https://tokens.1inch.exchange/0xee573a945b01b788b9287ce062a0cfc15be9fd86.png",
  },
  "0x34950ff2b487d9e5282c5ab342d08a2f712eb79f": {
    symbol: "WOZX",
    name: "EFFORCE IEO",
    decimals: 18,
    address: "0x34950ff2b487d9e5282c5ab342d08a2f712eb79f",
    logoURI:
      "https://tokens.1inch.exchange/0x34950ff2b487d9e5282c5ab342d08a2f712eb79f.png",
  },
  "0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3": {
    symbol: "DSD",
    name: "Dynamic Set Dollar",
    decimals: 18,
    address: "0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3",
    logoURI:
      "https://tokens.1inch.exchange/0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3.png",
  },
  "0xc770eefad204b5180df6a14ee197d99d808ee52d": {
    symbol: "FOX",
    name: "FOX",
    decimals: 18,
    address: "0xc770eefad204b5180df6a14ee197d99d808ee52d",
    logoURI:
      "https://tokens.1inch.exchange/0xc770eefad204b5180df6a14ee197d99d808ee52d.png",
  },
  "0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713": {
    symbol: "COVER",
    name: "Cover Protocol Governance Token",
    decimals: 18,
    address: "0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713",
    logoURI:
      "https://tokens.1inch.exchange/0x4688a8b1f292fdab17e9a90c8bc379dc1dbd8713.png",
  },
  "0x66a0f676479cee1d7373f3dc2e2952778bff5bd6": {
    symbol: "WISE",
    name: "Wise Token",
    decimals: 18,
    address: "0x66a0f676479cee1d7373f3dc2e2952778bff5bd6",
    logoURI:
      "https://tokens.1inch.exchange/0x66a0f676479cee1d7373f3dc2e2952778bff5bd6.png",
  },
  "0x539f3615c1dbafa0d008d87504667458acbd16fa": {
    symbol: "FERA",
    name: "FERA",
    decimals: 18,
    address: "0x539f3615c1dbafa0d008d87504667458acbd16fa",
    logoURI:
      "https://tokens.1inch.exchange/0x539f3615c1dbafa0d008d87504667458acbd16fa.png",
  },
  "0xffffffff2ba8f66d4e51811c5190992176930278": {
    symbol: "COMBO",
    name: "Furucombo",
    decimals: 18,
    address: "0xffffffff2ba8f66d4e51811c5190992176930278",
    logoURI:
      "https://tokens.1inch.exchange/0xffffffff2ba8f66d4e51811c5190992176930278.png",
  },
  "0x2b4200a8d373d484993c37d63ee14aee0096cd12": {
    symbol: "USDFL",
    name: "USDFreeLiquidity",
    decimals: 18,
    address: "0x2b4200a8d373d484993c37d63ee14aee0096cd12",
    logoURI:
      "https://tokens.1inch.exchange/0x2b4200a8d373d484993c37d63ee14aee0096cd12.png",
  },
  "0xaea46a60368a7bd060eec7df8cba43b7ef41ad85": {
    symbol: "FET",
    name: "Fetch",
    decimals: 18,
    address: "0xaea46a60368a7bd060eec7df8cba43b7ef41ad85",
    logoURI:
      "https://tokens.1inch.exchange/0xaea46a60368a7bd060eec7df8cba43b7ef41ad85.png",
  },
  "0x6c5ba91642f10282b576d91922ae6448c9d52f4e": {
    symbol: "PHA",
    name: "Phala",
    decimals: 18,
    address: "0x6c5ba91642f10282b576d91922ae6448c9d52f4e",
    logoURI:
      "https://tokens.1inch.exchange/0x6c5ba91642f10282b576d91922ae6448c9d52f4e.png",
  },
  "0xa8b12cc90abf65191532a12bb5394a714a46d358": {
    symbol: "pBTC35A",
    name: "POW BTC-35W/T",
    decimals: 18,
    address: "0xa8b12cc90abf65191532a12bb5394a714a46d358",
    logoURI:
      "https://tokens.1inch.exchange/0xa8b12cc90abf65191532a12bb5394a714a46d358.png",
  },
  "0x853d955acef822db058eb8505911ed77f175b99e": {
    symbol: "FRAX",
    name: "Frax",
    decimals: 18,
    address: "0x853d955acef822db058eb8505911ed77f175b99e",
    logoURI:
      "https://tokens.1inch.exchange/0x853d955acef822db058eb8505911ed77f175b99e.png",
  },
  "0xe28b3b32b6c345a34ff64674606124dd5aceca30": {
    symbol: "INJ",
    name: "Injective Token",
    decimals: 18,
    address: "0xe28b3b32b6c345a34ff64674606124dd5aceca30",
    logoURI:
      "https://tokens.1inch.exchange/0xe28b3b32b6c345a34ff64674606124dd5aceca30.png",
  },
  "0x0a50c93c762fdd6e56d86215c24aaad43ab629aa": {
    symbol: "LGO",
    name: "LGO Token",
    decimals: 8,
    address: "0x0a50c93c762fdd6e56d86215c24aaad43ab629aa",
    logoURI:
      "https://tokens.1inch.exchange/0x0a50c93c762fdd6e56d86215c24aaad43ab629aa.png",
  },
  "0xf94b5c5651c888d928439ab6514b93944eee6f48": {
    symbol: "YLD",
    name: "Yield",
    decimals: 18,
    address: "0xf94b5c5651c888d928439ab6514b93944eee6f48",
    logoURI:
      "https://tokens.1inch.exchange/0xf94b5c5651c888d928439ab6514b93944eee6f48.png",
  },
  "0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4": {
    symbol: "CFi",
    name: "CyberFi Token",
    decimals: 18,
    address: "0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4",
    logoURI:
      "https://tokens.1inch.exchange/0x63b4f3e3fa4e438698ce330e365e831f7ccd1ef4.png",
  },
  "0xd291e7a03283640fdc51b121ac401383a46cc623": {
    symbol: "RGT",
    name: "Rari Governance Token",
    decimals: 18,
    address: "0xd291e7a03283640fdc51b121ac401383a46cc623",
    logoURI:
      "https://tokens.1inch.exchange/0xd291e7a03283640fdc51b121ac401383a46cc623.png",
  },
  "0xfa5047c9c78b8877af97bdcb85db743fd7313d4a": {
    symbol: "ROOK",
    name: "ROOK",
    decimals: 18,
    address: "0xfa5047c9c78b8877af97bdcb85db743fd7313d4a",
    logoURI:
      "https://tokens.1inch.exchange/0xfa5047c9c78b8877af97bdcb85db743fd7313d4a.png",
  },
  "0xae1eaae3f627aaca434127644371b67b18444051": {
    symbol: "YOP",
    name: "YOP",
    decimals: 8,
    address: "0xae1eaae3f627aaca434127644371b67b18444051",
    logoURI:
      "https://tokens.1inch.exchange/0xae1eaae3f627aaca434127644371b67b18444051.png",
  },
  "0x87d73e916d7057945c9bcd8cdd94e42a6f47f776": {
    symbol: "NFTX",
    name: "NFTX",
    decimals: 18,
    address: "0x87d73e916d7057945c9bcd8cdd94e42a6f47f776",
    logoURI:
      "https://tokens.1inch.exchange/0x87d73e916d7057945c9bcd8cdd94e42a6f47f776.png",
  },
  "0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3": {
    symbol: "RBC",
    name: "Rubic",
    decimals: 18,
    address: "0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3",
    logoURI:
      "https://tokens.1inch.exchange/0xa4eed63db85311e22df4473f87ccfc3dadcfa3e3.png",
  },
  "0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f": {
    symbol: "SDT",
    name: "Stake DAO Token",
    decimals: 18,
    address: "0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f",
    logoURI:
      "https://tokens.1inch.exchange/0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f.png",
  },
  "0x5af2be193a6abca9c8817001f45744777db30756": {
    symbol: "VGX",
    name: "Voyager",
    decimals: 8,
    address: "0x5af2be193a6abca9c8817001f45744777db30756",
    logoURI:
      "https://tokens.1inch.exchange/0x5af2be193a6abca9c8817001f45744777db30756.png",
  },
  "0x9248c485b0b80f76da451f167a8db30f33c70907": {
    symbol: "DEBASE",
    name: "Debase",
    decimals: 18,
    address: "0x9248c485b0b80f76da451f167a8db30f33c70907",
    logoURI:
      "https://tokens.1inch.exchange/0x9248c485b0b80f76da451f167a8db30f33c70907.png",
  },
  "0x8290333cef9e6d528dd5618fb97a76f268f3edd4": {
    symbol: "ANKR",
    name: "Ankr Network",
    decimals: 18,
    address: "0x8290333cef9e6d528dd5618fb97a76f268f3edd4",
    logoURI:
      "https://tokens.1inch.exchange/0x8290333cef9e6d528dd5618fb97a76f268f3edd4.png",
  },
  "0xc719d010b63e5bbf2c0551872cd5316ed26acd83": {
    symbol: "DIP_Insurance",
    name: "Decentralized Insurance Protocol",
    decimals: 18,
    address: "0xc719d010b63e5bbf2c0551872cd5316ed26acd83",
    logoURI:
      "https://tokens.1inch.exchange/0xc719d010b63e5bbf2c0551872cd5316ed26acd83.png",
  },
  "0x3155ba85d5f96b2d030a4966af206230e46849cb": {
    symbol: "RUNE",
    name: "THORChain ETH.RUNE",
    decimals: 18,
    address: "0x3155ba85d5f96b2d030a4966af206230e46849cb",
    logoURI:
      "https://tokens.1inch.exchange/0x3155ba85d5f96b2d030a4966af206230e46849cb.png",
  },
  "0x374cb8c27130e2c9e04f44303f3c8351b9de61c1": {
    symbol: "BAO",
    name: "BaoToken",
    decimals: 18,
    address: "0x374cb8c27130e2c9e04f44303f3c8351b9de61c1",
    logoURI:
      "https://tokens.1inch.exchange/0x374cb8c27130e2c9e04f44303f3c8351b9de61c1.png",
  },
  "0xfe3e6a25e6b192a42a44ecddcd13796471735acf": {
    symbol: "REEF",
    name: "Reef.finance",
    decimals: 18,
    address: "0xfe3e6a25e6b192a42a44ecddcd13796471735acf",
    logoURI:
      "https://tokens.1inch.exchange/0xfe3e6a25e6b192a42a44ecddcd13796471735acf.png",
  },
  "0x4c19596f5aaff459fa38b0f7ed92f11ae6543784": {
    symbol: "TRU",
    name: "TrustToken",
    decimals: 8,
    address: "0x4c19596f5aaff459fa38b0f7ed92f11ae6543784",
    logoURI:
      "https://tokens.1inch.exchange/0x4c19596f5aaff459fa38b0f7ed92f11ae6543784.png",
  },
  "0x86772b1409b61c639eaac9ba0acfbb6e238e5f83": {
    symbol: "NDX",
    name: "Indexed",
    decimals: 18,
    address: "0x86772b1409b61c639eaac9ba0acfbb6e238e5f83",
    logoURI:
      "https://tokens.1inch.exchange/0x86772b1409b61c639eaac9ba0acfbb6e238e5f83.png",
  },
  "0x67c597624b17b16fb77959217360b7cd18284253": {
    symbol: "MARK",
    name: "Benchmark",
    decimals: 9,
    address: "0x67c597624b17b16fb77959217360b7cd18284253",
    logoURI:
      "https://tokens.1inch.exchange/0x67c597624b17b16fb77959217360b7cd18284253.png",
  },
  "0xf0939011a9bb95c3b791f0cb546377ed2693a574": {
    symbol: "ZERO",
    name: "Zero.Exchange Token",
    decimals: 18,
    address: "0xf0939011a9bb95c3b791f0cb546377ed2693a574",
    logoURI:
      "https://tokens.1inch.exchange/0xf0939011a9bb95c3b791f0cb546377ed2693a574.png",
  },
  "0x7240ac91f01233baaf8b064248e80feaa5912ba3": {
    symbol: "OCTO",
    name: "Octo.fi",
    decimals: 18,
    address: "0x7240ac91f01233baaf8b064248e80feaa5912ba3",
    logoURI:
      "https://tokens.1inch.exchange/0x7240ac91f01233baaf8b064248e80feaa5912ba3.png",
  },
  "0x4c11249814f11b9346808179cf06e71ac328c1b5": {
    symbol: "ORAI",
    name: "Oraichain Token",
    decimals: 18,
    address: "0x4c11249814f11b9346808179cf06e71ac328c1b5",
    logoURI:
      "https://tokens.1inch.exchange/0x4c11249814f11b9346808179cf06e71ac328c1b5.png",
  },
  "0xb1dc9124c395c1e97773ab855d66e879f053a289": {
    symbol: "YAX",
    name: "yAxis",
    decimals: 18,
    address: "0xb1dc9124c395c1e97773ab855d66e879f053a289",
    logoURI:
      "https://tokens.1inch.exchange/0xb1dc9124c395c1e97773ab855d66e879f053a289.png",
  },
  "0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20": {
    symbol: "DDIM",
    name: "DuckDaoDime",
    decimals: 18,
    address: "0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20",
    logoURI:
      "https://tokens.1inch.exchange/0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20.png",
  },
  "0x70401dfd142a16dc7031c56e862fc88cb9537ce0": {
    symbol: "BIRD",
    name: "Bird.Money",
    decimals: 18,
    address: "0x70401dfd142a16dc7031c56e862fc88cb9537ce0",
    logoURI:
      "https://tokens.1inch.exchange/0x70401dfd142a16dc7031c56e862fc88cb9537ce0.png",
  },
  "0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0": {
    symbol: "$ANRX",
    name: "AnRKey X",
    decimals: 18,
    address: "0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0",
    logoURI:
      "https://tokens.1inch.exchange/0xcae72a7a0fd9046cf6b165ca54c9e3a3872109e0.png",
  },
  "0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7": {
    symbol: "SPI_Shopping",
    name: "Shopping.io",
    decimals: 18,
    address: "0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7",
    logoURI:
      "https://tokens.1inch.exchange/0x9b02dd390a603add5c07f9fd9175b7dabe8d63b7.png",
  },
  "0x86ed939b500e121c0c5f493f399084db596dad20": {
    symbol: "SPC",
    name: "SpaceChainV2",
    decimals: 18,
    address: "0x86ed939b500e121c0c5f493f399084db596dad20",
    logoURI:
      "https://tokens.1inch.exchange/0x86ed939b500e121c0c5f493f399084db596dad20.png",
  },
  "0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f": {
    symbol: "RAMP",
    name: "RAMP DEFI",
    decimals: 18,
    address: "0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f",
    logoURI:
      "https://tokens.1inch.exchange/0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f.png",
  },
  "0xb987d48ed8f2c468d52d6405624eadba5e76d723": {
    symbol: "STBZ",
    name: "Stabilize Token",
    decimals: 18,
    address: "0xb987d48ed8f2c468d52d6405624eadba5e76d723",
    logoURI:
      "https://tokens.1inch.exchange/0xb987d48ed8f2c468d52d6405624eadba5e76d723.png",
  },
  "0x159751323a9e0415dd3d6d42a1212fe9f4a0848c": {
    symbol: "INFI",
    name: "INFI",
    decimals: 18,
    address: "0x159751323a9e0415dd3d6d42a1212fe9f4a0848c",
    logoURI:
      "https://tokens.1inch.exchange/0x159751323a9e0415dd3d6d42a1212fe9f4a0848c.png",
  },
  "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b": {
    symbol: "CRO",
    name: "CRO",
    decimals: 8,
    address: "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
    logoURI:
      "https://tokens.1inch.exchange/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b.png",
  },
  "0xa8b919680258d369114910511cc87595aec0be6d": {
    symbol: "LYXe",
    name: "LUKSO Token",
    decimals: 18,
    address: "0xa8b919680258d369114910511cc87595aec0be6d",
    logoURI:
      "https://tokens.1inch.exchange/0xa8b919680258d369114910511cc87595aec0be6d.png",
  },
  "0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988": {
    symbol: "TVK",
    name: "Terra Virtua Kolect",
    decimals: 18,
    address: "0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988",
    logoURI:
      "https://tokens.1inch.exchange/0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988.png",
  },
  "0x798d1be841a82a273720ce31c822c61a67a601c3": {
    symbol: "DIGG",
    name: "Digg",
    decimals: 9,
    address: "0x798d1be841a82a273720ce31c822c61a67a601c3",
    logoURI:
      "https://tokens.1inch.exchange/0x798d1be841a82a273720ce31c822c61a67a601c3.png",
  },
  "0xffed56a180f23fd32bc6a1d8d3c09c283ab594a8": {
    symbol: "FL",
    name: "FL",
    decimals: 18,
    address: "0xffed56a180f23fd32bc6a1d8d3c09c283ab594a8",
    logoURI:
      "https://tokens.1inch.exchange/0xffed56a180f23fd32bc6a1d8d3c09c283ab594a8.png",
  },
  "0x5580ab97f226c324c671746a1787524aef42e415": {
    symbol: "JUL",
    name: "JUL",
    decimals: 18,
    address: "0x5580ab97f226c324c671746a1787524aef42e415",
    logoURI:
      "https://tokens.1inch.exchange/0x5580ab97f226c324c671746a1787524aef42e415.png",
  },
  "0xa1faa113cbe53436df28ff0aee54275c13b40975": {
    symbol: "ALPHA",
    name: "AlphaToken",
    decimals: 18,
    address: "0xa1faa113cbe53436df28ff0aee54275c13b40975",
    logoURI:
      "https://tokens.1inch.exchange/0xa1faa113cbe53436df28ff0aee54275c13b40975.png",
  },
  "0x817bbdbc3e8a1204f3691d14bb44992841e3db35": {
    symbol: "CUDOS",
    name: "CudosToken",
    decimals: 18,
    address: "0x817bbdbc3e8a1204f3691d14bb44992841e3db35",
    logoURI:
      "https://tokens.1inch.exchange/0x817bbdbc3e8a1204f3691d14bb44992841e3db35.png",
  },
  "0xde4ee8057785a7e8e800db58f9784845a5c2cbd6": {
    symbol: "DEXE",
    name: "Dexe",
    decimals: 18,
    address: "0xde4ee8057785a7e8e800db58f9784845a5c2cbd6",
    logoURI:
      "https://tokens.1inch.exchange/0xde4ee8057785a7e8e800db58f9784845a5c2cbd6.png",
  },
  "0x3845badade8e6dff049820680d1f14bd3903a5d0": {
    symbol: "SAND",
    name: "SAND",
    decimals: 18,
    address: "0x3845badade8e6dff049820680d1f14bd3903a5d0",
    logoURI:
      "https://tokens.1inch.exchange/0x3845badade8e6dff049820680d1f14bd3903a5d0.png",
  },
  "0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6": {
    symbol: "CVR",
    name: "PolkaCover",
    decimals: 18,
    address: "0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6",
    logoURI:
      "https://tokens.1inch.exchange/0x3c03b4ec9477809072ff9cc9292c9b25d4a8e6c6.png",
  },
  "0x79256db1bdb6259315a1a3d7dd237f69cadfd8fc": {
    symbol: "PHOON",
    name: "Typhoon",
    decimals: 18,
    address: "0x79256db1bdb6259315a1a3d7dd237f69cadfd8fc",
    logoURI:
      "https://tokens.1inch.exchange/0x79256db1bdb6259315a1a3d7dd237f69cadfd8fc.png",
  },
  "0xe5caef4af8780e59df925470b050fb23c43ca68c": {
    symbol: "FRM",
    name: "Ferrum Network Token",
    decimals: 6,
    address: "0xe5caef4af8780e59df925470b050fb23c43ca68c",
    logoURI:
      "https://tokens.1inch.exchange/0xe5caef4af8780e59df925470b050fb23c43ca68c.png",
  },
  "0x298d492e8c1d909d3f63bc4a36c66c64acb3d695": {
    symbol: "PBR",
    name: "PolkaBridge",
    decimals: 18,
    address: "0x298d492e8c1d909d3f63bc4a36c66c64acb3d695",
    logoURI:
      "https://tokens.1inch.exchange/0x298d492e8c1d909d3f63bc4a36c66c64acb3d695.png",
  },
  "0xfe9a29ab92522d14fc65880d817214261d8479ae": {
    symbol: "SNOW",
    name: "SnowSwap",
    decimals: 18,
    address: "0xfe9a29ab92522d14fc65880d817214261d8479ae",
    logoURI:
      "https://tokens.1inch.exchange/0xfe9a29ab92522d14fc65880d817214261d8479ae.png",
  },
  "0x220b71671b649c03714da9c621285943f3cbcdc6": {
    symbol: "DIS",
    name: "TosDis",
    decimals: 18,
    address: "0x220b71671b649c03714da9c621285943f3cbcdc6",
    logoURI:
      "https://tokens.1inch.exchange/0x220b71671b649c03714da9c621285943f3cbcdc6.png",
  },
  "0x69a95185ee2a045cdc4bcd1b1df10710395e4e23": {
    symbol: "POOLZ",
    name: "$Poolz Finance",
    decimals: 18,
    address: "0x69a95185ee2a045cdc4bcd1b1df10710395e4e23",
    logoURI:
      "https://tokens.1inch.exchange/0x69a95185ee2a045cdc4bcd1b1df10710395e4e23.png",
  },
  "0xe4815ae53b124e7263f08dcdbbb757d41ed658c6": {
    symbol: "ZKS",
    name: "Zks",
    decimals: 18,
    address: "0xe4815ae53b124e7263f08dcdbbb757d41ed658c6",
    logoURI:
      "https://tokens.1inch.exchange/0xe4815ae53b124e7263f08dcdbbb757d41ed658c6.png",
  },
  "0x1337def16f9b486faed0293eb623dc8395dfe46a": {
    symbol: "ARMOR",
    name: "Armor",
    decimals: 18,
    address: "0x1337def16f9b486faed0293eb623dc8395dfe46a",
    logoURI:
      "https://tokens.1inch.exchange/0x1337def16f9b486faed0293eb623dc8395dfe46a.png",
  },
  "0x1337def18c680af1f9f45cbcab6309562975b1dd": {
    symbol: "arNXM",
    name: "Armor NXM",
    decimals: 18,
    address: "0x1337def18c680af1f9f45cbcab6309562975b1dd",
    logoURI:
      "https://tokens.1inch.exchange/0x1337def18c680af1f9f45cbcab6309562975b1dd.png",
  },
  "0x888888888889c00c67689029d7856aac1065ec11": {
    symbol: "OPIUM",
    name: "Opium Governance Token",
    decimals: 18,
    address: "0x888888888889c00c67689029d7856aac1065ec11",
    logoURI:
      "https://tokens.1inch.exchange/0x888888888889c00c67689029d7856aac1065ec11.png",
  },
  "0x3fa729b4548becbad4eab6ef18413470e6d5324c": {
    symbol: "HH",
    name: "Holyheld",
    decimals: 18,
    address: "0x3fa729b4548becbad4eab6ef18413470e6d5324c",
    logoURI:
      "https://tokens.1inch.exchange/0x3fa729b4548becbad4eab6ef18413470e6d5324c.png",
  },
  "0xb4bebd34f6daafd808f73de0d10235a92fbb6c3d": {
    symbol: "YETI",
    name: "Yearn Ecosystem Token Index",
    decimals: 18,
    address: "0xb4bebd34f6daafd808f73de0d10235a92fbb6c3d",
    logoURI:
      "https://tokens.1inch.exchange/0xb4bebd34f6daafd808f73de0d10235a92fbb6c3d.png",
  },
  "0xfa2562da1bba7b954f26c74725df51fb62646313": {
    symbol: "ASSY",
    name: "ASSY Index",
    decimals: 18,
    address: "0xfa2562da1bba7b954f26c74725df51fb62646313",
    logoURI:
      "https://tokens.1inch.exchange/0xfa2562da1bba7b954f26c74725df51fb62646313.png",
  },
  "0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17": {
    symbol: "DYP",
    name: "DeFiYieldProtocol",
    decimals: 18,
    address: "0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17",
    logoURI:
      "https://tokens.1inch.exchange/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17.png",
  },
  "0x7a3eb5727e33a8000030718e82481f33bc20c4e3": {
    symbol: "OPIUM_LP_a55e",
    name: "Opium cDAI Junior Tranche",
    decimals: 8,
    address: "0x7a3eb5727e33a8000030718e82481f33bc20c4e3",
    logoURI:
      "https://tokens.1inch.exchange/0x7a3eb5727e33a8000030718e82481f33bc20c4e3.png",
  },
  "0x2994529c0652d127b7842094103715ec5299bbed": {
    symbol: "ybCRV",
    name: "yearn Curve.fi yDAI/yUSDC/yUSDT/yBUSD",
    decimals: 18,
    address: "0x2994529c0652d127b7842094103715ec5299bbed",
    logoURI:
      "https://tokens.1inch.exchange/0x2994529c0652d127b7842094103715ec5299bbed.png",
  },
  "0xacd43e627e64355f1861cec6d3a6688b31a6f952": {
    symbol: "yDAI",
    name: "yearn Dai Stablecoin",
    decimals: 18,
    address: "0xacd43e627e64355f1861cec6d3a6688b31a6f952",
    logoURI:
      "https://tokens.1inch.exchange/0xacd43e627e64355f1861cec6d3a6688b31a6f952.png",
  },
  "0x597ad1e0c13bfe8025993d9e79c69e1c0233522e": {
    symbol: "yUSDC",
    name: "yearn USD//C",
    decimals: 6,
    address: "0x597ad1e0c13bfe8025993d9e79c69e1c0233522e",
    logoURI:
      "https://tokens.1inch.exchange/0x597ad1e0c13bfe8025993d9e79c69e1c0233522e.png",
  },
  "0x2f08119c6f07c006695e079aafc638b8789faf18": {
    symbol: "yUSDT",
    name: "yearn Tether USD",
    decimals: 6,
    address: "0x2f08119c6f07c006695e079aafc638b8789faf18",
    logoURI:
      "https://tokens.1inch.exchange/0x2f08119c6f07c006695e079aafc638b8789faf18.png",
  },
  "0x37d19d1c4e1fa9dc47bd1ea12f742a0887eda74a": {
    symbol: "yTUSD",
    name: "yearn TrueUSD",
    decimals: 18,
    address: "0x37d19d1c4e1fa9dc47bd1ea12f742a0887eda74a",
    logoURI:
      "https://tokens.1inch.exchange/0x37d19d1c4e1fa9dc47bd1ea12f742a0887eda74a.png",
  },
  "0x7ff566e1d69deff32a7b244ae7276b9f90e9d0f6": {
    symbol: "ycrvRenWSBTC",
    name: "yearn Curve.fi renBTC/wBTC/sBTC",
    decimals: 18,
    address: "0x7ff566e1d69deff32a7b244ae7276b9f90e9d0f6",
    logoURI:
      "https://tokens.1inch.exchange/0x7ff566e1d69deff32a7b244ae7276b9f90e9d0f6.png",
  },
  "0x9aa8f427a17d6b0d91b6262989edc7d45d6aedf8": {
    symbol: "FcrvRenWBTC",
    name: "FARM_crvRenWBTC",
    decimals: 18,
    address: "0x9aa8f427a17d6b0d91b6262989edc7d45d6aedf8",
    logoURI:
      "https://tokens.1inch.exchange/0x9aa8f427a17d6b0d91b6262989edc7d45d6aedf8.png",
  },
  "0x898bad2774eb97cf6b94605677f43b41871410b1": {
    symbol: "vETH2",
    name: "validator-Eth2",
    decimals: 18,
    address: "0x898bad2774eb97cf6b94605677f43b41871410b1",
    logoURI:
      "https://tokens.1inch.exchange/0x898bad2774eb97cf6b94605677f43b41871410b1.png",
  },
  "0xe95a203b1a91a908f9b9ce46459d101078c2c3cb": {
    symbol: "aETH",
    name: "Ankr Eth2 Reward Bearing Bond",
    decimals: 18,
    address: "0xe95a203b1a91a908f9b9ce46459d101078c2c3cb",
    logoURI:
      "https://tokens.1inch.exchange/0xe95a203b1a91a908f9b9ce46459d101078c2c3cb.png",
  },
  "0xcbc1065255cbc3ab41a6868c22d1f1c573ab89fd": {
    symbol: "CRETH2",
    name: "Cream ETH 2",
    decimals: 18,
    address: "0xcbc1065255cbc3ab41a6868c22d1f1c573ab89fd",
    logoURI:
      "https://tokens.1inch.exchange/0xcbc1065255cbc3ab41a6868c22d1f1c573ab89fd.png",
  },
  "0x4e15361fd6b4bb609fa63c81a2be19d873717870": {
    symbol: "FTM",
    name: "Fantom Token",
    decimals: 18,
    address: "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    logoURI:
      "https://tokens.1inch.exchange/0x4e15361fd6b4bb609fa63c81a2be19d873717870.png",
  },
  "0x8642a849d0dcb7a15a974794668adcfbe4794b56": {
    symbol: "PROS",
    name: "Prosper",
    decimals: 18,
    address: "0x8642a849d0dcb7a15a974794668adcfbe4794b56",
    logoURI:
      "https://tokens.1inch.exchange/0x8642a849d0dcb7a15a974794668adcfbe4794b56.png",
  },
  "0xc888a0ab4831a29e6ca432babf52e353d23db3c2": {
    symbol: "FAST",
    name: "FastSwapToken",
    decimals: 18,
    address: "0xc888a0ab4831a29e6ca432babf52e353d23db3c2",
    logoURI:
      "https://tokens.1inch.exchange/0xc888a0ab4831a29e6ca432babf52e353d23db3c2.png",
  },
  "0xa1afffe3f4d611d252010e3eaf6f4d77088b0cd7": {
    symbol: "RFI",
    name: "reflect.finance",
    decimals: 9,
    address: "0xa1afffe3f4d611d252010e3eaf6f4d77088b0cd7",
    logoURI:
      "https://tokens.1inch.exchange/0xa1afffe3f4d611d252010e3eaf6f4d77088b0cd7.png",
  },
  "0xa47c8bf37f92abed4a126bda807a7b7498661acd": {
    symbol: "UST",
    name: "Wrapped UST Token",
    decimals: 18,
    address: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
    logoURI:
      "https://tokens.1inch.exchange/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png",
  },
  "0x3832d2f059e55934220881f831be501d180671a7": {
    symbol: "renDOGE",
    name: "renDOGE",
    decimals: 8,
    address: "0x3832d2f059e55934220881f831be501d180671a7",
    logoURI:
      "https://tokens.1inch.exchange/0x3832d2f059e55934220881f831be501d180671a7.png",
  },
  "0x09a3ecafa817268f77be1283176b946c4ff2e608": {
    symbol: "MIR",
    name: "Wrapped MIR Token",
    decimals: 18,
    address: "0x09a3ecafa817268f77be1283176b946c4ff2e608",
    logoURI:
      "https://tokens.1inch.exchange/0x09a3ecafa817268f77be1283176b946c4ff2e608.png",
  },
  "0x0d7dea5922535087078dd3d7c554ea9f2655d4cb": {
    symbol: "FLEX",
    name: "BerezkaFLEX",
    decimals: 18,
    address: "0x0d7dea5922535087078dd3d7c554ea9f2655d4cb",
    logoURI:
      "https://tokens.1inch.exchange/0x0d7dea5922535087078dd3d7c554ea9f2655d4cb.png",
  },
  "0xdc76450fd7e6352733fe8550efabff750b2de0e3": {
    symbol: "DYNA",
    name: "BerezkaDynamic",
    decimals: 18,
    address: "0xdc76450fd7e6352733fe8550efabff750b2de0e3",
    logoURI:
      "https://tokens.1inch.exchange/0xdc76450fd7e6352733fe8550efabff750b2de0e3.png",
  },
  "0x7a8d51b82b36fa5b50fb77001d6d189e920d2f75": {
    symbol: "wOPIUM",
    name: "Wrapped Opium Governance Token",
    decimals: 18,
    address: "0x7a8d51b82b36fa5b50fb77001d6d189e920d2f75",
    logoURI:
      "https://tokens.1inch.exchange/0x7a8d51b82b36fa5b50fb77001d6d189e920d2f75.png",
  },
  "0xefc1c73a3d8728dc4cf2a18ac5705fe93e5914ac": {
    symbol: "METRIC",
    name: "Metric.exchange",
    decimals: 18,
    address: "0xefc1c73a3d8728dc4cf2a18ac5705fe93e5914ac",
    logoURI:
      "https://tokens.1inch.exchange/0xefc1c73a3d8728dc4cf2a18ac5705fe93e5914ac.png",
  },
  "0x1d37986f252d0e349522ea6c3b98cb935495e63e": {
    symbol: "CHART",
    name: "ChartEx",
    decimals: 18,
    address: "0x1d37986f252d0e349522ea6c3b98cb935495e63e",
    logoURI:
      "https://tokens.1inch.exchange/0x1d37986f252d0e349522ea6c3b98cb935495e63e.png",
  },
  "0x725c263e32c72ddc3a19bea12c5a0479a81ee688": {
    symbol: "BMI",
    name: "Bridge Mutual",
    decimals: 18,
    address: "0x725c263e32c72ddc3a19bea12c5a0479a81ee688",
    logoURI:
      "https://tokens.1inch.exchange/0x725c263e32c72ddc3a19bea12c5a0479a81ee688.png",
  },
  "0xc666081073e8dff8d3d1c2292a29ae1a2153ec09": {
    symbol: "DGTX",
    name: "DigitexFutures",
    decimals: 18,
    address: "0xc666081073e8dff8d3d1c2292a29ae1a2153ec09",
    logoURI:
      "https://tokens.1inch.exchange/0xc666081073e8dff8d3d1c2292a29ae1a2153ec09.png",
  },
  "0xa283aa7cfbb27ef0cfbcb2493dd9f4330e0fd304": {
    symbol: "MM",
    name: "MMToken",
    decimals: 18,
    address: "0xa283aa7cfbb27ef0cfbcb2493dd9f4330e0fd304",
    logoURI:
      "https://tokens.1inch.exchange/0xa283aa7cfbb27ef0cfbcb2493dd9f4330e0fd304.png",
  },
  "0x0000000000095413afc295d19edeb1ad7b71c952": {
    symbol: "LON",
    name: "Tokenlon",
    decimals: 18,
    address: "0x0000000000095413afc295d19edeb1ad7b71c952",
    logoURI:
      "https://tokens.1inch.exchange/0x0000000000095413afc295d19edeb1ad7b71c952.png",
  },
  "0x1f3f9d3068568f8040775be2e8c03c103c61f3af": {
    symbol: "ARCH",
    name: "Archer DAO Governance Token",
    decimals: 18,
    address: "0x1f3f9d3068568f8040775be2e8c03c103c61f3af",
    logoURI:
      "https://tokens.1inch.exchange/0x1f3f9d3068568f8040775be2e8c03c103c61f3af.png",
  },
  "0xbb0a009ba1eb20c5062c790432f080f6597662af": {
    symbol: "BBP",
    name: "BitBot V1",
    decimals: 18,
    address: "0xbb0a009ba1eb20c5062c790432f080f6597662af",
    logoURI:
      "https://tokens.1inch.exchange/0xbb0a009ba1eb20c5062c790432f080f6597662af.png",
  },
  "0x99fe3b1391503a1bc1788051347a1324bff41452": {
    symbol: "SX",
    name: "SportX",
    decimals: 18,
    address: "0x99fe3b1391503a1bc1788051347a1324bff41452",
    logoURI:
      "https://tokens.1inch.exchange/0x99fe3b1391503a1bc1788051347a1324bff41452.png",
  },
  "0xa393473d64d2f9f026b60b6df7859a689715d092": {
    symbol: "LTX",
    name: "Lattice Token",
    decimals: 8,
    address: "0xa393473d64d2f9f026b60b6df7859a689715d092",
    logoURI:
      "https://tokens.1inch.exchange/0xa393473d64d2f9f026b60b6df7859a689715d092.png",
  },
  "0x6fa0952355607dfb2d399138b7fe10eb90f245e4": {
    symbol: "SCT",
    name: "Clash Token",
    decimals: 18,
    address: "0x6fa0952355607dfb2d399138b7fe10eb90f245e4",
    logoURI:
      "https://tokens.1inch.exchange/0x6fa0952355607dfb2d399138b7fe10eb90f245e4.png",
  },
  "0xbbff34e47e559ef680067a6b1c980639eeb64d24": {
    symbol: "L2",
    name: "Leverj Gluon",
    decimals: 18,
    address: "0xbbff34e47e559ef680067a6b1c980639eeb64d24",
    logoURI:
      "https://tokens.1inch.exchange/0xbbff34e47e559ef680067a6b1c980639eeb64d24.png",
  },
  "0xe0ad1806fd3e7edf6ff52fdb822432e847411033": {
    symbol: "ONX",
    name: "OnX.finance",
    decimals: 18,
    address: "0xe0ad1806fd3e7edf6ff52fdb822432e847411033",
    logoURI:
      "https://tokens.1inch.exchange/0xe0ad1806fd3e7edf6ff52fdb822432e847411033.png",
  },
  "0x2791bfd60d232150bff86b39b7146c0eaaa2ba81": {
    symbol: "BiFi",
    name: "BiFi",
    decimals: 18,
    address: "0x2791bfd60d232150bff86b39b7146c0eaaa2ba81",
    logoURI:
      "https://tokens.1inch.exchange/0x2791bfd60d232150bff86b39b7146c0eaaa2ba81.png",
  },
  "0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d": {
    symbol: "FIS",
    name: "StaFi",
    decimals: 18,
    address: "0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d",
    logoURI:
      "https://tokens.1inch.exchange/0xef3a930e1ffffacd2fc13434ac81bd278b0ecc8d.png",
  },
  "0x3e9bc21c9b189c09df3ef1b824798658d5011937": {
    symbol: "LINA",
    name: "Linear Token",
    decimals: 18,
    address: "0x3e9bc21c9b189c09df3ef1b824798658d5011937",
    logoURI:
      "https://tokens.1inch.exchange/0x3e9bc21c9b189c09df3ef1b824798658d5011937.png",
  },
  "0xb1f871ae9462f1b2c6826e88a7827e76f86751d4": {
    symbol: "GNYerc20",
    name: "GNYerc20",
    decimals: 18,
    address: "0xb1f871ae9462f1b2c6826e88a7827e76f86751d4",
    logoURI:
      "https://tokens.1inch.exchange/0xb1f871ae9462f1b2c6826e88a7827e76f86751d4.png",
  },
  "0x9aeb50f542050172359a0e1a25a9933bc8c01259": {
    symbol: "OIN",
    name: "oinfinance",
    decimals: 8,
    address: "0x9aeb50f542050172359a0e1a25a9933bc8c01259",
    logoURI:
      "https://tokens.1inch.exchange/0x9aeb50f542050172359a0e1a25a9933bc8c01259.png",
  },
  "0x6b33f15360cedbfb8f60539ec828ef52910aca9b": {
    symbol: "xINCHb",
    name: "xINCH",
    decimals: 18,
    address: "0x6b33f15360cedbfb8f60539ec828ef52910aca9b",
    logoURI:
      "https://tokens.1inch.exchange/0x6b33f15360cedbfb8f60539ec828ef52910aca9b.png",
  },
  "0x8f6a193c8b3c949e1046f1547c3a3f0836944e4b": {
    symbol: "xINCHa",
    name: "xINCH",
    decimals: 18,
    address: "0x8f6a193c8b3c949e1046f1547c3a3f0836944e4b",
    logoURI:
      "https://tokens.1inch.exchange/0x8f6a193c8b3c949e1046f1547c3a3f0836944e4b.png",
  },
  "0xac0104cca91d167873b8601d2e71eb3d4d8c33e0": {
    symbol: "CWS",
    name: "Crowns",
    decimals: 18,
    address: "0xac0104cca91d167873b8601d2e71eb3d4d8c33e0",
    logoURI:
      "https://tokens.1inch.exchange/0xac0104cca91d167873b8601d2e71eb3d4d8c33e0.png",
  },
  "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce": {
    symbol: "SHIB",
    name: "SHIBA INU",
    decimals: 18,
    address: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
    logoURI:
      "https://tokens.1inch.exchange/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png",
  },
  "0x6d0f5149c502faf215c89ab306ec3e50b15e2892": {
    symbol: "PRT",
    name: "Portion Token",
    decimals: 18,
    address: "0x6d0f5149c502faf215c89ab306ec3e50b15e2892",
    logoURI:
      "https://tokens.1inch.exchange/0x6d0f5149c502faf215c89ab306ec3e50b15e2892.png",
  },
  "0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e": {
    symbol: "NCT",
    name: "NameChangeToken",
    decimals: 18,
    address: "0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e",
    logoURI:
      "https://tokens.1inch.exchange/0x8a9c4dfe8b9d8962b31e4e16f8321c44d48e246e.png",
  },
  "0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81": {
    symbol: "MUSE",
    name: "Muse",
    decimals: 18,
    address: "0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81",
    logoURI:
      "https://tokens.1inch.exchange/0xb6ca7399b4f9ca56fc27cbff44f4d2e4eef1fc81.png",
  },
  "0x2b915b505c017abb1547aa5ab355fbe69865cc6d": {
    symbol: "MAPS",
    name: "Maps.me Token",
    decimals: 6,
    address: "0x2b915b505c017abb1547aa5ab355fbe69865cc6d",
    logoURI:
      "https://tokens.1inch.exchange/0x2b915b505c017abb1547aa5ab355fbe69865cc6d.png",
  },
  "0x6e36556b3ee5aa28def2a8ec3dae30ec2b208739": {
    symbol: "BUILD",
    name: "BUILD Finance",
    decimals: 18,
    address: "0x6e36556b3ee5aa28def2a8ec3dae30ec2b208739",
    logoURI:
      "https://tokens.1inch.exchange/0x6e36556b3ee5aa28def2a8ec3dae30ec2b208739.png",
  },
  "0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24": {
    symbol: "GUM",
    name: "GourmetGalaxy",
    decimals: 18,
    address: "0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24",
    logoURI:
      "https://tokens.1inch.exchange/0x4f5fa8f2d12e5eb780f6082dd656c565c48e0f24.png",
  },
  "0xfa6de2697d59e88ed7fc4dfe5a33dac43565ea41": {
    symbol: "DEFI5",
    name: "DEFI Top 5 Tokens Index",
    decimals: 18,
    address: "0xfa6de2697d59e88ed7fc4dfe5a33dac43565ea41",
    logoURI:
      "https://tokens.1inch.exchange/0xfa6de2697d59e88ed7fc4dfe5a33dac43565ea41.png",
  },
  "0x17ac188e09a7890a1844e5e65471fe8b0ccfadf3": {
    symbol: "CC10",
    name: "Cryptocurrency Top 10 Tokens Index",
    decimals: 18,
    address: "0x17ac188e09a7890a1844e5e65471fe8b0ccfadf3",
    logoURI:
      "https://tokens.1inch.exchange/0x17ac188e09a7890a1844e5e65471fe8b0ccfadf3.png",
  },
  "0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41": {
    symbol: "TXL",
    name: "Tixl Token",
    decimals: 18,
    address: "0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41",
    logoURI:
      "https://tokens.1inch.exchange/0x8eef5a82e6aa222a60f009ac18c24ee12dbf4b41.png",
  },
  "0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd": {
    symbol: "RAZOR",
    name: "RAZOR",
    decimals: 18,
    address: "0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd",
    logoURI:
      "https://tokens.1inch.exchange/0x50de6856358cc35f3a9a57eaaa34bd4cb707d2cd.png",
  },
  "0x70d47fd6c9497b11c1caf0e2a84a5e7661e66c1d": {
    symbol: "DEFLA",
    name: "DEFLA",
    decimals: 9,
    address: "0x70d47fd6c9497b11c1caf0e2a84a5e7661e66c1d",
    logoURI:
      "https://tokens.1inch.exchange/0x70d47fd6c9497b11c1caf0e2a84a5e7661e66c1d.png",
  },
  "0x297d33e17e61c2ddd812389c2105193f8348188a": {
    symbol: "$TRDL",
    name: "Strudel Finance",
    decimals: 18,
    address: "0x297d33e17e61c2ddd812389c2105193f8348188a",
    logoURI:
      "https://tokens.1inch.exchange/0x297d33e17e61c2ddd812389c2105193f8348188a.png",
  },
  "0xec681f28f4561c2a9534799aa38e0d36a83cf478": {
    symbol: "YVS",
    name: "YVS.Finance",
    decimals: 18,
    address: "0xec681f28f4561c2a9534799aa38e0d36a83cf478",
    logoURI:
      "https://tokens.1inch.exchange/0xec681f28f4561c2a9534799aa38e0d36a83cf478.png",
  },
  "0x8d3e855f3f55109d473735ab76f753218400fe96": {
    symbol: "BUND",
    name: "Bundles",
    decimals: 18,
    address: "0x8d3e855f3f55109d473735ab76f753218400fe96",
    logoURI:
      "https://tokens.1inch.exchange/0x8d3e855f3f55109d473735ab76f753218400fe96.png",
  },
  "0xc28e27870558cf22add83540d2126da2e4b464c2": {
    symbol: "SASHIMI",
    name: "SashimiToken",
    decimals: 18,
    address: "0xc28e27870558cf22add83540d2126da2e4b464c2",
    logoURI:
      "https://tokens.1inch.exchange/0xc28e27870558cf22add83540d2126da2e4b464c2.png",
  },
  "0x7968bc6a03017ea2de509aaa816f163db0f35148": {
    symbol: "HGET",
    name: "Hedget",
    decimals: 6,
    address: "0x7968bc6a03017ea2de509aaa816f163db0f35148",
    logoURI:
      "https://tokens.1inch.exchange/0x7968bc6a03017ea2de509aaa816f163db0f35148.png",
  },
  "0xad4f86a25bbc20ffb751f2fac312a0b4d8f88c64": {
    symbol: "ROOM",
    name: "OptionRoom Token ",
    decimals: 18,
    address: "0xad4f86a25bbc20ffb751f2fac312a0b4d8f88c64",
    logoURI:
      "https://tokens.1inch.exchange/0xad4f86a25bbc20ffb751f2fac312a0b4d8f88c64.png",
  },
  "0xa0afaa285ce85974c3c881256cb7f225e3a1178a": {
    symbol: "wCRES",
    name: "Wrapped CRES",
    decimals: 18,
    address: "0xa0afaa285ce85974c3c881256cb7f225e3a1178a",
    logoURI:
      "https://tokens.1inch.exchange/0xa0afaa285ce85974c3c881256cb7f225e3a1178a.png",
  },
  "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da": {
    symbol: "GALA",
    name: "Gala",
    decimals: 8,
    address: "0x15d4c048f83bd7e37d49ea4c83a07267ec4203da",
    logoURI:
      "https://tokens.1inch.exchange/0x15d4c048f83bd7e37d49ea4c83a07267ec4203da.png",
  },
  "0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d": {
    symbol: "SHARE",
    name: "Seigniorage Shares",
    decimals: 9,
    address: "0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d",
    logoURI:
      "https://tokens.1inch.exchange/0x39795344cbcc76cc3fb94b9d1b15c23c2070c66d.png",
  },
  "0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e": {
    symbol: "UNISTAKE",
    name: "Unistake",
    decimals: 18,
    address: "0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e",
    logoURI:
      "https://tokens.1inch.exchange/0x9ed8e7c9604790f7ec589f99b94361d8aab64e5e.png",
  },
  "0x910524678c0b1b23ffb9285a81f99c29c11cbaed": {
    symbol: "AZUKI",
    name: "DokiDokiAzuki",
    decimals: 18,
    address: "0x910524678c0b1b23ffb9285a81f99c29c11cbaed",
    logoURI:
      "https://tokens.1inch.exchange/0x910524678c0b1b23ffb9285a81f99c29c11cbaed.png",
  },
  "0xe61fdaf474fac07063f2234fb9e60c1163cfa850": {
    symbol: "COIN",
    name: "Coin Utility Token",
    decimals: 18,
    address: "0xe61fdaf474fac07063f2234fb9e60c1163cfa850",
    logoURI:
      "https://tokens.1inch.exchange/0xe61fdaf474fac07063f2234fb9e60c1163cfa850.png",
  },
  "0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0": {
    symbol: "DEXTF",
    name: "DEXTF Token",
    decimals: 18,
    address: "0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0",
    logoURI:
      "https://tokens.1inch.exchange/0x5f64ab1544d28732f0a24f4713c2c8ec0da089f0.png",
  },
  "0x018fb5af9d015af25592a014c4266a84143de7a0": {
    symbol: "MP3",
    name: "mp3",
    decimals: 18,
    address: "0x018fb5af9d015af25592a014c4266a84143de7a0",
    logoURI:
      "https://tokens.1inch.exchange/0x018fb5af9d015af25592a014c4266a84143de7a0.png",
  },
  "0xb59490ab09a0f526cc7305822ac65f2ab12f9723": {
    symbol: "LIT",
    name: "Litentry",
    decimals: 18,
    address: "0xb59490ab09a0f526cc7305822ac65f2ab12f9723",
    logoURI:
      "https://tokens.1inch.exchange/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png",
  },
  "0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9": {
    symbol: "LUNA",
    name: "Wrapped LUNA Token",
    decimals: 18,
    address: "0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9",
    logoURI:
      "https://tokens.1inch.exchange/0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9.png",
  },
  "0x913d8adf7ce6986a8cbfee5a54725d9eea4f0729": {
    symbol: "EASY",
    name: "EASY",
    decimals: 18,
    address: "0x913d8adf7ce6986a8cbfee5a54725d9eea4f0729",
    logoURI:
      "https://tokens.1inch.exchange/0x913d8adf7ce6986a8cbfee5a54725d9eea4f0729.png",
  },
  "0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32": {
    symbol: "SYNC",
    name: "SYNC",
    decimals: 18,
    address: "0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32",
    logoURI:
      "https://tokens.1inch.exchange/0xb6ff96b8a8d214544ca0dbc9b33f7ad6503efd32.png",
  },
  "0x8a40c222996f9f3431f63bf80244c36822060f12": {
    symbol: "FXF",
    name: "Finxflo",
    decimals: 18,
    address: "0x8a40c222996f9f3431f63bf80244c36822060f12",
    logoURI:
      "https://tokens.1inch.exchange/0x8a40c222996f9f3431f63bf80244c36822060f12.png",
  },
  "0xf9fbe825bfb2bf3e387af0dc18cac8d87f29dea8": {
    symbol: "BOTS",
    name: "Bot Ocean",
    decimals: 18,
    address: "0xf9fbe825bfb2bf3e387af0dc18cac8d87f29dea8",
    logoURI:
      "https://tokens.1inch.exchange/0xf9fbe825bfb2bf3e387af0dc18cac8d87f29dea8.png",
  },
  "0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7": {
    symbol: "Mars",
    name: "MarsToken",
    decimals: 18,
    address: "0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7",
    logoURI:
      "https://tokens.1inch.exchange/0x66c0dded8433c9ea86c8cf91237b14e10b4d70b7.png",
  },
  "0x7b3d36eb606f873a75a6ab68f8c999848b04f935": {
    symbol: "LOOT",
    name: "NFTLootBox.com",
    decimals: 18,
    address: "0x7b3d36eb606f873a75a6ab68f8c999848b04f935",
    logoURI:
      "https://tokens.1inch.exchange/0x7b3d36eb606f873a75a6ab68f8c999848b04f935.png",
  },
  "0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f": {
    symbol: "DUCK",
    name: "DLP Duck Token",
    decimals: 18,
    address: "0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f",
    logoURI:
      "https://tokens.1inch.exchange/0xc0ba369c8db6eb3924965e5c4fd0b4c1b91e305f.png",
  },
  "0xaef4f02e31cdbf007f8d98da4ae365188a0e9ecc": {
    symbol: "TFT",
    name: "The Famous Token",
    decimals: 8,
    address: "0xaef4f02e31cdbf007f8d98da4ae365188a0e9ecc",
    logoURI:
      "https://tokens.1inch.exchange/0xaef4f02e31cdbf007f8d98da4ae365188a0e9ecc.png",
  },
  "0xcca0c9c383076649604ee31b20248bc04fdf61ca": {
    symbol: "BTMX",
    name: "BitMax token",
    decimals: 18,
    address: "0xcca0c9c383076649604ee31b20248bc04fdf61ca",
    logoURI:
      "https://tokens.1inch.exchange/0xcca0c9c383076649604ee31b20248bc04fdf61ca.png",
  },
  "0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83": {
    symbol: "ID",
    name: "Everest ID",
    decimals: 18,
    address: "0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83",
    logoURI:
      "https://tokens.1inch.exchange/0xebd9d99a3982d547c5bb4db7e3b1f9f14b67eb83.png",
  },
  "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7": {
    symbol: "SKL",
    name: "SKALE",
    decimals: 18,
    address: "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7",
    logoURI:
      "https://tokens.1inch.exchange/0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7.png",
  },
  "0x0f51bb10119727a7e5ea3538074fb341f56b09ad": {
    symbol: "DAO",
    name: "DAO Maker",
    decimals: 18,
    address: "0x0f51bb10119727a7e5ea3538074fb341f56b09ad",
    logoURI:
      "https://tokens.1inch.exchange/0x0f51bb10119727a7e5ea3538074fb341f56b09ad.png",
  },
  "0x76c5449f4950f6338a393f53cda8b53b0cd3ca3a": {
    symbol: "BT",
    name: "BT.Finance",
    decimals: 18,
    address: "0x76c5449f4950f6338a393f53cda8b53b0cd3ca3a",
    logoURI:
      "https://tokens.1inch.exchange/0x76c5449f4950f6338a393f53cda8b53b0cd3ca3a.png",
  },
  "0xb4467e8d621105312a914f1d42f10770c0ffe3c8": {
    symbol: "FLASH",
    name: "Flash Token",
    decimals: 18,
    address: "0xb4467e8d621105312a914f1d42f10770c0ffe3c8",
    logoURI:
      "https://tokens.1inch.exchange/0xb4467e8d621105312a914f1d42f10770c0ffe3c8.png",
  },
  "0xf680429328caaacabee69b7a9fdb21a71419c063": {
    symbol: "BFLY",
    name: "Butterfly Protocol Governance Token",
    decimals: 18,
    address: "0xf680429328caaacabee69b7a9fdb21a71419c063",
    logoURI:
      "https://tokens.1inch.exchange/0xf680429328caaacabee69b7a9fdb21a71419c063.png",
  },
  "0x1715ac0743102bf5cd58efbb6cf2dc2685d967b6": {
    symbol: "sDOT",
    name: "Synth sDOT",
    decimals: 18,
    address: "0x1715ac0743102bf5cd58efbb6cf2dc2685d967b6",
    logoURI:
      "https://tokens.1inch.exchange/0x1715ac0743102bf5cd58efbb6cf2dc2685d967b6.png",
  },
  "0xeb029507d3e043dd6c87f2917c4e82b902c35618": {
    symbol: "sCOMP",
    name: "Synth sCOMP",
    decimals: 18,
    address: "0xeb029507d3e043dd6c87f2917c4e82b902c35618",
    logoURI:
      "https://tokens.1inch.exchange/0xeb029507d3e043dd6c87f2917c4e82b902c35618.png",
  },
  "0xd2df355c19471c8bd7d8a3aa27ff4e26a21b4076": {
    symbol: "sAAVE",
    name: "Synth sAAVE",
    decimals: 18,
    address: "0xd2df355c19471c8bd7d8a3aa27ff4e26a21b4076",
    logoURI:
      "https://tokens.1inch.exchange/0xd2df355c19471c8bd7d8a3aa27ff4e26a21b4076.png",
  },
  "0x592244301cea952d6dab2fdc1fe6bd9e53917306": {
    symbol: "iYFI",
    name: "Synth iYFI",
    decimals: 18,
    address: "0x592244301cea952d6dab2fdc1fe6bd9e53917306",
    logoURI:
      "https://tokens.1inch.exchange/0x592244301cea952d6dab2fdc1fe6bd9e53917306.png",
  },
  "0x36a00ff9072570ef4b9292117850b8fe08d96cce": {
    symbol: "iUNI",
    name: "Synth iUNI",
    decimals: 18,
    address: "0x36a00ff9072570ef4b9292117850b8fe08d96cce",
    logoURI:
      "https://tokens.1inch.exchange/0x36a00ff9072570ef4b9292117850b8fe08d96cce.png",
  },
  "0x0fed38108bdb8e62ef7b5680e8e0726e2f29e0de": {
    symbol: "iREN",
    name: "Synth iREN",
    decimals: 18,
    address: "0x0fed38108bdb8e62ef7b5680e8e0726e2f29e0de",
    logoURI:
      "https://tokens.1inch.exchange/0x0fed38108bdb8e62ef7b5680e8e0726e2f29e0de.png",
  },
  "0x46a97629c9c1f58de6ec18c7f536e7e6d6a6ecde": {
    symbol: "iDOT",
    name: "Synth iDOT",
    decimals: 18,
    address: "0x46a97629c9c1f58de6ec18c7f536e7e6d6a6ecde",
    logoURI:
      "https://tokens.1inch.exchange/0x46a97629c9c1f58de6ec18c7f536e7e6d6a6ecde.png",
  },
  "0x6345728b1cce16e6f8c509950b5c84fff88530d9": {
    symbol: "iCOMP",
    name: "Synth iCOMP",
    decimals: 18,
    address: "0x6345728b1cce16e6f8c509950b5c84fff88530d9",
    logoURI:
      "https://tokens.1inch.exchange/0x6345728b1cce16e6f8c509950b5c84fff88530d9.png",
  },
  "0x992058b7db08f9734d84485bfbc243c4ee6954a7": {
    symbol: "sYFI",
    name: "Synth sYFI",
    decimals: 18,
    address: "0x992058b7db08f9734d84485bfbc243c4ee6954a7",
    logoURI:
      "https://tokens.1inch.exchange/0x992058b7db08f9734d84485bfbc243c4ee6954a7.png",
  },
  "0x30635297e450b930f8693297eba160d9e6c8ebcf": {
    symbol: "sUNI",
    name: "Synth sUNI",
    decimals: 18,
    address: "0x30635297e450b930f8693297eba160d9e6c8ebcf",
    logoURI:
      "https://tokens.1inch.exchange/0x30635297e450b930f8693297eba160d9e6c8ebcf.png",
  },
  "0xd31533e8d0f3df62060e94b3f1318137bb6e3525": {
    symbol: "sREN",
    name: "Synth sREN",
    decimals: 18,
    address: "0xd31533e8d0f3df62060e94b3f1318137bb6e3525",
    logoURI:
      "https://tokens.1inch.exchange/0xd31533e8d0f3df62060e94b3f1318137bb6e3525.png",
  },
  "0x176c674ee533c6139b0dc8b458d72a93dcb3e705": {
    symbol: "iAAVE",
    name: "Synth iAAVE",
    decimals: 18,
    address: "0x176c674ee533c6139b0dc8b458d72a93dcb3e705",
    logoURI:
      "https://tokens.1inch.exchange/0x176c674ee533c6139b0dc8b458d72a93dcb3e705.png",
  },
  "0x6fc13eace26590b80cccab1ba5d51890577d83b2": {
    symbol: "UMB",
    name: "Umbrella",
    decimals: 18,
    address: "0x6fc13eace26590b80cccab1ba5d51890577d83b2",
    logoURI:
      "https://tokens.1inch.exchange/0x6fc13eace26590b80cccab1ba5d51890577d83b2.png",
  },
  "0x903bef1736cddf2a537176cf3c64579c3867a881": {
    symbol: "ICHI",
    name: "ichi.farm",
    decimals: 9,
    address: "0x903bef1736cddf2a537176cf3c64579c3867a881",
    logoURI:
      "https://tokens.1inch.exchange/0x903bef1736cddf2a537176cf3c64579c3867a881.png",
  },
  "0x1456688345527be1f37e9e627da0837d6f08c925": {
    symbol: "USDP",
    name: "USDP Stablecoin",
    decimals: 18,
    address: "0x1456688345527be1f37e9e627da0837d6f08c925",
    logoURI:
      "https://tokens.1inch.exchange/0x1456688345527be1f37e9e627da0837d6f08c925.png",
  },
  "0x23b608675a2b2fb1890d3abbd85c5775c51691d5": {
    symbol: "SOCKS",
    name: "Unisocks Edition 0",
    decimals: 18,
    address: "0x23b608675a2b2fb1890d3abbd85c5775c51691d5",
    logoURI:
      "https://tokens.1inch.exchange/0x23b608675a2b2fb1890d3abbd85c5775c51691d5.png",
  },
  "0x918da91ccbc32b7a6a0cc4ecd5987bbab6e31e6d": {
    symbol: "sTSLA",
    name: "Synth sTSLA",
    decimals: 18,
    address: "0x918da91ccbc32b7a6a0cc4ecd5987bbab6e31e6d",
    logoURI:
      "https://tokens.1inch.exchange/0x918da91ccbc32b7a6a0cc4ecd5987bbab6e31e6d.png",
  },
  "0xaa4e3edb11afa93c41db59842b29de64b72e355b": {
    symbol: "MFI",
    name: "MarginSwap",
    decimals: 18,
    address: "0xaa4e3edb11afa93c41db59842b29de64b72e355b",
    logoURI:
      "https://tokens.1inch.exchange/0xaa4e3edb11afa93c41db59842b29de64b72e355b.png",
  },
  "0x9af15d7b8776fa296019979e70a5be53c714a7ec": {
    symbol: "EVN",
    name: "Evn Token",
    decimals: 18,
    address: "0x9af15d7b8776fa296019979e70a5be53c714a7ec",
    logoURI:
      "https://tokens.1inch.exchange/0x9af15d7b8776fa296019979e70a5be53c714a7ec.png",
  },
  "0xb97d5cf2864fb0d08b34a484ff48d5492b2324a0": {
    symbol: "KLON",
    name: "KLON",
    decimals: 18,
    address: "0xb97d5cf2864fb0d08b34a484ff48d5492b2324a0",
    logoURI:
      "https://tokens.1inch.exchange/0xb97d5cf2864fb0d08b34a484ff48d5492b2324a0.png",
  },
  "0xe6c3502997f97f9bde34cb165fbce191065e068f": {
    symbol: "KBTC",
    name: "KBTC",
    decimals: 18,
    address: "0xe6c3502997f97f9bde34cb165fbce191065e068f",
    logoURI:
      "https://tokens.1inch.exchange/0xe6c3502997f97f9bde34cb165fbce191065e068f.png",
  },
  "0xdcb01cc464238396e213a6fdd933e36796eaff9f": {
    symbol: "YLD",
    name: "Yield",
    decimals: 18,
    address: "0xdcb01cc464238396e213a6fdd933e36796eaff9f",
    logoURI:
      "https://tokens.1inch.exchange/0xdcb01cc464238396e213a6fdd933e36796eaff9f.png",
  },
  "0x69e8b9528cabda89fe846c67675b5d73d463a916": {
    symbol: "OPEN",
    name: "BBB",
    decimals: 18,
    address: "0x69e8b9528cabda89fe846c67675b5d73d463a916",
    logoURI:
      "https://tokens.1inch.exchange/0x69e8b9528cabda89fe846c67675b5d73d463a916.png",
  },
  "0x196c81385bc536467433014042788eb707703934": {
    symbol: "CTASK",
    name: "CTASK Token",
    decimals: 18,
    address: "0x196c81385bc536467433014042788eb707703934",
    logoURI:
      "https://tokens.1inch.exchange/0x196c81385bc536467433014042788eb707703934.png",
  },
  "0xd7b7d3c0bda57723fb54ab95fd8f9ea033af37f2": {
    symbol: "PYLON",
    name: "PYLON",
    decimals: 18,
    address: "0xd7b7d3c0bda57723fb54ab95fd8f9ea033af37f2",
    logoURI:
      "https://tokens.1inch.exchange/0xd7b7d3c0bda57723fb54ab95fd8f9ea033af37f2.png",
  },
  "0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c": {
    symbol: "NUX",
    name: "NUX Peanut.trade",
    decimals: 18,
    address: "0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c",
    logoURI:
      "https://tokens.1inch.exchange/0x89bd2e7e388fab44ae88bef4e1ad12b4f1e0911c.png",
  },
  "0xa0bed124a09ac2bd941b10349d8d224fe3c955eb": {
    symbol: "DEPAY",
    name: "DePay",
    decimals: 18,
    address: "0xa0bed124a09ac2bd941b10349d8d224fe3c955eb",
    logoURI:
      "https://tokens.1inch.exchange/0xa0bed124a09ac2bd941b10349d8d224fe3c955eb.png",
  },
  "0x6bff2fe249601ed0db3a87424a2e923118bb0312": {
    symbol: "FYZ",
    name: "FYOOZ",
    decimals: 18,
    address: "0x6bff2fe249601ed0db3a87424a2e923118bb0312",
    logoURI:
      "https://tokens.1inch.exchange/0x6bff2fe249601ed0db3a87424a2e923118bb0312.png",
  },
  "0xfdc4a3fc36df16a78edcaf1b837d3acaaedb2cb4": {
    symbol: "SCIFI",
    name: "ScifiToken",
    decimals: 18,
    address: "0xfdc4a3fc36df16a78edcaf1b837d3acaaedb2cb4",
    logoURI:
      "https://tokens.1inch.exchange/0xfdc4a3fc36df16a78edcaf1b837d3acaaedb2cb4.png",
  },
  "0xb9ef770b6a5e12e45983c5d80545258aa38f3b78": {
    symbol: "ZCN",
    name: "0chain",
    decimals: 10,
    address: "0xb9ef770b6a5e12e45983c5d80545258aa38f3b78",
    logoURI:
      "https://tokens.1inch.exchange/0xb9ef770b6a5e12e45983c5d80545258aa38f3b78.png",
  },
  "0xadb2437e6f65682b85f814fbc12fec0508a7b1d0": {
    symbol: "UNCX",
    name: "UniCrypt",
    decimals: 18,
    address: "0xadb2437e6f65682b85f814fbc12fec0508a7b1d0",
    logoURI:
      "https://tokens.1inch.exchange/0xadb2437e6f65682b85f814fbc12fec0508a7b1d0.png",
  },
  "0xed40834a13129509a89be39a9be9c0e96a0ddd71": {
    symbol: "WARP",
    name: "Warp Token",
    decimals: 18,
    address: "0xed40834a13129509a89be39a9be9c0e96a0ddd71",
    logoURI:
      "https://tokens.1inch.exchange/0xed40834a13129509a89be39a9be9c0e96a0ddd71.png",
  },
  "0x875773784af8135ea0ef43b5a374aad105c5d39e": {
    symbol: "IDLE",
    name: "Idle",
    decimals: 18,
    address: "0x875773784af8135ea0ef43b5a374aad105c5d39e",
    logoURI:
      "https://tokens.1inch.exchange/0x875773784af8135ea0ef43b5a374aad105c5d39e.png",
  },
  "0x0488401c3f535193fa8df029d9ffe615a06e74e6": {
    symbol: "SRK",
    name: "SparkPoint",
    decimals: 18,
    address: "0x0488401c3f535193fa8df029d9ffe615a06e74e6",
    logoURI:
      "https://tokens.1inch.exchange/0x0488401c3f535193fa8df029d9ffe615a06e74e6.png",
  },
  "0x038a68ff68c393373ec894015816e33ad41bd564": {
    symbol: "GLCH",
    name: "Glitch",
    decimals: 18,
    address: "0x038a68ff68c393373ec894015816e33ad41bd564",
    logoURI:
      "https://tokens.1inch.exchange/0x038a68ff68c393373ec894015816e33ad41bd564.png",
  },
  "0x10be9a8dae441d276a5027936c3aaded2d82bc15": {
    symbol: "UMX",
    name: "unimex network",
    decimals: 18,
    address: "0x10be9a8dae441d276a5027936c3aaded2d82bc15",
    logoURI:
      "https://tokens.1inch.exchange/0x10be9a8dae441d276a5027936c3aaded2d82bc15.png",
  },
  "0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44": {
    symbol: "WHITE",
    name: "Whiteheart Token",
    decimals: 18,
    address: "0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44",
    logoURI:
      "https://tokens.1inch.exchange/0x5f0e628b693018f639d10e4a4f59bd4d8b2b6b44.png",
  },
  "0x3597bfd533a99c9aa083587b074434e61eb0a258": {
    symbol: "DENT",
    name: "DENT",
    decimals: 8,
    address: "0x3597bfd533a99c9aa083587b074434e61eb0a258",
    logoURI:
      "https://tokens.1inch.exchange/0x3597bfd533a99c9aa083587b074434e61eb0a258.png",
  },
  "0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229": {
    symbol: "ZEFU",
    name: "Zenfuse Trading Platform Token",
    decimals: 18,
    address: "0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229",
    logoURI:
      "https://tokens.1inch.exchange/0xb1e9157c2fdcc5a856c8da8b2d89b6c32b3c1229.png",
  },
  "0x260e63d91fccc499606bae3fe945c4ed1cf56a56": {
    symbol: "MOONS",
    name: "MoonTools.io",
    decimals: 18,
    address: "0x260e63d91fccc499606bae3fe945c4ed1cf56a56",
    logoURI:
      "https://tokens.1inch.exchange/0x260e63d91fccc499606bae3fe945c4ed1cf56a56.png",
  },
  "0x066798d9ef0833ccc719076dab77199ecbd178b0": {
    symbol: "SAKE",
    name: "SakeToken",
    decimals: 18,
    address: "0x066798d9ef0833ccc719076dab77199ecbd178b0",
    logoURI:
      "https://tokens.1inch.exchange/0x066798d9ef0833ccc719076dab77199ecbd178b0.png",
  },
  "0x945facb997494cc2570096c74b5f66a3507330a1": {
    symbol: "mBTC",
    name: "mStable BTC",
    decimals: 18,
    address: "0x945facb997494cc2570096c74b5f66a3507330a1",
    logoURI:
      "https://tokens.1inch.exchange/0x945facb997494cc2570096c74b5f66a3507330a1.png",
  },
  "0x1b40183efb4dd766f11bda7a7c3ad8982e998421": {
    symbol: "VSP",
    name: "VesperToken",
    decimals: 18,
    address: "0x1b40183efb4dd766f11bda7a7c3ad8982e998421",
    logoURI:
      "https://tokens.1inch.exchange/0x1b40183efb4dd766f11bda7a7c3ad8982e998421.png",
  },
  "0x84810bcf08744d5862b8181f12d17bfd57d3b078": {
    symbol: "SGT",
    name: "SharedStake Governance Token",
    decimals: 18,
    address: "0x84810bcf08744d5862b8181f12d17bfd57d3b078",
    logoURI:
      "https://tokens.1inch.exchange/0x84810bcf08744d5862b8181f12d17bfd57d3b078.png",
  },
  "0xed0439eacf4c4965ae4613d77a5c2efe10e5f183": {
    symbol: "SHROOM",
    name: "shroom.finance",
    decimals: 18,
    address: "0xed0439eacf4c4965ae4613d77a5c2efe10e5f183",
    logoURI:
      "https://tokens.1inch.exchange/0xed0439eacf4c4965ae4613d77a5c2efe10e5f183.png",
  },
  "0xaac41ec512808d64625576eddd580e7ea40ef8b2": {
    symbol: "GSWAP",
    name: "gameswap.org",
    decimals: 18,
    address: "0xaac41ec512808d64625576eddd580e7ea40ef8b2",
    logoURI:
      "https://tokens.1inch.exchange/0xaac41ec512808d64625576eddd580e7ea40ef8b2.png",
  },
  "0x2688213fedd489762a281a67ae4f2295d8e17ecc": {
    symbol: "FUD",
    name: "FUD.finance",
    decimals: 18,
    address: "0x2688213fedd489762a281a67ae4f2295d8e17ecc",
    logoURI:
      "https://tokens.1inch.exchange/0x2688213fedd489762a281a67ae4f2295d8e17ecc.png",
  },
  "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919": {
    symbol: "RAI",
    name: "Rai Reflex Index",
    decimals: 18,
    address: "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919",
    logoURI:
      "https://tokens.1inch.exchange/0x03ab458634910aad20ef5f1c8ee96f1d6ac54919.png",
  },
  "0x95b3497bbcccc46a8f45f5cf54b0878b39f8d96c": {
    symbol: "UNIDX",
    name: "UniDex",
    decimals: 18,
    address: "0x95b3497bbcccc46a8f45f5cf54b0878b39f8d96c",
    logoURI:
      "https://tokens.1inch.exchange/0x95b3497bbcccc46a8f45f5cf54b0878b39f8d96c.png",
  },
  "0x9ceb84f92a0561fa3cc4132ab9c0b76a59787544": {
    symbol: "DOKI",
    name: "DokiDokiFinance",
    decimals: 18,
    address: "0x9ceb84f92a0561fa3cc4132ab9c0b76a59787544",
    logoURI:
      "https://tokens.1inch.exchange/0x9ceb84f92a0561fa3cc4132ab9c0b76a59787544.png",
  },
  "0xfc05987bd2be489accf0f509e44b0145d68240f7": {
    symbol: "ESS",
    name: "ESSENTIA",
    decimals: 18,
    address: "0xfc05987bd2be489accf0f509e44b0145d68240f7",
    logoURI:
      "https://tokens.1inch.exchange/0xfc05987bd2be489accf0f509e44b0145d68240f7.png",
  },
  "0xc3771d47e2ab5a519e2917e61e23078d0c05ed7f": {
    symbol: "GTH",
    name: "Gather",
    decimals: 18,
    address: "0xc3771d47e2ab5a519e2917e61e23078d0c05ed7f",
    logoURI:
      "https://tokens.1inch.exchange/0xc3771d47e2ab5a519e2917e61e23078d0c05ed7f.png",
  },
  "0xabe580e7ee158da464b51ee1a83ac0289622e6be": {
    symbol: "XFT",
    name: "Offshift",
    decimals: 18,
    address: "0xabe580e7ee158da464b51ee1a83ac0289622e6be",
    logoURI:
      "https://tokens.1inch.exchange/0xabe580e7ee158da464b51ee1a83ac0289622e6be.png",
  },
  "0xca3fe04c7ee111f0bbb02c328c699226acf9fd33": {
    symbol: "SEEN",
    name: "seen.haus",
    decimals: 18,
    address: "0xca3fe04c7ee111f0bbb02c328c699226acf9fd33",
    logoURI:
      "https://tokens.1inch.exchange/0xca3fe04c7ee111f0bbb02c328c699226acf9fd33.png",
  },
  "0x34612903db071e888a4dadcaa416d3ee263a87b9": {
    symbol: "arte",
    name: "ethart",
    decimals: 18,
    address: "0x34612903db071e888a4dadcaa416d3ee263a87b9",
    logoURI:
      "https://tokens.1inch.exchange/0x34612903db071e888a4dadcaa416d3ee263a87b9.png",
  },
  "0x7ca4408137eb639570f8e647d9bd7b7e8717514a": {
    symbol: "ALPA",
    name: "AlpaToken",
    decimals: 18,
    address: "0x7ca4408137eb639570f8e647d9bd7b7e8717514a",
    logoURI:
      "https://tokens.1inch.exchange/0x7ca4408137eb639570f8e647d9bd7b7e8717514a.png",
  },
  "0xa58a4f5c4bb043d2cc1e170613b74e767c94189b": {
    symbol: "UTU",
    name: "UTU Coin",
    decimals: 18,
    address: "0xa58a4f5c4bb043d2cc1e170613b74e767c94189b",
    logoURI:
      "https://tokens.1inch.exchange/0xa58a4f5c4bb043d2cc1e170613b74e767c94189b.png",
  },
  "0x9a0aba393aac4dfbff4333b06c407458002c6183": {
    symbol: "AC",
    name: "ACoconut",
    decimals: 18,
    address: "0x9a0aba393aac4dfbff4333b06c407458002c6183",
    logoURI:
      "https://tokens.1inch.exchange/0x9a0aba393aac4dfbff4333b06c407458002c6183.png",
  },
  "0x7eaf9c89037e4814dc0d9952ac7f888c784548db": {
    symbol: "ROYA",
    name: "Royale",
    decimals: 18,
    address: "0x7eaf9c89037e4814dc0d9952ac7f888c784548db",
    logoURI:
      "https://tokens.1inch.exchange/0x7eaf9c89037e4814dc0d9952ac7f888c784548db.png",
  },
  "0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70": {
    symbol: "PREMIA",
    name: "Premia",
    decimals: 18,
    address: "0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70",
    logoURI:
      "https://tokens.1inch.exchange/0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70.png",
  },
  "0x4ca0654f4fc1025cf1a17b7459c20ac0479522ad": {
    symbol: "RIGEL",
    name: "Rigel Finance",
    decimals: 18,
    address: "0x4ca0654f4fc1025cf1a17b7459c20ac0479522ad",
    logoURI:
      "https://tokens.1inch.exchange/0x4ca0654f4fc1025cf1a17b7459c20ac0479522ad.png",
  },
  "0x51e00a95748dbd2a3f47bc5c3b3e7b3f0fea666c": {
    symbol: "DVG",
    name: "DVGToken",
    decimals: 18,
    address: "0x51e00a95748dbd2a3f47bc5c3b3e7b3f0fea666c",
    logoURI:
      "https://tokens.1inch.exchange/0x51e00a95748dbd2a3f47bc5c3b3e7b3f0fea666c.png",
  },
  "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e": {
    symbol: "POOL",
    name: "PoolTogether",
    decimals: 18,
    address: "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e",
    logoURI:
      "https://tokens.1inch.exchange/0x0cec1a9154ff802e7934fc916ed7ca50bde6844e.png",
  },
  "0x72e9d9038ce484ee986fea183f8d8df93f9ada13": {
    symbol: "SMARTCREDIT",
    name: "SMARTCREDIT Token",
    decimals: 18,
    address: "0x72e9d9038ce484ee986fea183f8d8df93f9ada13",
    logoURI:
      "https://tokens.1inch.exchange/0x72e9d9038ce484ee986fea183f8d8df93f9ada13.png",
  },
  "0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e": {
    symbol: "ROOT",
    name: "RootKit",
    decimals: 18,
    address: "0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e",
    logoURI:
      "https://tokens.1inch.exchange/0xcb5f72d37685c3d5ad0bb5f982443bc8fcdf570e.png",
  },
  "0x557b933a7c2c45672b610f8954a3deb39a51a8ca": {
    symbol: "REVV",
    name: "REVV",
    decimals: 18,
    address: "0x557b933a7c2c45672b610f8954a3deb39a51a8ca",
    logoURI:
      "https://tokens.1inch.exchange/0x557b933a7c2c45672b610f8954a3deb39a51a8ca.png",
  },
  "0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7": {
    symbol: "PHNX",
    name: "PhoenixDAO",
    decimals: 18,
    address: "0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7",
    logoURI:
      "https://tokens.1inch.exchange/0x38a2fdc11f526ddd5a607c1f251c065f40fbf2f7.png",
  },
  "0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4": {
    symbol: "KIT",
    name: "DexKit",
    decimals: 18,
    address: "0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4",
    logoURI:
      "https://tokens.1inch.exchange/0x7866e48c74cbfb8183cd1a929cd9b95a7a5cb4f4.png",
  },
  "0x4691937a7508860f876c9c0a2a617e7d9e945d4b": {
    symbol: "WOO",
    name: "Wootrade Network",
    decimals: 18,
    address: "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
    logoURI:
      "https://tokens.1inch.exchange/0x4691937a7508860f876c9c0a2a617e7d9e945d4b.png",
  },
  "0xea1ea0972fa092dd463f2968f9bb51cc4c981d71": {
    symbol: "MOD",
    name: "Modefi",
    decimals: 18,
    address: "0xea1ea0972fa092dd463f2968f9bb51cc4c981d71",
    logoURI:
      "https://tokens.1inch.exchange/0xea1ea0972fa092dd463f2968f9bb51cc4c981d71.png",
  },
  "0x946112efab61c3636cbd52de2e1392d7a75a6f01": {
    symbol: "HYDRO",
    name: "Hydro",
    decimals: 18,
    address: "0x946112efab61c3636cbd52de2e1392d7a75a6f01",
    logoURI:
      "https://tokens.1inch.exchange/0xebbdf302c940c6bfd49c6b165f457fdb324649bc.png",
  },
  "0x0fe629d1e84e171f8ff0c1ded2cc2221caa48a3f": {
    symbol: "MASK",
    name: "Mask",
    decimals: 18,
    address: "0x0fe629d1e84e171f8ff0c1ded2cc2221caa48a3f",
    logoURI:
      "https://tokens.1inch.exchange/0x0fe629d1e84e171f8ff0c1ded2cc2221caa48a3f.png",
  },
  "0xf99d58e463a2e07e5692127302c20a191861b4d6": {
    symbol: "ANY",
    name: "Anyswap",
    decimals: 18,
    address: "0xf99d58e463a2e07e5692127302c20a191861b4d6",
    logoURI:
      "https://tokens.1inch.exchange/0xf99d58e463a2e07e5692127302c20a191861b4d6.png",
  },
  "0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b": {
    symbol: "RLY",
    name: "Rally",
    decimals: 18,
    address: "0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b",
    logoURI:
      "https://tokens.1inch.exchange/0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b.png",
  },
  "0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8": {
    symbol: "KEX",
    name: "KIRA Network",
    decimals: 6,
    address: "0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8",
    logoURI:
      "https://tokens.1inch.exchange/0x16980b3b4a3f9d89e33311b5aa8f80303e5ca4f8.png",
  },
  "0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c": {
    symbol: "UOS",
    name: "Ultra Token",
    decimals: 4,
    address: "0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c",
    logoURI:
      "https://tokens.1inch.exchange/0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c.png",
  },
  "0x147faf8de9d8d8daae129b187f0d02d819126750": {
    symbol: "GEO",
    name: "GeoDB Coin",
    decimals: 18,
    address: "0x147faf8de9d8d8daae129b187f0d02d819126750",
    logoURI:
      "https://tokens.1inch.exchange/0x147faf8de9d8d8daae129b187f0d02d819126750.png",
  },
  "0x8a854288a5976036a725879164ca3e91d30c6a1b": {
    symbol: "GET",
    name: "GET",
    decimals: 18,
    address: "0x8a854288a5976036a725879164ca3e91d30c6a1b",
    logoURI:
      "https://tokens.1inch.exchange/0x8a854288a5976036a725879164ca3e91d30c6a1b.png",
  },
  "0x79c75e2e8720b39e258f41c37cc4f309e0b0ff80": {
    symbol: "SOUL",
    name: "Phantasma Stake",
    decimals: 8,
    address: "0x79c75e2e8720b39e258f41c37cc4f309e0b0ff80",
    logoURI:
      "https://tokens.1inch.exchange/0x79c75e2e8720b39e258f41c37cc4f309e0b0ff80.png",
  },
  "0x9e78b8274e1d6a76a0dbbf90418894df27cbceb5": {
    symbol: "UniFi",
    name: "UniFi",
    decimals: 18,
    address: "0x9e78b8274e1d6a76a0dbbf90418894df27cbceb5",
    logoURI:
      "https://tokens.1inch.exchange/0x9e78b8274e1d6a76a0dbbf90418894df27cbceb5.png",
  },
  "0x3a880652f47bfaa771908c07dd8673a787daed3a": {
    symbol: "DDX",
    name: "DerivaDAO",
    decimals: 18,
    address: "0x3a880652f47bfaa771908c07dd8673a787daed3a",
    logoURI:
      "https://tokens.1inch.exchange/0x3a880652f47bfaa771908c07dd8673a787daed3a.png",
  },
  "0x6c28aef8977c9b773996d0e8376d2ee379446f2f": {
    symbol: "QUICK",
    name: "Quickswap",
    decimals: 18,
    address: "0x6c28aef8977c9b773996d0e8376d2ee379446f2f",
    logoURI:
      "https://tokens.1inch.exchange/0x6c28aef8977c9b773996d0e8376d2ee379446f2f.png",
  },
  "0xa1d6df714f91debf4e0802a542e13067f31b8262": {
    symbol: "RFOX",
    name: "RFOX",
    decimals: 18,
    address: "0xa1d6df714f91debf4e0802a542e13067f31b8262",
    logoURI:
      "https://tokens.1inch.exchange/0xa1d6df714f91debf4e0802a542e13067f31b8262.png",
  },
  "0x275f5ad03be0fa221b4c6649b8aee09a42d9412a": {
    symbol: "MONA",
    name: "Monavale",
    decimals: 18,
    address: "0x275f5ad03be0fa221b4c6649b8aee09a42d9412a",
    logoURI:
      "https://tokens.1inch.exchange/0x275f5ad03be0fa221b4c6649b8aee09a42d9412a.png",
  },
  "0x9b53e429b0badd98ef7f01f03702986c516a5715": {
    symbol: "HY",
    name: "hybrix hydra",
    decimals: 18,
    address: "0x9b53e429b0badd98ef7f01f03702986c516a5715",
    logoURI:
      "https://tokens.1inch.exchange/0x9b53e429b0badd98ef7f01f03702986c516a5715.png",
  },
  "0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55": {
    symbol: "SUPER",
    name: "SuperFarm",
    decimals: 18,
    address: "0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55",
    logoURI:
      "https://tokens.1inch.exchange/0xe53ec727dbdeb9e2d5456c3be40cff031ab40a55.png",
  },
  "0x123151402076fc819b7564510989e475c9cd93ca": {
    symbol: "wDGLD",
    name: "wrapped-DGLD",
    decimals: 8,
    address: "0x123151402076fc819b7564510989e475c9cd93ca",
    logoURI:
      "https://tokens.1inch.exchange/0x123151402076fc819b7564510989e475c9cd93ca.png",
  },
  "0xada0a1202462085999652dc5310a7a9e2bf3ed42": {
    symbol: "CGI",
    name: "CoinShares Gold and Cryptoassets Index Lite",
    decimals: 18,
    address: "0xada0a1202462085999652dc5310a7a9e2bf3ed42",
    logoURI:
      "https://tokens.1inch.exchange/0xada0a1202462085999652dc5310a7a9e2bf3ed42.png",
  },
  "0xea6412fb370e8d1605e6aeeaa21ad07c3c7e9f24": {
    symbol: "MUSH",
    name: "MUSH",
    decimals: 18,
    address: "0xea6412fb370e8d1605e6aeeaa21ad07c3c7e9f24",
    logoURI:
      "https://tokens.1inch.exchange/0xea6412fb370e8d1605e6aeeaa21ad07c3c7e9f24.png",
  },
  "0x6149c26cd2f7b5ccdb32029af817123f6e37df5b": {
    symbol: "LPOOL",
    name: "Launchpool token",
    decimals: 18,
    address: "0x6149c26cd2f7b5ccdb32029af817123f6e37df5b",
    logoURI:
      "https://tokens.1inch.exchange/0x6149c26cd2f7b5ccdb32029af817123f6e37df5b.png",
  },
  "0x69af81e73a73b40adf4f3d4223cd9b1ece623074": {
    symbol: "MASK_NTWRK",
    name: "Mask Network",
    decimals: 18,
    address: "0x69af81e73a73b40adf4f3d4223cd9b1ece623074",
    logoURI:
      "https://tokens.1inch.exchange/0x69af81e73a73b40adf4f3d4223cd9b1ece623074.png",
  },
  "0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb": {
    symbol: "XTK",
    name: "xToken",
    decimals: 18,
    address: "0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb",
    logoURI:
      "https://tokens.1inch.exchange/0x7f3edcdd180dbe4819bd98fee8929b5cedb3adeb.png",
  },
  "0x7777777777697cfeecf846a76326da79cc606517": {
    symbol: "SIG",
    name: "xSigma",
    decimals: 18,
    address: "0x7777777777697cfeecf846a76326da79cc606517",
    logoURI:
      "https://tokens.1inch.exchange/0x7777777777697cfeecf846a76326da79cc606517.png",
  },
  "0xf5581dfefd8fb0e4aec526be659cfab1f8c781da": {
    symbol: "HOPR",
    name: "HOPR Token",
    decimals: 18,
    address: "0xf5581dfefd8fb0e4aec526be659cfab1f8c781da",
    logoURI:
      "https://tokens.1inch.exchange/0xf5581dfefd8fb0e4aec526be659cfab1f8c781da.png",
  },
  "0x6c972b70c533e2e045f333ee28b9ffb8d717be69": {
    symbol: "FRY",
    name: "Foundry Logistics Token",
    decimals: 18,
    address: "0x6c972b70c533e2e045f333ee28b9ffb8d717be69",
    logoURI:
      "https://tokens.1inch.exchange/0x6c972b70c533e2e045f333ee28b9ffb8d717be69.png",
  },
  "0x63f88a2298a5c4aee3c216aa6d926b184a4b2437": {
    symbol: "GAME",
    name: "GAME Credits",
    decimals: 18,
    address: "0x63f88a2298a5c4aee3c216aa6d926b184a4b2437",
    logoURI:
      "https://tokens.1inch.exchange/0x63f88a2298a5c4aee3c216aa6d926b184a4b2437.png",
  },
  "0xc8d2ab2a6fdebc25432e54941cb85b55b9f152db": {
    symbol: "GRAP",
    name: "GRAP",
    decimals: 18,
    address: "0xc8d2ab2a6fdebc25432e54941cb85b55b9f152db",
    logoURI:
      "https://tokens.1inch.exchange/0xc8d2ab2a6fdebc25432e54941cb85b55b9f152db.png",
  },
  "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24": {
    symbol: "RNDR",
    name: "Render Token",
    decimals: 18,
    address: "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
    logoURI:
      "https://tokens.1inch.exchange/0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24.png",
  },
  "0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697": {
    symbol: "OVR",
    name: "OVR",
    decimals: 18,
    address: "0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697",
    logoURI:
      "https://tokens.1inch.exchange/0x21bfbda47a0b4b5b1248c767ee49f7caa9b23697.png",
  },
  "0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14": {
    symbol: "MTLX",
    name: "Mettalex",
    decimals: 18,
    address: "0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14",
    logoURI:
      "https://tokens.1inch.exchange/0x2e1e15c44ffe4df6a0cb7371cd00d5028e571d14.png",
  },
  "0xd478161c952357f05f0292b56012cd8457f1cfbf": {
    symbol: "POLK",
    name: "Polkamarkets",
    decimals: 18,
    address: "0xd478161c952357f05f0292b56012cd8457f1cfbf",
    logoURI:
      "https://tokens.1inch.exchange/0xd478161c952357f05f0292b56012cd8457f1cfbf.png",
  },
  "0x48fb253446873234f2febbf9bdeaa72d9d387f94": {
    symbol: "vBNT",
    name: "Bancor Governance Token",
    decimals: 18,
    address: "0x48fb253446873234f2febbf9bdeaa72d9d387f94",
    logoURI:
      "https://tokens.1inch.exchange/0x48fb253446873234f2febbf9bdeaa72d9d387f94.png",
  },
  "0x011a014d5e8eb4771e575bb1000318d509230afa": {
    symbol: "crUNI-V2-WBTC-ETH",
    name: "Cream Uniswap V2 WBTC-ETH",
    decimals: 8,
    address: "0x011a014d5e8eb4771e575bb1000318d509230afa",
    logoURI:
      "https://tokens.1inch.exchange/0x011a014d5e8eb4771e575bb1000318d509230afa.png",
  },
  "0x01da76dea59703578040012357b81ffe62015c2d": {
    symbol: "crYETH",
    name: "Cream yETH",
    decimals: 8,
    address: "0x01da76dea59703578040012357b81ffe62015c2d",
    logoURI:
      "https://tokens.1inch.exchange/0x01da76dea59703578040012357b81ffe62015c2d.png",
  },
  "0x054b7ed3f45714d3091e82aad64a1588dc4096ed": {
    symbol: "crHBTC",
    name: "Cream Huobi BTC",
    decimals: 8,
    address: "0x054b7ed3f45714d3091e82aad64a1588dc4096ed",
    logoURI:
      "https://tokens.1inch.exchange/0x054b7ed3f45714d3091e82aad64a1588dc4096ed.png",
  },
  "0x10a3da2bb0fae4d591476fd97d6636fd172923a8": {
    symbol: "crHEGIC",
    name: "Cream FTX Token",
    decimals: 8,
    address: "0x10a3da2bb0fae4d591476fd97d6636fd172923a8",
    logoURI:
      "https://tokens.1inch.exchange/0x10a3da2bb0fae4d591476fd97d6636fd172923a8.png",
  },
  "0x10fdbd1e48ee2fd9336a482d746138ae19e649db": {
    symbol: "crFTT",
    name: "Cream FTX Token",
    decimals: 8,
    address: "0x10fdbd1e48ee2fd9336a482d746138ae19e649db",
    logoURI:
      "https://tokens.1inch.exchange/0x10fdbd1e48ee2fd9336a482d746138ae19e649db.png",
  },
  "0x17107f40d70f4470d20cb3f138a052cae8ebd4be": {
    symbol: "crRENBTC",
    name: "Cream renBTC",
    decimals: 8,
    address: "0x17107f40d70f4470d20cb3f138a052cae8ebd4be",
    logoURI:
      "https://tokens.1inch.exchange/0x17107f40d70f4470d20cb3f138a052cae8ebd4be.png",
  },
  "0x197070723ce0d3810a0e47f06e935c30a480d4fc": {
    symbol: "crWBTC",
    name: "Cream Wrapped BTC",
    decimals: 8,
    address: "0x197070723ce0d3810a0e47f06e935c30a480d4fc",
    logoURI:
      "https://tokens.1inch.exchange/0x197070723ce0d3810a0e47f06e935c30a480d4fc.png",
  },
  "0x19d1666f543d42ef17f66e376944a22aea1a8e46": {
    symbol: "crCOMP",
    name: "Cream Compound",
    decimals: 8,
    address: "0x19d1666f543d42ef17f66e376944a22aea1a8e46",
    logoURI:
      "https://tokens.1inch.exchange/0x19d1666f543d42ef17f66e376944a22aea1a8e46.png",
  },
  "0x1d0986fb43985c88ffa9ad959cc24e6a087c7e35": {
    symbol: "crALPHA",
    name: "Cream AlphaToken",
    decimals: 8,
    address: "0x1d0986fb43985c88ffa9ad959cc24e6a087c7e35",
    logoURI:
      "https://tokens.1inch.exchange/0x1d0986fb43985c88ffa9ad959cc24e6a087c7e35.png",
  },
  "0x1ff8cdb51219a8838b52e9cac09b71e591bc998e": {
    symbol: "crBUSD",
    name: "Cream Binance USD",
    decimals: 8,
    address: "0x1ff8cdb51219a8838b52e9cac09b71e591bc998e",
    logoURI:
      "https://tokens.1inch.exchange/0x1ff8cdb51219a8838b52e9cac09b71e591bc998e.png",
  },
  "0x21011bc93d9e515b9511a817a1ed1d6d468f49fc": {
    symbol: "crCOVER",
    name: "Cream Cover Protocol Governance Token",
    decimals: 8,
    address: "0x21011bc93d9e515b9511a817a1ed1d6d468f49fc",
    logoURI:
      "https://tokens.1inch.exchange/0x21011bc93d9e515b9511a817a1ed1d6d468f49fc.png",
  },
  "0x228619cca194fbe3ebeb2f835ec1ea5080dafbb2": {
    symbol: "crXSUSHI",
    name: "Cream SushiBar",
    decimals: 8,
    address: "0x228619cca194fbe3ebeb2f835ec1ea5080dafbb2",
    logoURI:
      "https://tokens.1inch.exchange/0x228619cca194fbe3ebeb2f835ec1ea5080dafbb2.png",
  },
  "0x22b243b96495c547598d9042b6f94b01c22b2e9e": {
    symbol: "crSWAG",
    name: "Cream Swag Token",
    decimals: 8,
    address: "0x22b243b96495c547598d9042b6f94b01c22b2e9e",
    logoURI:
      "https://tokens.1inch.exchange/0x22b243b96495c547598d9042b6f94b01c22b2e9e.png",
  },
  "0x25555933a8246ab67cbf907ce3d1949884e82b55": {
    symbol: "crSUSD",
    name: "Cream Synth sUSD",
    decimals: 8,
    address: "0x25555933a8246ab67cbf907ce3d1949884e82b55",
    logoURI:
      "https://tokens.1inch.exchange/0x25555933a8246ab67cbf907ce3d1949884e82b55.png",
  },
  "0x2a537fa9ffaea8c1a41d3c2b68a9cb791529366d": {
    symbol: "crDPI",
    name: "Cream DefiPulse Index",
    decimals: 8,
    address: "0x2a537fa9ffaea8c1a41d3c2b68a9cb791529366d",
    logoURI:
      "https://tokens.1inch.exchange/0x2a537fa9ffaea8c1a41d3c2b68a9cb791529366d.png",
  },
  "0x2db6c82ce72c8d7d770ba1b5f5ed0b6e075066d6": {
    symbol: "crAMP",
    name: "Cream Amp",
    decimals: 8,
    address: "0x2db6c82ce72c8d7d770ba1b5f5ed0b6e075066d6",
    logoURI:
      "https://tokens.1inch.exchange/0x2db6c82ce72c8d7d770ba1b5f5ed0b6e075066d6.png",
  },
  "0x3225e3c669b39c7c8b3e204a8614bb218c5e31bc": {
    symbol: "crAAVE",
    name: "Cream AAVE Token",
    decimals: 8,
    address: "0x3225e3c669b39c7c8b3e204a8614bb218c5e31bc",
    logoURI:
      "https://tokens.1inch.exchange/0x3225e3c669b39c7c8b3e204a8614bb218c5e31bc.png",
  },
  "0x338286c0bc081891a4bda39c7667ae150bf5d206": {
    symbol: "crSUSHI",
    name: "Cream SushiToken",
    decimals: 8,
    address: "0x338286c0bc081891a4bda39c7667ae150bf5d206",
    logoURI:
      "https://tokens.1inch.exchange/0x338286c0bc081891a4bda39c7667ae150bf5d206.png",
  },
  "0x3623387773010d9214b10c551d6e7fc375d31f58": {
    symbol: "crMTA",
    name: "Cream Meta",
    decimals: 8,
    address: "0x3623387773010d9214b10c551d6e7fc375d31f58",
    logoURI:
      "https://tokens.1inch.exchange/0x3623387773010d9214b10c551d6e7fc375d31f58.png",
  },
  "0x38f27c03d6609a86ff7716ad03038881320be4ad": {
    symbol: "crSLP-DAI-ETH",
    name: "Cream SushiSwap LP Token DAI-ETH",
    decimals: 8,
    address: "0x38f27c03d6609a86ff7716ad03038881320be4ad",
    logoURI:
      "https://tokens.1inch.exchange/0x38f27c03d6609a86ff7716ad03038881320be4ad.png",
  },
  "0x3c6c553a95910f9fc81c98784736bd628636d296": {
    symbol: "crESD",
    name: "Cream Empty Set Dollar",
    decimals: 8,
    address: "0x3c6c553a95910f9fc81c98784736bd628636d296",
    logoURI:
      "https://tokens.1inch.exchange/0x3c6c553a95910f9fc81c98784736bd628636d296.png",
  },
  "0x44fbebd2f576670a6c33f6fc0b00aa8c5753b322": {
    symbol: "crUSDC",
    name: "Cream USD Coin",
    decimals: 8,
    address: "0x44fbebd2f576670a6c33f6fc0b00aa8c5753b322",
    logoURI:
      "https://tokens.1inch.exchange/0x44fbebd2f576670a6c33f6fc0b00aa8c5753b322.png",
  },
  "0x460ea730d204c822ce709f00a8e5959921715adc": {
    symbol: "crBAC",
    name: "Cream Basis Cash",
    decimals: 8,
    address: "0x460ea730d204c822ce709f00a8e5959921715adc",
    logoURI:
      "https://tokens.1inch.exchange/0x460ea730d204c822ce709f00a8e5959921715adc.png",
  },
  "0x4ee15f44c6f0d8d1136c83efd2e8e4ac768954c6": {
    symbol: "crYYCRV",
    name: "Cream yyCRV",
    decimals: 8,
    address: "0x4ee15f44c6f0d8d1136c83efd2e8e4ac768954c6",
    logoURI:
      "https://tokens.1inch.exchange/0x4ee15f44c6f0d8d1136c83efd2e8e4ac768954c6.png",
  },
  "0x4fe11bc316b6d7a345493127fbe298b95adaad85": {
    symbol: "crUNI-V2-USDC-ETH",
    name: "Cream Uniswap V2 USDC-ETH",
    decimals: 8,
    address: "0x4fe11bc316b6d7a345493127fbe298b95adaad85",
    logoURI:
      "https://tokens.1inch.exchange/0x4fe11bc316b6d7a345493127fbe298b95adaad85.png",
  },
  "0x59089279987dd76fc65bf94cb40e186b96e03cb3": {
    symbol: "crOGN",
    name: "Cream OriginToken",
    decimals: 8,
    address: "0x59089279987dd76fc65bf94cb40e186b96e03cb3",
    logoURI:
      "https://tokens.1inch.exchange/0x59089279987dd76fc65bf94cb40e186b96e03cb3.png",
  },
  "0x5c291bc83d15f71fb37805878161718ea4b6aee9": {
    symbol: "crSLP-ETH-USDT",
    name: "Cream SushiSwap LP Token ETH-USDT",
    decimals: 8,
    address: "0x5c291bc83d15f71fb37805878161718ea4b6aee9",
    logoURI:
      "https://tokens.1inch.exchange/0x5c291bc83d15f71fb37805878161718ea4b6aee9.png",
  },
  "0x5ecad8a75216cea7dff978525b2d523a251eea92": {
    symbol: "crSLP-USDC-ETH",
    name: "Cream SushiSwap LP Token USDC-ETH",
    decimals: 8,
    address: "0x5ecad8a75216cea7dff978525b2d523a251eea92",
    logoURI:
      "https://tokens.1inch.exchange/0x5ecad8a75216cea7dff978525b2d523a251eea92.png",
  },
  "0x65883978ada0e707c3b2be2a6825b1c4bdf76a90": {
    symbol: "crAKRO",
    name: "Cream Akropolis",
    decimals: 8,
    address: "0x65883978ada0e707c3b2be2a6825b1c4bdf76a90",
    logoURI:
      "https://tokens.1inch.exchange/0x65883978ada0e707c3b2be2a6825b1c4bdf76a90.png",
  },
  "0x697256caa3ccafd62bb6d3aa1c7c5671786a5fd9": {
    symbol: "crLINK",
    name: "Cream ChainLink Token",
    decimals: 8,
    address: "0x697256caa3ccafd62bb6d3aa1c7c5671786a5fd9",
    logoURI:
      "https://tokens.1inch.exchange/0x697256caa3ccafd62bb6d3aa1c7c5671786a5fd9.png",
  },
  "0x6ba0c66c48641e220cf78177c144323b3838d375": {
    symbol: "crSLP-SUSHI-ETH",
    name: "Cream SushiSwap LP Token SUSHI-ETH",
    decimals: 8,
    address: "0x6ba0c66c48641e220cf78177c144323b3838d375",
    logoURI:
      "https://tokens.1inch.exchange/0x6ba0c66c48641e220cf78177c144323b3838d375.png",
  },
  "0x73f6cba38922960b7092175c0add22ab8d0e81fc": {
    symbol: "crSLP-WBTC-ETH",
    name: "Cream SushiSwap LP Token WBTC-ETH",
    decimals: 8,
    address: "0x73f6cba38922960b7092175c0add22ab8d0e81fc",
    logoURI:
      "https://tokens.1inch.exchange/0x73f6cba38922960b7092175c0add22ab8d0e81fc.png",
  },
  "0x797aab1ce7c01eb727ab980762ba88e7133d2157": {
    symbol: "crUSDT",
    name: "Cream USDT",
    decimals: 8,
    address: "0x797aab1ce7c01eb727ab980762ba88e7133d2157",
    logoURI:
      "https://tokens.1inch.exchange/0x797aab1ce7c01eb727ab980762ba88e7133d2157.png",
  },
  "0x7aaa323d7e398be4128c7042d197a2545f0f1fea": {
    symbol: "crOMG",
    name: "Cream OMGToken",
    decimals: 8,
    address: "0x7aaa323d7e398be4128c7042d197a2545f0f1fea",
    logoURI:
      "https://tokens.1inch.exchange/0x7aaa323d7e398be4128c7042d197a2545f0f1fea.png",
  },
  "0x7ea9c63e216d5565c3940a2b3d150e59c2907db3": {
    symbol: "crBBTC",
    name: "Cream Binance Wrapped BTC",
    decimals: 8,
    address: "0x7ea9c63e216d5565c3940a2b3d150e59c2907db3",
    logoURI:
      "https://tokens.1inch.exchange/0x7ea9c63e216d5565c3940a2b3d150e59c2907db3.png",
  },
  "0x85759961b116f1d36fd697855c57a6ae40793d9b": {
    symbol: "cr1INCH",
    name: "Cream 1INCH Token",
    decimals: 8,
    address: "0x85759961b116f1d36fd697855c57a6ae40793d9b",
    logoURI:
      "https://tokens.1inch.exchange/0x85759961b116f1d36fd697855c57a6ae40793d9b.png",
  },
  "0x8b3ff1ed4f36c2c2be675afb13cc3aa5d73685a5": {
    symbol: "crCEL",
    name: "Cream Celsius",
    decimals: 8,
    address: "0x8b3ff1ed4f36c2c2be675afb13cc3aa5d73685a5",
    logoURI:
      "https://tokens.1inch.exchange/0x8b3ff1ed4f36c2c2be675afb13cc3aa5d73685a5.png",
  },
  "0x8b86e0598616a8d4f1fdae8b59e55fb5bc33d0d6": {
    symbol: "crLEND",
    name: "Cream EthLend Token",
    decimals: 8,
    address: "0x8b86e0598616a8d4f1fdae8b59e55fb5bc33d0d6",
    logoURI:
      "https://tokens.1inch.exchange/0x8b86e0598616a8d4f1fdae8b59e55fb5bc33d0d6.png",
  },
  "0x8b950f43fcac4931d408f1fcda55c6cb6cbf3096": {
    symbol: "crBBADGER",
    name: "Cream Badger Sett Badger",
    decimals: 8,
    address: "0x8b950f43fcac4931d408f1fcda55c6cb6cbf3096",
    logoURI:
      "https://tokens.1inch.exchange/0x8b950f43fcac4931d408f1fcda55c6cb6cbf3096.png",
  },
  "0x903560b1cce601794c584f58898da8a8b789fc5d": {
    symbol: "crKP3R",
    name: "Cream Keep3rV1",
    decimals: 8,
    address: "0x903560b1cce601794c584f58898da8a8b789fc5d",
    logoURI:
      "https://tokens.1inch.exchange/0x903560b1cce601794c584f58898da8a8b789fc5d.png",
  },
  "0x92b767185fb3b04f881e3ac8e5b0662a027a1d9f": {
    symbol: "crDAI",
    name: "Cream Dai Stablecoin",
    decimals: 8,
    address: "0x92b767185fb3b04f881e3ac8e5b0662a027a1d9f",
    logoURI:
      "https://tokens.1inch.exchange/0x92b767185fb3b04f881e3ac8e5b0662a027a1d9f.png",
  },
  "0x9baf8a5236d44ac410c0186fe39178d5aad0bb87": {
    symbol: "crYCRV",
    name: "Cream yCRV",
    decimals: 8,
    address: "0x9baf8a5236d44ac410c0186fe39178d5aad0bb87",
    logoURI:
      "https://tokens.1inch.exchange/0x9baf8a5236d44ac410c0186fe39178d5aad0bb87.png",
  },
  "0xb092b4601850e23903a42eacbc9d8a0eec26a4d5": {
    symbol: "crFRAX",
    name: "Cream Frax",
    decimals: 8,
    address: "0xb092b4601850e23903a42eacbc9d8a0eec26a4d5",
    logoURI:
      "https://tokens.1inch.exchange/0xb092b4601850e23903a42eacbc9d8a0eec26a4d5.png",
  },
  "0xc25eae724f189ba9030b2556a1533e7c8a732e14": {
    symbol: "crSNX",
    name: "Cream Synthetix Network Token",
    decimals: 8,
    address: "0xc25eae724f189ba9030b2556a1533e7c8a732e14",
    logoURI:
      "https://tokens.1inch.exchange/0xc25eae724f189ba9030b2556a1533e7c8a732e14.png",
  },
  "0xc68251421edda00a10815e273fa4b1191fac651b": {
    symbol: "crPICKLE",
    name: "Cream PickleToken",
    decimals: 8,
    address: "0xc68251421edda00a10815e273fa4b1191fac651b",
    logoURI:
      "https://tokens.1inch.exchange/0xc68251421edda00a10815e273fa4b1191fac651b.png",
  },
  "0xc7fd8dcee4697ceef5a2fd4608a7bd6a94c77480": {
    symbol: "crCRV",
    name: "Cream CRV",
    decimals: 8,
    address: "0xc7fd8dcee4697ceef5a2fd4608a7bd6a94c77480",
    logoURI:
      "https://tokens.1inch.exchange/0xc7fd8dcee4697ceef5a2fd4608a7bd6a94c77480.png",
  },
  "0xcbae0a83f4f9926997c8339545fb8ee32edc6b76": {
    symbol: "crYFI",
    name: "Cream YFI",
    decimals: 8,
    address: "0xcbae0a83f4f9926997c8339545fb8ee32edc6b76",
    logoURI:
      "https://tokens.1inch.exchange/0xcbae0a83f4f9926997c8339545fb8ee32edc6b76.png",
  },
  "0xcd22c4110c12ac41acefa0091c432ef44efaafa0": {
    symbol: "crUNI-V2-DAI-ETH",
    name: "Cream Uniswap V2 DAI-ETH",
    decimals: 8,
    address: "0xcd22c4110c12ac41acefa0091c432ef44efaafa0",
    logoURI:
      "https://tokens.1inch.exchange/0xcd22c4110c12ac41acefa0091c432ef44efaafa0.png",
  },
  "0xce4fe9b4b8ff61949dcfeb7e03bc9faca59d2eb3": {
    symbol: "crBAL",
    name: "Cream Balancer",
    decimals: 8,
    address: "0xce4fe9b4b8ff61949dcfeb7e03bc9faca59d2eb3",
    logoURI:
      "https://tokens.1inch.exchange/0xce4fe9b4b8ff61949dcfeb7e03bc9faca59d2eb3.png",
  },
  "0xd06527d5e56a3495252a528c4987003b712860ee": {
    symbol: "crETH",
    name: "Cream Ether",
    decimals: 8,
    address: "0xd06527d5e56a3495252a528c4987003b712860ee",
    logoURI:
      "https://tokens.1inch.exchange/0xd06527d5e56a3495252a528c4987003b712860ee.png",
  },
  "0xd5103afcd0b3fa865997ef2984c66742c51b2a8b": {
    symbol: "crHFIL",
    name: "Cream Huobi FIL",
    decimals: 8,
    address: "0xd5103afcd0b3fa865997ef2984c66742c51b2a8b",
    logoURI:
      "https://tokens.1inch.exchange/0xd5103afcd0b3fa865997ef2984c66742c51b2a8b.png",
  },
  "0xd532944df6dfd5dd629e8772f03d4fc861873abf": {
    symbol: "crSLP-YFI-ETH",
    name: "Cream SushiSwap LP Token YFI-ETH",
    decimals: 8,
    address: "0xd532944df6dfd5dd629e8772f03d4fc861873abf",
    logoURI:
      "https://tokens.1inch.exchange/0xd532944df6dfd5dd629e8772f03d4fc861873abf.png",
  },
  "0xd692ac3245bb82319a31068d6b8412796ee85d2c": {
    symbol: "crHUSD",
    name: "Cream HUSD",
    decimals: 8,
    address: "0xd692ac3245bb82319a31068d6b8412796ee85d2c",
    logoURI:
      "https://tokens.1inch.exchange/0xd692ac3245bb82319a31068d6b8412796ee85d2c.png",
  },
  "0xe6c3120f38f56deb38b69b65cc7dcaf916373963": {
    symbol: "crUNI-V2-ETH-USDT",
    name: "Cream Uniswap V2 ETH-USDT",
    decimals: 8,
    address: "0xe6c3120f38f56deb38b69b65cc7dcaf916373963",
    logoURI:
      "https://tokens.1inch.exchange/0xe6c3120f38f56deb38b69b65cc7dcaf916373963.png",
  },
  "0xe89a6d0509faf730bd707bf868d9a2a744a363c7": {
    symbol: "crUNI",
    name: "Cream Uniswap",
    decimals: 8,
    address: "0xe89a6d0509faf730bd707bf868d9a2a744a363c7",
    logoURI:
      "https://tokens.1inch.exchange/0xe89a6d0509faf730bd707bf868d9a2a744a363c7.png",
  },
  "0xef58b2d5a1b8d3cde67b8ab054dc5c831e9bc025": {
    symbol: "crSRM",
    name: "Cream Serum",
    decimals: 8,
    address: "0xef58b2d5a1b8d3cde67b8ab054dc5c831e9bc025",
    logoURI:
      "https://tokens.1inch.exchange/0xef58b2d5a1b8d3cde67b8ab054dc5c831e9bc025.png",
  },
  "0xeff039c3c1d668f408d09dd7b63008622a77532c": {
    symbol: "crWNXM",
    name: "Cream Wrapped NXM",
    decimals: 8,
    address: "0xeff039c3c1d668f408d09dd7b63008622a77532c",
    logoURI:
      "https://tokens.1inch.exchange/0xeff039c3c1d668f408d09dd7b63008622a77532c.png",
  },
  "0xf047d4be569fb770db143a6a90ef203fc1295922": {
    symbol: "crTBTC",
    name: "Cream tBTC",
    decimals: 8,
    address: "0xf047d4be569fb770db143a6a90ef203fc1295922",
    logoURI:
      "https://tokens.1inch.exchange/0xf047d4be569fb770db143a6a90ef203fc1295922.png",
  },
  "0xf55bbe0255f7f4e70f63837ff72a577fbddbe924": {
    symbol: "crBOND",
    name: "Cream BarnBridge Governance Token",
    decimals: 8,
    address: "0xf55bbe0255f7f4e70f63837ff72a577fbddbe924",
    logoURI:
      "https://tokens.1inch.exchange/0xf55bbe0255f7f4e70f63837ff72a577fbddbe924.png",
  },
  "0xfd609a03b393f1a1cfcacedabf068cad09a924e2": {
    symbol: "crCRETH2",
    name: "Cream Cream ETH 2",
    decimals: 8,
    address: "0xfd609a03b393f1a1cfcacedabf068cad09a924e2",
    logoURI:
      "https://tokens.1inch.exchange/0xfd609a03b393f1a1cfcacedabf068cad09a924e2.png",
  },
  "0x6e9730ecffbed43fd876a264c982e254ef05a0de": {
    symbol: "NORD",
    name: "Nord Token",
    decimals: 18,
    address: "0x6e9730ecffbed43fd876a264c982e254ef05a0de",
    logoURI:
      "https://tokens.1inch.exchange/0x6e9730ecffbed43fd876a264c982e254ef05a0de.png",
  },
  "0x661ab0ed68000491d98c796146bcf28c20d7c559": {
    symbol: "DOWS",
    name: "Shadows Network",
    decimals: 18,
    address: "0x661ab0ed68000491d98c796146bcf28c20d7c559",
    logoURI:
      "https://tokens.1inch.exchange/0x661ab0ed68000491d98c796146bcf28c20d7c559.png",
  },
  "0x0cdf9acd87e940837ff21bb40c9fd55f68bba059": {
    symbol: "MINT",
    name: "Public Mint",
    decimals: 18,
    address: "0x0cdf9acd87e940837ff21bb40c9fd55f68bba059",
    logoURI:
      "https://tokens.1inch.exchange/0x0cdf9acd87e940837ff21bb40c9fd55f68bba059.png",
  },
  "0x126c121f99e1e211df2e5f8de2d96fa36647c855": {
    symbol: "DEGEN",
    name: "DEGEN Index",
    decimals: 18,
    address: "0x126c121f99e1e211df2e5f8de2d96fa36647c855",
    logoURI:
      "https://tokens.1inch.exchange/0x126c121f99e1e211df2e5f8de2d96fa36647c855.png",
  },
  "0x0c7d5ae016f806603cb1782bea29ac69471cab9c": {
    symbol: "BFC",
    name: "Bifrost",
    decimals: 18,
    address: "0x0c7d5ae016f806603cb1782bea29ac69471cab9c",
    logoURI:
      "https://tokens.1inch.exchange/0x0c7d5ae016f806603cb1782bea29ac69471cab9c.png",
  },
  "0xd23ac27148af6a2f339bd82d0e3cff380b5093de": {
    symbol: "SI",
    name: "SIREN",
    decimals: 18,
    address: "0xd23ac27148af6a2f339bd82d0e3cff380b5093de",
    logoURI:
      "https://tokens.1inch.exchange/0xd23ac27148af6a2f339bd82d0e3cff380b5093de.png",
  },
  "0x4c25bdf026ea05f32713f00f73ca55857fbf6342": {
    symbol: "FONT",
    name: "Font",
    decimals: 18,
    address: "0x4c25bdf026ea05f32713f00f73ca55857fbf6342",
    logoURI:
      "https://tokens.1inch.exchange/0x4c25bdf026ea05f32713f00f73ca55857fbf6342.png",
  },
  "0x68a3637ba6e75c0f66b61a42639c4e9fcd3d4824": {
    symbol: "MOON",
    name: "MoonToken",
    decimals: 18,
    address: "0x68a3637ba6e75c0f66b61a42639c4e9fcd3d4824",
    logoURI:
      "https://tokens.1inch.exchange/0x68a3637ba6e75c0f66b61a42639c4e9fcd3d4824.png",
  },
  "0x4b1e80cac91e2216eeb63e29b957eb91ae9c2be8": {
    symbol: "JUP",
    name: "Jupiter",
    decimals: 18,
    address: "0x4b1e80cac91e2216eeb63e29b957eb91ae9c2be8",
    logoURI:
      "https://tokens.1inch.exchange/0x4b1e80cac91e2216eeb63e29b957eb91ae9c2be8.png",
  },
  "0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037": {
    symbol: "SENT",
    name: "SENTinel",
    decimals: 8,
    address: "0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037",
    logoURI:
      "https://tokens.1inch.exchange/0xa44e5137293e855b1b7bc7e2c6f8cd796ffcb037.png",
  },
  "0x88ef27e69108b2633f8e1c184cc37940a075cc02": {
    symbol: "DEGO",
    name: "dego.finance",
    decimals: 18,
    address: "0x88ef27e69108b2633f8e1c184cc37940a075cc02",
    logoURI:
      "https://tokens.1inch.exchange/0x88ef27e69108b2633f8e1c184cc37940a075cc02.png",
  },
  "0xee06a81a695750e71a662b51066f2c74cf4478a0": {
    symbol: "$DG",
    name: "decentral.games",
    decimals: 18,
    address: "0xee06a81a695750e71a662b51066f2c74cf4478a0",
    logoURI:
      "https://tokens.1inch.exchange/0xee06a81a695750e71a662b51066f2c74cf4478a0.png",
  },
  "0x0dde6f6e345bfd23f3f419f0dfe04e93143b44fb": {
    symbol: "SOTA",
    name: "SOTA",
    decimals: 18,
    address: "0x0dde6f6e345bfd23f3f419f0dfe04e93143b44fb",
    logoURI:
      "https://tokens.1inch.exchange/0x0dde6f6e345bfd23f3f419f0dfe04e93143b44fb.png",
  },
  "0x739763a258640919981f9ba610ae65492455be53": {
    symbol: "NDR",
    name: "NodeRunners",
    decimals: 18,
    address: "0x739763a258640919981f9ba610ae65492455be53",
    logoURI:
      "https://tokens.1inch.exchange/0x739763a258640919981f9ba610ae65492455be53.png",
  },
  "0xd82bb924a1707950903e2c0a619824024e254cd1": {
    symbol: "DAOfi",
    name: "DAOfi",
    decimals: 18,
    address: "0xd82bb924a1707950903e2c0a619824024e254cd1",
    logoURI:
      "https://tokens.1inch.exchange/0xd82bb924a1707950903e2c0a619824024e254cd1.png",
  },
  "0x31c8eacbffdd875c74b94b077895bd78cf1e64a3": {
    symbol: "RAD",
    name: "Radicle",
    decimals: 18,
    address: "0x31c8eacbffdd875c74b94b077895bd78cf1e64a3",
    logoURI:
      "https://tokens.1inch.exchange/0x31c8eacbffdd875c74b94b077895bd78cf1e64a3.png",
  },
  "0xdbdb4d16eda451d0503b854cf79d55697f90c8df": {
    symbol: "ALCX",
    name: "Alchemix",
    decimals: 18,
    address: "0xdbdb4d16eda451d0503b854cf79d55697f90c8df",
    logoURI:
      "https://tokens.1inch.exchange/0xdbdb4d16eda451d0503b854cf79d55697f90c8df.png",
  },
  "0x24a6a37576377f63f194caa5f518a60f45b42921": {
    symbol: "BANK",
    name: "Float Bank",
    decimals: 18,
    address: "0x24a6a37576377f63f194caa5f518a60f45b42921",
    logoURI:
      "https://tokens.1inch.exchange/0x24a6a37576377f63f194caa5f518a60f45b42921.png",
  },
  "0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f": {
    symbol: "MATTER",
    name: "Antimatter.Finance Governance Token",
    decimals: 18,
    address: "0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f",
    logoURI:
      "https://tokens.1inch.exchange/0x1c9491865a1de77c5b6e19d2e6a5f1d7a6f2b25f.png",
  },
  "0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3": {
    symbol: "FCL",
    name: "Fractal Protocol Token",
    decimals: 18,
    address: "0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3",
    logoURI:
      "https://tokens.1inch.exchange/0xf4d861575ecc9493420a3f5a14f85b13f0b50eb3.png",
  },
  "0xf411903cbc70a74d22900a5de66a2dda66507255": {
    symbol: "VRA",
    name: "VERA",
    decimals: 18,
    address: "0xf411903cbc70a74d22900a5de66a2dda66507255",
    logoURI:
      "https://tokens.1inch.exchange/0xf411903cbc70a74d22900a5de66a2dda66507255.png",
  },
  "0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c": {
    symbol: "NFTI",
    name: "NFT INDEX",
    decimals: 18,
    address: "0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c",
    logoURI:
      "https://tokens.1inch.exchange/0xe5feeac09d36b18b3fa757e5cf3f8da6b8e27f4c.png",
  },
  "0x5affe41805a9e57fed3657d0e64d96aea0b77885": {
    symbol: "OPIUM_LP_34b7",
    name: "Opium USDT Protection v2/USDC",
    decimals: 6,
    address: "0x5affe41805a9e57fed3657d0e64d96aea0b77885",
    logoURI:
      "https://tokens.1inch.exchange/0x5affe41805a9e57fed3657d0e64d96aea0b77885.png",
  },
  "0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e": {
    symbol: "BDP",
    name: "BDPToken",
    decimals: 18,
    address: "0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e",
    logoURI:
      "https://tokens.1inch.exchange/0xf3dcbc6d72a4e1892f7917b7c43b74131df8480e.png",
  },
  "0xbbc2ae13b23d715c30720f079fcd9b4a74093505": {
    symbol: "ERN",
    name: "@EthernityChain $ERN Token",
    decimals: 18,
    address: "0xbbc2ae13b23d715c30720f079fcd9b4a74093505",
    logoURI:
      "https://tokens.1inch.exchange/0xbbc2ae13b23d715c30720f079fcd9b4a74093505.png",
  },
  "0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c": {
    symbol: "KYL",
    name: "Kylin Network",
    decimals: 18,
    address: "0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c",
    logoURI:
      "https://tokens.1inch.exchange/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
  },
  "0xfb5453340c03db5ade474b27e68b6a9c6b2823eb": {
    symbol: "ROBOT",
    name: "MetaFactory",
    decimals: 18,
    address: "0xfb5453340c03db5ade474b27e68b6a9c6b2823eb",
    logoURI:
      "https://tokens.1inch.exchange/0xfb5453340c03db5ade474b27e68b6a9c6b2823eb.png",
  },
  "0x59e9261255644c411afdd00bd89162d09d862e38": {
    symbol: "ETHA",
    name: "ETHA",
    decimals: 18,
    address: "0x59e9261255644c411afdd00bd89162d09d862e38",
    logoURI:
      "https://tokens.1inch.exchange/0x59e9261255644c411afdd00bd89162d09d862e38.png",
  },
  "0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042": {
    symbol: "PAINT",
    name: "Paint",
    decimals: 18,
    address: "0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042",
    logoURI:
      "https://tokens.1inch.exchange/0x4c6ec08cf3fc987c6c4beb03184d335a2dfc4042.png",
  },
  "0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8": {
    symbol: "RULER",
    name: "Ruler Protocol",
    decimals: 18,
    address: "0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8",
    logoURI:
      "https://tokens.1inch.exchange/0x2aeccb42482cc64e087b6d2e5da39f5a7a7001f8.png",
  },
  "0x892a6f9df0147e5f079b0993f486f9aca3c87881": {
    symbol: "xFUND",
    name: "unification.com/xfund",
    decimals: 9,
    address: "0x892a6f9df0147e5f079b0993f486f9aca3c87881",
    logoURI:
      "https://tokens.1inch.exchange/0x892a6f9df0147e5f079b0993f486f9aca3c87881.png",
  },
  "0x7a5ce6abd131ea6b148a022cb76fc180ae3315a6": {
    symbol: "bALPHA",
    name: "bAlpha",
    decimals: 18,
    address: "0x7a5ce6abd131ea6b148a022cb76fc180ae3315a6",
    logoURI:
      "https://tokens.1inch.exchange/0x7a5ce6abd131ea6b148a022cb76fc180ae3315a6.png",
  },
  "0x80ab141f324c3d6f2b18b030f1c4e95d4d658778": {
    symbol: "DEA",
    name: "DEA",
    decimals: 18,
    address: "0x80ab141f324c3d6f2b18b030f1c4e95d4d658778",
    logoURI:
      "https://tokens.1inch.exchange/0x80ab141f324c3d6f2b18b030f1c4e95d4d658778.png",
  },
  "0x3506424f91fd33084466f402d5d97f05f8e3b4af": {
    symbol: "CHZ",
    name: "chiliZ",
    decimals: 18,
    address: "0x3506424f91fd33084466f402d5d97f05f8e3b4af",
    logoURI:
      "https://tokens.1inch.exchange/0x3506424f91fd33084466f402d5d97f05f8e3b4af.png",
  },
  "0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68": {
    symbol: "INV",
    name: "Inverse DAO",
    decimals: 18,
    address: "0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68",
    logoURI:
      "https://tokens.1inch.exchange/0x41d5d79431a913c4ae7d69a668ecdfe5ff9dfb68.png",
  },
  "0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107": {
    symbol: "GOVI",
    name: "GOVI",
    decimals: 18,
    address: "0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107",
    logoURI:
      "https://tokens.1inch.exchange/0xeeaa40b28a2d1b0b08f6f97bb1dd4b75316c6107.png",
  },
  "0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a": {
    symbol: "BEPRO",
    name: "BetProtocolToken",
    decimals: 18,
    address: "0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a",
    logoURI:
      "https://tokens.1inch.exchange/0xcf3c8be2e2c42331da80ef210e9b1b307c03d36a.png",
  },
  "0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc": {
    symbol: "NFY",
    name: "Non-Fungible Yearn",
    decimals: 18,
    address: "0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc",
    logoURI:
      "https://tokens.1inch.exchange/0x1cbb83ebcd552d5ebf8131ef8c9cd9d9bab342bc.png",
  },
  "0xaec7e1f531bb09115103c53ba76829910ec48966": {
    symbol: "BLANK",
    name: "Blank Token",
    decimals: 18,
    address: "0xaec7e1f531bb09115103c53ba76829910ec48966",
    logoURI:
      "https://tokens.1inch.exchange/0xaec7e1f531bb09115103c53ba76829910ec48966.png",
  },
  "0x2216e873ea4282ebef7a02ac5aea220be6391a7c": {
    symbol: "SMOL",
    name: "smol",
    decimals: 18,
    address: "0x2216e873ea4282ebef7a02ac5aea220be6391a7c",
    logoURI:
      "https://tokens.1inch.exchange/0x2216e873ea4282ebef7a02ac5aea220be6391a7c.png",
  },
  "0x92e187a03b6cd19cb6af293ba17f2745fd2357d5": {
    symbol: "DUCK_UNIT",
    name: "Unit Protocol",
    decimals: 18,
    address: "0x92e187a03b6cd19cb6af293ba17f2745fd2357d5",
    logoURI:
      "https://tokens.1inch.exchange/0x92e187a03b6cd19cb6af293ba17f2745fd2357d5.png",
  },
  "0x888888435fde8e7d4c54cab67f206e4199454c60": {
    symbol: "DFX",
    name: "DFX Token",
    decimals: 18,
    address: "0x888888435fde8e7d4c54cab67f206e4199454c60",
    logoURI:
      "https://tokens.1inch.exchange/0x888888435fde8e7d4c54cab67f206e4199454c60.png",
  },
  "0xc4de189abf94c57f396bd4c52ab13b954febefd8": {
    symbol: "B20",
    name: "B.20",
    decimals: 18,
    address: "0xc4de189abf94c57f396bd4c52ab13b954febefd8",
    logoURI:
      "https://tokens.1inch.exchange/0xc4de189abf94c57f396bd4c52ab13b954febefd8.png",
  },
  "0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d": {
    symbol: "TAP",
    name: "Tapmydata",
    decimals: 18,
    address: "0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d",
    logoURI:
      "https://tokens.1inch.exchange/0x7f1f2d3dfa99678675ece1c243d3f7bc3746db5d.png",
  },
  "0x00d1793d7c3aae506257ba985b34c76aaf642557": {
    symbol: "TACO",
    name: "Tacos",
    decimals: 18,
    address: "0x00d1793d7c3aae506257ba985b34c76aaf642557",
    logoURI:
      "https://tokens.1inch.exchange/0x00d1793d7c3aae506257ba985b34c76aaf642557.png",
  },
  "0x19a2cf2a1b2f76e52e2b0c572bd80a95b4fa8643": {
    symbol: "FYZNFT",
    name: "Fyooz NFT",
    decimals: 18,
    address: "0x19a2cf2a1b2f76e52e2b0c572bd80a95b4fa8643",
    logoURI:
      "https://tokens.1inch.exchange/0x19a2cf2a1b2f76e52e2b0c572bd80a95b4fa8643.png",
  },
  "0x92ef4ffbfe0df030837b65d7fccfe1abd6549579": {
    symbol: "SWG",
    name: "Swirge",
    decimals: 18,
    address: "0x92ef4ffbfe0df030837b65d7fccfe1abd6549579",
    logoURI:
      "https://tokens.1inch.exchange/0x92ef4ffbfe0df030837b65d7fccfe1abd6549579.png",
  },
  "0xed30dd7e50edf3581ad970efc5d9379ce2614adb": {
    symbol: "ARCX",
    name: "ARC Governance Token",
    decimals: 18,
    address: "0xed30dd7e50edf3581ad970efc5d9379ce2614adb",
    logoURI:
      "https://tokens.1inch.exchange/0xed30dd7e50edf3581ad970efc5d9379ce2614adb.png",
  },
  "0xcd91538b91b4ba7797d39a2f66e63810b50a33d0": {
    symbol: "STABLEx",
    name: "ARC STABLEx",
    decimals: 18,
    address: "0xcd91538b91b4ba7797d39a2f66e63810b50a33d0",
    logoURI:
      "https://tokens.1inch.exchange/0xcd91538b91b4ba7797d39a2f66e63810b50a33d0.png",
  },
  "0x940a2db1b7008b6c776d4faaca729d6d4a4aa551": {
    symbol: "DUSK",
    name: "Dusk Network",
    decimals: 18,
    address: "0x940a2db1b7008b6c776d4faaca729d6d4a4aa551",
    logoURI:
      "https://tokens.1inch.exchange/0x940a2db1b7008b6c776d4faaca729d6d4a4aa551.png",
  },
  "0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd": {
    symbol: "ETH2x-FLI",
    name: "ETH 2x Flexible Leverage Index",
    decimals: 18,
    address: "0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd",
    logoURI:
      "https://tokens.1inch.exchange/0xaa6e8127831c9de45ae56bb1b0d4d4da6e5665bd.png",
  },
  "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9": {
    symbol: "FTX Token",
    name: "FTT",
    decimals: 18,
    address: "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9",
    logoURI:
      "https://tokens.1inch.exchange/0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9.png",
  },
  "0x037a54aab062628c9bbae1fdb1583c195585fe41": {
    symbol: "LCX",
    name: "LCX",
    decimals: 18,
    address: "0x037a54aab062628c9bbae1fdb1583c195585fe41",
    logoURI:
      "https://tokens.1inch.exchange/0x037a54aab062628c9bbae1fdb1583c195585fe41.png",
  },
  "0x544c42fbb96b39b21df61cf322b5edc285ee7429": {
    symbol: "INSUR",
    name: "InsurAce",
    decimals: 18,
    address: "0x544c42fbb96b39b21df61cf322b5edc285ee7429",
    logoURI:
      "https://tokens.1inch.exchange/0x544c42fbb96b39b21df61cf322b5edc285ee7429.png",
  },
  "0x29239242a83479a4074cb1c9e2a3e6705a4a4455": {
    symbol: "TOZ",
    name: "TOZEX",
    decimals: 18,
    address: "0x29239242a83479a4074cb1c9e2a3e6705a4a4455",
    logoURI:
      "https://tokens.1inch.exchange/0x29239242a83479a4074cb1c9e2a3e6705a4a4455.png",
  },
  "0xf938424f7210f31df2aee3011291b658f872e91e": {
    symbol: "VISR",
    name: "VISOR",
    decimals: 18,
    address: "0xf938424f7210f31df2aee3011291b658f872e91e",
    logoURI:
      "https://tokens.1inch.exchange/0xf938424f7210f31df2aee3011291b658f872e91e.png",
  },
  "0x8185bc4757572da2a610f887561c32298f1a5748": {
    symbol: "ALN",
    name: "Aluna",
    decimals: 18,
    address: "0x8185bc4757572da2a610f887561c32298f1a5748",
    logoURI:
      "https://tokens.1inch.exchange/0x8185bc4757572da2a610f887561c32298f1a5748.png",
  },
  "0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43": {
    symbol: "CGG",
    name: "ChainGuardians Governance Token",
    decimals: 18,
    address: "0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43",
    logoURI:
      "https://tokens.1inch.exchange/0x1fe24f25b1cf609b9c4e7e12d802e3640dfa5e43.png",
  },
  "0x32a7c02e79c4ea1008dd6564b35f131428673c41": {
    symbol: "CRU",
    name: "CRUST",
    decimals: 18,
    address: "0x32a7c02e79c4ea1008dd6564b35f131428673c41",
    logoURI:
      "https://tokens.1inch.exchange/0x32a7c02e79c4ea1008dd6564b35f131428673c41.png",
  },
  "0xac51066d7bec65dc4589368da368b212745d63e8": {
    symbol: "ALICE",
    name: "ALICE",
    decimals: 6,
    address: "0xac51066d7bec65dc4589368da368b212745d63e8",
    logoURI:
      "https://tokens.1inch.exchange/0xac51066d7bec65dc4589368da368b212745d63e8.png",
  },
  "0x1c9922314ed1415c95b9fd453c3818fd41867d0b": {
    symbol: "TOWER",
    name: "TOWER",
    decimals: 18,
    address: "0x1c9922314ed1415c95b9fd453c3818fd41867d0b",
    logoURI:
      "https://tokens.1inch.exchange/0x1c9922314ed1415c95b9fd453c3818fd41867d0b.png",
  },
  "0xa8b61cff52564758a204f841e636265bebc8db9b": {
    symbol: "YIELD",
    name: "Yield Protocol",
    decimals: 18,
    address: "0xa8b61cff52564758a204f841e636265bebc8db9b",
    logoURI:
      "https://tokens.1inch.exchange/0xa8b61cff52564758a204f841e636265bebc8db9b.png",
  },
  "0x850aab69f0e0171a9a49db8be3e71351c8247df4": {
    symbol: "KONO",
    name: "Konomi",
    decimals: 18,
    address: "0x850aab69f0e0171a9a49db8be3e71351c8247df4",
    logoURI:
      "https://tokens.1inch.exchange/0x850aab69f0e0171a9a49db8be3e71351c8247df4.png",
  },
  "0xbae5f2d8a1299e5c4963eaff3312399253f27ccb": {
    symbol: "SOAR",
    name: "SOAR.FI",
    decimals: 9,
    address: "0xbae5f2d8a1299e5c4963eaff3312399253f27ccb",
    logoURI:
      "https://tokens.1inch.exchange/0xbae5f2d8a1299e5c4963eaff3312399253f27ccb.png",
  },
  "0xac3211a5025414af2866ff09c23fc18bc97e79b1": {
    symbol: "DOV",
    name: "DOVU",
    decimals: 18,
    address: "0xac3211a5025414af2866ff09c23fc18bc97e79b1",
    logoURI:
      "https://tokens.1inch.exchange/0xac3211a5025414af2866ff09c23fc18bc97e79b1.png",
  },
  "0x3f4e02741b155f5ce8d6190d294d4f916125b896": {
    symbol: "CX",
    name: "CircleEx",
    decimals: 18,
    address: "0x3f4e02741b155f5ce8d6190d294d4f916125b896",
    logoURI:
      "https://tokens.1inch.exchange/0x3f4e02741b155f5ce8d6190d294d4f916125b896.png",
  },
  "0x73374ea518de7addd4c2b624c0e8b113955ee041": {
    symbol: "JGN",
    name: "Juggernaut DeFi",
    decimals: 18,
    address: "0x73374ea518de7addd4c2b624c0e8b113955ee041",
    logoURI:
      "https://tokens.1inch.exchange/0x73374ea518de7addd4c2b624c0e8b113955ee041.png",
  },
  "0xfad45e47083e4607302aa43c65fb3106f1cd7607": {
    symbol: "HOGE",
    name: "hoge.finance",
    decimals: 9,
    address: "0xfad45e47083e4607302aa43c65fb3106f1cd7607",
    logoURI:
      "https://tokens.1inch.exchange/0xfad45e47083e4607302aa43c65fb3106f1cd7607.png",
  },
  "0xe9a95d175a5f4c9369f3b74222402eb1b837693b": {
    symbol: "NOW",
    name: "ChangeNOW",
    decimals: 8,
    address: "0xe9a95d175a5f4c9369f3b74222402eb1b837693b",
    logoURI:
      "https://tokens.1inch.exchange/0xe9a95d175a5f4c9369f3b74222402eb1b837693b.png",
  },
  "0xeabb8996ea1662cad2f7fb715127852cd3262ae9": {
    symbol: "CNFI",
    name: "Connect Financial",
    decimals: 18,
    address: "0xeabb8996ea1662cad2f7fb715127852cd3262ae9",
    logoURI:
      "https://tokens.1inch.exchange/0xeabb8996ea1662cad2f7fb715127852cd3262ae9.png",
  },
  "0xdea67845a51e24461d5fed8084e69b426af3d5db": {
    symbol: "HTRE",
    name: "HodlTree",
    decimals: 18,
    address: "0xdea67845a51e24461d5fed8084e69b426af3d5db",
    logoURI:
      "https://tokens.1inch.exchange/0xdea67845a51e24461d5fed8084e69b426af3d5db.png",
  },
  "0x8b39b70e39aa811b69365398e0aace9bee238aeb": {
    symbol: "PKF",
    name: "PolkaFoundry",
    decimals: 18,
    address: "0x8b39b70e39aa811b69365398e0aace9bee238aeb",
    logoURI:
      "https://tokens.1inch.exchange/0x8b39b70e39aa811b69365398e0aace9bee238aeb.png",
  },
  "0xb20043f149817bff5322f1b928e89abfc65a9925": {
    symbol: "EXRT",
    name: "EXRT",
    decimals: 8,
    address: "0xb20043f149817bff5322f1b928e89abfc65a9925",
    logoURI:
      "https://tokens.1inch.exchange/0xb20043f149817bff5322f1b928e89abfc65a9925.png",
  },
  "0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9": {
    symbol: "DERI",
    name: "Deri",
    decimals: 18,
    address: "0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9",
    logoURI:
      "https://tokens.1inch.exchange/0xa487bf43cf3b10dffc97a9a744cbb7036965d3b9.png",
  },
  "0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af": {
    symbol: "BCUG",
    name: "Blockchain Cuties Universe Governance Token",
    decimals: 18,
    address: "0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af",
    logoURI:
      "https://tokens.1inch.exchange/0x14da7b27b2e0fedefe0a664118b0c9bc68e2e9af.png",
  },
  "0x8b0e42f366ba502d787bb134478adfae966c8798": {
    symbol: "LABS",
    name: "LABS Group",
    decimals: 18,
    address: "0x8b0e42f366ba502d787bb134478adfae966c8798",
    logoURI:
      "https://tokens.1inch.exchange/0x8b0e42f366ba502d787bb134478adfae966c8798.png",
  },
  "0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d": {
    symbol: "KINE",
    name: "Kine Governance Token",
    decimals: 18,
    address: "0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d",
    logoURI:
      "https://tokens.1inch.exchange/0xcbfef8fdd706cde6f208460f2bf39aa9c785f05d.png",
  },
  "0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54": {
    symbol: "HAPI",
    name: "HAPI",
    decimals: 18,
    address: "0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54",
    logoURI:
      "https://tokens.1inch.exchange/0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54.png",
  },
  "0xc5bddf9843308380375a611c18b50fb9341f502a": {
    symbol: "yveCRV-DAO",
    name: "veCRV-DAO yVault",
    decimals: 18,
    address: "0xc5bddf9843308380375a611c18b50fb9341f502a",
    logoURI:
      "https://tokens.1inch.exchange/0xc5bddf9843308380375a611c18b50fb9341f502a.png",
  },
  "0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af": {
    symbol: "K21",
    name: "k21.kanon.art",
    decimals: 18,
    address: "0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af",
    logoURI:
      "https://tokens.1inch.exchange/0xb9d99c33ea2d86ec5ec6b8a4dd816ebba64404af.png",
  },
  "0x226f7b842e0f0120b7e194d05432b3fd14773a9d": {
    symbol: "UNN",
    name: "UNION Protocol Governance Token",
    decimals: 18,
    address: "0x226f7b842e0f0120b7e194d05432b3fd14773a9d",
    logoURI:
      "https://tokens.1inch.exchange/0x226f7b842e0f0120b7e194d05432b3fd14773a9d.png",
  },
  "0x0ace32f6e87ac1457a5385f8eb0208f37263b415": {
    symbol: "HBT",
    name: "Habitat Token",
    decimals: 10,
    address: "0x0ace32f6e87ac1457a5385f8eb0208f37263b415",
    logoURI:
      "https://tokens.1inch.exchange/0x0ace32f6e87ac1457a5385f8eb0208f37263b415.png",
  },
  "0xa42f266684ac2ad6ecb00df95b1c76efbb6f136c": {
    symbol: "CATE",
    name: "Cash Tech",
    decimals: 18,
    address: "0xa42f266684ac2ad6ecb00df95b1c76efbb6f136c",
    logoURI:
      "https://tokens.1inch.exchange/0xa42f266684ac2ad6ecb00df95b1c76efbb6f136c.png",
  },
  "0xbc4171f45ef0ef66e76f979df021a34b46dcc81d": {
    symbol: "DORA",
    name: "Dorayaki",
    decimals: 18,
    address: "0xbc4171f45ef0ef66e76f979df021a34b46dcc81d",
    logoURI:
      "https://tokens.1inch.exchange/0xbc4171f45ef0ef66e76f979df021a34b46dcc81d.png",
  },
  "0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe": {
    symbol: "erowan",
    name: "erowan",
    decimals: 18,
    address: "0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe",
    logoURI:
      "https://tokens.1inch.exchange/0x07bac35846e5ed502aa91adf6a9e7aa210f2dcbe.png",
  },
  "0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8": {
    symbol: "SNTVT",
    name: "Sentivate",
    decimals: 18,
    address: "0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8",
    logoURI:
      "https://tokens.1inch.exchange/0x7865af71cf0b288b4e7f654f4f7851eb46a2b7f8.png",
  },
  "0xc4c2614e694cf534d407ee49f8e44d125e4681c4": {
    symbol: "CHAIN",
    name: "Chain Games",
    decimals: 18,
    address: "0xc4c2614e694cf534d407ee49f8e44d125e4681c4",
    logoURI:
      "https://tokens.1inch.exchange/0xc4c2614e694cf534d407ee49f8e44d125e4681c4.png",
  },
  "0x000000000000d0151e748d25b766e77efe2a6c83": {
    symbol: "XDEX",
    name: "XDEFI Governance Token",
    decimals: 18,
    address: "0x000000000000d0151e748d25b766e77efe2a6c83",
    logoURI:
      "https://tokens.1inch.exchange/0x000000000000d0151e748d25b766e77efe2a6c83.png",
  },
  "0x8564653879a18c560e7c0ea0e084c516c62f5653": {
    symbol: "UBXT",
    name: "UpBots",
    decimals: 18,
    address: "0x8564653879a18c560e7c0ea0e084c516c62f5653",
    logoURI:
      "https://tokens.1inch.exchange/0x8564653879a18c560e7c0ea0e084c516c62f5653.png",
  },
  "0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24": {
    symbol: "GLQ",
    name: "GraphLinq",
    decimals: 18,
    address: "0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24",
    logoURI:
      "https://tokens.1inch.exchange/0x9f9c8ec3534c3ce16f928381372bfbfbfb9f4d24.png",
  },
  "0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5": {
    symbol: "LYM",
    name: "Lympo tokens",
    decimals: 18,
    address: "0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5",
    logoURI:
      "https://tokens.1inch.exchange/0xc690f7c7fcffa6a82b79fab7508c466fefdfc8c5.png",
  },
  "0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30": {
    symbol: "VIDYA",
    name: "Vidya",
    decimals: 18,
    address: "0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30",
    logoURI:
      "https://tokens.1inch.exchange/0x3d3d35bb9bec23b06ca00fe472b50e7a4c692c30.png",
  },
  "0xf921ae2dac5fa128dc0f6168bf153ea0943d2d43": {
    symbol: "FIRE",
    name: "Fire Protocol",
    decimals: 8,
    address: "0xf921ae2dac5fa128dc0f6168bf153ea0943d2d43",
    logoURI:
      "https://tokens.1inch.exchange/0xf921ae2dac5fa128dc0f6168bf153ea0943d2d43.png",
  },
  "0xfc979087305a826c2b2a0056cfaba50aad3e6439": {
    symbol: "DAFI",
    name: "DAFI Token",
    decimals: 18,
    address: "0xfc979087305a826c2b2a0056cfaba50aad3e6439",
    logoURI:
      "https://tokens.1inch.exchange/0xfc979087305a826c2b2a0056cfaba50aad3e6439.png",
  },
  "0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6": {
    symbol: "ODDZ",
    name: "OddzToken",
    decimals: 18,
    address: "0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6",
    logoURI:
      "https://tokens.1inch.exchange/0xcd2828fc4d8e8a0ede91bb38cf64b1a81de65bf6.png",
  },
  "0x72630b1e3b42874bf335020ba0249e3e9e47bafc": {
    symbol: "EPAN",
    name: "Paypolitan Token",
    decimals: 18,
    address: "0x72630b1e3b42874bf335020ba0249e3e9e47bafc",
    logoURI:
      "https://tokens.1inch.exchange/0x72630b1e3b42874bf335020ba0249e3e9e47bafc.png",
  },
  "0xe3cb486f3f5c639e98ccbaf57d95369375687f80": {
    symbol: "renDGB",
    name: "renDGB",
    decimals: 8,
    address: "0xe3cb486f3f5c639e98ccbaf57d95369375687f80",
    logoURI:
      "https://tokens.1inch.exchange/0x31a0d1a199631d244761eeba67e8501296d2e383.png",
  },
  "0x56a980328aee33aabb540a02e002c8323326bf36": {
    symbol: "POODL",
    name: "POODLE",
    decimals: 9,
    address: "0x56a980328aee33aabb540a02e002c8323326bf36",
    logoURI:
      "https://tokens.1inch.exchange/0x56a980328aee33aabb540a02e002c8323326bf36.png",
  },
  "0x0ace20a35ee382bda90d1d93cee65f5970fc01c8": {
    symbol: "CHIP",
    name: "Chip",
    decimals: 18,
    address: "0x0ace20a35ee382bda90d1d93cee65f5970fc01c8",
    logoURI:
      "https://tokens.1inch.exchange/0x0ace20a35ee382bda90d1d93cee65f5970fc01c8.png",
  },
  "0x3883f5e181fccaf8410fa61e12b59bad963fb645": {
    symbol: "THETA",
    name: "Theta Token",
    decimals: 18,
    address: "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
    logoURI:
      "https://tokens.1inch.exchange/0x3883f5e181fccaf8410fa61e12b59bad963fb645.png",
  },
  "0xa92e7c82b11d10716ab534051b271d2f6aef7df5": {
    symbol: "ARA",
    name: "Ara Token",
    decimals: 18,
    address: "0xa92e7c82b11d10716ab534051b271d2f6aef7df5",
    logoURI:
      "https://tokens.1inch.exchange/0xa92e7c82b11d10716ab534051b271d2f6aef7df5.png",
  },
  "0x5dc02ea99285e17656b8350722694c35154db1e8": {
    symbol: "BOND_finance",
    name: "bonded.finance",
    decimals: 8,
    address: "0x5dc02ea99285e17656b8350722694c35154db1e8",
    logoURI:
      "https://tokens.1inch.exchange/0x5dc02ea99285e17656b8350722694c35154db1e8.png",
  },
  "0xc96c1609a1a45ccc667b2b7fa6508e29617f7b69": {
    symbol: "2GT",
    name: "2GT_token",
    decimals: 18,
    address: "0xc96c1609a1a45ccc667b2b7fa6508e29617f7b69",
    logoURI:
      "https://tokens.1inch.exchange/0xc96c1609a1a45ccc667b2b7fa6508e29617f7b69.png",
  },
  "0xc3d088842dcf02c13699f936bb83dfbbc6f721ab": {
    symbol: "vETH",
    name: "Voucher Ethereum",
    decimals: 18,
    address: "0xc3d088842dcf02c13699f936bb83dfbbc6f721ab",
    logoURI:
      "https://tokens.1inch.exchange/0xc3d088842dcf02c13699f936bb83dfbbc6f721ab.png",
  },
  "0xca0e7269600d353f70b14ad118a49575455c0f2f": {
    symbol: "AMLT",
    name: "AMLT",
    decimals: 18,
    address: "0xca0e7269600d353f70b14ad118a49575455c0f2f",
    logoURI:
      "https://tokens.1inch.exchange/0xca0e7269600d353f70b14ad118a49575455c0f2f.png",
  },
  "0xceb286c9604c542d3cc08b41aa6c9675b078a832": {
    symbol: "VTX",
    name: "Vortex DeFi",
    decimals: 18,
    address: "0xceb286c9604c542d3cc08b41aa6c9675b078a832",
    logoURI:
      "https://tokens.1inch.exchange/0xceb286c9604c542d3cc08b41aa6c9675b078a832.png",
  },
  "0xba4cfe5741b357fa371b506e5db0774abfecf8fc": {
    symbol: "vVSP",
    name: "vVSP pool",
    decimals: 18,
    address: "0xba4cfe5741b357fa371b506e5db0774abfecf8fc",
    logoURI:
      "https://tokens.1inch.exchange/0x1b40183efb4dd766f11bda7a7c3ad8982e998421.png",
  },
  "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b": {
    symbol: "TRIBE",
    name: "Tribe",
    decimals: 18,
    address: "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
    logoURI:
      "https://tokens.1inch.exchange/0xc7283b66eb1eb5fb86327f08e1b5816b0720212b.png",
  },
  "0x956f47f50a910163d8bf957cf5846d573e7f87ca": {
    symbol: "FEI",
    name: "Fei USD",
    decimals: 18,
    address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
    logoURI:
      "https://tokens.1inch.exchange/0x956f47f50a910163d8bf957cf5846d573e7f87ca.png",
  },
  "0x70e8de73ce538da2beed35d14187f6959a8eca96": {
    symbol: "XSGD",
    name: "XSGD",
    decimals: 6,
    address: "0x70e8de73ce538da2beed35d14187f6959a8eca96",
    logoURI:
      "https://tokens.1inch.exchange/0x70e8de73ce538da2beed35d14187f6959a8eca96.png",
  },
  "0x626e8036deb333b408be468f951bdb42433cbf18": {
    symbol: "AIOZ",
    name: "AIOZ Network",
    decimals: 18,
    address: "0x626e8036deb333b408be468f951bdb42433cbf18",
    logoURI:
      "https://tokens.1inch.exchange/0x626e8036deb333b408be468f951bdb42433cbf18.png",
  },
  "0xa0cf46eb152656c7090e769916eb44a138aaa406": {
    symbol: "SPH",
    name: "Spheroid",
    decimals: 18,
    address: "0xa0cf46eb152656c7090e769916eb44a138aaa406",
    logoURI:
      "https://tokens.1inch.exchange/0xa0cf46eb152656c7090e769916eb44a138aaa406.png",
  },
  "0x1796ae0b0fa4862485106a0de9b654efe301d0b2": {
    symbol: "PMON",
    name: "Polkamon",
    decimals: 18,
    address: "0x1796ae0b0fa4862485106a0de9b654efe301d0b2",
    logoURI:
      "https://tokens.1inch.exchange/0x1796ae0b0fa4862485106a0de9b654efe301d0b2.png",
  },
  "0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4": {
    symbol: "SYLO",
    name: "Sylo",
    decimals: 18,
    address: "0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4",
    logoURI:
      "https://tokens.1inch.exchange/0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4.png",
  },
  "0xdb0acc14396d108b3c5574483acb817855c9dc8d": {
    symbol: "EMB",
    name: "Emblem",
    decimals: 8,
    address: "0xdb0acc14396d108b3c5574483acb817855c9dc8d",
    logoURI:
      "https://tokens.1inch.exchange/0xdb0acc14396d108b3c5574483acb817855c9dc8d.png",
  },
  "0x1735db6ab5baa19ea55d0adceed7bcdc008b3136": {
    symbol: "URQA",
    name: "UREEQA Token",
    decimals: 18,
    address: "0x1735db6ab5baa19ea55d0adceed7bcdc008b3136",
    logoURI:
      "https://tokens.1inch.exchange/0x1735db6ab5baa19ea55d0adceed7bcdc008b3136.png",
  },
  "0x99295f1141d58a99e939f7be6bbe734916a875b8": {
    symbol: "LPL",
    name: "LinkPool",
    decimals: 18,
    address: "0x99295f1141d58a99e939f7be6bbe734916a875b8",
    logoURI:
      "https://tokens.1inch.exchange/0x99295f1141d58a99e939f7be6bbe734916a875b8.png",
  },
  "0xe1c7e30c42c24582888c758984f6e382096786bd": {
    symbol: "XCUR",
    name: "Curate",
    decimals: 8,
    address: "0xe1c7e30c42c24582888c758984f6e382096786bd",
    logoURI:
      "https://tokens.1inch.exchange/0xe1c7e30c42c24582888c758984f6e382096786bd.png",
  },
  "0xff75ced57419bcaebe5f05254983b013b0646ef5": {
    symbol: "COOK",
    name: "Cook Token",
    decimals: 18,
    address: "0xff75ced57419bcaebe5f05254983b013b0646ef5",
    logoURI:
      "https://tokens.1inch.exchange/0xff75ced57419bcaebe5f05254983b013b0646ef5.png",
  },
  "0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099": {
    symbol: "CELL",
    name: "Cellframe Token",
    decimals: 18,
    address: "0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099",
    logoURI:
      "https://tokens.1inch.exchange/0x26c8afbbfe1ebaca03c2bb082e69d0476bffe099.png",
  },
  "0x5b09a0371c1da44a8e24d36bf5deb1141a84d875": {
    symbol: "MAD",
    name: "MADToken",
    decimals: 18,
    address: "0x5b09a0371c1da44a8e24d36bf5deb1141a84d875",
    logoURI:
      "https://tokens.1inch.exchange/0x5b09a0371c1da44a8e24d36bf5deb1141a84d875.png",
  },
  "0xc834fa996fa3bec7aad3693af486ae53d8aa8b50": {
    symbol: "CONV",
    name: "Convergence",
    decimals: 18,
    address: "0xc834fa996fa3bec7aad3693af486ae53d8aa8b50",
    logoURI:
      "https://tokens.1inch.exchange/0xc834fa996fa3bec7aad3693af486ae53d8aa8b50.png",
  },
  "0x106538cc16f938776c7c180186975bca23875287": {
    symbol: "BASv2",
    name: "BASv2",
    decimals: 18,
    address: "0x106538cc16f938776c7c180186975bca23875287",
    logoURI:
      "https://tokens.1inch.exchange/0x106538cc16f938776c7c180186975bca23875287.png",
  },
  "0x3505f494c3f0fed0b594e01fa41dd3967645ca39": {
    symbol: "SWM",
    name: "SWARM",
    decimals: 18,
    address: "0x3505f494c3f0fed0b594e01fa41dd3967645ca39",
    logoURI:
      "https://tokens.1inch.exchange/0x3505f494c3f0fed0b594e01fa41dd3967645ca39.png",
  },
  "0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9": {
    symbol: "EDDA",
    name: "EDDA",
    decimals: 18,
    address: "0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9",
    logoURI:
      "https://tokens.1inch.exchange/0xfbbe9b1142c699512545f47937ee6fae0e4b0aa9.png",
  },
  "0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7": {
    symbol: "TIDAL",
    name: "Tidal Token",
    decimals: 18,
    address: "0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7",
    logoURI:
      "https://tokens.1inch.exchange/0x29cbd0510eec0327992cd6006e63f9fa8e7f33b7.png",
  },
  "0xb78b3320493a4efaa1028130c5ba26f0b6085ef8": {
    symbol: "DRC",
    name: "Dracula Token",
    decimals: 18,
    address: "0xb78b3320493a4efaa1028130c5ba26f0b6085ef8",
    logoURI:
      "https://tokens.1inch.exchange/0xb78b3320493a4efaa1028130c5ba26f0b6085ef8.png",
  },
  "0x55296f69f40ea6d20e478533c15a6b08b654e758": {
    symbol: "XYO",
    name: "XY Oracle",
    decimals: 18,
    address: "0x55296f69f40ea6d20e478533c15a6b08b654e758",
    logoURI:
      "https://tokens.1inch.exchange/0x55296f69f40ea6d20e478533c15a6b08b654e758.png",
  },
} as Record<string, Token>;
for (const [_, value] of Object.entries(ALL_TOKENS)) {
  ALL_TOKENS[utils.getAddress(value.address)] = value;
}
