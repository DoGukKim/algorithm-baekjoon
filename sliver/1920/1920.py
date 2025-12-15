# TimeComplexity: O(N log N + M log N)
# SpaceComplexity: O(M)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N = int(input[0])
A = list(map(int, input[1].split()))
M = int(input[2])
B = list(map(int, input[3].split()))

A.sort()


def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    pivot = len(arr) // 2
    while left <= right:
        if arr[pivot] == target:
            return 1
        elif arr[pivot] < target:
            left = pivot + 1
        else:
            right = pivot - 1
        pivot = (left + right) // 2

    return 0


result = []
for b in B:
    result.append(binary_search(A, b))

print("\n".join(map(str, result)))
