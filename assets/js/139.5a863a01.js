(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{630:function(t,s,n){"use strict";n.r(s);var a=n(2),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"http://nginx.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx英文官网"),n("OutboundLink")],1),t._v(" "),n("a",{attrs:{href:"https://www.nginx.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx中文官网"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[t._v("Nginx 同 Apache 一样都是一种 Web 服务器。基于 REST 架构风格，以统一资源描述符（Uniform Resources Identifier）URI 或者统一资源定位符（Uniform Resources Locator）URL 作为沟通依据，通过 HTTP 协议提供各种网络服务。")])]),t._v(" "),n("p",[t._v("然而，这些服务器在设计之初受到当时环境的局限，例如当时的用户规模，网络带宽，产品特点等局限并且各自的定位和发展都不尽相同。这也使得各个 Web 服务器有着各自鲜明的特点。")]),t._v(" "),n("p",[t._v("Apache 的发展时期很长，而且是毫无争议的世界第一大服务器。它有着很多优点：稳定、开源、跨平台等等。")]),t._v(" "),n("p",[t._v("它出现的时间太长了，它兴起的年代，互联网产业远远比不上现在。所以它被设计为一个重量级的。")]),t._v(" "),n("p",[n("strong",[t._v("但是它不支持高并发的服务器。在 Apache 上运行数以万计的并发访问，会导致服务器消耗大量内存。")])]),t._v(" "),n("p",[t._v("操作系统对其进行进程或线程间的切换也消耗了大量的 CPU 资源，导致 HTTP 请求的平均响应速度降低。")]),t._v(" "),n("p",[t._v("这些都决定了 Apache 不可能成为高性能 Web 服务器，"),n("strong",[t._v("轻量级高并发服务器 Nginx 就应运而生了。")])]),t._v(" "),n("p",[t._v("俄罗斯的工程师 Igor Sysoev，他在为 Rambler Media 工作期间，使用 C 语言开发了 Nginx。")]),t._v(" "),n("p",[t._v("Nginx 作为 Web 服务器一直为 Rambler Media 提供出色而又稳定的服务。然后呢，Igor Sysoev 将 Nginx 代码开源，并且赋予自由软件许可证。")]),t._v(" "),n("ul",[n("li",[t._v("基于以下几点：Nginx火了")])]),t._v(" "),n("ol",[n("li",[t._v("Nginx 使用基于事件驱动架构，使得其可以支持数以百万级别的 TCP 连接。")]),t._v(" "),n("li",[t._v("高度的模块化和自由软件许可证使得第三方模块层出不穷（这是个开源的时代啊）。")]),t._v(" "),n("li",[t._v("Nginx 是一个跨平台服务器，可以运行在 Linux、Windows、FreeBSD、Solaris、AIX、Mac OS 等操作系统上。")]),t._v(" "),n("li",[t._v("这些优秀的设计带来的极大的稳定性。")])]),t._v(" "),n("h2",{attrs:{id:"nginx-的用武之地"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的用武之地"}},[t._v("#")]),t._v(" Nginx 的用武之地")]),t._v(" "),n("p",[t._v("关于代理")]),t._v(" "),n("ol",[n("li",[t._v("说到代理，首先我们要明确一个概念，所谓代理就是一个代表、一个渠道；此时就涉及到两个角色，一个是2. 被代理角色，一个是目标角色。")]),t._v(" "),n("li",[t._v("被代理角色通过这个代理访问目标角色完成一些任务的过程称为代理操作过程；如同生活中的专卖店，客人到 adidas 专卖店买了一双鞋，这个专卖店就是代理，被代理角色就是 adidas 厂家，目标角色就是用户。")]),t._v(" "),n("li",[t._v("简而言之，就是adidas老板找来专卖店这个代理来卖鞋子给客人这个目标角色。")])]),t._v(" "),n("ul",[n("li",[t._v("正向代理：传说中的“翻墙”")])]),t._v(" "),n("p",[t._v("说反向代理之前，我们先看看正向代理，正向代理也是大家最常接触到的代理模式，我们会从两个方面来说关于正向代理的处理模式，分别从软件方面和生活方面来解释一下什么叫正向代理。")]),t._v(" "),n("p",[t._v("在如今的网络环境下，我们如果由于技术需要要去访问国外的某些网站，此时你会发现位于国外的某网站我们通过浏览器是没有办法访问的。")]),t._v(" "),n("p",[t._v("此时大家可能都会用一个操作 FQ 进行访问，FQ 的方式主要是找到一个可以访问国外网站的代理服务器，我们将请求发送给代理服务器，代理服务器去访问国外的网站，然后将访问到的数据传递给我们！")]),t._v(" "),n("p",[t._v("上述这样的代理模式称为正向代理，正向代理最大的特点是客户端非常明确要访问的服务器地址；**服务器只清楚请求来自哪个代理服务器，而不清楚来自哪个具体的客户端；**正向代理模式屏蔽或者隐藏了真实客户端信息。")]),t._v(" "),n("p",[t._v("摘自知乎"),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/152526491",target:"_blank",rel:"noopener noreferrer"}},[t._v("看完这篇文章，还不懂nginx，算我输"),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[t._v("Nginx 配置")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("user  www www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworker_processes auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nerror_log  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wwwlogs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx_error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log  crit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npid        "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("server"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("logs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworker_rlimit_nofile "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("51200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nevents\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        use epoll"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        worker_connections "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("51200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        multi_accept on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# 原装配置\nhttp\n\n\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        include       mime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  #include luawaf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  include proxy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        default_type  application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("octet"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        server_names_hash_bucket_size "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("512")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        client_header_buffer_size "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        large_client_header_buffers "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        client_max_body_size "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        sendfile   on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        tcp_nopush on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        keepalive_timeout "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        tcp_nodelay on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        fastcgi_connect_timeout "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_send_timeout "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_read_timeout "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_buffer_size "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_buffers "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_busy_buffers_size "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_temp_file_write_size "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  fastcgi_intercept_errors on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        gzip on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        gzip_min_length  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        gzip_buffers     "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        gzip_http_version "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        gzip_comp_level "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        gzip_types     text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("plain application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("javascript application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("javascript text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("javascript text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("css application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xml"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        gzip_vary on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        gzip_proxied   expired no"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache no"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("store "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        gzip_disable   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MSIE [1-6]\\."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        limit_conn_zone $binary_remote_addr zone"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("perip"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  limit_conn_zone $server_name zone"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("perserver"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        server_tokens off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        access_log off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nserver\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("888")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name phpmyadmin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        index index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        root  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("server"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("phpmyadmin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tmp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        #error_page   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("404.")]),t._v("html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        include enable"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\\"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gif"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpg"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpeg"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("png"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("bmp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("swf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            expires      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\\"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("js"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("$\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            expires      "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("h"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            deny all"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        access_log  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wwwlogs"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("access"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ninclude "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("server"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("panel"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vhost"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*.conf;\n}\n\n\n外网面板地址: http://149.28.28.126:8888/98867b04\n内网面板地址: http://149.28.28.126:8888/98867b04\nusername: whmd9xsj\npassword: cbc9fd20\n\n")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);