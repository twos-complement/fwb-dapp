import styled from 'styled-components'
import maskWallet from '../../../util/mask-wallet'
import useWeb3 from '../../hooks/useWeb3'

import { FabButton, OutlinedButton } from './Buttons'
import DirectionalFadeIn from './DirectionalFadeIn'
import { Times } from './icons'
import { Tag } from './Tags'
import { Body1 } from './Typography'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-left: 4px;
  }
`

const ConnectButton = () => {
  const { connect, disconnect, accounts } = useWeb3()
  const buttonText =
    accounts.length > 0 ? maskWallet(accounts[0], 6) : 'Connect Wallet'

  return (
    <DirectionalFadeIn direction="left" delay={600} duration={1000}>
      <Wrapper>
        {accounts.length > 0 ? (
          <>
            <Tag>
              <Body1 color="neutral300">{maskWallet(accounts[0], 6)}</Body1>
            </Tag>
            <FabButton onClick={disconnect}>
              <Times />
            </FabButton>
          </>
        ) : (
          <OutlinedButton onClick={connect}>
            <Body1 color="neutral050">{buttonText}</Body1>
          </OutlinedButton>
        )}
      </Wrapper>
    </DirectionalFadeIn>
  )
}

export default ConnectButton
