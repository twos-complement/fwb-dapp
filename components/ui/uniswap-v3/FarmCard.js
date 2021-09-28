import styled from 'styled-components'

import { H4Alt, Body2 } from '../core/Typography'
import { Incentive } from '../../../util/constants'
import { EthereumToken, FWBToken } from '../core/icons'

const FarmCard = () => (
  <Wrapper>
    <Tokens>
      <EthereumToken />
      <FWBToken />
    </Tokens>
    <div>
      <H4Alt color="neutral050">Uniswap V3 ETH - FWB</H4Alt>
      <Body2 color="neutral050">
        {Intl.DateTimeFormat('en', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(Incentive.startTime * 1000))}
        &nbsp;&mdash;&nbsp;
        {Intl.DateTimeFormat('en', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(Incentive.endTime * 1000))}
      </Body2>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  grid-column-gap: 24px;
  align-items: center;
  background-color: ${props => props.theme.colors.neutral800};
  border-radius: 16px;
  padding: 16px;

  ${props => props.theme.bp.sm`
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
  `}
`

const Tokens = styled.div`
  display: flex;

  > :last-child {
    margin-left: -10px;
  }
`

export default FarmCard
