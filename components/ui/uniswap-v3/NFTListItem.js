import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Button, TextButton } from '../core/Buttons'
import { ArrowUpRight } from '../core/icons'
import NFTData from './NFTData'

const NFTListItem = ({ id, minTick, maxTick, handleClick }) => (
  <Wrapper onClick={handleClick}>
    <NFTData id={id} minTick={minTick} maxTick={maxTick} />
    <ButtonLayout>
      <a
        href={`https://opensea.io/assets/0xc36442b4a4522e871399cd717abdd847ab11fe88/${id}`}
        target="_blank"
        onClick={e => e.stopPropagation()}
      >
        <TextButton>
          Opensea <ArrowUpRight />
        </TextButton>
      </a>
      <Button>Stake</Button>
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
}

export default NFTListItem
