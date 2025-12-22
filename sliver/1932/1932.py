# TimeComplexity: O(N^2)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

N = int(input[0])
triangle = [list(map(int, line.split())) for line in input[1:]]

for i in range(1, N):
    for j in range(len(triangle[i])):

        if j == 0:
            up_left = 0
        else:
            up_left = triangle[i - 1][j - 1]

        if j == len(triangle[i - 1]):
            up_right = 0
        else:
            up_right = triangle[i - 1][j]

        triangle[i][j] = triangle[i][j] + max(up_left, up_right)

print(max(triangle[N - 1]))
