import React from "react";
import "./home.scss";
import { FrostedGlass } from "components/FrostedGlass/FrostedGlass";
import { Container } from "components/Container/Container";
// import { Navbar } from "components/Navbar/Navbar";

export class Home extends React.Component {
  render() {
    return (
      <div
        className="bg"
        style={{
          position: "relative",
          width: "100%",
          height: "100%"
        }}
      >
        <FrostedGlass />

        <Container
          innerStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* <div className="content">
            <Navbar />
          </div> */}

          <h3
            style={{
              fontSize: 48,
              color: "#fdfdfd"
            }}
          >
            Elon's World
          </h3>
        </Container>
      </div>
    );
  }
}
