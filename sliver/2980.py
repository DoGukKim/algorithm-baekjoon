# TimeComplexity: O(N)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

N, L = map(int, input[0].split())
signals = [list(map(int, line.split())) for line in input[1:]]

time = 0
prev_pos = 0
for signal in signals:
    D, R, G = signal
    time += D - prev_pos
    prev_pos = D

    ciycle = R + G
    check = time % ciycle
    if check < R:
        wait_time = R - check
        time += wait_time

time += L - prev_pos
print(time)
