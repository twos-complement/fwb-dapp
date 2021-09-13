import styled from 'styled-components'

import useModal from '../../hooks/useModal'
import { Button } from './Buttons'
import WalletModal from './WalletModal'

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
        <h1>FWB</h1>
      </div>
      <div>
        <Button onClick={() => showModal(<WalletModal />)}>
          Connect Wallet
        </Button>
      </div>
    </Layout>
  )
}

export default Header
