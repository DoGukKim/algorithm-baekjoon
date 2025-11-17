// TimeComplexity: O(V + E)
// SpaceComplexity: O(V + E)
let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

const taseCase = input[0][0];
let testCasePointer = 0;
input = input.slice(1);

function bfs(start, adjacencyList, ch) {
  const queue = [start];
  let queuePointer = 0;

  while (queue.length > queuePointer) {
    const current = queue[queuePointer++];

    for (let i = 0; i < adjacencyList[current].length; i++) {
      const next = adjacencyList[current][i];
      if (ch[next] === 0) {
        ch[next] = ch[current] === 1 ? -1 : 1;
        queue.push(next);
      } else if (ch[next] === ch[current]) {
        return false;
      }
    }
  }

  return true;
}

for (let i = 0; i < taseCase; i++) {
  const [V, E] = input[testCasePointer];

  const adjacencyList = Array.from({ length: V + 1 }, () => []);
  const ch = Array.from({ length: V + 1 }, () => 0);

  for (let j = testCasePointer + 1; j < testCasePointer + 1 + E; j++) {
    const [v1, v2] = input[j];
    adjacencyList[v1].push(v2);
    adjacencyList[v2].push(v1);
  }

  let isBipartite = true;
  for (let j = 1; j <= V; j++) {
    if (ch[j] === 0) {
      if (!bfs(j, adjacencyList, ch)) {
        isBipartite = false;
        break;
      }
    }
  }

  console.log(isBipartite ? "YES" : "NO");
  testCasePointer += E + 1;
}
