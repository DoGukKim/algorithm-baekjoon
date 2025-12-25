# TimeComplexity: O(N log N)
# SpaceComplexity: O(N)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = list(map(int, read.read().strip().split()))

N = input[0]
input = input[1:]


class AbsHeap:
    def __init__(self):
        self.heap = []

    def heapify_up(self, index):
        while index > 0:
            parent_index = (index - 1) // 2
            current = self.heap[index]
            parent = self.heap[parent_index]
            if (abs(current), current) < (abs(parent), parent):
                self.heap[index], self.heap[parent_index] = parent, current
                index = parent_index
            else:
                break

    def insert(self, value):
        self.heap.append(value)
        self.heapify_up(len(self.heap) - 1)

    def heapify_down(self, index):
        while True:
            left = 2 * index + 1
            right = 2 * index + 2
            smallest = index
            if left < len(self.heap) and (abs(self.heap[left]), self.heap[left]) < (
                abs(self.heap[smallest]),
                self.heap[smallest],
            ):
                smallest = left
            if right < len(self.heap) and (abs(self.heap[right]), self.heap[right]) < (
                abs(self.heap[smallest]),
                self.heap[smallest],
            ):
                smallest = right
            if smallest != index:
                self.heap[index], self.heap[smallest] = (
                    self.heap[smallest],
                    self.heap[index],
                )
                index = smallest
            else:
                break

    def extract_min(self):
        if len(self.heap) == 0:
            return 0
        if len(self.heap) == 1:
            return self.heap.pop()
        min_value = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        self.heapify_down(0)
        return min_value


abs_heap = AbsHeap()
for i in range(N):
    if input[i] == 0:
        print(abs_heap.extract_min())
    else:
        abs_heap.insert(input[i])
