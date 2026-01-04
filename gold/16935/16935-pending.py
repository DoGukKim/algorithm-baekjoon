# TimeComplexity: O(P)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

N, M, R = map(int, input[0].split())
matrix = [line.split() for line in input[1:-1]]
calc_type = input[-1]


def calc_1():
    for x in range(N // 2):
        for y in range(M):
            matrix[x][y], matrix[N - 1 - x][y] = matrix[N - 1 - x][y], matrix[x][y]


def calc_2():
    for x in range(N):
        for y in range(M // 2):
            matrix[x][y], matrix[x][M - 1 - y] = matrix[x][M - 1 - y], matrix[x][y]


def calc_3():
    global N, M, matrix
    rotated = [[0] * N for _ in range(M)]
    for x in range(N):
        for y in range(M):
            rotated[y][N - 1 - x] = matrix[x][y]
    N, M = M, N
    matrix = rotated


def calc_4():
    global N, M, matrix
    rotated = [[0] * N for _ in range(M)]
    for x in range(N):
        for y in range(M):
            rotated[M - 1 - y][x] = matrix[x][y]
    N, M = M, N
    matrix = rotated


calc_map = {"1": calc_1, "2": calc_2, "3": calc_3, "4": calc_4}


for _ in range(R):
    calc_map[calc_type]()

for row in matrix:
    print(" ".join(row))
