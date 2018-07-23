/**
 * 2018.07.23
 * Http Module
 */

/*
 * 
 * Http 서버 예제
 * 
 * 
 * index.html 생성 
 */

//server.js 작성

var http = require('http');
var fs = require('fs');
var url = require('url');

// 서버 생성
http.createServer(function(request,response){
	
	// url뒤있는 / 파일이름을 파싱한다.
	var pathname = url.parse(request.url).pathname;
	
	console.log('요청 = '+ pathname + 'recevied');
	
	
	//파일명이 비어있다면 index.html로 설정
	if(pathname == '/'){
		pathname = '/index.html';
	}
	
	
	//파일읽기
	fs.readFile(pathname.substr(1),function(err,data){
		if(err){
			console.log(err);
			
			// 페이지찾을수없음
			response.writeHead(404,{'Content-Type':'text/html'});
		}else{
			// 페이지찾음
			
			response.writeHead(200,{'Content-Type':'text/html'});
			
			//파일 읽은뒤 body에 작성
			response.write(data.toString());
		}
		
		// body 전송
		response.end();
	});
}).listen(8877);



// Http 클라이언트 예제

// HttpRequest 의 옵션설정

var options = {
	host : 'localhost',
	port : '8877',
	path : '/index.html'
};


// 콜백함수로 response를 받아온다.
var callback = function(response){
	// response 이벤트가 감지되면 데이터를 body에 받아옴.
	
	var body = '';
	response.on('data',function(data){
		body += data;
	});


	// end 이벤트가 감지되면 데이터 수신을 종료하고 내용을 출력한다.
	response.on('end',function(){
		//데이터 수신완료
		console.log(body);
	});
}

// 서버에 HttpRequest를 날림
var req = http.request(options,callback);
req.end();
