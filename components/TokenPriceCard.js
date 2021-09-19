import { FWBMark } from './ui/core/icons'
import CapitalCard from './ui/uniswap-v3/CapitalCard'

const TokenPriceCard = () => {
  // TODO: Fetch token price:
  const value = '$175.42'

  return <CapitalCard symbol={<FWBMark />} value={value} multiplier="M" label="$FWB Pro Price" />
}

export default TokenPriceCard
