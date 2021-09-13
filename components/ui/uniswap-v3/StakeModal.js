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

const StakeModal = ({ NFTs }) => {
  const { hideModal, showModal } = useModal()

  const stakedNFTs = NFTs.filter(nft => nft.isStaked)
  const unstakedNFTs = NFTs.filter(nft => !nft.isStaked)

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
          {unstakedNFTs.map(({ id }) => (
            <NFTListItem
              key={id}
              id={id}
              handleClick={() => showModal(<UnstakedNFTModal id={id} />)}
            >
              <p>{id}</p>
            </NFTListItem>
          ))}
        </NFTList>
      </div>
      <div>
        <h5>Staked</h5>
        <NFTList>
          {stakedNFTs.map(({ id, pendingRewards }) => (
            <NFTListItem
              key={id}
              id={id}
              pendingRewards={pendingRewards}
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
  NFTs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isStaked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
}

export default StakeModal
