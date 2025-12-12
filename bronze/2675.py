# TimeComplexity: O(N)
# SpaceComplexity: O(N)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

test_case = int(input[0])
for i in range(1, test_case + 1):
    repeat_num, string = input[i].split()
    repeat_num = int(repeat_num)
    result = ""
    for j in range(0, len(string)):
        result += string[j] * repeat_num
    print(result)
