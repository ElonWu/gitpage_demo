import * as React from "react";
import { Spin } from "antd";

export const Loading = () => (
  <div
    className="loading"
    style={{
      padding: "1rem",
      background: "#dcd6a33b",
      textAlign: "center"
    }}
  >
    <Spin />
  </div>
);
