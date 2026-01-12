# TimeComplexity: O(MN)
# SpaceComplexity: O(N)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N, M = map(int, input[0].split())
moves = input[1:]

buckets = [0] * N

for cur in range(M):
    i, j, k = map(int, moves[cur].split())

    for t in range(i - 1, j):
        buckets[t] = k

print(" ".join(map(str, buckets)))
