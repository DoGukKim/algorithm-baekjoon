# TimeComplexity: O(E * log(V))
# SpaceComplexity: O(V + E)
import heapq
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N = int(input[0])
M = int(input[1])
A, B = map(int, input[-1].split())
edges = [list(map(int, line.split())) for line in input[2:-1]]

graph = [[] for _ in range(N + 1)]
dist = [float("inf")] * (N + 1)

for edge in edges:
    src, dest, cost = edge
    graph[src].append((cost, dest))


dist[A] = 0
heap = []
heapq.heappush(heap, (0, A))

while heap:
    cur_cost, cur_vertex = heapq.heappop(heap)

    if cur_cost > dist[cur_vertex]:
        continue

    for next in graph[cur_vertex]:
        next_cost, next_vertex = next
        new_cost = dist[cur_vertex] + next_cost
        if new_cost < dist[next_vertex]:
            dist[next_vertex] = new_cost
            heapq.heappush(heap, (new_cost, next_vertex))

print(dist[B])
