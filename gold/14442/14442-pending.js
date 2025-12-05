const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);

// map을 2차원 배열로 변환 (0: 이동 가능, 1: 벽)
const matrix = input.slice(1).map((line) => line.trim().split("").map(Number));

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

// 최적화 1: 3차원 방문 배열을 1차원 Int32Array로 평탄화 (Flatten)
// 인덱스 접근 방법: index = x * M * (K + 1) + y * (K + 1) + k
const visited = new Int32Array(N * M * (K + 1)).fill(0);

function getVisitedIdx(x, y, k) {
  return x * M * (K + 1) + y * (K + 1) + k;
}

// 최적화 2: 큐를 Int32Array로 구현
// 예상 최대 상태 수에 여유를 둠. (N * M * (K+1) 만큼 상태가 존재할 수 있음)
// 각 상태마다 x, y, k, dist 4가지 정보를 저장할 필요 없이
// 큐에는 x, y, k만 넣고, 거리는 visited 배열에 저장합니다.
const MAX_QUEUE_SIZE = N * M * (K + 1);
const queueX = new Int32Array(MAX_QUEUE_SIZE);
const queueY = new Int32Array(MAX_QUEUE_SIZE);
const queueW = new Int32Array(MAX_QUEUE_SIZE);

let head = 0;
let tail = 0;

// 시작점 추가
queueX[tail] = 0;
queueY[tail] = 0;
queueW[tail] = 0;
tail++;

visited[getVisitedIdx(0, 0, 0)] = 1;

let result = -1;

while (head < tail) {
  const x = queueX[head];
  const y = queueY[head];
  const w = queueW[head];
  head++;

  // 현재까지의 거리 가져오기
  const currentDist = visited[getVisitedIdx(x, y, w)];

  // 목적지 도달
  if (x === N - 1 && y === M - 1) {
    result = currentDist;
    break;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + directions[i][0];
    const ny = y + directions[i][1];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    // 1. 다음 칸이 벽이 아님 (0)
    if (matrix[nx][ny] === 0) {
      const nextIdx = getVisitedIdx(nx, ny, w);
      if (visited[nextIdx] === 0) {
        visited[nextIdx] = currentDist + 1;
        queueX[tail] = nx;
        queueY[tail] = ny;
        queueW[tail] = w;
        tail++;
      }
    }
    // 2. 다음 칸이 벽임 (1)
    else {
      if (w < K) {
        const nextIdx = getVisitedIdx(nx, ny, w + 1);
        if (visited[nextIdx] === 0) {
          visited[nextIdx] = currentDist + 1;
          queueX[tail] = nx;
          queueY[tail] = ny;
          queueW[tail] = w + 1;
          tail++;
        }
      }
    }
  }
}

console.log(result);
