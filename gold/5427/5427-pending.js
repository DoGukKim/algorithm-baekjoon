const testCase = Number(input[0]);
let testCasePointer = 0;
input = input.slice(1);

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

// person은 .인 경우만 이동 가능, 벽,불, checked된 경우는 못감
// fire는 벽과 이미 불난 곳은 안가도 됨
// person이 행렬에 벗어나면 탈출 성공
// 불도 없을 수도 있고
// 출구도 없을 수도 있다.

for (let i = 0; i < testCase; i++) {
  const [w, h] = input[testCasePointer].split(" ").map(Number);
  let result = 0;
  const ch = Array.from({ length: h }, () => Array(w).fill(0));
  const mtx = input
    .slice(testCasePointer + 1, testCasePointer + h + 1)
    .map((i) => i.split(""));
  const personQueue = [];
  const fireQueue = [];

  // 불과 사람 위치 큐에 초기화
  for (let x = 0; x < h; x++) {
    for (let y = 0; y < w; y++) {
      if (mtx[x][y] === "@") {
        personQueue.push([x, y]);
        ch[x][y] = 1;
      }
      if (mtx[x][y] === "*") {
        fireQueue.push([x, y]);
      }
    }

    let personQueuePointer = 0;
    let fireQueuePointer = 0;
    while (personQueuePointer < personQueue.length) {
      const [px, py] = personQueue[personQueuePointer++];
      const [fx, fy] = fireQueue[fireQueuePointer++];

      for (let i = 0; i < directions.length; i++) {
        const [dx, dy] = directions[i];
        const pnx = px + dx;
        const pny = py + dy;
        const fnx = fx + dx;
        const fny = fy + dy;
        if (pnx < 0 || pnx >= h || pny < 0 || pny >= w) {
          result++;
          break;
        }

        if (mtx[pnx][pny] === "." && ch[pnx][pny] === 0) {
          personQueue.push([pnx, pny]);
          ch[pnx][pny] = 1;
          result++;
        }

        if (mtx[fnx][fny] === ".") {
          fireQueue.push([fnx, fny]);
          mtx[fnx][fny] = "*";
        }
      }
    }
  }

  console.log(personQueue);
  console.log("--------------------------------");
  testCasePointer += h + 1;
}
