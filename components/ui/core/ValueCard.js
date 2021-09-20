import styled from 'styled-components'

const ValueCard = ({ children }) => <Layout>{children}</Layout>

const Layout = styled.div`
  border: 1px solid ${props => props.theme.colors.neutral050};
  color: ${props => props.theme.colors.neutral050};
  border-radius: 16px;
  padding: 20px;

  ${props => props.theme.bp.sm`
    padding: 16px;
  `}
`

export default ValueCard
