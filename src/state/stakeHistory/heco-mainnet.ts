import { Token, ChainId } from '@daoswapdex/daoswap-dex-sdk'
// TODO:Daoswap ERC20
import { DAO, USDT, ETH, FIL, HT, UNI, MDX, HBCH, LTC, MANA, DOT, LINK } from '../../constants/tokensInfo'

interface StakingRewardsInfo {
  period: number
  stakingGenesis: number
  rewardsDurationDays: number
  rewardsTokenSymbol: string
  tokens: [Token, Token]
  stakingRewardAddress: string
}

const Period8: StakingRewardsInfo[] = [
  {
    period: 8,
    stakingGenesis: 1657249200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xC6eEE276C2E211b2408171F192220234e25D0A02'
  },
  {
    period: 8,
    stakingGenesis: 1657249200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x53645BDe12743aec762389303EF426Fd63EDc054'
  },
  {
    period: 8,
    stakingGenesis: 1657249200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x391adbc9c7fAb5Da7e4ac8D8C06E2fbCD81C01Ee'
  },
  {
    period: 8,
    stakingGenesis: 1657249200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x70B417b946e4a8337468919747bf9afad25eA1dB'
  },
  {
    period: 8,
    stakingGenesis: 1657249200,
    rewardsDurationDays: 56,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x978Dc386ebeF0bA5e8FeC24Fb49603c92fc2e0fD'
  }
]

const Period7: StakingRewardsInfo[] = [
  {
    period: 7,
    stakingGenesis: 1653793200,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x502ef7b6004719730Cbfc4962A3f068245483434'
  },
  {
    period: 7,
    stakingGenesis: 1653793200,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x0922f73BB5fCd272E0A17115917267A2827E4a63'
  },
  {
    period: 7,
    stakingGenesis: 1653793200,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x29f0347C98b123afC2681be65e58a8E67795FE71'
  },
  {
    period: 7,
    stakingGenesis: 1653793200,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [ETH[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xb989a7c3Caa066A13CA77B58bcF89829603E1520'
  },
  {
    period: 7,
    stakingGenesis: 1653793200,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [FIL[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xf213bB9394Ac015229ce9E861EE5FBEE424753fd'
  }
]

const Period6: StakingRewardsInfo[] = [
  {
    period: 6,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x8A041E9C28250A542642c65206Fa90E369Fe4409'
  },
  {
    period: 6,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xE7d03c5E30B0037B05e713B0977C683D9fff1052'
  },
  {
    period: 6,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xccA7501d3750ea0aeb55097D04392D480AF46295'
  },
  {
    period: 6,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x846EC507DacFa021cCC1d49686b5d424083ADb5B'
  },
  {
    period: 6,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], UNI[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x095Ffdcfebc3450f64CA68485621FccC7aa732ed'
  },
  {
    period: 6,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], MDX[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x9aF7Cc8B63b1FD52C4e72913B56E9017f77Ad16F'
  },
  {
    period: 6,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], HBCH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x03AF0F32bDA5d6cBDDfD81c80D6A4df72B930E17'
  },
  {
    period: 6,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], LTC[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x52b939FCE7A72107DE432490c7c09cA27a2AD319'
  },
  {
    period: 6,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], MANA[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xd3F6A5ba3D4Fae23b23927C507d556B7422b1a77'
  },
  {
    period: 6,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DOT[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x14d442E8F0db21135187F12F57aA586d2649A09a'
  },
  {
    period: 6,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], LINK[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xE466da31406E485b4250717E1368472228c01282'
  }
]

const Period5: StakingRewardsInfo[] = [
  {
    period: 5,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xcA691423C64fa6B24CD54e45353A236521D2C7f5'
  },
  {
    period: 5,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x925D975fD145a99829ea2b734492Ec6B8017e27C'
  },
  {
    period: 5,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x6a7b10753D853b6e44aE793406584C55669Ed505'
  },
  {
    period: 5,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xC7D59edFE2CBbb21fFE84c9739d997cd6b139D08'
  },
  {
    period: 5,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], UNI[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x47301CEC97925F91CbeD5457300f4462A45ACB33'
  },
  {
    period: 5,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], MDX[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x4FD95D89Efb537FA72b87671541a835AdcdE3568'
  },
  {
    period: 5,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], HBCH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xef827c4067C823E829C1053aecb7C04B3b043Bd5'
  },
  {
    period: 5,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], LTC[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xd8505972ac221736c134De156347D6E98017e015'
  },
  {
    period: 5,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], MANA[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x525576c19E81Bd6370aF036D03E07FbbE1e84FaE'
  },
  {
    period: 5,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DOT[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xA2a18f3abf965ae839eD192fad58d3Fd7e1Eefbb'
  },
  {
    period: 5,
    stakingGenesis: 1645066800,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], LINK[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xd5cc1a949F7f70689742FE790F9A13292b5CfC35'
  }
]

const Period4: StakingRewardsInfo[] = [
  {
    period: 4,
    stakingGenesis: 1642215600,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x79438C8e9660C98845E7Fc8A136D1ff92a75F3Ec'
  },
  {
    period: 4,
    stakingGenesis: 1642215600,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xfE15Eb30C4f7b9a954A606BD57E4E027f63594e4'
  },
  {
    period: 4,
    stakingGenesis: 1642215600,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x0e5844d40c5896E349b1d8Ba152BA2978D023932'
  },
  {
    period: 4,
    stakingGenesis: 1642215600,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xB2dAB73324e0AE818cfDDA456DECAb367Cdec924'
  },
  {
    period: 4,
    stakingGenesis: 1642215600,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], UNI[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x93C9C4b40b5551a01dbB02D7D7D05f6Ff4585e43'
  },
  {
    period: 4,
    stakingGenesis: 1642215600,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], MDX[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x29390aAcd0F32E18E6a98b84C0ac14d41c85d085'
  },
  {
    period: 4,
    stakingGenesis: 1642215600,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], HBCH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x78F55552e0892ff4c31d04f2C14f20D3c3F1776E'
  },
  {
    period: 4,
    stakingGenesis: 1642215600,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], LTC[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x5cD637f1d277165ca3ee3fbF97c00a1f25D37a1D'
  },
  {
    period: 4,
    stakingGenesis: 1642215600,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], MANA[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x840Da5d561e59B05d7414B0d6Cf207171d73a527'
  },
  {
    period: 4,
    stakingGenesis: 1642215600,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DOT[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xd8c904aAf8C724b4d6F1c851c6C1F3c2530D746a'
  },
  {
    period: 4,
    stakingGenesis: 1642215600,
    rewardsDurationDays: 28,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], LINK[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x312630f2ddDe30919e39c531187f8fD7a93d3B76'
  }
]

const Period3: StakingRewardsInfo[] = [
  {
    period: 3,
    stakingGenesis: 1640574000,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x64521114F1d6cc11443A3323D62B78C1a6f219De'
  },
  {
    period: 3,
    stakingGenesis: 1640574000,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xCd0735E70130527A8be4B350282EfF7F7C81493F'
  },
  {
    period: 3,
    stakingGenesis: 1640574000,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x4CAf830A2409819Fd305db6a6ee65256ddeEFb70'
  },
  {
    period: 3,
    stakingGenesis: 1640574000,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x064b19554Ea3129502f75ED6604CAa41A3907D50'
  },
  {
    period: 3,
    stakingGenesis: 1640574000,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], UNI[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x527a40F20a851319E98C2E054f73F96ed2840d50'
  },
  {
    period: 3,
    stakingGenesis: 1640574000,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], MDX[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x8D788f53Dd56000A12Ab22D9fAb163Bf45Ff3E04'
  },
  {
    period: 3,
    stakingGenesis: 1640574000,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], HBCH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xf0428f4dD1748f97E04C44fd153ebE73Eb710A67'
  },
  {
    period: 3,
    stakingGenesis: 1640574000,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], LTC[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xb08F88a4979F8E1F6269394081e9C334d7337E82'
  },
  {
    period: 3,
    stakingGenesis: 1640574000,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], MANA[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x23600d396BFb9EAedBAfBAe35223f96A2fa1D143'
  },
  {
    period: 3,
    stakingGenesis: 1640574000,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DOT[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x89Ab83a6494b910083E16E4458bCACb6FBcF9F20'
  },
  {
    period: 3,
    stakingGenesis: 1640574000,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], LINK[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x08023E64C73A7a09073c6Fe395Cb64c7628722c0'
  }
]

const Period2: StakingRewardsInfo[] = [
  {
    period: 2,
    stakingGenesis: 1636426800,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xb04161cba8501b14fF302F1800AA96453e75941c'
  },
  {
    period: 2,
    stakingGenesis: 1636426800,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xE296D57c683fB9A91C40C717F8426F5816C1C0D3'
  },
  {
    period: 2,
    stakingGenesis: 1636426800,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x605786bA93535E0Be6fb669e882569c27E6e2eE3'
  },
  {
    period: 2,
    stakingGenesis: 1636426800,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xa0C906E72E3f72A592AbCFC1A3B471E2c4f2E0E7'
  },
  {
    period: 2,
    stakingGenesis: 1636426800,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], UNI[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x631527D7E2A9212f7D0528203a9d9491F1a7f19C'
  },
  {
    period: 2,
    stakingGenesis: 1636426800,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], MDX[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x8171E1E9673550899163e51a6219687BDbaae6C0'
  },
  {
    period: 2,
    stakingGenesis: 1636426800,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], HBCH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xb235E65357bEF0E51dF2028E6e5dc82C1Ef059a0'
  },
  {
    period: 2,
    stakingGenesis: 1636426800,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], LTC[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xbbeb7F75A7C514f95f4215C17795dE017F891a2c'
  }
]

const Period1: StakingRewardsInfo[] = [
  {
    period: 1,
    stakingGenesis: 1636426800,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], DAO[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xAe7184fcCCFc096f5F48Fffe384Cce8433FCE0E0'
  },
  {
    period: 1,
    stakingGenesis: 1636426800,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], ETH[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0x5E03E4b9402f4b8Dd4C983b87bA06A86e6aB4551'
  },
  {
    period: 1,
    stakingGenesis: 1636426800,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], FIL[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xAA4d98498DDb57eDb5C631ad96af95206751603d'
  },
  {
    period: 1,
    stakingGenesis: 1636426800,
    rewardsDurationDays: 14,
    rewardsTokenSymbol: 'DAO',
    tokens: [USDT[ChainId.HECO_MAINNET], HT[ChainId.HECO_MAINNET]],
    stakingRewardAddress: '0xD723E27DCC250914a4FFcbEce231B575F784bB0c'
  }
]

export const stakingRewardsInfo: StakingRewardsInfo[] = Period8.concat(
  Period7,
  Period6,
  Period5,
  Period4,
  Period3,
  Period2,
  Period1
)
