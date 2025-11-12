# TimeComplexity: O(1)
# SpaceComplexity: O(1)

import sys

# 1. 빠른 입력을 위해 sys.stdin.readline 사용
# 2. .rstrip()으로 불필요한 줄바꿈 문자 제거는 습관처럼 사용

# 단일 정수
n = int(sys.stdin.readline())

# 공백으로 구분된 여러 정수
a, b, c = map(int, sys.stdin.readline().split())

# 리스트로 저장
arr = list(map(int, sys.stdin.readline().split()))

# 2차원 숫자 배열
graph = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]

# 2차원 문자 배열
board = [sys.stdin.readline().rstrip() for _ in range(n)]
