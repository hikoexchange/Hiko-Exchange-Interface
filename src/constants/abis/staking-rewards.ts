import { Interface } from '@ethersproject/abi'
// import { abi as STAKING_REWARDS_ABI } from '@daoswap-heco/liquidity-staker/build/StakingRewards.json'
// import { abi as STAKING_REWARDS_FACTORY_ABI } from '@daoswap-heco/liquidity-staker/build/StakingRewardsFactory.json'
import { abi as STAKING_REWARDS_ABI } from '../contractJson/StakingRewards.json'
import { abi as STAKING_REWARDS_FACTORY_ABI } from '../contractJson/StakingRewardsFactory.json'

const STAKING_REWARDS_INTERFACE = new Interface(STAKING_REWARDS_ABI)

const STAKING_REWARDS_FACTORY_INTERFACE = new Interface(STAKING_REWARDS_FACTORY_ABI)

export { STAKING_REWARDS_FACTORY_INTERFACE, STAKING_REWARDS_INTERFACE }
