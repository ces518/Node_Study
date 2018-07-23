/**
	Node.js Application 생성
	
	어플리케이션에 필요한 모듈을 불러올떈 require 명령을 사용한다.
 */

//http 모듈 import
var http = require('http');

//서버 생성하기

// http인스턴스를 활용하여 http.createServer() 메서드를실행.
// listen 메서드를 활용하여 포트와 bind 시켜주어야한다.
// http.createServer() 의 매개변수로는 request와 response를 매개변수로 가지는 함수를 넣어주어야한다.

http.createServer(function(request,response){
	/*
	 *  HTTP 헤더전송
	 *  HTTP Status : 200 : OK
	 *  Content Type : text/plain
	 */
	response.writeHead(200,{'Content-Type':'text/plain'});
	/*
	 * Reponse의 Body를 Hello Node.js로 설정
	 */
	response.end("Hello Node.js \n");
	
}).listen(8787);