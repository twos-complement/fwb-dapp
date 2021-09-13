import { useContext } from 'react'

import ModalContext from '../contexts/ModalContext'

const useModal = () => {
  const context = useContext(ModalContext)
  return context
}

export default useModal
