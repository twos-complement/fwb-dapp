import Head from 'next/head'
import styled, { css } from 'styled-components'

import TotalCapitalCard from '../components/TotalCapitalCard'
import TokenPriceCard from '../components/TokenPriceCard'
import LPCard from '../components/LPCard'
import DirectionalFadeIn from '../components/ui/core/DirectionalFadeIn'
import { H1, H3Alt } from '../components/ui/core/Typography'
import ConnectButton from '../components/ui/core/ConnectButton'
import { FWB, FWBLong } from '../components/ui/core/icons'

const Home = () => {
  return (
    <div>
      <Head>
        <title>FWB dApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Header>
            <FWB />
            <ConnectButton />
          </Header>
          <DirectionalFadeIn direction="up" threshold={0}>
            <Section>
              <Hero>
                <DynamicFWBLong />
                <H1 color="neutral000">Liquidity Mining</H1>
                <H3Alt color="neutral000">
                  Earn rewards for supplying liquidity for FWB Pro on Uniswap V3
                </H3Alt>
              </Hero>
            </Section>
          </DirectionalFadeIn>
          <DirectionalFadeIn direction="right" delay={200} threshold={0}>
            <ContentSection>
              <Content>
                <PricesWrapper>
                  <TotalCapitalCard />
                  <TokenPriceCard />
                </PricesWrapper>
                <LPCard />
              </Content>
            </ContentSection>
          </DirectionalFadeIn>
        </Layout>
      </main>
    </div>
  )
}

const Layout = styled.div`
  ${({ theme: { bp } }) => css`
    display: grid;
    grid-template-columns: 1.2fr 2fr;
    grid-row-gap: 20px;
    height: 100vh;

    ${bp.sm`
      grid-template-columns: 1fr;
      padding: 0;
      height: auto;
      grid-row-gap: 0;
    `}
    ${bp.md`
      grid-template-columns: 1fr;
      padding: 0;
      height: auto;
      grid-row-gap: 0;
    `}
    ${bp.xl`
      max-width: 1800px;
    `}
  `}
`

const Header = styled.div`
  ${({ theme: { bp } }) => css`
    position: absolute;
    width: 100%;
    display: flex;
    left: 0;
    justify-content: space-between;
    right: 0;
    margin: 0;
    padding: 24px 24px 0 24px;
    z-index: 1;

    ${bp.sm`
      padding: 22px 16px 0 16px;
    `}
  `}
`

const Section = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 24px;

  ${props => props.theme.bp.sm`
    padding: 0 16px;
  `}
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100%;

  > * {
    margin-bottom: 40px;
  }

  ${props => props.theme.bp.sm`
    margin-top: 76px;
    padding: 24px 24px 0;
    > * {
      margin-bottom: 16px;
    }
  `}
  ${props => props.theme.bp.md`
    margin: 120px 0 24px;
    padding: 24px 24px 0;
    > * {
      margin-bottom: 24px;
    }
  `}
`

const ContentSection = styled(Section)`
  ${({ theme: { bp, colors } }) => css`
    border-left: 1px solid ${colors.neutral700};
    padding: 48px;

    ${bp.sm`
      padding: 0 16px;
      border-top: 1px solid ${colors.neutral700};
      border-left: none;
    `}
    ${bp.md`
      padding: 0 24px;
      border-top: 1px solid ${colors.neutral700};
      border-left: none;
    `}
  `}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${props => props.theme.bp.sm`
    margin-top: 24px;
    padding: 0 24px 24px;
  `}
  ${props => props.theme.bp.md`
    margin-top: 40px;
    padding: 24px;
  `}
`

const DynamicFWBLong = styled(FWBLong)`
  ${props => props.theme.bp.md`
    width: 382px;
    height: 30px;
  `}
  ${props => props.theme.bp.sm`
    width: 203px;
    height: 16px;
  `}
`

const PricesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding-bottom: 24px;
  width: 100%;

  ${props => props.theme.bp.sm`
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
    padding-bottom: 16px;
  `}
`

export default Home
