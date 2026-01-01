# TimeComplexity: O(N)
# SpaceComplexity: O(1)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")

a, b, c = input[0].split()

king_pos = a
stone_pos = b
N = int(c)
moves = input[1:]


def to_xy(pos):
    x = ord(pos[0]) - ord("A")
    y = int(pos[1]) - 1
    return x, y


def to_str(x, y):
    col = chr(x + ord("A"))
    row = str(y + 1)
    return col + row


k_x, k_y = to_xy(king_pos)
s_x, s_y = to_xy(stone_pos)

move_map = {
    "R": (1, 0),
    "L": (-1, 0),
    "B": (0, -1),
    "T": (0, 1),
    "RT": (1, 1),
    "LT": (-1, 1),
    "RB": (1, -1),
    "LB": (-1, -1),
}

for i in range(N):
    dx, dy = move_map[moves[i]]

    nk_x = k_x + dx
    nk_y = k_y + dy

    if not (0 <= nk_x < 8 and 0 <= nk_y < 8):
        continue

    if nk_x == s_x and nk_y == s_y:
        ns_x = s_x + dx
        ns_y = s_y + dy

        if not (0 <= ns_x < 8 and 0 <= ns_y < 8):
            continue

        s_x, s_y = ns_x, ns_y

    k_x, k_y = nk_x, nk_y

print(to_str(k_x, k_y))
print(to_str(s_x, s_y))
