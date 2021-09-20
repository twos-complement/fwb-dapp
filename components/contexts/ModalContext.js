import { createContext, useState } from 'react'

export const ModalContext = createContext({
  showModal: () => {},
})

export const ModalProvider = ({ children }) => {
  const [content, setContent] = useState()
  const [visible, setVisible] = useState(false)
  const [color, setColor] = useState('light')

  function showModal({ content, color }) {
    setContent(content)
    setColor(color || 'light')
    setVisible(true)
  }

  function hideModal() {
    setVisible(false)
  }

  return (
    <ModalContext.Provider
      value={{ showModal, hideModal, content, visible, color }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext
