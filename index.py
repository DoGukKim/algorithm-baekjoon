import sys

sys.stdin = open("input.txt")

first_line = list(map(int, sys.stdin.readline().split()))
lines = [list(map(int, line.split())) for line in sys.stdin if line.strip()]

print(first_line)
print(lines)
