import styled from 'styled-components'
import PropTypes from 'prop-types'

import useModal from '../../hooks/useModal'
import { Button } from '../core/Buttons'
import StakedNFTModal from '../../StakedNFTModal'
import UnstakedNFTModal from '../../UnstakedNFTModal'
import NFTList from './NFTList'
import NFTListItem from './NFTListItem'
import LPTokenZeroState from './LPTokenZeroState'
import { H3, H5, Body1, Overline1 } from '../core/Typography'

const StakeModal = ({ tokens }) => {
  const { hideModal, showModal } = useModal()

  console.log(tokens)
  const stakedTokens = tokens.filter(token => token.isStaked)
  const unstakedTokens = tokens.filter(token => !token.isStaked)

  return (
    <Layout>
      <div>
        <H5 color="neutral600">Uniswap V3</H5>
        <H3 color="neutral700">Staking</H3>
      </div>
      <Body1 color="neutral600">
        Uniswap V3 uses NFT tokens to represent LP positions. Your Uniswap V3 LP
        tokens eligible for FWB Pro rewards are listed below.
      </Body1>
      {unstakedTokens.length > 0 && (
        <div>
          <Overline1 color="neutral600">Unstaked</Overline1>
          <NFTList>
            {unstakedTokens.map(token => (
              <NFTListItem
                key={token.id}
                id={token.id}
                minTick={token.tickLower}
                maxTick={token.tickUpper}
                handleClick={() =>
                  showModal({
                    content: (
                      <UnstakedNFTModal
                        id={token.id}
                        minTick={token.tickLower}
                        maxTick={token.tickUpper}
                      />
                    ),
                    color: 'dark',
                  })
                }
              />
            ))}
          </NFTList>
        </div>
      )}
      {stakedTokens.length > 0 && (
        <div>
          <Overline1 color="neutral600">Staked</Overline1>
          <NFTList>
            {stakedTokens.map(token => (
              <NFTListItem
                key={token.id}
                id={token.id}
                minTick={token.tickLower}
                maxTick={token.tickUpper}
                handleClick={() =>
                  showModal({
                    content: (
                      <StakedNFTModal
                        id={token.id}
                        minTick={token.tickLower}
                        maxTick={token.tickUpper}
                      />
                    ),
                    color: 'dark',
                  })
                }
              >
                <p>{id}</p>
              </NFTListItem>
            ))}
          </NFTList>
        </div>
      )}
      {stakedTokens.length === 0 && unstakedTokens.length === 0 && (
        <div>
          <Overline1 color="neutral600">No Tokens</Overline1>
          <LPTokenZeroState />
        </div>
      )}
      <Button onClick={hideModal}>Close</Button>
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-row-gap: 24px;
  padding: 24px;
`

StakeModal.propTypes = {
  tokens: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default StakeModal
