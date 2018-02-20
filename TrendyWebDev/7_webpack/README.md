# Chapter 7. Webpack 소개 및 배포 자동화
### 학습목표
- Webpack의 역할에 대해 이해한다
- IAM 역할, 정책, 사용자, 그룹에 대해 이해한다
- CLI를 사용해 S3 Bucket에 만들어진 HTML, CSS, JS 파일을 배포해본다

# 1. 컴포넌트가 여러개??
  - 자바스크립트(브라우저)는 원래 모듈을 지원하지 않음
  - require 소개
  - import / export (ES6) 소개
  - npm 소개
  - Webpack이란? (개념)
  - 본격적으로 Vue Project 시작해보기 (Vue CLI로 Scaffolding)

# 2. Webpack Plugin으로 S3에 자동 업로드 해보기
  1. S3 Full Access 권한을 가진 IAM 계정 만들기
  2. Access Key, Secret Key 가져오기
  3. 그대로 넣어서 쉬운 배포 체험해보기