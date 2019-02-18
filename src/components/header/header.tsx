import React from "react";
import { Logo } from "../logo";

const MENUS = [{ title: "home", link: "" }];
export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Logo />
        <ul>
          {MENUS.map(({ title, link }, index) => (
            <li key={`menu-${index}`}>{<a href={link}>{title}</a>}</li>
          ))}
        </ul>
      </div>
    );
  }
}
