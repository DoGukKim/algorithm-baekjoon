import sys

input = list(map(int, sys.stdin.readline().split()))
X, Y, W, S = input

# 직선 이동
cost1 = (X + Y) * W
minVal = min(X, Y)
maxVal = max(X, Y)
diff = abs(X - Y)

# 대각선 + 직선 이동
cost2 = minVal * S + diff * W

# 대각선 이동
if diff % 2 == 0:
    cost3 = maxVal * S
else:
    cost3 = (maxVal - 1) * S + W

print(min(cost1, cost2, cost3))
