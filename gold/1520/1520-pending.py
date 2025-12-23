# TimeComplexity: O(N^2)
# SpaceComplexity: O(1)
import sys

sys.setrecursionlimit(10**6)

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

N, M = map(int, input[0].split())
matrix = [list(map(int, i.split())) for i in input[1:]]

dp = [[-1] * M for _ in range(N)]

directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]


def dfs(x, y):
    if x == N - 1 and y == M - 1:
        return 1

    if dp[x][y] != -1:
        return dp[x][y]

    dp[x][y] = 0

    for dx, dy in directions:
        nx, ny = x + dx, y + dy

        if 0 <= nx < N and 0 <= ny < M:
            if matrix[nx][ny] < matrix[x][y]:
                dp[x][y] += dfs(nx, ny)

    return dp[x][y]


print(dfs(0, 0))
