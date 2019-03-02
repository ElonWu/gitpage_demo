import avatar from "assets/img/avatar.jpg";

export interface IWork {
  id: number;
  title: string;
  desc: string;
  img: string;
  source: string;
  btns: Array<any>;
}

export const works: Array<IWork> = [
  {
    id: 1,
    title: "CSS3 动画",
    desc: "使用 React + CSS3 完成的动画",
    img: avatar,
    btns: [{ txt: "详情", type: "detail" }, { txt: "源码", type: "source" }],
    source: "https://elonwu.github.io/react-css3-animation/"
  },
  {
    id: 2,
    title: "SVG 动画",
    desc: "SVG 动画",
    img: avatar,
    btns: [{ txt: "详情", type: "detail" }, { txt: "源码", type: "source" }],
    source: "https://elonwu.github.io/svg-animation/"
  }
];
