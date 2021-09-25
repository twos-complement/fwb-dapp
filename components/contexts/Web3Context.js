import { useEffect, createContext, useState } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3 from 'web3'
import Web3Modal from 'web3modal'

import UniswapV3PositionsABI from '../../util/abis/uniswap-v3-positions.json'
import UniswapV3StakerABI from '../../util/abis/uniswap-v3-staker.json'
import {
  IncentiveStruct,
  Incentive,
  UniswapV3PositionsAddress,
  UniswapV3StakerAddress,
} from '../../util/constants'

export const Web3Context = createContext()

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: 'f69a0ae316c2453eb790c020a508f734', // FWB Infura ID
    },
  },
}

export const Web3Provider = ({ children }) => {
  const [web3Modal, setWeb3Modal] = useState()
  const [accounts, setAccounts] = useState([])
  const [contracts, setContracts] = useState({})
  const [web3, setWeb3] = useState()
  const [provider, setProvider] = useState()
  const [encodedIncentiveId, setEncodedIncentiveId] = useState()

  useEffect(() => {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions,
    })
    setWeb3Modal(web3Modal)
  }, [])

  async function connect() {
    const provider = await web3Modal.connect()
    const web3 = new Web3(provider)
    const accounts = await web3.eth.getAccounts()

    // Set provider:
    setProvider(provider)
    setWeb3(web3)

    // Set accounts:
    setAccounts(accounts)

    // Initialize contracts:
    const UniswapV3Positions = new web3.eth.Contract(
      UniswapV3PositionsABI,
      UniswapV3PositionsAddress,
    )
    const UniswapV3Staker = new web3.eth.Contract(
      UniswapV3StakerABI,
      UniswapV3StakerAddress,
    )
    setContracts({
      ...contracts,
      UniswapV3Positions,
      UniswapV3Staker,
    })

    // Encode Incentive ID:
    const incentiveId = web3.eth.abi.encodeParameter(IncentiveStruct, Incentive)
    setEncodedIncentiveId(web3.utils.keccak256(incentiveId))
  }

  async function disconnect() {
    await web3Modal.clearCachedProvider()

    if (provider?.disconnect && typeof provider.disconnect === 'function') {
      await provider.disconnect()
    }

    setProvider(null)
    setAccounts([])
  }

  return (
    <Web3Context.Provider
      value={{
        connect,
        disconnect,
        accounts,
        contracts,
        web3,
        encodedIncentiveId,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export default Web3Context
