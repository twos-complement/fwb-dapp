import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import theme from '../util/theme'
import GlobalStyles from '../components/ui/core/GlobalStyles'
import { Web3Provider } from '../components/contexts/Web3Context'
import { ModalProvider } from '../components/contexts/ModalContext'
import Modal from '../components/ui/core/Modal'
import Header from '../components/ui/core/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="FWB Uniswap V3 Liquidity Provider Rewards"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Web3Provider>
          <ModalProvider>
            <GlobalStyles />
            <Header />
            <Component {...pageProps} />
            <Modal />
          </ModalProvider>
        </Web3Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
