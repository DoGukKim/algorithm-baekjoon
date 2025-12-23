# TimeComplexity: O(N)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

N, K = map(int, input[0].split())
input = list(map(int, input[1:]))

result = 0
for i in range(N - 1, -1, -1):
    if input[i] <= K:
        result += K // input[i]
        K %= input[i]

print(result)
