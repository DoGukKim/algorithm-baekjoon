# TimeComplexity: O(N)
# SpaceComplexity: O(1)
from collections import deque
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N = int(input[0])
K = int(input[1])
L = int(input[2 + K])

apples = [list(map(int, line.split())) for line in input[2 : 2 + K]]
apples_map = {(row, col): True for row, col in apples}
moves = input[2 + K + 1 :]

directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
cur_dir_idx = 0

snake = deque([(1, 1)])


def is_hit_body(nx, ny):
    return (nx, ny) in snake


result = 0
game_over = False

for i in range(L):
    x, direct = moves[i].split()
    X = int(x)

    for _ in range(X):
        result += 1
        dr, dc = directions[cur_dir_idx]
        row, col = snake[-1]
        new_row, new_col = row + dr, col + dc

        if new_row < 1 or new_row > N or new_col < 1 or new_col > N:
            game_over = True
            break
        if is_hit_body(new_row, new_col):
            game_over = True
            break

        snake.append((new_row, new_col))

        if (new_row, new_col) in apples_map:
            del apples_map[(new_row, new_col)]
        else:
            snake.popleft()

    if game_over:
        break

    if direct == "L":
        cur_dir_idx = (cur_dir_idx - 1) % 4
    else:
        cur_dir_idx = (cur_dir_idx + 1) % 4

print(result)

# 6
# 3
# 3 4
# 2 5
# 5 3
# 3
# 3 D
# 15 L
# 17 D
