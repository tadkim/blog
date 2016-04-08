## 리스트

* 리스트는 Sass에서 배열에 상당하는 개념.
 * 리스트는 어떤 타입의 값이든(리스트도 포함. 이 경우 내포 리스트가 된다) 저장할 수 있게 의도된 ([맵](#section-32)과 달리) **평면적인 데이터 구조**입니다.

**리스트 사용 가이드라인**

* 한 줄 혹은 여러 줄;
* 80자 줄에 안 들어갈 정도로 길면 반드시 여러 줄에 표기;
* CSS 상에서 그대로 사용되지 않는 한, 언제나 쉼표로 분리;
* 언제나 괄호로 감싼다;
* 여러 줄인 경우 뒤따르는 쉼표를 붙이고, 한 줄인 경우 제외.

<pre class="highlight"><code>
// Yep
$font-stack: ('Helvetica', 'Arial', sans-serif);

// Yep
$font-stack: (
  'Helvetica',
  'Arial',
  sans-serif,
);

// Nope
$font-stack: 'Helvetica' 'Arial' sans-serif;

// Nope
$font-stack: 'Helvetica', 'Arial', sans-serif;

// Nope
$font-stack: ('Helvetica', 'Arial', sans-serif,);
</code>
</pre>


리스트에 새로운 아이템을 추가할 때는, 언제나 제공된 API를 이용하세요. 수동으로 새로운 아이템을 추가하려고 하지 마세요.


<pre class="highlight"><code>
shadows: (0 42px 13.37px hotpink);

// Yep
$shadows: append($shadows, $shadow, comma);

// Nope
$shadows: $shadows, $shadow;
</code></pre>

###### 참고

* [Understanding Sass lists](http://hugogiraudel.com/2013/07/15/understanding-sass-lists/)
* [SassyLists](http://sassylists.com)

