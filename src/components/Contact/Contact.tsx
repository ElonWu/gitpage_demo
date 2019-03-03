import * as React from "react";
import "./Contact.scss";
import { Icon } from "antd";
interface State {
  showContack: boolean;
}

const contacts = [
  {
    key: "phone",
    title: "手机",
    icon: "phone",
    source: "tel: 18529108894"
  },
  {
    key: "mail",
    title: "邮件",
    icon: "mail",
    source: "mailto:wrzmonkey2012@hotmail.com"
  },
  {
    key: "github",
    title: "Github",
    icon: "github",
    source: "https://github.com/ElonWu"
  },
  {
    key: "jianshu",
    title: "简书",
    icon: "edit",
    source: "https://www.jianshu.com/u/b1d920f9837d"
  }
];
export default class Contact extends React.Component<any, State> {
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
          {contacts.map(({ key, title, icon, source }) => (
            <li key={key} className={key}>
              <a href={source} target="_blank">
                <Icon type={icon} />
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
