import styled, { css } from 'styled-components';
import maskWallet from '../../../util/mask-wallet'
import useWeb3 from '../../hooks/useWeb3'

import { FabButton, OutlinedButton } from './Buttons'
import DirectionalFadeIn from './DirectionalFadeIn'
import { Times } from './icons'
import { Tag } from './Tags'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-left: 4px;
  }
`;

const ConnectButton = () => {
  const { connect, accounts } = useWeb3()
  const buttonText = accounts.length > 0 ? maskWallet(accounts[0], 6) : 'Connect Wallet'

  return (
    <DirectionalFadeIn direction="left" delay={600} duration={1000}>
      <Wrapper>
        {accounts.length > 0 ? (
          <>
            <Tag>{maskWallet(accounts[0], 6)}</Tag>
            <FabButton><Times /></FabButton>
          </>
        ) : (
          <OutlinedButton onClick={connect}>{buttonText}</OutlinedButton>
        )}
      </Wrapper>
    </DirectionalFadeIn>
  )
}

export default ConnectButton;
