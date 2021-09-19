import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Caption } from '../core/Typography'

const Layout = styled.div`
  background-color: ${props => props.theme.colors.primary050};
  border-radius: 16px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;
`

const ValueSection = ({
  totalStakedTokens,
  pendingRewards,
  accruedRewards,
}) => (
  <Layout>
    <div>
      <h5>{totalStakedTokens}</h5>
      <Caption>Staked Uniswap V3 NFTs</Caption>
    </div>
    <div>
      <h5>{pendingRewards}</h5>
      <Caption>Pending Rewards</Caption>
    </div>
    <div>
      <h5>{accruedRewards}</h5>
      <Caption>Accrued Rewards</Caption>
    </div>
  </Layout>
)

ValueSection.propTypes = {
  totalStakedTokens: PropTypes.number.isRequired,
  pendingRewards: PropTypes.string.isRequired,
  accruedRewards: PropTypes.string.isRequired,
}

export default ValueSection
