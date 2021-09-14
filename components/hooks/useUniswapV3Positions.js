import { useState, useEffect } from 'react'

import useWeb3 from './useWeb3'

const useUniswapV3Positions = () => {
  const [positions, setPositions] = useState([])
  const { contracts, accounts } = useWeb3()

  async function loadPositions() {
    let newPositions = []

    // Get balance of tokens:
    const balance = await contracts.UniswapV3Positions.methods
      .balanceOf(accounts[0])
      .call()

    // Iterate through each token:
    for (var i = 0; i < balance; i++) {
      const tokenId = await contracts.UniswapV3Positions.methods
        .tokenOfOwnerByIndex(accounts[0], i)
        .call()
      const position = await contracts.UniswapV3Positions.methods
        .positions(tokenId)
        .call()

      newPositions.push({
        id: tokenId,
        ...position,
      })
    }

    setPositions(newPositions)
  }

  useEffect(() => {
    if (!contracts.UniswapV3Positions || !accounts.length) return
    loadPositions()
  }, [contracts, accounts])

  return { positions }
}

export default useUniswapV3Positions
