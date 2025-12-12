# TimeComplexity: O(N) where N = 문자열 길이
# SpaceComplexity: O(1) - 고정 크기 26개 저장
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip()

counts = [0] * 26
for c in input:
    counts[ord(c) - 65] += 1

max_val = max(counts)
print("?" if counts.count(max_val) > 1 else chr(counts.index(max_val) + 65))
