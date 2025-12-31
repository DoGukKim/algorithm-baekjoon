# TimeComplexity: O(N * M)
# SpaceComplexity: O(N + M)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = [list(map(int, line.split())) for line in read.read().strip().split("\n")]
