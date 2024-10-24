#!/bin/bash

# 프로젝트 디렉토리로 이동
cd ../

# 최신 코드 가져오기
git pull origin main --recurse-submodules

# Docker Compose를 사용하여 이미지 빌드 및 컨테이너 재시작
docker-compose down
docker-compose up -d --build

echo "이미지 빌드 및 컨테이너 재시작 완료"