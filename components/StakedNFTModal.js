import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import NFTData from './ui/uniswap-v3/NFTData'
import { TextButton, SecondaryButton } from './ui/core/Buttons'
import useWeb3 from './hooks/useWeb3'
import useModal from './hooks/useModal'
import useSystemMessage from './hooks/useSystemMessage'
import useLPTokens from './hooks/useLPTokens'
import { H3, Overline1, Body1 } from './ui/core/Typography'
import { Incentive } from '../util/constants'
import { FWBAbbreviatedOutline } from './ui/core/icons'

const StakedNFTModal = ({ id, minTick, maxTick, pendingRewards }) => {
  const [loading, setLoading] = useState(false)
  const { hideModal } = useModal()
  const { contracts, accounts } = useWeb3()
  const { createMessage } = useSystemMessage()
  const { loadTokens } = useLPTokens()

  async function unstakeAndWithdraw() {
    try {
      setLoading(true)
      const unstakeCall = contracts.UniswapV3Staker.methods
        .unstakeToken(Incentive, id)
        .encodeABI()
      const withdrawCall = contracts.UniswapV3Staker.methods
        .withdrawToken(id, accounts[0], '0x')
        .encodeABI()
      await contracts.UniswapV3Staker.methods
        .multicall([unstakeCall, withdrawCall])
        .send({ from: accounts[0] })
      await loadTokens()
      setLoading(false)
      createMessage({
        text: `Successfully unstaked and withdrew token ${id}!`,
        state: 'success',
      })
      hideModal()
    } catch (e) {
      setLoading(false)
      createMessage({
        text: e.message,
        state: 'error',
      })
    }
  }

  return (
    <Layout>
      <div>
        <NFTData id={id} minTick={minTick} maxTick={maxTick} size="lg" />
      </div>
      <Content>
        <Body1 color="neutral200">
          This token is currently deposited in the Uniswap V3 staking contract.
          The active farm below is accruing you rewards:
        </Body1>
        <Overline1 color="neutral050">Pending Rewards</Overline1>
        <PendingRewards>
          <H3 color="neutral050">{pendingRewards}</H3>
          <FWBAbbreviatedOutline />
        </PendingRewards>
        <ButtonsLayout>
          <SecondaryButton onClick={unstakeAndWithdraw}>
            {loading ? 'Pending...' : 'Unstake & Withdraw'}
          </SecondaryButton>
          <TextButton onClick={hideModal}>Cancel</TextButton>
        </ButtonsLayout>
      </Content>
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;

  > * {
    padding: 24px;
  }
`

const Content = styled.div`
  border-top: 1px solid ${props => props.theme.colors.neutral700};
  display: grid;
  grid-row-gap: 24px;
`

const PendingRewards = styled.div`
  background-color: ${props => props.theme.colors.neutral800};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;

  > * {
    margin-right: 8px;
  }
`

const ButtonsLayout = styled.div`
  display: flex;
  flex-direction: row-reverse;
  > * {
    margin-left: 16px;
  }
`

StakedNFTModal.propTypes = {
  id: PropTypes.string.isRequired,
  minTick: PropTypes.string.isRequired,
  maxTick: PropTypes.string.isRequired,
  pendingRewards: PropTypes.string.isRequired,
}

export default StakedNFTModal
