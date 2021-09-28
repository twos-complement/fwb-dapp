import { useContext } from 'react'

import LPTokensContext from '../contexts/LPTokensContext'

const useLPTokens = () => {
  const context = useContext(LPTokensContext)
  return context
}

export default useLPTokens
