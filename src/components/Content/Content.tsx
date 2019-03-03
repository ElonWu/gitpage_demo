import * as React from "react";
import "./Content.scss";
import { loaderWrapper } from "utils/loadable";

const Stack = loaderWrapper(() => import("components/Stack/Stack"));
const Works = loaderWrapper(() => import("components/Works/Works"));
const Articles = loaderWrapper(() => import("components/Articles/Articles"));
const Contact = loaderWrapper(() => import("components/Contact/Contact"));

const Sections = [
  { title: "联系方式", key: "contact", component: <Contact /> },
  { title: "技术能力", key: "stack", component: <Stack /> },
  { title: "最近项目", key: "recent-work", component: <Works /> },
  { title: "技术分享", key: "recent-article", component: <Articles /> }
];

export default class Content extends React.Component {
  render() {
    return (
      <div className="content">
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
