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

export const CONFIG_ADDRESS = '0x661C5a96e72FB6A7AADaa02e3b1Df3c97A944426'
export const FACTORY_ADDRESS = '0xC3da6FA6658B60A7A40DD09a84fd5B7ad37611cE'
export const INIT_CODE_HASH = '0x8d3e9891ee86bca65d9eb79bdd5d6584e20c128dacac7df8e858c4c98c55ee90'
export const ORDER_BOOK_FACTORY_ADDRESS = '0xabFfBeA388471Bdf39c1cD168B50B5D2a21E06d1'
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
