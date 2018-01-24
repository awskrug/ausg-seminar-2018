## 아키텍쳐 개요
이 모듈에서는 c9을 생성해봅니다. c9을 기본적으로 생성하면 private한 ec2 인스턴스를 1개 띄우고 그 인스턴스에 접근할 수 있습니다. 그 후에 web server인 `nginx`를 설치하고 reverse proxy를 사용하여 80번 포트(http)로 온 요청을 내부적으로 8080포트(express app)로 전달합니다. 


## Chapter 1. Cloud 9 시작하기
1. [AWS Cloud9 랜딩 페이지 Amazon Web Services](https://aws.amazon.com/ko/cloud9/) 페이지에 접속합니다.
2. **AWS Cloud9 시작하기** 선택
3. 주황색 **Create environment** 선택
4. **Name** 칸에 `c9only` 를 적고 우측 하단 **Next step** 선택
5. **Environment type** 에 **Create a new instance for environment(EC2)** 선택
6. **Instance Type** 에 **t2.micro (1 GiB RAM + 1 vCPU)** 선택
7. **중요!)**  **Cost-saving setting** 에 **After four hours** 선택
(4시간 뒤에 자동으로 c9이 생성한 EC2 instance를 종료함으로써 비용을 절약합니다. 만약 **Never** 옵션을 선택하면 EC2가 24시간 동작하므로, 프리티어가 종료되고 credit이 없다면 과금될 수 있습니다)
8. 우측 하단에 **Next Step** 선택
9. 기본 설정을 유지한채로, **Create environment** 선택하고, 인스턴스가 만들어 질 때 까지 3분정도 기다립니다.
10. **c9 Bash 터미널**에서 `grep . /etc/*-release` 입력해서 **Amazon Linux OS** 운영체제 확인 -> 운영체제 확인 명령어
11. **c9 Bash 터미널**에서 `git clone https://github.com/awskrug/ausg-seminar-2018.git` 을 입력 -> 소스코드 가져옴
12. **c9 Bash 터미널**에서 `cd ausg-seminar-2018/teamplay/helloc9` 을 입력
13. **c9 Bash 터미널**에서 `npm install` 입력 -> 의존성을 가지는 package 설치
13. **c9 Bash 터미널**에서 `npm start` 입력 -> 서버 run
14. [AWS Console 싱가포르](https://ap-southeast-1.console.aws.amazon.com/console/home?region=ap-southeast-1) 에서 **EC2** 선택 
15. 좌측 **NETWORKS & SECURITY** 탭에서, **보안 그룹** 선택
16. 그룹 이름이 **aws-cloud9-...** 와 비슷한 그룹 선택
17. **작업** -> **인바운드 규칙 편집** 선택
18. **규칙 추가** 선택 -> 포트 범위 `8080` 입력 -> 소스 **위치 무관** 선택 -> **저장** 버튼 선택
19. **규칙 추가** 선택 -> 유형 **http** 선택 -> **저장** 버튼 선택
20. 좌측 **인스턴스** 탭에서 **인스턴스** 선택
21. C9 관련 인스턴스를 클릭하고, 우측 하단 **퍼블릭 DNS** 복사.
22. `http://퍼블릭 DNS 주소:8080` 에접속하면, hello c9을 볼 수 있음
23. **nginx 설치 방법**: **c9 터미널**에서 `sudo yum install nginx` 입력 -> 웹서버 설치
24. **c9 Bash 터미널**에서 `sudo vi /etc/nginx/nginx.conf` 입력 -> 웹서버 설정 변경
25. 아래로 스크롤해보면 
- 다음의 내용을
```
.......blah blah blah

server {
    listen 80;
    server_name your-domain-name.com;
    location / {
    }
}
```

- 다음과 같이 변경
```
.......blah blah blah

server {
    listen 80;
    server_name your-domain-name.com;
    location / { # 루트 디렉토리 접근하면 프록시
        proxy_set_header   X-Real-IP $remote_addr; # 추가할 내용
        proxy_set_header   Host      $http_host; # 추가할 내용
        proxy_pass         http://127.0.0.1:8080; # 추가할 내용
    }
}
```
26. **c9 Bash 터미널**에서 `sudo service nginx restart` 입력 -> 웹서버 nginx 서비스 재시작
27. **c9 Bash 터미널**에서 `npm start` 입력 -> 서버 시작
28. **c9 Bash 터미널**에서 `http://퍼블릭 DNS 주소` 에 접속하더라도, 8080 port번호 없이 `nginx`가 프록시 해줌

실습이 완료되면 다음모듈인 [Chapter 2. Cloud9 & EC2 접속](../2_c9-ec2) 으로 이동하십시오
