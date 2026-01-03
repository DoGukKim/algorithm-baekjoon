# TimeComplexity: O(M * N)
# SpaceComplexity: O(N)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = [list(map(int, line.split())) for line in read.read().strip().split("\n")]
N, M = input[0]

input = input[1:]
buckets = list(range(N + 1))

for cur in input:
    i, j = cur
    while i < j:
        buckets[i], buckets[j] = buckets[j], buckets[i]
        i += 1
        j -= 1

print(" ".join(list(map(str, buckets[1:]))))
