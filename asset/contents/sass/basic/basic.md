
<table id="meta">
    <thead><th>160331</th><th>Sass</th><th>김태경</th></thead>
    <tbody>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    </tbody>
</table>

# Sass Tutorials - Intro 및 기초내용 이해

이 문서는 `Sass Tutorials`를 시작하기에 앞서, 해당 과정에서 바탕으로하는 `Sass-lang.com`페이지에서 제공하는 `Sass Basic` 내용을 바탕으로 Sass의 기본 내용을 이해하기 위해 작성되었다.

문서의 내용 중, 확실하지 않은 부분은 ~~취소선~~으로 표시하였으며, 해당 부분은 기술학습을 진행하면서 추후 수정할 예정이다.



- [ `VIDEO` 챕터1 Sass 설치하기 ](https://youtu.be/fbVD32w1oTo?list=PL2CB1F80266E986EA)
- [ `WEB` Sasslang ](http://sass-lang.com/guide)

![ sass-lang.com  ](http://whiteleo.azurewebsites.net/colony/markdown/sass/img/sass_intro.png " sass_01 ")

[ sass-lang.com 웹페이지 메인 화면 캡쳐 ]

Sass 는 굉장히 흥미로운  CSS3의 Extension 이며,  우리의 삶을 풍요롭게 해줄 도구이다. Sass가 CSS에 비해 어떤 점에서 얼마나 쉽고 효율적인 작업을 하는지 살펴볼 수 있다


___
## Sass 기초
Sass에 대한 기본적인 내용은 [Sass의 공식 홈페이지](http://sass-lang.com/guide)에서 확인할 수 있으며,  그 내용은 크게 다음과 같다

- 전처리(Preprocessing)
- 변수(Variable)
- 중첩 (Nesting)
- Partials
- Imports
- 믹스인(Mixins)
- 상속 (Inheritance)
- 연산자 (Opearator)


__
### 전처리(Preprocessing)

기본 CSS파일 편집이 재미있을 수 있지만,  스타일 시트가 점점 더 크고 복잡해지면서 유지보수가 어려워지고있다. `sass`는 이를 위한 전처리(Preproceesor)도구이다.

`sass`는 '변수, '중첩', '믹스인'등과 같이 CSS에 존재하지 않는 기능을 사용할 수 있도록 하여 암흑같던 CSS 작업에 빛이 되어준다.

당신이 `Sass`로 tinkering 하면, `Sass`파일을 당신의 웹사이트에서 사용할 수 있는 일반적인 CSS파일로 저장해준다.

terminal을 통해 `Sass`를 바로 시작해 볼 수 있다. `Sass`가 설치되면 당신은 다음 과 같은 명령어를 terminal에서 실행가능하다

        sass inpu.css output.css

또한 당신은 개별 파일 또는 전체 디렉토리를 `--whatch` flag를 통해 볼 수 있다. 전체 디렉토리를 보면서 사스를 실행하는 예시 코드는 다음과 같다

        sass --watch app/sass:public/stylesheets

___
### 변수(Variables)

변수란, 쉽게 말해  "스타일시트 전반에 걸쳐 재사용 가능하도록 정보를 저장하는 것 "이라고 할 수 있다. 당신은 스타일시트를 작성하면서 추후 반복적으로 다시 사용해야하는(작성해야하는)변수들을 특정 변수로 저장해둘 수 있다. `Sass`는 이 같은 변수 할당 작업에 `$`라는 기호를 사용한다.

다음은 `Sass`에서 변수를 할당하는 예시 코드이다

    /* Sass Syntax Example */

    $font-stack:    Helvetica, sans-serif
    $primary-color: #333

    body
      font: 100% $font-stack
      color: $primary-color

`Sass`가 전처리되면(preprocessed), 우리가 위에서 정의했던 `$font-stack`과 `$primary-color`변수는 normal CSS파일에서 변수값을 정상적으로 출력하게 된다. 이러한 기능을 사용하면, 반복적으로 색상코드값을 입력하지않아도 될 뿐 아니라 CSS파일이 복잡해지고 길어지는 경우 특히 유용하게 사용된다.

다음은 `Sass`코드를 전처리하여 얻은 normal CSS 파일의 코드이다

    /* Sass 파일을 전처리하여 얻은 normal CSS 코드의 모습 */
    body {
      font: 100% Helvetica, sans-serif;
      color: #333;
    }


___
### 중첩(Nesting)
HTML 마크업을 작성할 때, 우리는 중첩하는(nesting) 방법으로 작성 했었다. 반면 CSS에서는 중첩하지 않고 선택자만을 활용해 작성했었다.

`Sass`문법에서는 HTML과 동일한 계층 구조를 활용하여 중첩된 마크업 요소들을 선택할 수 있게 한다. 

단, `Sass`에서 지나치게 중첩을 사용하는 것은 나쁜 관행으로 간주될 뿐 아니라, 규칙을 유지하기도 어렵다는 사실을 주의할 필요가 있다. 이를 염두하면서 아래 코드를 통해 일반적으로 사용되는 형태를 확인 해보자. 


    /* Sass Example - Nesting */
    nav
        ul
            margin: 0
            padding: 0
            list-style: none

        li
            display: inline-block

        a
            display: block
            padding: 6px 12px
            text-decoration: none
        
위 코드는 네비게이션 구조를 작성하는 데 활용 되는 `nav`와 그 하위계층으로 `ul`, `li`, 그리고 `a` 태그에 대한 CSS 작성 예시이다. 이처럼 작성하면 기존  작성법에 비해 CSS코드를 인간의 눈으로 이해하는데 있어 많은 도움이 된다.

위 `Sass`코드를 컴파일 할 경우, 아래와 같은 normal CSS 코드를 얻게 된다.
    
    /* Sass Example - Nesting */
    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    nav li {
        display: inline-block;
    }

    nav a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }

___
### Partials

~~이 부분에 대해서는 한번 저제후 다시 정리작업을 할 예정이다.~~

~~`Particals`란, 당신이 다른 `Sass`파일에 포함할 수 있는 CSS의 작은 조각 파일을 말한다. 이것은 당신의 CSS를 모듈화 및 유지 보수 일을 더 쉽게 할 수 있는 좋은 방법이다.~~

~~`partial`은 간단하게 `_partial.scss`와 같이 밑줄로 시작하는 `Sass`파일이다. 이러한 형태의 파일이 일부임을 알고 이것이 CSS파이롤 생성되지 않도록 해준다. `Sass`의 `Partial`은 `@import`와 함께 사용된다.~~

___
### 삽입(Import)

CSS는 유지보수를 위해 사용하는 `@import` 옵션을 가지고 있다. 이 `@import`옵션의 유일한 단점은 당신이 사용할 때마다 CSS는 또다른 HTTP request를 생성한다는 것이다. 

`Sass`는 `HTTP request`을 요구하는 방법 대신에, 현재 css의 `@import` 위에 빌드한다. `Sass`는  당신이 삽입, 그리고 결합하고자하는 파일을 웹브라우저에서 하나의 css파일로 삽입하는 형태로 가져올 것이다.  

만약 당신이 `_reset.scss`와 `base.scss`라는 `Sass`파일을 가지고 있다고 생각해보자. 우리는 `_rest.scss`파일을 `base.scss`로 삽입하려고 한다. 이 경우에는 다음 과 같읕 코드로 간단하게 삽입이 가능하다.


    // _reset.sass

    html,
    body,
    ul,
    ol
        margin:  0
        padding: 0
    
<br/>    

    // base.sass

    @import reset

    body
        font: 100% Helvetica, sans-serif
        background-color: #efefef


여기서 우리는 `@import 'reset`;`이라는 방법으로  `_reset.sasss`을 `base.scss`로 삽입했다는 점을 주의깊게 살펴보아야 한다. 우리가 이전 방법에서 그랬던 것 처럼 각가의 파일과 그 확장자를 포함하는 것이 필요가 없다.

`Sass`는 아주 영리하게도 당신이 작성한 코드를 이해하여 normal CSS로 변환할 것이다.

    html, body, ul, ol {
    margin: 0;
    padding: 0;
    }

    body {
    font: 100% Helvetica, sans-serif;
    background-color: #efefef;
    } 
    
___
### 믹스인(Mixins)

CSS에는 몇 가지 피할 수 없는 지루한 작성 작업이 있다. 그 중하나가 CSS3 및 현존하는 많은 업체별 접두사(vendor prifix)에 대한 작성이다. 믹스인으로 당신이 작성할 사이트 전반에 걸쳐 적용 가능한 CSS 선언의 그룹을 만들 수 있다. 당신은 다양한 환경에 맞추어 믹스인을 유연하게 작성할 수 있다. 

다음은 `border-radius`에 대한 믹스인 예제이다.

    =border-radius($radius)
        -webkit-border-radius: $radius
        -moz-border-radius:    $radius
        -ms-border-radius:     $radius
        border-radius:         $radius

    .box
        +border-radius(10px)
        
        
___
### 확장(Extend) / 상속(Inheritance)

이 `Extend`와 `Inheritance`는 `Sass`의 가장 유용한 기능 중 하나이다. `@extend`하면 특정 선택자에 적용된 CSS 셋을 다른 것에도 적용할 수 있게된다. 

여기서는 erros, warnnings, success 메시지에 대해 살펴보도록 하자.

    .message
        border: 1px solid #ccc
        padding: 10px
        color: #333


    .success
        @extend .message
        border-color: green


    .error
        @extend .message
        border-color: red


    .warning
        @extend .message
        border-color: yellow


위의 `Sass`코드 결과로 아래의 normal CSS를 얻을 수 있다.

    .message, .success, .error, .warning {
        border: 1px solid #cccccc;
        padding: 10px;
        color: #333;
    }

    .success {
        border-color: green;
    }

    .error {
        border-color: red;
    }

    .warning {
        border-color: yellow;
    }


> *탬 said , 이러한 속성을 사용하면 d3.js 차트 패키징화에도 엄청난 도움이 될 것같다. 예를들어 d3.js에서 .enter() 이후 .style()라거나 .attr()로 요소의 스타일요소들 - size, fill, border, font-size, opaicty 등 을 다뤘었는데, 그럴 것이아니라 .attr("class", "----")로 지정하여 클래스 별 조작을 한다면 최종 ouput되는 코드량도 줄 뿐 아니라, 유지보수도 조금 더 용이 해지고, 재사용도 가능해질 것 같은 생각이 든다.*

___
### 연산자(Operators)

`Sass`를 활용하면 CSS의 수학 연산작업이 매우 용이해 진다. `Sass`는 매우 유용한 수학의 기본 연산자인 `+`, `-`, `*`, `/`, `%`를 지원한다. 

다음 예제는 `Sass`를 활용하여, `aside` & `article`의 너비를 계산하는  간단한 수학연산 예제이다.


    .container
        width: 100%

    article[role="main"]
        float: left
        width: 600px / 960px * 100%


    aside[role="complementary"]
        float: right
        width: 300px / 960px * 100%

위의 코드로 우리는 쉽게 960px 기반의 유동적인 그리드를 만들 수 있다. 이처럼 `Sass`의 `Operator`를 활용하면 번거로운 추가 작업없이 pixel 값을  percentage 값으로 변환 할 수 있다. 우리는 위의 `Sass`코드로 아래와 같은 normal CSS 파일을 얻을 수 있다.

    .container {
        width: 100%;
    }

    article[role="main"] {
        float: left;
        width: 62.5%;
    }

    aside[role="complementary"] {
        float: right;
        width: 31.25%;
    }

  

###참고 자료
___

ㅇ


