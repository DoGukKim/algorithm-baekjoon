# TimeComplexity: O(RNM)
# SpaceComplexity: O(NM)
import sys

read = sys.stdin if sys.platform == "linux" else open("input.txt")
input = read.read().strip().split("\n")
N, M, R = map(int, input[0].split())
mtx = [list(line.split()) for line in input[1:]]

count_layers = min(N, M) // 2

for _ in range(R):
    for layer in range(count_layers):
        top, left = layer, layer
        bottom, right = N - 1 - layer, M - 1 - layer

        top_left_temp = mtx[top][left]

        for i in range(left, right):
            mtx[top][i] = mtx[top][i + 1]

        for i in range(top, bottom):
            mtx[i][right] = mtx[i + 1][right]

        for i in range(right, left, -1):
            mtx[bottom][i] = mtx[bottom][i - 1]

        for i in range(bottom, top, -1):
            mtx[i][left] = mtx[i - 1][left]

        mtx[top + 1][left] = top_left_temp

for row in mtx:
    print(*row)

# ---------- 1차원으로 풀어서 풀기 -----------
# for layer in range(count_layers):
#     q = deque()

#     # 껍질의 네 변의 경계 정의
#     top, left = layer, layer
#     bottom, right = N - 1 - layer, M - 1 - layer

#     # --- [Step 1] 1차원으로 펼치기 (Extract) ---
#     # 순서: 상 -> 우 -> 하 -> 좌

#     # 1. 상단 (왼쪽 -> 오른쪽)
#     # (top, left) 부터 (top, right-1) 까지
#     q.extend(mtx[top][left:right])

#     # 2. 우측 (위 -> 아래)
#     # (top, right) 부터 (bottom-1, right) 까지
#     for i in range(top, bottom):
#         q.append(mtx[i][right])

#     # 3. 하단 (오른쪽 -> 왼쪽)
#     # (bottom, right) 부터 (bottom, left+1) 까지
#     # 슬라이싱[::-1]을 이용해 역순으로 넣음
#     q.extend(mtx[bottom][left + 1 : right + 1][::-1])

#     # 4. 좌측 (아래 -> 위)
#     # (bottom, left) 부터 (top+1, left) 까지
#     for i in range(bottom, top, -1):
#         q.append(mtx[i][left])

#     # --- [Step 2] 회전하기 (Rotate) ---
#     # 반시계 방향이므로 음수(-R) 사용
#     # 핵심: R이 아무리 커도 내부적으로 나머지 연산 등을 통해 효율적으로 처리됨
#     q.rotate(-R)

#     # --- [Step 3] 다시 채워넣기 (Insert) ---
#     # 뽑아낼 때와 똑같은 순서로 값을 넣어줌

#     # 1. 상단
#     for i in range(left, right):
#         mtx[top][i] = q.popleft()

#     # 2. 우측
#     for i in range(top, bottom):
#         mtx[i][right] = q.popleft()

#     # 3. 하단
#     for i in range(right, left, -1):
#         mtx[bottom][i] = q.popleft()

#     # 4. 좌측
#     for i in range(bottom, top, -1):
#         mtx[i][left] = q.popleft()

# # 결과 출력
# for row in mtx:
#     print(*row)
