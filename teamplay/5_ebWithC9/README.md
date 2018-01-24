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
6. [Elastic BeanStalk](https://ap-northeast-2.console.aws.amazon.com/elasticbeanstalk/home?region=ap-northeast-2#/welcome) 접속
7. 좌측 탭 **구성** 선택
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
