import * as React from "react";
import "./Container.scss";

interface Props extends React.ComponentProps<any> {}

export const Container: React.SFC<Props> = ({
  children = "",
  style = {}
}: Props) => (
  <div className="container" style={{ ...style }}>
    <div className="container-inner" style={{ padding: "30px 60px 0 60px" }}>
      {children}
    </div>
  </div>
);