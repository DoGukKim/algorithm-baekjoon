// TimeComplexity: O(n)
// SpaceComplexity: O(n)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = input[0].split(" ").map(Number);
const [N, K] = input;

if (N === K) {
  console.log(0);
  console.log(1);
  return;
}

if (N > K) {
  console.log(N - K);
  console.log(1);
  return;
}

const directions = [(x) => x + 1, (x) => x - 1, (x) => x * 2];
const MAX = 100001;
const time = Array(MAX).fill(0);
const count = Array(MAX).fill(0);
time[N] = 1;
count[N] = 1;

const queue = [N];
let head = 0;
while (head < queue.length) {
  const current = queue[head++];

  for (let i = 0; i < directions.length; i++) {
    const next = directions[i](current);
    if (next < 0 || next > 100000) continue;

    if (time[next] === 0) {
      time[next] = time[current] + 1;
      count[next] = count[current];
      queue.push(next);
    } else if (time[next] === time[current] + 1) {
      count[next] += count[current];
    }
  }
}

console.log(time[K] - 1);
console.log(count[K]);
