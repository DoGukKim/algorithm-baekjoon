# TimeComplexity: O(N * K)
# SpaceComplexity: O(N)
from collections import deque
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split()
n, k = map(int, input)


result = deque()
nums = deque([i for i in range(1, n + 1)])

while len(nums) > 0:
    nums.rotate(-(k - 1))
    result.append(nums.popleft())

print("<" + ", ".join(map(str, result)) + ">")
