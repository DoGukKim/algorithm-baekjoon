// TimeComplexity: O(N + M)
// SpaceComplexity: O(N + M)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const edges = input.slice(2).map((edge) => edge.split(" ").map(Number));
const adjacencyList = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  const [a, b] = edges[i];
  adjacencyList[a].push(b);
  adjacencyList[b].push(a);
}
const ch = Array.from({ length: N + 1 }, () => 0);
ch[1] = 1;
const queue = [[1, 0]];
let queueHead = 0;
let count = 0;
while (queueHead < queue.length) {
  const [current, level] = queue[queueHead++];

  for (let i = 0; i < adjacencyList[current].length; i++) {
    const next = adjacencyList[current][i];
    const nextLevel = level + 1;
    if (nextLevel > 2) continue;
    if (ch[next] === 0) {
      ch[next] = 1;
      queue.push([next, nextLevel]);
      count++;
    }
  }
}

console.log(count);
