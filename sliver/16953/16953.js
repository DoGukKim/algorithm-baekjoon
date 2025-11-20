// TimeComplexity: O(n)
// SpaceComplexity: O(n)
// n은 A에서 B로 가는 최대 연산 횟수
// BFS를 사용한 풀이
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [A, B] = input[0].split(" ").map(Number);

const dist = [(x) => x * 2, (x) => x * 10 + 1];
const MAX = 10 ** 9;
const ch = new Map();
ch.set(A, 0);

const queue = [A];
let queuePointer = 0;
while (queuePointer < queue.length) {
  const current = queue[queuePointer++];

  for (let i = 0; i < dist.length; i++) {
    const next = dist[i](current);
    if (next < 0 || next > MAX) continue;
    if (ch.has(next)) continue;
    if (next === B) {
      console.log(ch.get(current) + 2);
      return;
    }

    ch.set(next, ch.get(current) + 1);
    queue.push(next);
  }
}

console.log(-1);

// TimeComplexity: O(log B)
// SpaceComplexity: O(1)
// 그리디 풀이
// let input = require("fs")
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//   .split("\n");
// let [A, B] = input[0].split(" ").map(Number);

// let count = 1;

// while (A < B) {
//   if (B % 2 === 0) {
//     B = B / 2;
//   } else if (B % 10 === 1) {
//     B = Math.floor(B / 10);
//   } else {
//     break;
//   }
//   count++;
// }

// if (A === B) {
//   console.log(count);
// } else {
//   console.log(-1);
// }
