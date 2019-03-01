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
    title: "111",
    desc: "aaaaaaa",
    img: avatar,
    btns: [{ txt: "详情", type: "detail" }, { txt: "源码", type: "source" }],
    source: ""
  },
  {
    id: 2,
    title: "222",
    desc: "bbbbbbb",
    img: avatar,
    btns: [{ txt: "详情", type: "detail" }, { txt: "源码", type: "source" }],
    source: ""
  }
];
