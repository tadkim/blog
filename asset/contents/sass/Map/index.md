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