import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./views/home/home";
import "antd/dist/antd.css";
import "./app.scss";

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
