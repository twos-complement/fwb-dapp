import CapitalCard from './ui/uniswap-v3/CapitalCard'

const TokenPriceCard = () => {
  // TODO: Fetch token price:
  const value = '$175.42'

  return <CapitalCard symbol="FWB Pro" value={value} label="$FWB Pro Price" />
}

export default TokenPriceCard
