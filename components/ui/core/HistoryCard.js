import styled from 'styled-components'

const Layout = styled.div`
  border: 1px solid ${props => props.theme.colors.neutral050};
  color: ${props => props.theme.colors.neutral050};
  border-radius: 10px;
  padding: 20px;
`

const Card = ({ children }) => <Layout>{children}</Layout>

export default Card
