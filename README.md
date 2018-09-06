# 西邮技术圈

![](./material/earlyBirds.jpg)

本项目通过 [creatshare-app-init](https://github.com/creatshare-demos/creatshare-app-init) 脚手架初始化

# 官网功能

西邮技术圈”前期功能将会有：

- [X] [主页](https://github.com/creatshare/xiyoucircle/issues/1)：首页展示，六大社群的扫码加入。
- [ ] [西邮包](https://github.com/creatshare/xiyoucircle/issues/22)：大学生需要的各种技术资源、软件包、学习资料、复习资料、拓展资料的汇总分享。
- [ ] [西邮实验室(社群)](https://github.com/creatshare/xiyoucircle/issues/2)：加入 QQ 社群、展示加盟的西邮实验室，任何人可以代表其实验室申请加盟。
- [ ] [西邮前端圈(社群)](https://github.com/creatshare/xiyoucircle/issues/17)：加入 QQ 社群、前端咨询站(国内各大前端团队技术周刊汇总、推荐必读技术博文汇总)、前端路线图(前期从网络上收集多个路线图并展示，后期用可视化技术绘出原创前端路线图)。
- [ ] [西邮后端圈(社群)](https://github.com/creatshare/xiyoucircle/issues/18)：加入 QQ 社群。
- [ ] [西邮竞赛圈(社群)](https://github.com/creatshare/xiyoucircle/issues/19)：加入 QQ 社群。
- [ ] [西邮产品圈(社群)](https://github.com/creatshare/xiyoucircle/issues/20)：加入 QQ 社群。
- [ ] [西邮硬件圈(社群)](https://github.com/creatshare/xiyoucircle/issues/21)：加入 QQ 社群。
- [ ] [关于我们](https://github.com/creatshare/xiyoucircle/issues/7)：西邮前端圈的宗旨、西邮技术圈的发展时间线、加入西邮前端圈。

其中，各页面模块具体信息为：

|页面模块|在线网址|
|----|----|
|西邮实验室|[http://xiyoucircle.top/laboratory](http://xiyoucircle.top/laboratory)|
|西邮前端圈|[http://xiyoucircle.top/frontend](http://xiyoucircle.top/frontend)|
|西邮后端圈|[http://xiyoucircle.top/server](http://xiyoucircle.top/server)|
|西邮竞赛圈|[http://xiyoucircle.top/contest](http://xiyoucircle.top/contest)|
|西邮产品圈|[http://xiyoucircle.top/project](http://xiyoucircle.top/project)|
|西邮硬件圈|[http://xiyoucircle.top/hardware](http://xiyoucircle.top/hardware)|

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

* [韩亦乐@hylerrix](https://github.com/hylerrix)
* [王智@Joe19970619](https://github.com/Joe19970619)
* [王玥珂@Demoiselle7](https://github.com/Demoiselle7)
* [任林东@adong11](https://github.com/adong11)

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
* “西邮后端圈” QQ 群：99048567
* “西邮实验室” QQ 群：832905332
* “西邮硬件圈” QQ 群：874751999
* “西邮竞赛圈” QQ 群：874635940
* “西邮产品圈” QQ 群：821064484
* 如果觉得这个项目不错的话，欢迎在本仓库右上角中点击 ```Star```

# LICENSE

[MIT LICENSE](./LICENSE)
