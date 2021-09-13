import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from '../core/Buttons'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
`

const StakeButtons = ({ handleStakeClick, handleClaimClick, claimEnabled }) => (
  <Layout>
    <Button onClick={handleStakeClick}>Stake & Unstake LP Tokens</Button>
    <Button
      onClick={() => claimEnabled && handleClaimClick()}
      isDisabled={!claimEnabled}
    >
      Claim Accrued Rewards
    </Button>
  </Layout>
)

StakeButtons.propTypes = {
  handleStakeClick: PropTypes.func.isRequired,
  handleClaimClick: PropTypes.func.isRequired,
  claimEnabled: PropTypes.bool.isRequired,
}

export default StakeButtons
