import { FWBMark } from './ui/core/icons'
import CapitalCard from './ui/uniswap-v3/CapitalCard'

const TokenPriceCard = () => {
  // TODO: Fetch token price from coingecko:
  const value = '$--'

  return (
    <CapitalCard symbol={<FWBMark />} value={value} label="$FWB Pro Price" />
  )
}

export default TokenPriceCard
