// TimeComplexity: O(I^2)
// SpaceComplexity: O(I^2)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const testCase = Number(input[0]);
let testCaseIndex = 1;
const directions = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
];

for (let i = 0; i < testCase; i++) {
  const I = Number(input[testCaseIndex]);
  const [cx, cy] = input[testCaseIndex + 1].split(" ").map(Number);
  const [dx, dy] = input[testCaseIndex + 2].split(" ").map(Number);
  const ch = Array.from({ length: I }, () => Array(I).fill(0));
  ch[cx][cy] = 1;
  const queue = [[cx, cy, 0]];
  let head = 0;
  while (head < queue.length) {
    const [x, y, count] = queue[head++];
    if (x === dx && y === dy) {
      console.log(count);
      break;
    }
    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || nx >= I || ny < 0 || ny >= I) continue;
      if (ch[nx][ny] === 0) {
        ch[nx][ny] = 1;
        queue.push([nx, ny, count + 1]);
      }
    }
  }

  testCaseIndex += 3;
}
