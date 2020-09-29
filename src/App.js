import React from "react";
//import logo from './logo.svg';

function App() {
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
}
//react는 당신이 거기에 쓰는 모든 요소를 생성함!
//자바스크립트와 함께 그것들을 만들고
//그것들을 html로 만듬
//너의 모든 react application을 div 사이에 넣어! ok?
//react는 소스코드에 처음부터 html를 넣지않고, html에서 html을 추가하거나 제거하는 법을 알고 잇음
//그래서 application이 이것을 로드할 때, 빈 html을 로드하게 되고
//그런 다음에 내가 component에 작성해뒀던 것을 react가 html을 밀어넣게 됨!
//따라서 검사 해보면 div와 h1이 있지만 소스코드(index.html)에는 존재하지 않음
//이 것이 react가 빠른 이유, virtual이고 존재하지 않기 때문 (virtual DOM(Document Object Model))

export default App;
