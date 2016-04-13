
#Convention - CSS


## 1. CSS 영문 소문자 사용

모든 속성은 영문 소문자로만 작성한다.

<pre class="highlight"><code class="css">
.class {font-family:malgun gothic}
</code></pre>


## 2.CSS 작성 규칙

1. 선택자와 속성,속성값 사이 줄 바꿈은 허용하지 않는다.
2. 클래스명을 선언한 뒤 한 칸의 공백을 둔다
3. 세부 속성 간에는 공백을 두지 않는다.
4. 마지막 속성의 세미콜론(;)은 생략한다.

<pre class="highlight"><code class="css">
.class{
overflow:hidden;
width:978px;
clear:both;
} (x)
.class{overflow:hidden;width:978px;clear:both;} (x)
.class {overflow:hidden; width:978px; clear:both;} (x)
.class {overflow:hidden;width:978px;clear:both;} (x)
.class {overflow:hidden;width:978px;clear:both} (o)
</code></pre>


## 3. 속성 값 축약

<pre class="highlight"><code class="css">
.class {color:#555555} (x)
.class {color:#555} (o)
.class {color:#ff4400} (x)
.class {color:#f40} (o)
.class {background-position:left center} (x)
.class {background-position:0 50%} (o)
.class {top:0px} (x)
.class {top:0} (o)
.class {padding:20px 20px 20px 20px} (x)
.class {padding:20px} (o)
.class {margin:0 auto 0 auto} (x)
.class {margin:0 auto} (o)
.class {padding:20px 30px 50px 30px} (x)
.class {padding:20px 30px 50px} (o)
</code></pre>


## 4.따옴표 사용 범위

공백이 포함된 글꼴 이름,한글 글꼴 이름,데이터 타입, filter 속성의 파라미터 값은 작은 따옴표로 감싼다.
@charset을 선언할 때는 속성값을 큰 따옴표(“”)로 감싼다.그 외의 경우에는 따옴표를 사용하지 않는다.

<pre class="highlight"><code class="css">
font-family:'돋움'
content:'content'

@charset "utf-8"
background:url(image.jpg)
</code></pre>

## 5.CSS 인코딩

- 목적 : 글꼴 이름이 영문이 아닐 때 브라우저에서 콘텐츠를 바르게 표시하기위해 - HTML에서 불러온 스타일을 제대로 렌더링하려면 반드시 CSS 인코딩을 선언해야 한다.
- 방법 : HMTL과 동일한 인코딩을 문서 첫 줄에 공백 없이 선언하고 파일을 저장 할 때는 반드시 선언한 인코딩과 동일한 인코딩을 선택한다.

<pre class="highlight"><code class="css">
@charset "utf-8"
</code></pre>




## 6.CSS 선언 타입

CSS 선언 타입은 크게 세 가지로 분류하며, 용도에 맞게 사용한다.

1. External type : CSS를 선언하는 가장 기본적인 방식으로, CSS 파일이 별도로 존재하는 형태이다.

<pre class="highlight"><code class="css">
<link rel="stylesheet" type="text/css" href="../css/name.css" />
</code></pre>

2. Internal type : HTML 파일의 head 안에 스타일을 선언하는 방식으로, 단발성 페이지의 CSS 분량이 적을 때 사용한다.

<pre class="highlight"><code class="html">
<head>
<style type="text/css">
...
</style>
</head>
</code></pre>

3. Inline type : HTML 개별 요소에 style속성을 선언하는 방식으로 속성 값이 동적으로 변경되어야 할 때 사용한다.

<pre class="highlight"><code class="html">
<div style="margin:10px"></div>
</code></pre>






## 7.한글 글꼴 선언

한글 글꼴을 선언할 때 한글이나 영문 이름 중 하나로만 표기하면 특정 브라우저에서 글꼴을 올바르게 출력하지 못하는 경우가 있으므로 반드시 한글과 영문 이름을 선언한다.

<pre class="highlight"><code class="css">
font-family:'맑은 고딕','Malgun Gothic';
</code></pre>


## 8.Z-INDEX 사용에 관한 규약

1. z-index 사용은 10단위로 증감한다.
2. z-index의 사용은 최소 레벨 10에서 시작하고 최고 레벨 1000까지 사용 할 수 있다.
3. 레이어팝업 제작 시 z-index는 1000을 최소 레벨로 한다.

<table id="meta">
    <thead><th>순서</th><th>속성</th><th>의미</th></thead>
    <tbody>
    <tr><td>1</td><td>display</td><td>표시</td></tr>
    <tr><td>2</td><td>overflow</td><td>넘침</td></tr>
    <tr><td>3</td><td>float</td><td>흐름</td></tr>
    <tr><td>4</td><td>position</td><td>위치</td></tr>
    <tr><td>5</td><td>z-index</td><td>정렬</td></tr>
    <tr><td>6</td><td>width&height</td><td>크기</td></tr>
    <tr><td>7</td><td>margin&padding</td><td>간격</td></tr>
    <tr><td>8</td><td>border(그룹)</td><td>보더</td></tr>
    <tr><td>9</td><td>background(그룹)</td><td>배경</td></tr>
    <tr><td>10</td><td>font(그룹)</td><td>폰트</td></tr>
    <tr><td>11</td><td>기타</td><td>기타 속성은 순서 무관</td></tr>
    </tbody>
</table>



## 10.Reset CSS

크로스브라우징을 위해 각 태그 관련 속성을 초기화 시켜주는 CSS


<pre class="highlight"><code class="css">
/* reset */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {margin:0;padding:0}
fieldset,img {border:0 none}
dl,ul,ol,menu,li {list-style:none}
blockquote, q {quotes: none}
blockquote:before, blockquote:after,q:before, q:after {content:'';content:none}
input,select,textarea,button {vertical-align:middle}
button {border:0 none;background-color:transparent;cursor:pointer}
body {background:#fff}
body,th,td,input,select,textarea,button {font-size:12px;line-height:1.5;font-family:'맑은 고딕','Malgun Gothic','돋움',dotum,Helvetica,'Apple SD Gothic Neo',Sans-serif;color:#333}
a {color:#333;text-decoration:none}
a:active, a:hover {text-decoration:underline}
address,caption,cite,code,dfn,em,var {font-style:normal;font-weight:normal}
table {border-collapse:collapse;border-spacing:0}
</code></pre>


## 11.빈 줄

의미 있는 객체를 구분할 목적으로 코드 그룹 사이에 빈 줄을 넣을 수 있다.
단 빈 줄은 한 줄을 넘지 않게 한다.

<pre class="highlight"><code class="css">
/* 의미 있는 그룹 내용1 */
.class1 {border:1px solid #000}
--------------빈 줄--------------
/* 의미 있는 그룹 내용2 */
.class2 {border:1px solid #333}
</code></pre>


## 12.주석

주석 기호와 주석 내용 사이에는 반드시 공백 한 칸이 있어야 한다. 종료 주석은 사용하지 않는다.

**12-1 기본 주석 내용**

<pre class="highlight"><code class="css">
/* 주석 내용 */
</code></pre>

**12-2 작성자 정보**
<pre class="highlight"><code class="css">
/* 201?-??-?? KDY Gabia Front-end Dev */
</code></pre>

**12-3 초기 스타일 그룹**
<pre class="highlight"><code class="css">
/* reset */
/* common */
/* layout */
</code></pre>

**12-4 의미있는 객체 그룹**
<pre class="highlight"><code class="css">
/* GNB 시작 */
.gnb{}
</code></pre>

**12-5 주석 표기 예시**
<pre class="highlight"><code class="css">
@charset "utf-8";
/* 201?-??-?? KDY Gabia Front-end Dev */
 
/* reset */
 
/* common */
 
/* layout */
 
/* skip navigation*/
</code></pre>



**12-6 위의 모든 상황을 바탕으로한 주석 예시**
<pre class="highlight"><code class="css">
@charset "utf-8";
/* 201?-??-?? KDY Gabia Front-end Dev */
 
/* reset */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {margin:0;padding:0}
fieldset,img {border:0 none}
dl,ul,ol,menu,li {list-style:none}
blockquote,q {quotes:none}
blockquote:before, blockquote:after,q:before, q:after {content:'';content:none}
input,select,textarea,button {vertical-align:middle}
button {border:0 none;background-color:transparent;cursor:pointer}
body {background:#fff}
body,th,td,input,select,textarea,button {font-size:12px;line-height:1.5;font-family:'맑은고딕',malgun gothic,'돋움',Dotum,'Apple SD Gothic Neo',Helvetica,sans-serif;color:#333}
a {color:#333;text-decoration:none}
a:active,a:hover {text-decoration:underline}
address,caption,cite,code,dfn,em,var {font-style:normal;font-weight:normal}
table {border-collapse:collapse;border-spacing:0}
 
/* global */
#skipNavigation {overflow:hidden;position:absolute;left:-9999px;width:0;height:1px;margin:0;padding:0} //skip navigation
.clear_fix:after {display:block;content:'';clear:both}
.hide {display:none}
.f_l {float:left}
.f_r {float:right}
.align_center {text-align:center}
.blind {display:block;overflow:hidden;position:absolute;left:-9999px;width:1px;height:1px;font-size:0;line-height:0;text-indent:-9999px}
.dim {display:none;position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;margin:0;padding:0;background:#000;opacity:0.5;filter:alpha(opacity=50)}
 
/* layout */
#wrap {}
#header {}
#container {}
#contents {}
#footer {}
 
/* sprite */
.spr_naming1 {display:block;background:url() no-repeat}
</code></pre>


## State Selector 사용
스마트폰은 터치를 사용 -> `hover` 선택자와 `active` 선택자를 사용할 때 주의
* hover 선택자 : 마우스가 링크 위에 있을 떄 / active 선택자 : 마우스가 링크를 클릭했을 때
