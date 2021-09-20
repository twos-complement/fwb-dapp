import styled from 'styled-components'
import PropTypes from 'prop-types'

import { H3, H6, Body2 } from '../core/Typography'

const NFTData = ({ id, minTick, maxTick, size = 'sm' }) => {
  const Header = size === 'lg' ? H3 : H6
  const Sub = size === 'lg' ? H6 : Body2

  return (
    <Wrapper>
      <InlineText>
        <Header color="neutral000">FWB - ETH</Header>
        <PaddedSlash>
          <Header color="neutral500">/</Header>
        </PaddedSlash>
        <Header color="neutral500">{id}</Header>
      </InlineText>
      <InlineText>
        <Sub color="neutral000">{minTick}</Sub>
        <PaddedSlash>
          <Sub color="neutral500"> / </Sub>
        </PaddedSlash>
        <Sub color="neutral000">{maxTick}</Sub>
      </InlineText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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

NFTData.propTypes = {
  id: PropTypes.string.isRequired,
  minTick: PropTypes.string.isRequired,
  maxTick: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'lg']),
}

export default NFTData
