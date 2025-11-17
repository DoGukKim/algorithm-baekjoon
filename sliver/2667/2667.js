// TimeComplexity: O(N^2)
// SpaceComplexity: O(N^2)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const matrix = input.slice(1).map((i) => i.split("").map(Number));

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function dfs(x, y) {
  let count = 1;
  matrix[x][y] = 0;

  for (let i = 0; i < directions.length; i++) {
    const [dx, dy] = directions[i];
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < n && ny >= 0 && ny < n && matrix[nx][ny] === 1) {
      count += dfs(nx, ny);
    }
  }

  return count;
}

let complexCount = 0;
const numberOfHousesInComplex = [];
for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    if (matrix[x][y] === 1) {
      const count = dfs(x, y);
      complexCount++;
      numberOfHousesInComplex.push(count);
    }
  }
}

console.log(complexCount);
console.log(numberOfHousesInComplex.sort((a, b) => a - b).join("\n"));
