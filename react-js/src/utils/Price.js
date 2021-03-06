function CalculateGrossPrice(netPrice, tax) {
  const percentage = (tax / 100) + 1;
  const total = Math.round(netPrice * percentage);
  return total;
}

function GetMaxPrice(articles) {
  const max = articles.reduce((prev, curr) => {
    const currentGross = CalculateGrossPrice(curr.pris, curr.momssats)
    return prev > currentGross ? prev : currentGross;
  }, 0);

  return max;
}

function GetMinPrice(articles) {
  let min = 0;
  if(!articles || articles.length < 1) return min;

  for (const article of articles) {
    const { pris, momssats } = article;
    const grossPrice = CalculateGrossPrice(pris, momssats);
    if(grossPrice < min) min = grossPrice;
  }

  return min;
}

export { CalculateGrossPrice, GetMaxPrice, GetMinPrice }