import styled from 'styled-components'

const IndieDAOBadge = () => (
  <Wrapper href="https://twitter.com/theindiedao" target="_blank">
    <img src="/indiedao.png" width="200" />
  </Wrapper>
)

const Wrapper = styled.a`
  padding-top: 3px;
  cursor: pointer;

  > img {
    transition: all 300ms;
  }

  &:hover > img {
    transform: translateY(-3px);
    ${props => props.theme.glowShadows.sm}
  }
`

export default IndieDAOBadge
