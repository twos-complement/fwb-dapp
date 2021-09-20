import styled from 'styled-components'
import PropTypes from 'prop-types'

import { H3, Body1 } from '../core/Typography'

const ValueSection = ({
  totalStakedTokens,
  pendingRewards,
  accruedRewards,
}) => (
  <Layout>
    <div>
      <H3 color="neutral900">{totalStakedTokens}</H3>
      <Body1 color="neutral700">Staked Uniswap V3 NFTs</Body1>
    </div>
    <div>
      <H3 color="neutral900">{pendingRewards}</H3>
      <Body1 color="neutral700">Pending Rewards</Body1>
    </div>
    <div>
      <H3 color="neutral900">{accruedRewards}</H3>
      <Body1 color="neutral700">Accrued Rewards</Body1>
    </div>
  </Layout>
)

const Layout = styled.div`
  background-color: ${props => props.theme.colors.primary050};
  border-radius: 16px;
  padding: 16px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 16px;

  ${props => props.theme.bp.sm`
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
  `}
`

ValueSection.propTypes = {
  totalStakedTokens: PropTypes.number.isRequired,
  pendingRewards: PropTypes.string.isRequired,
  accruedRewards: PropTypes.string.isRequired,
}

export default ValueSection
