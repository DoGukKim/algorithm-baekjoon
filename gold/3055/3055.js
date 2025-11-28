// TimeComplexity: O(R * C)
// SpaceComplexity: O(R * C)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [R, C] = input[0].split(" ").map(Number);
const mtx = input.slice(1).map((row) => row.split(""));
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const waterQueue = [];
const hedgehogQueue = [];
const waterMtx = Array.from({ length: R }, () => Array(C).fill(-1));
const hedgehogMtx = Array.from({ length: R }, () => Array(C).fill(-1));

for (let x = 0; x < R; x++) {
  for (let y = 0; y < C; y++) {
    if (mtx[x][y] === "S") {
      hedgehogQueue.push([x, y]);
      hedgehogMtx[x][y] = 0;
    }
    if (mtx[x][y] === "*") {
      waterQueue.push([x, y]);
      waterMtx[x][y] = 0;
    }
  }
}

let waterQueueHead = 0;
while (waterQueueHead < waterQueue.length) {
  const [cx, cy] = waterQueue[waterQueueHead++];

  for (let i = 0; i < directions.length; i++) {
    const [dx, dy] = directions[i];
    const nx = cx + dx;
    const ny = cy + dy;
    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
    if (mtx[nx][ny] === "X" || waterMtx[nx][ny] !== -1 || mtx[nx][ny] === "D")
      continue;
    waterQueue.push([nx, ny]);
    waterMtx[nx][ny] = waterMtx[cx][cy] + 1;
  }
}

let hedgehogQueueHead = 0;
while (hedgehogQueueHead < hedgehogQueue.length) {
  const [cx, cy] = hedgehogQueue[hedgehogQueueHead++];

  for (let i = 0; i < directions.length; i++) {
    const [dx, dy] = directions[i];
    const nx = cx + dx;
    const ny = cy + dy;
    const nextTime = hedgehogMtx[cx][cy] + 1;
    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
    if (mtx[nx][ny] === "D") {
      console.log(nextTime);
      return;
    }
    if (
      mtx[nx][ny] !== "X" &&
      hedgehogMtx[nx][ny] === -1 &&
      (waterMtx[nx][ny] === -1 || nextTime < waterMtx[nx][ny])
    ) {
      hedgehogQueue.push([nx, ny]);
      hedgehogMtx[nx][ny] = nextTime;
    }
  }
}

console.log("KAKTUS");
