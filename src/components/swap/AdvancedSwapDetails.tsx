import { Trade, TradeType, ETHER, CURRENCY_SYMBOL } from '@daoswapdex/daoswap-dex-sdk'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Field } from '../../state/swap/actions'
import { useUserSlippageTolerance } from '../../state/user/hooks'
import { TYPE, ExternalLink } from '../../theme'
import { computeSlippageAdjustedAmounts, computeTradePriceBreakdown } from '../../utils/prices'
import { AutoColumn } from '../Column'
import QuestionHelper from '../QuestionHelper'
import { RowBetween, RowFixed } from '../Row'
import FormattedPriceImpact from './FormattedPriceImpact'
import { SectionBreak } from './styleds'
import SwapRoute from './SwapRoute'
import { useTranslation } from 'react-i18next'
import { useActiveWeb3React } from '../../hooks'
import { ChainId } from '@daoswapdex/daoswap-dex-sdk'
import { CHAIN_INFO } from '../../constants/chainInfo'

const InfoLink = styled(ExternalLink)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.bg3};
  padding: 6px 6px;
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.text1};
`

function TradeSummary({ trade, allowedSlippage }: { trade: Trade; allowedSlippage: number }) {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()
  const theme = useContext(ThemeContext)
  const { priceImpactWithoutFee, realizedLPFee } = computeTradePriceBreakdown(trade)
  const isExactIn = trade.tradeType === TradeType.EXACT_INPUT
  const slippageAdjustedAmounts = computeSlippageAdjustedAmounts(trade, allowedSlippage)

  const currencySymbolA =
    trade.inputAmount.currency === ETHER && chainId ? CURRENCY_SYMBOL[chainId] : trade.inputAmount.currency.symbol
  const currencySymbolB =
    trade.outputAmount.currency === ETHER && chainId ? CURRENCY_SYMBOL[chainId] : trade.outputAmount.currency.symbol

  return (
    <>
      <AutoColumn style={{ padding: '0 20px' }}>
        <RowBetween>
          <RowFixed>
            <TYPE.black fontSize={14} fontWeight={400} color={theme.text2}>
              {isExactIn ? t('Minimum received') : t('Maximum sold')}
            </TYPE.black>
            <QuestionHelper
              text={t(
                'Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.'
              )}
            />
          </RowFixed>
          <RowFixed>
            <TYPE.black color={theme.text1} fontSize={14}>
              {isExactIn
                ? `${slippageAdjustedAmounts[Field.OUTPUT]?.toSignificant(4)} ${currencySymbolB}` ?? '-'
                : `${slippageAdjustedAmounts[Field.INPUT]?.toSignificant(4)} ${currencySymbolA}` ?? '-'}
            </TYPE.black>
          </RowFixed>
        </RowBetween>
        <RowBetween>
          <RowFixed>
            <TYPE.black fontSize={14} fontWeight={400} color={theme.text2}>
              {t('Price Impact')}
            </TYPE.black>
            <QuestionHelper
              text={t('The difference between the market price and estimated price due to trade size.')}
            />
          </RowFixed>
          <FormattedPriceImpact priceImpact={priceImpactWithoutFee} />
        </RowBetween>

        <RowBetween>
          <RowFixed>
            <TYPE.black fontSize={14} fontWeight={400} color={theme.text2}>
              {t('Liquidity Provider Fee')}
            </TYPE.black>
            <QuestionHelper
              text={t('A portion of each trade (0.30%) goes to liquidity providers as a protocol incentive.')}
            />
          </RowFixed>
          <TYPE.black fontSize={14} color={theme.text1}>
            {realizedLPFee ? `${realizedLPFee.toSignificant(4)} ${currencySymbolA}` : '-'}
          </TYPE.black>
        </RowBetween>
      </AutoColumn>
    </>
  )
}

export interface AdvancedSwapDetailsProps {
  trade?: Trade
}

export function AdvancedSwapDetails({ trade }: AdvancedSwapDetailsProps) {
  const { t } = useTranslation()
  const theme = useContext(ThemeContext)

  const { chainId } = useActiveWeb3React()
  const { infoLink } = chainId ? CHAIN_INFO[chainId] : CHAIN_INFO[ChainId.HECO_MAINNET]

  const [allowedSlippage] = useUserSlippageTolerance()

  const showRoute = Boolean(trade && trade.route.path.length > 2)

  return (
    <AutoColumn gap="md">
      {trade && (
        <>
          <TradeSummary trade={trade} allowedSlippage={allowedSlippage} />
          {showRoute && (
            <>
              <SectionBreak />
              <AutoColumn style={{ padding: '0 24px' }}>
                <RowFixed>
                  <TYPE.black fontSize={14} fontWeight={400} color={theme.text2}>
                    {t('Route')}
                  </TYPE.black>
                  <QuestionHelper text={t('Routing through these tokens resulted in the best price for your trade.')} />
                </RowFixed>
                <SwapRoute trade={trade} />
              </AutoColumn>
            </>
          )}
          <AutoColumn style={{ padding: '0 24px', display: infoLink ? 'flex' : 'none' }}>
            <InfoLink href={`#` + trade.route.pairs[0].liquidityToken.address} target="_blank">
              {t('View pair analytics')} ↗
            </InfoLink>
          </AutoColumn>
        </>
      )}
    </AutoColumn>
  )
}
