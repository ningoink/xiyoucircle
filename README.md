# 西邮前端圈

本项目通过 [creatshare-app-init](https://github.com/creatshare-demos/creatshare-app-init) 脚手架初始化

# 官网功能

![](./material/earlyBirds.jpg)

西邮前端圈”前期功能将会有：

- [X] [“主页”](https://github.com/icorvoh/XUPT-FE/issues/1)：首页展示
- [ ] [“西邮实验室”](https://github.com/icorvoh/XUPT-FE/issues/2)：展示加盟的西邮实验室，任何人可以代表其实验室申请加盟
- [ ] [“前端咨询站”](https://github.com/icorvoh/XUPT-FE/issues/3)：国内各大前端团队技术周刊汇总、推荐必读技术博文汇总
- [ ] [”前端路线图“](https://github.com/icorvoh/XUPT-FE/issues/4)：前期从网络上收集多个路线图并展示，后期用可视化技术绘出原创前端路线图
- [ ] [“西邮大牛展”](https://github.com/icorvoh/XUPT-FE/issues/6)：为每一个加盟的学长学姐放入展示块，任何人可以申请加盟
- [ ] [“关于前端圈”](https://github.com/icorvoh/XUPT-FE/issues/7)：西邮前端圈的宗旨，西邮前端圈的发展时间线、加入西邮前端圈
- [ ] [“即刻编程”](https://github.com/icorvoh/XUPT-FE/issues/13)：提供的基于 JS Bin 的在线编程服务，每个人均可以直接开始入手前端开发。

其中，各页面模块具体信息为：

|页面模块|在线网址|
|----|----|
|西邮前端圈|[http://xupt-fe.top/](http://xupt-fe.top/index)|
|西邮实验室|[http://xupt-fe.top/lab](http://xupt-fe.top/lab)|
|前端咨询站|[http://xupt-fe.top/info](http://xupt-fe.top/info)|
|前端路线图|[http://xupt-fe.top/roadmap](http://xupt-fe.top/roadmap)|
|西邮大牛展|[http://xupt-fe.top/leader](http://xupt-fe.top/leader)|
|关于前端圈|[http://xupt-fe.top/about](http://xupt-fe.top/about)|
|即刻编程|[http://xupt-fe.top/coding](http://xupt-fe.top/coding)|

# 技术栈

在我们的共同协商下，我们选取了如下技术，或许你也需要去了解：

* ECMASCript6
* Webpack
* NodeJS
* Nginx

或许将适当引入了如下库：

- [X] [fontawesome](http://fontawesome.io/)
- [X] [express](http://expressjs.com/)
- [X] [Vue.js](https://cn.vuejs.org/)

这些技术点也在随着业务的扩展不断更新中，尽请期待。

同时开发团队还做了如下工作，或许你也能贡献你的力量：

* 产品原型图的设计
* 群内交流时的技术支持
* 宣传与推广

# 核心贡献者

* [韩亦乐@icorvoh](https://github.com/icorvoh)
* [王智@Joe19970619](https://github.com/Joe19970619)
* [任林东@adong11](https://github.com/adong11)
* [王玥珂@Demoiselle7](https://github.com/Demoiselle7)
* [魏秋娟@CallmePapa](https://github.com/CallmePapa)

# 加入我们

如果你愿意加入我们一起协作，有如下些许建议：

* 贡献你的代码：
  * 点击右上角 ```fork``` 将仓库克隆到你的账号下，并在合适的时候提交 PR
  * 或直接与我联系，将你加入本仓库的 collaboration 中，在 develop 分支中合作开发。
* 为在团队协作分工时贯穿”高内聚，低耦合”思想，降低交流、维护成本，声明以下协作指南：
  * 每个人把自己负责的代码写在 src 下的各个文件夹里，用 webpack 打包， npm start 能成功运行。且不随意创建新文件夹；不随意引入第三方库；引入第三方库时优先考虑使用 npm，其次优先考虑在 cdn.bootcss.com 寻找 CDN 源。
  * 无论 css 还是 js 都得高内聚，低耦合，模块化开发，文件命名及变量全小写且采用小驼峰法命名，否则不接受合并请求喔。且 JavaScript 模块优先采用 import/export 语法解析赋值式开发，并通过 babel  预编译；JavaScript 代码优先采用 ES6 支持的语法糖进行代码重构。
  * git 协作采用 [gitflow](http://danielkummer.github.io/git-flow-cheatsheet/)，在自己分支下而不是 master 也不是 develop 下开发，git commit 一律采用一行以内的小写英文，且在 commit 中推荐使用 [gitmoji](https://gitmoji.carloscuesta.me/) 或 [emoji.muan](http://emoji.muan.co/) 表情生动化 commit 记录。写完代码后 push 自己的分支到主仓库下，大家集体通过后，由 [@icorvoh](https://github.com/icorvoh) 负责合并到 develop 下。
  * 这次只是纯页面，要求响应式布局，其中以 750px 的屏幕宽度为界限。验收条件是每个像素的宽度下页面都不被撕裂。导航条除即刻编程外统一使用一种，由 - [@Joe19970619](https://github.com/Joe19970619) 负责。
  * 每个人在自己负责的页面模板中写死的数据，验收前需将该数据提取成 JSON 数据(之后考虑是否引入 Mock 服务)，并通过 JavaScript 读取和渲染，以使该项目符合 MVC 设计模式。

更多资讯：

* “西邮前端圈” QQ 群：541957278
* 如果觉得这个项目不错的话，欢迎在本仓库右上角中点击 ```Star```

# LICENSE

[MIT LICENSE](./LICENSE)
