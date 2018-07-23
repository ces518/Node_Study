/**
 * 2018.07.23
 * 
 * Event Loop
 */


/*
 * 
 * Event Loop
 * 
 * 
 * Node.js 에서 Event를 매우 많이 사용하고, 이 때문에 비슷한 기술들보다 훨씬 빠른 속도를 자랑한다.
 * 
 * Node.js 기반서버가 작동되면 변수를들을 initalize 하고 함수 선언후 이벤트종료시까지 대기한다.
 * 
 * 이벤트 위주 (Event-Driven) 어플리케이션에서는, 이벤트를 대기하는 메인루프가있다.
 * 
 * 이벤트 감지시 CallBack함수를 호출한다.
 * 
 * 이벤트가 콜백과 비슷해 보일수 있지만, 차이점은 콜백함수는 비동기식 함수에서 결과 반환시 호출되지만.
 * 
 * 이벤트핸들링은 옵저버 패턴에의해 작동된다.
 * 
 * 
 * 
 * 이벤트를 대기하는 (EventListenders) 함수들이 옵저버 역할을 한다.
 * 옵저버들이 이벤트를 기다리다가, 이벤트가 실행되면 이벤트를 처리하는 함수가 실행된다.
 * 
 * Node.js 에는 events모듈과 EventEMitter클래스가 내장되어있는데,
 * 이를 활용하여 이벤트와 이벤트핸들러를 bind할수있다.
 * */

//events모듈사용

var events = require('events');

//EventEMiter 객체 생성

var eventEmitter = new events.EventEmitter();

//event 와 EventHandler 를 bind
//eventName은 임의로 설정가능
eventEmitter.on('eventName',eventHandler);

//프로그램 내에서 이벤트 발생 코드
eventEmitter.emit('eventName');



// 이벤트 핸들링 예제

// events 모듈 사용
var events = require('events');

// EventEmitter 객체 생성
var eventEmitter = new events.EventEmitter();

// EventHandler 함수 생성
var connectHandler = function connected(){
	console.log('Connection Successful');
	
	//data_recevied 이벤트발생
	
	eventEmitter.emit('data_recevied');
}


// connection 이벤트와 connectionHandler이벤트 핸들러를 연동
eventEmitter.on('connection',connectHandler);

// data_received 이벤트와 익명함수와 연동
eventEmitter.on('data_received',function(){
	console.log('DataReceived');
});

//connection 이벤트 발생.
eventEmitter.emit('connection');

console.log('Program has ended');


/*
 * 실행결과
 * 
 * Connection Successful
 * 
 * Data Received
 * 
 * Program has ended
 * 
 */