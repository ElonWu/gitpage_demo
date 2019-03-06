import * as React from "react";
import "./home.scss";

import { loaderWrapper } from "utils/loadable";
const Header: any = loaderWrapper(() => import("components/Header/Header"));
const Content = loaderWrapper(() => import("components/Content/Content"));

interface Props {}
interface State {
  cover: boolean;
}
export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cover: true
    };
  }

  render() {
    const { cover } = this.state;
    return (
      <div className="home">
        <Header
          cover={cover}
          toggleCover={() => this.setState({ cover: !cover })}
        />
        {!cover && <Content />}
      </div>
    );
  }
}
