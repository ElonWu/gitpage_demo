import * as React from "react";
import "./Contact.scss";
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
    const { showContack } = this.state;
    return (
      <div className="contact">
        <h4 onClick={() => this.setState({ showContack: true })}>联系我</h4>
        {showContack && (
          <ul className="contacts">
            <li>电话</li>
            <li>邮件</li>
          </ul>
        )}
      </div>
    );
  }
}
