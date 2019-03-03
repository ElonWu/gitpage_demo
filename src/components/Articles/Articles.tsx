import * as React from "react";
import { articles, IArticle } from "models/article";
import "./Articles.scss";
export default class Articles extends React.Component {
  render() {
    return (
      <div className="articles">
        <ul className="article-list">
          {articles.map(({ id, title, desc, source }: IArticle) => (
            <li className="article-item" key={id}>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href={source} target="_blank">
                阅读文章
              </a>
              <i className="line" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
