import styled, { css } from 'styled-components'

import useModal from '../../hooks/useModal'
import DirectionalFadeIn from './DirectionalFadeIn'

const Modal = () => {
  const { content, hideModal, visible, color } = useModal()
  return (
    <Backdrop onClick={hideModal} visible={visible}>
      <DirectionalFadeIn direction="up" duration={500}>
        <Layout onClick={e => e.stopPropagation()}>
          <Content color={color}>{content}</Content>
        </Layout>
      </DirectionalFadeIn>
    </Backdrop>
  )
}

const Backdrop = styled.div`
  position: fixed;
  backdrop-filter: blur(5px);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);

  ${({ visible }) =>
    !visible &&
    css`
      display: none;
    `}
`

const Layout = styled.div`
  padding: 0 10px;

  ${props => props.theme.bp.sm`
    margin-top: 100px;
  `}
`

const Content = styled.div`
  margin: 200px auto 0;
  border-radius: 20px;
  max-width: 600px;

  ${({ theme, color }) => css`
    ${theme.glowShadows.xs}
    background-color: ${
      color === 'light' ? theme.colors.neutral000 : theme.colors.neutral900
    };
  `}
`

export default Modal
