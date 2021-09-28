import styled, { css, keyframes } from 'styled-components'
import PropTypes from 'prop-types'

import { Body2 } from './Typography'
import { Times } from './icons'
import DirectionalFadeIn from './DirectionalFadeIn'

const COLORS = {
  info: 'primary500',
  success: 'success2',
  error: 'error2',
}

const SystemMessage = ({ message, handleDismiss }) => (
  <DirectionalFadeIn direction="left" offset={20}>
    <Layout state={message.state} animateOut={message.animateOut}>
      <Body2 color="neutral050">{message.text}</Body2>
      <Pointer onClick={() => handleDismiss(message)}>
        <Times />
      </Pointer>
    </Layout>
  </DirectionalFadeIn>
)

const fadeRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0px);
  }
  to {
    opacity: 0;
    transform: translateX(20px);
  }
`

const Layout = styled.div`
  ${props => css`
    display: grid;
    grid-template-columns: 1fr 20px;
    grid-column-gap: 16px;
    align-items: center;
    background-color: ${props.theme.colors.neutral800};
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${props.theme.colors[COLORS[props.state]]};
      height: 100%;
      width: 4px;
      border-radius: 4px 0 0 4px;
    }

    ${props.animateOut &&
    css`
      animation: ${fadeRight} 1000ms forwards;
    `}
  `}
`

const Pointer = styled.div`
  cursor: pointer;
`

SystemMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    animateOut: PropTypes.bool,
    state: PropTypes.oneOf(['info', 'success', 'error']).isRequired,
  }),
  handleDismiss: PropTypes.func.isRequired,
}

export default SystemMessage
