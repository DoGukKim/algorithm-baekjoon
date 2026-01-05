# TimeComplexity: O(N)
# SpaceComplexity: O(N^2)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
T = int(input[0])
pointer = 1


def rotate45(n, mtx):
    new_mtx = [row[:] for row in mtx]
    mid = n // 2

    for i in range(n):
        new_mtx[i][mid] = mtx[i][i]
        new_mtx[i][n - 1 - i] = mtx[i][mid]
        new_mtx[mid][n - 1 - i] = mtx[i][n - 1 - i]
        new_mtx[i][i] = mtx[mid][i]

    return new_mtx


for i in range(T):
    n_str, d_str = input[pointer].split()
    N = int(n_str)
    D = int(d_str)

    raw_matrix = input[pointer + 1 : pointer + 1 + N]
    matrix = [list(map(int, row.split())) for row in raw_matrix]

    pointer += N + 1

    count = (D // 45) % 8

    result = matrix
    for _ in range(count):
        result = rotate45(N, result)

    for row in result:
        print(*(row))
