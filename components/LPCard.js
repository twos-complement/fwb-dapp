import Card from './ui/core/Card'
import ValuesSection from './ui/uniswap-v3/ValuesSection'
import StakeButtons from './ui/uniswap-v3/StakeButtons'
import StakeModal from './ui/uniswap-v3/StakeModal'

import useModal from './hooks/useModal'
import useLPTokens from './hooks/useLPTokens'
import useAccruedRewards from './hooks/useAccruedRewards'

const LPCard = () => {
  const { showModal } = useModal()
  const { tokens, pendingRewards, totalStakedTokens } = useLPTokens()
  const { accruedRewards } = useAccruedRewards()

  return (
    <Card>
      <h4>Uniswap V3 FWB Pro - ETH Liquidity Program</h4>
      <ValuesSection
        totalStakedTokens={totalStakedTokens}
        pendingRewards={pendingRewards}
        accruedRewards={accruedRewards}
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
