// TimeComplexity: O(N * M)
// SpaceComplexity: O(N * M)
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input = input.map((i) => i.split(" ").map(Number));
const [N, M] = input[0];
const knownPeopleCount = input[1][0];
const knownPeople = input[1].slice(1);
const parties = input.slice(2);

// 진실을 아는 사람이 없으면 모든 파티 개수 출력
if (knownPeopleCount === 0) {
  console.log(M);
  return;
}

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [partyCount, ...partyPeople] = parties[i];
  for (let j = 1; j < partyCount; j++) {
    // 첫 번째 요소를 pivot으로 하여 그래프 생성
    graph[partyPeople[0]].push(partyPeople[j]);
    graph[partyPeople[j]].push(partyPeople[0]);
  }
}

// 진실을 아는 사람들을 방문처리
const knownPeopleCh = Array.from({ length: N + 1 }, () => 0);
for (let i = 0; i < knownPeopleCount; i++) {
  knownPeopleCh[knownPeople[i]] = 1;
}

// 진실을 아는 사람들을 탐색하며 방문처리
const bfsCh = Array.from({ length: N + 1 }, () => 0);
const queue = [...knownPeople];
let queueHead = 0;
while (queueHead < queue.length) {
  const current = queue[queueHead++];
  for (let i = 0; i < graph[current].length; i++) {
    const next = graph[current][i];
    if (bfsCh[next] === 1) continue;
    bfsCh[next] = 1;
    knownPeopleCh[next] = 1;
    queue.push(next);
  }
}

// 과장된 이야기 할 수 있는 파티 개수 출력
let result = 0;
for (let i = 0; i < M; i++) {
  const [partyCount, ...partyPeople] = parties[i];
  let canLie = true;
  for (let j = 0; j < partyCount; j++) {
    if (knownPeopleCh[partyPeople[j]] === 1) {
      canLie = false;
      break;
    }
  }
  if (canLie) {
    result++;
  }
}

console.log(result);
