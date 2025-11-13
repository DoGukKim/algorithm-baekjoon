import sys

sys.setrecursionlimit(10**6)

lines = sys.stdin.readlines()
data = [list(map(int, line.strip().split())) for line in lines]

test_case_pointer = 0
test_case = data[0][0]
input = data[1:]

directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
]

for i in range(test_case):
    M, N, K = input[test_case_pointer]
    matrix = [[0] * N for _ in range(M)]
    for j in range(test_case_pointer + 1, test_case_pointer + K + 1):
        x, y = input[j]
        matrix[x][y] = 1

    def dfs(x, y):
        for i in range(4):
            nx = x + directions[i][0]
            ny = y + directions[i][1]
            if 0 <= nx < M and 0 <= ny < N and matrix[nx][ny] == 1:
                matrix[nx][ny] = 0
                dfs(nx, ny)

    wormCount = 0
    for x in range(M):
        for y in range(N):
            if matrix[x][y] == 1:
                matrix[x][y] = 0
                dfs(x, y)
                wormCount += 1

    print(wormCount)

    test_case_pointer += K + 1
