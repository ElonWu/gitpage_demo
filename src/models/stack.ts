import IconReact from "assets/icon/icon_react.png";
import IconNode from "assets/icon/icon_node.png";
import IconSass from "assets/icon/icon_sass.png";
import IconTs from "assets/icon/icon_ts.png";
import IconAntd from "assets/icon/icon_antd.png";
import IconExpress from "assets/icon/icon_express.png";
import IconWebpack from "assets/icon/icon_webpack.png";

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
    title: "Antd",
    icon: IconAntd,
    desc: "AntdAntdAntd",
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
  },
  {
    title: "Express",
    icon: IconExpress,
    desc: "Node.jsNode.jsNode.jsNode.js",
    detail: {
      longdesc: ""
    }
  },
  {
    title: "Webpack",
    icon: IconWebpack,
    desc: "Node.jsNode.jsNode.jsNode.js",
    detail: {
      longdesc: ""
    }
  },
  {
    title: "SaSS",
    icon: IconSass,
    desc: "SASSSASSSASSSASS",
    detail: {
      longdesc: ""
    }
  },
  {
    title: "TypeScript",
    icon: IconTs,
    desc: "TyscriptTyscriptTyscriptTyscript",
    detail: {
      longdesc: ""
    }
  }
];
