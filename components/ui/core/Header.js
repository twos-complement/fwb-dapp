import styled from 'styled-components'

import useWeb3 from '../../hooks/useWeb3'

import { Button } from './Buttons'
import DirectionalFadeIn from './DirectionalFadeIn'

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const Header = () => {
  const { connect, accounts } = useWeb3()
  const buttonText = accounts.length > 0 ? accounts[0] : 'Connect Wallet'

  return (
    <Layout>
      <div>
        <DirectionalFadeIn direction="down">
          <h1>FWB</h1>
        </DirectionalFadeIn>
      </div>
      <div>
        <DirectionalFadeIn direction="left" delay={600} duration={1000}>
          <Button onClick={connect}>{buttonText}</Button>
        </DirectionalFadeIn>
      </div>
    </Layout>
  )
}

export default Header
