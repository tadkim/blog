
<table id="meta">
  <thead><th>160414</th><th>Node</th><th>Tad Kim</th></thead>
  <tbody>
  <tr><td></td><td></td><td></td></tr>
  </tbody>
</table>
<h1>Node.js - 기초편 2</h1>

### 동사들(verbs)의 나라에서의 실행(execution)

잠깐 `functional programming`에 대해 이야기한다.

>*함수를 전달하는것은 단지 기술적인 고려사항이 아니에요. 소프트웨어 디자인의 관점에서 보면 이것은 거의 철학적인 이야기입니다. [- Manuel Kiessling](http://www.nodebeginner.org/index-kr.html)*

`index`파일에서 `router`객체를 `server`로 전달할 수도 있고, `server`는 이 객체의 `route`함수를 호출할 수도 있다.

이러한 방식으로 우리는 물건(thing)을 전달하고, `server`는 무슨 일인가를 하는데에 이 물건(thing)을 사용한다.

>*"거기 router야, 이것 좀 보내(route)줄래?"*

#### "Server입장에서는 명사가 아닌 동사가 필요하다."
하지만, `server`입장에서는 그런 것(thing)이 필요 없다. 다만 뭔가를 할 필요가 있는 것 뿐이다. 그리고 뭔가를 하려면 물건(things)이 필요한 게 아니라 행동(action)이 필요하다. 즉, 명사(nouns)는 필요없고, 동사(verbs)가 필요한 것이다.

>*이 아이디어의 핵심에 있는 근본적인 정신변화를 이해하니 functional programming을 진정으로 이해할 수 있었습니다.<br/>Steve Yegge의 걸작 [Execution in the Kingdom of Nouns](http://steve-yegge.blogspot.com/2006/03/execution-in-kingdom-of-nouns.html) 을 읽었을 때 이것을 이해했습니다. 지금 읽어보세요. 이것은 제가 본 소프트웨어와 관련된 최고의 저술 중에 하나입니다.*

_ _ _
### 실제 request handler로 라우팅(routing)하기

다시 Node.js 로 돌아와보자. 이제 우리가 의도한 대로 `HTTP server`와 `router`는 친구가되어서 서로 이야기를 나눈다.

당연히, 이걸로는 부족하다. "Routing"은 다른 URL을 다르게 처리하고 싶다는 말 이다.`/start` 요청에 대한 "비즈니스 로직"은 `/upload` 요청과는 다른 함수에서 처리하고 싶다.

#### `router`는 요청에 대해 실제로 뭔가를 할 만한 곳이 아니다.
애플리케이션이 복잡해지면 `router`를 확장하기가 쉽지 않다.

따라서, 요청이 `route` 될 함수를 `request handler`라고 부르기로 하고 자세한 내용을 바로 살펴보기로 하자.


#### rquest handler = 요청이 `route`될 함수
새로운 애플리케이션 부분이니까 새로운 모듈로 만들기로하자. `requestHandlers`라는 모듈을 만들고, 각각의  `request handler`를 위한 껍데기(placeholder)함수들을 추가한 후 이 모듈의 메소드로 `export`한다.

즉, 요약하자면 다음과 같다.

##### request handler 생성하기
1. 새로운 `requestHandlers`라는 모듈을 생성한다.
2. 각각 `request handler`를 위한 껍데기(placeholder)함수들을 추가한 후 이 모듈의 메소드로  `export`한다.

<pre class="highlight"><code class="js">
function start(){
    console.log("Request handler 'start' was called.");
}
function upload(){
    console.log("Request handler 'upload' was called.");
}
exports.start = start;
exports.upload = upload;
</code></pre>




