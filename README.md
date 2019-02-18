#### 一、部署静态项目

1. 将本地项目 push 到 github
2. 进入 github 当前项目的远程仓库
3. 点击 settings 向下滚动到 GitHub Pages 配置； 选定 source 为 master-branch

```
 // TODO 添加界面截图
```

![image](https://note.youdao.com/favicon.ico)

4. 等待页面刷新成功， 向下滚动到 GitHub Pages 配置； 项目已经成功部署，并显示对应的访问地址。
5. 可在项目仓库点击 enviroment 查看部署信息。

#### 二、部署需要构建的项目

1. 在 package.json 下新增字段（你的 gitub 地址和项目远程仓库名）

```
    "homepage": "https://xxx.github.io/proflie-page/"
```

2. 在 package.json 中 scripts 字段下增加如下配置

```
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
```

3. 在全局或者当前项目下安装 gh-pages（两者任选其一）

```
    // 全局安装依赖
    npm i -g gh-pages

    // 当前项目中安装依赖
    npm i --save-dev gh-pages
```

```
 // TODO 添加 package.json 截图
```

![image](https://note.youdao.com/favicon.ico)

4. 提交代码后，执行部署命令

```
    npm run deploy
```

5. 查看 github 远程仓库, 发现 gh-pages 帮你自动创建了一个分支； 仅包括构建好的代码

```
 // TODO 添加 github 界面截图
```

![image](https://note.youdao.com/favicon.ico)

6. 点击当前仓库的 settings 向下滚动到 GitHub Pages 配置； 选定 source 为 gh-pages 分支
7.

```
 // TODO 添加选择截图
```

![image](https://note.youdao.com/favicon.ico)

7. 等待页面刷新成功， 向下滚动到 GitHub Pages 配置； 项目已经成功部署。

#### 三、将项目绑定到自定义的域名

1. 打开 github 远程仓库； 在上一个项目的根目录，新增 CNAME 文件， 内容为你需要绑定的域名地址；保存。++==注意：不需要增加 http 或 https 协议名， 直接太难写域名即可； 如 elonwu.xyz==++
2. 点击当前仓库的 settings 向下滚动到 GitHub Pages 配置；Custom domain 栏中输入你需要绑定的域名地址； 如果域名支持的话，最好勾选 Enforce HTTPS
3. 打开你的域名管理网页， 以下以 [GoDaddy 为例](https://dcc.godaddy.com/manage/)；在 DNS 管理下新增 gihub 的文件服务器 ip

| 类型 | 名称 | 值              | TTL |
| ---- | ---- | --------------- | --- |
| A    | @    | 185.199.108.153 | 1h  |
| A    | @    | 185.199.109.153 | 1h  |
| A    | @    | 185.199.110.153 | 1h  |
| A    | @    | 185.199.111.153 | 1h  |

4. 稍等之后，直接访问你的域名， 即可看到项目已经被构建并且部署好，在你的域名之下。

##### 简书地址

##### 掘金地址
