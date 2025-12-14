# TimeComplexity: O(N)
# SpaceComplexity: O(N)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

n = int(input[0])
input = list(map(int, input[1:]))
result = []

for i in range(0, n):
    if input[i] == 0:
        result.pop()
    else:
        result.append(input[i])

print(sum(result))
