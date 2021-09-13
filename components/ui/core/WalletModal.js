import styled from 'styled-components'

import useModal from '../../hooks/useModal'
import { Button } from './Buttons'

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const WalletModal = () => {
  const { hideModal } = useModal()

  return (
    <Layout>
      <div>
        <h1>Select a wallet</h1>
      </div>
      <Button onClick={hideModal}>Close</Button>
    </Layout>
  )
}

export default WalletModal
