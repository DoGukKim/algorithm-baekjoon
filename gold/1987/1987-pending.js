let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C] = input[0].split(" ").map(Number);
const matrix = input.slice(1).map((row) => row.trim().split(""));
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const ch = Array.from({ length: R }, () => Array(C).fill(0));
ch[0][0] = 1;
const hash = new Set();
hash.add(matrix[0][0]);
let result = 0;

function dfs(x, y, level) {
  for (let i = 0; i < directions.length; i++) {
    const [dx, dy] = directions[i];
    const nx = x + dx;
    const ny = y + dy;
    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
    if (ch[nx][ny] === 0 && hash.has(matrix[nx][ny])) {
      result = Math.max(result, level);
      continue;
    }
    if (ch[nx][ny] === 0 && !hash.has(matrix[nx][ny])) {
      ch[nx][ny] = 1;
      hash.add(matrix[nx][ny]);
      dfs(nx, ny, level + 1);
      ch[nx][ny] = 0;
      hash.delete(matrix[nx][ny]);
    }
  }
}
dfs(0, 0, 1);
console.log(result);
