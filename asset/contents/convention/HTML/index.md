<table id="meta">
  <thead><th>160421</th><th>CONVENTION</th><th>Tad Kim</th></thead>
  <tbody>
  <tr><td></td><td></td><td></td></tr>
  </tbody>
</table>

# 코딩컨벤션 - HTML

이 문서는 Colony Studio의 작업 프로세스 정립을 위해 작성되었으며, 지속적인 수정이 가능하다.

<div class="tem">
미리 일러두자면, 이 '코딩 컨벤션'이라는 작업(또는 프로세스)은 글을 작성하는 사람은 물론이고, 읽고 받아들이는 사람에게도 꽤-- 많은 에너지를 요한다. 그럼에도 불구하고 이 문서를 작성하는데에는 그 이유가 있으며, 그 내용은 [CodingCovention - Introduction](http://yumm.co.kr/blogs/asset/contents/convention/introduction)에서 확인하기 바란다.
</div>

*또한 이 글의 초기버전(0.1)은 [가비아 프론트엔드 기술블로그](http://gabia-frontend-dev.com/wordpress/?cat=4)의 코딩컨벤션 중 일부를 발췌하여 작성되었기 때문에, 외부로 이 내용을 배포하고자하는 경우에는 어떤식으로라든지 내용을 새로 작성하거나, 해당 블로그에 사용 동의 및, 출처 표기작업을 해야한다.*

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

1.DTD

DTD는 문서 형식 정의(Document Type Definition)를 뜻하는 용어로 문서 타입의 (X)HTML의 버전과 문서형을 지정한다. 호환성 문제와 같은 예외 사항을 제외하고 W3C의 최신 문서 규격인 HTML5를 권장한다.

HTML 4.01 – Transitional

XHTML
<pre><code>
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;
</
XHTML 1.0 – Transitional

XHTML
<pre><code>
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
1
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
HTML5 (권장)

XHTML
<pre><code>
&lt;!DOCTYPE html&gt;
2.lang 설정

lang 설정은 User Agent가 언어를 올바로 해석할 수 있게 도와주며, 검색과 음성 장치에 활용된다.속성은 ISO 639-1에서 지정한 언어 코드를 속성 값으로 사용하며 한국어는 ko, 영어는 en, 중국어는 zh, 일본어는 ja다.

XHTML
<pre><code>
&lt;html lang="ko"&gt;
1
&lt;html lang="ko"&gt;
3.인코딩 선언

인코딩 설정은 DB의 인코딩 형식과도 관련이 있으므로 프로젝트를 시작하기 전에 개발자와 협의하여 결정하나 기본적인 인코딩은 utf-8로 한다.

XHTML
<pre><code>
&lt;meta charset="utf-8"&gt;
1
&lt;meta charset="utf-8"&gt;
4.X-UA-Compatible

최신모드로 지정된 DOCTYPE에 상관없이 IE8 이상 버전에서 항상 최신 표준 모드로 렌더링한다.

XHTML
<pre><code>
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
1
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
5.뷰포트

뷰포트는 화면에서 보이는 영역, 즉 사용자가 콘텐츠를 볼 수 있는 영역을 뜻한다. 일반 데스크탑에서는 브라우저 창의 크기를 늘리고 줄여 뷰포트의 크기를 변화 시킬 수 있지만 모바일 브라우저에서는 그러한 행위가 불가능고 디바이스마다 해상도가 다르기 때문에 뷰포트 속성을 사용하여 웹 페이지 전체 크기와 브라우저 창에 보이는 부분을 설정할 수 있다.

XHTML
<pre><code>
&lt;meta name="viewport" content="width=960"&gt;
1
&lt;meta name="viewport" content="width=960"&gt;
What Is the Viewport?

6.title

타이틀은 웹 페이지의 제목으로 웹 브라우저의 가장 위에 표시되며 스크린 리더와 점자 정보 단말기가 웹 페이지를 탐색할 때 가장 먼저 접근하는 콘텐츠이다.

XHTML
<pre><code>
&lt;title&gt;가비아, 비즈니스를 위한 IT : 도메인, 호스팅, IDC, 기업솔루션, 웹사이트, 쇼핑몰&lt;/title&gt;
1
&lt;title&gt;가비아, 비즈니스를 위한 IT : 도메인, 호스팅, IDC, 기업솔루션, 웹사이트, 쇼핑몰&lt;/title&gt;
7.favicon

즐겨찾기(favorites)와 아이콘(icon)의 합성어로, 주소창에 조그만 아이콘으로 표시되어 있다. 아이콘의 크기는 레티나 디스플레이 대응을 위해 32×32로 하며 파일명은 favicon.ico로 한다.

favicon-gabia

XHTML
<pre><code>
&lt;link rel="shortcut icon" href="favicon.ico" /&gt;
1
&lt;link rel="shortcut icon" href="favicon.ico" /&gt;
8.CSS External load

CSS 선언은 External type으로 하며 속성은 rel,type,href 순서로 선언한다.

XHTML
<pre><code>
&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;
1
&lt;link rel="stylesheet" type="text/css" href="style.css"&gt;
9.검색엔진최적화 (meta keyword, meta description)

검색엔진최적화(SEO)는 검색 엔진에서 검색했을 때 상위에 나타나도록 관리하는 것이다.meta keyword와 meta description의 삽입은 검색 엔진 최적화 방법 중 하나로 자신의 사이트를 대표할 수 있는 핵심적인 키워드를 두세 개 선택해 이를 사이트에 삽입하는 것이다.

XHTML
<pre><code>
&lt;meta name="keywords" content="가비아, 도메인, 도메인 등록, 호스팅, 웹호스팅, 웹메일호스팅, 동영상호스팅, 이미지호스팅, 쇼핑몰호스팅, 서버호스팅, 단독서버, 코로케이션, 클라우드, 홈페이지 제작, 쇼핑몰 제작, 홈페이지 유지보수"&gt;
&lt;meta name="description" content="도메인 등록, 도메인 연장, 기관이전, 도메인 부가서비스 제공. 웹호스팅, 웹메일호스팅, 동영상호스팅, 이미지호스팅, 쇼핑몰호스팅, 서버호스팅, 단독서버, 코로케이션, 클라우드 등 저렴한 호스팅 제공. 홈페이지 제작, 쇼핑몰 제작, 공공기관 홈페이지 구축 및 컨설팅, 홈페이지 유지보수 등 홈페이지 제작 전문 업체"&gt;
1
2
&lt;meta name="keywords" content="가비아, 도메인, 도메인 등록, 호스팅, 웹호스팅, 웹메일호스팅, 동영상호스팅, 이미지호스팅, 쇼핑몰호스팅, 서버호스팅, 단독서버, 코로케이션, 클라우드, 홈페이지 제작, 쇼핑몰 제작, 홈페이지 유지보수"&gt;
&lt;meta name="description" content="도메인 등록, 도메인 연장, 기관이전, 도메인 부가서비스 제공. 웹호스팅, 웹메일호스팅, 동영상호스팅, 이미지호스팅, 쇼핑몰호스팅, 서버호스팅, 단독서버, 코로케이션, 클라우드 등 저렴한 호스팅 제공. 홈페이지 제작, 쇼핑몰 제작, 공공기관 홈페이지 구축 및 컨설팅, 홈페이지 유지보수 등 홈페이지 제작 전문 업체"&gt;
10.홈 화면에 추가 (선택 사항)

XHTML
<pre><code>
&lt;link rel="apple-touch-icon" href="apple-touch-icon.png" /&gt;
1
&lt;link rel="apple-touch-icon" href="apple-touch-icon.png" /&gt;
홈 화면에 추가는 모바일 홈 화면에 즐겨찾기 버튼을 추가할 수 있는 기능이다.해당 아이콘은 레티나 디스플레이의 대응을 위하여 114×114로 제작한다. 일반 데스크탑 웹 사이트 제작 시에는 선택 사항이나 모바일 전용 웹 사이트 제작 시에는 필수로 삽입한다.

gabia-apple-touch

11.페이스북 공유하기 설정 (선택 사항)

XHTML
<pre><code>
&lt;meta property="og:url" content="https://www.gabia.com"&gt;
&lt;meta property="og:type" content="website"&gt;
&lt;meta property="og:title" content="가비아, IT 세상을 가볍게 하는 힘"&gt;
&lt;meta property="og:image" content="image.png"&gt;
&lt;meta property="og:description" content="Site DESCRIPTION"&gt;
1
2
3
4
5
&lt;meta property="og:url" content="https://www.gabia.com"&gt;
&lt;meta property="og:type" content="website"&gt;
&lt;meta property="og:title" content="가비아, IT 세상을 가볍게 하는 힘"&gt;
&lt;meta property="og:image" content="image.png"&gt;
&lt;meta property="og:description" content="Site DESCRIPTION"&gt;
이미지나 텍스트 등이 설정한대로 나오지 않을 때 페이스북 디버그 사이트에서 해당 사이트의 디버깅을 해주어야 한다.

12.javascript External load

자바스크립트는 External type으로 외부에서 로드하며 속성은 type,src 순서로 작성한다.

XHTML
<pre><code>
&lt;script type="text/javascript" src="script.js"&gt;&lt;/script&gt;
1
&lt;script type="text/javascript" src="script.js"&gt;&lt;/script&gt;
13.위의 항목들을 바탕으로 head 태그 내에서 사용하는 요소 나열

meta,title,link,script 순서로 선언한다.

XHTML
<pre><code>
&lt;!doctype html&gt;
&lt;html lang="ko"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;!-- X-UA-Compatible --&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
&lt;!-- 뷰포트 --&gt;
&lt;meta name="viewport" content="width=960"&gt;
&lt;!-- 검색엔진최적화 --&gt;
&lt;meta name="description" content="도메인 등록, 도메인 연장, 기관이전, 도메인 부가서비스 제공. 웹호스팅, 웹메일호스팅, 동영상호스팅, 이미지호스팅, 쇼핑몰호스팅, 서버호스팅, 단독서버, 코로케이션, 클라우드 등 저렴한 호스팅 제공. 홈페이지 제작, 쇼핑몰 제작, 공공기관 홈페이지 구축 및 컨설팅, 홈페이지 유지보수 등 홈페이지 제작 전문 업체"&gt;
&lt;meta name="keywords" content="가비아, 도메인, 도메인 등록, 호스팅, 웹호스팅, 웹메일호스팅, 동영상호스팅, 이미지호스팅, 쇼핑몰호스팅, 서버호스팅, 단독서버, 코로케이션, 클라우드, 홈페이지 제작, 쇼핑몰 제작, 홈페이지 유지보수"&gt;
&lt;!-- 페이스북 공유하기 설정 --&gt;
&lt;meta property="og:url" content="URL"&gt;
&lt;meta property="og:type" content="website"&gt;
&lt;meta property="og:title" content="TITLE"&gt;
&lt;meta property="og:image" content="IMAGE - URL"&gt;
&lt;meta property="og:description" content="DESCRIPTION"&gt;
&lt;title&gt;가비아, IT 세상을 가볍게 하는 힘 : 도메인, 호스팅, IDC, 기업솔루션, 웹사이트, 쇼핑몰&lt;/title&gt;
&lt;!-- 파비콘--&gt;
&lt;link rel="shortcut icon" href="favicon.ico" /&gt;
&lt;!-- 홈 화면에 추가 --&gt;
&lt;link rel="apple-touch-icon" href="apple-touch-icon.png" /&gt;
&lt;link rel="stylesheet" type="text/css" href="style.css" /&gt;
&lt;script type="text/javascript" src="script.js"&gt;&lt;/script&gt;
&lt;/head&gt;
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
&lt;!doctype html&gt;
&lt;html lang="ko"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;!-- X-UA-Compatible --&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
&lt;!-- 뷰포트 --&gt;
&lt;meta name="viewport" content="width=960"&gt;
&lt;!-- 검색엔진최적화 --&gt;
&lt;meta name="description" content="도메인 등록, 도메인 연장, 기관이전, 도메인 부가서비스 제공. 웹호스팅, 웹메일호스팅, 동영상호스팅, 이미지호스팅, 쇼핑몰호스팅, 서버호스팅, 단독서버, 코로케이션, 클라우드 등 저렴한 호스팅 제공. 홈페이지 제작, 쇼핑몰 제작, 공공기관 홈페이지 구축 및 컨설팅, 홈페이지 유지보수 등 홈페이지 제작 전문 업체"&gt;
&lt;meta name="keywords" content="가비아, 도메인, 도메인 등록, 호스팅, 웹호스팅, 웹메일호스팅, 동영상호스팅, 이미지호스팅, 쇼핑몰호스팅, 서버호스팅, 단독서버, 코로케이션, 클라우드, 홈페이지 제작, 쇼핑몰 제작, 홈페이지 유지보수"&gt;
&lt;!-- 페이스북 공유하기 설정 --&gt;
&lt;meta property="og:url" content="URL"&gt;
&lt;meta property="og:type" content="website"&gt;
&lt;meta property="og:title" content="TITLE"&gt;
&lt;meta property="og:image" content="IMAGE - URL"&gt;
&lt;meta property="og:description" content="DESCRIPTION"&gt;
&lt;title&gt;가비아, IT 세상을 가볍게 하는 힘 : 도메인, 호스팅, IDC, 기업솔루션, 웹사이트, 쇼핑몰&lt;/title&gt;
&lt;!-- 파비콘--&gt;
&lt;link rel="shortcut icon" href="favicon.ico" /&gt;
&lt;!-- 홈 화면에 추가 --&gt;
&lt;link rel="apple-touch-icon" href="apple-touch-icon.png" /&gt;
&lt;link rel="stylesheet" type="text/css" href="style.css" /&gt;
&lt;script type="text/javascript" src="script.js"&gt;&lt;/script&gt;
&lt;/head&gt;
작성일자 2015년 8월 16일카테고리 CONVENTIONLeave a comment on 코딩 컨벤션 – HTML
페이징 – code snippet


작성일자 2015년 6월 30일카테고리 CONVENTIONLeave a comment on 페이징 – code snippet
공통 스타일시트 – Global CSS
&lt;pre class="highlight"&gt;&lt;code class="css"&gt;
전역으로 사용하기 위한 Global CSS입니다.
프로젝트에 따라 선택적 사용이 가능하며 Global CSS에 새로운 룰을 원할 경우
프로젝트 멤버의 동의를 얻어 추가하거나 삭제할 수 있습니다.

CSS
&lt;pre class="highlight"&gt;&lt;code class="css"&gt;
@charset "utf-8";

/* global */
.skip_navigation {overflow:hidden;position:absolute;left:-9999px;width:0;height:1px;margin:0;padding:0}
.clear_fix:after {display:block;content:'';clear:both}
.hide {display:none}
.f_l {float:left}
.f_r {float:right}
.align_center {text-align:center}
.font_bold {font-weight:bold}
.blind {display:block;overflow:hidden;position:absolute;left:-9999px;width:1px;height:1px;font-size:0;line-height:0;text-indent:-9999px}
.sp_image {background:url() no-repeat} /* 공통으로 사용할 이미지(sprite images) */
1
2
3
4
5
6
7
8
9
10
11
12
@charset "utf-8";

/* global */
.skip_navigation {overflow:hidden;position:absolute;left:-9999px;width:0;height:1px;margin:0;padding:0}
.clear_fix:after {display:block;content:'';clear:both}
.hide {display:none}
.f_l {float:left}
.f_r {float:right}
.align_center {text-align:center}
.font_bold {font-weight:bold}
.blind {display:block;overflow:hidden;position:absolute;left:-9999px;width:1px;height:1px;font-size:0;line-height:0;text-indent:-9999px}
.sp_image {background:url() no-repeat} /* 공통으로 사용할 이미지(sprite images) */
작성일자 2015년 5월 20일카테고리 CONVENTION태그 gabia, global, global css, 가비아, 가비아 프론트엔드개발팀, 코딩컨벤션, 프론트엔드개발Leave a comment on 공통 스타일시트 – Global CSS
&lt;pre class="highlight"&gt;&lt;code class="css"&gt;공통 스타일시트 – Reset CSS
&lt;pre class="highlight"&gt;&lt;code class="css"&gt;
크로스 브라우징을 위해 각 태그 관련 속성을 초기화하는 CSS입니다.
CSS를 새롭게 작성할 때는 아래 Reset CSS를 기본으로 하여 반드시 문서 처음에 삽입하여야 하며 작성자는 작성자 이름과 이메일 주소를 문서 최상단에 기입하여야 합니다.

CSS
&lt;pre class="highlight"&gt;&lt;code class="css"&gt;
@charset "utf-8";
/* Gabia Front-end Dev, KDY(kimdy@gabia.com) */

/* reset */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {margin:0;padding:0}
fieldset,img {border:0 none}
dl,ul,ol,menu,li {list-style:none}
blockquote, q {quotes: none}
blockquote:before, blockquote:after,q:before, q:after {content:'';content:none}
input,select,textarea,button {vertical-align:middle}
button {border:0 none;background-color:transparent;cursor:pointer}
body {background:#fff}
body,th,td,input,select,textarea,button {font-size:12px;line-height:1.5;font-family:'돋움',dotum,sans-serif;color:#333}
a {color:#333;text-decoration:none}
a:active, a:hover {text-decoration:underline}
address,caption,cite,code,dfn,em,var {font-style:normal;font-weight:normal}
table {border-collapse:collapse;border-spacing:0}

@charset "utf-8";
/* Gabia Front-end Dev, KDY(kimdy@gabia.com) */

/* reset */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {margin:0;padding:0}
fieldset,img {border:0 none}
dl,ul,ol,menu,li {list-style:none}
blockquote, q {quotes: none}
blockquote:before, blockquote:after,q:before, q:after {content:'';content:none}
input,select,textarea,button {vertical-align:middle}
button {border:0 none;background-color:transparent;cursor:pointer}
body {background:#fff}
body,th,td,input,select,textarea,button {font-size:12px;line-height:1.5;font-family:'돋움',dotum,sans-serif;color:#333}
a {color:#333;text-decoration:none}
a:active, a:hover {text-decoration:underline}
address,caption,cite,code,dfn,em,var {font-style:normal;font-weight:normal}
table {border-collapse:collapse;border-spacing:0}


