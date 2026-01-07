# TimeComplexity: O(N^2 + K)
# SpaceComplexity: O(N^2 + K + L)
from collections import deque
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N = int(input[0])
K = int(input[1])
L = int(input[2 + K])

apples = [list(map(int, line.split())) for line in input[2 : 2 + K]]
apples_map = {(row, col): True for row, col in apples}

moves = input[::-1][:L][::-1]
directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
cur_dir_idx = 0
snake = deque([(1, 1)])

current_time = 0

# 게임 종료 후 루프 탈출을 위한 플래그
game_over = False

for i in range(L):
    if game_over:
        break

    x_str, turning = moves[i].split()
    target_time = int(x_str)

    # 1. 이전 시간부터 회전해야 할 시간(target_time)까지 직진
    # 예: 3초에 회전이면, 현재 시간이 0초일 때 3번 이동
    steps = target_time - current_time

    for _ in range(steps):
        current_time += 1

        # 현재 방향으로 다음 좌표 계산
        dr, dc = directions[cur_dir_idx]
        s_r, s_c = snake[-1]  # 머리 위치
        sn_r, sn_c = s_r + dr, s_c + dc

        # [종료 조건 1] 벽에 부딪힘
        if not (1 <= sn_r <= N and 1 <= sn_c <= N):
            game_over = True
            break

        # [종료 조건 2] 자기 몸에 부딪힘
        if (sn_r, sn_c) in snake:
            game_over = True
            break

        # 머리 이동 (뱀 길이를 늘림)
        snake.append((sn_r, sn_c))

        # [사과 처리]
        if (sn_r, sn_c) in apples_map:
            # 사과가 있으면: 사과를 없애고 꼬리는 그대로 둠 (몸길이 증가)
            del apples_map[(sn_r, sn_c)]
        else:
            # 사과가 없으면: 꼬리를 줄임 (몸길이 유지)
            snake.popleft()

    if game_over:
        break

    # 2. 시간(X초)이 다 되었으므로 방향 전환
    if turning == "L":  # 왼쪽 90도
        cur_dir_idx = (cur_dir_idx - 1) % 4
    else:  # 'D': 오른쪽 90도
        cur_dir_idx = (cur_dir_idx + 1) % 4


# 3. 명령이 다 끝난 후에도 게임이 안 끝났다면, 부딪힐 때까지 계속 직진
if not game_over:
    while True:
        current_time += 1

        dr, dc = directions[cur_dir_idx]
        s_r, s_c = snake[-1]
        sn_r, sn_c = s_r + dr, s_c + dc

        # 벽 충돌 체크
        if not (1 <= sn_r <= N and 1 <= sn_c <= N):
            break

        # 몸 충돌 체크
        if (sn_r, sn_c) in snake:
            break

        snake.append((sn_r, sn_c))

        if (sn_r, sn_c) in apples_map:
            del apples_map[(sn_r, sn_c)]
        else:
            snake.popleft()

print(current_time)
