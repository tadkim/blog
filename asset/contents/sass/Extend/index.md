<table id="meta">
    <thead><th>160413</th><th>Sass</th><th>김태경</th></thead>
    <tbody>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    </tbody>
</table>

# Extend

- `@extend` : 마치 선택자 B에도 연결된 것처럼 요소 A를 꾸미라고 Sass에게 지시.
    - 이에따라 `@extend`는 모듈식 CSS를 작성할 때 효율적.
* Hugo Giraudel는 비 추천하는 기능이라고 소개.
>*그 결과는 무해할 수도 있고 처참한 부작용을 초래할 수도 있습니다. 이 때문에, 제 첫 번째 조언은 `@extend` 지시어를 완전히 피하라는 것입니다. 너무 인정사정없이 들릴 수 있지만, 가장 중요한 것은 덕분에 두통과 골칫거리를 덜 수 있다는 점입니다.*

선택자의 확장이 유익하고 가치 있다면, `@extend` 를 사용할 수도 있다. 그러나 뚜렷하지 않다면
추후 곤란해지지 않도록 규칙을 정하고 항상 염두해 둔다

* 다른 모듈들에 걸치지 않게, 한 모듈 안에서 확장을 사용한다.
* 오로지 플레이스홀더에만 확장을 사용하고, 실제 선택자에는 사용하지 말라.
* 확장하는 플레이스홀더가 가능한 한 적게 존재하도록 하라.


* 확장은 `@media` 블록과는 제대로 작동하지 않음.
    * mediaQuery 사용시 주의 요망.
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
