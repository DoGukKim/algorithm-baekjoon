// TimeComplexity: O(N * M)
// SpaceComplexity: O(N * M)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const matrix = input.slice(1).map((i) => i.trim().split(""));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let result = 0;
for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    if (matrix[x][y] === "L") {
      const ch = Array.from({ length: N }, () => Array(M).fill(0));
      ch[x][y] = 1;
      const queue = [[x, y, 0]];
      let queueHead = 0;
      while (queueHead < queue.length) {
        const [cx, cy, level] = queue[queueHead++];
        result = Math.max(result, level);
        for (let i = 0; i < directions.length; i++) {
          const [dx, dy] = directions[i];
          const nx = cx + dx;
          const ny = cy + dy;
          if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
          if (ch[nx][ny] === 0 && matrix[nx][ny] === "L") {
            ch[nx][ny] = 1;
            queue.push([nx, ny, level + 1]);
          }
        }
      }
    }
  }
}

console.log(result);
