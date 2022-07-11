import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 42262,
  TESTNET = 42261,
  OPTIMISM_MAINNET = 10,
  OPTIMISM_TESTNET = 69
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

export const CONFIG_ADDRESS = {
  [ChainId.TESTNET]: '0x14C3A2e5f76d2DFC3678a69Cd6ceA6d5266b02F8',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x081Bbd1ab99b0Af97E3246399B3e7437C1Fa8B39',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const FACTORY_ADDRESS = {
  [ChainId.TESTNET]: '0x400aA338753801b436D8D29Cc78eA929914c2B4A',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x0C763693A490b8a87bd2d404972316cBCF0D0Ee9',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const INIT_CODE_HASH = {
  [ChainId.TESTNET]: '0x787d18a054938143dbeedee33fbadaa352a08763cfe1434541a254628613fa57',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x787d18a054938143dbeedee33fbadaa352a08763cfe1434541a254628613fa57',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_FACTORY_ADDRESS = {
  [ChainId.TESTNET]: "0x760d04637FF9A1A5565390d6bF78622A9509f0A7",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x7A9218a1Dd61a98B02004E70E0c27bf3349F8f40',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0xeab94f1c9fe3292e1dfc186887843bb31dccf3b40020e7544bf9c21074d2ee0e",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0xeab94f1c9fe3292e1dfc186887843bb31dccf3b40020e7544bf9c21074d2ee0e',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_NFT_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0x7c73d2a7b167623fd008c19e62925163422f015f70ac647a3327d011ef3d1c71",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x7c73d2a7b167623fd008c19e62925163422f015f70ac647a3327d011ef3d1c71',
  [ChainId.OPTIMISM_MAINNET]: ''}

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
