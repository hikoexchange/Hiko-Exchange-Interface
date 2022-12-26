import { Currency, currencyEquals, JSBI, Price, WETH } from '@daoswapdex/daoswap-dex-sdk'
import { useMemo } from 'react'
import { USDT, DAO } from '../constants/tokensInfo'
import { PairState, usePairs } from '../data/Reserves'
import { useActiveWeb3React } from '../hooks'
import { wrappedCurrency } from './wrappedCurrency'

/**
 * Returns the price in USDT of the input currency
 * @param currency currency to compute the USDT price of
 */
export default function useUSDTPrice(currency?: Currency): Price | undefined {
  const { chainId } = useActiveWeb3React()
  const wrapped = wrappedCurrency(currency, chainId)
  const tokenPairs: [Currency | undefined, Currency | undefined][] = useMemo(
    () => [
      [
        chainId && wrapped && currencyEquals(WETH[chainId], wrapped) ? undefined : currency,
        chainId ? WETH[chainId] : undefined
      ],
      [chainId && wrapped?.equals(USDT[chainId]) ? undefined : wrapped, chainId ? USDT[chainId] : undefined],
      [chainId ? WETH[chainId] : undefined, chainId ? USDT[chainId] : undefined],
      [chainId ? DAO[chainId] : undefined, chainId ? USDT[chainId] : undefined]
    ],
    [chainId, currency, wrapped]
  )
  const [
    [ethPairState, ethPair],
    [usdtPairState, usdtPair],
    [usdtEthPairState, usdtEthPair],
    [daoUsdtPairState, daoUsdtPair]
  ] = usePairs(tokenPairs)

  return useMemo(() => {
    if (!currency || !wrapped || !chainId) {
      return undefined
    }
    // handle weth/eth
    if (wrapped.equals(WETH[chainId])) {
      if (usdtPair) {
        const price = usdtPair.priceOf(WETH[chainId])
        return new Price(currency, USDT[chainId], price.denominator, price.numerator)
      } else {
        return undefined
      }
    }
    // handle usdt
    if (wrapped.equals(USDT[chainId])) {
      return new Price(USDT[chainId], USDT[chainId], '1', '1')
    }

    // handle dao-usdt return dao price
    if (
      usdtPairState === PairState.EXISTS &&
      usdtPair &&
      daoUsdtPairState === PairState.EXISTS &&
      daoUsdtPair &&
      wrapped.address.toLowerCase() === DAO[chainId].address.toLowerCase()
    ) {
      if (daoUsdtPair.reserveOf(DAO[chainId]).greaterThan('0') && usdtPair.reserveOf(USDT[chainId]).greaterThan('0')) {
        return daoUsdtPair.priceOf(DAO[chainId])
      }
    }

    const ethPairETHAmount = ethPair?.reserveOf(WETH[chainId])
    const ethPairETHUSDTValue: JSBI =
      ethPairETHAmount && usdtEthPair ? usdtEthPair.priceOf(WETH[chainId]).quote(ethPairETHAmount).raw : JSBI.BigInt(0)

    // all other tokens
    // first try the usdt pair
    if (
      usdtPairState === PairState.EXISTS &&
      usdtPair &&
      usdtPair.reserveOf(USDT[chainId]).greaterThan(ethPairETHUSDTValue)
    ) {
      const price = usdtPair.priceOf(wrapped)
      return new Price(currency, USDT[chainId], price.denominator, price.numerator)
    }
    if (ethPairState === PairState.EXISTS && ethPair && usdtEthPairState === PairState.EXISTS && usdtEthPair) {
      if (usdtEthPair.reserveOf(USDT[chainId]).greaterThan('0') && ethPair.reserveOf(WETH[chainId]).greaterThan('0')) {
        const ethUsdtPrice = usdtEthPair.priceOf(USDT[chainId])
        const currencyEthPrice = ethPair.priceOf(WETH[chainId])
        const usdtPrice = ethUsdtPrice.multiply(currencyEthPrice).invert()
        return new Price(currency, USDT[chainId], usdtPrice.denominator, usdtPrice.numerator)
      }
    }
    return undefined
  }, [
    chainId,
    currency,
    ethPair,
    ethPairState,
    usdtEthPair,
    usdtEthPairState,
    usdtPair,
    usdtPairState,
    wrapped,
    daoUsdtPairState,
    daoUsdtPair
  ])
}
