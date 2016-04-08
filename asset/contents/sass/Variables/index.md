
# 변수(Variables)

- 가장 중요한 점은 값 수정을 매우 쉽게 만들어준다는 것 : 더이상 찾아서 바꾸기나 하나하나 고칠 필요가 없는 것
* 유효범위 없음
* 가이드 : 타당한 상황에서만 변수를 생성
    * 값이 적어도 두 번 반복된다;
    * 값이 적어도 한 번은 수정될 가능성이 크다;
    * 값의 실현은 모두 변수와 관련되어 있다(즉, 우연에 의한 것이 아니라).



___
## 여러 개의 변수 or 맵

여러 개의 다른 변수들 대신 **맵을 사용함으로써 얻는 이점이 있다.**습니다.
가장 중요한 것은 맵을 반복해서 순환하는 기능인데, 별개의 변수들로는 이것이 불가능합니다.

1. 맵 사용시 장점
- 맵 반복 순환 기능 : 별개의 변수로는 불가능한 기능.
- 작은 getter 함수 생성 기능 : 사용이 편리한 API를 제공하는 작은 getter 함수 생성 기능.

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
</code></pre>
>*HTML, CSS, JS 기반으로 제작하다보면 z-index를 남용하기쉽다. 만약 `z-index`를 훌륭하게  사용했다고 하더라도,
어떤 요소에 어떤 중요도로 부여해왔는지 더듬더듬 거리다가 결국, `find`기능으로 찾게된다. 소잃고 외양간 고치기보다
이 맵 기능을 사용하여 다양한 변수에대해 지정했던 `z-index`값을 보다 쉽고 효율적으로 관리할 수 있을 것으로 생각한다.*



<pre class="highlight"><code class="css">
/// 레이어 이름으로부터 z-index 값을 가져온다.
/// @access public
/// @param {String} $layer - 레이어 이름
/// @return {Number}
/// @require $z-indexes
@function z($layer) {
  @return map-get($z-indexes, $layer);
}
</code></pre>

위 코드 예시에서 눈여겨 볼 것은 `@return` 이다. 이 `@return`으로 특정 정보나 값을 넘겨 줬을 때
Sass가 해당 요소의 *Attribute 정보를 리턴*해주는 구문을 작성해볼 수 있다.

> @param 은 JSDOC3 에 사용하는 용어 중 하나로 ' 파라미터 타입을 의미'한다.


_ _ _



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
