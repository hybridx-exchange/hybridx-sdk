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
  [ChainId.TESTNET]: '0x76941768Ac0dA4556AF164FaB6f4f8872cD17a6B',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x0A55c03E8Fe8187eA09aFe5990187c5c24abA5b6',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const FACTORY_ADDRESS = {
  [ChainId.TESTNET]: '0x6B1a81fe2421bC91fAb73404dd5d9693131d655c',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x6C1fCB98F398433d6587D0E680Ea1f886A98Ae35',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const INIT_CODE_HASH = {
  [ChainId.TESTNET]: '0x10ec96a1eb83e433f54a4add7fa2029166c47913d99b5869850c4eceb7ff8b8a',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x10ec96a1eb83e433f54a4add7fa2029166c47913d99b5869850c4eceb7ff8b8a',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_FACTORY_ADDRESS = {
  [ChainId.TESTNET]: "0x88C51ffa5f2f9f8Bb09D68e9a50a79016DAd7DEB",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0xe5fFAeE824117c39b71Cadb5A93e407d31E11638',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0xcb9507ca41f047c42f193ba70c278f6d996ad40b326768d1f67140cdda05026e",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0xcb9507ca41f047c42f193ba70c278f6d996ad40b326768d1f67140cdda05026e',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_UTIL_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0x2dfd8fb1cb832db898d672929a1c3d35db83ca73cb06f2b3072c3a855fa50916",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x2dfd8fb1cb832db898d672929a1c3d35db83ca73cb06f2b3072c3a855fa50916',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_NFT_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0xb5b5f8830fdc95da64e055a922905c77789e74048bb66023ac0fd3d7c3bfc2f7",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0xb5b5f8830fdc95da64e055a922905c77789e74048bb66023ac0fd3d7c3bfc2f7',
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
