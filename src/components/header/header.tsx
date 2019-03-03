import * as React from "react";
import "./Header.scss";
import avatar from "assets/img/avatar.jpg";
import { Icon } from "antd";

interface Props {
  cover: boolean;
  toggleCover: () => void;
}
interface State {}
export default class Header extends React.Component<Props, State> {
  render() {
    const { cover, toggleCover } = this.props;
    return (
      <div className={`header ${cover && "cover"}`} onClick={toggleCover}>
        <div className="header-container">
          <div className="avatar">
            <img src={avatar} alt="" width="100%" />
          </div>
          <div className="info">
            <h3>吴渊</h3>
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
                <span>3年经验</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
