function maxProfit(arr) {
  let maximimumProfit = 0;
  let buyingPrice = 0;
  let sellingPrice = 1;

  while (sellingPrice < arr.length) {
    // Check if the current buying price is greater than the current selling price
    if (arr[buyingPrice] > arr[sellingPrice]) {
      // If true, update the buying price to be the current selling price
      buyingPrice = sellingPrice;
    }
    maximimumProfit = Math.max(
      maximimumProfit,
      arr[sellingPrice] - arr[buyingPrice]
    );
    sellingPrice++;
  }

  return maximimumProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
