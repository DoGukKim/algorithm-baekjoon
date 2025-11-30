// TimeComplexity: O(N + M)
// SpaceComplexity: O(N + M)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const [T1, T2] = input[1].split(" ").map(Number);
const M = Number(input[2]);
const edges = input.slice(3).map((edge) => edge.split(" ").map(Number));
const adjacencyList = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i < M; i++) {
  const [a, b] = edges[i];
  adjacencyList[a].push(b);
  adjacencyList[b].push(a);
}

const ch = Array.from({ length: N + 1 }, () => -1);
ch[T1] = 0;
const queue = [T1];
let queueHead = 0;
while (queueHead < queue.length) {
  const current = queue[queueHead++];
  for (let i = 0; i < adjacencyList[current].length; i++) {
    const next = adjacencyList[current][i];
    if (ch[next] === -1) {
      if (next === T2) {
        console.log(ch[current] + 1);
        return;
      }
      ch[next] = ch[current] + 1;
      queue.push(next);
    }
  }
}

console.log(-1);
