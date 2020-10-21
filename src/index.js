import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


ReactDOM.render(<App />, document.getElementById("root"));

//react application은 한번에 하나의 component만 rendering 할 수 있음
//따라서 모든 것은 application 안에 들어가야만 함
//application 안에서 많은 component를 넣을 수 있어, 그리고 이러한 component안에 더 많은 component를 import할 수 있어


//component는 HTML을 반환하는 함수
//<App /> -> 이 부분이 우리가 component를 사용하고자 할 때, component의 형태
//react는 component를 사용해서 html처럼 작성하려는 경우에 필요
//javascript와 HTML 사이의 이러한 조합을 jsx라고 부름


