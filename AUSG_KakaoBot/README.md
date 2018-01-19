# Python으로 비트코인 챗봇 만들기
###### 초보자를 위한 AWS 뿌시기 세미나 1일차 강의 자료

## AWS Free Tier 가입하기
![스크린샷, 2018-01-10 20-23-00](https://i.imgur.com/MTm3XV4.png)

**Ctrl 누르고 왼쪽클릭!**
**https://aws.amazon.com/free/**

* 무료 계정 생성
    - 이때, 해외결제가 되는 신용카드 혹은 체크카드가 있어야 합니다.
    - 회원가입을 하면 카드 확인용으로 $1가 빠져나갑니다. (나중에 돈은 다시 돌려줍니다.)
    - 모든 가입 정보들은 **영문** 으로 작성되어야 합니다.
## C9
![c9](https://i.imgur.com/rzZMKYN.png)

AWS Cloud9은 인터넷만 연결되어 있다면 웹 브라우저상으로 코드 작성 및 실행, 디버깅을 할 수 있는 클라우드 기반의 통합 개발 환경(IDE)를 의미합니다.
**Ctrl + 왼쪽마우스 클릭!**
**https://aws.amazon.com/ko/cloud9/**
<br>

* 싱가폴 리전 선택
![스크린샷, 2018-01-10 20-35-15](https://i.imgur.com/C4v5zVW.png)

* AWS Cloud9 시작하기 버튼 --> 클릭
![스크린샷, 2018-01-10 20-38-12](https://i.imgur.com/jDNs9SR.png)
* 지역은 싱가폴로 선택을 하도록 하겠습니다.
![스크린샷, 2018-01-10 20-42-17](https://i.imgur.com/G1HBFzt.png)
* Create Environment 버튼 --> 클릭
* Create a new instance for environment (EC2 설정) --> Instance Type은 t2.micro설정
![스크린샷, 2018-01-10 20-49-26](https://i.imgur.com/5ivNdsk.png)
* Cost-saving setting은 4시간 후 설정
* Create! 하면 조금 시간이 걸립니다...
    * 이때, 자동으로 EC2가 생성됩니다.
```bash
$ git clone https://github.com/Exubient/AUSG_KakaoBot
```

## AWS Elastic IP (고정아이피 할당)
* [Ctrl + 마우스 왼쪽 버튼 클릭!](https://aws.amazon.com/ko/)
* 내계정 -> AWS Management Console-> EC2
* NETWORK & SECURITY탭 -> Elastic Ips -> Allocate new address -> Allocates -> 작업-> 주소연결

## AWS Inbound 열기
* [Ctrl + 마우스 왼쪽 버튼 클릭!](https://aws.amazon.com/ko/)
* 콘솔에 접근  -> EC2 -> NETWORK & SECURITY탭
* Security Groups
* Inbound -> Edit  -> Add Rules Button -> custom -> 8000, 8080 열기 -> save
![inbound](https://i.imgur.com/MLrtqy2.png)
![스크린샷, 2018-01-10 21-30-51](https://i.imgur.com/1T7SqP1.png)
### 참고 명령어

* Bash에서 상위 디렉토리 이동
    ```bash
    $ cd AUSG_KakaoBot
    ```
* Bash에서 하위 디렉토리 이동
    ```bash
    $ cd ..
    ```

## Django
* requirement 설정
    ```bash
    $ cd AUSG_KakaoBot
    $ sudo pip install -r requirements
    ```

* kakao/kakao/settings.py
    ```
    ALLOWED_HOSTS = ['*']
    INSTALLED_APPS = ['alpaca'] # 추가
    ```

* kakao/urls.py
    ```
    from alpaca import views

    url(r'^keyboard/', views.keyboard),
    url(r'^message', views.answer),
    ```

* kakao/alpaca/views.py
* 카톡 플러스친구 API TEST Function
    ```
    def keyboard(request):
        return JsonResponse({
            'type' : 'buttons',
            'buttons' : ['Coinone', 'Bithumb', 'Bitfinex']
        })
    ```

* 응답을 위한 Main Function
    ```
    ret={}
    @csrf_exempt #보안 Middleware
    def answer(request):
        pass

        # 첫번째로 보일 키보드
        # 두번쨰로 보일 키보드
    ```

* AUSG_KakaoBot/coin.py
    ```
    def fetch_cryptocompare():
    	pass

    	# 가격정보를 원하는 코인 종류/ Set
    	# 정보를 받아올 시장 / Dictionary
    	# 날짜를 저장
    	# _dict에 저장된 정보를 coin.csv파일에 저장.
    	print("Success")

    def scheduler():
    	pass

    	# fetch_cryptocompare() 매 분마다 돌리기

    scheduler()
    ```
* runserver kakao/manage.py
    ```bash
    $ python manage.py migrate
    $ python coin.py # 터미널창 추가해서 돌려놓기
    $ python manage.py runserver 0:8000
    ```

#### 만약 SyntaxError: Non-ASCII character '\xec' in file 에러가 난다면?
파이썬 코드 맨 위에 아래 코드를 기입합니다.
```
# -*- coding: utf-8 -*-
```

## KaKao
* [플러스친구 관리자 센터](https://center-pf.kakao.com/signup)
* 가입 (핸드폰 인증 필요)
* 새 플러스 친구
* 관리 -> 공개설정
* 스마트채팅 -> API형 설정하기 -> http://엘라스틱 탄력적ip주소:8000 -> Api Test
![스크린샷, 2018-01-10 21-23-46](https://i.imgur.com/2X0xgQ1.png)
* 알림받을 전화번호 -> 자기 전화번호 입력 -> 인증 -> 시작!

* 휴대폰으로 플러스친구 검색 -> 테스트시작


## 파괴하기
* EC2 파괴
![스크린샷, 2018-01-10 21-25-57](https://i.imgur.com/mzSfeuq.png)
    * C9 코드를 생성하면 EC2가 자동으로 생깁니다.
* 카톡 플러스친구 파괴

# 추가 설명

## EC2는 뭔가요?
![ec2](https://i.imgur.com/C0NbEDT.png)

EC2는 Elatic Compute Cloud의 약자로, AWS가 제공하는 서비스 중 대표 상품입니다. EC2를 생성해 실제로 보고 만질 수 없는 `가상 서버`를 만들 수 있습니다.

![스크린샷, 2018-01-10 21-05-58](https://i.imgur.com/jPvCHqG.png)
여기에 윈도우 운영체제도 설치할 수 있고, 리눅스 기반의 서버도 설치할 수 있습니다.

## Elastic IP는 뭔가요?
EC2를 오랫동안 껐다가 다시켜거나, 혹은 재부팅하는 경우 IP가 종종 변경되는 경우가 있습니다. AWS 내에서 IP를 반납하기 때문인데요, 이를 고정 IP로 바꿔주는 것이 Elastic IP입니다.

좀 더 자세한 설명은 [여기서 확인하실 수 있습니다.](http://pyrasis.com/book/TheArtOfAmazonWebServices/Chapter06)

## API는 뭔가요?
![스크린샷, 2018-01-10 21-13-19](https://i.imgur.com/ncuIEct.png)
쉽게 말해서 네이버를 예로 들도록 하겠습니다. 네이버는 20년 동안 구축해왔던 데이터베이스를 사용자들이 접근할 수 있도록 해줍니다. 영화도 검색할 수 있고, 네이버 지도 역시 사용할 수 있으  최근에는 파파고 번역까지 사용할 수 있네요!

사용자들은 이 API를 이용해서 상품을 개발할 수도 있고, 자신의 편의를 위한 응용 프로그램을 만들 수도 있습니다.

## 어떻게 활용해볼 수 있을까요?
**Bithumb API**
![스크린샷, 2018-01-10 21-07-51](https://i.imgur.com/N5HrJur.png)
[Bithumb API 주소](https://www.bithumb.com/u1/US127)

**Coinone API**
![스크린샷, 2018-01-10 21-08-31](https://i.imgur.com/hXMfI6x.png)
[Coinone API 주소](https://coinone.co.kr/developer/)

**KORBIT API**
![스크린샷, 2018-01-10 21-10-08](https://i.imgur.com/hwYMxTJ.png)
[KORBIT API 주소](https://apidocs.korbit.co.kr/ko/)

이번 강의에서는 카카오챗봇 API를 이용해 EC2를 사용해보는 것에 강의 초점이 맞춰져있습니다. 이외에도 여러 거래소에서 시세조회, 지정가 주문, 취소 주문, 사용자 정보 등 자기 거래소에서 제공할 수 있는 정보들을 API를 통해서 제공하고 있습니다.
