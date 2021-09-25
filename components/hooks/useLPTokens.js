import { useState, useEffect } from 'react'

import useWeb3 from './useWeb3'

import {
  Incentive,
  IncentiveToken0,
  IncentiveToken1,
  UniswapV3StakerAddress,
} from '../../util/constants'

const useLPTokens = () => {
  const [tokens, setTokens] = useState([])
  const [pendingRewards, setPendingRewards] = useState('0')
  const [totalStakedTokens, setTotalStakedTokens] = useState(0)
  const { contracts, accounts, encodedIncentiveId, web3 } = useWeb3()

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

  async function getRewardsByTokenId(id) {
    const { reward } = await contracts.UniswapV3Staker.methods
      .getRewardInfo(Incentive, id)
      .call()
    return parseFloat(web3.utils.fromWei(reward.toString())).toFixed(5)
  }

  async function getStakedStatusByTokenId(id) {
    const {
      secondsPerLiquidityInsideInitialX128,
    } = await contracts.UniswapV3Staker.methods
      .stakes(id, encodedIncentiveId)
      .call()
    return secondsPerLiquidityInsideInitialX128 != '0'
  }

  async function getUnstakedTokens() {
    const unstakedTokens = []

    // Iterate through each token owned by owner:
    const balance = await getBalance()
    for (var i = 0; i < balance; i++) {
      const tokenId = await getTokenIdByIndex(i)
      const position = await getPositionByTokenId(tokenId)
      // Only match FWB Pro <> ETH positions:
      if (
        position.token0 == IncentiveToken0 &&
        position.token1 == IncentiveToken1
      ) {
        unstakedTokens.push({
          ...position,
          id: tokenId,
          isStaked: false,
          reward: '0',
        })
      }
    }

    return unstakedTokens
  }

  async function getStakedTokens() {
    const stakedTokens = []

    // Iterate through each token owned by staker contract:
    const allStakedTokenIds = (
      await contracts.UniswapV3Positions.getPastEvents('Transfer', {
        fromBlock: 0,
        toBlock: 'latest',
        filter: {
          from: accounts[0],
          to: UniswapV3StakerAddress || '',
        },
      })
    ).map(event => event.returnValues['tokenId'])
    const stakedTokenIds = Array.from(new Set(allStakedTokenIds))

    for (var i = 0; i < stakedTokenIds.length; i++) {
      const position = await getPositionByTokenId(stakedTokenIds[i])
      const isStillStaked = await getStakedStatusByTokenId(stakedTokenIds[i])
      if (isStillStaked) {
        const reward = await getRewardsByTokenId(stakedTokenIds[i])
        stakedTokens.push({
          ...position,
          id: stakedTokenIds[i],
          isStaked: true,
          reward,
        })
      }
    }

    return stakedTokens
  }

  async function loadTokens() {
    const unstakedTokens = await getUnstakedTokens()
    const stakedTokens = await getStakedTokens()

    setTokens([...unstakedTokens, ...stakedTokens])
    setPendingRewards(
      stakedTokens
        .reduce((total, token) => total + Number(token.reward), 0)
        .toString(),
    )
    setTotalStakedTokens(stakedTokens.length)
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
