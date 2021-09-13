import CapitalCard from './ui/uniswap-v3/CapitalCard'

const TotalCapitalCard = () => {
  // TODO: Fetch total capital:
  const value = '$13.37m'

  return <CapitalCard symbol="💰" value={value} label="Capital in Farms" />
}

export default TotalCapitalCard
