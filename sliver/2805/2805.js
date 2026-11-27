// TimeComplexity: O(N log H)
// SpaceComplexity: O(1)
const data = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);
const N = data[0];
const M = data[1];
const trees = data.slice(2, 2 + N);

let lo = 0;
let hi = 0;
for (let i = 0; i < N; i++) if (trees[i] > hi) hi = trees[i]; // 가장 긴 나무

let answer = 0;
while (lo <= hi) {
  const mid = Math.floor((lo + hi) / 2);

  // 결정 알고리즘: mid 높이로 잘랐을 때 얻는 나무의 양
  let wood = 0;
  for (let i = 0; i < N; i++) {
    if (trees[i] > mid) wood += trees[i] - mid;
  }

  if (wood >= M) {
    answer = mid; // 통과 → 후보로 기록하고 더 높여 본다
    lo = mid + 1;
  } else {
    hi = mid - 1; // 탈락 → 더 낮춰야 한다
  }
}
console.log(answer);
