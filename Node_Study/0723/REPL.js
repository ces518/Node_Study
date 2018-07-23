/**
 * 2018.07.23
 * REPL 터미널
 */

/*
 * REPL 터미널
 * 
 * 	REPL은 Read Eval Print Loop의 약자이다.
 * 	이는 윈도우 커맨드 혹은 Unix/Linux Shell 처럼 사용자가 커맨드를 입력하면 시스템이 값을반환하는 환경이다.
 * 
 * 	Node.js 는 REPL환경과 함께 제공되며 다음과 같은 기능을 수행할 수 있다.
 * 
 * 	Read - 유저의 값을 입력받아 JavaScript 데이터 구조로 메모리에 저장한다.
 * 	Eval - 데이터를 처리 (Evaluate) 한다.
 * 	Print - 결과값을 출력한다.
 * 	Loop - Read, Eval, Print 를 유저가 Ctrl+C 를 두번눌러 종료시까지 반복한다.
 * 
 * Node.js 의 REPL환경은 자바스크립트 코드를 테스트 및 디버깅시 유용하게사용된다.
 * 
 */

/*
 * REPL 시작하기
 * 
 * REPL은 쉘.콘솔에 파라미터없이 node를 실행하여 실행할수있다.
 * 
 * 
 * 
간단한 표현식 사용
Node.js REPL 커맨드 프롬프트에 간단한 연산자를 사용해봅시다.

$ node
> 1 + 5
6
> 1 + ( 6 / 2 ) - 3
1
>
변수 사용
다른 스크립트처럼, 변수에 값을 저장하고 나중에 다시 출력 할 수 있습니다.

만약 var 키워드를 사용하면 명령어를 입력했을때 변수의 값이 출력되지 않고, var 키워드를 사용하지 않으면 값이 출력됩니다.

또한, console.log() 를 통해 출력 할 수 있습니다.

$ node
> x = 10
10
> var y = 5
undefined
> x + y
15
> console.log("Value is " + ( x + y ))
Value is 15
undefined
Multi-Line 표현식 사용
do-while 루프를 REPL에서 실행해봅시다.

$ node
> var x = 0
undefined
> do {
... x++;
... console.log("x: " + x);
... } while ( x < 3 );
x: 1
x: 2
x: 3
undefined
>
Underscore ( _ ) 변수
밑줄 _ 변수는 최근 결과값을 지칭합니다.

$ node
> var x = 10;
undefined
> var y = 5;
undefined
> x + y;
15
> var sum = _
undefined
> console.log(sum)
15
undefined
>





REPL 커맨드




Ctrl+C – 현재 명령어를 종료합니다.
Ctrl+C (2번)  – Node REPL 을 종료합니다.
Ctrl+D – Node REPL을 종료합니다.
위/아래 키 – 명령어 히스토리를 탐색하고 이전 명령어를 수정합니다.
Tab – 현재 입력란에 쓴 값으로 시작하는 명령어 / 변수 목록을 확인합니다.
.help – 모든 커맨드 목록을 확인합니다.
.break – 멀티 라인 표현식 입력 도중 입력을 종료합니다.
.clear – .break 와 같습니다.
.save filename – 현재 Node REPL 세션을 파일로 저장합니다.
.load filename – Node REPL 세션을 파일에서 불러옵니다.
 * */
