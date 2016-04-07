

# Colony Sass Summary
___

<p id="who">tad, HTML, 2016.4.4</p>


## Sass란?

[Sass](http://sass-lang.com)는 [공식 문서](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)에서 스스로를 이렇게 묘사하고 있다:

> 사스는 기초 언어에 힘과 우아함을 더해주는 CSS의 확장이다.

- 목적 : CSS 결함 보정
- 역할 : CSS의 구문을 개선
- 핵심 : CSS를 완전한 기능의 언어로 바꾸지 않는다는 것.
- 우리의 관점 : Sass에도 올바른 사용법이 있고, 이에 대한 학습 및 다양한 탐구가 필요하다는 것을 인지한다.(공짜는 없다.)


###### 참고

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)



## Sass 혹은 SCSS

*"Sass? SCSS?"*  

- Sass 초기에는 들여쓰기의 가치를 핵심 특성으로 삼고, 의존.
- 이후 SCSS는 *Sassy CSS*를 의미하며, CSS와 비슷한 구문을 제공.
> SCSS의 모토: "만약 유효한 CSS라면, 유효한 SCSS이다."
- 둘은 정확히 동등한 기능을 갖고 있음.
- 순전히 미관적으로 어떤 것이 마음에 드는지, 혹은 익숙한지로 결정하면 된다.



###### 참고

* [What’s the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)

___
## Sass 핵심 원칙

우리는 `Sass`를 사용하면서 =  **Sass는 가능한 한 간단하게 유지되어야 한다**는 것을 생각해야 한다. 이와 관련하여 몇 가지 원칙을 마련할 수 있다.

- [KISS 원칙 : CSS보다 복잡해서는 안된다. ](http://en.wikipedia.org/wiki/KISS_principle) (Keep It Simple Stupid)
- [DRY 원칙 : 스스로 반복작업을 추가하지 마라 ](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don’t Repeat Yourself)


>때로는, 코드를 유지가능하도록 만들기 위해 조금 반복하는 편이 더 낫습니다. 무거운 머리를 가진, 통제하기 힘들고, 불필요하게 복잡한 시스템을 제작하면 지나친 복잡성 때문에 유지관리가 완전히 불가능해질 수 있습니다.

우리는 Sass를 이렇게 바라보면 좋겠다.

- 실용주의가 완벽을 이긴다. [ - Harry Roberts](https://csswizardry.com)
- 코드는 목적이 아니라 수단에 불과하다.


귀찮다고 생각하기보다, Sass를 자신이 재미있다고 생각하는 분야에 활요해보면서 익히는 것이 좋겠다. 전체를 Sass로 작성하지 않더라도, 개발환경을 세팅해두고 언제든지 "난 CSS와 SCSS를 사용할 수 있어!"라는 생각을 한다면, 아마 Sass의 문법이 손에 익는 것은 오래 걸리지 않으리라고 생각한다.

마지막으로, Sass역시 수 많은 코드종류 중 하나에 불과하다는 점을 기억하고,  이 문서에 적혀있는 가이드, 기준에 매몰되지 않기로 하자. 만약 그것이 타당하다면, 만약 스스로 판단하고, 그것이 옳게 느껴진다면, 그렇게 진행한다.코드는 목적이 아니라 수단에 불과하다.



###### 참고

* [KISS principle](http://en.wikipedia.org/wiki/KISS_principle)
* [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)




___
___


# 변수

- 가장 중요한 점은 값 수정을 매우 쉽게 만들어준다는 것 : 더이상 찾아서 바꾸기나 하나하나 고칠 필요가 없는 것
* 유효범위 없음
* 가이드 : 타당한 상황에서만 변수를 생성
    * 값이 적어도 두 번 반복된다;
    * 값이 적어도 한 번은 수정될 가능성이 크다;
    * 값의 실현은 모두 변수와 관련되어 있다(즉, 우연에 의한 것이 아니라).


## 스코프


- Sass의 변수 스코프는 수년 동안 변화해옴
- 버전 아주 최근까지, 규칙과 다른 스코프 내에서의 변수 선언은 기본적으로 지역적.
    - 하지만 같은 이름의 전역 변수가 이미 존재하는 경우, 지역적 지정은 전역 변수의 값을 변경.
- 버전 3.4 이후로, Sass는 이제 스코프 개념에 적절하게 대응하며 대신 새로운 지역 변수를 생성.

>문서를 보면 *전역 변수 가림shadowing*에 대한 부분이 있습니다. 전역 스코프에 이미 존재하는 변수를 내부 스코프(선택자, 함수, 믹스인…)에서 선언할 때, 지역 변수가 전역 변수를 *가린다*고 말합니다. 기본적으로, 지역 변수가 지역 스코프 내에서는 우선시됩니다.

다음의 코드 스니펫은 *변수 가림* 개념을 설명하고 있다.

<pre class="highlight"><code class="css">
// 루트 수준에 전역 변수를 초기화합니다.
$variable: 'initial value';

// 전역 변수를 덮어쓰게 하는 믹스인을 만듭니다.
@mixin global-variable-overriding {
  $variable: 'mixin value' !global;
}

.local-scope::before {
  // 전역 변수를 가리는 지역 변수를 만듭니다.
  $variable: 'local value';

  // 믹스인 인클루드: 전역 변수를 덮어씁니다.
  @include global-variable-overriding;

  // 변수의 값을 출력합니다.
  // 전역 변수를 가리기 때문에, **지역** 변수의 값이 출력됩니다.
  content: $variable;
}

// 변수 가림이 없는 다른 선택자에서 변수를 출력합니다.
// 예상대로, **전역** 변수의 값이 출력됩니다.
.other-local-scope::before {
  content: $variable;
}
</code></pre>


즉, 지역변수 스코프 내에서는 전역변수가 이후에 실행된다고 하더라도 , 지역변수의 값이 우선적으로 적용된다.


## `!default` 플래그

라이브러리나 프레임워크, 그리드 시스템, 혹은 배포되어 외부의 개발자들에 의해 사용될 Sass 소품을 개발할 때는, 덮어쓰일 수 있도록 모든 환경설정 변수들을 `!default` 플래그를 붙여 정의해야 한다.
<pre class="highlight"><code class="css">
$baseline: 1em !default; //이게 mBostock이 정의한 코드이고,
</code></pre>

이 덕분에, 개발자는 여러분의 라이브러리를 import하기 *전에* 재정의될 걱정 없이 자신의 `$baseline` 변수를 정의할 수 있습니다.

<pre class="highlight"><code class="css">
// 개발자 자신의 변수
$baseline: 2em; //이게 탬이 정의한 코드라면.

// `$baseline`를 선언하는 라이브러리
@import 'your-library'; //mBostock의 라이브러리를 로드하여도

// $baseline == 2em; //탬이 정의한 코드가 출력되는 거지
</code></pre>



___
## `!global` 플래그

`!global` 플래그는 지역 스코프로부터 전역 변수를 정의할 때에만 사용되어야 한다.
루트 레벨에서 변수를 정의할 때, `!global` 플래그는 생략되어야 한다.

<pre class="highlight"><code class="css">
// Yep
$baseline: 2em;

// Nope
$baseline: 2em !global;
</code></pre>

___
## 여러 개의 변수 혹은 맵

여러 개의 다른 변수들 대신 **맵을 사용함으로써 얻는 이점이 있다.**습니다. 가장 중요한 것은 맵을 반복해서 순환하는 기능인데, 별개의 변수들로는 이것이 불가능합니다.

맵 사용의 또다른 장점은 사용이 편리한 API를 제공하는 작은 getter 함수를 만드는 기능입니다. 다음의 Sass 코드를 예로 들 수 있습니다:

<pre class="highlight"><code class="css">
/// Z-index 맵. 어플리케이션의 Z 레이어들을 한데 모음.
/// @access private
/// @type Map
/// @prop {String} 키 - 레이어 이름
/// @prop {Number} 값 - 키에 연결된 Z 값
$z-indexes: (
  'modal': 5000,
  'dropdown': 4000,
  'default': 1,
  'below': -1,
);

/// 레이어 이름으로부터 z-index 값을 가져온다.
/// @access public
/// @param {String} $layer - 레이어 이름
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}
</code></pre>



___
___

# Extend

- `@extend` : 마치 선택자 B에도 연결된 것처럼 요소 A를 꾸미라고 Sass에게 지시.
    - 이에따라 `@extend`는 모듈식 CSS를 작성할 때 효율적.
* Hugo Giraudel는 사용하지 말라고 했음.
>*그 결과는 무해할 수도 있고 처참한 부작용을 초래할 수도 있습니다. 이 때문에, 제 첫 번째 조언은 `@extend` 지시어를 완전히 피하라는 것입니다. 너무 인정사정없이 들릴 수 있지만, 가장 중요한 것은 덕분에 두통과 골칫거리를 덜 수 있다는 점입니다.*

선택자의 확장이 유익하고 가치 있을 수 있는 상황도 있습니다. 그렇지만, 곤란에 처하지 않도록 이 규칙들을 항상 염두에 두세요:

* 다른 모듈들에 걸치지 않게, 한 모듈 안에서 확장을 사용하라.
* 오로지 플레이스홀더에만 확장을 사용하고, 실제 선택자에는 사용하지 말라.
* 확장하는 플레이스홀더가 가능한 한 적게 존재하도록 하라.

* 확장은 `@media` 블록과는 제대로 작동하지 않음.
* Sass는 미디어 쿼리 안에서 외부의 선택자를 확장할 수 없음.
    * 시도할 경우, 컴파일러는 할 수 없는 일이라는 것을 알리며 충돌.

<pre class="highlight"><code class="css">
.foo {
  content: 'foo';
}

@media print {
  .bar {
    // 이 코드는 듣지 않을 뿐더러 충돌을 일으킴.
    @extend .foo;
  }
}
</code></pre>

* @media 안에서 외부의 선택자를 @extend할 수 없다.
* 같은 지시어 안에 있는 선택자만 @extend할 수 있다.

>요약하자면, 어떤 특정한 상황 아래가 아니라면 `@extend` 지시어를 사용하지 말라고 조언하겠습니다. 그러나 그것을 완전히 금하라고까진 않겠습니다.

###### 참고

* [What Nobody Told you About Sass Extend](http://www.sitepoint.com/sass-extend-nobody-told-you/)
* [Why You Should Avoid Extend](http://www.sitepoint.com/avoid-sass-extend/)
* [Don't Over Extend Yourself](http://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)
* [When to Use Extend; When to Use a Mixin](http://csswizardry.com/2014/11/when-to-use-extend-when-to-use-a-mixin/)

___
___

# Mixins

- 믹스인은 재사용성과 DRY 컴퍼넌트의 핵심
- 믹스인은 시맨틱한 클래스에 기대지 않고도 재사용가능한 코드를 작성하게 해줌.
    -  `.float-left` 클래스에 기대면 너무 힘듦.
- 믹스인은 CSS 규칙과 Sass 문서에서 허용되는 거의 모든 것을 포함.
- 함수처럼 매개변수를 받을 수도 있음.

**"믹스인 남용말자. 핵심은 *간결성* " **

거대한 로직을 가진 엄청나게 강력한 믹스인을 만들고 싶어질 수 있습니다. 이는 과설계over-engineering라고 하며 대부분의 개발자들이 이것 때문에 괴로워 함.

- 믹스인 기준 : 20줄을 넘어서게 되었다면, 더 작은 덩어리로 나뉘거나 완전히 수정.


## 기본

(우연이 아닌) 어떤 이유로 항상 같이 모습을 보이는 CSS 속성들의 그룹을 발견하게 되면, 그것들을 믹스인에 넣을 수 있다. 예를 들면 [Nicolas Gallagher의 마이크로 클리어픽스 핵](http://nicolasgallagher.com/micro-clearfix-hack/)은 (매개변수 없는) 믹스인 안에 들어갈 만한 코드.



<pre class="highlight">
<code class="css">
 ///내부 float을 해제하는 헬퍼
///@author Nicolas Gallagher
///@link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
</code>
</pre>


다른 타당한 예로는 요소의 크기를 조절하는 믹스인이 있으며, `width`와 `height`를 동시에 정의합니다. 이는 코드 입력을 간단하게 만들 뿐만 아니라 쉽게 읽을 수 있도록 해 줍니다.

<pre class="highlight"><code class="css">
///요소 크기를 설정하는 헬퍼
///@author Hugo Giraudel
///@param {Length} $width
///@param {Length} $height
@mixin size($width, $height: $width) {
  width: $width;
  height: $height;
}
</code></pre>


######참고

* [Sass Mixins to Kickstart your Project](http://www.sitepoint.com/sass-mixins-kickstart-project/)
* [A Sass Mixin for CSS Triangles](http://www.sitepoint.com/sass-mixin-css-triangles/)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)



##매개변수 리스트

믹스인에 들어가는 매개변수의 개수를 알 수 없을 때는, 리스트 대신 항상 `arglist`를 사용하세요. `arglist`는 임의의 수의 매개변수를 믹스인이나 함수에 전달할 때 암묵적으로 사용되는 Sass의 여덟 번째 데이터 유형이라고 생각할 수 있으며, `...`이 그 특징입니다.
<pre class="highlight"><code class="css">
@mixin shadows($shadows...) {
  //type-of($shadows) == 'arglist'
  //…
}
</code></pre>



몇 개의 매개변수(3개 혹은 그 이상)를 취하는 믹스인을 만들 때, 하나하나 넘겨주는 것보다 쉬울 거라는 생각으로 매개변수들을 리스트나 맵으로 병합하기 전에 다시 생각해 보세요.

Sass는 사실 믹스인과 함수 선언에 재주가 있어서, 리스트나 맵을 함수/믹스인에 매개변수 리스트로 전달해 일련의 매개변수들로 읽히도록 할 수 있습니다.

<pre class="highlight"><code class="css">
@mixin dummy($a, $b, $c) {
  //…
}

//Yep
@include dummy(true, 42, 'kittens');

//Yep but nope
$params: (true, 42, 'kittens');
$value: dummy(nth($params, 1), nth($params, 2), nth($params, 3));

//Yep
$params: (true, 42, 'kittens');
@include dummy($params...);

//Yep
$params: (
  'c': 'kittens',
  'a': true,
  'b': 42,
);
@include dummy($params...);
</code></pre>

###### 참고

* [Sass Multiple Arguments, Lists or Arglist](http://www.sitepoint.com/sass-multiple-arguments-lists-or-arglist/)

___
## 믹스인과 벤더 프리픽스

- Q : "지원 미비 or 부분 지원 CSS 속성을 위한 벤더 프리픽스를 처리하기 위하여 믹스인을 정의하는 것을 해야하는 것일까?"
- A : 좋은 생각이 아님.
 
  >우선, [Autoprefixer](https://github.com/postcss/autoprefixer)를 사용할 수 있다면 Autoprefixer를 사용하세요. 여러분의 프로젝트에서 Sass 코드를 없애 주고, 항상 최신 정보를 반영하며, 프리픽스를 처리하는 데에는 여러분보다 훨씬 나을 것입니다.

** 불행하게도, `Autoprefixer`를 선택할 수 없는 상황에서는 **
- [Bourbon](http://bourbon.io/)
- [Compass](http://compass-style.org/)
등을 사용하는 방법이 있음.

** 직접 CSS 지원위한 믹스인 코드를 작성해야하는 유일한 경우 **

>만약 `Autoprefixer`를 사용할 수 없고 `Bourbon`이나 `Compass`도 사용할 수 없다면, **오직 그런 경우에만, 여러분 스스로 CSS 속성에 프리픽스를 붙이는 믹스인을 만들어 사용할 수 있습니다. 하지만. 바라건대 속성마다 하나씩 믹스인을 만들어 각 벤더를 수동으로 출력하진 마세요.

<pre class="highlight"><code class="css">
// Nope
@mixin transform($value) {
  -webkit-transform: $value;
  -moz-transform: $value;
  transform: $value;
}
</code></pre>

영리한 방식으로 하세요.

<pre class="highlight"><code class="css">
/// 벤더 프리픽스를 산출하는 믹스인 헬퍼
/// @access public
/// @author HugoGiraudel
/// @param {String} $property - 프리픽스가 붙지 않은 CSS 속성
/// @param {*} $value - 가공되지 않은 CSS 값
/// @param {List} $prefixes - 산출할 프리픽스 리스트
@mixin prefix($property, $value, $prefixes: ()) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }

  #{$property}: $value;
}
</code></pre>

위 믹스인을 사용하는 방법은 간단하다.

<pre class="highlight"><code class="css">
.foo {
  @include prefix(transform, rotate(90deg), ('webkit', 'ms'));
}
</code></pre>

**그래도 , 이것은 조악한 해결책이라는 점을 명심하자. **
>예를 들면, `Flexbox`에 필요한 것과 같은 복잡한 폴리필은 처리하지 못합니다. 그런 면에서, `Autoprefixer`를 사용하는 것이 훨씬 나은 선택입니다.

###### 참고

* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [Building a Linear-Gradient Mixin](http://www.sitepoint.com/building-linear-gradient-mixin-sass/)




<pre class="highlight">
<code class="css">
 ///내부 float을 해제하는 헬퍼
///@author Nicolas Gallagher
///@link http://nicolasgallagher.com/micro-clearfix-hack/ Micro Clearfix
@mixin clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
</code>
</pre>


    
___
___

# 구문 & 서식

>스타일가이드가 가장 먼저 해야 할 일은 우리 코드가 어떻게 보이길 원하는지를 묘사하는 것입니다.

- 여러 개발자가 하나의 프로젝트에 모인다면, 코드 스타일로 충돌하는건 시간문제.
- 일관성을 고취하는 코드 작성은 충돌방지 및 유지보수에 도우밍 된다.

대략, 우리가 원하는 것은 (뻔뻔스럽게도 [CSS Guidelines](http://cssguidelin.es/#syntax-and-formatting)에서 영감을 얻은) 다음과 같습니다:

* ~~탭 대신 스페이스 두 칸 (2) 들여쓰기;~~
    * **Colony에서틑 TAB 으로 들여쓰기를 한다.**[2016.4.4, 김태경 정유미]
* 이상적인 행의 너비 : 80 글자;
* 공백의 의미 있는 사용.

결론부터 말하자면, `Sass`는 "파일구조에 대한 천하통일"을 하자는게 아니다. `Sass`는 도구일 뿐이다.

### 인코딩

문자 인코딩과 관련한 잠재적인 문제를 피하기 위해서는, [메인 스타일시트](#main-)에서 `@charset` 지시어를 사용해 [UTF-8](http://en.wikipedia.org/wiki/UTF-8) 인코딩을 강제하는 것이 강력하게 권장됨. 이 지시어가 스타일시트의 가장 첫 번째 요소이고 어떤 종류의 문자도 앞에 오지 않도록 해야한다.

< pre class="highlight"><code class="css">
@charset utf-8;
</code></pre>

### 따옴표

* CSS, Sass에서 문자열이 따옴표없이도 기능적으로는 문제가 없음.
* Sass에서는  **문자열은 언제나 작은 따옴표(`'`)로 감싸져야한다**
    * 색 이름은 따옴표가 없으면 색으로 취급되는데, 이는 심각한 문제로 이어질 수 있다;
    * 대부분의 구문 강조기는 따옴표 없는 문자열을 지원하지 못할 것이다;
    * 전반적인 가독성에 도움이 된다;
    * 문자열을 따옴표로 감싸지 않을 적절한 이유가 없다.

## 숫자

Sass에서 숫자란, 단위가 없는 숫자에서부터 길이, 기간, 빈도, 각도 등에 이르기까지 모든 것을 포함하는 데이터 타입

### 영

* 숫자는 1보다 작은 소수 앞에 앞장서는 영을 표기
* 뒤따르는 영은 절대 표기 하지 않는다.

{% include snippets/syntax/07/index.html %}

### 단위

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

### 연산

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

### 매직 넘버

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


___
___
## 색

* 색은 CSS 에서 중요함
* 자연스럽게, Sass는 몇 가지의 [강력한 함수](http://sass-lang.com/documentation/Sass/Script/Functions.html)을 제공함으로써 색 조작에 있어 엄청난 무기(?)가 되었음.



### 색 서식

색을 가능한 한 간단하게 만들기 위한 제 조언은 색 서식에 대한 다음의 우선순위를 따르라는 것입니다:

1. [CSS 색 키워드](http://www.w3.org/TR/css3-color/#svg-color);
1. [HSL 표기법](http://en.wikipedia.org/wiki/HSL_and_HSV);
1. [RGB 표기법](http://en.wikipedia.org/wiki/RGB_color_model);
1. 16진법 표기법. 가급적 소문자와 가능한 경우 단축형으로.

우선, 키워드는 자명한 서식입니다. HSL 표기는 인간의 두뇌로 이해하기에 가장 쉬울 뿐만 아니라<sup>[citation needed]</sup> 스타일시트 작성자가 색상, 채도, 명도를 조정함으로써 색을 변경하는 일을 쉽게 만듭니다. RGB 역시 색이 청색, 녹색, 적색 중 어느 것에 가까운지 바로 보여주는 이점을 갖고 있지만 세 속성으로부터 색을 제조하는 일을 쉽게 만들어주진 않습니다. 마지막으로, 16진법은 인간의 머리로는 거의 해독이 불가능합니다.

<pre class="highlight"><code>
// Yep
.foo {
  color: hsl(0, 100%, 50%);
}

// Also yep
.foo {
  color: rgb(255, 0, 0);
}

// Nope
.foo {
  color: #f00;
}

// Nope
.foo {
  color: #FF0000;
}

// Nope
.foo {
  color: red;
}
</code></pre>
HSL이나 RGB 표기를 사용할 때, 쉼표(`,`) 뒤에는 언제나 스페이스 한 칸을 더하고 괄호(`(`, `)`)와 내용 사이에는 스페이스를 넣지 마세요.


<pre class="highlight"><code>
.foo {
  color: hsl(0, 100%, 50%);
}
</code></pre>


___
### 색과 변수

* 색을 한 번 이상 사용시, 색을 대변하는 의미 있는 이름으로 변수에 저장하여 쓴다.


<pre class="highlight"><code>
$sass-pink: hsl(330, 50%, 60%);
</code></pre>

만약 변수의 용도가 테마와 깊은 관련이 있다면, 변수를 그대로 사용하는 대신, 사용법 설명을 붙여 또 다른 변수에 저장해서 쓴다.
<pre class="highlight"><code>
$main-theme-color: $sass-pink;
</code></pre>


이렇게 함으로써 테마 변경이 `$sass-pink: blue` 같은 사태를 초래하는 것을 방지가능.

### 색 명암 조절

[`lighten`](http://sass-lang.com/documentation/Sass/Script/Functions.html#lighten-instance_method)과 [`darken`](http://sass-lang.com/documentation/Sass/Script/Functions.html#darken-instance_method) 두 함수는 HSL 공간에서 색의 명도를 증감하여 조정. 기본적으로, 이들은 [`adjust-color`](http://sass-lang.com/documentation/Sass/Script/Functions.html#adjust_color-instance_method) 함수의 `$lightness` 매개 변수의 가명일 뿐.

**문제는, 이들 함수가 가끔 기대되는 결과를 제공하지 않는다는 것.**

 반면에, [`mix`](http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method) 함수는 색을 `white`나 `black`과 혼합함으로써 명암을 조절하는 좋은 방법.

>앞서 언급한 두 함수보다 `mix`를 사용하는 것의 이점은 색의 비율을 감소시킴에 따라 점진적으로 검은 색(혹은 흰 색)으로 나아간다는 점입니다. 반면 `darken`과 `lighten`은 색을 순식간에 완전한 검은 색이나 흰 색으로 보내버릴 것입니다.

{% include images/color-functions.html %}

만약 매번 `mix` 함수를 쓰는 것을 원치 않으신다면, 두 가지 사용하기 쉬운 ([Compass](http://compass-style.org/reference/compass/helpers/colors/#shade)에 포함되어 있기도 한) `tint`와 `shade` 평션을 만들어 같은 일을 할 수 있습니다:

{% include snippets/syntax/18/index.html %}

<div class="note">
  <p><a href="http://sass-lang.com/documentation/Sass/Script/Functions.html#scale_color-instance_method"><code>scale-color</code></a> 함수는 속성들이 이미 얼마나 높거나 낮은지를 고려함으로써 그 크기를 보다 유동적으로 변경하도록 디자인되었습니다. 이 함수는 <code>mix</code> 만큼이나 좋은 결과물과 함께 보다 명확한 호출 관례를 제공합니다. 그렇지만 비례 계수는 정확히 같지 않습니다.</p>
</div>

###### 참고

* [A Visual Guide to Sass & Compass Color Functions](http://jackiebalzer.com/color)
* [How to Programmatically Go From One Color to Another](http://thesassway.com/advanced/how-to-programtically-go-from-one-color-to-another-in-sass)
* [Sass Color Variables That Don’t Suck](http://davidwalsh.name/sass-color-variables-dont-suck)
* [Using Sass to Build Color Palettes](http://www.sitepoint.com/using-sass-build-color-palettes/)
* [Dealing with Color Schemes in Sass](http://www.sitepoint.com/dealing-color-schemes-sass/)

## 리스트

* 리스트는 Sass에서 배열에 상당하는 개념.
 * 리스트는 어떤 타입의 값이든(리스트도 포함. 이 경우 내포 리스트가 된다) 저장할 수 있게 의도된 ([맵](#section-32)과 달리) **평면적인 데이터 구조**입니다.

**리스트 사용 가이드라인**

* 한 줄 혹은 여러 줄;
* 80자 줄에 안 들어갈 정도로 길면 반드시 여러 줄에 표기;
* CSS 상에서 그대로 사용되지 않는 한, 언제나 쉼표로 분리;
* 언제나 괄호로 감싼다;
* 여러 줄인 경우 뒤따르는 쉼표를 붙이고, 한 줄인 경우 제외.

<pre class="highlight"><code>
// Yep
$font-stack: ('Helvetica', 'Arial', sans-serif);

// Yep
$font-stack: (
  'Helvetica',
  'Arial',
  sans-serif,
);

// Nope
$font-stack: 'Helvetica' 'Arial' sans-serif;

// Nope
$font-stack: 'Helvetica', 'Arial', sans-serif;

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif,);
</code>
</pre>


리스트에 새로운 아이템을 추가할 때는, 언제나 제공된 API를 이용하세요. 수동으로 새로운 아이템을 추가하려고 하지 마세요.


<pre class="highlight"><code>
shadows: (0 42px 13.37px hotpink);

// Yep
$shadows: append($shadows, $shadow, comma);

// Nope
$shadows: $shadows, $shadow;
</code></pre>

###### 참고

* [Understanding Sass lists](http://hugogiraudel.com/2013/07/15/understanding-sass-lists/)
* [SassyLists](http://sassylists.com)


___
___
## 맵

* Sass 3.3부터, 스타일시트 작성자는 맵을 정의 가능.
    * 이는 연관 배열, 해쉬 혹은 JavaScript 오브젝트에 해당하는 Sass 용어
    * 맵은 키를 모든 유형의 값과 연결하는 자료 구조(키는 어떤 자료 유형도 될 수 있으며, 추천하지는 않지만 맵도 포함됨.).

**Sass 맵 작성 가이드라인**

* 콜론(`:`) 다음에 스페이스;
* 여는 괄호 (`(`)는 콜론(`:`)과 같은 줄에;
* (99%의 경우에 해당하는) 문자열인 **키는 따옴표로 감싼다**;
* 각각의 키/값 쌍은 새 줄을 차지한다;
* 각 키/값 뒤에는 쉼표(`,`);
* 추가, 제거 혹은 순서를 바꾸기 쉽도록 마지막 아이템 **뒤에 따라오는 쉼표**(`,`);
* 닫는 괄호(`)`)는 새 줄을 차지한다;
* 닫는 괄호(`)`)와 세미콜론(`;`) 사이에는 스페이스나 새 줄을 넣지 않는다.

보기:
<pre class="highlight"><code>
// Yep
$breakpoints: (
  'small': 767px,
  'medium': 992px,
  'large': 1200px,
);

// Nope
$breakpoints: ( small: 767px, medium: 992px, large: 1200px );
</code></pre>

___
### Sass 맵 디버그

>어떤 미친 마법이 Sass 맵에서 일어나고 있는 건지 알 수 없어 헤매는 스스로를 발견하게 된다면, 아직 구원받을 수 있는 방법이 있으니 걱정하지 마십시오.

<pre class="highlight"><code>
@mixin debug-map($map) {
  @at-root {
    @debug-map {
      __toString__: inspect($map);
      __length__: length($map);
      __depth__: if(function-exists('map-depth'), map-depth($map), null);
      __keys__: map-keys($map);
      __properties__ {
        @each $key, $value in $map {
          #{'(' + type-of($value) + ') ' + $key}: inspect($value);
        }
      }
    }
  }
}
</code></pre>


맵의 깊이를 알고 싶으시면 아래 함수를 추가하세요. 위의 믹스인이 자동으로 값을 표시할 것입니다.

<pre class="highlight"><code class="css">
/// 맵의 최대 깊이를 계산한다
/// @param {Map} $map
/// @return {Number} `$map`의 최대 깊이
@function map-depth($map) {
  $level: 1;

  @each $key, $value in $map {
    @if type-of($value) == 'map' {
      $level: max(map-depth($value) + 1, $level);
    }
  }

  @return $level;
}
</code></pre>

###### 참고

* [Using Sass Maps](http://www.sitepoint.com/using-sass-maps/)
* [Debugging Sass Maps](http://www.sitepoint.com/debugging-sass-maps/)
* [Extra Map functions in Sass](http://www.sitepoint.com/extra-map-functions-sass/)
* [Real Sass, Real Maps](http://blog.grayghostvisuals.com/sass/real-sass-real-maps/)
* [Sass Maps are Awesome](http://viget.com/extend/sass-maps-are-awesome)
* [Sass list-maps](https://github.com/lunelson/sass-list-maps)
* [Sass Maps Plus](https://github.com/lunelson/sass-maps-plus)
* [Sassy-Maps](https://github.com/at-import/sassy-maps)
* [Introduction to Sass Maps Usage and Examples](http://webdesign.tutsplus.com/tutorials/an-introduction-to-sass-maps-usage-and-examples--cms-22184)
___
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


___
___

## Nesting(선택자 내포)

* 선택자내포(Nesting) 기능 중 남용 1위!
* 선택자 내포는 짧은 선택자들을 서로 포개어 넣음으로써 긴 선택자를 산출해 내는 방식을 제안.



### 일반적인 규칙

<pre class="highlight"><code class="css">
/*예로, 아래의 Sass는:*/
.foo {
  .bar {
    &:hover {
      color: red;
    }
  }
}

/* 이런 결과를 만들어 낸다*/
.foo .bar:hover {
  color: red;
}
</code></pre>


* 같은 방식으로, Sass 3.3부터는 현재 선택자 참조(`&`)를 이용해 고급 선택자를 생성하는 것이 가능.

<pre class="highlight"><code class="css">
/* 현재선택자 참조('&')를 이용해 고급 선택자 생성 예제*/
.foo {
  &-bar {
    color: red;
  }
}

/* 결과 */
.foo-bar {
  color: red;
}
</code></pre>
… 위의 코드는 이런 CSS를 생성합니다:



>*이 방법은 종종 [BEM 작명 관례](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)와 함께 `.block__element`와 `.block__modifier` 선택자를 원래 선택자(이 경우엔 `.block`)에 기반하여 생성하는 데 사용*

<div class="note">
  <p>반드시 그런 건 아닐 수도 있지만, 현재 선택자 참조(<code>&</code>)로 새로운 선택자를 생성하면 그 선택자 자체가 코드베이스에 존재하지 않기 때문에 검색을 할 수 없게 됨.</p>
</div>

**선택자 내포의 문제**
* 결과적으로 코드를 읽기 어렵게 만든다는 것
    * 읽기 위해서는 들여쓰기의 단계를 바탕으로 산출되는 선택자를 마음속으로 계산해야 한다.;
     * CSS가 어떤 모습이 될지 항상 명확한 것은 아님.
* 선택자가 길어지고 현재 선택자(`&`)를 더 자주 인용할수록 더더욱 그렇다.
    * 어느 순간이 되면, 선택자를 파악하고 무슨 일이 일어나고 있는지 더이상 이해하기가 힘들어질 위험이 너무 커지기 때문에 무릅쓸 만한 가치가 없음.

그런 상황을 방지하기 위해, 우리는 **가능한 한 선택자 내포를 피해야 합니다.** 하지만, 이 규칙에는 분명 몇 가지의 예외가 있습니다.

### 예외

우선, 원래의 선택자 안에 가상 클래스와 가상 요소를 내포하는 것은 허용되며 나아가 추천할 만합니다.
<pre class="highlight"><code class="css">
.foo {
  color: red;

  &:hover {
    color: green;
  }

  &::before {
    content: 'pseudo-element';
  }
}
</code></pre>
가상 클래스와 가상 요소에 선택자 내포를 사용하는 것은 (밀접하게 관련된 선택자를 다루므로) 타당할 뿐만 아니라, 한 컴퍼넌트에 관한 모든 것을 같은 장소에 유지하는 데 도움.

또한, `.is-active` 같은 컴퍼넌트에 독립적인 상태 클래스를 사용할 때, 컴퍼넌트의 선택자 아래에 내포하여 깔끔하게 정리하는 것에는 아무 문제가 없음.

<pre class="highlight"><code class="css">
.foo {
  // …

  &.is-active {
    font-weight: bold;
  }
}
</code></pre>

마지막으로 짚어야 할 것으로, 요소를 꾸밀 때, 그것이 우연히 다른 특정 요소 안에 들어가있다면 그 컴퍼넌트에 관한 모든 것을 한 곳에 유지하기 위해 내포를 사용하는 것은 문제가 없음.
<pre class="highlight"><code class="css">
.foo {
  // …

  .no-opacity & {
    display: none;
  }
}
</code></pre>

* 경험이 적은 개발자와 함께 일한다면, `.no-opacity &` 같은 선택자는 조금 이상해보일 수 있음.
* 혼란을 방지하기 위해, 이 이상한 구문을 명확한 API로 바꿔놓는 아주 짧은 믹스인을 만들 수 있다.
<pre class="highlight"><code class="css">
/// 간단한 선택자 내포 API를 제공하는 헬퍼 믹스인
/// @param {String} $selector - 선택자
@mixin when-inside($selector) {
  #{$selector} & {
    @content;
  }
}
/* 앞의 예시를 다시 쓰면 이렇게 된다.*/
.foo {
  // …

  @include when-inside('.no-opacity') {
    display: none;
  }
}
</pre></code>


* 모든 것이 그렇듯이, 세부사항은 크게 상관이 없으며, 일관성이 핵심.
* 선택자 내포에 충분한 확신이 있다면 선택자 내포를 사용하세요. 단지 여러분의 팀 전체가 그 선택에 동의하는지 분명히 해두어야 한다.

###### 참고

* [Beware of Selector Nesting](http://www.sitepoint.com/beware-selector-nesting-sass/)
* [The Inception Rule](http://thesassway.com/beginner/the-inception-rule)
* [Avoid nested selectors for more modular CSS](http://thesassway.com/intermediate/avoid-nested-selectors-for-more-modular-css)


___
___

# 설계

> CSS 프로젝트를 설계하는 것은 아마도 프로젝트의 일생에서 여러분이 해야 할 가장 어려운 일 중 하나일 것입니다. 구조를 일관되고 의미있게 유지하는 것은 더더욱 어렵습니다.

* 다행히도, CSS 전처리기를 사용함으로써 얻는 주된 장점 중 하나는 (CSS 지시어 `@import`와 달리) 성능에 영향을 주지 않고 코드베이스를 여러 파일로 분리할 수 있게 된다는 것입니다.
* Sass가 `@import` 지시어의 무거운 짐을 짊어진 덕분에 개발 단계에서 필요한 만큼 많은 파일을 사용하는 것이 완벽하게 안전하며, 생산 단계에서 모든 파일들이 하나의 스타일시트로 컴파일됩니다.

>"무엇보다도, 폴더의 중요성에 대해서는 아무리 강조해도 지나치지 않습니다."


CSS 프로젝트를 위한 잘 알려진 설계 양식들이 많이 있습니다: [OOCSS](http://oocss.org/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), [Bootstrap](http://getbootstrap.com/)류, [Foundation](http://foundation.zurb.com/)류… 이들 모두 훌륭하며, 장단점을 갖고 있음.

>저 스스로는 [Jonathan Snook](http://snook.ca/)의 [SMACSS](https://smacss.com/)와 아주 비슷한 접근법을 사용하는데, 이것은 간단명료함을 유지하는 데 초점을 맞추고 있습니다.

<div class="note">
  <p>저는 설계가 대부분의 경우 프로젝트에 한정되어 있다는 사실을 배웠습니다. 여러분의 필요에 맞는 시스템을 사용할 수 있도록 제시된 해법을 마음대로 폐기하거나 조정하세요.</p>
</div>

###### 참고

* [Architecture for a Sass project](http://www.sitepoint.com/architecture-sass-project/)
* [A Look at Different Sass Architectures](http://www.sitepoint.com/look-different-sass-architectures/)
* [SMACSS](https://smacss.com/)
* [An Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)
* [Atomic Web Design](http://bradfrost.com/blog/post/atomic-web-design/)
* [Sass, une architecture composée](http://slides.com/hugogiraudel/sass-une-architecture-composee)


___
## 컴퍼넌트

* *작동하게* 만드는 것과 *좋게* 만드는 것 사이에는 커다란 차이가 있습니다. 
* 다시 한번 말하자면, CSS는 아주 엉망인 언어입니다<sup>[citation needed]</sup>. 더 적은 CSS를 가질수록, 더 즐거워집니다. 
* 스타일시트의 효율화를 위해서는 인터페이스를 "컴퍼넌트의 모음"이라고 여기는 것이 대개 좋은 생각!

**컴퍼넌트의 조건**
: 다음 요건들을 충족한다면 컴퍼넌트가 될 수 있음.

* 단 한 가지 일만 한다;
* 재사용이 가능하고 프로젝트 전체에 걸쳐 재사용된다;
* 독립적이다.

>*예를 들면, 검색 폼은 컴퍼넌트로 취급되어야 합니다. 그것은 다른 위치, 다른 페이지에서, 다양한 상황에서 재사용이 가능해야 합니다. DOM에서의 위치(footer, sidebar, main content…)에 의존해서는 안 됩니다.*

* 대부분의 인터페이스는 작은 컴퍼넌트들로 생각될 수 있으며
* 이러한 인식을 고수할 것을 강력히 추천합니다. 

* 이는 전체 프로젝트에 필요한 CSS의 양을 줄일 뿐만 아니라 
* 모든 것이 혼란스러운 난장판보다 유지를 더 쉽게 만들기도 합니다.

## 7-1 패턴

다시 설계로 돌아가볼까요? 저는 보통 제가 *7-1 패턴* 이라고 부르는 것을 사용합니다: 폴더 7개, 파일 1개. 기본적으로, 7개의 다른 폴더에 채워넣은 모든 부분 파일과, 이들을 불러들여 CSS 스타일시트로 컴파일하는 루트 레벨에 있는 하나의 파일(대개 `main.scss`)을 갖게 됩니다.

* `base/`
* `components/`
* `layout/`
* `pages/`
* `themes/`
* `utils/`
* `vendors/`

그리고 물론:

* `main.scss`

{% include images/wallpaper.html %}

이상적으로, 우리는 이런 구조를 만들어 낼 수 있습니다:

{% include snippets/architecture/01/index.html %}

<div class="note">
  <p>파일은 위에서 설명한 작명 관례를 따라 하이픈으로 구분됩니다.</p>
</div>

### Base 폴더

`base/` 폴더는 프로젝트의 보일러플레이트 코드라고 부를 만한 것을 담습니다. 거기에선, 리셋 파일, 타이포그래피 규칙, 그리고 아마도 자주 사용되는 HTML 요소에 대한 표준 스타일을 정의하는 스타일시트(전 `_base.scss`라고 부릅니다)를 찾을 수 있을 것입니다.

* `_base.scss`
* `_reset.scss`
* `_typography.scss`

### Layout 폴더

`layout/` 폴더에는 사이트나 어플리케이션의 레이아웃에 기여하는 모든 것들이 들어갑니다. 이 폴더는 사이트의 주요 부분(header, footer, navigation, sidebar…), 그리드 시스템 혹은 모든 폼의 스타일을 위한 스타일시트를 가질 수도 있습니다.

* `_grid.scss`
* `_header.scss`
* `_footer.scss`
* `_sidebar.scss`
* `_forms.scss`
* `_navigation.scss`

<div class="note">
  <p><code>layout/</code> 폴더는 <code>partials/</code>라고 불릴 수도 있습니다. 이는 여러분이 선호하는 바에 달렸습니다.</p>
</div>

### Components 폴더

`components/` 폴더에는 더 작은 컴퍼넌트들이 들어갑니다. `layout/`이 (전반적인 뼈대를 정의하는) 거시적인 폴더임에 반해, `components/`는 위젯에 초점을 둡니다. 이 폴더는 슬라이더, 로더, 위젯, 그리고 기본적으로 이들과 비슷한 것을 비롯해 온갖 구체적인 모듈들을 담습니다. 전체 사이트/어플리케이션이 주로 작은 모듈들로 구성되어야 하므로 `components`에는 대개 많은 파일들이 있습니다.

* `_media.scss`
* `_carousel.scss`
* `_thumbnails.scss`

<div class="note">
  <p><code>components/</code> 폴더는 선호에 따라 <code>modules/</code>라고 불릴 수도 있습니다.</p>
</div>

### Pages 폴더

만약 페이지에 한정된 스타일이 있다면, 그것은 `pages/` 폴더 속, 페이지 이름을 딴 파일에 넣는 것이 좋습니다. 예를 들면, 홈페이지에만 한정된 스타일이 있어 `pages/` 폴더 속 `_home.scss` 파일이 필요해지는 것은 드문 일이 아닙니다.

* `_home.scss`
* `_contact.scss`

<div class="note">
  <p>이 파일들은 배포 과정에 따라, 산출되는 스타일시트에서 다른 파일과 병합되는 것을 피하기 위해 별도로 호출될 수 있습니다. 이것은 여러분이 결정할 문제입니다.</p>
</div>

### Themes 폴더

큰 사이트와 어플리케이션에서 여러 다른 테마들을 갖는 것은 흔히 있는 일입니다. 물론 테마를 다루는 다른 방법들도 있지만, 개인적으로는 `themes/` 폴더에 전부 모아두는 것을 좋아합니다.

* `_theme.scss`
* `_admin.scss`

<div class="note">
  <p>이것은 프로젝트에 달려있는 것으로 많은 프로젝트에서는 존재할지 않을 가능성이 큽니다.</p>
</div>

### Utils 폴더

`utils/` 폴더는 프로젝트에서 사용되는 모든 Sass 도구와 헬퍼를 모읍니다. 모든 전역 변수, 함수, 믹스인, 플레이스홀더는 여기로 들어가야 합니다.

이 폴더에 대한 경험적 법칙은 그 자체만으로는 컴파일되었을 때 한 줄의 CSS도 산출하지 않아야 한다는 것입니다. 이것은 그저 Sass 헬퍼일 뿐입니다.

* `_variables.scss`
* `_mixins.scss`
* `_functions.scss`
* `_placeholders.scss` (frequently named `_helpers.scss`)

<div class="note">
  <p><code>utils/</code> 폴더는 선호에 따라 <code>helpers/</code>, <code>sass-helpers/</code> 혹은 <code>sass-utils/</code>로 불릴 수도 있습니다.</p>
</div>

### Vendors 폴더

그리고 마지막으로 잊지 말아야 할 것으로, 대부분의 프로젝트는 Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered 등의 외부 라이브러리와 프레임워크에서 나오는 모든 CSS 파일을 담고 있는 `vendors/` 폴더를 가집니다. 이들을 같은 폴더에다 치워두는 것은 “저기요, 이건 내가 한 게 아닙니다. 내 코드가 아니고, 나는 책임이 없습니다”라고 말하는 좋은 방법입니다.

* `_normalize.scss`
* `_bootstrap.scss`
* `_jquery-ui.scss`
* `_select2.scss`

만약 어느 벤더의 한 부분을 덮어써야 한다면, 덮어쓰는 벤더의 이름을 그대로 딴 파일들을 담는 여덟 번째 폴더를 만드는 것을 추천합니다.

예를 들면, `vendors-extensions/_boostrap.scss`는 Bootstrap의 기본 CSS 일부를 재선언하는 모든 CSS 규칙을 담고 있는 파일입니다. 이는 벤더 파일 자체를 편집하는 것을 피하기 위함입니다. 그건 대개 좋은 생각이 아니니까요.

### Main 파일

(주로 `main.scss`로 이름이 붙는) 메인 파일은 전체 코드베이스에서 언더스코어로 시작하지 않는 유일한 Sass 파일이어야 합니다. 이 파일은 `@import`와 주석 외에는 아무 것도 포함하지 않아야 합니다.

파일들은 각자 자리 잡은 폴더에 따라 아래의 순서대로 하나하나 불러들여집니다:

1. `vendors/`
1. `utils/`
1. `base/`
1. `layout/`
1. `components/`
1. `pages/`
1. `themes/`

가독성을 유지하기 위해, 메인 파일은 이 가이드라인을 준수해야 합니다:

* `@import` 당 파일 하나;
* 한 줄에 하나의 `@import`;
* 같은 폴더로부터의 두 import 사이는 새 줄로 띄우지 않는다;
* 한 폴더로부터의 마지막 import 다음에는 새 줄 하나로 간격을 둔다.
* 파일 확장자와 앞에 붙는 언더스코어는 생략한다.

{% include snippets/architecture/02/index.html %}

부분 파일을 불러오는 다른 합당한 방법도 있습니다. 밝은 면을 보자면, 이 방법은 파일을 보다 읽기 좋게 만듭니다. 반면, 수정하는 일은 약간 괴로워집니다. 어쨌든, 어느 것이 최고인지는 여러분이 결정하게 하겠습니다. 이건 별 문제가 안 되니까요. 이 방법으로 하면, 메인 파일은 이 가이드라인을 준수해야 합니다:

* 폴더 당 하나의 `@import`;
* `@import` 뒤에 줄 바꿈;
* 각 파일은 한 줄을 차지한다;
* 한 폴더로부터의 마지막 import 다음에는 새 줄 하나로 간격을 둔다;
* 파일 확장자와 앞에 붙는 언더스코어는 생략한다.

{% include snippets/architecture/03/index.html %}

<div class="note">
  <p>각 파일을 수동으로 불러오지 않기 위해서는, <code>@import "components/*"</code>와 같이 Sass <code>@import</code>에서 glob 패턴을 사용할 수 있게 해주는 <a href="https://github.com/chriseppstein/sass-globbing">sass-globbing</a>이라는 Ruby Sass의 확장이 있습니다.</p>
  <p>그렇지만 이것은 대개 원치 않는 방식인 알파벳순에 따라 파일을 불러들이기 때문에 전 추천하지 않습니다. 특히 소스의 순서에 의존하는 언어를 다룰 때는 더욱 그렇습니다.</p>
</div>

## Shame 파일

[Harry Roberts](http://csswizardry.com), [Dave Rupert](http://daverupert.com), [Chris Coyier](http://css-tricks.com)에 의해 알려진 흥미로운 개념이 있습니다. 이는 모든 CSS 선언과 핵, 그리고 우리가 자랑스럽게 여기지 않는 것들을 *수치 파일*에 넣는 것으로 이루어집니다. 이 파일은, 극적이게도 `_shame.scss`라고 불리며, 스타일시트의 맨 끝에서, 다른 모든 파일들 다음으로 불러들여질 것입니다.

{% include snippets/architecture/04/index.html %}

###### 참고

* [shame.css](http://csswizardry.com/2013/04/shame-css/)
* [shame.css - full .net interview](http://csswizardry.com/2013/04/shame-css-full-net-interview/)