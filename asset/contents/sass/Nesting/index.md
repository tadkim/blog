
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

___
### 예외

- 우선, 원래의 선택자 안에 가상 클래스와 가상 요소를 내포하는 것은 허용되며, 추천할만 하다.
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