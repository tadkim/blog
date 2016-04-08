
___
## Color

* 색은 CSS 에서 중요함
* 자연스럽게, Sass는 몇 가지의 [강력한 함수](http://sass-lang.com/documentation/Sass/Script/Functions.html)을 제공함으로써 색 조작에 있어 엄청난 무기(?)가 되었음.



### Color Guide

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
### Color & Variables

* 색을 한 번 이상 사용시, 색을 대변하는 의미 있는 이름으로 변수에 저장하여 쓴다.


<pre class="highlight"><code>
$sass-pink: hsl(330, 50%, 60%);
</code></pre>

만약 변수의 용도가 테마와 깊은 관련이 있다면, 변수를 그대로 사용하는 대신, 사용법 설명을 붙여 또 다른 변수에 저장해서 쓴다.
<pre class="highlight"><code>
$main-theme-color: $sass-pink;
</code></pre>


이렇게 함으로써 테마 변경이 `$sass-pink: blue` 같은 사태를 초래하는 것을 방지가능.

### to Adjust the Color Contrast 색 명암 조절

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

