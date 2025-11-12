// TimeComplexity: O(4^N * √10^N)
// SpaceComplexity: O(N)

function checkPrimeNumber(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

const numbers = [1, 3, 7, 9];
const primeNumber = [2, 3, 5, 7];

const result = [];

function dfs(n, level) {
  if (level === input) {
    result.push(n);
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    const num = n * 10 + numbers[i];
    if (checkPrimeNumber(num)) {
      dfs(num, level + 1);
    }
  }
}

for (let i = 0; i < primeNumber.length; i++) {
  dfs(primeNumber[i], 1);
}

console.log(result);
