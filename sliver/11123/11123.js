// TimeComplexity: O(H * W)
// SpaceComplexity: O(H * W)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = Number(input[0]);
let testCaseIndex = 1;
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

for (let i = 0; i < testCase; i++) {
  const [H, W] = input[testCaseIndex].split(" ").map(Number);
  const ch = Array.from({ length: H }, () => Array(W).fill(0));
  const matrix = input
    .slice(testCaseIndex + 1, testCaseIndex + H + 1)
    .map((i) => i.trim().split(""));
  let sheepGroupCount = 0;

  for (let x = 0; x < H; x++) {
    for (let y = 0; y < W; y++) {
      if (ch[x][y] === 0 && matrix[x][y] === "#") {
        const queue = [[x, y]];
        let queueHead = 0;
        ch[x][y] = 1;

        while (queueHead < queue.length) {
          const [cx, cy] = queue[queueHead++];
          for (let i = 0; i < directions.length; i++) {
            const [dx, dy] = directions[i];
            const nx = cx + dx;
            const ny = cy + dy;
            if (
              nx >= 0 &&
              nx < H &&
              ny >= 0 &&
              ny < W &&
              ch[nx][ny] === 0 &&
              matrix[nx][ny] === "#"
            ) {
              ch[nx][ny] = 1;
              queue.push([nx, ny]);
            }
          }
        }
        sheepGroupCount++;
      }
    }
  }

  console.log(sheepGroupCount);
  testCaseIndex += H + 1;
}
