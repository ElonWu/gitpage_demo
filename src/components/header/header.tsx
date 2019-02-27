import * as React from "react";
import "./Header.scss";
export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h3>Elon Wu</h3>
        <div className="avatar">
          <img src="assets/img/avatar.jpg" alt="" />
        </div>
      </div>
    );
  }
}
