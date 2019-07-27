export function getTotals(data) {
  const power = Math.floor(
    data.map(item => item.wattage).reduce((total, currentValue) => total + currentValue) / 1000
  )
  const energy = Math.floor((power * 60))

  return { power, energy }
}
