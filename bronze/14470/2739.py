# TimeComplexity: O(1)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

n = int(input[0])

for i in range(1, 10):
    print(f"{n} * {i} = {n * i}")
