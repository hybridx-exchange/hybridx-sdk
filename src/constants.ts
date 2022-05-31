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
  [ChainId.TESTNET]: '0x35bAFF0DC208db7e0701fc16791E5f6871443470',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0xd138C850ADBC2A22846edDb32aaA49E1bE7A8328',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const FACTORY_ADDRESS = {
  [ChainId.TESTNET]: '0x8b466f281C2067a5F40A42daE43350b6A35a0b05',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0xB45070DFD2209eAA070d0103DBA4A8eafa98B600',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const INIT_CODE_HASH = {
  [ChainId.TESTNET]: '0x581ef0ccd0c15ef0a380cd82bca41249ca81e3c415fdb4fc8f6977e7d4f8c8fa',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x0f027b89f245ef5d0afabf8e7f8fa4ba3bd7d22d6931d627ea006047b4a3ed9b',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_FACTORY_ADDRESS = {
  [ChainId.TESTNET]: "0xA9a06cf12AE3514b101D426797D190b79B335Eb2",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0xb0E2E28CA39805d7fe31E9588ff0d04f3F3A10d8',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0x1da881d372a03ec2bce6e0bdc6c5d5696b7e7c47e8632d0bdfb6eb52d80abb48",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x98e1887b07cfd3ea509868639339574d566b15b7ac2765aec4742be87de6a67a',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_NFT_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0x374d19331443638013ff34b50550a36e2622d2839fe244467678500262d11f40",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x374d19331443638013ff34b50550a36e2622d2839fe244467678500262d11f40',
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
