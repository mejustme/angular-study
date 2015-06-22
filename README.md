# angular第一次作业

## 文件结构

静态页面不需要太过复杂的文件结构，最终的发布版本代码和相关文件全部在`build`文件夹中。

````
homework/
|     //编译、压缩、合并的最终目录
|       |-build
|           |-css
|               |-page //  最终生成的为压缩版本的css,页面级
|               |-common.min.css //  通用压缩css
|           |-demos  // html页面
|           |-js
|               |-json // 模拟数据
|               |-page  // 最终压缩合并的js, 页面级
|           |-index.html  // 首页页面
|       |-demos  //html页面
|       |-js     //未压缩的js, 页面级
|       |-less     //未编译的less
|           |-mod  //模块化的less
|           |-page  //页面级的less
|       |-node_modules //  依赖的插件模块包
|-------index.html //  index.html  // 首页页面
|-------.tpl    //  生成页面的脚手架模板
|-------README.md
|-----.gitignore // 默认使用git，配置好gitignore文件
|-----Gruntfiles.js // grunt配置文件
|-----package.json //g runt依赖包配置文件

````

#### 新项目脚手架

grunt webpage:pagename
如果模块简单不需要js逻辑，则执行

grunt webpage:pagenam:true
执行后，会自动生成需要的文件并进行一次初始化grunt，打开默认浏览器观察编译后的demo页,自动在相应生成下面文件

````
|-----pagename.html
|-----pagename.less
|-----pagename.js
````

### 功能实现特色

- 使用ngRoute 路由 特色`利用$routeParams.id` 便捷访问特定id的商品内容详情，不需要额外存储与通信id值
- 自定义filter过滤器 searchFilter ，特色可以`选择多种商品状态过滤`，过滤使用了管道机制,大小写不敏感，分别过滤关键字与商品状态
- 自定义filter过滤器 toChinease ，特色`利用对象Hash`，便捷转化状态为中文
- 自定义指令changeBkg,监听click事件，动态改变导航栏，背景颜色。
- 自定义指令autoFocus,当页面加载后，自动聚焦keyword输入栏

### 项目框架特点

- 利用webpage脚手架和页面模板，快速生成新页面
- less 模块化引入，清晰管理各个模块文件。
- 使用了wsui框架，使界面更和谐

### 待进一步提高

- 当没有进行商品选择，或者过滤了部分商品，点击商品详情，`应该显示所有选中的商品的详情`，现只默认显示了第一个商品.