
<table id="meta">
  <thead><th>160421</th><th>CONVENTION</th><th>Tad Kim</th></thead>
  <tbody>
  <tr><td></td><td></td><td></td></tr>
  </tbody>
</table>

# CSS Coding Convetion

이 문서는 Colony Studio의 작업 프로세스 정립을 위해 작성되었으며, 지속적인 수정이 가능하다.

<div class="tem">
미리 일러두자면, 이 '코딩 컨벤션'이라는 작업(또는 프로세스)은 글을 작성하는 사람은 물론이고, 읽고 받아들이는 사람에게도 꽤-- 많은 에너지를 요한다. 그럼에도 불구하고 이 문서를 작성하는데에는 그 이유가 있으며, 그 내용은 [CodingCovention - Introduction](http://yumm.co.kr/blogs/asset/contents/convention/introduction)에서 확인하기 바란다.
</div>

_ _ _
## Index
이 문서는 다음과 같이 구성되어있다.

1. CSS 영문 소문자 사용
2. CSS 작성 규칙
3. 속성값 축약하기
4. 따옴표 사용 범위
5. CSS 인코딩
6. CSS 선언 타입
    - 6-1.External type
    - 6-2.Internal type
    - 6-3.Inline type
7. 한글 글꼴 선언
8. Z-INDEX 사용에 관한 규약
9. CSS 속성 선언 순서
10. Reset CSS
11. 빈 줄
12. 주석
13. 위의 모든 사항을 바탕으로 작성한 CSS 예시
14. 참고 자료




_ _ _
## 1. CSS 영문 소문자 사용
모든 속성은 영문 소문자로만 작성한다.

CSS
 <pre class="highlight"><code class="css">
.class {font-family:malgun gothic}
</code></pre>

_ _ _
## 2.CSS 작성 규칙

- 2-1. 선택자와 속성,속성값 사이 줄 바꿈은 허용하지 않는다.
- 2-2. 클래스명을 선언한 뒤 한 칸의 공백을 둔다
- 2-3. 세부 속성 간에는 공백을 두지 않는다.
- 2-4. 마지막 속성의 세미콜론(;)은 생략한다.

CSS
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

_ _ _
## 3.속성값 축약하기

CSS
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

_ _ _
## 4.따옴표 사용 범위


공백이 포함된 글꼴 이름,한글 글꼴 이름,데이터 타입, filter 속성의 파라미터 값은 작은 따옴표로 감싼다.
@charset을 선언할 때는 속성값을 큰 따옴표(“”)로 감싼다.그 외의 경우에는 따옴표를 사용하지 않는다.

CSS
 <pre class="highlight"><code class="css">
font-family:'돋움'
content:'content'
@charset "utf-8"
background:url(image.jpg)

font-family:'돋움'
content:'content'
@charset "utf-8"
background:url(image.jpg)
</code></pre>

_ _ _
## 5.CSS 인코딩


글꼴 이름이 영문이 아닐 때 브라우저에서 콘텐츠를 바르게 표시하고, HTML에서 불러온 스타일을 제대로 렌더링하려면 반드시 CSS 인코딩을 선언해야 한다.HMTL과 동일한 인코딩을 문서 첫 줄에 공백 없이 선언하고 파일을 저장 할 때는 반드시 선언한 인코딩과 동일한 인코딩을 선택한다.

CSS
 <pre class="highlight"><code class="css">
@charset "utf-8";
</code></pre>


_ _ _
## 6.CSS 선언 타입

CSS 선언 타입은 크게 세 가지로 분류하며, 용도에 맞게 사용한다.

- 6-1.External type
- 6-2.Internal type
- 6-3.Inline type


### 6-1.External type
CSS를 선언하는 가장 기본적인 방식으로, CSS 파일이 별도로 존재하는 형태이다.

CSS
 <pre class="highlight"><code class="css">
<link rel="stylesheet" type="text/css" href="../css/name.css" />
</code></pre>

### 6-2.Internal type
HTML 파일의 head 안에 스타일을 선언하는 방식으로, 단발성 페이지의 CSS 분량이 적을 때 사용한다.

CSS
 <pre class="highlight"><code class="css">
<head>
<style type="text/css">
...
</style>
</head>
</code></pre>

### 6-3 .Inline type
HTML 개별 요소에 style속성을 선언하는 방식으로 속성 값이 동적으로 변경되어야 할 때 사용한다.

CSS
 <pre class="highlight"><code class="css">
<div style="margin:10px"></div>
</code></pre>

>*주의 : @import를 통해 CSS를 로드하는 방식은 사용하지 않는다.(@import 명령은 CSS 문서에서 다른 CSS 문서를 부르는 방법이고 External type 방식은 HTML 문서에서 CSS 문서를 부르는 방법이라는 점이 다릅니다. IE 6~7 브라우저는 @import 명령을 사용하는 경우 HTML 문서를 모두 해석한 다음에 CSS 문서를 해석하는 방식으로 구현되어 있어서 사용자의 체감 성능을 떨어뜨리는 요인으로 작용하기 때문에 되도록 사용을 권장하지 않습니다.)*

_ _ _
## 7.한글 글꼴 선언


한글 글꼴을 선언할 때 한글이나 영문 이름 중 하나로만 표기하면 특정 브라우저에서 글꼴을 올바르게 출력하지 못하는 경우가 있으므로 반드시 한글과 영문 이름을 선언한다.

CSS
 <pre class="highlight"><code class="css">
font-family:'맑은 고딕','Malgun Gothic';
</code></pre>

_ _ _
## 8. Z-INDEX 사용에 관한 규약


a.z-index 사용은 10단위로 증감한다.
b.z-index의 사용은 최소 레벨 10에서 시작하고 최고 레벨 1000까지 사용 할 수 있다.
c.레이어팝업 제작 시 z-index는 1000을 최소 레벨로 한다.

_ _ _
## 9.CSS 속성 선언 순서




순서	속성	의미
-	display	표시
-	overflow	넘침
-	float	흐름
-	position	위치
-	z-index	정렬
-	width & height	크기
-	margin & padding(그룹)	간격
-	border(그룹)	보더
-	background(그룹)	배경
-	font(그룹)	폰트
-	기타	기타 속성은 순서 무관

CSS
 <pre class="highlight"><code class="css">
.dim {display:none;position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;margin:0;padding:0;background:#000;opacity:0.5;filter:alpha(opacity=50)}
</code></pre>

_ _ _
## 10.Reset CSS

 CSS
 <pre class="highlight"><code class="css">
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

_ _ _
## 11.빈 줄



의미 있는 객체를 구분할 목적으로 코드 그룹 사이에 빈 줄을 넣을 수 있다.
단 빈 줄은 한 줄을 넘지 않게 한다.

CSS
 <pre class="highlight"><code class="css">
/* 의미 있는 그룹 내용1 */
.class1 {border:1px solid #000}
--------------빈 줄--------------
/* 의미 있는 그룹 내용2 */
.class2 {border:1px solid #333}
</code></pre>

_ _ _
## 12.주석


주석 기호와 주석 내용 사이에는 반드시 공백 한 칸이 있어야 한다. 종료 주석은 사용하지 않는다.

CSS
 <pre class="highlight"><code class="css">
/* 주석 내용 */
</code></pre>

a.작성자 정보는 CSS 파일 생성 날짜, 영문 이름 이니셜, 소속 팀을 작성한다.

CSS
 <pre class="highlight"><code class="css">
/* 201?-??-?? KDY Gabia Front-end Dev */
</code></pre>

b.초기 스타일 그룹

CSS
 <pre class="highlight"><code class="css">
/* reset */
/* common */
/* layout */
</code></pre>


c.의미 있는 객체를 구분하기 위한 주석은 영역의 윗부분에 표기한다.

CSS
 <pre class="highlight"><code class="css">
/* GNB 시작 */
.gnb{}
</code></pre>


d.주석 표기 예시

CSS
 <pre class="highlight"><code class="css">
@charset "utf-8";
/* 201?-??-?? KDY Gabia Front-end Dev */

/* reset */

/* common */

/* layout */

/* skip navigation*/
</code></pre>


_ _ _
## 13.위의 모든 사항을 바탕으로 작성한 CSS 예시

CSS
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

_ _ _
## 14. 참고자료

- [가비아 기술블로그](http://gabia-frontend-dev.com/wordpress/?cat=4 "가비아 기술블로그 링크")