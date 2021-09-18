import useWeb3 from '../../hooks/useWeb3'

import { OutlinedButton } from './Buttons'
import DirectionalFadeIn from './DirectionalFadeIn'

const ConnectButton = () => {
  const { connect, accounts } = useWeb3()
  const buttonText = accounts.length > 0 ? accounts[0] : 'Connect Wallet'

  return (
    <DirectionalFadeIn direction="left" delay={600} duration={1000}>
      <OutlinedButton onClick={connect}>{buttonText}</OutlinedButton>
    </DirectionalFadeIn>
  )
}

export default ConnectButton;
