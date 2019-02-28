import * as React from "react";
import "./Stack.scss";
import { Icon, Button } from "antd";
import { IStack, Stacks } from "models/stack";
import { StackDetailModal } from "components/StackDetailModal/StackDetailModal";

interface Props {}
interface State {
  showAll: Boolean;
  current: IStack | undefined;
}
export class Stack extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
      current: undefined
    };

    this.toggle = this.toggle.bind(this);
    this.showDetail = this.showDetail.bind(this);
  }

  toggle() {
    this.setState(({ showAll }) => ({ showAll: !showAll }));
  }

  showDetail(index: number) {
    this.setState({ current: Stacks[index] });
  }

  get renderStacks() {
    const { showAll } = this.state;
    const list = showAll ? Stacks : Stacks.slice(0, 4);
    return (
      <ul className="stack-list">
        {list.map(({ title, icon, desc, detail }: IStack, index: number) => (
          <li
            className="stack-item"
            key={`stack-${title}`}
            onClick={() => this.showDetail(index)}
          >
            <i>
              <img src={icon} alt="" />
            </i>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    );
  }

  get renderBtn() {
    const { showAll } = this.state;
    return (
      <div className="show-more-btn" onClick={this.toggle}>
        {showAll ? (
          <Button shape="circle" icon="up">
            {/* 收起 */}
          </Button>
        ) : (
          <Button shape="circle" icon="down">
            {/* 更多 */}
          </Button>
        )}
      </div>
    );
  }

  render() {
    const { current } = this.state;
    return (
      <div className="stack">
        {this.renderStacks}
        {this.renderBtn}
        {current && (
          <StackDetailModal
            stack={current}
            onClose={() => this.setState({ current: undefined })}
          />
        )}
      </div>
    );
  }
}