import styled from 'styled-components'

const Layout = styled.div`
  border: 1px solid ${props => props.theme.colors.neutral050};
  color: ${props => props.theme.colors.neutral050};
  border-radius: 16px;
  padding: 20px;
`

const ValueCard = ({ children }) => <Layout>{children}</Layout>

export default ValueCard
