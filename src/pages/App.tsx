import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Polling from '../components/Header/Polling'
import URLWarning from '../components/Header/URLWarning'
import AnnouncementInfo from '../components/AnnouncementModal/AnnouncementInfo'
import AnnouncementModal from '../components/AnnouncementModal'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import Earn from './Earn'
import EarnInnovation from './EarnInnovation'
import EarnHistory from './EarnHistory'
import EarnHistory1 from './EarnHistory1'
import EarnHistory2 from './EarnHistory2'
import EarnHistory3 from './EarnHistory3'
import EarnHistory4 from './EarnHistory4'
import EarnHistory5 from './EarnHistory5'
import EarnHistory6 from './EarnHistory6'
import EarnHistoryBsc1 from './EarnHistoryBsc1'
import EarnHistoryBsc2 from './EarnHistoryBsc2'
import Manage from './Earn/Manage'
import EarnInnovationManage1 from './EarnInnovation/Manage1'
import EarnInnovationManage2 from './EarnInnovation/Manage2'
import ManageHistory from './EarnHistory/Manage'
import ManageHistory1 from './EarnHistory1/Manage'
import ManageHistory2 from './EarnHistory2/Manage'
import ManageHistory3 from './EarnHistory3/Manage'
import ManageHistory4 from './EarnHistory4/Manage'
import ManageHistory5 from './EarnHistory5/Manage'
import ManageHistory6 from './EarnHistory6/Manage'
import ManageHistoryBsc1 from './EarnHistoryBsc1/Manage'
import ManageHistoryBsc2 from './EarnHistoryBsc2/Manage'
import MigrateV1 from './MigrateV1'
import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange'
import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import Governace from './Governace'
import StakingLP from './Staking/StakingLP'
import StakingSingle from './Staking/StakingSingle'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 100px;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 16px;
    padding-top: 2rem;
  `};

  z-index: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  return (
    <Suspense fallback={null}>
      <Route component={DarkModeQueryParamReader} />
      <AppWrapper>
        <URLWarning />
        <AnnouncementInfo />
        <AnnouncementModal />
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <Popups />
          <Polling />
          <Web3ReactManager>
            <Switch>
              <Route exact strict path="/swap" component={Swap} />
              <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
              <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
              <Route exact strict path="/find" component={PoolFinder} />
              <Route exact strict path="/pool" component={Pool} />
              <Route exact strict path="/dao" component={Earn} />
              <Route exact strict path="/dao-innovation" component={EarnInnovation} />
              <Route exact strict path="/dao-history" component={EarnHistory} />
              <Route exact strict path="/dao-history-1" component={EarnHistory1} />
              <Route exact strict path="/dao-history-2" component={EarnHistory2} />
              <Route exact strict path="/dao-history-3" component={EarnHistory3} />
              <Route exact strict path="/dao-history-4" component={EarnHistory4} />
              <Route exact strict path="/dao-history-5" component={EarnHistory5} />
              <Route exact strict path="/dao-history-6" component={EarnHistory6} />
              <Route exact strict path="/dao-history-bsc-1" component={EarnHistoryBsc1} />
              <Route exact strict path="/dao-history-bsc-2" component={EarnHistoryBsc2} />
              <Route exact strict path="/create" component={RedirectToAddLiquidity} />
              <Route exact path="/add" component={AddLiquidity} />
              <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
              <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
              <Route exact path="/create" component={AddLiquidity} />
              <Route exact path="/create/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
              <Route exact path="/create/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
              <Route exact strict path="/remove/v1/:address" component={RemoveV1Exchange} />
              <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
              <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
              <Route exact strict path="/migrate/v1" component={MigrateV1} />
              <Route exact strict path="/migrate/v1/:address" component={MigrateV1Exchange} />
              <Route exact strict path="/dao/:period/:currencyIdA/:currencyIdB" component={Manage} />
              <Route
                exact
                strict
                path="/dao-innovation-1/:currencyIdA/:currencyIdB"
                component={EarnInnovationManage1}
              />
              <Route
                exact
                strict
                path="/dao-innovation-2/:currencyIdA/:currencyIdB"
                component={EarnInnovationManage2}
              />
              <Route exact strict path="/dao-history/:period/:currencyIdA/:currencyIdB" component={ManageHistory} />
              <Route exact strict path="/dao-history-1/:currencyIdA/:currencyIdB" component={ManageHistory1} />
              <Route exact strict path="/dao-history-2/:currencyIdA/:currencyIdB" component={ManageHistory2} />
              <Route exact strict path="/dao-history-3/:currencyIdA/:currencyIdB" component={ManageHistory3} />
              <Route exact strict path="/dao-history-4/:currencyIdA/:currencyIdB" component={ManageHistory4} />
              <Route exact strict path="/dao-history-5/:currencyIdA/:currencyIdB" component={ManageHistory5} />
              <Route exact strict path="/dao-history-6/:currencyIdA/:currencyIdB" component={ManageHistory6} />
              <Route exact strict path="/dao-history-bsc-1/:currencyIdA/:currencyIdB" component={ManageHistoryBsc1} />
              <Route exact strict path="/dao-history-bsc-2/:currencyIdA/:currencyIdB" component={ManageHistoryBsc2} />
              <Route exact strict path="/governace" component={Governace} />
              <Route exact strict path="/staking-lp" component={StakingLP} />
              <Route exact strict path="/staking-single" component={StakingSingle} />
              <Route component={RedirectPathToSwapOnly} />
            </Switch>
          </Web3ReactManager>
          <Marginer />
        </BodyWrapper>
      </AppWrapper>
    </Suspense>
  )
}
