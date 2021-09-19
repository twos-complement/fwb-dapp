import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Body1 } from '../core/Typography'

const Wrapper = styled.div`
  background-color: gray;
  padding: 20px;
  cursor: pointer;
`

const NFTListItem = ({ id, minTick, maxTick, handleClick }) => (
  <Wrapper onClick={handleClick}>
    <Body1>FWB/ETH</Body1>
    <Body1>ID: {id}</Body1>
    <Body1>
      min/max {minTick} / {maxTick}
    </Body1>
  </Wrapper>
)

NFTListItem.propTypes = {
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default NFTListItem
