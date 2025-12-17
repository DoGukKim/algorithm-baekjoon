# TimeComplexity: O(N log N + N log X)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N, C = map(int, input[0].split())
houses = list(map(int, input[1:]))

houses.sort()

left = 1
right = houses[-1] - houses[0]
result = 0
while left <= right:
    pivot = (left + right) // 2
    count = 1
    current = houses[0]
    for i in range(1, N):
        if houses[i] - current >= pivot:
            current = houses[i]
            count += 1
    if count >= C:
        result = pivot
        left = pivot + 1
    else:
        right = pivot - 1
print(result)
