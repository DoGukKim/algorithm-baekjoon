# TimeComplexity: O(M * N * log(M * N))
# SpaceComplexity: O(M * N)
import sys
import heapq

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split()
M = int(input[0])
N = int(input[1])
matrix = []
idx = 2
for _ in range(M):
    matrix.append([int(input[idx + j]) for j in range(N)])
    idx += N

dp = [[0] * N for _ in range(M)]
dp[0][0] = 1
directions = [
    (0, 1),
    (1, 0),
    (0, -1),
    (-1, 0),
]
heap = []
heapq.heappush(heap, (-matrix[0][0], 0, 0))
while heap:
    h, x, y = heapq.heappop(heap)

    for i in range(4):
        nx = x + directions[i][0]
        ny = y + directions[i][1]
        if 0 <= nx < M and 0 <= ny < N:
            if matrix[nx][ny] < matrix[x][y]:
                if dp[nx][ny] == 0:
                    heapq.heappush(heap, (-matrix[nx][ny], nx, ny))
                dp[nx][ny] += dp[x][y]

print(dp[M - 1][N - 1])
