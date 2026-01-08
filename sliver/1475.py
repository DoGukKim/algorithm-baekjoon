# TimeComplexity: O(N)
# SpaceComplexity: O(1)
import math
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N = int(input[0])

dict = {f"{i}": 0 for i in range(10)}

for i in range(len(input[0])):
    dict[input[0][i]] += 1

six_nine_sets = math.ceil((dict["6"] + dict["9"]) / 2)
other_max = max(dict[k] for k in dict if k not in ("6", "9"))


if six_nine_sets > other_max:
    print(six_nine_sets)
else:
    print(other_max)
