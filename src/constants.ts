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

export const CONFIG_ADDRESS = '0x5bd2BC121cF0636f016C6B4C389472fdfB6bBef5'
export const FACTORY_ADDRESS = '0xD2B65df7F2478166F593EC61FB31a0643E4675c4'
export const INIT_CODE_HASH = '0x47244c9f4c6fa4b21312ac4778654ca45d23d9ae1c6643147a0ed4ff0f658b4b'
export const ORDER_BOOK_FACTORY_ADDRESS = '0xA46b25eac2FBF060c8e530cCa204Cd4EADBC9abF'
export const ORDER_BOOK_INIT_CODE_HASH = '0x6216832c27b9f40d65b9e27bc27663a478fa8a444913c4b12bb713c0eb30c66d'
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
