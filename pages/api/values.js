import { request, gql } from 'graphql-request'

const FWB_TOKEN_ADDRESS = '0x35bd01fc9d6d5d81ca9e055db88dc49aa2c699a8'

async function getTVL() {
  const query = gql`
    query {
      pools(where: { id: "0x9ab0905b39505d8682b58a57a41c4100e9c62ab6" }) {
        id
        totalValueLockedToken0
      }
    }
  `

  const data = await request(
    'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
    query,
  )

  return Number(data.pools[0].totalValueLockedToken0)
}

async function getTokenPrice() {
  const resp = await fetch(
    `https://api.coingecko.com/api/v3/simple/token_price/ethereum/?contract_addresses=${FWB_TOKEN_ADDRESS}&vs_currencies=usd`,
  )
  const data = await resp.json()
  return Number(data[FWB_TOKEN_ADDRESS].usd)
}

export default async function handler(req, res) {
  const tvl = await getTVL()
  const tokenPrice = await getTokenPrice()

  res.status(200).json({ tvl, tokenPrice })
}
