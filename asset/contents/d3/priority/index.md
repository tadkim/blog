<table id="meta">
  <thead><th>160413</th><th>D3</th><th>Tad Kim</th></thead>
  <tbody>
  <tr><td></td><td></td><td></td></tr>
  </tbody>
</table>

<h1>우선순위 (Priority)</h1>

<h2>d3의 style 지정방법</h2>

<p>d3.js에서 우리는 코드안에서 데이터를 바인딩하고, 그것을 효과적으로 보여주기위하여 스타일 지정까지 한다. 이 과정에서 사용되는 코드형태는 크게 세 가지로 나눌 수 있으며, 그 내용은 다음과 같다.</p>

<ul>
<li>.style("property name", "property value")</li>
<li>.attr("property name", "property value")</li>
<li>.attr("class", "---")</li>
</ul>

<div class="tem">
지금(2016.4)까지의 d3 개발작업에서 이러한 코드는 우선순위 고려없이 사용되었다. 이러한 코드 작성으로 인해 유지보수문제 라던가 협업과정에서 여러 문제점들을 만들어 내게 되었다. 즉, 논리적이지 않은(프로세스가 없는)코드 작성을 해왔던 것이다. 간단히 말해 이렇게  우선순위없이 작성된 코드는  '일회성 코드'만을 만들어낼 뿐이었다. 나도 그 코드를 다시 꺼내보기가 싫을정도다.
</div>

<hr />

<h2>간단요약</h2>

<p>위에서 제시한 세 가지 코드를 포함하여 CSS 기술까지 고려한 우선순위는 다음과 같다.</p>

<ol>
<li>!important</li>
<li>.style("property name", "property value")</li>
<li>.attr("class", "---")</li>
<li>.attr("property name", "property value")</li>
</ol>

<p>이에 대해 자세한 설명을 추가한다.</p>

<ol>
<li><p>!important</p>

<ul>
<li><code>important</code> 선언을 추가하면 케이스케이딩 순서를 결정할 때 특정 <code>속성-값</code>선언에 가장 높은 우선순위를 줄 수 있다 이렇게하면 현재 적용된 다를 규칙과 상관없이 스타일 선언이 강제로 적용된다.[^1]</li>
<li>CSS에서 선언하는 <code>important</code>는 d3내에서 스타일에 대해 선언하는 다른 코드보다 가장 우선적으로 적용된다.</li>
<li>디버깅할때 적용할 수는 있지만, 최종 콘텐츠에 삽입하는 것은 권장하지 않는다.</li>
</ul></li>
<li><p>.style("property name", "property value")</p>

<ul>
<li>d3코드 내에서 작성되는 형태로, <code>.attr()</code>과 함께 자주 사용된다.</li>
<li>이 코드는 html안에서 <code>inline style</code> 로 적용된다.</li>
<li>d3코드 및 개발도구에서 수정하거나 디버깅하는 데 굉장히 비효율적이므로, 권장하지 않는다.</li>
</ul></li>
<li><p>.attr("class", "---")</p>

<ul>
<li>d3에서 해당 요소(element)에 클래스를 부여하는 코드이다.</li>
<li>d3에서는 요소에 클래스만 부여하고, 별도로 CSS파일에서 스타일 코드를 작성하는 방법이라고 할 수 있다.</li>
</ul></li>
<li><p>.attr("property name", "property value")</p>

<ul>
<li>기본적으로 d3내에서 요소의 속성(attribute)을 지정하는 데 사용된다.</li>
<li>우선순위가 낮아 기본적인 형태를 지정하는 데 사용할 수 있으나, 반대로 이 코드의 존재를 간과할 수 는 없기때문에 이 형태의 코드를 사용하기위한 적절한 가이드가 마련되어야 한다.</li>
</ul></li>
</ol>

<h2>우선순위를 고려한 코드 작성가이드</h2>

<div class="tem">
coding convention 문서 제작에 대한 논의가 본격적으로 이루어지지 않은 상태에서, 향후 방향을 이야기한다는 것은 굉장히 조심스럽지만,  위 내용을 통해 방향까지는 짚을 수 있을 것으로 보인다.
</div>

<ol>
<li>!important : <em>--  anti pattern --</em></li>
<li>.style("property name", "property value") <em>--  anti pattern --</em></li>
<li>.attr("class", "---")</li>
<li>.attr("property name", "property value")</li>
</ol>

<div class="tem">
현재 스튜디오에서 공식적으로 CSS 작성기술로 선정한 `Sass`까지 고려했을때, d3의 효율적인 활용 및 모듈화를 위해서는 안티패턴인 `1`,`2` 번 방식은 가급적 피하면서 `3`,`4`번 코드 중심으로 작성할 것을 권장한다.
</div>

<h2>d3 priorty 예시코드</h2>

<p>d3에서의 우선순위(priorty)에 대한 내용을 codepen에서 실제 코드와 결과값을 조회해 볼 수 있도록 했다.</p>

<iframe height='268' scrolling='no' src='//codepen.io/colony-tad/embed/GZQaOL/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/colony-tad/pen/GZQaOL/'>d3 color command Test</a> by tadkim (<a href='http://codepen.io/colony-tad'>@colony-tad</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<[^1]:제이슨 크랜포드 티그 지음 유윤선 옮김, "쉽고 빠르게 익히는 CSS3", 위키북스, 2011, p.111</p>