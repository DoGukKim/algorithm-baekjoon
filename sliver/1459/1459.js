// TimeComplexity: O(1)
// SpaceComplexity: O(1)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = input[0].split(" ").map(Number);
const [X, Y, W, S] = input;

const cost1 = (X + Y) * W;

const minVal = Math.min(X, Y);
const maxVal = Math.max(X, Y);
const diff = Math.abs(X - Y);
const cost2 = minVal * S + diff * W;

let cost3;
if (diff % 2 === 0) {
  cost3 = maxVal * S;
} else {
  cost3 = (maxVal - 1) * S + W;
}

console.log(Math.min(cost1, cost2, cost3));
