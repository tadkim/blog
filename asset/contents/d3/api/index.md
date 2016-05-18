<table id="meta">
  <thead><th>160518</th><th>D3</th><th>Tad Kim</th></thead>
  <tbody>
  <tr><td></td><td></td><td></td></tr>
  </tbody>
</table>

# D3 API
책도, api도 있지만, 직접 적용하면서 느꼈던 부분을 더해 정리하는 편이 추후 재사용성에도 도움이 될것이라고 생각한다. 시작은 항상 초라할지 모르지만, 그럼에도불구하고 꾸준히 작성하면 좋은 재산이 될 것이라고 생각한다.



## Selection
d3의 셀렉션 관련 api 및 간단한 적용방법에 살펴본다.


### selection.insert(name[, before])

`insert()`는 새로운 요소를 선택자요소 앞으로 삽입하는 d3의 기능이다.  jquery의 `prepend()`를 떠올리게 되는데 차이점에 대해서는 다시한번 살펴보면서 정리하도록 하자.

`insert()`는 현재 선택자에 의해 선택된 각 요소에 대해 삽입하고자하는 요소를 포함하는 새로운 선택 요소를 반환한다.
만약 before 선택자와 일치하는 요소가 없다면, 새로운 요소는 마지막 자식 요소에 더해질 것이다.

>여기에 대해서는 몇가지 테스트를 진행해봐도 좋다.

`subselections`에서와 동일한 방식으로, `insert`를 사용할 때, 현재 요소의 데이터가 있는 경우, 각각의 새로운 요소들은 현재 요소의 데이터를 상속받는다.

_ _ _
####  selection.insert 적용
이름은 문자열 또는 함수(returns DOM element to append) 중 하나를 지정할 수 있다.

When the name is specified as a string, it may have a namespace prefix of the form "namespace:tag".
이름을 문자열로 지정할때,  이 방법으로 namespace 접두사를 다음과 같은 형태로 사용할 수 있다.

<pre class="highlight"><code class="js">
//D3.js insert() useable namespage prefix
"namespace:tag".
</code></pre>

_ _ _
#### selection.insert 적용 예시
예를들어 `"svg:text"`는 svg 네임스페이스에 `text`요소를 생성한다.
기본적으로, `D3`는 `svg`, `xhtml`, `xlink`, `xml` 그리고 `xmls` 네임스페이스를 지원한다.
>이외의 추가적인 네임스페이스는  `d3.ns.prefix()`를 통해 추가해서 사용할 수 있다.

만약, 네임스페이스를 지정하지 않은경우, 네임스페이스는 자신이 포함되어있는 요소를 상속받는다.또는 익히 알고있을만한 이름으로 정의된 prefixe 중 하나인 경우, 대응하는 공간이 사용된다.(예를 들어, "svg"는 "svg:svg"를 의미한다.)

마찬가지로, `before`선택자는 선택자 문자열 또는 DOM 요소를 반환하는 함수로 지정 될 수 있다.
>Likewise, the before selector may be specified as a selector string or a function which returns a DOM element.

예를들어, `insert("div", ":first-child")는 현재 선택된 요소 자식 div nodes를 앞에 추가할 것이다.(정확한 이해를 위해 실습 필요)
>For instance, insert("div", ":first-child") will prepend child div nodes to the current selection.

`enter selections`일 경우, `before`선택자는 생략할 수 있다. 이전에 선택자가 있는 경우 입력 요소가 update selection에서 다음 형제(sibling)전에 삽입될 수 있다.(?)
>For enter selections, the before selector may be omitted, in which case entering elements will be inserted immediately before the next following sibling in the update selection, if any.


이 `insert()`를 이용하면 요소를 데이터와 일치하는 순서로  DOM으로 삽입하는 것 이 가능하다.
>This allows you to insert elements into the DOM in an order consistent with bound data.

주의할 것은 이런 기능이 있음에도, 우리가 '요소의 순서를 갱신'하고자 할 경우, 여전히  the slower `selection.order`가 필요하다는 것이다.