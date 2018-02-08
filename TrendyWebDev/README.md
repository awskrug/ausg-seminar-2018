# AWS 뿌시기 5회차 - 트렌디한 웹 개발과 쉬운 배포 체험하기

'초보자를 위한 AWS 뿌시기 5회차'에 오신 여러분들을 모두 환영합니다! 아마 이 소개글은 뒤로 하고 아래의 실습 모듈 링크를 이미 누르셨겠죠... 괜찮으니 하시던 것 마저 하세요!

### 본 실습 세션의 학습 목표는 아래와 같습니다.

- Route 53을 이용해 내 도메인을 AWS DNS 서비스에 연결해본다.
- S3를 이용해 HTML, JS, CSS 등 정적 웹사이트를 내 도메인으로 인터넷에 배포해본다. (HTTP)
- CloudFront를 이용해 S3로 배포된 정적 웹사이트를 HTTPS로 배포해본다.
- Vue.js, React.js 등 최신 Frond-end Framework 패러다임에 대해 이해한다.
- JS의 Module System을 이해하고 Webpack을 도입한다.
- S3 Webpack Plugin을 통해 배포 자동화를 경험해본다.

#  필수 준비 사항

## PC 또는 Mac
본 세션은 코딩 과정이 포함되어 있습니다. 또한 CLI(Command Line Interface) 조작이 꼭 필요합니다. 모바일 환경(iPhone, iPad, Android)에서는 진행이 불가능하니 꼭 PC/Mac 환경에서 진행하세요.

## AWS 계정
- AWS 계정 만들기 [이동](https://aws.amazon.com/ko/)

본 가이드는 한명이 하나의 AWS 계정을 사용한다고 가정합니다. AWS Route 53, S3, CloudFront, Certification Manager에 접근할 수 있어야 하며, 다른 사람과 계정을 공유하게되면 특정 리소스에 대해 충돌이 발생하므로 권장하지 않습니다.

### [중요] 본 워크샵에서 사용하는 'Route 53' 서비스는 **과금**됩니다. 월 800원 (0.5$) 수준이니 실습이 끝나고 사용하지 않으신다면 바로 삭제하세요.

**Route 53을 제외한** 본 워크샵의 일환으로 시작하는 모든 리소스는 AWS 계정이 12개월 미만인 경우, 제공하는 AWS 프리티어로 충분히 가능합니다. 프리티어를 넘어서는 경우, 과금일 될 수도 있습니다. 따라서, 새로운 실습용 계정을 만드시길 권장합니다. 자세한 내용은 [AWS 프리 티어 페이지](https://aws.amazon.com/free/)를 참조하세요.

## 웹 브라우저
- Chrome 최신 버전 [다운로드](https://www.google.com/chrome/)
- Firefox 최신 버전 [다운로드](https://www.mozilla.org/ko/firefox/new/)

둘 중 원하시는 브라우저를 설치해주세요. (Internet Explorer는 AWS Web Console에서 문제가 발생 할 수 있습니다.)

## 텍스트 에디터
- VS Code [다운로드](https://code.visualstudio.com/)
- Atom [다운로드](https://atom.io/)

본 실습 세션에는 실제 코딩이 포함됩니다. 다음 둘 중 하나를 선택해서 꼭 설치해주세요.

## Node.js
- Node.js 최신 버전 [다운로드](https://nodejs.org/en/)

[npm](https://www.npmjs.com/)을 사용하시려면 반드시 설치하셔야해요. 겁먹지마세요! [npm](https://www.npmjs.com/)이 뭔지는 제가 차근차근 설명해드릴께요.

# 선택 준비 사항
흠... 트렌디해지고 싶으시다구요? 잘 생각하셨어요! 신기술은 선택이 아닌 필수죠.

## Atom과 Github 계정 (for Teletype)
- Atom [다운로드](https://atom.io/)
- Github 계정 만들기 [이동](https://github.com)

2018년 2월 22일에 진행되는 세션에서는 [Teletype](https://teletype.atom.io/)으로 코딩 과정이 실시간 공유됩니다. [Teletype](https://teletype.atom.io/)을 체험하고 싶은 참석자분께서는 반드시 [Atom](https://atom.io/)을 설치해주세요. [Teletype](https://teletype.atom.io/)은 Github 계정을 필요로 합니다. 헐.. 아직 Github 계정이 없으시다구요? (소-름) 지금이라도 늦지 않았습니다!
> 따로 혼자 진행하시거나, 실제 개발때는 VS Code를 추천드려요! (Atom보다 빠르고, 무엇보다 TypeScript는 멋지니까요!)


# 자 그럼 이제 시작해볼까요?
1. [Freenom 가입, 무료 도메인 등록 및 Mailgun 가입](1_freenom_mailgun)
2. [Route 53 Hosted Zone 등록 (Mailgun을 이용해 내가 등록한 도메인으로 메일 받아보기)](2_route53/)
3. [S3 정적 웹사이트 호스팅](3_s3/)
4. [Certification Manager로 인증서 만들기](4_certification_manager)
5. [CloudFront로 CDN 구성하기](5_cloudfront/)
6. [Vue.js 소개](6_vue/)
7. [Webpack 소개 및 배포 자동화](7_webpack/)
### 워크샵을 마친 후에 꼭 [삭제 가이드](8_remove/) 에 따라 생성 된 모든 리소스를 삭제해주세요.