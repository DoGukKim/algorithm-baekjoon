# TimeComplexity: O(1)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split()

a, b = map(int, input)


def reverse_number(number):
    result = ""
    while number > 0:
        result += str(number % 10)
        number //= 10
    return int(result)


a = reverse_number(a)
b = reverse_number(b)

print(max(a, b))


# 재귀 풀이
# def dfs(number):
#     if number <= 0:
#         return ""
#     return str(number % 10) + dfs(number // 10)


# a = dfs(a)
# b = dfs(b)

# print(max(a, b))
