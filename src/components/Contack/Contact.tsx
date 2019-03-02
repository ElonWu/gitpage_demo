import * as React from "react";
import "./Contact.scss";
import { Icon } from "antd";
interface State {
  showContack: boolean;
}
export class Contact extends React.Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      showContack: false
    };
  }
  render() {
    // const { showContack } = this.state;
    return (
      <div className="contact">
        <ul className="contacts">
          <li key="phone" className="phone">
            <a href="tel: 18529108894">
              <Icon type="phone" />
              电话
            </a>
          </li>
          <li key="mail" className="mail">
            <a href="mailto:wrzmonkey2012@hotmail.com">
              <Icon type="mail" />
              邮件
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
