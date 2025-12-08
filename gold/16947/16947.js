// TimeComplexity: O(N)
// SpaceComplexity: O(N)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((i) => i.split(" ").map(Number));

const n = input[0][0];
const edges = input.slice(1);

const graph = Array.from({ length: n + 1 }, () => []);
const degree = Array(n + 1).fill(0);

for (let i = 0; i < edges.length; i++) {
  const [a, b] = edges[i];
  graph[a].push(b);
  graph[b].push(a);
  degree[a]++;
  degree[b]++;
}

const isCycle = Array(n + 1).fill(true);
const queue = [];
let queueHead = 0;

for (let i = 1; i <= n; i++) {
  if (degree[i] === 1) {
    queue.push(i);
    isCycle[i] = false;
  }
}

while (queueHead < queue.length) {
  const current = queue[queueHead++];

  for (let i = 0; i < graph[current].length; i++) {
    const next = graph[current][i];
    degree[next]--;

    if (degree[next] === 1) {
      queue.push(next);
      isCycle[next] = false;
    }
  }
}

const distance = Array(n + 1).fill(-1);
const bfsQueue = [];
let bfsHead = 0;

for (let i = 1; i <= n; i++) {
  if (isCycle[i]) {
    bfsQueue.push(i);
    distance[i] = 0;
  }
}

while (bfsHead < bfsQueue.length) {
  const current = bfsQueue[bfsHead++];

  for (let i = 0; i < graph[current].length; i++) {
    const next = graph[current][i];

    if (distance[next] === -1) {
      distance[next] = distance[current] + 1;
      bfsQueue.push(next);
    }
  }
}

console.log(distance.slice(1).join(" "));
