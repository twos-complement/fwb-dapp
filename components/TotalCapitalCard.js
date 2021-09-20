import CapitalCard from './ui/uniswap-v3/CapitalCard'

const TotalCapitalCard = () => {
  // TODO: Fetch total capital from Uniswap subgraph:
  const value = '$--'

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
