# 초보자를 위한 AWS 뿌시기 2회 - 이미지 리사이즈 서버 만들기 with AWS LAMBDA




## 필수 준비
### AWS 계정
본 워크샵을 진행하려면 AWS 기본 계정을 준비해야 합니다. AWS Lambda, AWS S3, AWS Api Gateway에 접근할 수 있어야 하며, 본 가이드는 한명이 하나의 AWS 계정을 사용한다고 가정합니다. 다른 사람과 계정을 공유하려고하면 특정 리소스에 대해 충돌이 발생하므로 권장하지 않습니다.

본 워크샵의 일환으로 시작하는 모든 리소스는 AWS 계정이 12개월 미만인 경우, 제공하는 AWS 프리티어로 충분히 가능합니다. 프리티어를 넘어서는 경우, 과금일 될 수도 있습니다. 따라서, 새로운 실습용 계정을 만드시길 권장합니다. 자세한 내용은 [AWS 프리 티어 페이지](https://aws.amazon.com/free/)를 참조하십시오.

### 웹 브라우저
웹 애플리케이션 UI를 테스트 할 때 Chrome 또는 Firefox의 최신 버전을 사용하는 것이 좋습니다.

### POSTMAN
[POSTMAN 설치](https://www.getpostman.com/apps)

### SDK
npm, node.js 6버전 이상


## 세미나 진행

1. 람다 소개
2. 람다 예제 설명 및 실습
3. S3 버켓 생성 및 정책 설정
4. 이미지 리사이즈 설명 및 실습
5. API GATEWAY 소개
6. API GATEWAY 예제 설명 및 실습
7. API GATEWAY, 이미지 리사이즈 함수와 연동
8. POSTMAN을 사용하여 테스트 및 결과 확인
9. 마무리



### 참고 문서

1. [람다인액션](http://book.naver.com/bookdb/book_detail.nhn?bid=12990912)

2. [AWS Lambda 가볍게 시작하기](https://hyunseob.github.io/2017/05/27/aws-lambda-easy-start/)

3. [AWS Lambda - API Gateway로 S3 파일 업로드 API 만들기](http://devstory.ibksplatform.com/2017/12/aws-lambda-api-gateway-s3-api-1-api.html)
