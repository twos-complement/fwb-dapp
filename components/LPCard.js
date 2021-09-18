import Card from './ui/core/Card'
import ValuesSection from './ui/uniswap-v3/ValuesSection'
import StakeButtons from './ui/uniswap-v3/StakeButtons'
import StakeModal from './ui/uniswap-v3/StakeModal'

import useModal from './hooks/useModal'
import useFWBProLPTokens from './hooks/useFWBProLPTokens'
import useRewards from './hooks/useRewards'

const LPCard = () => {
  // TODO: Fetch data:
  const stakedNFTs = '0'
  const pendingRewards = '0.00000'
  const accruedRewards = '2.00000'

  const { showModal } = useModal()
  const { tokens } = useFWBProLPTokens()
  const { rewards } = useRewards()

  return (
    <Card>
      <h4>Uniswap V3 FWB Pro - ETH Liquidity Program</h4>
      <ValuesSection
        stakedNFTs={stakedNFTs}
        pendingRewards={pendingRewards}
        accruedRewards={rewards.toString()}
      />
      <StakeButtons
        handleStakeClick={() => {
          showModal(<StakeModal tokens={tokens} />)
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
