import { createContext, useState } from 'react'

export const ModalContext = createContext({
  showModal: () => {},
})

export const ModalProvider = ({ children }) => {
  const [content, setContent] = useState()
  const [visible, setVisible] = useState(false)

  function showModal(content) {
    setContent(content)
    setVisible(true)
  }

  function hideModal() {
    setVisible(false)
  }

  return (
    <ModalContext.Provider value={{ showModal, hideModal, content, visible }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext
