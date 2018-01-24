## Chapter 5. Elastic BeanStalk With C9
1. **c9 터미널에서** `pip install awsebcli --upgrade --user` 입력
2. **c9 터미널에서** `eb init --platform node.js --region ap-northeast-2` 입력
3. `.ebextensions` 디렉토리 만들고 `nodecommand.config`  파일 만들고 아래 내용 붙여넣기
```
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
```
4. **c9 터미널에서** `eb create node-express-env`
5. **c9 터미널에서** `eb deploy` -> s3에 올리고 -> deploy
6. [Elastic BeanStalk](https://ap-northeast-2.console.aws.amazon.com/elasticbeanstalk/home?region=ap-northeast-2#/welcome) 접속 -> URL 들어가보기
7. **구성** -> **용량** -> **조정 트리거** -> **CPU Utilization** -> 단위 % -> 기간, 위반기간 1, 상위 임계값 50%, 하위 임계값 10%
8. **c9 터미널에서** `ab -n 500000 -c 200 http://엘라스틱 빈스톡 주소/`

실습이 완료되면 다음모듈인 [Chapter 6. 삭제 가이드](../6_removeGuide/README.md) 으로 이동하십시오
