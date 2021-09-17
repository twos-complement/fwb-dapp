import Head from 'next/head'
import styled from 'styled-components'

import TotalCapitalCard from '../components/TotalCapitalCard'
import TokenPriceCard from '../components/TokenPriceCard'
import LPCard from '../components/LPCard'
import DirectionalFadeIn from '../components/ui/core/DirectionalFadeIn'
import { H2, H3 } from '../components/ui/core/Typography'
import ConnectButton from '../components/ui/core/ConnectButton'
import { FWB, FWBLong } from '../components/ui/core/icons'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  grid-gap: 20px;
  padding: 0 48px;
  margin: 0 auto;
  height: 100vh;

  > *:first-child {
    border-right: 1px solid ${props => props.theme.colors.neutral700};
    padding: 10px 48px 10px 0;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  > *:first-child {
    position: absolute;
    top: 24px;
    left: 0px;
  }

  > *:last-child {
    display: grid;
    grid-row-gap: 40px;
    width: 100%;
  }
`


const TokenPriceLayout = styled(Hero)`
  > *:first-child {
    position: absolute;
    top: 24px;
    left: auto;
    right: 0px;
  }

  > *:last-child {
    padding-left: 38px;
  }
`

const CardsWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const PricesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`;

const Home = () => {
  return (
    <div>
      <Head>
        <title>FWB dApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <DirectionalFadeIn direction="up">
            <Hero>
              <FWB />
              <div>
                <FWBLong />
                <h1>Liquidity Mining</h1>
                <H3 color="neutral000">
                  Earn rewards for supplying liquidity for FWB Pro on Uniswap V3
                </H3>
              </div>
            </Hero>
          </DirectionalFadeIn>
          <DirectionalFadeIn direction="right" delay={200}>
            <TokenPriceLayout>
              <ConnectButton />
              <CardsWrapper>
                <PricesWrapper>
                  <TokenPriceCard />
                  <TotalCapitalCard />
                </PricesWrapper>
                <LPCard />
              </CardsWrapper>
            </TokenPriceLayout>
          </DirectionalFadeIn>
        </Layout>
      </main>
    </div>
  )
}

export default Home
