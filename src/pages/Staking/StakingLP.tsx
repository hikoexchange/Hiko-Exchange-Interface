import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from './styled'
import { useTranslation } from 'react-i18next'
import PoolCard from '../../components/staking/PoolCardForLP'
import { NodeTabs } from '../../components/NavigationTabs/node'
import { useActiveWeb3React } from '../../hooks'
import { ChainId } from '@daoswapdex/daoswap-dex-sdk'

const PageWrapper = styled(AutoColumn)`
  max-width: 640px;
  width: 100%;
`

const TopSection = styled(AutoColumn)`
  max-width: 720px;
  width: 100%;
`

const PoolSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 15px;
  width: 100%;
  justify-self: center;
`

export default function StakingLP() {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()

  // TODO: is display staking rewards info list for specical address
  // const whiteList = [
  //   '0x3DdcFc89B4DD2b33d9a8Ca0F60180527E9810D4B',
  //   '0xBdB9BD48CDCF075D66f81f083b9Ab618a0530c31',
  //   '0x70FBf5E00a67aAaD3146cE4B017CbbaB4202a7CC',
  //   '0xa9bB710996d6ed61B83a5EAB583bAe683199c2de',
  //   '0x9b1d0c9c1aE96011776e6786b4Efe884665918D2'
  // ]
  // const inWhiteList = whiteList.filter(item => item.toLowerCase() === account?.toLowerCase())

  const stakingList: {
    [chainId in ChainId]?: any[]
  } = {
    [ChainId.BSC_MAINNET]: [
      {
        period: 6,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod6',
        capAmount: 100000,
        apr: 62,
        aprDAO: 0,
        aprDST: 62,
        openStatus: true,
        display: 'normal'
        // display: inWhiteList.length > 0 ? 'normal' : 'none'
      },
      {
        period: 5,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod5',
        capAmount: 100000,
        apr: 62,
        aprDAO: 0,
        aprDST: 62,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 4,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod4',
        capAmount: 100000,
        apr: 72,
        aprDAO: 0,
        aprDST: 72,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 3,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod3',
        capAmount: 100000,
        apr: 82,
        aprDAO: 0,
        aprDST: 82,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 2,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod2',
        capAmount: 100000,
        apr: 92,
        aprDAO: 0,
        aprDST: 92,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 1,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingLPPeriod1',
        capAmount: 100000,
        apr: 102,
        aprDAO: 0,
        aprDST: 102,
        openStatus: false,
        display: 'normal'
      }
    ],
    [ChainId.BSC_TESTNET]: [],
    [ChainId.HECO_MAINNET]: [
      {
        period: 7,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod7',
        capAmount: 100000,
        apr: 60,
        aprDAO: 0,
        aprDST: 60,
        openStatus: true,
        display: 'normal'
        // display: inWhiteList.length > 0 ? 'normal' : 'none'
      },
      {
        period: 6,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod6',
        capAmount: 300000,
        apr: 112,
        aprDAO: 0,
        aprDST: 112,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 5,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod5',
        capAmount: 300000,
        apr: 114,
        aprDAO: 34.2,
        aprDST: 79.8,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 4,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod4',
        capAmount: 300000,
        apr: 116,
        aprDAO: 34.8,
        aprDST: 81.2,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 3,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod3',
        capAmount: 400000,
        apr: 116,
        aprDAO: 58,
        aprDST: 58,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 2,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod2',
        capAmount: 400000,
        apr: 118,
        aprDAO: 59,
        aprDST: 59,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 1,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingLPPeriod1',
        capAmount: 500000,
        apr: 120,
        aprDAO: 60,
        aprDST: 60,
        openStatus: false,
        display: 'normal'
      }
    ],
    [ChainId.HECO_TESTNET]: [
      {
        period: 1,
        domain: 'test.staking.heco.daoswap.cc',
        name: 'StakingLPPeriod1',
        capAmount: 100000,
        apr: 102,
        aprDAO: 0,
        aprDST: 102,
        openStatus: true,
        display: 'normal'
      }
    ]
  }

  const currentChainId = chainId ? chainId : ChainId.BSC_MAINNET

  return (
    <PageWrapper gap="lg" justify="center">
      <TopSection gap="md">
        <DataCard>
          <CardBGImage />
          <CardNoise />
          <CardSection>
            <AutoColumn gap="md">
              <RowBetween>
                <TYPE.white fontWeight={600}>{t('Hash Node Staking')}</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={9}>
                  {t('Stake DAO/USDT LP, share 1/3 fee.')}
                  <br />
                  <TYPE.white fontSize={9}>0xa9bB710996d6ed61B83a5EAB583bAe683199c2de</TYPE.white>
                </TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <NodeTabs active={'staking-lp'} />

      <AutoColumn gap="lg" style={{ width: '100%', maxWidth: '720px' }}>
        <PoolSection>
          {stakingList[currentChainId]?.length === 0
            ? t('No active staking')
            : stakingList[currentChainId]?.map(stakingInfo => {
                return <PoolCard key={stakingInfo.period} stakingInfo={stakingInfo} />
              })}
        </PoolSection>
      </AutoColumn>
    </PageWrapper>
  )
}
