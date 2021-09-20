import styled, { css } from 'styled-components'

import useModal from '../../hooks/useModal'
import DirectionalFadeIn from './DirectionalFadeIn'

const Backdrop = styled.div`
  position: absolute;
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
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  max-width: 600px;

  ${props => props.theme.glowShadows.xs}
`

const Modal = () => {
  const { content, hideModal, visible } = useModal()
  return (
    <Backdrop onClick={hideModal} visible={visible}>
      <DirectionalFadeIn direction="up" duration={500}>
        <Layout onClick={e => e.stopPropagation()}>
          <Content>{content}</Content>
        </Layout>
      </DirectionalFadeIn>
    </Backdrop>
  )
}

export default Modal
