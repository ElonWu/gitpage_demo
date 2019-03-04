import camera from "assets/img/camera.png";
import tesla from "assets/img/tesla.png";
import grapgQl from "assets/icon/icon_graphql.png";

export interface IWork {
  id: number;
  title: string;
  desc: string;
  img: string;
  source: string;
  preview: string;
  btns: Array<any>;
}

export const works: Array<IWork> = [
  {
    id: 1,
    title: "CSS3 动画",
    desc: "使用 React + CSS3 完成的动画; 致敬 SpaceX 成功发射 Tesla",
    img: tesla,
    btns: [{ txt: "详情", type: "detail" }, { txt: "源码", type: "source" }],
    source: "https://github.com/ElonWu/react-css3-animation",
    preview: "https://elonwu.github.io/react-css3-animation"
  },
  {
    id: 2,
    title: "SVG 动画",
    desc: "小练习：手写 path 的 SVG 动画",
    img: camera,
    btns: [{ txt: "详情", type: "detail" }, { txt: "源码", type: "source" }],
    source: "https://github.com/ElonWu/svg-animation",
    preview: "https://elonwu.github.io/svg-animation"
  },
  {
    id: 2,
    title: "GraphQL",
    desc: "Node + Express + GraphQL + mongoDB 搭建的服务器端",
    img: grapgQl,
    btns: [{ txt: "源码", type: "source" }],
    source: "https://github.com/ElonWu/graphql-server",
    preview: ""
  }
];
