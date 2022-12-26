import React from 'react'
import { AutoColumn } from '../../components/Column'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import { RowBetween } from '../../components/Row'
import { CardSection, DataCard, CardNoise, CardBGImage } from './styled'
import { useTranslation } from 'react-i18next'
import PoolCard from '../../components/staking/PoolCardForSingle'
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

export default function StakingSingle() {
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
        period: 3,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingDAOPeriod3',
        capAmount: 100000,
        apr: 38,
        aprDAO: 19,
        aprDST: 19,
        openStatus: true,
        display: 'normal'
        // display: inWhiteList.length > 0 ? 'normal' : 'none'
      },
      {
        period: 2,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingDAOPeriod2',
        capAmount: 100000,
        apr: 38,
        aprDAO: 19,
        aprDST: 19,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 1,
        domain: 'staking.bsc.daoswap.cc',
        name: 'StakingDAOPeriod1',
        capAmount: 100000,
        apr: 38,
        aprDAO: 19,
        aprDST: 19,
        openStatus: false,
        display: 'normal'
      }
    ],
    [ChainId.BSC_TESTNET]: [
      {
        period: 1,
        domain: 'test.staking.bsc.daoswap.cc',
        name: 'StakingDAOPeriod1',
        capAmount: 500,
        apr: 48,
        aprDAO: 24,
        aprDST: 24,
        openStatus: true,
        display: 'normal'
        // display: inWhiteList.length > 0 ? 'normal' : 'none'
      }
    ],
    [ChainId.HECO_MAINNET]: [
      {
        period: 3,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingDAOPeriod3',
        capAmount: 100000,
        apr: 58,
        aprDAO: 17.4,
        aprDST: 40.6,
        openStatus: false,
        display: 'normal'
        // display: inWhiteList.length > 0 ? 'normal' : 'none'
      },
      {
        period: 2,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingDAOPeriod2',
        capAmount: 100000,
        apr: 58,
        aprDAO: 29,
        aprDST: 29,
        openStatus: false,
        display: 'normal'
      },
      {
        period: 1,
        domain: 'staking.heco.daoswap.cc',
        name: 'StakingDAOPeriod1',
        capAmount: 100000,
        apr: 60,
        aprDAO: 30,
        aprDST: 30,
        openStatus: false,
        display: 'normal'
      }
    ],
    [ChainId.HECO_TESTNET]: []
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
                <TYPE.white fontWeight={600}>{t('DAO Staking')}</TYPE.white>
              </RowBetween>
              <RowBetween>
                <TYPE.white fontSize={9}>{t('Stake DAO to get extra income.')}</TYPE.white>
              </RowBetween>
            </AutoColumn>
          </CardSection>
          <CardBGImage />
          <CardNoise />
        </DataCard>
      </TopSection>

      <NodeTabs active={'staking-single'} />

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
