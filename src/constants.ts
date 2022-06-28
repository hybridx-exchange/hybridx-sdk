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
  [ChainId.TESTNET]: '0x0c6818f62990E136d2Ba6Eb2a1C5d6DC1C18b6C7',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x5E79465FF394aF42e3db64E2015fcc13927080ff',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const FACTORY_ADDRESS = {
  [ChainId.TESTNET]: '0x2F365729Cd0931F4bb86B4ded320D8678215F9d1',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x0D992D2E6C6b727b3F71aE0A16160e3346610ca1',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const INIT_CODE_HASH = {
  [ChainId.TESTNET]: '0x0f027b89f245ef5d0afabf8e7f8fa4ba3bd7d22d6931d627ea006047b4a3ed9b',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x0f027b89f245ef5d0afabf8e7f8fa4ba3bd7d22d6931d627ea006047b4a3ed9b',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_FACTORY_ADDRESS = {
  [ChainId.TESTNET]: "0x749a7ADBF18Fff3347aC09dc13b9aD05A3C51059",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x3655B42a4e1d0DeC6050EA56459CF7174a660cc7',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0xec59deb3ba69d7bbf5d72d8e269271314c49179b5b8ac80c32eff04a54b330cb",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0xec59deb3ba69d7bbf5d72d8e269271314c49179b5b8ac80c32eff04a54b330cb',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_NFT_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0x9b85efb66c7f5edcd13b4edd3ffac2217754a28c049e4a4426930bac34cd001d",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x9b85efb66c7f5edcd13b4edd3ffac2217754a28c049e4a4426930bac34cd001d',
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
