import { TokenAmount } from './fractions/tokenAmount'
import { Token } from './token'
import { keccak256, pack } from '@ethersproject/solidity'
import { getCreate2Address } from '@ethersproject/address'
import {
  BigintIsh,
  ORDER_BOOK_FACTORY_ADDRESS,
  ORDER_BOOK_INIT_CODE_HASH,
  ORDER_NFT_INIT_CODE_HASH,
  TradeType
} from '../constants'
import { Order } from './fractions/order';
import JSBI from "jsbi";
import { parseBigintIsh } from "../utils";
import { parseUnits } from "@ethersproject/units";

let ORDERBOOK_ADDRESS_CACHE: { [token0Address: string]: { [token1Address: string]: string } } = {}
let ORDERNFT_ADDRESS_CACHE: { [token0Address: string]: { [token1Address: string]: string } } = {}

export class OrderBook {
  public readonly exist: boolean
  public readonly baseToken: TokenAmount
  public readonly quoteToken: TokenAmount
  public readonly baseSignificantDigits: number
  public readonly quoteSignificantDigits: number
  public readonly orderBookAddress: String
  public readonly priceStep: BigintIsh
  public readonly priceStepFactor: BigintIsh
  public readonly protocolFeeRate: BigintIsh
  public readonly subsidyFeeRate: BigintIsh
  public readonly curPrice: TokenAmount
  public readonly buyOrders: Order[]
  public readonly sellOrders: Order[]

  public constructor(exist: boolean, baseToken: TokenAmount, quoteToken: TokenAmount,
                     baseSignificantDigits: number, quoteSignificantDigits: number,
                     priceStep: BigintIsh, priceStepFactor: BigintIsh,
                     protocolFeeRate: BigintIsh, subsidyFeeRate: BigintIsh,
                     curPrice: TokenAmount,
                     buyOrders: Order[], sellOrders: Order[]) {
    this.exist = exist
    this.orderBookAddress = OrderBook.getAddress(baseToken.token, quoteToken.token)
    this.baseToken = baseToken
    this.quoteToken = quoteToken
    this.baseSignificantDigits = baseSignificantDigits < baseToken.token.decimals ?
        baseSignificantDigits : baseToken.token.decimals
    this.quoteSignificantDigits = quoteSignificantDigits < quoteToken.token.decimals ?
        quoteSignificantDigits : quoteToken.token.decimals
    this.priceStepFactor = priceStepFactor
    this.priceStep = priceStep
    this.protocolFeeRate = protocolFeeRate
    this.subsidyFeeRate = subsidyFeeRate
    this.curPrice = curPrice
    this.buyOrders = buyOrders
    this.sellOrders = sellOrders
  }

  public static getAddress(tokenA: Token, tokenB: Token): string {
    const tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA] // does safety checks
    const chainId = tokenA.chainId
    if (ORDERBOOK_ADDRESS_CACHE?.[tokens[0].address]?.[tokens[1].address] === undefined) {
      ORDERBOOK_ADDRESS_CACHE = {
        ...ORDERBOOK_ADDRESS_CACHE,
        [tokens[0].address]: {
          ...ORDERBOOK_ADDRESS_CACHE?.[tokens[0].address],
          [tokens[1].address]: getCreate2Address(
              ORDER_BOOK_FACTORY_ADDRESS[chainId],
              keccak256(['bytes'], [pack(['address', 'address'],
                  [tokens[0].address, tokens[1].address])]),
              ORDER_BOOK_INIT_CODE_HASH[chainId]
          )
        }
      }
    }

    return ORDERBOOK_ADDRESS_CACHE[tokens[0].address][tokens[1].address]
  }

  public static getNFTAddress(tokenA: Token, tokenB: Token): string {
    const tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA] // does safety checks
    const chainId = tokenA.chainId
    if (ORDERNFT_ADDRESS_CACHE?.[tokens[0].address]?.[tokens[1].address] === undefined) {
      ORDERNFT_ADDRESS_CACHE = {
        ...ORDERNFT_ADDRESS_CACHE,
        [tokens[0].address]: {
          ...ORDERNFT_ADDRESS_CACHE?.[tokens[0].address],
          [tokens[1].address]: getCreate2Address(
              ORDER_BOOK_FACTORY_ADDRESS[chainId],
              keccak256(['bytes'], [pack(['address', 'address', 'address'],
                  [OrderBook.getAddress(tokenA, tokenB), tokens[0].address, tokens[1].address])]),
              ORDER_NFT_INIT_CODE_HASH[chainId]
          )
        }
      }
    }

    return ORDERNFT_ADDRESS_CACHE[tokens[0].address][tokens[1].address]
  }

  public static culPrice(baseAmount?: TokenAmount, quoteAmount?: TokenAmount) : TokenAmount | undefined {
    if (baseAmount && quoteAmount) {
      const baseRaw = parseBigintIsh(baseAmount.raw)
      const quoteRaw = parseBigintIsh(quoteAmount.raw)
      const decimalRaw = parseBigintIsh(parseUnits('1', baseAmount.token.decimals).toString())
      const priceToken = quoteAmount.token
      const priceRaw = JSBI.divide(JSBI.multiply(quoteRaw, decimalRaw), baseRaw)
      return new TokenAmount(priceToken, priceRaw)
    }

    return undefined
  }

  public getPriceStep(parsedPrice: BigintIsh) : BigintIsh {
    if (!this.priceStep || JSBI.EQ(parseBigintIsh(this.priceStep), parseBigintIsh("0"))) {
      return JSBI.lessThanOrEqual(parseBigintIsh(parsedPrice), JSBI.BigInt(10000)) ? JSBI.BigInt(10000) :
          JSBI.multiply(JSBI.divide(parseBigintIsh(parsedPrice), JSBI.BigInt(10000)),  parseBigintIsh(this.priceStepFactor))
    }

    return this.priceStep
  }

  public getPriceStepDecimal() : number {
    return this.quoteSignificantDigits
  }

  public getMinAmountDecimal(tradeType: TradeType) : number {
    if (tradeType === TradeType.LIMIT_BUY) {
      return this.quoteSignificantDigits
    } else if (tradeType === TradeType.LIMIT_SELL) {
      return this.baseSignificantDigits
    }

    return 18
  }

  public getMinOutputAmountDecimal(tradeType: TradeType) : number {
    if (tradeType === TradeType.LIMIT_SELL) {
      return this.quoteSignificantDigits
    } else if (tradeType === TradeType.LIMIT_BUY) {
      return this.baseSignificantDigits
    }

    return 18
  }
}
