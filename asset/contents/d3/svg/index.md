<table id="meta">
  <thead><th>160412</th><th>D3</th><th>Tad Kim</th></thead>
  <tbody>
  <tr><td></td><td></td><td></td></tr>
  </tbody>
</table>

<h1>SVG Shape</h1>

<p>이 글은 Mike Bostock의 <a href="https://github.com/mbostock/d3/wiki/SVG-Shapes">SVG Shapes</a>내용을 발번역한 것이다. </p>

<p>SVG는 <code>axis-aligned rectangles</code>나 <code>circles</code>와 같은 간단한 형태를 내장하고 있다.   뿐만 아니라 보다 유연하게 우리는 SVG의 <code>path</code>요소를 d3의 <code>path 데이터 생성기</code>와 결합하여 사용할 수 있다. </p>

<p>A shape generator는 <a href="https://github.com/zziuni/d3/wiki/SVG-Shapes#arc">d3.svg.arc</a>로 리턴되는 것과 같다. 이것은 객체이면서 동시에 함수이다. 즉, 다른 함수와 같이 우리는 이것을 활용하여 shape를 호출할 수 있고, shape에 추가적인 메서드를 더해 동작을 변경하는 것으로도 사용가능 하다.</p>

<p>d3의 다른 메서드에서와 같이, <code>shape</code>는 <code>메서드 체인 패턴</code>을 지원하기때문에, 간단히 <code>shape</code>하나 그대로 구성하거나, 복수의 setters를 적용하여 간결한 문장으로 만들 수 도 있다.</p>

<hr />

<h2>SVG Elements</h2>

<p>모든 <code>SVG shapes</code>는 <a href="https://www.w3.org/TR/SVG/coords.html#TransformAttribute">transform</a> 속성을 사용할 수 있다. D3에서 우리는 각 <code>shape</code>요소에 이러한 속성을 직접 적용할 수도 있고, <code>g</code>요소를 활용하여 그룹 단위로 적용할 수도 있다. 그러므로, <code>shape</code>가 <code>axis-aligned</code>로 정의되는 때에는 단순히 local 좌표 시스템안에서 <code>axis-aligned</code>되었다고 생각하면 된다. 이외의 모든 경우에 우리는 여전히 <code>shape</code>를 회전시키거나, 변형시킬 수 있다.</p>

<hr />

<h3>SVG Shape Style</h3>

<p><code>Shape</code>는 <a href="https://www.w3.org/TR/SVG/painting.html#FillProperties">fill</a>과 <a href="http://www.w3.org/TR/SVG/painting.html#StrokeProperties">stroke</a>를 활용하여 스타일을 부여할 수 있다.</p>

<p>우리는 여전히 <code>fill</code>과 <code>stroke</code>라는 속성을 사용가능하지만, 스타일 설정에 대해서는 외부 스타일 시트와 호환 사용하는 것을 권장한다.</p>

<h4>rect</h4>

<pre class="highlight"><code class="html">
<rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)">
</code></pre>

<p><code>rect</code>요소는 축-정렬(axis-aligned)사각형을 정의한다. 사각형의 <code>top-left corner</code>는 <code>x</code>,<code>y</code>좌표의 위치에 기준이 된다. 반면 <code>rect</code>의 크기는 <code>width</code>와 <code>height</code>속성에 의해 정의된다. 또한 둥근 사각형(Rounded Rectangle)은 <code>rx</code>와 <code>ry</code>라는 속성을 사용하여 정의할 수 있다.</p>

<h4>circle</h4>

<pre class="highlight"><code class="html">
 <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</code></pre>

<p><code>circle</code>요소는 중심점 및 <code>radius</code>에 의해 정의된다. <code>circle</code>요소의 <code>cx</code>, <code>cy</code>가 위치를 잡는데 사용되고, <code>r</code>속성이 크기를 정의하는데 사용된다.</p>

<h4>ellipse</h4>

<pre class="highlight"><code class="html">
<ellipse cx="240" cy="100" rx="220" ry="30" style="fill:purple" />
<ellipse cx="220" cy="70" rx="190" ry="20" style="fill:lime" />
<ellipse cx="210" cy="45" rx="170" ry="15" style="fill:yellow" />
</code></pre>

<p><code>ellipse</code>요소는 축 중심(axis-aligned) 타원으로, 중심점 및 두 <code>radius</code>의해 정의된다. 위치는 <code>cx</code>,<code>cy</code>에 의해 정의되며 <code>rx</code>,<code>ry</code>를 명시함으로 크기와 형태를 정할 수 있게 된다.</p>

<h4>line</h4>

<pre class="highlight"><code class="html">
<line x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(255,0,0);stroke-width:2" />
</code></pre>

<p><code>line</code>요소는 시작점과 끝점을 기준으로 정의된다. 시작 점은 <code>x1</code>과 <code>y1</code>속성에 의해 정의되고, 끝점은 <code>x2</code>, <code>y2</code>에 의해 정의된다. </p>

<h4>polyline</h4>

<pre class="highlight"><code class="html">
<polyline points="20,20 40,25 60,40 80,120 120,140 200,180" style="fill:none;stroke:black;stroke-width:3" />
</code></pre>

<p><code>polyline</code>요소는 연결된 직선 segment의 세트에 의해 정의 된다. 
전형적으로, <code>polyline</code>요소는 open shape로 정의된다. <code>polyline</code>은 각가의 점으로 구성되며, <code>polyline</code>은 이러한 point에 대한 속성을 명시함으로써 구성된다.</p>

<blockquote>
  <p>Note: D3에서는 <code>d3.svg.line</code>이라는 paht생성자를 <code>path</code>요소와 결합하여 사용함으로써 이에대한 작업을 더 편리하게 진행할 수 있다. </p>
</blockquote>

<h4>polygon</h4>

<pre class="highlight"><code class="html">
<polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />
</code></pre>

<p><code>polygon</code>요소는 연결된 직선 세그먼트의 세트로 이루어지는 닫힌 도형을 정의한다. 다각형을 구성하는 점에 대한 속성을 사용가능 하다.</p>

<blockquote>
  <p>Note: D3에서는 <code>d3.svg.line</code>이라는 paht생성자를 <code>path</code>요소와 결합하여 사용함으로써 이에대한 작업을 더 편리하게 진행할 수 있다. <code>line</code>은 closepath인 <code>Z</code> 명령어로 닫을 수 있다. </p>
</blockquote>

<h4>text</h4>

<pre class="highlight"><code class="html">
<text x="0" y="15" fill="red">I love SVG!</text>
</code></pre>

<p><code>text</code>요소는 텍스트로 이루어져있는 그래픽 요소로 정의된다. 텍스트 요소 (위 참고 항목의 텍스트 콘텐츠는 텍스트 연산자) 문자가 렌더링되도록 정의한다. <code>x</code>,<code>y</code>요소에의해 <code>text</code>요소의 앵커 위치가 제어된다. <code>dx</code>, <code>dy</code> 속성을 사용함으로써 앵커로프터 상쇄(offset)할 수 있다. 또한, 우리는 아주 편리하게 -  글꼴의 크기를 기준으로 <code>em</code>단위를 사용하여 텍스트의 <code>margin</code>과 <code>baseline</code>을 조정할 수 있다.  </p>

<p>수평 텍스트 정렬(horizontal text alignment)은 <code>text-anchor</code>속성을 활용하여 텍스트의 정렬을 실행한다. 몇 가지 예를 살펴보도록 하자.</p>

<pre class="highlight"><code class="html">
<svg:text text-anchor="start">left-align, bottom-baseline</svg:text>
<svg:text text-anchor="middle">center-align, bottom-baseline</svg:text>
<svg:text text-anchor="end">right-align, bottom-baseline</svg:text>
<svg:text dy=".35em" text-anchor="start">left-align, middle-baseline</svg:text>
<svg:text dy=".35em" text-anchor="middle">center-align, middle-baseline</svg:text>
<svg:text dy=".35em" text-anchor="end">right-align, middle-baseline</svg:text>
<svg:text dy=".71em" text-anchor="start">left-align, top-baseline</svg:text>
<svg:text dy=".71em" text-anchor="middle">center-align, top-baseline</svg:text>
<svg:text dy=".71em" text-anchor="end">right-align, top-baseline</svg:text>
</code></pre>

<p>이에 대한 더 좋은 방법으로, SVG의  <a href="http://www.w3.org/TR/SVG/text.html#BaselineAlignmentProperties">baseline alignment properties</a>속성을 사용하는 방법이 있긴하다. 그러나, 이것은 다양한 브라우저에서 유연하게 적용하기에는 어려움이 있다.</p>

<p>폰트의 색상은 일반적으로 <code>fill</code>속성을 사용해서 지정한다. 이를 포함하여 폰트에 대한 컨트롤은 <code>font</code>, <code>font-family</code>, <code>font-size</code>을 포함하는 관련 속성을 활용하여 적용가능하다. 나아가 몇몇의 모던 브라우저에서는 <code>text-shadow</code>와 같은 기능을 지원하고 있기때문에 다양한 활용이 가능하다고 볼 수 있다.</p>

<h4>transform</h4>

<pre class="highlight"><code class="html">
<!-- svg:path d="" transform=""-->
<path d="M150 0 L75 200 L225 200 Z" />
</code></pre>

<p><code>path</code>요소는 <code>shape</code>레이아웃의 외곽선을 표현한다. 이것은 채우기(fill)이나 선 스타일 지정(stroke), 그리고 클리핑패스(cliping path)등의 기능을 적용가능하며 이 세 가지 기능을 조합해서도 적용기 가능하다.</p>

<p><code>d</code> 속성은 <code>path</code>데이터를 정의한다. 이에대해서는 몇가지 작은 명령어 (<a href="http://www.w3.org/TR/SVG/paths.html#PathData">mini-language</a>)가 존재한다.</p>

<ul>
<li><code>M</code> = moveto</li>
<li><code>L</code> = lineto</li>
<li><code>H</code> = horizontal lineto</li>
<li><code>V</code> = vertical lineto</li>
<li><code>C</code> = curveto</li>
<li><code>S</code> = smooth curveto</li>
<li><code>Q</code> = quadratic Bézier curve</li>
<li><code>T</code> = smooth quadratic Bézier curveto</li>
<li><code>A</code> = elliptical Arc</li>
<li><code>Z</code> = closepath</li>
</ul>