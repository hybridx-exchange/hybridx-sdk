import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 42262,
  TESTNET = 42261
}

export enum SwapType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum TradeType {
  LIMIT_BUY = 1,
  LIMIT_SELL= 2
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const CONFIG_ADDRESS = '0x35bAFF0DC208db7e0701fc16791E5f6871443470'
export const FACTORY_ADDRESS = '0x8b466f281C2067a5F40A42daE43350b6A35a0b05'
export const INIT_CODE_HASH = '0x581ef0ccd0c15ef0a380cd82bca41249ca81e3c415fdb4fc8f6977e7d4f8c8fa'
export const ORDER_BOOK_FACTORY_ADDRESS = '0xA9a06cf12AE3514b101D426797D190b79B335Eb2'
export const ORDER_BOOK_INIT_CODE_HASH = '0x1da881d372a03ec2bce6e0bdc6c5d5696b7e7c47e8632d0bdfb6eb52d80abb48'
export const ORDER_NFT_INIT_CODE_HASH = '0x374d19331443638013ff34b50550a36e2622d2839fe244467678500262d11f40'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
