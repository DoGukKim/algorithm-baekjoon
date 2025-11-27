// TimeComplexity: O(N * (N + M))
// SpaceComplexity: O(N^2)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [N, M] = input[0];
const edges = input.slice(1);
const adjacencyList = new Map();
for (let i = 0; i < M; i++) {
  const [A, B] = edges[i];
  if (!adjacencyList.has(A)) {
    adjacencyList.set(A, new Set());
  }

  if (!adjacencyList.has(B)) {
    adjacencyList.set(B, new Set());
  }
  adjacencyList.get(A).add(B);
  adjacencyList.get(B).add(A);
}

const result = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) {
  const ch = Array.from({ length: N + 1 }, () => -1);
  ch[i] = 0;

  const queue = [i];
  let queueHead = 0;
  let cavinCount = 0;
  while (queueHead < queue.length) {
    const current = queue[queueHead++];

    for (const next of adjacencyList.get(current)) {
      if (ch[next] === -1) {
        ch[next] = ch[current] + 1;
        queue.push(next);
        cavinCount += ch[current] + 1;
      }
    }
  }

  result[i] = cavinCount;
}

const min = Math.min(...result.slice(1));
console.log(result.slice(1).findIndex((v) => v === min) + 1);
