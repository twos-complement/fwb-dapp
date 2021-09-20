import styled from 'styled-components'

import Card from './ui/core/Card'
import ValuesSection from './ui/uniswap-v3/ValuesSection'
import StakeButtons from './ui/uniswap-v3/StakeButtons'
import StakeModal from './ui/uniswap-v3/StakeModal'
import useModal from './hooks/useModal'
import useLPTokens from './hooks/useLPTokens'
import useAccruedRewards from './hooks/useAccruedRewards'
import useWeb3 from './hooks/useWeb3'
import { H3, H5 } from './ui/core/Typography'
import { FWBTag } from './ui/core/Tags'
import { FWBMark } from './ui/core/icons'
import { RewardToken } from '../util/constants'

const LPCard = () => {
  const { showModal } = useModal()
  const { contracts, accounts } = useWeb3()
  const { tokens, pendingRewards, totalStakedTokens } = useLPTokens()
  const { accruedRewards } = useAccruedRewards()

  async function claim() {
    await contracts.UniswapV3Staker.methods
      .claimReward(RewardToken, accounts[0], accruedRewards)
      .call()
  }

  const stakeEnabled = accounts.length > 0

  return (
    <Card>
      <Layout>
        <Header>
          <span>
            <FWBTag />
          </span>
          <FWBMark />
        </Header>
        <div>
          <H5 color="neutral600">Uniswap V3</H5>
          <H3 color="neutral700">ETH Liquidity Program</H3>
        </div>
        <ValuesSection
          totalStakedTokens={totalStakedTokens}
          pendingRewards={pendingRewards}
          accruedRewards={accruedRewards}
        />
        <StakeButtons
          handleStakeClick={() => {
            stakeEnabled && showModal(<StakeModal tokens={tokens} />)
          }}
          handleClaimClick={claim}
          stakeEnabled={stakeEnabled}
          claimEnabled={Number(accruedRewards) > 0}
        />
      </Layout>
    </Card>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 24px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export default LPCard
