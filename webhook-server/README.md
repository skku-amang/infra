## Webhook?
이 디렉토리는 webhook 서버를 구축하기 위한 디렉토리입니다.
webhook을 사용하여 사설 서버에 코드를 배포합니다.

## 무엇을 해주나요
- `POST /webhook` 요청을 받으면 `git pull`을 실행합니다.
- 변경된 코드를 자동으로 배포합니다.
- => 사설 서버에서 CD가 구축됩니다!

## 준비물
- 방화벽 해제: 5001번 포트
- 포트포워딩: 5001번 포트
- git 설치
- docker 설치

## 서버 시작
```bash
cd webhook-server
npm install
npm start
```
