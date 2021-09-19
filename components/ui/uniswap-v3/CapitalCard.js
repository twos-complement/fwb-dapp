import PropTypes from 'prop-types'
import styled from 'styled-components'

import HistoryCard from '../core/HistoryCard';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  grid-template-areas:
    'symbol value'
    'symbol label';
  grid-column-gap: 16px;
`

const Symbol = styled.p`
  grid-area: symbol;
  color: ${props => props.theme.colors.neutral050};
`

const Value = styled.p`
  grid-area: value;
  color: ${props => props.theme.colors.neutral050};
`

const Label = styled.p`
  grid-area: label;
  color: ${props => props.theme.colors.neutral050};
`

const CapitalCard = ({ symbol, value, label }) => (
  <HistoryCard>
    <Layout>
      <Symbol>{symbol}</Symbol>
      <Value>{value}</Value>
      <Label>{label}</Label>
    </Layout>
  </HistoryCard>
)

CapitalCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default CapitalCard
