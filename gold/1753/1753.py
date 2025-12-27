# TimeComplexity: O(E * log(V))
# SpaceComplexity: O(V + E)
import heapq
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
input = [list(map(int, line.split())) for line in input]
V, E = input[0]
K = input[1][0]
edges = input[2:]

adjacencyList = [[] for _ in range(V + 1)]
for edge in edges:
    u, v, w = edge
    adjacencyList[u].append((w, v))


distance = [float("inf")] * (V + 1)
distance[K] = 0
heap = []
heapq.heappush(heap, (0, K))

while heap:
    dist, vertex = heapq.heappop(heap)
    if dist > distance[vertex]:
        continue

    for next_dist, next_vertex in adjacencyList[vertex]:
        new_dist = dist + next_dist
        if new_dist < distance[next_vertex]:
            distance[next_vertex] = new_dist
            heapq.heappush(heap, (new_dist, next_vertex))

for i in range(1, V + 1):
    if distance[i] == float("inf"):
        print("INF")
    else:
        print(distance[i])
