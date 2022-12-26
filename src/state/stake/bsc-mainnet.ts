import { ChainId, Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { USDT, DAO, BTCB, UNI, ETH, USDC, FIL, ETC, LINK, BUSD, XRP, LTC, ADA, BCH } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

const Period8: StakingRewardsInfo[] = [
  // period 8
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x7EAd2295A10E5c41fc86C0474D9A4433Ae3D2351'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x8662dBdc57717FCdfe7863c8688C14203779e864'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xAD0aEcE30997e1375409124DbA2FdFFC1963F67E'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x20B8e50F1FEBF3C607F71A32ebaB6068f06302DF'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x0aE55065Ee975Cf2bF4EEF3F159F10C093917C4C'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], USDC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xc43D6037fF5d22B34e2f38b3C9Da1cFE360Fb531'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x847f5Ee345e90cB6DFA3d63c2D1e4d6d55c260c1'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xA1E95f8D63c2702Cc60a38494B5832097cE0b425'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x00F28e11C266F3cef0B8CAFfC05649D6A2609355'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BUSD[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xfcb1955c1D1e6008B97D3d9221c81391a903a505'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x956207fbEaC960C062099f196d2795617e91eDFd'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x98F1BaaD0D471c53C5755B1B4b66748e809202B7'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xaaa08F298eE32bf3db7532e25D7855FB0d79ca7c'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x2bb963B8904dD8C76eeD66Dd337a60b3da1f82C4'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xE29Cb25Ad06C3F50Ef40DCb7cd7541C207E5aBBA'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xc55ee48bAc291bdd25731A8bCABC22d47Ea05201'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xF3F6dE62006361C7EC93bd4ab3A79Ab0b11163E3'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x16CC8F2DF9611c9D8044972B38c9927c8Efe3aF9'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x3F67bfEbfA453422AB0c8B600fc1b8f99690b8a1'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xcc3F3bE85f45C64A7b8F46685A3bE5387CF6AcB3'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xC8c763c8204aF5a8d8c7FaF7666Df7EDD897bc8E'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x62aec729053B2D5e31FeFEBE270e22a32C3073D9'
  },
  {
    period: 8,
    stakingGenesis: 1670295600,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x4941dbf1669E9c3288B3Ec25f94515e483AE97dc'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period8
