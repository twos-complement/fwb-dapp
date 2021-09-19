import CapitalCard from './ui/uniswap-v3/CapitalCard'

const TotalCapitalCard = () => {
  // TODO: Fetch total capital:
  const value = '$13.37'

  return <CapitalCard symbol="👩🏻‍🌾" value={value} multiplier="M" label="Capital in Farms" />
}

export default TotalCapitalCard
