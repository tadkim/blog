

# jquery method

이 문서는 자주 사용하게되는 jquery 메서드를 정리하는 문서이다.

## 1. selector
## 2. event handler


### 2.1 .one()
`.one()`은 이벤트를 한번만 바인딩하고 사라지는 메서드이다. 다음은 `.one()`을 사용하는 예시이다.
<pre class="highlight"><code class="js">
//버튼 클릭시 이미지 콘텐츠를 lazyload하는 이벤트 메서드. 한번 실행 후 사라진다.
$("#container").one("click", function() {
         $("#container").load("images.html", function(response, status, xhr) {
             $("img.lazy").lazyload();
         });
});
</code></pre>

