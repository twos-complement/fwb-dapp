import { useEffect, useState } from 'react'

function formatMillions(value) {
  return `$${(value / 1000000).toFixed(2)}`
}

const useValues = () => {
  const [tvl, setTvl] = useState('$--.-')
  const [tokenPrice, setTokenPrice] = useState('$--.--')

  useEffect(() => {
    async function fetchValues() {
      const resp = await fetch('/api/values')
      const data = await resp.json()
      setTvl(formatMillions(data.tvl * data.tokenPrice).toString())
      setTokenPrice(`$${data.tokenPrice.toString()}`)
    }

    fetchValues()
  }, [])

  return { tvl, tokenPrice }
}

export default useValues
