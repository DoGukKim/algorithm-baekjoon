// TimeComplexity: O(n)
// SpaceComplexity: O(1)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const testCase = Number(input[0]);
let lineIndex = 1;

for (let t = 0; t < testCase; t++) {
  const n = Number(input[lineIndex]);

  const prices = input[lineIndex + 1].split(" ").map(Number);

  let maxPrice = 0;
  let totalProfit = 0;

  for (let i = n - 1; i >= 0; i--) {
    const currentPrice = prices[i];

    if (currentPrice > maxPrice) {
      maxPrice = currentPrice;
    } else {
      totalProfit += maxPrice - currentPrice;
    }
  }

  console.log(totalProfit);
  lineIndex += 2;
}
