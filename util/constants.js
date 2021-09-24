// FWB Pro:
export const RewardToken = '0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8'
// FWB Pro:
export const IncentiveToken0 = '0x35bD01FC9d6D5D81CA9E055Db88Dc49aa2c699A8'
// WETH:
export const IncentiveToken1 = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

export const Incentive = {
  rewardToken: '0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8',
  pool: '0x9ab0905b39505d8682b58a57a41c4100e9c62ab6',
  startTime: 1632441600,
  endTime: 1642978800,
  refundee: '0x660F6D6c9BCD08b86B50e8e53B537F2B40f243Bd',
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
