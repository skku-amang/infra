# 레포지토리 소개
이 레포지토리는 아망 웹사이트 프토젝트를 통합하여 **실제 서비스 운영**을 위한 레포지토리입니다.   
프론트엔드, 백엔드 레포지토리를 서브모듈로 추가하여 관리합니다.   
만약 프론트엔드 또는 백엔드 각 분야에서 개발이 필요하다면 **이 레포지토리가 아니라 해당 레포지토리에서** 작업하시면 됩니다.   


# 레포지토리 구조
```
infra
├── .github                 # Github Actions 설정: CI/CD
├── .vscode                 # Visual Studio Code 설정: Docker 디버그
├── backend                 # 백엔드 서비스
├── frontend                # 프론트엔드 서비스
├── nginx                   # Nginx 설정
├── postgres                # PostgreSQL 설정
├── .gitmodules             # 서브모듈 설정: 프론트엔드, 백엔드 레포지토리 관리
└── docker-compose.yml      # Docker Compose 설정: 위 서비스들을 통합하여 실행
```


# 레포지토리 세팅
## 준비물
- Docker: https://www.docker.com/
- Git: https://git-scm.com/downloads


## 사용법1: 수동 배포
### 1. 레포지토리 클론
이 레포지토리를 클론하고 서브모듈을 업데이트합니다.
```bash
git clone https://github.com/skku-amang/infra
git submodule update --init --recursive
```

### 2. 서비스 실행
```bash
cd infra
docker-compose up -d --build
```

### 3. 동작 확인
```bash
docker-compose ps
```


## 사용법: 자동 배포(Github Actions with self-hosted runner)
### 1. Runner 등록
[Github Settings/Actions의 Runner](https://github.com/skku-amang/infra/settings/actions/runners)으로 이동합니다.   
`New runner` 버튼을 눌러 runner를 등록합니다.
### 2. Runner 가동
등록된 runner에서 `run` 스크립트를 실행합니다.   
(아마 실제 runner에서 스크립트 실행을 허용하려면 추가 설정이 필요할 것입니다.)
### 3. Push 대기
이 레포지토리의 `main` 브랜치로 push하면 Github Actions가 실행됩니다.