# TimeComplexity: O(N^2)
# SpaceComplexity: O(N)
from collections import deque
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N = int(input[0])
q = deque(enumerate(map(int, input[1].split()), start=1))
result = []

while q:
    index, paper = q.popleft()
    result.append(str(index))

    if not q:
        break

    if paper > 0:
        q.rotate(-(paper - 1))
    else:
        q.rotate(-paper)

print(" ".join(result))
