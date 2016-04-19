<table id="meta">
    <thead><th>160406</th><th>Sass</th><th>김태경</th></thead>
    <tbody>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    </tbody>
</table>

# 스코프(Scope)


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

<p data-height="421" data-theme-id="0" data-slug-hash="JXMXZx" data-default-tab="css" data-user="colony-tad" class="codepen">See the Pen <a href="http://codepen.io/colony-tad/pen/JXMXZx/">JXMXZx</a> by tadkim (<a href="http://codepen.io/colony-tad">@colony-tad</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

![이미지이름](https:/---- "여기에 피그")