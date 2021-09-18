import { useState, useEffect } from 'react'

import useWeb3 from './useWeb3'

import { RewardToken } from '../../util/contants'

const useRewards = () => {
  const { contracts, accounts, web3 } = useWeb3()
  const [rewards, setRewards] = useState(0)

  async function loadRewards() {
    const rewards = await contracts.UniswapV3Staker.methods
      .rewards(RewardToken, accounts[0])
      .call()
    setRewards(rewards)
  }

  useEffect(() => {
    if (!contracts.UniswapV3Staker || !accounts.length) return
    loadRewards()
  }, [contracts, accounts])

  return { rewards }
}

export default useRewards
