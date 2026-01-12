# TimeComplexity: O(N)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

T = int(input[0])
commands = input[1:]

# 북 -> 서 -> 남 -> 동 (반시계 방향, 문제 조건 충족)
direction = [(0, 1), (-1, 0), (0, -1), (1, 0)]

for i in range(T):
    command = commands[i].strip()

    x, y = 0, 0
    d = 0  # 0: 북쪽 시작

    min_x, max_x = 0, 0
    min_y, max_y = 0, 0

    for cmd in command:
        if cmd == "F":
            dx, dy = direction[d]
            x += dx
            y += dy
        elif cmd == "B":
            dx, dy = direction[d]
            x -= dx
            y -= dy
        elif cmd == "L":
            d = (d + 1) % 4
        elif cmd == "R":
            d = (d - 1) % 4

        # 이동할 때마다 최대/최소 범위 갱신
        min_x = min(min_x, x)
        max_x = max(max_x, x)
        min_y = min(min_y, y)
        max_y = max(max_y, y)

    width = max_x - min_x
    height = max_y - min_y

    print(width * height)
