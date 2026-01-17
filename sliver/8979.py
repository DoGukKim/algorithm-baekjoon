# TimeComplexity: O(N^2)
# SpaceComplexity: O(N)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N, K = map(int, input[0].split())
lines = [list(map(int, line.split())) for line in input[1:]]
countries = [[] for _ in range(N)]


for i in range(N):
    country_number, gold, silver, bronze = lines[i]
    count = 0
    for j in range(N):
        if i == j:
            continue
        other_country_number, other_gold, other_silver, other_bronze = lines[j]
        if gold < other_gold:
            count += 1
            continue
        if gold == other_gold:
            if silver < other_silver:
                count += 1
                continue
            if silver == other_silver:
                if bronze < other_bronze:
                    count += 1
                    continue
            if silver > other_silver:
                continue
        if gold > other_gold:
            continue
    countries[country_number - 1] = count + 1

print(countries[K - 1])
