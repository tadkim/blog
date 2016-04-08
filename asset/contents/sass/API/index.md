#API


## `!default` 플래그

`!default` 플래그는, 작성한 Sass 코드를 외부(또는 협업 개발자)에게 배포시, 배포된 코드에 대한 변수 정의가 자유롭게 이루어질 수 있도록 배포 전 미리 설정 해 주는 것. 구체적으로 다음과 같은 사용이 예상되는 경우 작성한다.

- 라이브러리 배포
- 프레임워크 배포
- 그리드 시스템 배포
- 기타  배포되어 외부의 개발자들에 의해 사용될 Sass 소품 개발시

배포된 코드를 접한 누군가가, 내가 선언한 변수를 덮어 쓸 수 있도록 설정해주는 개념.
ex) 덮어쓰일 수 있도록 모든 환경설정 변수들을 `!default` 플래그를 붙여 정의.

<pre class="highlight"><code class="css">
$baseline: 1em !default; //원작자 코드 : mBostock이 정의한 코드
$baseline: 2em; // 배포 코드를 접한 개발자 : 탬이 정의한 코드.
// `$baseline`를 선언하는 라이브러리
@import 'your-library'; //mBostock의 라이브러리를 로드하여도
// $baseline == 2em; //탬이 정의한 코드가 출력되는 거지
</code></pre>

즉, `!default` 플래그 선언 덕분에, 나 아닌 다른 개발자가 "저걸 @import 하면, 내가 위에서 작성한 변수가 덮어쓰기 되면 어떡하지?" 라는 고민 없이 코드작성을 진행할 수 있음. 위 예시 코드 기준으로 설명해보면 - `!default` 를 활용하여 재정의될 걱정 없이 자신의 `$baseline` 변수를 정의할 수 있게 되는 개념.

- - -
## `!global` 플래그

- 사용시점 : 오직 지역 스코프로부터 전역 변수를 정의할 때만.
- Anti pattern : 루트 레벨에서 변수를 정의할 때, `!global` 플래그는 생략해야한다.

<pre class="highlight"><code class="css">
// Yep.
$baseline: 2em;

// Nope
$baseline: 2em !global;
</code></pre>
