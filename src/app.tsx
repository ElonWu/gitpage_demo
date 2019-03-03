import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "views/home/home";
import "./app.scss";

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
