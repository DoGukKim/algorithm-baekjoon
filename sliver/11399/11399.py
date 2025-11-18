import sys

lines = sys.stdin.readlines()
n = int(lines[0])
input = list(map(int, lines[1].split(" ")))

input.sort()
arr = [0] * n
arr[0] = input[0]

for i in range(1, n):
    arr[i] = arr[i - 1] + input[i]

print(sum(arr))
