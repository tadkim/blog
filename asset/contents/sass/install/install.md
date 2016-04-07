
# SASS 01 - install
___
이 글은 `Sass` 기술의 원활한 학습을 위해 작성되었다. 이 글에 기술한 내용들은 단순히 '복사&불어넣기'에 의한 것이 아니라, 직접 코드를 실행해가면서 불필요한 내용(중복 설치 및 역사에 대한 내용들)은 과감히 Skip하며 진행했다.

___ 
## 학습 환경

앞서 일러두었듯이, 이 문서에 작성 된 코드들은 실제로 실행해본 것이다. 다만, 개발환경이 다르거나 관련 라이브러리나 기술의 버전이 다름으로 의도치 않는 방황(?)이 있을 수 있기에 시작 전에 작성자의 개발환경을 짧게나마 명시해 둔다. 

### 개발환경
- 작성일 : 2016년 3월 31일
- OS : Mac
- Browser : Chome

### Mac

축하한다. `Sass`는 `Ruby`에 의존성을 가지고 있고, mac에는 이미 Ruby가 내장 되어있다. 우리는 터미널에서 몇 줄의 코드만 실행하면 바로 `Sass` 학습을 시작할 수 있다.



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


<link rel="stylesheet" href="../css/lib/hilight/monokai-sublime.css">
<script src="../js/highlight.pack.js"></script>
<script>hljs.initHighlightingOnLoad();</script>