import Card from './ui/core/Card'
import ValuesSection from './ui/uniswap-v3/ValuesSection'
import StakeButtons from './ui/uniswap-v3/StakeButtons'
import StakeModal from './ui/uniswap-v3/StakeModal'
import ClaimRewardsModal from './ui/uniswap-v3/ClaimRewardsModal'

import useModal from './hooks/useModal'

const LPCard = () => {
  // TODO: Fetch data:
  const stakedNFTs = '0'
  const pendingRewards = '0.00000'
  const accruedRewards = '2.00000'
  const NFTs = [
    {
      id: 123456,
      isStaked: false,
      pendingRewards: '0 FWB Pro',
    },
    {
      id: 987654,
      isStaked: true,
      pendingRewards: '2.00000 FWB Pro',
    },
  ]

  const { showModal } = useModal()

  return (
    <Card>
      <h4>Uniswap V3 FWB Pro - ETH Liquidity Program</h4>
      <ValuesSection
        stakedNFTs={stakedNFTs}
        pendingRewards={pendingRewards}
        accruedRewards={accruedRewards}
      />
      <StakeButtons
        handleStakeClick={() => {
          showModal(<StakeModal NFTs={NFTs} />)
        }}
        handleClaimClick={() => {
          console.log('Claiming rewards...')
        }}
        claimEnabled={Number(accruedRewards) > 0}
      />
    </Card>
  )
}

export default LPCard
