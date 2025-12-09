const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [N, M] = input[0];
const matrix = input.slice(1);
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const arr = [];
for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (matrix[x][y] === 2) {
      arr.push([x, y]);
    }
  }
}

let result = Infinity;
dfs(0, []);
console.log(result === Infinity ? -1 : result);

function dfs(j, combination) {
  if (combination.length === M) {
    result = Math.min(result, bfs(combination));
    return;
  }

  for (let i = j; i < arr.length; i++) {
    combination.push(arr[i]);
    dfs(i + 1, combination);
    combination.pop();
  }
}

function bfs(combination) {
  const queue = combination.map(([x, y]) => [x, y, 0]);
  let head = 0;
  const ch = Array.from({ length: N }, () => Array(N).fill(0));
  for (const [x, y] of combination) {
    ch[x][y] = 1;
  }

  let maxDistance = 0;
  while (head < queue.length) {
    const [x, y, dist] = queue[head++];
    maxDistance = Math.max(maxDistance, dist);

    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (ch[nx][ny] === 0 && matrix[nx][ny] !== 1) {
        ch[nx][ny] = 1;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (matrix[x][y] !== 1 && ch[x][y] === 0) {
        return Infinity;
      }
    }
  }

  return maxDistance;
}
