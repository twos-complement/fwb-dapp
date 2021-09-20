import styled from 'styled-components'
import PropTypes from 'prop-types'

import { H6, Body2 } from '../core/Typography'
import { Button, TextButton } from '../core/Buttons'
import { ArrowUpRight } from '../core/icons'

const NFTListItem = ({ id, minTick, maxTick, handleClick }) => (
  <Wrapper onClick={handleClick}>
    <DataGrid>
      <InlineText>
        <H6 color="neutral000">FWB/ETH</H6>
        <PaddedSlash>
          <H6 color="neutral500">/</H6>
        </PaddedSlash>
        <H6 color="neutral500">{id}</H6>
      </InlineText>
      <InlineText>
        <Body2 color="neutral000">{minTick}</Body2>
        <PaddedSlash>
          <Body2 color="neutral500"> / </Body2>
        </PaddedSlash>
        <Body2 color="neutral000">{maxTick}</Body2>
      </InlineText>
    </DataGrid>

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

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${props => props.theme.bp.sm`
    margin-bottom: 40px;
  `}
`

const InlineText = styled.div`
  display: flex;
`

const PaddedSlash = styled.div`
  padding: 0 4px;
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
  handleClick: PropTypes.func.isRequired,
}

export default NFTListItem
