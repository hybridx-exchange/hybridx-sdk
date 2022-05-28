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

export const FACTORY_ADDRESS = {
  [ChainId.TESTNET]: '0xbeE70DD5ac7585A5FA301bd70a954aA62b47bD02',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0xc649E43D6804DDEd7C86ebcE3E0dce5C35E9747D',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const INIT_CODE_HASH = {
  [ChainId.TESTNET]: '0xf098c0393b36cedf23c63f959d84d02bb38a719c10c9f00d1920eb1c3b6182a5',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x56dbf4cdccbabb0ca70044b97826926ac7a15e96176b8aa08597bf2db3888d37',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_FACTORY_ADDRESS = {
  [ChainId.TESTNET]: "0xA5117D6b455929E1746B43094Fd428C613798826",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0xADE1BFC51583A65039717A2115e4ae246934c9a4',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0xf1bc35cfeaed6039585da46ce8683019e50170eb678d7c5169bea1ea476def5e",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x7bf7b81d62e2d81627067202acb75c43b0144a088886d3cd99c8dd61315700c7',
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
