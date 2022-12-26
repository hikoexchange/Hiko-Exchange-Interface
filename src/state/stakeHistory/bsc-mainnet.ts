import { ChainId, Token } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import {
  DAO,
  USDT,
  ETH,
  FIL,
  BTCB,
  UNI,
  ETC,
  LTC,
  XRP,
  DOT,
  LINK,
  BNB,
  ADA,
  BCH,
  BUSD,
  USDC
} from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

const Period7: StakingRewardsInfo[] = [
  // period 7
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x7b3E9f3FDa2c62b6fB6B09A62bFb6e1A9679075b'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x1e47DF7AE6B3e7febDb4d251CCACB01b7125C224'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x61Ea397054d5014BD491E70D48D208Db3f116fd9'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x1A3F9D66c1Ab3f0a0d5684926290F508CBAC3628'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x7BBE6e6703C4EF79e1C42943fb01b11BCE1A10fF'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], USDC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x0499BF0C0eb075172433314dc5557B19D32B71dB'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xff3DA2ED7B60641A66567f8ce257960d87Ca733B'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x469fc6eF3a012c1b3C55c28339818Ae16518eE1f'
  },
  {
    period: 7,
    stakingGenesis: 1663038000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xA0cfE51B16D0EF0128f4775cC57c2B2cb1c65739'
  }
]

const Period6: StakingRewardsInfo[] = [
  // period 6
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xAfA62fd68aae5091182a0E03f3d0e80AD8298F2e'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x9Cc6238dcc76243cB78f3a15076dE05693A1469f'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BUSD[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x294548F8fd92ceD3B2C11232278A73Df48Fc72b2'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x798946a8850712D59771c3FDd8544845d92A6dE9'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xca411ca76C272b3e6ea492301D15037d1DD5eAdd'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x9962b736084F4Ca96a9FDF0d591FEe4751AD93EF'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xa88741aa0A93cE7f1c0DC19169e295632A39F4DE'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x047dFd2c8f24353E08218Fb509Ea3c63305cFB67'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BCH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x75183b6B0dD2732FccD0A9e8152d6dC79C7f8c6F'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x5e56F8ee6fD5Be5Bb3985dE41432b539839B5298'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xA0FBce61eF8e34E5bFc92264d961f7E64Be26033'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x2932998a86944fdaa91583d3Bd98b021db110498'
  },
  {
    period: 6,
    stakingGenesis: 1661742000,
    rewardsDurationDays: 84,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xd82Fe70988702075d264CD031A739b71fCa3C74F'
  }
]

const Period5: StakingRewardsInfo[] = [
  // period 5
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xa13dB19b5EFfAF9Fd3E4ea4b34D5Ee31ce627Bfb'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xBb5E342f977B2EDDaaa8a7d3a06fD2b26412Df98'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x195Cc45aA44c77e522A02c2AD9D17bC8D2Ca0477'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xA10BfAaDa421c002849e9985df8250c105aFBb00'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xc508E53C32CBEdd7ae1634F18cb72A0D245c8797'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DOT[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x5Fb9D05027E29B36F46E805d31E34cE84CE055cd'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x72F46Fa7Fb4BB0c89f9AF3aD8bb5bAbD7Db14146'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x3E0DB512277096f80F4b3941324F12bd40D30629'
  },
  {
    period: 5,
    stakingGenesis: 1658026800,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x4E087976bFECC5067AB978C85F9B8d1ea3885be5'
  }
]

const Period4: StakingRewardsInfo[] = [
  // period 4
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xbDe3C93c53a9Ac0d23fa2EAF67cAce3ed8A2b701'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x583732c283d9375F284a4410e8e19EEfc58D900D'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xB0e6d0dab0dCe89d6869dFF9De9648947d72960C'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DOT[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x8ec8DDdB47B334d0fDaeDa6cfC54FEA4142c086D'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xe4A5629A73ec4387826962d407c146AfB3A644D9'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xEbE9417b6e2d8FcA3b7c51611a86330B93e44a19'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x8933a6530C68BeD3677e7BdF39B0BF03519bcD4e'
  },
  {
    period: 4,
    stakingGenesis: 1656212400,
    rewardsDurationDays: 58,
    rewardsTokenSymbol: 'DAO',
    tokens: [DAO[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x9C82AbfcB8cd5F79Aa5aAa8B9a22f0366119dbaA'
  }
]

const Period3: StakingRewardsInfo[] = [
  // period 3
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x98a4768E36DD0c7286fA9462fcb827B399D77F9D'
  },
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xdC07CE87c82Be7C81665c440CfE784857F0f7746'
  },
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x768e3481aB8674aE32499154ac31E3b5B81BbF09'
  },
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x2E337A8F567307f19718eCaD025Ace2083A96C00'
  },
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xD5044c3B12D08C2F4ac61AC117aa0fD7c76a391d'
  },
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xC7dB39d58c3369c7A367116aA3312f36505Fd251'
  },
  // period 3
  {
    period: 3,
    stakingGenesis: 1652929200,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ADA[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x07Dd3a5650Adf1b0B64Dba299CAd9F7B2c1ACCFc'
  },
  {
    period: 3,
    stakingGenesis: 1653102000,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [BTCB[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xE18753F0741B3d658Ee32744D7a77ed43E43AE18'
  }
]

const Period2: StakingRewardsInfo[] = [
  // period 2
  {
    period: 2,
    stakingGenesis: 1651201200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xed537020CC5E69c5B14560b4E0988B0152851828'
  },
  {
    period: 2,
    stakingGenesis: 1651201200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x1A91530DCc9bb88d75F47699a148Fc9f3D495Ae9'
  },
  {
    period: 2,
    stakingGenesis: 1651201200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x6Ae1AE59e5E2C45cFBd89D40154e19D858a0Fd66'
  },
  {
    period: 2,
    stakingGenesis: 1651201200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x8aFBeACbA978fEaD9dB7b5465806354144B63e71'
  },
  {
    period: 2,
    stakingGenesis: 1651201200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xbF35a06AC18bC3412b3456E9b387402E0a0AF39B'
  },
  {
    period: 2,
    stakingGenesis: 1651201200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x70b2857A24E9727Fac4c1EF0aa42405F4bB776d7'
  }
]

const Period1: StakingRewardsInfo[] = [
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DAO[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x0A09Da13B9845808DE4C32a57d6E082Bb3450f96'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETH[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x5b9cBc2C963f623428a80506BE16d044D50a2C30'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], FIL[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x4431e21632016De87125F6858CADbb432f3b071e'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], UNI[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x5d457B55d14F773501813296B714FA4982293B6A'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BTCB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xE79Da290Bd685AEEAFF8019EB6216304065428b4'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], BNB[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x7eDBA3947997DF1ec041264B03C51DF479b2A535'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LINK[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xA9dD703B51449B6c6DF6a115d35B5932C971675f'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], DOT[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0xD627c333B45cCAE1aFBb71bC8c9eaF00b237ef8E'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], LTC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x159be5f7f07720C669ED26dEFD93Cbb5c767D992'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], XRP[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x58Ba184Cdb2CFbf933253EFDBeB281bd100DCD6c'
  },
  {
    period: 1,
    stakingGenesis: 1649221200,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.BSC_MAINNET], ETC[ChainId.BSC_MAINNET]],
    stakingRewardAddress: '0x7df8ca7f57815Bd6c488b8Dd452610D5a33B23ba'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period7.concat(
  Period6,
  Period5,
  Period4,
  Period3,
  Period2,
  Period1
)
