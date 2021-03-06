#20160628 헤럴드디자인테크2016
___

## 프로그래밍 : 두 번째 시간

- 수업에서는 한글 함수를 사용하지만, 영어 함수를 사용해도 괜찮다.


**p5.js cdn**
<script src="//cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.2/p5.js"></script>



**1주차 과제**
- 선생님이 만들어 놓은 CODEPEN fork
- 도형들을 가지고 5~10글자 그려보기


## 2주차 주제 :  함수와 변수
- 함수 정의하는 방법
- 변수 정의하는 방법

### 수학의 함수와 p5.js에서의 함수가 다른점
수학에서는 리턴되는 값이 존재하는데, 우리가 만든 함수에서는 돌려받지 않는다.(지금까지 만든 코드에서는)

> 일반적으로 프로그래밍에서의 함수들은 어떤 값을 리턴하게 설계된다.

**따라서, 여기서의 “함수”는 어떤 프로세스에 이름을 붙인 것이며, 이 함수를 호출하면 해당 프로세스를 실행하도록 하는 일련의 과정을 의미한다. 이 과정 속에서 함수는 `input`이나 `output`은 없을 수도 있다.**


### 함수 정의
문법 : 블록

#### 함수이름의 규칙
- 첫 글자는 문자 혹은 $,_
- 두 번째 글자부터는 문자, 문자, $, _, 숫자
- 기호는 $, _만 사용가능
- 유니코드 문자도 사용 가능(한글도 사용가능)
- 예약된 키워드는 사용할 수 없음.



#### 함수의 작성
<pre class=“highlight”><code class=“js”>
function setup(){
	createCanvas(800, 800);
}
function makeRect(){
	rect(100, 120, 50, 50);
	rect(200, 120, 50, 50);
	rect(300, 120, 50, 50);
}
</code></pre>

- 함수는 프로세스를 가지고 있을 뿐이다.
- 함수를 생성만 하면 아무일도 일어나지 않는다.
- 따라서, 함수를 사용하려면 해당함수를 호출해주어야한다.

<pre class=“highlight”><code class=“js”>

function setup(){
	createCanvas(800, 800);
	makeRect(); //함수를 호출하는 부분

}
function makeRect(){
	rect(100, 120, 50, 50);
	rect(200, 120, 50, 50);
	rect(300, 120, 50, 50);
}
</code></pre>


### 프로그래밍과 함수의 의미, 관계
- 함수란 어떤 프로세스에 이름을 붙이는 일
- 프로그래머의 의도대로 언어의 확장
- 언어 : 새로운 단어를 정의
	- 네모들, 이응 등
	- 함수이름을 잘 정의해야할 필요성이 있음.


### 함수 정의 : 문법과 스타일

<pre class=“highlight”><code class=“js”>
//함수 정의의 기본형
function 이응(){
	//함수 본문
}
// 정상적인 자바스크립트가 아님
function<공백>이응<공백>(<공백>)<공백>{
	//함수 본문
}

// 공백은 스페이스, 줄바꿈을 포함하는 개념
// 이렇게 극단적으로 작성해도 정상 작동
function setup(){




	//본문 내용

}
</code></pre>



### 스타일
- 이렇게 작성하는 이유는 사람이 이해하기 쉽기 때문에.
- 스타일은 강제적이지 ㅇ낳은 합리적인 제약
- 공백은 최소한만 사용
- 블록은 함수 이름 바로 뒤에 붙인다.
- 함수 본문(블록 안)은 항상 두 칸을 띄우고 작성한다.

**기본 함수 스타일 예시**
<pre class=“highlight”><code class=“js”>
function 이응(){
	//함수 본문
}
</code></pre>
>’공백’은 기본적인 룰만 지켜주고, 나머지는 정답이 없기때문에 크게 신경쓰지않아도 된다. 가장 중요한 건 코드의 품질이다.


#### Codepen의 Tidy기능
-  우리가 위에서 살펴보았던 불규칙한 공백등에 대해서, **CODEPEN측에서 생각하는 합리적인 형태**로 코드형태를 정렬해준다.




실습 2: 함수로 분리하기
- 실습1의 소스코드에서 작성
- setup의 내용을 글자들 이름을 가진 하나의 함수로 분리하기
- setup에서는 글자들 함수만을 호출
- 15분



### 프로그래밍의 선형성과 비선형성
- 선형성
	- 소스콛는 언칙적으로 위에서부터 아래로 순서대로 실행된다
- 비선형성
	- 1(못적음)
	- 2(못적음)

### 매개변수가 하나인 함수
- 매개변수를 오직 하나만 받는 함수
- 거꾸로 말하면 함수를 호출할 때 매개변수를 하나 넘겨줄 수 있는함수
- f(x)와 마찬가지로 매개변수를 받고 작동방식이 달라짐
- 함수 본문 안에서 작동할 때 (… 못적음)

<pre class=“highlight”><code class=“js”>
fill(255); //채우기, 매개변수하나를 받고 있다.
</code></pre>


### 실습4: 매개변수가 하나 있는 함수
- 캔버스 크기 200X200
- 글자하나를 그리는 함수를 마든다(이전 예제를 가져옴)
- 매개변수가 하나인 함수로 변경
- 매개변수를 p5js 도형 함수인자로 사용한다.
- 매개변수를 바꿔가며 실행해보자
- 20분


### 문법 : 배열
<pre class=“highlight”><code class=“js”>
//빈 배열만들기
[]
//요소가 하나인 배열
[10]
//숫자 배열 만들기
[10, 20, 30, 40]
</code></pre>


#### 매개변수가 있는 함수
- 하나의 프로세스에 이름을 붙인 것
- 매개변수에 따라서 다양한 가능성을 가진 추상적이 ㄴ프로세스
- 수학적 함수 : Desmos 데모

### 문법 : 변수
#### 문법 : 변수 선언
//초기화 되지 않은 변수를 선언
//초기화 되지 않은 변수는 `undefined`라는 특별한 값을 가리키고 있음

`let` 변수이름;



<div class=“tem”><p>
<code>argument[0]</code>에 대한 사용이 있었는데, 이에 대해서는
<a href=“http://bonsaiden.github.io/JavaScript-Garden/ko/“/>에서 확인해볼 수 있다.
</p></div>



#### 변수선언 안되는 몇가지
- 숫자로 시작되는 변수명 : `let 2016s`
- 프로그래밍 예약어 : `let function`
- 몇가지 기호들 :
	- `#`: `let sd#s`
	- `@`: `let se@s`




#### 문법 : 변수 대입
- 변수가 어떤 데이터를 가리키도록 한다
- 변수를 대입할 때는 `=` 연산자를 활용한다.
- 이는 수학에서 같음을 의미한 `=` 연산자와는 다르다.

**문법 :  변수대입 예시코드**
<pre class=“highlight”><code class=“js”>
let 숫자;
숫자 = 100;
숫자; //100
</code></pre>


#### 데이터
- 지금까지 배운 데이터
	- 숫자 : 1, 2, 3, 100, 5000, 3333
	-


#### 변수의 범위
- 어떤 변수가 선언되었을 때,
- 이 변수에 접근할 수 있는 영역
- 기본적으로 범위는 **블록**의 깊이에 의해서 결정됨.

**문법 : 다중블록**
<pre class=“highlight”><code class=“js”>
//블록 문법의 중첩
{
	{
		{
			{
				//우와 깊다!
			}
		}
	}
}

//블록의 깊이
{ //아래의 모든 블록을 포함
	{ //2, 3, 4
		{ //3, 4
			{ //4
				//우와 깊다!
			}
		}
	}
}



//블록의 깊이
{
	{
		{
			{
				let num = 100;
			}
			num; //undefined
		}
		num; //undefined
	}
	num; //undefined
}


//블록의 깊이
let num = 100;
{
	let; //100
	{
			let; //100
		{
				let; //100
			{
					let; //100
			}
			let; //100
		}
		let; //100
	}
	let; //100
}
</code></pre>




### 공간을 다루는 함수들
- 이동() = `translate()`
- 축적() = `scale()`
- 회전() = `rotate()`

### 밀어넣기(push)와 꺼내기(pop)
- `push` : 넣는 것.
- `pop` : 빼는 것.

>계속적인 환경변경을 하기보다 특정 시점(위치)에 대한 설정값을 `push()`해 두었다가, 해당 변경이 완료된 후 `pop()`해 줄 수 있다.


### 코드 2주차 과제
	- 200*200 크기(하나의 캔버스에 다 우겨 넣지 않아도 된다.)
- 매개변수가 하나 있는 글자 함수 다섯개 만들기
- 다섯 개의 글자 함수에 같은 매개변수를 넘겨줄 것!
- `push` / `pop` / `translate` 등을 활용해 글자 배치하기
- 다음 시간에 한번 같이 돌려보기
- 이른시간에 완성해서 공유해주는 것도 도움이 된다.

<pre class=“highlight”><code class=“js”>
let 변수 = 100;

translate(변수);
Ah(변수);
mium(변수);
</code></pre>



>꿀팁 : cdnjs는 모든 javascript library cdn을 알려준다.
___