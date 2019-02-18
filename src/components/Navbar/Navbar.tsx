import * as React from "react";
import "./Navbar.scss";
interface Props extends React.ComponentProps<any> {}

const NAVS = [
  { title: "protfolio", path: "" },
  { title: "about", path: "" },
  { title: "contacts", path: "" }
];

export const Navbar: React.SFC<Props> = () => (
  <div className="navbar clearfix">
    <ul>
      {NAVS.map(({ title, path }) => (
        <li>{title}</li>
      ))}
    </ul>
  </div>
);
