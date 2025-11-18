// TimeComplexity: O(n log n)
// SpaceComplexity: O(n)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
input = input
  .slice(1)[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const arr = Array.from({ length: n }, () => 0);
arr[0] = input[0];

for (let i = 1; i < n; i++) {
  arr[i] = arr[i - 1] + input[i];
}

console.log(arr.reduce((acc, cur) => acc + cur, 0));
