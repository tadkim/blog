<table id="meta">
    <thead><th>160427</th><th>Javascript</th><th>김태경</th></thead>
    <tbody>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
    </tbody>
</table>


# Quick Sorting Algorithm

큰 데이터 집합을 가장 빠릴 정렬할 수 있는 알고리즘은 퀵 정렬이다 퀵 정렬은 분할 정복(divide and conquer)알고리즘으로 데이터 리스트를 작은 요소와 큰 요소로 구분하는 작은 하위목록으로 나눈다. 하위 목록으로 나누는 작업을 모든 데이터가 정렬될 때까지 반복한다.

퀵 정렬 알고리즘에서는 리스트의 한 요소를 피벗(pivot, 기준값)으로 선정한 다음, 피벗보다 작은 요소는 하위 리스트로 피벗보다 큰 요소는 상위 리스트로 이동시킨다.


## 퀵 정렬 알고리즘과 의사코드
다음은 퀵 정렬의 알고리즘이다.

1. 리스트를 두 개의 서브리스트로 나누는 피벗을 선택한다.
2. 피벗을 기준으로 작은 값은 피벗의 왼쪽으로 큰 값은 피벗의 오른쪽으로 오도록 모든 요소를 정렬시킨다.
3. 피벗을 기준으로 분류된 각각의 서브리스트에 1, 2번 과정을 반복한다.

다음은 앞으 알고리즘을 자바스크립트 프로그램으로 구현한 코드다.

<pre class="highlight"><code class="js">
function qSort(list){
    if(list.length == 0){
        return [];
    }
    var lesser = [];
    var greater = [];
    var pivot = list[0];
    for(var i = 1; i < list.length; i++){
        if(list[i] < pivot){
            lesser.push(list[i]);
        } else {
            greater.push(list[i]);
        }
    }
    return qSort(lesser).concat(pivot, qSort(greater));
}
</code></pre>

`qSort()`함수는 배열의 길이가 0인지 확인하고, 0이면 바로 리턴하여 끝낸다. 배열의 길이가 0이 아니면 두 개의 배열을 생성한다 그리고 정렬할 배열을 첫 번째 요소를 피벗으로 선정한다 루프를 이요해 피벗 값에 따라 배열의 모든 요소를 알맞은 배열로 추가한다.

이렇게 분류된 `lesser` 배열과 `greater` 배열을 `qSort()` 함수로 재귀호출한다 재귀호출이 완료되면 `lesser`배열 결과, 피벗, `greater`배열 결과를 정렬할 것이다.

실제 데이터를 이용해 알고리즘을 테스트해보자.

_ _ _
## 퀵 정렬 알고리즘 테스트

<pre class="highlight"><code class="js">
function qSort(arr){
    if(arr.length === 0){
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for( var i = 1; i < arr.length; i++){
        print("pivot: " + pivot + " current element : "  + arr[i]);
        if(arr[i] < pivot){
            print("moving " + arr[i] + "to the left");
            left.push(arr[i]);
        } else {
            print("moving " + arr[i] + "to the right");
            right.push(arr[i]);
        }
    }
    return qSort(left).concat(pivot, qSort(right));
}

var a = [];
for(var i = 0; i < 10; ++i){
    a[i] = Math.floor(Math.random()*100)+1;
}
print(a);
print();
print(qSort(a));

//47,62,58,49,81,78,86,77,29,70
//29,47,49,58,62,70,77,78,81,86
</code></pre>