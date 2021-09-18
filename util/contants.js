// FWB Pro:
export const RewardToken = '0x35bD01FC9d6D5D81CA9E055Db88Dc49aa2c699A8'
// FWB Pro:
export const IncentiveToken0 = '0x35bD01FC9d6D5D81CA9E055Db88Dc49aa2c699A8'
// WETH:
export const IncentiveToken1 = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

export const Incentive = {
  //TODO: Replace DPI with FWB params:
  /* FWB-ETH
  rewardToken: '0x35bD01FC9d6D5D81CA9E055Db88Dc49aa2c699A8',
  pool: '0x9Ab0905B39505D8682B58A57A41c4100e9c62Ab6',
  startTime: 1632003785,
  endTime: 1632608585,
  refundee: '0x99b9bB23D300Dda4A1dC9eb8d2333704b235c165',
  */

  /* Testing with DPI: */
  rewardToken: RewardToken,
  pool: '0x9359c87B38DD25192c5f2b07b351ac91C90E6ca7',
  startTime: 1629493200,
  endTime: 1630789200,
  refundee: '0x9467cfADC9DE245010dF95Ec6a585A506A8ad5FC',
}

export const IncentiveStruct = {
  IncentiveKey: {
    rewardToken: 'address',
    pool: 'address',
    startTime: 'uint256',
    endTime: 'uint256',
    refundee: 'address',
  },
}

export default {}
