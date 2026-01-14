# TimeComplexity: O(N)
# SpaceComplexity: O(N)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

S = input[0]
result = []
stack = []
flag = False


for char in S:
    if char == "<":
        while stack:
            result.append(stack.pop())
        flag = True
        result.append(char)
    elif char == ">":
        flag = False
        result.append(char)
    elif flag:
        result.append(char)
    else:
        if char == " ":
            while stack:
                result.append(stack.pop())
            result.append(char)
        else:
            stack.append(char)

while stack:
    result.append(stack.pop())

print("".join(result))
