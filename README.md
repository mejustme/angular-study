# angular学习

## 文件结构

````
|     //编译、压缩、合并的最终目录
|       |-build
|           |-css
|               |-page //  最终生成的为压缩版本的css,页面级
|               |-common.min.css //  通用压缩css
|           |-demos  // html页面
|           |-js
|               |-json // 模拟数据
|               |-page  // 最终压缩合并的js, 页面级
|       |-demos  //html页面
|       |-js     //未压缩的js, 页面级
|       |-less     //未编译的less
|           |-mod  //模块化的less
|           |-page  //页面级的less
|       |-node_modules //  依赖的插件模块包
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
### 项目框架特点

- 利用webpage脚手架和页面模板，快速生成新页面
- less 模块化引入，清晰管理各个模块文件。
- 使用了wsui框架，使界面更和谐
