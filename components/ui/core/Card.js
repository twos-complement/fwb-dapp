import styled from 'styled-components'

const Layout = styled.div`
  background-color: ${props => props.theme.colors.primary050};
  border-radius: 16px;
  padding: 32px;
  width: 100%;
  ${props => props.theme.glowShadows.lg}
  ${props => props.theme.bp.sm`
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
  `}
`

const Card = ({ children }) => <Layout>{children}</Layout>

export default Card
