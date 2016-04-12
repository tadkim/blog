<table id="meta">
    <thead><th>160406</th><th>Sass</th><th>김태경</th></thead>
    <tbody>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    </tbody>
</table>

# Sass for tooltip
이 문서는 다음과 같은 물음에서 시작한다.
>왜- 우리는 - Sass를 사용하려하는 것일까?

나는 이렇게 생각했다.

- 우리는 콘텐츠 개발작업의 '지속가능성'을 추구한다.
- 그동안 콘텐츠 개발작업에 있어 CSS는, '입에서 불을 내뿜는 용'과 같았다.
- 앞으로도 어떤 형태로든 CSS라는 '용'은 존재한다.
- Sass는 CSS라는 용을 다루기위한 전략이자 전술이다.

그렇게 Sass를 시작했고, 유투브 영상이 및 Sass Guideline 문서 등을 보면서, Sass의 다양한 활용가능성을 여러가지 면에서 확인하고 있는 중이다. 

그리고, 중요한 것은 우리의 작업에 Sass를 직접 끌고 들어와서 풀어놓고 보려는 속셈이다. 지난 날 나의 d3.js 코드는 일회용 코드들이 대부분이었다. 직접 `localhost:8888`을 통해 확인해보지 않고서야 결과물도 짐작되지 않는. 단순한 재조합의 연속이었다. 그것이 얼마나 괴롭고 비효율적인 작업인지는 수 많은 새벽밤을 지새면서 깨달았기 때문에, 나는 이제는 그러한 일들을 되풀이 하고싶지 않을 뿐이다.

_ _ _
## "입에서 불을 뿜던 용" 뜯어보기 
결론적으로, Sass를 활용하는데 있어, "약간의 예제코드"만으로는 너무나도 부족하다. 그래서 현실적으로 손에 닿을 거리에 두고 껴안을 생각으로 이 small project "Red Brew"를 기획했다. 세부적인 단계는 다음과 같다.

1. **"불 뿜는 용 뜯어보기"** : Tooltip 기능 구현 단계에서 발생했던 문제 파악하는 단계. 매번 도망가서야, 절대 용을 다룰 수 없다. 
2. **불 뿜는 용 맞춤형 Sass코드 작성** : 아무리 새롭고 좋은 기술이라 할지라도, 중요한것은 어떤 맥락에서 기술을 사용하는가에 있다. `1번과정`정리했던 문제점들을 Sass의 기능으로 어떻게 보완 할 수 있을지 생각해보고 반영한다.
3. **기존 활용되는 다양한 Tooltip 형태 리서치** : NYT, The Guardian등의 콘텐츠에서 어떻게 Tooltip 기술을 구현하고 있는지. 그 특징은 무엇인지.
4.**Sass로 다양한 형태의 Tooltip 제작** :  `3번과정`에서의 결과를 바탕으로 우수 Tooltip 사례에 대해 실제 d3코드 위에서 Sass와 함께 어떻게 반영해본다.

_ _ _
### 1. **"불 뿜는 용 뜯어보기"**
"뜯어본다"라는 것은 쉽게말해서 다음과 같은 거다.

- 작성 자체가 난해했던 경우 : `d3.js` 문법 에서는 색상 하나 지정하는 것만으로도 `.style("fill", red);`, `attr("fill", "red");`또는 `style("color", red);`로 나뉘는 등 각 API기능이 어디에 정확히 부합하고, 사용되고있는지를 알기가 굉장히 어려웠다. 즉, 쉽게 자세하게 코드내에서 "뭐가 어떻게 어려웠나?"를 살펴보려고 하는 것이다. 

- 유지보수가 어려웠던 경우
    - d3.js코드에서 `.style()`이나 `.attr()`코드로 삽입되는 것들은 html파일에서 inline 스타일로 삽입되는것들이며, 그것들에 대한 수정 및 유지보수를 진행하기위해서는 다시 해당 기능 및 표현에 대한 위치의 코드를 직접 수정해야했다. 
- 협업이 어려웠던 경우
    - 위의 이유와 동일하다.

아래 코드는 실제 d3를 활용한 데이터시각화에서 작성했었던 Tooltip에 대한 css코드이다. 
<pre class="highlight"><code class="css">
/* 실제 D3 콘텐츠에서 사용했던 툴팁 CSS 코드 */
#tooltip{
  position:absolute;
  width:100px;
  height:auto;
  
  padding:10px;
  font-size:14px;
  background-color:rgba(0, 0, 0, 0.3);
  
}
#tooltip.hidden{
  display:none;
}
#tooltip p{
  font-size:10px;
  color:#fff;
  font-weight:light;
}
</code></pre>

_ _ _
## Sass 를 활용한 기존 코드 개선



###이슈1 스타일적용 우선순위 (with d3.js)
d3에서 `.style()`과 `.attr()`의 차이를 이해해야한다.
<pre class="highlight"><code class="js">

//...
//그래프에서 텍스트 라벨을 추가하는 영역예시
    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .attr("class", "textInfo")
        .text(function(d) { return d; })
        .attr("x", function(d, i) { return xScale(i) + xScale.rangeBand() / 2; })
        .attr("y", function(d) { return h - yScale(d) + 14; })
        .attr("font-size", "21px") //font-size를 .attr()로 설정하는 방식
        .style("font-size", "21px") //font-size를 .style()로 설정하는 방식
        .attr("fill", "white");

</code></pre>


만약 이 그래프를 표현하는 `css`파일에서 `.textInfo`클래스에 대해 다음과 같이 스타일 설정이 되어 있다면 어느것이 우선할까?
<pre class="highlight"><code class="css">
.textInfo{ font-size:10px; color:white; }
</code></pre>


[<생활 웹디자인 - CSS적용 우선순위>](https://opentutorials.org/course/1237/4149)에서 정리한 내용에 따르면 우선순위는 다음과 같다.

1. 원천 소스중 사용자 스타일시트가 가장 우선한다.
2. 선택자 우선순위를 계산하여 값이 높은 순서대로 적용한다.
3. 가장 마지막에 지정된 스타일을 우선적으로 적용한다.


###이슈1 스타일적용 우선순위 (with d3.js) 풀이

우선순위가 높은 순서로 정리해본다.

1. `d3.js`코드 내 `.style()`
    - `2`,`3`번 에서 `!important`를 사용해도 인라인스타일로 적용되는 `.style()`이 우선순위가 높음.
2. `css`파일의 `.textInfo`클래스 스타일
3. `d3.js`코드 내 `.attr()`
    - 보통 `.style()`및 `css`에서의 스타일지정이 이루어지지 않은경우 이 코드가 반영 된다.
 
<div class="tem">   
**즉, Sass의 `@mixin`으로 `d3.js`의 클래스를 통제하여 테마를 작성하는 경우, 다음과 같은 규칙 안에서 작성되어야 한다.**
- `d3.js`코드 작성시, `@mixin`컨트롤 고려하여 클래스명을 부여한다.
- `d3.js`코드 작성시, `.style()`로의 스타일 속성 부여는 최대한 자제한다.
    - 여러가지 사항을 검토하여 `.style()`사용이 불가피할 경우, 목적과, 활용 지점에 대한 설명을 주석으로 작성해놓는다.
</div>


[<CanIuse-CSS 2.1 selectors>](http://caniuse.com/#feat=css-sel2)에서 `:hover`의 브라우저별 지원 관련 정보를 확인 해 본 결과, `IE7`이하 버전에서는 사용하지 못하고, 그이후 버전dls `IE8`버전 부터는 자유롭게 사용가능한 것으로 보인다.

* 또한 `:hover`





### d3.js에서의 색상 스타일 지정시 주의사항

<pre class="highlight"><code class="js">
svg.append("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d); 
.style("fill", "blue")'
.style("color", "red");
</code></pre>
 
