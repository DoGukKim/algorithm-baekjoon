# TimeComplexity: O(K log H)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
K, N = map(int, input[0].split())
cables = list(map(int, input[1:]))

left = 1
right = max(cables)
result = 0
while left <= right:
    pivot = (left + right) // 2
    count = 0
    for cable in cables:
        count += cable // pivot
    if count >= N:
        result = pivot
        left = pivot + 1
    else:
        right = pivot - 1
print(result)
