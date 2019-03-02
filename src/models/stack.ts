import IconReact from "assets/icon/icon_react.png";
import IconNode from "assets/icon/icon_node.png";
import IconSass from "assets/icon/icon_sass.png";
import IconTs from "assets/icon/icon_ts.png";
import IconAntd from "assets/icon/icon_antd.png";

export interface IStack {
  title: string;
  icon: string;
  desc: string;
  detail: any;
}

export const Stacks = [
  {
    title: "React",
    icon: IconReact,
    desc: "react-react-react",
    detail: {
      longdesc: ""
    }
  },
  {
    title: "TS",
    icon: IconTs,
    desc: "TyscriptTyscriptTyscriptTyscript",
    detail: {
      longdesc: ""
    }
  },
  {
    title: "Antd",
    icon: IconAntd,
    desc: "AntdAntdAntd",
    detail: {
      longdesc: ""
    }
  },
  {
    title: "SASS",
    icon: IconSass,
    desc: "SASSSASSSASSSASS",
    detail: {
      longdesc: ""
    }
  },
  {
    title: "Node",
    icon: IconNode,
    desc: "Node.jsNode.jsNode.jsNode.js",
    detail: {
      longdesc: ""
    }
  }
];
