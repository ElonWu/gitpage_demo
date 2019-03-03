import * as React from "react";
import { Button } from "antd";
import "./Works.scss";
import { works } from "models/work";

export default class Works extends React.Component {
  renderBtns(source: string, preview: string, btns: Array<any>) {
    return (
      <div className="btns">
        {btns.map(({ txt, type }) => (
          <Button key={type} type="primary" size="small">
            <a href={type === "detail" ? preview : source} target="_blank">
              {txt}
            </a>
          </Button>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="works">
        <ul className="work-list">
          {works.map(({ id, title, desc, img, source, preview, btns }) => (
            <li className="work-item" key={id}>
              <div className="img" style={{ backgroundImage: `url(${img})` }} />

              <div className="info">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>

              {this.renderBtns(source, preview, btns)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
