# Sass 기초
CSS를 사용하면서 점점 파일이 커지고 복잡해지고 유지보수하기 어려워질 때, CSS에는 없는 개념인 variables, nesting, mixin 등을 사용하여 이런 과정을 쉽게 만들어주는 것! Sass가 설치되면 Terminal을 이용하여 인풋, 아웃풋 운영이 가능하다. 
- - -
## Variables
스타일시트 도처에 재사용이 가능한 정보들을 축적하는 방식이라고 생각하면 된다. 색, 폰트 스택, 또는 어떤 CSS 값이라도 재사용하길 원한다면 저장해놓을 수 있다. 변수 선언에는 `$`을 사용한다. 

<pre><code>
$font-stack: 'Noto Sans Kr', sans-serif;
$primary-color: hsl(80, 70%, 75%);

body{
  font: 100% $font-stack;
  color: $primary-color;
} 
</code></pre>

## Nesting
HTML이 시각적으로 하이라키가 분명하고 명확하게 nest 되어있는 것과는 달리 CSS는 그렇지 않은 편이다. Sass는 HTML의 시각적 하이라키를 그대로 따라서 선택자를 지정할 수 있다.

<pre><code>
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  li {
    display: inline-block;
  }
  
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  } 
}
</code></pre>
이렇게 하면 자손 선택자로서 지정이 되고 위계가 잘 보인다.


<h2> Partials </h2>
다른 Sass 파일에 포함할 CSS의 토막 파일들을 만드는 것이다. 파일명 앞에 언더바를 사용한다. `_typography.scss`이런 식으로. Partials는 `@import`와 함께 쓰인다. 

<h2> import </h2>
CSS파일과는 달리 서버에 요청을 한번만 해도 되는 구조이다. 만약 `_reset.scss`라는 파일을 불러오려면 `@import 'reset';` 으로 불러들인다. import시에 `.scss`라는 확장자는 붙이지 않아도 된다.

<h2> Mixins </h2>
브라우저별 접두사와 같이 매번 적기 굉장히 귀찮은 것들이 있는데, 그런 귀찮은 선언들을 그룹을 지어서 다시 사용할 수 있게끔 하는 것이 mixin 이라는 것이다. 

Mixin을 만들기 위해서는 `@mixin`을 사용하여 명명을 하고, 넣을 값도 명명을 해준다. 생성한 mixin을 사용하기 위해서는 mixin의 이름이 뒤따라오는 `@include`를 이용한다.

<pre><code>
@mixin border-radius($radius){
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

.box {
  @include border-radius(10px);
}
</code></pre>

## Extend/ Inheritance
`@extend`는 한 선택자의 속성들을 다른 속성자와 공유하게 해주는, Sass의 막강한 기능이다. (그러나 Sass guideline에서는 `@extend`는 사용하지 말라고 했다.) 

## Operators
CSS 코드 내에서 연산을 해주는 것이다. `+`,`-`,`*`,`-`,`%`가 가능하다. %로 이루어진 그리드를 작성할 때도 계산을 해서 값만 넣을 필요가 없이 계산식을 넣을 수 있다. 나눗셈, 곱셈 등을 할 때 단위도 함께 처리된다는 것에 유념해야 한다.

- - -
## 지켜야할 것들
1. 메인 스타일시트 최상단에 인코딩 강제하기 (`@charset 'utf-8';`)
2. 문자열을 따옴표로 감싸서 오류 줄이기 (색이름, 폰트명, url 등)
3. 1보다 작은 소수에 앞장서는 0 표기하고, 뒤따르는 0은 절대 표기하지 말 것
4. 길이를 다룰 때 0 값은 절대로 단위를 붙여서는 안됨 (i.e., `0em`이라고 쓰면 안됨). 만약 어떤 값에 자동으로 단위를 붙이고자 한다면 문자를 더하는 개념이 아닌 기본단위를 곱하는 개념을 사용함. 예를 들면, `$length: $value + px;`이 아니라 `$length: $value * 1px;`이렇게 해야함. `+ 0px;`도 효과가 같긴하지만, 단위 변경 등에 있어서 혼란의 여지가 있음.
5. 값의 단위 제거 시에는 같은 종류의 한 단위로 나누면 된다. `$value: $length / 1px;` 이렇게.
6. 최상위 숫자 계산은 언제나 괄호로 감싸져야 한다. `.rect{width: (100% / 3);}` 이렇게.
7. 우리가 z-index 등을 쓸 때 자주 사용하는, 어쩌다보니 맞아떨어지지만 어떤 논리적관련성도 없는 임의의 숫자지정을 매직넘버라고 한다. 매직넘버는 될 수 있으면 사용하지 말아야 하고, 사용시 주석을 달아서 매직넘버라는 사실과 사용한 목적과 기준을 명시하여야 한다.
8. 색은 HSL로 지정하고, 한 번 이상 사용하는 색이라면 색의 특성과 관련된 이름을 붙여 변수에 저장한다. 그리고 사용되는 목적으로 상위 변수를 지정하여 사용한다.<br/>
<pre><code>
    $sass-pink: hsl(300, 50%, 60%);
    $main-nav-bar-color: $sass-pink;
</code></pre>
9. 리스트는 한 줄 혹은 여러 줄로 작성을 하는데, 80자 이상이면 여러 줄로 작성. 언제나 괄호로 감싸며, 여러 줄인 경우 마지막 항목에도 뒤따르는 쉼표를 붙인다. 리스트에 아이템을 새로 추가할 때는 수동으로 추가하지 말고 반드시 `append`로 추가한다.<br />
<pre><code>
// 한 줄 버전
$font-stack: ('Helvetica', 'Arial', sans-serif);
// 여러 줄 버전
$font-stack: (
  'Helvetica',
  'Arial',
  sans-serif,
);
</code></pre>
10. 스타일 시트에서 속성 정렬하는 방법이 개발자들마다 다르다. 알파벳 순, 비슷한 유형끼리 묶기 등이 있다. 최근에 markdown css를 작성하면서 이 속성 정렬 기준이 필요하다고 느꼈는데, 이제부터 나는 박스속성에서 바깥쪽부터 안쪽으로 들어오는 방식으로, 그리고 비슷한 유형끼리, 비슷한 것 내에서는 알파벳 순으로 하기로 해본다. (2016. 04. 09)
11. 인터페이스를 컴퍼넌트의 모음이라고 여기기. 예를 들면, 검색 폼은 다른 위치, 다른 페이지, 다양한 상황에서 재사용이 가능해야하므로 컴포넌트로 취급되어야 하고, 따라서 DOM에서의 위치에 의존적으로 작성되어서는 안되고 재사용 가능하게 만들어져야 한다.

## Sass 설계
### 폴더링
<pre><code>
sass/
|
|– base/
|   |- _base.scss        # 자주 사용되는 HTML 요소에 대한 표준 스타일링
|   |– _reset.scss       # Reset/normalize
|   |– _typography.scss  # 타이포그래피 규칙
|   …                    # 기타.
|
|– components/           # 구체적인 모듈에 초점을 둔다.
|   |– _buttons.scss     # 버튼
|   |– _carousel.scss    # 캐러셀
|   |– _cover.scss       # 커버
|   |– _dropdown.scss    # 드롭다운
|   …                    # 기타.
|
|– layout/              
|   |– _navigation.scss  # 네비게이션
|   |– _grid.scss        # 그리드 시스템
|   |– _header.scss      # 헤더
|   |– _footer.scss      # 푸터
|   |– _sidebar.scss     # 사이드바
|   |– _forms.scss       # 폼
|   …                    # 기타.
|
|– pages/                # 페이지에 한정된 스타일이 있다면.
|   |– _home.scss        # 홈 한정 스타일
|   |– _contact.scss     # 연락처 한정 스타일
|   …                    # 기타.
|
|– themes/
|   |– _theme.scss       # 디폴트 테마
|   |– _admin.scss       # 관리자 테마
|   …                    # 기타.
|
|– utils/                # 모든 Sass 도구와 헬퍼를 모음.
|   |– _variables.scss   # Sass 변수
|   |– _functions.scss   # Sass 함수
|   |– _mixins.scss      # Sass 믹스인
|   |– _helpers.scss     # 클래스 & 플레이스홀더 헬퍼
|
|– vendors/              # 외부 라이브러리와 프레임워크의 CSS.
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   …                    # 기타.
|
|- vendors-extensions/   # vendor 원본을 일부 수정한 파일.
|   |- _bootstrap.scss   # vendor 원본을 일부 수정한 bootstrap.
|
`– main.scss             # 메인 Sass 파일. 유일하게 언더바로 시작하지 않음.
</code></pre>
### import 순서
1. venders/
2. utils/
3. base/
4. layout/
5. components/
6. pages/
7. themes/
y

## 이해 못한 부분 다시 꼭꼭 씹기
### Sass에서의 색 사용
HSL 색공간을 사용한다는 것의 이유는 충분히 납득감. lighten이나 darken에서 `mix`를 사용한다는데 아직 `mix`를 잘 몰라서인지 방법이 이해가 안감. 따라서 Sass에서의 색 사용에 대한 공부를 하여서 Sass를 사용하면서 일러스트레이터나 color 조절해가며 보는 사이트를 찾지 않아도 될 만큼 자체적으로 효율성 있는 방법을 채택하려고 한다.uuu
`대한 공부를 하여서 Sass를 사용하면서 일러스트레이터나 color 조절해가며 보는 사이트를 찾지 않아도 될 만큼 자체적으로 효율성 있는 방법을 채택하려고 한다.uuu
u``````````````````

## 이해 못한 부분 다시 꼭꼭 씹기
### Sass에서의 색 사용
`대한 공부를 하여서 Sass를 사용하면서 일러스트레이터나 color 조절해가며 보는 사이트를 찾지 않아도 될 만큼 자체적으로 효율성 있는 방법을 채택하려고 한다.```````````

## 이해 못한 부분 다시 꼭꼭 씹기
### Sass에서의 색 사용
HSL 색공간을 사용한다는 것의 이유는 충분히 납득감. lighten이나 darken에서 `mix`를 사용한다는데 아직 `mix`를 잘 몰라서인지 방법이 이해가 안감. 따라서 Sass에서의 색 사용에 대한 공부를 하여서 Sass를 사용하면서 일러스트레이터나 color 조절해가며 보는 사이트를 찾지 않아도 될 만큼 자체적으로 효율성 있는 방법을 채택하려고 한다.

## 이해 못한 부분 다시 꼭꼭 씹기
### Sass에서의 색 사용
HSL 색공간을 사용한다는 것의 이유는 충분히 납득감. lighten이나 darken에서 `mix`를 사용한다는데 아직 `mix`를 잘 몰라서인지 방법이 이해가 안감. 따라서 Sass에서의 색 사용에 대한 공부를 하여서 Sass를 사용하면서 일러스트레이터나 color 조절해가며 보는 사이트를 찾지 않아도 될 만큼 자체적으로 효율성 있는 방법을 채택하려고 한다.


`HSL 색공간을 사용한다는 것의 이유는 충분히 납득감. lighten이나 darken에서 `mix`를 사용한다는데 아직 `mix`를 잘 몰라서인지 방법이 이해가 안감. 따라서 Sass에서의 색 사용에 대한 공부를 하여서 Sass를 사용하면서 일러스트레이터나 color 조절해가며 보는 사이트를 찾지 않아도 될 만큼 자체적으로 효율성 있는 방법을 채택하려고 한다.


## 이해 못한 부분 다시 꼭꼭 씹기

## 이해 못한 부분 다시 꼭꼭 씹기


## 이해 못한 부분 다시 꼭꼭 씹기

## 이해 못한 부분 다시 꼭꼭 씹기
### Sass에서의 색 사용

## 이해 못한 부분 다시 꼭꼭 씹기
### Sass에서의 색 사용
`### Sass에서의 색 사용

## 이해 못한 부분 다시 꼭꼭 씹기
### Sass에서의 색 사용
HSL 색공간을 사용한다는 것의 이유는 충분히 납득감. lighten이나 darken에서 `mix`를 사용한다는데 아직 `mix`를 잘 몰라서인지 방법이 이해가 안감. 따라서 Sass에서의 색 사용에 대한 공부를 하여서 Sass를 사용하면서 일러스트레이터나 color 조절해가며 보는 사이트를 찾지 않아도 될 만큼 자체적으로 효율성 있는 방법을 채택하려고 한다.```````````

## 이해 못한 부분 다시 꼭꼭 씹기````dfhy

## 이해 못한 부분 다시 꼭꼭 씹기
### Sass에서의 색 사용
HSL 색공간을 사용한다는 것의 이유는 충분히 납득감. lighten이나 darken에서 `mix`를 사용한다는데 아직 `mix`를 잘 몰라서인지 방법이 이해가 안감. 따라서 Sass에서의 색 사용에 대한 공부를 하여서 Sass를 사용하면서 일러스트레이터나 color 조절해가며 보는 사이트를 찾지 않아도 될 만큼 자체적으로 효율성 있는 방법을 채택하려고 한다.

### 맵
자바스크립트의 연관 배열과 유사한 개념이라고 하는데 아직 안써봐서 모르는 것.

### CSS 설계 양식
OOCSS, Atomic Design, Bootstrap류, Foundation류 등.
