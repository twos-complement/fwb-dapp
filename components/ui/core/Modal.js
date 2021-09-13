import styled, { css } from 'styled-components'

import useModal from '../../hooks/useModal'

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
  margin: 200px auto 0;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  max-width: 600px;
`

const Modal = () => {
  const { content, hideModal, visible } = useModal()
  return (
    <Backdrop onClick={hideModal} visible={visible}>
      <Layout onClick={e => e.stopPropagation()}>{content}</Layout>
    </Backdrop>
  )
}

export default Modal
