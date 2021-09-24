import CapitalCard from './ui/uniswap-v3/CapitalCard'
import useValues from './hooks/useValues'

const TotalCapitalCard = () => {
  const { tvl } = useValues()
  const value = tvl

  return (
    <CapitalCard
      symbol="👩🏻‍🌾"
      value={value}
      multiplier="M"
      label="Capital in Farms"
    />
  )
}

export default TotalCapitalCard
