import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { useTranslation } from 'react-i18next'
import { useActiveWeb3React } from '../../hooks'
import { ChainId } from '@daoswapdex/daoswap-dex-sdk'
import { NavLink } from 'react-router-dom'

const Tabs = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  border-radius: 12px;
  justify-content: space-evenly;
  background: #ffffff;
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  justify-content: center;
  height: 3rem;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  font-size: 20px;
  width: 100%;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 500;
    color: #ffffff;
    background: #0005a1;
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
`

export function NodeTabs({ active }: { active: 'staking-lp' | 'staking-single' }) {
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()

  const isHecoNetwork = chainId === ChainId.HECO_MAINNET || chainId === ChainId.HECO_TESTNET

  return (
    <Tabs style={{ width: '100%' }}>
      <StyledNavLink id={`staking-lp-nav-link`} to={'/staking-lp'} isActive={() => active === 'staking-lp'}>
        {t(isHecoNetwork ? 'Bridge Staking' : 'Node Staking')}
      </StyledNavLink>
      <StyledNavLink id={`staking-single-nav-link`} to={'/staking-single'} isActive={() => active === 'staking-single'}>
        {t('DAO Staking')}
      </StyledNavLink>
    </Tabs>
  )
}
