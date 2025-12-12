# TimeComplexity: O(1)
# O(1)인 이유:
# - 이 문제의 상태는 두 자리 수(00~99)로만 유지되며 가능한 값이 총 100개
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")


start = int(input[0])
current = start
count = 0


while True:
    a = current // 10
    b = current % 10
    s = (a + b) % 10
    current = b * 10 + s
    count += 1

    if current == start:
        break

print(count)
