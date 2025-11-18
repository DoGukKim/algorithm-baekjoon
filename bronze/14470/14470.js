// TimeComplexity: O(1)
// SpaceComplexity: O(1)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = input.map(Number);
const [A, B, C, D, E] = input;

if (A < 0) {
  console.log(Math.abs(A) * C + D + Math.abs(B) * E);
}

if (A > 0) {
  console.log(Math.abs(B - A) * E);
}
