# TimeComplexity: O(N)
# SpaceComplexity: O(N)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
n = int(input[0])

result = []
commands = {
    "push": lambda x: result.append(x),
    "pop": lambda: result.pop() if len(result) > 0 else -1,
    "size": lambda: len(result),
    "empty": lambda: 1 if len(result) == 0 else 0,
    "top": lambda: result[-1] if len(result) > 0 else -1,
}

for i in range(1, n + 1):
    command = input[i].split()
    if command[0] == "push":
        commands[command[0]](command[1])
    else:
        print(commands[command[0]]())
