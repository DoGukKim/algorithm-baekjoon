// TimeComplexity: O(C(V, M) * N^2)
// SpaceComplexity: O(N^2 + V)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
