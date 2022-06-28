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
  [ChainId.TESTNET]: '0x88A9929Ab7329bf8ED1C6b37D559344d46184932',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x8aE558cb74414B01c75FA03297a9bE13b13cABE8',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const FACTORY_ADDRESS = {
  [ChainId.TESTNET]: '0xb300C66247Dc287212De67f962Dc816EB0e07D45',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x2ec2d1fC675F7a94a05233f00f3D4b2f362D34FE',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const INIT_CODE_HASH = {
  [ChainId.TESTNET]: '0x0f027b89f245ef5d0afabf8e7f8fa4ba3bd7d22d6931d627ea006047b4a3ed9b',
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x0f027b89f245ef5d0afabf8e7f8fa4ba3bd7d22d6931d627ea006047b4a3ed9b',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_FACTORY_ADDRESS = {
  [ChainId.TESTNET]: "0x3293164E861C206f472b3aca67ccB725f7bE001d",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0x0277962b0177b6F210b55b03781Bb7cf976b3e27',
  [ChainId.OPTIMISM_MAINNET]: ''}

export const ORDER_BOOK_INIT_CODE_HASH = {
  [ChainId.TESTNET]: "0xec59deb3ba69d7bbf5d72d8e269271314c49179b5b8ac80c32eff04a54b330cb",
  [ChainId.MAINNET]: '',
  [ChainId.OPTIMISM_TESTNET]: '0xec59deb3ba69d7bbf5d72d8e269271314c49179b5b8ac80c32eff04a54b330cb',
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
