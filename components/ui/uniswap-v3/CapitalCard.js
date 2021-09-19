import PropTypes from 'prop-types'
import styled from 'styled-components'

import HistoryCard from '../core/HistoryCard'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 66px auto;
  grid-template-rows: 66px;
  grid-template-areas: 'symbol details';
  grid-column-gap: 16px;
`

const Symbol = styled.p`
  grid-area: symbol;
  font-size: 40px;
  color: ${props => props.theme.colors.neutral050};
  background-color: ${props => props.theme.colors.neutral050};
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Value = styled.p`
  color: ${props => props.theme.colors.neutral050};
`

const Label = styled.p`
  text-transform: uppercase;
  margin: 0;
  color: ${props => props.theme.colors.neutral400};
`

const Details = styled.div`
  grid-area: details;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Multiplier = styled.span`
  text-transform: uppercase;
  color: ${props => props.theme.colors.neutral400};
`

const CapitalCard = ({ symbol, value, label, multiplier = '' }) => (
  <HistoryCard>
    <Layout>
      <Symbol>{symbol}</Symbol>
      <Details>
        <Value>
          {value} <Multiplier>{multiplier}</Multiplier>
        </Value>
        <Label>{label}</Label>
      </Details>
    </Layout>
  </HistoryCard>
)

CapitalCard.propTypes = {
  symbol: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  label: PropTypes.string,
}

export default CapitalCard
