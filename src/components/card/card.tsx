import React from "react";
import "./card.scss";

interface Props {
  style?: React.CSSProperties;
  children?: JSX.Element | String;
}

export const Card = ({ style = {}, children = "" }: Props) => {
  return (
    <div className="card" style={{ ...style }}>
      {children}
    </div>
  );
};
