import { useContext } from 'react'

import SystemMessageContext from '../contexts/SystemMessageContext'

const useSystemMessage = () => {
  const context = useContext(SystemMessageContext)
  return context
}

export default useSystemMessage
