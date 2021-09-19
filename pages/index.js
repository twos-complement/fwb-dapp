import Head from 'next/head'
import styled, { css } from 'styled-components'

import TotalCapitalCard from '../components/TotalCapitalCard'
import TokenPriceCard from '../components/TokenPriceCard'
import LPCard from '../components/LPCard'
import DirectionalFadeIn from '../components/ui/core/DirectionalFadeIn'
import { H3Alt } from '../components/ui/core/Typography'
import ConnectButton from '../components/ui/core/ConnectButton'
import { FWB, FWBLong } from '../components/ui/core/icons'

const Layout = styled.div`
  ${({ theme: { bp } }) => css`
    display: grid;
    grid-template-columns: 1.2fr 2fr;
    grid-gap: 20px;
    padding: 0 48px;
    margin: 0 auto;
    height: 100vh;

    ${bp.md`
      grid-template-columns: 1fr;
      padding: 0;
      height: auto;
    `}

    ${bp.sm`
      grid-template-columns: 1fr;
      padding: 0;
      height: auto;
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

const Hero = styled.div`
  ${({ theme: { bp } }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 10px 48px 10px 0;

    > * {
      display: grid;
      grid-row-gap: 40px;
      width: 100%;
    }

    svg:first-child {
      align-self: left;
    }

    ${bp.md`
      margin-top: 66px;
      padding: 24px;

      > * {
        grid-row-gap: 40px; 
      }

      svg:first-child {
        width: 350px; 
        align-self: left;
      }
    `}

    ${bp.sm`
      margin-top: 66px;
      padding: 16px;
      
      > * {
        grid-row-gap: 2rem; 
      }

      svg:first-child {
        width: 250px; 
        align-self: left;
      }
    `}
  `}
`

const TokenPriceLayout = styled(Hero)`
  ${({ theme: { bp, colors } }) => css`
    border-left: 1px solid ${colors.neutral700};
    padding: 48px;

    ${bp.md`
      border-top: 1px solid ${colors.neutral700};
      border-left: none;
      margin-top: 40px;

      > *:last-child {
        padding: 0;
      }
    `}

    ${bp.sm`
      border-top: 1px solid ${colors.neutral700};
      border-left: none;
      margin-top: 24px;

      > *:last-child {
        padding: 0;
      }
    `}
  `}
`

const PricesWrapper = styled.div`
  ${({ theme: { bp } }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    padding-bottom: 24px;

    ${bp.sm`
      grid-template-columns: 1fr;
      grid-row-gap: 16px;
    `}
  `}
`

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
            <Hero>
              <div>
                <FWBLong />
                <h1>Liquidity Mining</h1>
                <H3Alt color="neutral000">
                  Earn rewards for supplying liquidity for FWB Pro on Uniswap V3
                </H3Alt>
              </div>
            </Hero>
          </DirectionalFadeIn>
          <DirectionalFadeIn direction="right" delay={200}>
            <TokenPriceLayout>
              <PricesWrapper>
                <TotalCapitalCard />
                <TokenPriceCard />
              </PricesWrapper>
              <LPCard />
            </TokenPriceLayout>
          </DirectionalFadeIn>
        </Layout>
      </main>
    </div>
  )
}

export default Home
