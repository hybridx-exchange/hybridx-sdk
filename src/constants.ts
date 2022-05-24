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

export const CONFIG_ADDRESS = '0xbF295b0005027B532D2066aC85C9A4dd6D057752'
export const FACTORY_ADDRESS = '0x1D64F0CD7e11E859F688bA98Ea7B799916293929'
export const INIT_CODE_HASH = '0x37a625fde40d52719034b4eff213d5f81f91e5d4d7f0f71878cf4a02b4db9348'
export const ORDER_BOOK_FACTORY_ADDRESS = '0x03876c548Ac5a3bCeD1a7C2627E7894540450831'
export const ORDER_BOOK_INIT_CODE_HASH = '0xa6e439b6721897ec0f440462b1b09316d7ca46ba3a46bdfe0520752e20b009a9'
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
