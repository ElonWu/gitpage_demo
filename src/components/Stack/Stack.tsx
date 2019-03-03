import * as React from "react";
import "./Stack.scss";
import { Button, Tabs } from "antd";
import { IStack, Stacks } from "models/stack";
import { StackDetailModal } from "components/StackDetailModal/StackDetailModal";
import { StackChart } from "components/StackChart/StackChart";

interface Props {}
interface State {
  showAll: Boolean;
  current: IStack | undefined;
}
export default class Stack extends React.Component<Props, State> {
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
            <img src={icon} alt="" />
            <span>{title}</span>
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
          <Button size="small" icon="up">
            收起
          </Button>
        ) : (
          <Button size="small" icon="down">
            更多
          </Button>
        )}

        {/* {showAll ? "收起" : "更多"} */}
      </div>
    );
  }

  render() {
    const { current } = this.state;
    return (
      <div className="stack">
        <Tabs defaultActiveKey="list" tabPosition="left">
          <Tabs.TabPane key="list" tab="列表">
            {this.renderStacks}
            {this.renderBtn}
            {current && (
              <StackDetailModal
                stack={current}
                onClose={() => this.setState({ current: undefined })}
              />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane key="chart" tab="图表">
            <StackChart chartId="stack-chart" />
          </Tabs.TabPane>
        </Tabs>
      </div>
    );
  }
}
