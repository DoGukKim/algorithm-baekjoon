// TimeComplexity: O(K * N^2)
// SpaceComplexity: O(N^2)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((i) => i.split(" ").map(Number));
const [N, L, R] = input[0];
const matrix = input.slice(1);

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

let days = 0;

while (true) {
  let isMoved = false;
  const ch = Array.from({ length: N }, () => Array(N).fill(0));

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (ch[x][y] === 0) {
        const queue = [[x, y]];
        const union = [[x, y]];
        let unionSum = matrix[x][y];

        ch[x][y] = 1;
        let head = 0;

        while (head < queue.length) {
          const [cx, cy] = queue[head++];

          for (let i = 0; i < 4; i++) {
            const nx = cx + directions[i][0];
            const ny = cy + directions[i][1];

            if (nx >= 0 && nx < N && ny >= 0 && ny < N && ch[nx][ny] === 0) {
              const gap = Math.abs(matrix[cx][cy] - matrix[nx][ny]);
              if (gap >= L && gap <= R) {
                ch[nx][ny] = 1;
                queue.push([nx, ny]);
                union.push([nx, ny]);
                unionSum += matrix[nx][ny];
              }
            }
          }
        }

        if (union.length > 1) {
          isMoved = true;
          const newPopulation = Math.floor(unionSum / union.length);
          for (const [ux, uy] of union) {
            matrix[ux][uy] = newPopulation;
          }
        }
      }
    }
  }

  if (!isMoved) break;

  days++;
}

console.log(days);
