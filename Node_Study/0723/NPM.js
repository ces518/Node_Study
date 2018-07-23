/**
 * 2018.07.23
 * 
 * NPM
 */



/*
 * 
 * 
 * NPM
 * 
 * 
 * 
 * Node Package Manager (NPM) 은 두가지의 주요기능을 지니고있다.
 * 
 * 
	NPMSearch 에서 탐색 가능한 Node.js 패키지/모듈 저장소
	Node.js 패키지 설치 및 버전 / 호환성 관리를 할 수 있는 커맨드라인 유틸리티
 	
 	npm 설치 확인 명령어
 	
 		npm --version
 	
 	npm 버전이 구부전이라면 다음명령어로 최신버전으로 업데이트 가능.
 	
 		npm install npm -g
 	
 	
 	npm에서 일부패키지를 설치할 때 python을 요구하므로 호환성을 맞추기 위하여 파이썬 런타임도 설치할것.
 	
 	
 	
 	
 	
 	
 	NPM을 사용하여 모듈설치하기
 	
 	
 	npm install <모듈명>
 	
 	
 	예를들어 express 설치시
 	
 	npm install express
 	
 	
 	
 	
 	
 	
 	글로벌 vs 로컬 모듈설치
 	
 	
 	기본적으로 npm은 모듈을 로컬모드로 설치한다.
 	
 	
 	로컬모드란 ?
 		패키지를 명령어를 실행한 디렉토리안에 있는 node_modules에 설치하는것을 의미.
 		
 	
 	글로벌 설치는 시스템 디렉토리에 설치하는것을 의미.
 	
 	
 		글로벌 모드로 설치
 	npmm install express -g 
 	
 	
 	글로벌 모드로 설치하였을 때는 node어플리케이션에서 바로 require할수없다.
 	
 	단 npm link 명령어를 사용하면 불러올수있다.
 	
 	
 	npm install -g express
 	
 	cd /project
 	npm link express
 	
 	
 	
 	
 	package.json
 	
 	package.json은 노드 어플리케이션 / 모듈의 경로에 위치해 있으며 패키지의 속성을 정의한다.
 	
 	다음은 express로 프로젝트를 생성했을때 생성되는 package.json 
 	
 	{
  "name": "myapp",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0"
  }
}
 	
 	
 	
 	모듈 제거
 	
 	npm uninstall express
 	
 	
 	
 	
 	모듈 업데이트
 	
 	npm update express
 	
 	
 	모듈 검색
 	
 	npm search express
 	
 * 
 * 
 * 
 * */
