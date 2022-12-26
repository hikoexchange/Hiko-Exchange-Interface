import React, { useContext, useMemo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { TYPE } from '../../theme'

import { Pair, JSBI } from '@daoswapdex/daoswap-dex-sdk'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'
import { useActiveWeb3React } from '../../hooks'
import { useTranslation } from 'react-i18next'
import { ChainId } from '@daoswapdex/daoswap-dex-sdk'

import {
  USDT_DAO_PAIR_ADDRESS,
  // USDT_DAO_STAKING_REWARDS_ADDRESS,
  NODE_TYPE_STELLAR_MIN_USD_VALUE,
  NODE_TYPE_PLANETARY_MIN_USD_VALUE,
  STAKING_LIMIT_FOR_LP_CONTRACT_ADDRESS,
  HECO_STAKING_RECORD_CONTRACT_ADDRESS
} from '../../constants/nodeInfo'
import { useTokenBalance } from '../../state/wallet/hooks'
import {
  useMultipleContractSingleData,
  useSingleContractMultipleData,
  useSingleCallResult
} from '../../state/multicall/hooks'
// import { STAKING_REWARDS_INTERFACE } from '../../constants/abis/staking-rewards'
import { STAKING_LP_INTERFACE } from '../../constants/abis/staking-lp'
import QuestionHelper from '../QuestionHelper'
import { useTokenContract, useHecoStakingRecordContract } from '../../hooks/useContract'

const EmptyProposals = styled.div`
  border: 1px solid ${({ theme }) => theme.text4};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export function NodeType({ pairs }: { pairs: Pair[] }) {
  const { t } = useTranslation()
  const theme = useContext(ThemeContext)
  const { account, chainId } = useActiveWeb3React()
  // const { chainId } = useActiveWeb3React()
  // const account = '0x7d3dE024dEB70741c6Dfa0FaD57775A47C227AE2'

  const isMainNetwork = chainId === ChainId.BSC_MAINNET || chainId === ChainId.HECO_MAINNET
  const isHecoNetwork = chainId === ChainId.HECO_MAINNET
  const currentChainId = chainId ? chainId : ChainId.BSC_MAINNET

  // Node Info Get
  const accountArg = useMemo(() => [account ?? undefined], [account])
  // get heco staking record contract
  let userHecoStakingRecordStakingAmount = JSBI.BigInt(0)
  const HECO_STAKING_RECORD_CONTRACT = useHecoStakingRecordContract(HECO_STAKING_RECORD_CONTRACT_ADDRESS, true)
  let hecoStakingRecordVestingTokenArray: string[] = []
  const hecoStakingRecordVestingTokenList = useSingleCallResult(
    HECO_STAKING_RECORD_CONTRACT,
    'getVestingTokenList',
    accountArg
  )?.result?.[0]
  if (hecoStakingRecordVestingTokenList && hecoStakingRecordVestingTokenList.length > 0) {
    hecoStakingRecordVestingTokenList.map((item: string) => {
      hecoStakingRecordVestingTokenArray = hecoStakingRecordVestingTokenArray.concat(item)
      return item
    })
  }
  const stakingRecordVestingInfoList = useSingleContractMultipleData(
    HECO_STAKING_RECORD_CONTRACT,
    'getVestingTokenInfo',
    hecoStakingRecordVestingTokenArray.map(address => [address])
  )
  // TODO: 这里需要判断是否到了结束日期，用end与当前时间戳比较
  if (stakingRecordVestingInfoList.length > 0) {
    stakingRecordVestingInfoList.map(vestingInfo => {
      const nowDate = parseInt((new Date().getTime() / 1000).toString()) //当前时间
      const endDate = vestingInfo?.result?.[0]?.end?.toString()
      if (endDate > nowDate) {
        userHecoStakingRecordStakingAmount = JSBI.add(
          userHecoStakingRecordStakingAmount,
          JSBI.BigInt(vestingInfo?.result?.[0]?.stakingAmount ?? 0)
        )
      }
      return vestingInfo
    })
  }
  // get usdt-dao pair balance in pool
  let nodeTypePairLiquidityToken = undefined
  useMemo(
    () =>
      pairs.map(pair => {
        if (
          USDT_DAO_PAIR_ADDRESS[currentChainId].toLowerCase().trim() ===
          pair.liquidityToken.address.toLowerCase().trim()
        ) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          nodeTypePairLiquidityToken = pair.liquidityToken
          return pair
        } else {
          return null
        }
      }),
    [pairs, nodeTypePairLiquidityToken]
  )
  const userPoolBalance = useTokenBalance(account ?? undefined, nodeTypePairLiquidityToken)
  const userPoolBalanceNumber = JSBI.BigInt(userPoolBalance && isHecoNetwork ? userPoolBalance.raw.toString() : 0)
  // get all the info from the staking rewards contracts
  // const balances = useMultipleContractSingleData(
  //   USDT_DAO_STAKING_REWARDS_ADDRESS,
  //   STAKING_REWARDS_INTERFACE,
  //   'balanceOf',
  //   accountArg
  // )
  // let userLiquidityPoolBalanceNumber = JSBI.BigInt(0)
  // if (balances.length > 0) {
  //   balances.map(balance => {
  //     userLiquidityPoolBalanceNumber = JSBI.add(userLiquidityPoolBalanceNumber, JSBI.BigInt(balance?.result?.[0] ?? 0))
  //     return balance
  //   })
  // }
  // get all the info from the staking lp contracts
  let tokenVestingAddressListArray: string[] = []
  const tokenVestingAddressList = useMultipleContractSingleData(
    STAKING_LIMIT_FOR_LP_CONTRACT_ADDRESS[currentChainId],
    STAKING_LP_INTERFACE,
    'getTokenVestingAddressByAccount',
    accountArg
  )
  if (tokenVestingAddressList.length > 0) {
    tokenVestingAddressList.map(tokenVesting => {
      if (tokenVesting?.result !== undefined) {
        tokenVestingAddressListArray = tokenVestingAddressListArray.concat(tokenVesting?.result?.[0])
      }
      return tokenVesting
    })
  }
  let userLiquidityPoolOfStakingLP = JSBI.BigInt(0)
  const USDT_DAO_TOKEN_CONTRACT = useTokenContract(USDT_DAO_PAIR_ADDRESS[currentChainId], true)
  const tokenVestingBalances = useSingleContractMultipleData(
    USDT_DAO_TOKEN_CONTRACT,
    'balanceOf',
    tokenVestingAddressListArray.map(address => [address])
  )

  if (tokenVestingBalances.length > 0) {
    tokenVestingBalances.map(balance => {
      userLiquidityPoolOfStakingLP = JSBI.add(userLiquidityPoolOfStakingLP, JSBI.BigInt(balance?.result?.[0] ?? 0))
      return balance
    })
  }
  // judge node type
  const userLiquidityPoolBalance = JSBI.add(
    JSBI.add(userPoolBalanceNumber, userLiquidityPoolOfStakingLP),
    userHecoStakingRecordStakingAmount
  )
  let NodeTypeName = 'None'
  if (JSBI.greaterThanOrEqual(userLiquidityPoolBalance, NODE_TYPE_STELLAR_MIN_USD_VALUE)) {
    NodeTypeName = 'Stellar'
  } else if (
    JSBI.lessThan(userLiquidityPoolBalance, NODE_TYPE_STELLAR_MIN_USD_VALUE) &&
    JSBI.greaterThanOrEqual(userLiquidityPoolBalance, NODE_TYPE_PLANETARY_MIN_USD_VALUE)
  ) {
    NodeTypeName = 'Planet'
  }

  return (
    <AutoColumn gap="lg" style={{ width: '100%', marginTop: '1rem' }}>
      <EmptyProposals>
        <RowBetween>
          <TYPE.body color={theme.text3} textAlign="left">
            {isMainNetwork
              ? t('Node Type') + ':' + t(`NodeType ${NodeTypeName}`)
              : t(
                  'Nodes are temporarily subject to USDT/DAO liquidity on the HECO chain, and subsequent DAO synchronization after cross-chain.'
                )}
          </TYPE.body>
          <QuestionHelper
            text={
              t(
                '1, Planet and Stellar node status will be determined by the number of DAO/USDT pool liquidity provider certificates (LP) held.'
              ) +
              t('2, Planet nodes need >=1000 LP and Stellar need >=10000 LP.') +
              t(
                '3, The above criteria are valid within DAO price <= 30USDT, after >= 30USDT it will be decided by community vote (whether to consider lowering LP value criteria).'
              ) +
              t('Aurora CAC, effective on November 17, 2021.')
            }
          />
        </RowBetween>
      </EmptyProposals>
    </AutoColumn>
  )
}
