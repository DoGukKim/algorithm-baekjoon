# TimeComplexity: O(N log K) where K is the maximum price
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N = int(input[0])
prices = list(map(int, input[1].split()))
M = int(input[2])

left = 0
right = max(prices)
result = 0

while left <= right:
    pivot = (left + right) // 2
    total = 0
    for price in prices:
        total += min(price, pivot)
    if total <= M:
        result = pivot
        left = pivot + 1
    else:
        right = pivot - 1
print(result)
