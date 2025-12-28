# TimeComplexity: O(N^2 * log(N))
# SpaceComplexity: O(N^2)
import heapq
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

pointer = 0
c = 1
direction = [(0, 1), (1, 0), (0, -1), (-1, 0)]

while True:
    N = int(input[pointer])
    matrix = [
        list(map(int, line.split())) for line in input[pointer + 1 : pointer + N + 1]
    ]
    cost_matrix = [[float("inf")] * N for _ in range(N)]
    cost_matrix[0][0] = matrix[0][0]
    heap = []
    heapq.heappush(heap, (matrix[0][0], 0, 0))

    while heap:
        cur_cost, cur_x, cur_y = heapq.heappop(heap)

        if cur_cost > cost_matrix[cur_x][cur_y]:
            continue

        for i in range(4):
            dx, dy = direction[i]
            nx = cur_x + dx
            ny = cur_y + dy

            if 0 <= nx < N and 0 <= ny < N:
                next_cost = cost_matrix[cur_x][cur_y] + matrix[nx][ny]
                if next_cost < cost_matrix[nx][ny]:
                    cost_matrix[nx][ny] = next_cost
                    heapq.heappush(heap, (next_cost, nx, ny))

    print(f"Problem {c}: {cost_matrix[N - 1][N - 1]}")
    c += 1
    pointer += N + 1
    if pointer > len(input) or input[pointer] == "0":
        break
