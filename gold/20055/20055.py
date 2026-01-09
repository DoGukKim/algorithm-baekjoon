# TimeComplexity: O(N)
# SpaceComplexity: O(N)
import sys
from collections import deque

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N, K = map(int, input[0].split())
belts = deque(map(int, input[1].split()))
robots = deque([False] * N)
zero_count = belts.count(0)
time = 0

while True:
    time += 1

    belts.rotate(1)
    robots.rotate(1)
    robots[N - 1] = False

    for i in range(N - 2, -1, -1):
        if robots[i] and not robots[i + 1] and belts[i + 1] > 0:
            robots[i] = False
            robots[i + 1] = True
            belts[i + 1] -= 1
            if belts[i + 1] == 0:
                zero_count += 1
    robots[N - 1] = False

    if not robots[0] and belts[0] > 0:
        robots[0] = True
        belts[0] -= 1
        if belts[0] == 0:
            zero_count += 1

    if zero_count >= K:
        break

print(time)
