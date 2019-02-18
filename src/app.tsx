import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./views/home/home";
import "./app.scss";
import "antd/dist/antd.css";

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
