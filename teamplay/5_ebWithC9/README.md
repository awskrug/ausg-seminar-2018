## Chapter 5. Elastic BeanStalk With C9
1. **c9 터미널에서** `pip install awsebcli --upgrade --user` 입력
1. **c9 터미널에서** `eb init --platform node.js --region ap-northeast-2` 입력
1. `.ebextensions` 디렉토리 만들고 `nodecommand.config`  파일 만들고 아래 내용 붙여넣기
```
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
```
1. **c9 터미널에서** `eb create node-express-env`
1. **c9 에디터에서** `c9only/ausg-seminar-2018/teamplay/helloc9/route/index.js`을 열기
1. **c9 에디터에서** `c9only/ausg-seminar-2018/teamplay/helloc9/route/index.js`을 열기
- 다음의 내용을
```javascript
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello C9' });
});

module.exports = router;
```

- 다음과 같이 변경합니다
```javascript
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello Elastic BeanStalk With C9' }); // 'Hello C9'을 -> 'Hello Elastic BeanStalk With C9' 로 변경
});

module.exports = router;
```
1. **c9 터미널에서** `eb deploy`을 
1. [Elastic BeanStalk](https://ap-northeast-2.console.aws.amazon.com/elasticbeanstalk/home?region=ap-northeast-2#/welcome) 접속
1. 좌측 탭 **구성** 선택
1. **용량** 탭 선택
1. **조정 쿨다운** `10`초 입력
1. **조정 트리거** 탭에 **지표**를 **RequestCount**로 선택
1. **통계** 탭에 **평균**을 선택
1. **단위** 탭에 **개수/초**를 선택
1. **기간** 탭에 **1** 최소 입력
1. **위반 기간** 탭에 **1** 최소 입력
1. **상위** 탭에 임계 값 **2000** 개수/초 입력
1. **확장 증분** 탭에 **1** EC2 인스턴수 입력 
1. **하위 임계** 탭에 **500** 개수/초 입력
1. **취소 증분** 탭에 **-1** EC2 인스턴스 입력
1. **c9 터미널에서** `ab -n 500000 -c 200 http://엘라스틱 빈스톡 주소/`

실습이 완료되면 다음모듈인 [Chapter 6. 삭제 가이드](../6_removeGuide/README.md) 으로 이동하십시오
