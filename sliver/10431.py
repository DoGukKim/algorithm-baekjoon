# TimeComplexity: O(P)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

P = int(input[0])
for i in range(1, P + 1):
    case = list(map(int, input[i].split()))
    t = case[0]
    children = case[1:]
    count = 0

    for j in range(20):
        for k in range(j):
            if children[k] > children[j]:
                count += 1

    print(f"{t} {count}")
