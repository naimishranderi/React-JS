import React from "react";
import ReactDOM from "react-dom";

//const element = <h1>Hello World </h1>;
//console.log(element);
//React1.createElement(element);
//ReactDOM.render(element, document.getElementById("root"));
const element1 = (
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
);

function myFun() {
  return (
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  );
}
ReactDOM.render(myFun(), document.getElementById("root"));
