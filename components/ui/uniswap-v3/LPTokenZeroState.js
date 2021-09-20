import styled from 'styled-components'

import { TextButton } from '../core/Buttons'
import { ArrowUpRight } from '../core/icons'

const LPTokenZeroState = () => (
  <Layout>
    <a
      href="https://app.uniswap.org/#/add/ETH/0x35bD01FC9d6D5D81CA9E055Db88Dc49aa2c699A8/3000"
      target="_blank"
    >
      <TextButton>
        Create LP on Uniswap
        <ArrowUpRight />
      </TextButton>
    </a>
  </Layout>
)

const Layout = styled.div`
  background-color: ${props => props.theme.colors.neutral900};
  padding: 24px;
  cursor: pointer;
  border-radius: 16px;
  margin-top: 8px;
`

export default LPTokenZeroState
