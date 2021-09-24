import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button, TextButton } from '../core/Buttons'
import { ArrowUpRight } from '../core/icons'
import NFTData from './NFTData'

const NFTListItem = ({ id, minTick, maxTick, handleClick, isStaked }) => (
  <Wrapper onClick={handleClick}>
    <NFTData id={id} minTick={minTick} maxTick={maxTick} />
    <ButtonLayout>
      <a
        href={`https://app.uniswap.org/#/pool/${id}`}
        target="_blank"
        onClick={e => e.stopPropagation()}
      >
        <TextButton>
          View Token <ArrowUpRight />
        </TextButton>
      </a>
      <Button>{isStaked ? 'Unstake' : 'Stake'}</Button>
    </ButtonLayout>
  </Wrapper>
)

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.neutral900};
  padding: 24px;
  cursor: pointer;
  border-radius: 16px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props => props.theme.bp.sm`
    flex-direction: column;
    align-items: flex-start;
  `}
`

const ButtonLayout = styled.div`
  display: flex;

  > a {
    display: flex;
    align-items: center;
  }

  > * {
    margin-left: 10px;
  }

  ${props => props.theme.bp.sm`
    width: 100%;
    justify-content: space-between;
    > * {
      margin-left: 0;
    }
  `}
`

NFTListItem.propTypes = {
  id: PropTypes.string.isRequired,
  minTick: PropTypes.string.isRequired,
  maxTick: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isStaked: PropTypes.bool.isRequired,
}

export default NFTListItem
