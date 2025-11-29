import sys

sys.stdin = open("input.txt")
input = sys.stdin.read().strip().split("\n")
print(input)
T = int(input[0])
test_case = input[1:]

for test in test_case:
    H, W, N = map(int, test.split())

    if N % H == 0:
        yy = H
        xx = N // H
    else:
        yy = N % H
        xx = (N // H) + 1

    print(yy * 100 + xx)
