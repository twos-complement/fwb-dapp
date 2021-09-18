import styled from 'styled-components'
import PropTypes from 'prop-types'

import useModal from '../../hooks/useModal'
import { Button } from '../core/Buttons'
import StakedNFTModal from '../../StakedNFTModal'
import UnstakedNFTModal from '../../UnstakedNFTModal'
import NFTList from './NFTList'
import NFTListItem from './NFTListItem'

const Layout = styled.div`
  display: grid;
  grid-row-gap: 16px;
`

const StakeModal = ({ tokens }) => {
  const { hideModal, showModal } = useModal()

  console.log(tokens)
  const stakedTokens = tokens.filter(token => token.isStaked)
  const unstakedTokens = tokens.filter(token => !token.isStaked)

  return (
    <Layout>
      <h4>Uniswap V3 Staking</h4>
      <p>Uniswap V3 uses NFT tokens to represent LP positions.</p>
      <p>
        Your Uniswap V3 LP tokens eligible for FWB Pro rewards are listed below.
      </p>
      <div>
        <h5>Unstaked</h5>
        <NFTList>
          {unstakedTokens.map(token => (
            <NFTListItem
              key={token.id}
              id={token.id}
              minTick={token.tickLower}
              maxTick={token.tickUpper}
              handleClick={() => showModal(<UnstakedNFTModal id={token.id} />)}
            />
          ))}
        </NFTList>
      </div>
      <div>
        <h5>Staked</h5>
        <NFTList>
          {stakedTokens.map(token => (
            <NFTListItem
              key={token.id}
              id={token.id}
              minTick={token.tickLower}
              maxTick={token.tickUpper}
              handleClick={() => showModal(<StakedNFTModal id={id} />)}
            >
              <p>{id}</p>
            </NFTListItem>
          ))}
        </NFTList>
      </div>
      <Button onClick={hideModal}>Close</Button>
    </Layout>
  )
}

StakeModal.propTypes = {
  tokens: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default StakeModal
