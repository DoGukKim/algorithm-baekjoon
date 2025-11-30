// TimeComplexity: O(N^2)
// SpaceComplexity: O(N + M)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

const [N, M] = input[0];
const adjacencyList = Array.from({ length: N }, () => []);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i];
  adjacencyList[a].push(b);
  adjacencyList[b].push(a);
}

const ch = Array.from({ length: N }, () => 0);
function dfs(v, level) {
  if (level > 4) {
    return 1;
  }

  for (let i = 0; i < adjacencyList[v].length; i++) {
    const next = adjacencyList[v][i];
    if (ch[next] === 0) {
      ch[next] = 1;
      const result = dfs(next, level + 1);
      ch[next] = 0;
      if (result === 1) {
        return 1;
      }
    }
  }

  return 0;
}

let result = 0;
for (let i = 0; i < N; i++) {
  ch[i] = 1;

  if (dfs(i, 1) === 1) {
    result = 1;
    break;
  }

  ch[i] = 0;
}

console.log(result);
