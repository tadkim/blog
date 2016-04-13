<table id="meta">
    <thead><th>160413</th><th>Sass</th><th>김태경</th></thead>
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

Sass를 이용한 기존 코드 개선 프로젝트는 다음과 같은 순서로 진행된다.

1. 단일 mixin 활용 :  막대 스타일 변경위한  `default theme` 작성 후 적용
2. 다중 mixin 활용 : 막대 스타일 중, 막대바 color  속성 변경을 위한 믹스인과, 텍스트 속성 변경위한 믹스인을 별개로 작성하여 `@inclue`하여 진행.
3. custom mixin 제작 : 기존 작성된 mixin만을 로드하는 것이 아니라, SCSS내에서 자유롭게 색상을 지정해줄 수 있는 mixin 제작
4. NYT 사례에 적용





 _ _ _

### 단일 mixin 활용
 앞서 설명한 내용대로 d3 막대차트의 색상을 변경하기 위해 Sass의 mixin 기능을 활용하여
  `default theme` 을 작성하고, 그것을 d3차트에 적용해본다.
<div class="tem">여기서 복잡복잡한 믹스인을 중첩하여 사용하면 이해도하기 전에 복잡함에 겁을 먹을 수 있다. 그래서 우선은 d3 차트의 색상만 다루는 믹스인을 작성해보기로한다.</div>


#### Sass의 Mixin기능을 적용할 영역은 크게 4곳이다.
- SVG의 배경색상
- 막대 차트의 막대 색상
- 막대 차트의 막대 이벤트(mouseover)시 강조 색상
- 막대 차트의 라벨(text)색상

#### 작업 진행에 사용할 CSS 선택자 정리
- SVG의 배경색상 : `svg{ ... }`
- 막대 차트의 막대 색상 : `.bar{ ... }`
- 막대 차트의 막대 이벤트(mouseover)시 강조 색상 `.bar_mouseover{ ... }`
- 막대 차트의 라벨(text)색상 : `.label{ ... }`


#### 실제 코드 확인하기

<pre class="highlight"><code class="scss">
/* mixin for color setting (svg, bar, mouseover, label) --------------*/
@mixin theme_default(
  // 이 default mixin에서는 color를 대상으로 매개변수를 받는다. 매개변수 자체를 Sass의 변수(Variables)를 활용해도 좋지만, 여기서는 코드의 복잡성을 줄이기위해 mixins의 매개변수가 미리 정해둔 색상을 가리키도록 설정했다.
  $col_svg:hsl(176, 66%, 36%), //svg 배경 색상
  $col_bar:hsl(340, 10%, 50%), // 막대 바 색상
  $col_bar_hover:hsl(340, 76%, 50%), //막대 바 mouseover시 색상
  $col_text:hsl(0, 0%, 100%) // 막대차트 라벨(text) 색상
  ){
  svg{ background-color:$col_svg; }
  .bar{ fill:$col_bar; }
  // .bar:hover{ fill:$col_bar_hover; }  //hover는 모바일, IE7이하 지원 문제로 권장가이드에서 제외하였음.
  .bar_mouseover{ fill:$col_bar_hover; }
  .label{ font-size:12px; fill:$col_text; text-anchor:middle;} //lable영역 역시, 아래에서 따로 다루기때문에 지금은 '있다'정도만 보고 지나가자.
}
</code></pre>

사실 이와 관련하여 `:hover`에 대한 이슈가 있었다. d3js의 스타일을 CSS에서 컨트롤한다는 점에서 `:hover`는 매우 매력적인 CSS 기능이다. 그러나 `:hover`의 경우 위 코드의 주석에서도 지적했던대로 `IE7`이하를 지원하지 않는데다가, 무엇보다 스마트폰에서 동작하지 않는다. 따라서, `:hover`보다는 d3에서의 코드컨트롤이나 자바스크립트 전반에서 이롭도록, `bar_mouseover` 라는 클래스명을 정의하여 d3내에서 해당 요소를 스크립트를 활용해 컨트롤하도록 한다.

_ _ _
#### 전체 코드 확인하기
백문이 불여일견. 전체코드를 맥락 위에서 이해하는 것이 어쩌면 가장 쉽고 간단한 방법일 수 있다.

<iframe height='382' scrolling='no' src='//codepen.io/colony-tad/embed/MyVjBN/?height=382&theme-id=0&default-tab=css' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/colony-tad/pen/MyVjBN/'>d3 style (with Sass)</a> by tadkim (<a href='http://codepen.io/colony-tad'>@colony-tad</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

_ _ _
### 다중 mixin 활용

위에서 Sass의 `@mixins` 기능을 활용하여 d3의 style속성을 변경하는 `theme_default` 믹스인을 작성, 활용했다.

`단일 mixin 활용` 에서 작성했던 코드 중 가장 아래에 보면 `.label`이라는 클래스를 정의하는 부분이 있다. 사실, 위에서는 색상에 대한
내용만 정의하고 넘어가느라 이부분에 대해서는 재사용이 힘든형태로 남겨두었다. 이 단계에서는 이부분에 대해 다루려고 한다.


  - ~~*단일 mixin 활용 : 색상관련 믹스인 정의 및 활용*~~
  - 다중 mixin 활용 : 단일  mixin 에서 작성한 코드에 새로운 mixin을 추가하여 재사용 가능한 코드 만들기.


#### 새롭게 추가할 Mixin
- 단일 mixin 코드의 `.label` 영역에 적용할 mixin.
- text 관련 속성을 하나의 mixin으로 작성 후, 기존 테마 mixin에서 `@include`하여 사용하기


#### 작업 진행에 사용할 CSS 선택자 정리
- SVG의 배경색상 : `svg{ ... }`
- 막대 차트의 막대 색상 : `.bar{ ... }`
- 막대 차트의 막대 이벤트(mouseover)시 강조 색상 `.bar_mouseover{ ... }`
- 막대 차트의 라벨(text)색상 : `.label{ ... }`

<pre class="highlight"><code class="css">
/* mixin for graph label(text) --------------*/
@mixin theme_custom_text($font-family:$ft_hanna, $label_size:12px, $label_anchor:middle){
  font-family: $font-family;
  font-style: italic;
  font-size:$label_size;
  text-anchor:$label_anchor;
}
/*
사용 방법1 : @include theme_custom_text; //기본
사용 방법2 : @include theme_custom_text($ft_hallasan); //폰트만 hallasan으로 변경
사용 방법3 : @include theme_custom_text($ft_hallasan, 20px); //폰트 hallasan, 폰트크기 20px로 변경
사용 방법4 : @include theme_custom_text($ft_hallasan, 20px, middle); //폰트 hallasan, 폰트크기 20px, 텍스트기준점(중간)으로 변경
*/
</code></pre>
_ _ _
#### 전체 코드 확인하기
백문이 불여일견. 전체코드를 맥락 위에서 이해하는 것이 어쩌면 가장 쉽고 간단한 방법일 수 있다.

<iframe height='268' scrolling='no' src='//codepen.io/colony-tad/embed/YqapRd/?height=268&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/colony-tad/pen/YqapRd/'>d3_sass_multiple_mixins</a> by tadkim (<a href='http://codepen.io/colony-tad'>@colony-tad</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

_ _ _
### Custom mixin 제작 및 활용



_ _ _
### NYT style mixin 제작 및 활용