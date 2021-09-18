import { useState, useEffect } from 'react'

import useWeb3 from './useWeb3'
import useUniswapV3Positions from './useUniswapV3Positions'

import {
  IncentiveStruct,
  Incentive,
  IncentiveToken0,
  IncentiveToken1,
} from '../../util/contants'

const useFWBProLPTokens = () => {
  const [tokens, setTokens] = useState([])
  const { positions } = useUniswapV3Positions()
  const { contracts, accounts, web3 } = useWeb3()

  async function loadStakes() {
    let newTokens = []

    // Encode incentive id:
    const incentiveId = web3.eth.abi.encodeParameter(IncentiveStruct, Incentive)
    const encodedIncentiveId = web3.utils.keccak256(incentiveId)

    // Filter only FWB-ETH positions:
    const FWBPositions = positions.filter(
      ({ token0, token1 }) =>
        token0 == IncentiveToken0 && token1 == IncentiveToken1,
    )

    // Iterate through positions, and check stakes status:
    for (var i = 0; i < FWBPositions.length; i++) {
      try {
        const stakes = await contracts.UniswapV3Staker.methods
          .stakes(FWBPositions[i].id, encodedIncentiveId)
          .call()
        const isStaked = stakes.secondsPerLiquidityInsideInitialX128 != '0'
        newTokens.push({
          ...FWBPositions[i],
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
