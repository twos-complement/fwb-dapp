import Head from 'next/head'
import styled from 'styled-components'

import TotalCapitalCard from '../components/TotalCapitalCard'
import TokenPriceCard from '../components/TokenPriceCard'
import LPCard from '../components/LPCard'

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
          <HeaderLayout>
            <h1>Liquidity Mining</h1>
            <h4>
              Earn rewards for supplying liquidity for FWB Pro on Uniswap V3
            </h4>
          </HeaderLayout>
          <TokenPriceLayout>
            <TotalCapitalCard />
            <TokenPriceCard />
          </TokenPriceLayout>
          <LPCard />
        </Layout>
      </main>
    </div>
  )
}

export default Home
