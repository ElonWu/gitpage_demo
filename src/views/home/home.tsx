import * as React from "react";
import { Header } from "components/Header/Header";
import { Content } from "components/Content/Content";
import "./home.scss";
// import { Navbar } from "components/Navbar/Navbar";

export class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Content />
      </div>
    );
  }
}
