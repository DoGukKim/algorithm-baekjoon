# TimeComplexity: O(N)
# SpaceComplexity: O(N)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
input = list(map(int, input))
N = input[0]
wines = input[1:]

if N == 1:
    print(wines[0])
    exit()
if N == 2:
    print(wines[0] + wines[1])
    exit()
if N == 3:
    print(max(wines[0] + wines[1], wines[1] + wines[2], wines[0] + wines[2]))
    exit()


dp = [0] * N
dp[0] = wines[0]
dp[1] = wines[0] + wines[1]
dp[2] = max(dp[1], dp[0] + wines[2], wines[1] + wines[2])

for i in range(3, N):
    dp[i] = max(dp[i - 1], dp[i - 2] + wines[i], dp[i - 3] + wines[i - 1] + wines[i])

print(dp[N - 1])
