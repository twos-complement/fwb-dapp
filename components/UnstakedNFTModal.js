import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import NFTData from './ui/uniswap-v3/NFTData'
import useModal from './hooks/useModal'
import useWeb3 from './hooks/useWeb3'
import useSystemMessage from './hooks/useSystemMessage'
import useLPTokens from './hooks/useLPTokens'
import { Body1, Overline1 } from './ui/core/Typography'
import { TextButton, Button } from './ui/core/Buttons'
import { UniswapV3StakerAddress } from '../util/constants'
import FarmCard from './ui/uniswap-v3/FarmCard'

const UnstakedNFTModal = ({ id, minTick, maxTick }) => {
  const [loading, setLoading] = useState(false)
  const { hideModal } = useModal()
  const { contracts, accounts, encodedIncentiveParameter } = useWeb3()
  const { createMessage } = useSystemMessage()
  const { loadTokens } = useLPTokens()

  async function depositAndStake() {
    setLoading(true)
    try {
      await contracts.UniswapV3Positions.methods
        .safeTransferFrom(
          accounts[0],
          UniswapV3StakerAddress,
          id,
          encodedIncentiveParameter,
        )
        .send({ from: accounts[0] })
      await loadTokens()
      setLoading(false)
      createMessage({
        text: `Successfully deposited and staked token ${id}!`,
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
          This token is currently unstaked and undeposited in any active LM
          farms. In order to earn Uniswap V3 LM rewards you must deposit this
          NFT to the Uniswap V3 Staking contract, and stake it in the following
          farm:
        </Body1>
        <FarmCardGrid>
          <Overline1 color="neutral050">Active Farm</Overline1>
          <FarmCard />
        </FarmCardGrid>
        <ButtonsLayout>
          <Button onClick={depositAndStake}>
            {loading ? 'Pending...' : 'Deposit & Stake'}
          </Button>
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

const FarmCardGrid = styled.div`
  display: grid;
  grid-row-gap: 8px;
`

const ButtonsLayout = styled.div`
  display: flex;
  flex-direction: row-reverse;
  > * {
    margin-left: 16px;
  }
`

UnstakedNFTModal.propTypes = {
  id: PropTypes.string.isRequired,
  minTick: PropTypes.string.isRequired,
  maxTick: PropTypes.string.isRequired,
}

export default UnstakedNFTModal
