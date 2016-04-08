
# Syntax

>스타일가이드가 가장 먼저 해야 할 일은 우리 코드가 어떻게 보이길 원하는지를 묘사하는 것입니다.

- 여러 개발자가 하나의 프로젝트에 모인다면, 코드 스타일로 충돌하는건 시간문제.
- 일관성을 고취하는 코드 작성은 충돌방지 및 유지보수에 도우밍 된다.

대략, 우리가 원하는 것은 (뻔뻔스럽게도 [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)에서 영감을 얻은) 다음과 같습니다:

* ~~탭 대신 스페이스 두 칸 (2) 들여쓰기;~~
    * **Colony에서틑 TAB 으로 들여쓰기를 한다.**[2016.4.4, 김태경 정유미]
* 이상적인 행의 너비 : 80 글자;
* 공백의 의미 있는 사용.

결론부터 말하자면, `Sass`는 "파일구조에 대한 천하통일"을 하자는게 아니다. `Sass`는 도구일 뿐이다.

###  Syntax - encoding

문자 인코딩과 관련한 잠재적인 문제를 피하기 위해서는, [메인 스타일시트](#main-)에서 `@charset` 지시어를 사용해 [UTF-8](http://en.wikipedia.org/wiki/UTF-8) 인코딩을 강제하는 것이 강력하게 권장됨. 이 지시어가 스타일시트의 가장 첫 번째 요소이고 어떤 종류의 문자도 앞에 오지 않도록 해야한다.

< pre class="highlight"><code class="css">
@charset utf-8;
</code></pre>

### Quotation

* CSS, Sass에서 문자열이 따옴표없이도 기능적으로는 문제가 없음.
* Sass에서는  **문자열은 언제나 작은 따옴표(`'`)로 감싸져야한다**
    * 색 이름은 따옴표가 없으면 색으로 취급되는데, 이는 심각한 문제로 이어질 수 있다;
    * 대부분의 구문 강조기는 따옴표 없는 문자열을 지원하지 못할 것이다;
    * 전반적인 가독성에 도움이 된다;
    * 문자열을 따옴표로 감싸지 않을 적절한 이유가 없다.

## Numbers

Sass에서 숫자란, 단위가 없는 숫자에서부터 길이, 기간, 빈도, 각도 등에 이르기까지 모든 것을 포함하는 데이터 타입

### Zero

* 숫자는 1보다 작은 소수 앞에 앞장서는 영을 표기
* 뒤따르는 영은 절대 표기 하지 않는다.

{% include snippets/syntax/07/index.html %}

### Unit

* 길이를 다룰 때, `0` 값은 절대로 단위를 가져선 안 된다.

<pre class="highlight"><code>
// Yep
$length: 0;

// Nope
$length: 0em;
</code></pre>

* 단위를 숫자에 붙이기 위해서는, 이 숫자에 *1 단위*를 곱한다.


<pre class="highlight"><code>
$value: 42;

// Yep
$length: $value * 1px;

// Nope
$length: $value + px;

</code></pre>


>*0 단위*를 더하는 것도 역시 같은 결과를 내긴 하지만, *0 단위*를 더하는 것은 약간 혼란스러울 수 있기 때문에 앞서 언급한 방법을 추천합니다. 사실, 숫자를 다른 호환되는 단위로 변환하려고 할 때, 0을 더하는 것은 효과가 없습니다.

* 단위를 문자열로서 더하는 것은 좋은 방법이 아니다.

값의 단위를 제거하기 위해서는, *그 종류의 한 단위*로 나누어야 합니다.


<pre class="highlight"><code>
$length: 42px;
// Yep
$value: $length / 1px;

// Nope
$value: str-slice($length + unquote(''), 1, 2);
</code></pre>

>단위를 문자열로서 숫자에 덧붙이면 결과물은 문자열이 되며, 그 값으로 더이상 연산을 할 수 없습니다. 숫자의 숫자 부분을 단위에서 잘라내면 그 결과 역시 문자열이 됩니다. 이것은 여러분이 원하는 것이 아닙니다.

### Operation

**최상위 숫자 계산은 언제나 괄호로 감싸져야 합니다**. 이 요건은 가독성을 향상시킬 뿐만 아니라, Sass가 괄호 안의 수치를 계산하도록 강제함으로써 일부 예외적인 상황을 방지합니다.


<pre class="highlight"><code>
// Yep
.foo {
  width: (100% / 3);
}

// Nope
.foo {
  width: 100% / 3;
}
</code></pre>

### Magic Numbers

"매직 넘버"는 *익명의 숫자 상수*를 일컫는 [전통적인 프로그래밍 용어](http://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants)이다. 기본적으로, 이 숫자는 어쩌다보니 *맞아떨어지지만*™ 어떤 논리적인 설명과도 관련되지 않은 임의의 숫자를 말한다.

말할 것도 없이 **매직 넘버는 역병 같은 존재이며 무슨 수를 써서라도 피해야 합니다**.

왜 매직넘버가 효과를 내는지에 대한 합리적인 설명을 찾을 수 없을 때는, 협업자를 위한 주석을 달아두자

* 어떻게 거기에 도달했는지
* 왜 효과를 낸다고 생각하는지

<pre class="highlight"><code>
 * 1. 매직 넘버. `.foo`의 상단을 부모에 맞춰 정렬시키기 위해 찾은 값 중 가장
 * 낮은 값이다. 가능하다면, 적절하게 고쳐야 할 것.
 */
.foo {
  top: 0.327em; /* 1 */
}
</code></pre>

###### 참고

* [Use Lengths, Not Strings](http://hugogiraudel.com/2013/09/03/use-lengths-not-strings/)
* [Correctly Adding Unit to Number](http://css-tricks.com/snippets/sass/correctly-adding-unit-number/)
* [Magic Numbers in CSS](http://css-tricks.com/magic-numbers-in-css/)
* [Sassy-Math](https://github.com/at-import/sassy-math)


_ _ _

## CSS 규칙

**CSS 작성 가이드라인 문서 - 우리는 참고만?**
> *우리 스튜디오는 webstrom의 'code style' tool을 활용하여, 대략적인 CSS규칙을 통합할 것. 다만, 협업자의 코드를 읽는 시점에서의 불편함을 해소하기 위해서는 어느정도의 코딩컨벤션 마련이 불가피해 보인다. 따라서, 이에대해서는 아래 문서를 어느정도 참고하되, 매몰되지 않는 정도의 코딩컨벤션을 작성하고 - 유지할 필요가 있다.(16.4.5 tadkim)*
* (적어도, [CSS Guidelines](http://cssguidelin.es/#anatomy-of-a-ruleset)을 포함한 대부분의 가이드라인에 따르면 이렇다):
    * 관련된 선택자는 같은 줄에; 관련 없는 선택자는 새 줄에;
    * 여는 중괄호(`{`)는 마지막 선택자와 스페이스 한 칸의 간격을 둔다;
    * 각각의 선언은 저마다 새 줄을 차지한다;
    * 콜론(`:`) 뒤에는 스페이스 한 칸을 둔다;
    * 모든 선언의 끝은 세미콜론(`;`)으로 마무리한다;
    * 닫는 중괄호(`}`)는 새 줄을 차지한다;
    * 닫는 중괄호(`}`) 뒤에 새 줄.

보기:

<pre class="highlight"><code class="css">
// Yep
.foo, .foo-bar,
.baz {
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

// Nope
.foo,
.foo-bar, .baz {
    display: block;
    overflow: hidden;
</code></pre>

**CSS와 관련된 가이드라인에 대해 함께 생각해보아야 할 것들.**

* 지역 변수는 어떤 선언보다 먼저 선언되어야 하며, 새 줄 하나로 다른 선언들과 간격을 둔다;
* `@content`가 없는 믹스인 호출은 다른 선언보다 앞에 위치한다;
* 내포된 선택자는 언제나 새 줄 뒤에 온다;
* `@content`를 가진 믹스인 호출은 내포된 선택자보다 뒤에 위치한다;
* 닫는 중괄호(`}`) 앞에는 새 줄이 없어야 한다.

보기:
<pre class="highlight"><code class="css">
.foo, .foo-bar,
.baz {
  $length: 42em;

  @include ellipsis;
  @include size($length);
  display: block;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    color: red;
  }

  @include respond-to('small') {
    overflow: visible;
  }
}
</pre></code>

###### 참고

* [Anatomy of a Ruleset](http://cssguidelin.es/#anatomy-of-a-ruleset)

## 선언 정렬

**CSS 선언을 정렬은 마치,  "AB TEST 느낌."**

* 알파벳 순서
* 타입별 정리
    * ex) 유형 별로 정렬 : (position, display, colors, font, 기타 등등…).

<pre class="highlight"><code class="css">
.foo {
  background: black;
  bottom: 0;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  height: 100px;
  overflow: hidden;
  position: absolute;
  right: 0;
  width: 100px;
}
</code></pre>


반면, 유형별로 속성을 정렬하는 것은 아주 타당합니다. 모든 폰트 관련 선언들이 한데 모이고, `top`과 `bottom`은 재결합하며 규칙들을 보면 마치 짧은 이야기를 읽는 느낌입니다. 그러나 [Idiomatic CSS](https://github.com/necolas/idiomatic-css)와 같은 관례를 고수하지 않는 한 이 방식은 여러가지로 해석될 수 있습니다. `white-space`는 어디로 가야 할까요: 폰트 혹은 디스플레이? `overflow`는 정확히 어디에 속할까요? 그룹 내에서 속성들의 순서는 어떻게 되어야 할까요(역설적이게도, 알파벳순으로 정렬할 수도 있겠죠)?


<pre class="highlight"><code class="css">
.foo {
  height: 100px;
  width: 100px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 0;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
</code></pre>

유형별 정렬의 다른 흥미로운 하위 갈래로 [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)라는 것이 있는데, 이것 역시 꽤 많이 사용되는 듯 합니다. 기본적으로, Concentric CSS는 순서를 정의하기 위해 박스 모델에 의존합니다: 바깥쪽에서 출발해서, 안쪽으로 들어오게 되죠.

<pre class="highlight"><code class="css">
.foo {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  bottom: 0;
  background: black;
  overflow: hidden;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}
</code></pre>

CSS TRICK 페이지에 따르면 현재 개발자들의 사용방식은 다음과 같다.
 * 유형별 : 45% 이상
 * 임의정렬 : 39% 이상
 * 알파벳 순 : 14%;



{% include images/order-poll.html %}

이 때문에, 이 스타일가이드에서는 선택을 강요하지 않겠습니다. 여러분이 스타일시트 내내 일관성을 유지하기만 한다면, 맘에 드는 걸로 고르시면 됩니다(즉, *랜덤*이 아닌 한).

>
<pre class="highlight"><code class="html">
<div class="note">
  <p><a href="http://peteschuster.com/2014/12/reduce-file-size-css-sorting/">최근의 연구</a>는 (<a href="https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json">유형별 정렬</a>을 이용하는) <a href="https://github.com/csscomb/csscomb.js">CSS Comb</a>를 사용한 CSS 선언 정렬이 Gzip 압축 시 평균 파일 크기를 2.7% 줄인다는 결과를 보여줍니다. 그에 비해, 알파벳순으로 정렬했을 때는 1.3%가 줄었습니다.</p>
</div>
</code></pre>



___
###### 참고

* [CSS Comb](https://github.com/csscomb/csscomb.js)
* [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS)
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
* [On Declaration Sorting](http://meiert.com/en/blog/20140924/on-declaration-sorting/)
* [Reduce File Size With CSS Sorting](http://peteschuster.com/2014/12/reduce-file-size-css-sorting/)
* [Poll Results: How Do You Order Your CSS Properties?](http://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)

