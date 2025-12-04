// TimeComplexity: O(N^2)
// SpaceComplexity: O(N^2)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((i) => i.split(" ").map(Number));

const N = input[0][0];
const matrix = input.slice(1);

const ch = Array.from({ length: N }, () => Array(N).fill(0));
ch[0][0] = 1;
const result = dfs(0, 0);
console.log(result ?? "Hing");

function dfs(x, y) {
  if (x === N - 1 && y === N - 1) {
    return "HaruHaru";
  }

  const directions = [
    [0, matrix[x][y]],
    [matrix[x][y], 0],
  ];

  for (let i = 0; i < directions.length; i++) {
    const [dx, dy] = directions[i];
    const nx = x + dx;
    const ny = y + dy;
    if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
    if (ch[nx][ny] === 0 && matrix[nx][ny] !== 0) {
      ch[nx][ny] = 1;
      const result = dfs(nx, ny);
      if (result === "HaruHaru") {
        return "HaruHaru";
      }
    }
  }
}
