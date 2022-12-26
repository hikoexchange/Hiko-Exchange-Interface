import { Token, ChainId } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { DAO, USDT, ETH, FIL } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

const Period9: StakingRewardsInfo[] = [
  {
    period: 9,
    stakingGenesis: 1662951600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x9EFf97d8996c45D546ac498f0651b654a9fBD065'
  },
  {
    period: 9,
    stakingGenesis: 1662951600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x61a504Fb3dA8c5939c9d21916B6Ac90878CD55C6'
  },
  {
    period: 9,
    stakingGenesis: 1662951600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xc570f732C932eFa9174e9018380eECE0F1Ca371E'
  },
  {
    period: 9,
    stakingGenesis: 1662951600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xb238DEAf047740101D73e74B40e24CA89FbA926B'
  },
  {
    period: 9,
    stakingGenesis: 1662951600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x9d0643638965C1Df0EE90F4767f803a3dD61Fb38'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period9
