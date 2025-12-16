# TimeComplexity: O(N log H)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

N, M = map(int, input[0].split())
trees = list(map(int, input[1].split()))
right = max(trees)
left = 0
result = 0

while left <= right:
    pivot = (left + right) // 2
    total = 0

    for tree in trees:
        h = tree - pivot
        if h > 0:
            total += h
        if total >= M:
            break

    if total >= M:
        result = pivot
        left = pivot + 1
    else:
        right = pivot - 1

print(result)
