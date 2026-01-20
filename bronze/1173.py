# TimeComplexity: O(N) (단, T와 R의 비율에 영향을 받음)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N, m, M, T, R = map(int, input[0].split())

total_time = 0
ex_count = 0
cur_pulse = m

if m + T > M:
    print(-1)
    sys.exit(0)


while ex_count < N:
    if cur_pulse + T <= M:
        ex_count += 1
        cur_pulse += T
    else:
        cur_pulse = max(m, cur_pulse - R)
    total_time += 1


print(total_time)
