## AWS Free Tier 가입하기
* https://aws.amazon.com/free/
* 무료 계정 생성

## C9
* https://aws.amazon.com/ko/cloud9/
* 싱가폴 리전 
* AWS Cloud9 시작하기 버튼 -> 클릭
* Create Environment 버튼 -> 클릭
* Create a new instance for environment (EC2 설정) -> Instance Type은 t2.micro설정
* Cost-saving setting은 4시간 후 설정
* Create! 하면 조금 시간이 걸립니다...
```bash
$ git clone https://github.com/Exubient/AUSG_KakaoBot
```

## AWS Elastic IP (고정아이피 할당)
* [Dashboard](https://aws.amazon.com/ko/)
* 내계정 -> AWS Management Console
* NETWORK & SECURITY탭 -> Elastic Ips -> Allocate new address -> Allocates -> 이미 생성한 인스턴스에 붙임

## AWS Inbound 열기
* [Dashboard](https://aws.amazon.com/ko/)
* 콘솔에 접근
* Security Groups
* Inbound -> Edit  -> Add Rules Button -> custom -> 8000, 8080 열기 -> save

## Django
* Bash에서 상위 디렉토리 이동
```bash
$ cd AUSG_KakaoBot 
```
* Bash에서 하위 디렉토리 이동
```bash
$ cd .. 
```

* requirement 설정
```bash
$ cd AUSG_KakaoBot
$ sudo pip install -r requirements
```

* kakao/kakao/settings.py
```
ALLOWED_HOSTS = ['*']
INSTALLED_APPS = ['alpaca'] #추가
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
@csrf_exempt
def answer(request):
    json_str = ((request.body).decode('utf-8'))
    received_json_data = json.loads(json_str)
    returnButton = received_json_data['content']
    _dict = ast.literal_eval(json_str)
    with open(r'coin.csv', 'r') as f:
        reader = csv.reader(f)
        for row in reader:
            info = row[0].split("-")
            if(returnButton == info[0]):
                global ret
                ret[_dict["user_key"]] = info[0]
                return JsonResponse({
                    'message': {
                        'text': "you have selected " + returnButton
                     },
                    'keyboard': {
                        'type': 'buttons',
                        'buttons': ['BTC', 'ETH', 'XRP']
                    }

                })
                
            if(returnButton == info[1] and ret[_dict["user_key"]] == info[0]):
                return JsonResponse({
                    'message': {
                        'text': row[1]+info[2]
                     },
                    'keyboard':{
                        'type': 'buttons',
                        'buttons' : ['Coinone', 'Bithumb', 'Bitfinex']

                        }
                })
    
```

* kakao/coin.py
```

def fetch_cryptocompare():
	coins = {'BTC','ETH', 'XRP'}
	exchanges = {'Coinone':'KRW', 'Bithumb':'KRW', 'Bitfinex':'USD'}
	_dict = {}
	cur = datetime.datetime.now()
	timestamp = cur.strftime('%Y-%m-%d-%H:%M')
	_dict["Time"] = timestamp

	for market,currency in exchanges.items():
		url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=%s&tsyms=%s&e=%s' % (','.join(coins), currency, market)
		response = requests.get(url)
		data = response.json()

		for coin in coins:
			if response.status_code == requests.codes.ok:
				_dict[market+'-'+coin+'-'+currency] = data[coin][currency] #data['ETH']['KRW']
			else:
				_dict[market+'-'+coin+'-'+currency] = -1


	with open(r'coin.csv', 'w') as f:
		writer = csv.writer(f)
		for key, value in _dict.items():
			writer.writerow([key, value])
	print("Success")

def scheduler():
    sched = BlockingScheduler()
    sched.configure(timezone='Asia/Seoul')
    sched.add_job(fetch_cryptocompare, 'interval', minutes=1)
    sched.start()

scheduler()
```
* runserver kakao/manage.py
```bash
$ python manage.py migrate
$ python manage.py runserver 0:8000
```
## KaKao
* [플러스친구 관리자 센터](https://center-pf.kakao.com/signup)
* 가입 (핸드폰 인증 필요)
* 새 플러스 친구
* 관리 -> 공개설정
* 스마트채팅 -> API형 설정하기 -> http://엘라스틱ip주소:8000 -> Api Test
* 알림받을 전화번호 -> 자기 전화번호 입력 -> 인증 -> 시작!
* 휴대폰으로 플러스친구 검색 -> 테스트 ㅎㅎ 

## 파괴하기
* EC2 파괴
* 카톡 플러스친구 파괴

