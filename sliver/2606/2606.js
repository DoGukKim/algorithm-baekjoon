// TimeComplexity: O(V + E)
// SpaceComplexity: O(V + E)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

const n = input[0][0];
const m = input[1][0];
input = input.slice(2);

const adjacencyList = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  const [a, b] = input[i];
  adjacencyList[a].push(b);
  adjacencyList[b].push(a);
}

const ch = Array.from({ length: n + 1 }, () => 0);
const result = Array.from({ length: n + 1 }, () => 0);
ch[1] = 1;

function dfs(v) {
  for (let i = 0; i < adjacencyList[v].length; i++) {
    const next = adjacencyList[v][i];

    if (ch[next] === 1) continue;

    ch[next] = 1;
    result[next] = 1;
    dfs(next);
  }
}

dfs(1);
console.log(result.reduce((acc, curr) => acc + curr, 0));
