# TimeComplexity: O(N)
# SpaceComplexity: O(N)
from collections import deque
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N = int(input[0])
cards = deque(range(1, N + 1))

while len(cards) > 1:
    print(cards.popleft())
    cards.append(cards.popleft())

print(cards[0])
