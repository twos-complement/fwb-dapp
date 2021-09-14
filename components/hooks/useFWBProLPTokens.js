import { useState, useEffect } from 'react'

import useWeb3 from './useWeb3'
import useUniswapV3Positions from './useUniswapV3Positions'

// TODO: set incentive id:
const INCENTIVE_ID = ''

const useFWBProLPTokens = () => {
  const [tokens, setTokens] = useState([])
  const { positions } = useUniswapV3Positions()
  const { contracts, accounts } = useWeb3()

  async function loadStakes() {
    let newTokens = []

    for (var i = 0; i < positions.length; i++) {
      try {
        const stakes = await contracts.UniswapV3Staker.methods
          .stakes(positions[i].id, INCENTIVE_ID)
          .call()
        console.log(stakes)
        // TODO: set stake status based on stake info:
        const isStaked = false
        newTokens.push({
          ...positions,
          isStaked,
        })
      } catch (e) {}
    }

    setTokens(newTokens)
  }

  useEffect(() => {
    if (!contracts.UniswapV3Staker || !accounts.length || !positions.length)
      return
    loadStakes()
  }, [contracts, accounts, positions])

  return { tokens }
}

export default useFWBProLPTokens
