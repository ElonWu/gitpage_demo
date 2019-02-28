import * as React from "react";
import "./Header.scss";
import avatar from "assets/img/avatar.jpg";
import { Icon } from "antd";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="avatar">
          <img src={avatar} alt="" width="100%" />
        </div>
        <div className="info">
          <h3> 吴渊 (Elon Wu) </h3>
          <ul className="info-detail">
            <li>
              <Icon type="calendar" />
              <span>27岁</span>
            </li>
            <li>
              <Icon type="code" />
              <span>Web 前端</span>
            </li>
            <li>
              <Icon type="dashboard" />
              <span>3年</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
