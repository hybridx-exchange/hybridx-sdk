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
  [ChainId.TESTNET]: '0x99296e98233A7ba003aCdF9044c5237927919097',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x7470a81Afdc59671C54b19e02Ab9D3F6F1Ab8e41',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const FACTORY_ADDRESS = {
  [ChainId.TESTNET]: '0x4c0450b21101A6A55d02b422DD8Ec9C38E528BDA',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0xcfCeC2E2ba0C1aECCB84f11Bce8122202679BAf9',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const INIT_CODE_HASH = {
  [ChainId.TESTNET]: '0x761db03b128986d9de96ad937983380bd6d9d03baab38a815c6297e1e84be1d6',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x761db03b128986d9de96ad937983380bd6d9d03baab38a815c6297e1e84be1d6',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_FACTORY_ADDRESS = {
  [ChainId.TESTNET]: "0x5Ee60256BB7D5584B066f4f7D599B1a306e72645",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x63e8F0174f8B6d308207E807a58a1233aBD5d33c',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0x93514dcffd61419e14b4921d096e97eaea77a5949d141023bd4d451002e10639",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x93514dcffd61419e14b4921d096e97eaea77a5949d141023bd4d451002e10639',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_NFT_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0x82ce9b08e446dea973552952f7b2b45b8f03090e641ec564679ae7f6930439b1",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x82ce9b08e446dea973552952f7b2b45b8f03090e641ec564679ae7f6930439b1',
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
