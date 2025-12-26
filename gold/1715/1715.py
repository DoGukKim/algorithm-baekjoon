# TimeComplexity: O(N * log N)
# SpaceComplexity: O(N)
import heapq
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = list(map(int, read.read().strip().split()))
N = input[0]
input = input[1:]
heapq.heapify(input)

result = 0
while len(input) > 1:
    A = heapq.heappop(input)
    B = heapq.heappop(input)
    heapq.heappush(input, A + B)
    result += A + B

print(result)
