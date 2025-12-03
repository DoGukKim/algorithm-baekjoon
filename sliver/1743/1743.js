// TimeComplexity: O(N * M)
// SpaceComplexity: O(N * M)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [N, M, K] = input[0];
const edges = input.slice(1);
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const matrix = Array.from({ length: N }, () => Array(M).fill(0));
for (let i = 0; i < K; i++) {
  const [x, y] = edges[i];
  matrix[x - 1][y - 1] = 1;
}

let result = 0;
const ch = Array.from({ length: N }, () => Array(M).fill(0));
for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    if (matrix[x][y] === 1 && ch[x][y] === 0) {
      ch[x][y] = 1;
      const queue = [[x, y]];
      let head = 0;
      let count = 1;
      while (head < queue.length) {
        const [cx, cy] = queue[head++];
        for (let i = 0; i < directions.length; i++) {
          const [dx, dy] = directions[i];
          const nx = cx + dx;
          const ny = cy + dy;
          if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
          if (matrix[nx][ny] === 1 && ch[nx][ny] === 0) {
            ch[nx][ny] = 1;
            queue.push([nx, ny]);
            count++;
          }
        }
      }
      result = Math.max(result, count);
    }
  }
}

console.log(result);
