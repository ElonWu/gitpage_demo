import * as React from "react";
import "./Content.scss";
import { Stack } from "components/Stack/Stack";
import { Works } from "components/Works/Works";
import { Articles } from "components/Articles/Articles";
import { Contact } from "components/Contack/Contact";

const Sections = [
  { title: "技术栈", key: "stack", component: <Stack /> },
  { title: "最近项目", key: "recent-work", component: <Works /> },
  { title: "最近文章", key: "recent-article", component: <Articles /> }
];

export class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Contact />
        {Sections.map(({ title, key, component }) => (
          <section key={key}>
            <h4>{title}</h4>
            {component}
          </section>
        ))}
      </div>
    );
  }
}
