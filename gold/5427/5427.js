// TimeComplexity: O(w * h)
// SpaceComplexity: O(w * h)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = Number(input[0]);
let testCasePointer = 0;
input = input.slice(1);

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

for (let i = 0; i < testCase; i++) {
  const [w, h] = input[testCasePointer].split(" ").map(Number);
  const mtx = input
    .slice(testCasePointer + 1, testCasePointer + h + 1)
    .map((i) => i.split(""));
  const fireMtx = Array.from({ length: h }, () => Array(w).fill(-1));
  const personMtx = Array.from({ length: h }, () => Array(w).fill(-1));

  const fireQueue = [];
  const personQueue = [];

  for (let x = 0; x < h; x++) {
    for (let y = 0; y < w; y++) {
      if (mtx[x][y] === "@") {
        personQueue.push([x, y]);
        personMtx[x][y] = 0;
      }

      if (mtx[x][y] === "*") {
        fireQueue.push([x, y]);
        fireMtx[x][y] = 0;
      }
    }
  }

  // 불 먼저 이동
  let fireQueuePointer = 0;
  while (fireQueuePointer < fireQueue.length) {
    const [cx, cy] = fireQueue[fireQueuePointer++];

    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx < 0 || nx >= h || ny < 0 || ny >= w) continue;
      if (mtx[nx][ny] === "#" || fireMtx[nx][ny] !== -1) continue;

      fireQueue.push([nx, ny]);
      fireMtx[nx][ny] = fireMtx[cx][cy] + 1;
    }
  }

  let canEscape = false;
  let escapeTime = 0;
  let personQueuePointer = 0;
  while (personQueuePointer < personQueue.length) {
    const [cx, cy] = personQueue[personQueuePointer++];
    const currentTime = personMtx[cx][cy];

    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const nx = cx + dx;
      const ny = cy + dy;
      if (nx < 0 || nx >= h || ny < 0 || ny >= w) {
        canEscape = true;
        escapeTime = currentTime + 1;
        personQueuePointer = personQueue.length;
        break;
      }

      if (mtx[nx][ny] !== "#" && personMtx[nx][ny] === -1) {
        if (fireMtx[nx][ny] === -1 || fireMtx[nx][ny] > currentTime + 1) {
          personMtx[nx][ny] = currentTime + 1;
          personQueue.push([nx, ny]);
        }
      }
    }
  }

  if (canEscape) {
    console.log(escapeTime);
  } else {
    console.log("IMPOSSIBLE");
  }

  testCasePointer += h + 1;
}
