import { FWBMark } from './ui/core/icons'
import CapitalCard from './ui/uniswap-v3/CapitalCard'
import useValues from './hooks/useValues'

const TokenPriceCard = () => {
  const { tokenPrice } = useValues()
  const value = tokenPrice

  return (
    <CapitalCard symbol={<FWBMark />} value={value} label="$FWB Pro Price" />
  )
}

export default TokenPriceCard
