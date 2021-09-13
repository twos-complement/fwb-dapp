import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Body1 } from '../core/Typography'

const Wrapper = styled.div`
  background-color: gray;
  padding: 20px;
  cursor: pointer;
`

const NFTListItem = ({ id, handleClick }) => (
  <Wrapper onClick={handleClick}>
    <Body1>{id}</Body1>
  </Wrapper>
)

NFTListItem.propTypes = {
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default NFTListItem
