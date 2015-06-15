<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="utf-8">
    <title>homework</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="//gtms02.alicdn.com/tps/i2/TB1MP0FGXXXXXabXVXXnCBGGXXX-32-32.ico" type="image/x-icon" />
    <link href="//g.alicdn.com/sui/wsui/0.0.11/css/sui.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="../css/common.min.css">
    <link rel="stylesheet" href="../css/page/#{pagename}.min.css" charset="utf-8">
</head>
<body>
    <header>
        <div class="head">
            <div class="logo"></div>
            <ul class="userbar list-unstyled clearfix">
                <li class="userinfo">
                    <a href="#">
                        <span class="username"><i class="wsif wsif-profile"></i>影魔</span>
                    </a>
                </li>

                <li class="logout">
                    <a target="_self" href="#" id=""> 退出 </a>
                </li>
            </ul>
        </div>
    </header>
    <section class="main-wrapper">
        <section class="main-inner clearfix">
          <div class="nav-wrapper">
              <nav class="main-block">
                  <ul class="list-unstyled" id="J_nav">
                      <li class="clearfix " ><a href="#" target="_self"><i class="wsif wsif-home"></i>首页</a></li>
                      <li class="clearfix "><a href="#" target="_self"><i class="wsif wsif-share"></i>宝贝列表</a></li>
                      <li class="haschild clearfix "><a href="#" target="_self"><i class="wsif wsif-form"></i>宝贝详情</a></li>

                  </ul>
              </nav>
          </div>
          <article>
              <div class="main-block #{pagename}">
                  <h3 class="block-title">项目新模块名: #{pagename}</h3>
                  <div>
                      <h4>Tips:</h4>
                      <ul>
                          <li>do you self</li>
                          <li>work hard</li>

                      </ul>
                  </div>
              </div>
          </article>
        </section>
    </section>
    <ul class="fixed-ope list-unstyled">
        <li id="J_top">
            <i class="wsif wsif-top"></i>
            <div>TOP</div>
        </li>
        <li class="feedback">
            <a href="#" >
                <i class="wsif wsif-comment"></i>
                <div>反馈</div>
            </a>
        </li>
    </ul>
    <footer>  Copyright &copy; 2015-2016 XXX 版权所有 </footer>

    <script src="//g.alicdn.com/sj/lib/jquery/dist/jquery.min.js" charset="utf-8"></script>
    <script src="//g.alicdn.com/sui/wsui/0.0.11/js/sui.min.js" charset="utf-8"></script>
    <script src="//g.alicdn.com/sj/lib/angular/angular.min.js" charset="utf-8"></script>
    <script src="//cdn.bootcss.com/angular.js/1.4.0-rc.2/angular-route.min.js"></script>
    <script src="../js/page/#{pagename}.js"></script>
    <!-- 下行不要套进vm -->
    <script src="//localhost:35729/livereload.js"></script>

</body>
</html>
