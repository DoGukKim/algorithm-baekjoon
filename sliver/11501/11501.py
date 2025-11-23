import sys

input = sys.stdin.read().strip().split("\n")

input = [list(map(int, line.split())) for line in input]
test_case = input[0][0]
test_case_index = 1

for i in range(test_case):
    n = input[test_case_index]
    arr = input[test_case_index + 1]
    max_price = 0
    total_profit = 0
    for j in range(len(arr) - 1, -1, -1):
        current_price = arr[j]
        if current_price > max_price:
            max_price = current_price
        else:
            total_profit += max_price - current_price

    print(total_profit)

    test_case_index += 2
