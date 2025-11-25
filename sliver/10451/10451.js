// TimeComplexity: O(N)
// SpaceComplexity: O(N)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = Number(input[0]);
let lineIndex = 1;

for (let i = 0; i < testCase; i++) {
  const n = Number(input[lineIndex++]);
  const arr = input[lineIndex++].split(" ").map(Number);
  const graph = Array.from({ length: n + 1 }, () => 0);
  const ch = Array.from({ length: n + 1 }, () => false);

  for (let j = 1; j <= n; j++) {
    graph[j] = arr[j - 1];
  }

  let cycleCount = 0;
  for (let j = 1; j <= n; j++) {
    if (!ch[j]) {
      cycleCount++;
      let current = j;
      while (!ch[current]) {
        ch[current] = true;
        current = graph[current];
      }
    }
  }

  console.log(cycleCount);
}
