# Summer Lee - Backend Developer Portfolio

Java/Spring 백엔드 개발자 이슬의 포트폴리오 페이지입니다.

🔗 [Visit Portfolio](https://hellosummerdev.github.io)

## 주요 내용
- 대표 작업: Traceboard(AI 에이전트 개발 관리 시스템), 신중앙 관제 시스템 리뉴얼(요구사항 분석·데이터 설계) — 실제 화면 스크린샷 포함
- 경력과 프로젝트: 문제·원인·해결·결과 중심 사례
- 기술, 학력·교육·자격

## 구성
- Pug(템플릿) + SCSS, 외부 프레임워크 없이 자체 스타일
- `src/pug/index.pug`: 본문과 프로젝트 데이터
- `src/scss/_portfolio.scss`: 스타일
- `src/assets/img/projects/`: 프로젝트 스크린샷

## 빌드·배포
```bash
npm install
npm run build      # dist/ 생성
npm run deploy     # gh-pages 브랜치로 배포
```
