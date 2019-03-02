export interface IArticle {
  id: number;
  title: string;
  desc: string;
  source: string;
}

export const articles: Array<IArticle> = [
  {
    id: 1,
    title: "JavaScript 的并发处理 -- Event Loop 的理解",
    desc:
      "前言： 本文是我通过阅读文章和视频得到一些个人理解；（链接：信息来源以供参考）。如果我有误读的地方， 非常欢迎指出。 首先我们看一下下面的代码",
    source: "https://www.jianshu.com/p/eea5de14f199"
  },
  {
    id: 2,
    title: "Google html css 代码规范",
    desc:
      "写在前面：，以下是对谷歌的规范的摘选和个人理解；阅读时可参考英语原文，避免我的误读漏读。实际开发时多用 vscode + prettier 插件",
    source: "https://www.jianshu.com/p/11cbc4c68ac7"
  },
  {
    id: 3,
    title: "Javascript 作用域链、闭包的理解和应用",
    desc:
      "1. 什么是作用域，作用域链 作用域，指代码所在的执行环境。代码执行时产生的最先产生的执行环境，称为全局作用域， 如浏览器为 window，",
    source: "https://www.jianshu.com/p/0fb36f6289f8"
  },
  {
    id: 4,
    title: "利用 Github Pages 部署 React 项目",
    desc:
      "一、部署静态项目 将本地项目 push 到 github 进入 github 当前项目的远程仓库 点击 settings 向下滚动到 ",
    source: "https://www.jianshu.com/p/c2095012164c"
  },
  {
    id: 5,
    title: "Javascript 原型链的理解： 封装、继承、多态",
    desc:
      "原型链有三个特点：封装、继承、多态；接下来是我的一些理解。 1. 对象的丰富性 在 Js 中，对象是包含信息最丰富、同时最富有语义的一种数据格式",
    source: "https://www.jianshu.com/p/aaedc5777d61"
  },
  {
    id: 6,
    title: "再谈对 Javascript 作用域的理解",
    desc:
      "前言： 之前我已经就作用域的理解写过一篇笔记，最近又看了《你不知道的JS》这本书；写一下新的分享。为避免有错误的理解，如果有困惑或者发现了我的误",
    source: "https://www.jianshu.com/p/9be9fd80fb31"
  }
];
