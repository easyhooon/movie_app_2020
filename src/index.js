import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
//import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App /><Potato />
//   </React.StrictMode>,
//   document.getElementById("potato")
// );

ReactDOM.render(<App />, document.getElementById("potato"));

//react application은 한번에 하나의 component만 rendering 할 수 있음
//따라서 모든 것은 application 안에 들어가야만 함
//application 안에서 많은 component를 넣을 수 있어, 그리고 이러한 component안에 더 많은 component를 import할 수 있어

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

//component는 HTML을 반환하는 함수
//<App /> -> 이 부분이 우리가 component를 사용하고자 할 때, component의 형태
//react는 component를 사용해서 html처럼 작성하려는 경우에 필요
//javascript와 HTML 사이의 이러한 조합을 jsx라고 부름
