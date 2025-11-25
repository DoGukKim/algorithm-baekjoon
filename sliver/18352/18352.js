// TimeComplexity: O(N + M)
// SpaceComplexity: O(N + M)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [N, M, K, X] = input[0];
input = input.slice(1);
const adjacencyList = Array.from({ length: N + 1 }, () => []);
const dist = Array.from({ length: N + 1 }, () => -1);
dist[X] = 0;

for (let i = 0; i < M; i++) {
  const [A, B] = input[i];
  adjacencyList[A].push(B);
}

const queue = [X];
let queueHead = 0;
let result = [];

while (queueHead < queue.length) {
  const current = queue[queueHead++];

  if (dist[current] === K) continue;

  for (let i = 0; i < adjacencyList[current].length; i++) {
    const next = adjacencyList[current][i];
    if (dist[next] === -1) {
      dist[next] = dist[current] + 1;

      if (dist[next] === K) {
        result.push(next);
      } else {
        queue.push(next);
      }
    }
  }
}

console.log(result.length > 0 ? result.sort((a, b) => a - b).join("\n") : "-1");
