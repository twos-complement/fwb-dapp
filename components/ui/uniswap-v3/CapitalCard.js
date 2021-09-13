import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from '../core/Card'

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
`

const Value = styled.p`
  grid-area: value;
`

const Label = styled.p`
  grid-area: label;
`

const CapitalCard = ({ symbol, value, label }) => (
  <Card>
    <Layout>
      <Symbol>{symbol}</Symbol>
      <Value>{value}</Value>
      <Label>{label}</Label>
    </Layout>
  </Card>
)

CapitalCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default CapitalCard
