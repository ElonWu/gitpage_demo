import * as React from "react";
import { Tabs } from "antd";
import { Profile } from "components/Profile/Profile";
import { Works } from "components/Works/Works";
import { Links } from "components/Links/Links";
import "./Content.scss";

const TabPane = Tabs.TabPane;

const TABS = [
  { tab: "profile", key: "profile", component: <Profile /> },
  { tab: "works", key: "works", component: <Works /> },
  { tab: "links", key: "links", component: <Links /> }
];

export class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Tabs style={{ width: "100%" }}>
          {TABS.map(({ tab, key, component }) => (
            <TabPane tab={tab} key={key}>
              {component}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
