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

export const UTILS_ADDRESS = '0x1BfF64408d1BD6d9fb0988Ee41EacB4f185F9781'

export const FACTORY_ADDRESS = '0xba63a10C9668163E37d519e96bD7c6257Bc216A2'

export const INIT_CODE_HASH = '0xacfef91245969f781c469b1c4b6104aa9f6824078c4aa15fa077b9be3ef8d48f'

export const ORDER_BOOK_FACTORY_ADDRESS = "0x5Bd3891130852F22bc6A6edd4d24AFAeF3896C10"

export const ORDER_BOOK_INIT_CODE_HASH = "0x14d1c6e69a02b69fc8218cfe7ce741eb1f1e768236ebb740904b29ee6e0c6055"

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
