# TimeComplexity: O(N^3)
# SpaceComplexity: O(N^2)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N = int(input[0])
M = int(input[1])
edges = [list(map(int, line.split())) for line in input[2:]]

matrix = [[float("inf")] * N for _ in range(N)]

for i in range(N):
    matrix[i][i] = 0

for edge in edges:
    a, b, c = edge
    matrix[a - 1][b - 1] = min(matrix[a - 1][b - 1], c)


for k in range(N):
    for i in range(N):
        for j in range(N):
            if matrix[i][k] + matrix[k][j] < matrix[i][j]:
                matrix[i][j] = matrix[i][k] + matrix[k][j]

for i in range(N):
    converted_row = [0 if x == float("inf") else x for x in matrix[i]]
    print(" ".join(map(str, converted_row)))
