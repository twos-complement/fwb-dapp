import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from './ui/core/Buttons'
import useModal from './hooks/useModal'
import { Body1 } from './ui/core/Typography'

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
        <Button
          onClick={() => {
            console.log('Unstaking', id)
          }}
        >
          Unstake
        </Button>
        <Button onClick={hideModal}>Cancel</Button>
      </ButtonsLayout>
    </Layout>
  )
}

StakedNFTModal.propTypes = {
  id: PropTypes.number.isRequired,
  pendingRewards: PropTypes.string.isRequired,
}

export default StakedNFTModal
