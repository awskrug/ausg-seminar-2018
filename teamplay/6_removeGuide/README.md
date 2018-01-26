## Chapter 6. 삭제 가이드
**이 가이드는 중요합니다!**
**프리티어**를 사용하고 계시더라도, 1달 내내 오늘 실습한 인스턴스가 모두 사용되고 있으면 **과금**이 될 수 있으니 꼭 삭제 가이드에 따라서 자원을 삭제해 주시기 바랍니다.

## 1. Cloud 9 삭제
![remove-c9-1](./../images/remove-c9-1.png)
* 싱가포르 리전 선택
* `cloud9` 입력 후 **cloud9** 선택

![remove-c9-2](./../images/remove-c9-2.png)
* `c9only` 인스턴스 선택 후
* `Delete` 입력 후 **Delete** 버튼 선택
* `c9connect` 인스턴스 선택 후
* `Delete` 입력 후 **Delete** 버튼 선택

## 2. EC2 인스턴스 삭제
![remove-ec2-1](./../images/remove-ec2-1.png)
* 서울 리전 선택
* `EC2` 입력 후 **EC2** 선택

![remove-ec2-2](./../images/remove-ec2-2.png)
* 이전에 만든 인스턴스 선택(체크)
* **작업** **인스턴스 상태** **종료** 선택

## 3. Elastic Beanstalk 삭제
![remove-eb-1](./../images/remove-eb-1.png)
* 서울 리전 선택
* `elastic beanstalk` 입력 후 **Elastic Beanstalk** 선택

![remove-eb-2](./../images/remove-eb-2.png)
* **작업** 선택
* **애플리케이션 삭제** 선택
* **삭제** 선택

## 4. IAM 삭제
![remove-iam-1](./../images/remove-iam-1.png)
* 싱가폴 리전 선택
* `IAM` 입력 후 **IAM** 선택

![remove-iam-2](./../images/remove-iam-2.png)
* 좌측 **그룹** 선택 
* **cloud9user** 선택
* **그룹 작업** -> **그룹 삭제** 선택
* **예, 삭제** 선택

![remove-iam-3](./../images/remove-iam-3.png)
* 좌측 **사용자** 선택 
* **friend** 선택
* **사용자 삭제** 선택
* **한 명 이상의 사용자가 ....** **체크박스** 선택
* **예, 삭제** 선택

축하합니다! 모든 실습을 마치셨습니다. 더 자세한 정보를 알고 싶으시다면 다음 페이지를 방문해보세요!
- [AWS C9](https://docs.aws.amazon.com/ko_kr/cloud9/latest/user-guide/welcome.html)
- [AWS Elastic Beanstalk](https://docs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/GettingStarted.html)
