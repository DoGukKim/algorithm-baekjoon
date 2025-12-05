// TimeComplexity: O(R * C)
// SpaceComplexity: O(R * C)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [R, C] = input[0].split(" ").map(Number);
const matrix = input.slice(1).map((row) => row.trim().split(""));
let result = 1;
const ch = new Map();
ch.set(matrix[0][0], true);
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

dfs(0, 0, 1);
console.log(result);

function dfs(x, y, depth) {
  for (let i = 0; i < directions.length; i++) {
    const [dx, dy] = directions[i];
    const nx = x + dx;
    const ny = y + dy;
    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
    if (ch.has(matrix[nx][ny])) continue;
    ch.set(matrix[nx][ny], true);
    dfs(nx, ny, depth + 1);
    result = Math.max(result, depth + 1);
    ch.delete(matrix[nx][ny]);
  }
}
