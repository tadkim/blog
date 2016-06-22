# DevEnvironment
개발환경에 대한 이야기

꼬이고 꼬인 코드를 처리하거나 포맷을 했을때나 온 갖 것들을 다시 해야하는데 생각이 안날때, 난 여기로 올것이다


## node, npm 싹 밀고 시작하기

node기반 애플리케이션이나 개발이 많은데 버전이나 설치문제로 에러가 발생하곤한다. 
에러 해결방법보다 싹 밀고 설치하는 방법을 정리해둔다

### node 싹 밀어버리기
이에 대한 내용은 블로그에서 참고했다.
<pre>
sudo npm uninstall npm -g
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*
sudo rm -rf /usr/local/include/node /Users/$USER/.npm
sudo rm /usr/local/bin/node
sudo rm /usr/local/share/man/man1/node.1
sudo rm /usr/local/lib/dtrace/node.d
brew install node
</pre>

### node 다시 설치하기
밀어버린 노드는 [nodejs공식 홈페이지](https://nodejs.org/ko "nodejs공식홈페이지")에서 .pkg 파일을 다운로드받아서 설치하면 된다. 이것만 설치하면 npm도 같이 설치되며, 바로 사용가능하다.
npm 으로 설치했던 다른 패키지도 함께 삭제되기때문에, 다시 설치해주어야하긴한다.

#### npm version out-date 메시지 나올시 다음과 같이 실행하면된다.
<pre>
sudo npm install -g npm
</pre>