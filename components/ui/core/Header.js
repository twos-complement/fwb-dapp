import styled from 'styled-components'

import useModal from '../../hooks/useModal'
import { Button } from './Buttons'
import WalletModal from './WalletModal'
import DirectionalFadeIn from './DirectionalFadeIn'

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const Header = () => {
  const { showModal } = useModal()
  return (
    <Layout>
      <div>
        <DirectionalFadeIn direction="down">
          <h1>FWB</h1>
        </DirectionalFadeIn>
      </div>
      <div>
        <DirectionalFadeIn direction="left" delay={600} duration={1000}>
          <Button onClick={() => showModal(<WalletModal />)}>
            Connect Wallet
          </Button>
        </DirectionalFadeIn>
      </div>
    </Layout>
  )
}

export default Header
