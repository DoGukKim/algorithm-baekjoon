// TimeComplexity: O(NM)
// SpaceComplexity: O(NM)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [m, n] = input[0];

const matrix = input.slice(1);
let rawTomato = 0;
const queue = [];
for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (matrix[x][y] === 1) queue.push([x, y, 0]);
    if (matrix[x][y] === 0) rawTomato++;
  }
}

let result = 0;
let head = 0;
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

while (queue.length > head) {
  const [x, y, day] = queue[head++];
  result = day;

  for (let i = 0; i < directions.length; i++) {
    const [dx, dy] = directions[i];
    const nx = x + dx;
    const ny = y + dy;
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (matrix[nx][ny] === 0) {
      matrix[nx][ny] = day + 1;
      queue.push([nx, ny, day + 1]);
      rawTomato--;
    }
  }
}

console.log(rawTomato > 0 ? -1 : result);
