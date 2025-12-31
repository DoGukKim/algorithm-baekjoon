# TimeComplexity: O(N * M)
# SpaceComplexity: O(N + M)
import sys
import math

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = [list(map(int, line.split())) for line in read.read().strip().split("\n")]

n, m = input[0]
edges = input[1:]
dist = [math.inf] * (n + 1)


def bf(start):
    dist[start] = 0

    for i in range(n):
        for j in range(m):
            cur, next, cost = edges[j]
            new_cost = dist[cur] + cost
            if dist[cur] != math.inf and dist[next] > new_cost:
                dist[next] = new_cost
                if i == n - 1:
                    return True
    return False


negative_cycle = bf(1)
if negative_cycle:
    print("-1")
else:
    print("\n".join(str(x) if x != math.inf else "-1" for x in dist[2:]))
