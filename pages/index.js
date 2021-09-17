import Head from 'next/head'
import styled from 'styled-components'

import TotalCapitalCard from '../components/TotalCapitalCard'
import TokenPriceCard from '../components/TokenPriceCard'
import LPCard from '../components/LPCard'
import DirectionalFadeIn from '../components/ui/core/DirectionalFadeIn'
import { H1Alt } from '../components/ui/core/Typography'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  max-width: 700px;
  margin: 0 auto;
`

const HeaderLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 80px 0 0;
  > * {
    padding: 10px 0;
  }
`

const TokenPriceLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
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
          <DirectionalFadeIn direction="up">
            <HeaderLayout>
              <h1>Liquidity Mining</h1>
              <h4>
                Earn rewards for supplying liquidity for FWB Pro on Uniswap V3
              </h4>
              <H1Alt>Header Alt</H1Alt>
            </HeaderLayout>
          </DirectionalFadeIn>
          <DirectionalFadeIn direction="right" delay={200}>
            <TokenPriceLayout>
              <TotalCapitalCard />
              <TokenPriceCard />
            </TokenPriceLayout>
          </DirectionalFadeIn>
          <DirectionalFadeIn direction="right" delay={400}>
            <LPCard />
          </DirectionalFadeIn>
        </Layout>
      </main>
    </div>
  )
}

export default Home
