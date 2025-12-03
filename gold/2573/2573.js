// TimeComplexity: O(K * N * M)
// SpaceComplexity: O(N * M)
// K: 년도
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
let matrix = input.slice(1).map((i) => i.split(" ").map(Number));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let years = 0;

while (true) {
  const ch = Array.from({ length: N }, () => Array(M).fill(0));
  let icebergCount = 0;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (ch[x][y] === 0 && matrix[x][y] > 0) {
        icebergCount++;
        ch[x][y] = 1;
        const queue = [[x, y]];
        let head = 0;

        while (head < queue.length) {
          const [cx, cy] = queue[head++];

          for (let i = 0; i < 4; i++) {
            const nx = cx + directions[i][0];
            const ny = cy + directions[i][1];

            if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
              if (ch[nx][ny] === 0 && matrix[nx][ny] > 0) {
                ch[nx][ny] = 1;
                queue.push([nx, ny]);
              }
            }
          }
        }
      }
    }
  }

  if (icebergCount >= 2) {
    console.log(years);
    break;
  }
  if (icebergCount === 0) {
    console.log(0);
    break;
  }

  const nextMatrix = Array.from({ length: N }, () => Array(M).fill(0));

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (matrix[x][y] > 0) {
        let seaCount = 0;
        for (let i = 0; i < 4; i++) {
          const nx = x + directions[i][0];
          const ny = y + directions[i][1];

          if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
            if (matrix[nx][ny] === 0) {
              seaCount++;
            }
          }
        }

        nextMatrix[x][y] = Math.max(0, matrix[x][y] - seaCount);
      }
    }
  }

  matrix = nextMatrix;
  years++;
}
