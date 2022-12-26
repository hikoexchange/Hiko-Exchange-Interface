import React from 'react'
import styled from 'styled-components'
import Modal from '../Modal'
import { Text } from 'rebass'
import { CloseIcon } from '../../theme/components'
import { RowBetween } from '../Row'
import { AutoColumn } from '../Column'
import { useAnnouncementInfoToggle, useAnnouncementInfoVisible } from '../../state/announcement/hooks'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

const Wrapper = styled.div`
  width: 100%;
  max-width: 420px;
  overflow-y: auto;
`
const Section = styled(AutoColumn)`
  padding: 24px;
`

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primary1};
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`

function ConfirmationContent({ onDismiss }: { onDismiss: () => void }) {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Section>
        <RowBetween>
          <Text fontWeight={500} fontSize={16}>
            {t('Announcement')}
          </Text>
          <CloseIcon onClick={onDismiss} />
        </RowBetween>
        <AutoColumn gap="auto" justify={'start'}>
          <Text
            fontWeight={500}
            fontSize={14}
            margin={10}
            color={'red'}
            display={i18next.language === 'en' ? 'none' : 'normal'}
          >
            {t('Kind tips')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('tips-1')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('tips-2')}
            </Text>
          </Text>
        </AutoColumn>
        <AutoColumn gap="auto" justify={'start'}>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('1, Invitation.')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Will be implemented on January 23rd, 2022 at 11#58;00 am, after this time.')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Directly invite others to pledge one-year USDT-DAO LPs (>= 100 LPs) , will be awarded 20% of the LP value (10% DAO, 10% DST).'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Direct invitation to pledge single currency DAO (>=100 LPs), will be rewarded at 8% of the DAO pledge quantity in DST.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                "Rewards for invitations to unlock will be transferred directly to the inviter's wallet address at the time of pledge by the pledging party."
              )}
            </Text>
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10}>
            {t('2, Task 6.')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Starting with the 5th period of arithmetic and competitive mining, perform task 6#58; reward the number of new nodes within the team according to the team of node identity wallet address (except for existing Genesis and seed nodes.)'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t(
                'Task 6 rewards only pledged 1-year planets and stars, and those still unpledged are automatically counted as rewards in the next period after pledging. If you need to unlock mission 6, please pledge as soon as possible during the node pledge period, missing the pledge period will not count towards the mission 6 reward.'
              )}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Collection address 1.')}{' '}
              <StyledLink href={'https://apps.hiko.exchange'}>apps.hiko.exchange</StyledLink>
            </Text>
            {/* <Text fontWeight={500} fontSize={14} margin={10}>
              {t('Collection address 2.')}{' '}
              <StyledLink href={'https://bsc.www.daoswap.cc/task-6'}>https://bsc.www.daoswap.cc/task-6</StyledLink>
            </Text> */}
          </Text>
          <Text fontWeight={500} fontSize={14} margin={10} display={i18next.language === 'en' ? 'none' : 'normal'}>
            {t('3, Genesis Node Task 8.')}
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-intro')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-1')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-2')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-3')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-4')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-5')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-6')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-7')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-8')}
            </Text>
            <Text fontWeight={500} fontSize={14} margin={10}>
              {t('task8-9')}
            </Text>
          </Text>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default function AnnouncementModal() {
  const toggleAnnouncementInfo = useAnnouncementInfoToggle()
  const showAnnouncementInfo = useAnnouncementInfoVisible()

  return (
    <Modal isOpen={!showAnnouncementInfo} onDismiss={toggleAnnouncementInfo} maxHeight={90}>
      <ConfirmationContent onDismiss={toggleAnnouncementInfo} />
    </Modal>
  )
}
