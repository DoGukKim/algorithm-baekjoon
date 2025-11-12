# TimeComplexity: O(4^N * √10^N)
# SpaceComplexity: O(N)

import sys

input = int(sys.stdin.readline())
sys.setrecursionlimit(10**6)


def checkPrimeNumber(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True


numbers = [1, 3, 7, 9]
primeNumber = [2, 3, 5, 7]
result = []


def dfs(n, level):
    if level == input:
        print(n)
        return
    for i in range(len(numbers)):
        num = n * 10 + numbers[i]
        if checkPrimeNumber(num):
            dfs(num, level + 1)


for i in range(len(primeNumber)):
    dfs(primeNumber[i], 1)
