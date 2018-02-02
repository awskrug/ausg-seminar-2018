### 1_lambda
## S3 버킷 생성, 람다 함수 생성, IAM 역할 생성
### ARN 저장

# S3 버킷 생성
1. [AWS S3 랜딩 페이지 Amazon Web Services](https://s3.console.aws.amazon.com/s3/home?region=ap-northeast-2) 페이지에 접속

2. **버킷 만들기** 클릭
3. 버킷 이름 **<ausg-'YOURNAME'>** 생성 
4. 버킷 이름 **<ausg-'YOURNAME'-resized>** 생성 
5. 다음 버튼을 눌러 버킷 생성
6. 생성된 버킷을 클릭
7. **images/** 폴더 생성

# 람다 함수 생성하기

1. [AWS Lambda 랜딩 페이지 Amazon Web Services](https://ap-northeast-2.console.aws.amazon.com/lambda/home?region=ap-northeast-2) 페이지에 접속합니다.

2. **함수 만들기** 클릭 (주의 서울리전에 생성!!)

3. 이름 **createThumbnailLambda** /런타임 **Node.js 6.10** /역할 **사용자 지정 / 역할 생성** 선택후 새 역할 생성 /역할 이름 **lambda_basic_execution** (디폴트) / 오른쪽 아래 **허용** 버튼 클릭
![create_lambda](./images/create_lambda_function.png)    

4. 왼쪽 사이드 바에서 **S3** 트리거 추가 
![lambda_trigger](./images/lambda_trigger.png)

5. 트리거 구성 탭에서 생성했던 **'ausg-username'** 버킷 선택
6. 이벤트 유형 **객체 생성됨(모두)** 선택
7. 접두사 **images/** 입력
8. 트리거 활성화 **체크박스에 체크**를 한뒤 추가 버튼 클릭
![s3_trigger](./images/s3_trigger.png)

9. createThumbnailLambda 클릭
![fucntion_click](./images/function_click.png)
10. 텍스트 에디터를 실행한 뒤 새로운 폴더 생성
11. index.js 파일 추가 **(버킷 이름 설정 주의)**
12. 터미널(cmd) 실행 
```
npm install async gm util 
```


13. index.js외에 생성된 파일을들 함께 'CreateThumbnail'파일 명으로 압축
14. 람다 화면으로 돌아가서 코드 입력 유형 드롭다운 클릭
![upload_zip](./images/upload_zip.png)
15. .zip 파일 업로드를 선택한뒤 압축파일 업로드
16. 제한시간 10초 설정
![timelimit](./images/timelimit.png)
17. 상단 저장 클릭

# IAM 권한 만들기
1. IAM 콘솔 이동
2. 정책 생성
3. policy.json 복붙
4. 정책이름 CreateThumbnailPolicy
4. 콘솔로 돌아가 역할 생성
5. 람다 클릭
6. 방금 만든 정책인 Create~ 추가/ AWSLambdaBasicExecutioniRole 추가
7. 역할 이름 Labmda_CreateThumbnailRole



