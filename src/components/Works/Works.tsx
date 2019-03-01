import * as React from "react";
import { Button } from "antd";
import "./Works.scss";
import { works } from "models/work";

export class Works extends React.Component {
  checkDetail(id: number) {
    console.log();
  }
  checkSource(id: number) {
    console.log();
  }

  renderBtns(id: number, btns: Array<any>) {
    const EVENTS = {
      detail: this.checkDetail,
      source: this.checkSource
    };
    return (
      <div className="btns">
        {btns.map(({ txt, type }) => (
          <Button
            key={type}
            type="primary"
            size="small"
            onClick={() => {
              EVENTS[type](id);
            }}
          >
            {txt}
          </Button>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="works">
        <ul className="work-list">
          {works.map(({ id, title, desc, img, btns }) => (
            <li className="work-item" key={id}>
              <img src={img} alt="" />

              <div className="info">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>

              {this.renderBtns(id, btns)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
