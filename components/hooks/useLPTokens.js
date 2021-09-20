import { useState, useEffect } from 'react'

import useWeb3 from './useWeb3'

import {
  Incentive,
  IncentiveToken0,
  IncentiveToken1,
} from '../../util/constants'

const useLPTokens = () => {
  const [tokens, setTokens] = useState([])
  const [pendingRewards, setPendingRewards] = useState('0')
  const [totalStakedTokens, setTotalStakedTokens] = useState(0)
  const { contracts, accounts, encodedIncentiveId } = useWeb3()

  async function getBalance() {
    return contracts.UniswapV3Positions.methods.balanceOf(accounts[0]).call()
  }

  async function getTokenIdByIndex(i) {
    const tokenId = await contracts.UniswapV3Positions.methods
      .tokenOfOwnerByIndex(accounts[0], i)
      .call()
    return tokenId.toString()
  }

  async function getPositionByTokenId(id) {
    return contracts.UniswapV3Positions.methods.positions(id).call()
  }

  async function getStakedStatusByTokenId(id) {
    const {
      secondsPerLiquidityInsideInitialX128,
    } = await contracts.UniswapV3Staker.methods
      .stakes(id, encodedIncentiveId)
      .call()
    return secondsPerLiquidityInsideInitialX128 != '0'
  }

  async function getRewardsByTokenId(id) {
    const { reward } = await contracts.UniswapV3Staker.methods
      .getRewardInfo(Incentive, id)
      .call()
    return reward
  }

  async function loadTokens() {
    let newTokens = []
    const balance = await getBalance()

    // Iterate through each token:
    for (var i = 0; i < balance; i++) {
      const tokenId = await getTokenIdByIndex(i)
      const position = await getPositionByTokenId(tokenId)

      // Only match FWB Pro <> ETH positions:
      if (
        position.token0 == IncentiveToken0 &&
        position.token1 == IncentiveToken1
      ) {
        const isStaked = await getStakedStatusByTokenId(tokenId)
        const reward = isStaked ? await getRewardsByTokenId(tokenId) : '0'
        newTokens.push({
          ...position,
          id: tokenId,
          isStaked,
          reward,
        })
      }
    }

    setTokens(newTokens)
    setPendingRewards(
      newTokens
        .reduce((total, token) => total + Number(token.reward), 0)
        .toString(),
    )
    setTotalStakedTokens(
      newTokens.reduce(
        (total, token) => (token.isStaked ? total + 1 : total),
        0,
      ),
    )
  }

  useEffect(() => {
    if (
      !contracts.UniswapV3Positions ||
      !accounts.length ||
      !encodedIncentiveId
    )
      return
    loadTokens()
  }, [contracts, accounts, encodedIncentiveId])

  return { tokens, pendingRewards, totalStakedTokens }
}

export default useLPTokens
