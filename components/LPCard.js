import Card from './ui/core/Card'
import ValuesSection from './ui/uniswap-v3/ValuesSection'
import StakeButtons from './ui/uniswap-v3/StakeButtons'
import StakeModal from './ui/uniswap-v3/StakeModal'

import useModal from './hooks/useModal'
import useLPTokens from './hooks/useLPTokens'
import useAccruedRewards from './hooks/useAccruedRewards'
import useWeb3 from './hooks/useWeb3'
import { FWBTag } from './ui/core/Tags'
import styled, { css } from 'styled-components'
import { FWBMark } from './ui/core/icons'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LPCard = () => {
  const { showModal } = useModal()
  const { accounts } = useWeb3()
  const { tokens, pendingRewards, totalStakedTokens } = useLPTokens()
  const { accruedRewards } = useAccruedRewards()

  return (
    <Card>
      <Header>
        <span>
        <FWBTag />
        </span>
        <FWBMark />
      </Header>
      <div>
        <h5>
          Uniswap V3
        </h5>
      </div>
      <h4>ETH Liquidity Program</h4>
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
        stakeEnabled={accounts.length > 0}
        claimEnabled={Number(accruedRewards) > 0}
      />
    </Card>
  )
}

export default LPCard
