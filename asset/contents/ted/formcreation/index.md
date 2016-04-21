# 형태 제작
데이터를 바인딩 하기 전에, 변수마다 적용시킬 가장 기본적인 형태를 HTML/CSS로 제작하기로 했다.

몸통, 얼굴, 팔 등 각 형태를 어느 변수에 적용시킬지 생각하면서 데이터를 바인딩하면 어느 부분에서 변형을 적용시킬지도 함께 생각하면서 제작을 해야한다.

일단, 코드로 복잡한 형태를 제작/조작한 적이 없으므로 이에 대한 기본적인 공부가 선행되었다. 형태를 제작하는 `svg`, `path`, `rect`, `ellipse`, `polygon` 등 다양한 방법과 형태를 조작하는 CSS-transform 등을 알아보기로 한다. 또한 데이터 바인딩시 변화하는 모습을 예측하기 위해 CSS-animation 공부도 함께 하였다.


## rect
사용되는 속성에는 `id`, `x`, `y`, `width`, `height`, `rx`, `ry`, `fill`, `stroke`, `stroke-miterlimit` 등이 있었다.

## path
사용되는 속성에는 `id`, `d`, `fill`, `stroke`, `stroke-miterlimit` 등이 있었다.

## polygon
폴리곤은 path보다는 단순하지만 라운딩 값이 없고 rect와 ellipse로 구현하기 힘든 다각형(평행사변형 등)을 제작하는 데 사용되는 것이다.

## svg

### svg 속성들
#### stroke-dasharray
`stroke-dasharray`는 stroke path의 점선 간격을 조절하는 데 쓰인다. 콤마를 사용하여 길이나 퍼센트 값들을 나열하면 된다.

<pre class="highlight"><code>
<?xml version="1.0"?>
<svg width="200" height="200" viewPort="0 0 200 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
<line stroke-dasharray="5, 5" x1="10" y1="10" x2="190" y2="10" />
</code></pre>


이런 식으로 해주고 line에 `stroke: black; stroke-width: 2;` 등의 속성을 부여하여 사용한다.


### SVG 선언
svg로 둘러싸인 인터넷의 예제 코드는 왜 보통은 아래와 같은 복잡한 속성을 선언하고 있을까?

<pre class="highlight"><code>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
</code></pre>

만약 SVG를 text/html 형식으로 된 html 페이지 내에 인라인으로 넣을 것이라면 xmlns 속성은 필요가 없다. SVG를 html 문서 내에 인라인으로 넣는 것은 html5 이후에 가능해진 것이다. 

하지만 만약 페이지를 `image/svg+xml` 또는 `application/xhtml+xml` 등 `text/html`이 아닌 형태로 제공한다면 XML parser가 필요해지므로 위의 `xmlns`속성이 꼭 필요하게 된다. 

### SVG Path
#### Path
SVG에서 path를 그리기 위해서 다음 명령어들을 사용해야한다. **명령어가 대문자일때는 position이 absolute로, 소문자일 때는 relative로 인식된다.**

- `M`: moveto
- `L`: lineto
- `H` : horizontal lineto
- `V` : vertical lineto
- `C` : curveto
- `S` : smooth curveto
- `Q` : quadratic Bézier curve
- `T` : smooth quadratic Bézier curve
- `A` : elliptical Arc
- `Z` : closepath

#### Bézier curves
베이지어 곡선은 무한대로 확장될 수 있는 곡선을 모델링하는 데 사용된다. 일반적으로 두 개의 종점(endpoint)과 하나 혹은 두개의 조절점(control point)를 선택할 수 있다. 하나의 조절점을 가진 베이지어 곡선을 quadratic Bézier curve이라고 하고, 두 개의 조절점을 가진 베이지어 곡선을 cubic이라고 한다.

베이지어 곡선은 기본적인 path를 그리는 방식과 같지만 시작점과 끝점 사이에 `q`를 추가해주면 생성이 된다. `q`의 좌표는 결과적으로 베이지어 곡선이 지나게되는 곳과는 차이가 있다. codepen을 이용하여 기본적인 quadratic Bézier curve를 만들어보았다. 이 예제에서 `q`의 좌표값은 각각 C, C1, C2이다. 베이지어 곡선은 세 점으로 이루어진 삼각형 내에서 그려진다. 

<iframe height='603' scrolling='no' src='//codepen.io/ccuram/embed/vGaGyx/?height=603&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/ccuram/pen/vGaGyx/'>Bézier curves</a> by yumm (<a href='http://codepen.io/ccuram'>@ccuram</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>


- - -

## 새로 나온 개념
### vh 라는 크기 단위
viewport에서 얼마나 크기를 차지할 지를 뜻하는 상대적 크기 개념이다. % 단위가 가장 가까운 부모 요소에 상대적인 영향을 받는 것과는 달리 `vh`와 `vw` 단위는 뷰포트 크기에 영향을 받는다. 스크린에 꽉차는 텍스트를 넣는다든지 할 때 유용하다.

`vh`요소는 100분의 1 단위이다. 따라서 `100vh`와 `100vw`가 뷰포트에 꽉차는 단위 값이 된다.

이 단위의 호환성은 다음과 같다.
![viewport units](http://yumm.co.kr/blogs/asset/img/ted-form-creation1.png)

### 기타
- `border-radius` 값을 퍼센트로 지정할 수 있다!