// TimeComplexity: O(N * M)
// SpaceComplexity: O(N * M)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));

let testCasePointer = 0;
const testCase = input[0];
input = input.slice(1);
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

for (let i = 0; i < testCase; i++) {
  const [M, N, K] = input[testCasePointer];

  // 2차원 배열 초기화 및 배추 위치 표시
  const matrix = Array.from({ length: M }, () => Array(N).fill(0));
  for (let j = testCasePointer + 1; j < testCasePointer + K + 1; j++) {
    const [x, y] = input[j];
    matrix[x][y] = 1;
  }

  let wormCount = 0;
  for (let x = 0; x < M; x++) {
    for (let y = 0; y < N; y++) {
      if (matrix[x][y] === 1) {
        matrix[x][y] = 0;
        dfs(x, y);
        wormCount++;
      }
    }
  }

  function dfs(x, y) {
    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && matrix[nx][ny] === 1) {
        matrix[nx][ny] = 0;
        dfs(nx, ny);
      }
    }
  }

  console.log(wormCount);
  testCasePointer += K + 1;
}
