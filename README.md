# COUPLE CHAT SERVICE PROJECT

## **프로젝트명 : 도커로 바위치기**

<br>

![도커로-바위치기](https://github.com/choigonyok/couple-chat-service-project-docker/assets/129271363/2022cff4-9750-484c-b62d-2294f09d2120)


<br>

# **개요**

**연인 간 신뢰 쌓기를 도와줄 수 있는 채팅 웹 어플리케이션을 개발해보자!**

## **1-1 개발기간**

        23.06.26 ~ (-일)

## **1-2 역할**

        최윤석 (경희대 컴퓨터공학과)

* #### [instagram](https://www.instagram.com/choigonyok)

* #### [blog](https://www.choigonyok.com)

> 설계, BE, FE 및 배포 담당

## **1-3 결과물**

-

<br>

# **개발이유**

## **기존 커플 어플들의 문제점**

사용자 1위 커플 채팅 어플리케이션에는 연인의 현재 위치를 확인할 수 있는 기능이 있다.
  
화면이 켜져있는지, 현재 위치가 어딘지부터 시작해서 상대방의 통화, 메세지 내역을 확인할 수 있게 해주는 커플 앱도 등장했다.

## **신뢰는 연인간의 중요한 문제다.**

이러한 기능들은 커플 어플리케이션의 목적과 반대로 오히려 연인간의 신뢰를 무너뜨릴 수 있다.
연인 간 서로를 믿지 못해 감시/확인하기 위한 기능들보다 서로를 더 믿을 수 있게 돕기위한 기능들이 더 필요하다.

## **신뢰를 쌓는 3가지 원칙**
> 출처 : [네이버 블로그](https://post.naver.com/viewer/postView.nhn?volumeNo=27272214&memberNo=253010)

1. 자기 이해
   - 나는 어떤 사람인지, 내가 무엇을 중요하게 여기는지 파악하는 것

2. 상대방 이해
   - 상대는 무엇을 좋아하고 싫어하는지 상대의 가치관을 파악하는 것

3. 상호 이해
   - 내 가치관과 상대의 가치관 모두 중요하다는 것을 이해하는 것

<br>

이 원칙을 바탕으로 핵심기능과 요구사항을 분석했다.

<br>

# **핵심기능**

* 최근 1주일동안 커플 채팅에서 많이 사용된 단어 순위를 분석해서 제공하는 기능

> 자신과 상대방이 어떤 말을 자주 하는지 확인, 상대방에 대한 스스로의 태도를 점검하거나 관계의 현상을 가시적으로 확인할 수 있다.

  - 몇 순위까지 확인할 지 사용자가 선택할 수 있다 (3, 5, 10순위)
  - 의미없는 단어들(아, 음, 앗 등...)은 사용자가 지정해서 단어 순위에서 제외시키거나, 제외된 단어를 취소할 수 있다.
  
* 채팅 중 특정 단어가 나오면 해당 단어에 대한 질문이 팝업되고 해당 질문에 대해 대답하도록 하는 기능
  
> 질문들을 통해 자신과 상대방에 대해 더 알아가게 되고, 이를 바탕으로 더 깊은 관계로 이어지도록 유도할 수 있다.

  - ex) : '음식'이라는 단어가 채팅 중 나오면 "못먹는 음식이 무엇인지" 에 대한 질문이 채팅장에 팝업되고, 각 사용자는 이 질문에 대답해야 일반 채팅을 이어갈 수 있다.
  
* 그 동안 진행했던 질문과 대답을 정리해서 볼 수 있게 해주는 기능
  
* 첫 커넥션 날짜부터 36일간 매일 1회씩 "사랑에 빠지는 36가지 질문" 에 대한 답을 작성하도록 강제하는 기능

* 연인 간 처음 커넥션을 맺을 때 연락빈도, 이성친구 가치관, 나쁜 습관, 데이트비용, 간섭정도 등 여러가지 항목에 대한 답을 입력받고, 상세한 답변은 서로에게 비공개하며, 어느 부분이 다르고 어느 부분이 비슷한지만 공개해서 연인끼리 서로 대화할 수 있게하는 기능

* 예정된 일정의 D-DAY를 설정/삭제/확인해서 연인 간 신뢰가 깨지지 않도록 하는 기능

* 연인 간 커넥션을 끊을 때(이별) 바로 연결이 끊기지 않고 7일의 유예기간을 두어서 커넥션 해제를 취소할 수 있게 하는 기능

<br>

# **요구사항분석**

* 여러 사용자들이 서비스를 이용해도 커넥션(연인)간 간섭이 없어야 한다.

* 회원가입, 회원탈퇴, 로그인, 로그아웃, 비밀번호 변경, ~~비밀번호 찾기~~ 기능

> 비밀번호 찾기 기능은 이메일 API를 통해 인증번호를 받아 변경하는 방식으로 구현하려했으나 네이버 이메일 API가 유료라 구현 불가

* 사용자끼리 커넥션 신청/승인/삭제/취소/해제 기능

* 실시간 채팅 기능
  - 웹소켓을 이용한 실시간 채팅
  - 채팅 전송 시간 표시
  - 채팅으로 영상/사진 등 파일 전송
  - 이미지파일 전송 시 채팅에 썸네일 표시
  - ~~알림이 울리지 않게 메시지 전송~~
  - 단어 기반 채팅 검색
  - 날짜 기반 채팅 검색
  - 내가 보낸 채팅 삭제

> 실시간 채팅 전송시 상대방이 웹소켓 연결되어있지 않은 상태면 푸시알림을 통해 모바일 알람을 전송하려했으나 ADP가 유료라 구현 불가

* 캘린더 기능
  - 일정 추가
  - 일정 삭제
  - D=Day 설정 및 표시
  - 전월/이월로 캘린더 이동
  - 현재 달로 캘린더 이동

* "사랑에 빠지는 36가지 질문" 1일 1질문 및 응답받아 표시

<br>

# **기술스택**

* BE : Go, Gin, Gorilla Websocket
* FE : React.js
* Publishing : CSS, HTML
* DB : MySQL
* Version Management : Git / Github
* Deployment : Docker, AWS Elastic Beanstalk
* Web Server : Nginx
  
<br>

# **도입기술**

* Backend - MVC패턴
* 도커 컨테이너를 활용한 배포
* 웹소켓
* 환경변수 설정

<br>

# **관련 Posts**

* [[CHAT-SERVICE #1] 커플을 위한 채팅 서비스를 개발해보자 !](https://choigonyok.com/post/15)