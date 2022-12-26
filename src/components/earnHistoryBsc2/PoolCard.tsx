import React from 'react'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'
import styled from 'styled-components'
import { TYPE, StyledInternalLink } from '../../theme'
import DoubleCurrencyLogo from '../DoubleLogo'
import { ETHER, JSBI, TokenAmount, CURRENCY_SYMBOL } from '@daoswapdex/daoswap-dex-sdk'
import { ButtonPrimary } from '../Button'
import { StakingInfo } from '../../state/stakeHistoryBsc2/hooks'
import { useColor } from '../../hooks/useColor'
import { currencyId } from '../../utils/currencyId'
import { Break, CardNoise, CardBGImage } from './styled'
import { unwrappedToken } from '../../utils/wrappedCurrency'
import { useTotalSupply } from '../../data/TotalSupply'
import { usePair } from '../../data/Reserves'
import useUSDTPrice from '../../utils/useUSDTPrice'
import { useTranslation } from 'react-i18next'
import { useActiveWeb3React } from '../../hooks'

const StatContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
  display: none;
`};
`

const Wrapper = styled(AutoColumn)<{ showBackground: boolean; bgColor: any }>`
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  position: relative;
  opacity: ${({ showBackground }) => (showBackground ? '1' : '1')};
  background: ${({ theme, bgColor, showBackground }) =>
    `radial-gradient(91.85% 100% at 1.84% 0%, ${bgColor} 0%, ${showBackground ? theme.black : theme.bg5} 100%) `};
  color: ${({ theme, showBackground }) => (showBackground ? theme.white : theme.text1)} !important;

  ${({ showBackground }) =>
    showBackground &&
    `  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);`}
`

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr 120px;
  grid-gap: 0px;
  align-items: center;
  padding: 1rem;
  z-index: 1;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    grid-template-columns: 48px 1fr 96px;
  `};
`

// const APR = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `

const BottomSection = styled.div<{ showBackground: boolean }>`
  padding: 12px 16px;
  opacity: ${({ showBackground }) => (showBackground ? '1' : '0.4')};
  border-radius: 0 0 12px 12px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  z-index: 1;
`

// TODO:Daoswap UNI -> DAO
export default function PoolCard({ stakingInfo }: { stakingInfo: StakingInfo }) {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()

  const token0 = stakingInfo.tokens[0]
  const token1 = stakingInfo.tokens[1]

  const currency0 = unwrappedToken(token0)
  const currency1 = unwrappedToken(token1)
  const currencySymbolA = currency0 === ETHER && chainId ? CURRENCY_SYMBOL[chainId] : currency0.symbol
  const currencySymbolB = currency1 === ETHER && chainId ? CURRENCY_SYMBOL[chainId] : currency1.symbol

  const isStaking = Boolean(stakingInfo.stakedAmount.greaterThan('0'))

  // get the color of the token
  const token = currency0 === ETHER ? token1 : token0
  const WETH = currency0 === ETHER ? token0 : token1
  const backgroundColor = useColor(token)

  const totalSupplyOfStakingToken = useTotalSupply(stakingInfo.stakedAmount.token)
  const [, stakingTokenPair] = usePair(...stakingInfo.tokens)

  // let returnOverMonth: Percent = new Percent('0')
  let valueOfTotalStakedAmountInWETH: TokenAmount | undefined
  if (totalSupplyOfStakingToken && stakingTokenPair) {
    // take the total amount of LP tokens staked, multiply by ETH value of all LP tokens, divide by all LP tokens
    valueOfTotalStakedAmountInWETH = new TokenAmount(
      WETH,
      JSBI.divide(
        JSBI.multiply(
          JSBI.multiply(stakingInfo.totalStakedAmount.raw, stakingTokenPair.reserveOf(WETH).raw),
          JSBI.BigInt(2) // this is b/c the value of LP shares are ~double the value of the WETH they entitle owner to
        ),
        totalSupplyOfStakingToken.raw
      )
    )
  }

  // get the USD value of staked WETH
  const USDPrice = useUSDTPrice(WETH)
  const valueOfTotalStakedAmountInUSDT =
    valueOfTotalStakedAmountInWETH && USDPrice?.quote(valueOfTotalStakedAmountInWETH)

  // get ths USD value the Reward Token
  const USDPriceForRewardToken = useUSDTPrice(stakingInfo.earnedAmount.currency)
  const USDPriceForRewardTokenMultiply1000 = USDPriceForRewardToken?.raw.multiply(JSBI.BigInt(1000))

  // totalRewardRate of Year
  const yearRewardRate = JSBI.multiply(stakingInfo.totalRewardRate.raw, JSBI.BigInt(60 * 60 * 24 * 365))
  const yearRewardValue = JSBI.multiply(
    yearRewardRate,
    JSBI.BigInt(USDPriceForRewardTokenMultiply1000 ? USDPriceForRewardTokenMultiply1000?.toFixed(0) : JSBI.BigInt('0'))
  )

  const annualRateUp = Number(JSBI.divide(yearRewardValue, JSBI.BigInt(1000)).toString())
  const annualRateDown = Number(
    valueOfTotalStakedAmountInUSDT?.raw ? valueOfTotalStakedAmountInUSDT.raw : JSBI.BigInt(1).toString()
  )
  const annualRatePercent = annualRateDown > 0 ? ((annualRateUp / annualRateDown) * 100).toFixed(2) : 0

  return (
    <Wrapper showBackground={isStaking} bgColor={backgroundColor}>
      <CardBGImage desaturate />
      <CardNoise />

      <TopSection>
        <DoubleCurrencyLogo currency0={currency0} currency1={currency1} size={24} />
        <TYPE.white fontWeight={600} fontSize={24} style={{ marginLeft: '8px' }}>
          {currencySymbolA}-{currencySymbolB}
        </TYPE.white>

        <StyledInternalLink
          to={`/dao-history-bsc-2/${currencyId(token0.chainId, currency0)}/${currencyId(token0.chainId, currency1)}`}
          style={{ width: '100%' }}
        >
          <ButtonPrimary padding="8px" borderRadius="8px">
            {isStaking ? t('Manage') : t('Deposit')}
          </ButtonPrimary>
        </StyledInternalLink>
      </TopSection>

      <StatContainer>
        <RowBetween>
          <TYPE.white> {t('Total deposited')}</TYPE.white>
          <TYPE.white>
            {valueOfTotalStakedAmountInUSDT
              ? `$${valueOfTotalStakedAmountInUSDT.toFixed(0, { groupSeparator: ',' })}`
              : `${valueOfTotalStakedAmountInWETH?.toSignificant(4, { groupSeparator: ',' }) ?? '-'} ${
                  CURRENCY_SYMBOL[token0.chainId]
                }`}
          </TYPE.white>
        </RowBetween>
        {/* <RowBetween>
          <TYPE.white> {t('Pool rate')} </TYPE.white>
          <TYPE.white>{`${stakingInfo.totalRewardRate
            ?.multiply(`${60 * 60 * 24 * 7}`)
            ?.toFixed(0, { groupSeparator: ',' })} DAO / ${t('week')}`}</TYPE.white>
        </RowBetween> */}
      </StatContainer>

      <Break />

      {/* {isStaking && (
        <>
          <BottomSection showBackground={true}>
            <TYPE.black color={'white'} fontWeight={500}>
              <span>{t('Your rate')}</span>
            </TYPE.black>

            <TYPE.black style={{ textAlign: 'right' }} color={'white'} fontWeight={500}>
              <span role="img" aria-label="wizard-icon" style={{ marginRight: '0.5rem' }}>
                ⚡
              </span>
              {`${stakingInfo.rewardRate
                ?.multiply(`${60 * 60 * 24 * 7}`)
                ?.toSignificant(4, { groupSeparator: ',' })} DAO / ${t('week')}`}
            </TYPE.black>
          </BottomSection>
        </>
      )} */}

      <>
        <BottomSection showBackground={true}>
          <TYPE.black color={'white'} fontWeight={500}>
            <span>{t('Annual rate')}</span>
          </TYPE.black>

          <TYPE.black style={{ textAlign: 'right' }} color={'white'} fontWeight={500}>
            {`${annualRatePercent} %`}
          </TYPE.black>
        </BottomSection>
      </>
    </Wrapper>
  )
}
