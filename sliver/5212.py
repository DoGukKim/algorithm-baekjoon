# TimeComplexity: O(RC)
# SpaceComplexity: O(RC)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
R, C = map(int, input[0].split())
directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
matrix = [list(row) for row in input[1:]]
dead_islands = []


def is_outbound(r, c):
    if r < 0 or r >= R or c < 0 or c >= C:
        return True
    return False


def is_dead_island(r, c):
    cnt = 0
    for i in range(4):
        dr, dc = directions[i]
        nr, nc = r + dr, c + dc

        if is_outbound(nr, nc) or matrix[nr][nc] == ".":
            cnt += 1

    return cnt >= 3


for r in range(R):
    for c in range(C):
        if matrix[r][c] == "X":
            if is_dead_island(r, c):
                dead_islands.append((r, c))

for dead_island in dead_islands:
    r, c = dead_island
    matrix[r][c] = "."


min_row, max_row = float("inf"), float("-inf")
min_col, max_col = float("inf"), float("-inf")

for r in range(R):
    for c in range(C):
        if matrix[r][c] == "X":
            min_row = min(min_row, r)
            max_row = max(max_row, r)
            min_col = min(min_col, c)
            max_col = max(max_col, c)

for r in range(min_row, max_row + 1):
    print("".join(matrix[r][min_col : max_col + 1]))
