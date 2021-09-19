import styled from 'styled-components'
import PropTypes from 'prop-types'

import useModal from './hooks/useModal'
import useWeb3 from './hooks/useWeb3'
import { Body1 } from './ui/core/Typography'
import { Button } from './ui/core/Buttons'
import { Incentive } from '../util/constants'

const Layout = styled.div`
  display: grid;
`

const ButtonsLayout = styled.div`
  display: flex;
  flex-direction: row-reverse;
  > * {
    margin-left: 16px;
  }
`

const UnstakedNFTModal = ({ id }) => {
  const { hideModal } = useModal()
  const { contracts } = useWeb3()

  async function stake() {
    await contracts.UniswapV3Staker.methods.stakeToken(Incentive, id).call()
    hideModal()
  }

  return (
    <Layout>
      <h5>{id}</h5>
      <Body1>
        This token is currently unstaked and undeposited in any active LM farms.
        In order to earn Uniswap V3 LM rewards you must deposit this NFT to the
        Uniswap V3 Staking contract, and stake it in the following farm:
      </Body1>
      <h6>Active Farm</h6>
      <ButtonsLayout>
        <Button onClick={stake}>Deposit & Stake</Button>
        <Button onClick={hideModal}>Cancel</Button>
      </ButtonsLayout>
    </Layout>
  )
}

UnstakedNFTModal.propTypes = {
  id: PropTypes.string.isRequired,
}

export default UnstakedNFTModal
