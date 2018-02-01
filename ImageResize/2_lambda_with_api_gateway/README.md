## 2_api_gateway


### 람다 함수 생성

1. 이름 FileUpload
2. 런타임 노드 6.10
3. 기존 역할 선택 -> 이따 만듬
4. 코드 복붙
5. npm install parse-multipart bluebird
6. 코드 입력유형 .zip 업로드

### API GATEWAY

1. 콘솔로 이동
2. 새 API 생성
3. API 이름 FileUploader
4. 리소스 생성 클릭
5. 리소스 이름 Upload
6. 왼쪽 설정탭 클릭
7. 이진 미디어 형식에 multipart/form-data 추가


### s3 권한 설정
1. ausg-username 버킷 이동
2. 권한 탭 클릭
3. 버킷정책 클릭
4. 정책 복붙
5. CORS 구성 클릭
6. 복붙



### API GATEWAY 배포
1. Upload 리소스에 POST 메서드 추가
2. 통합 유형 - Lambda함수
3. Lambda 리전 ap-northeast-2
4. Lambda 함수 FileUpload (자동완성) 후 저장 클릭
5. 통합 요청 클릭
6. 하단 본문 매핑 템플릿 선택
7. multipart/form-data 추가 후 (클릭)
8. '템플릿 생성'에서 메서드 요청 패스스루 클릭 뒤 저장
9. 작업탭에서 api 배포 선택
10. 새스테이지 / prod /production 입력 뒤 확인
11. 엔드포인트 URL 복사
12. POST맨 실행
13. 메서드 - POST 
14. URL - 엔드포인트
15. Headers - Content-Type: multipart/form-data
16. Body - file
