import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/content.jsx";
//import { Gif, Gifflette } from "./components/gif.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Content />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
