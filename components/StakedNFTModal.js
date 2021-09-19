import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from './ui/core/Buttons'
import useWeb3 from './hooks/useWeb3'
import useModal from './hooks/useModal'
import { Body1 } from './ui/core/Typography'
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

const StakedNFTModal = ({ id, pendingRewards }) => {
  const { hideModal } = useModal()
  const { contracts } = useWeb3()

  async function unstake() {
    await contracts.UniswapV3Staker.methods.unstakeToken(Incentive, id).call()
    hideModal()
  }

  return (
    <Layout>
      <h5>{id}</h5>
      <Body1>
        This token is currently deposited in the Uniswap V3 staking contract.
        The active farm below is accruing you rewards:
      </Body1>
      <h6>Active Farm</h6>
      <p>Pending Rewards: {pendingRewards}</p>
      <ButtonsLayout>
        <Button onClick={unstake}>Unstake</Button>
        <Button onClick={hideModal}>Cancel</Button>
      </ButtonsLayout>
    </Layout>
  )
}

StakedNFTModal.propTypes = {
  id: PropTypes.string.isRequired,
  pendingRewards: PropTypes.string.isRequired,
}

export default StakedNFTModal
