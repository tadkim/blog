<table id="meta">
    <thead><th>160406</th><th>Sass</th><th>김태경</th></thead>
    <tbody>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    </tbody>
</table>

# Colony Sass Summary


## Sass란?

[Sass](http://sass-lang.com)는 [공식 문서](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)에서 스스로를 이렇게 묘사하고 있다:

> 사스는 기초 언어에 힘과 우아함을 더해주는 CSS의 확장이다.

- 목적 : CSS 결함 보정
- 역할 : CSS의 구문을 개선
- 핵심 : CSS를 완전한 기능의 언어로 바꾸지 않는다는 것.
- 우리의 관점 : Sass에도 올바른 사용법이 있고, 이에 대한 학습 및 다양한 탐구가 필요하다는 것을 인지한다.(공짜는 없다.)


###### 참고

* [Sass](http://sass-lang.com)
* [Sass documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html)



## Sass 혹은 SCSS

*"Sass? SCSS?"*

- Sass 초기에는 들여쓰기의 가치를 핵심 특성으로 삼고, 의존.
- 이후 SCSS는 *Sassy CSS*를 의미하며, CSS와 비슷한 구문을 제공.
> SCSS의 모토: "만약 유효한 CSS라면, 유효한 SCSS이다."
- 둘은 정확히 동등한 기능을 갖고 있음.
- 순전히 미관적으로 어떤 것이 마음에 드는지, 혹은 익숙한지로 결정하면 된다.



###### 참고

* [What’s the difference between Sass and SCSS](http://www.sitepoint.com/whats-difference-sass-scss/)

___
## Sass 핵심 원칙

우리는 `Sass`를 사용하면서 =  **Sass는 가능한 한 간단하게 유지되어야 한다**는 것을 생각해야 한다. 이와 관련하여 몇 가지 원칙을 마련할 수 있다.

- [KISS 원칙 : CSS보다 복잡해서는 안된다. ](http://en.wikipedia.org/wiki/KISS_principle) (Keep It Simple Stupid)
- [DRY 원칙 : 스스로 반복작업을 추가하지 마라 ](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) (Don’t Repeat Yourself)


>때로는, 코드를 유지가능하도록 만들기 위해 조금 반복하는 편이 더 낫습니다. 무거운 머리를 가진, 통제하기 힘들고, 불필요하게 복잡한 시스템을 제작하면 지나친 복잡성 때문에 유지관리가 완전히 불가능해질 수 있습니다.

우리는 Sass를 이렇게 바라보면 좋겠다.

- 실용주의가 완벽을 이긴다. [ - Harry Roberts](https://csswizardry.com)
- 코드는 목적이 아니라 수단에 불과하다.


귀찮다고 생각하기보다, Sass를 자신이 재미있다고 생각하는 분야에 활요해보면서 익히는 것이 좋겠다. 전체를 Sass로 작성하지 않더라도, 개발환경을 세팅해두고 언제든지 "난 CSS와 SCSS를 사용할 수 있어!"라는 생각을 한다면, 아마 Sass의 문법이 손에 익는 것은 오래 걸리지 않으리라고 생각한다.

마지막으로, Sass역시 수 많은 코드종류 중 하나에 불과하다는 점을 기억하고,  이 문서에 적혀있는 가이드, 기준에 매몰되지 않기로 하자. 만약 그것이 타당하다면, 만약 스스로 판단하고, 그것이 옳게 느껴진다면, 그렇게 진행한다.코드는 목적이 아니라 수단에 불과하다.



###### 참고

* [KISS principle](http://en.wikipedia.org/wiki/KISS_principle)
* [DRY principle](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [Keep Sass Simple](http://www.sitepoint.com/keep-sass-simple/)


_ _ _


___
##Install Sass

Ruby는 gems를 이용해 `Sass`와 같은 다양한 코드 패키지들을 관리한다. 터미널을 실행한 뒤 아래와 같은 명령어를 입력한다.

<pre><code class="bash">gem install sass</code></pre>

이 명령어로 설치할 경우, `Sass`는 당신의 컴퓨터에 의존성을 갖게 된다. 만약 이와 관련한 에러 메시지가 발생한다면,  `sudo`코드를 활용해 `Sass`를 설치해주자.(모르겠으면 `sudo`코드를 사용하자)

<pre><code class="bash">sudo gem install sass</code></pre>

제대로 설치 되었는지 확인해보자.

<pre><code class="bash">sass -v // Sass 3.4.22 (Selective Steve)</code></pre>


___
## scss파일을 트래킹해 css로 자동 변환하기
이 작업은 `.scss`파일에 코드를 작성하고 저장 버튼을 누를 경우, 자동으로 우리가 원하는 형태인 .css파일 문서에 반영되도록 하는 것이다. 이 작업은 다음과 같은 순서로 진행된다.

1. 빈 폴더에 style.scss 파일 생성하기
2. 터미널에서 예제폴더 경로로 이동한 후 `style.scss`파일에 `--watch` 설정
        sass --watch style.scss:style.css
3. `style.scss`파일에서 임의로 코드작성후, 파일을 저장
4. `style.css`파일 변화 확인

![](../img/sass/sass_01_howToInstallSass_01.png "툴팁 메세지")
![](../img/sass/sass_01_howToInstallSass_02.png "툴팁 메세지")


위 코드는 `style.scss`파일이 변경 될 경우 변경사항을 트래킹 해 자동으로 `style.css`파일에 반영하도록 설정하는 코드이다.