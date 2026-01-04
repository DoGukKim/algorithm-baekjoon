# TimeComplexity: O(1)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
lines = read.read().strip().split("\n")

result = ""

for y in range(15):
    for x in range(5):
        if y < len(lines[x]):
            result += lines[x][y]

print(result)
