import * as React from "react";
import { articles } from "models/article";
import "./Articles.scss";
export class Articles extends React.Component {
  render() {
    return (
      <div className="articles">
        <ul className="article-list">
          {articles.map(({ title, desc, source }) => (
            <li className="article-item">
              <h3>{title}</h3>
              <p>{desc}</p>
              <i className="check"> &gt; </i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
