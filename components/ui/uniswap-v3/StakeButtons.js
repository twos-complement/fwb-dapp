import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button } from '../core/Buttons'

const StakeButtons = ({
  handleStakeClick,
  handleClaimClick,
  stakeEnabled,
  claimEnabled,
}) => (
  <Layout>
    <Button onClick={handleStakeClick} isDisabled={!stakeEnabled}>
      Stake & Unstake LP Tokens
    </Button>
    <Button
      onClick={() => claimEnabled && handleClaimClick()}
      isDisabled={!claimEnabled}
    >
      Claim Accrued Rewards
    </Button>
  </Layout>
)

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;

  ${props => props.theme.bp.sm`
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
  `}
`

StakeButtons.propTypes = {
  handleStakeClick: PropTypes.func.isRequired,
  handleClaimClick: PropTypes.func.isRequired,
  claimEnabled: PropTypes.bool.isRequired,
}

export default StakeButtons
