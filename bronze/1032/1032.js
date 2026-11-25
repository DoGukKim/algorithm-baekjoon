// TimeComplexity: O(N^2)
// SpaceComplexity: O(N)
const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const files = input.slice(1, n + 1).map((s) => s.trim());

let result = "";
for (let i = 0; i < files[0].length; i++) {
  const ch = files[0][i];
  let same = true;
  for (let j = 1; j < n; j++) {
    if (files[j][i] !== ch) {
      same = false;
      break;
    }
  }
  result += same ? ch : "?";
}
console.log(result);
