import { useState, useEffect } from 'react'

import useWeb3 from './useWeb3'

import { RewardToken } from '../../util/contants'

const useAccruedRewards = () => {
  const { contracts, accounts, web3 } = useWeb3()
  const [accruedRewards, setAccruedRewards] = useState('0.0000')

  async function loadRewards() {
    const rewards = await contracts.UniswapV3Staker.methods
      .rewards(RewardToken, accounts[0])
      .call()
    setAccruedRewards(accruedRewards.toString())
  }

  useEffect(() => {
    if (!contracts.UniswapV3Staker || !accounts.length) return
    loadRewards()
  }, [contracts, accounts])

  return { accruedRewards }
}

export default useAccruedRewards
