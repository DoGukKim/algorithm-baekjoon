input = input[0].split(" ").map(Number);
const [X, Y, W, S] = input;

console.log(Y * S + Math.abs(X - Y) * W);
