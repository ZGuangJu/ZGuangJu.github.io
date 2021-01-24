(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{624:function(s,t,a){"use strict";a.r(t);var r=a(2),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错"}},[s._v("#")]),s._v(" 报错")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("sudo")]),s._v("不能使用的错误")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("bash"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" sudo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" command not found\n")])])]),a("ul",[a("li",[s._v("解决办法")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" update\n\napt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("get")]),s._v(" install sudo\n")])])]),a("ul",[a("li",[s._v("连接或下载"),a("code",[s._v("github")]),s._v("仓库错误")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("Failed to connect to raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("githubusercontent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com port "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Connection refused"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])])]),a("ul",[a("li",[s._v("解决方法\n在 "),a("code",[s._v("https://www.ipaddress.com/")]),s._v(" 查询 "),a("code",[s._v("raw.githubusercontent.com")]),s._v(" 的真实 "),a("code",[s._v("IP")]),s._v("。")])]),s._v(" "),a("p",[s._v("修改 "),a("code",[s._v("hosts")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sudo vim "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hosts\n")])])]),a("p",[s._v("添加如下内容：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("199.232")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".28")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".133")]),s._v(" raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("githubusercontent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n")])])]),a("p",[s._v("重新执行安装命令即可")]),s._v(" "),a("h2",{attrs:{id:"查看系统版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看系统版本"}},[s._v("#")]),s._v(" 查看系统版本")]),s._v(" "),a("p",[s._v("系统版本")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("lsb_release "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a\n")])])]),a("p",[s._v("系统内核信息")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("uname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a\n")])])]),a("p",[s._v("系统版本信息")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sudo cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("proc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("version\n")])])]),a("p",[s._v("当前操作系统发行版信息")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("release\n")])])]),a("h2",{attrs:{id:"查看系统服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看系统服务"}},[s._v("#")]),s._v(" 查看系统服务")]),s._v(" "),a("ul",[a("li",[s._v("查看服务或包的位置")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("whereis redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli\n")])])]),a("ul",[a("li",[s._v("查看")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("service "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("all\n或\nservice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("all "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" more\n或\nservice "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("all "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" less\n")])])]),a("p",[s._v("其中"),a("code",[s._v("[ + ]")]),s._v("表示的是现在正在运行的服务项，"),a("code",[s._v("[ - ]")]),s._v("表示当前服务没有运行。")]),s._v(" "),a("ul",[a("li",[s._v("关闭服务")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("service redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server stop\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//redis-server是服务名")]),s._v("\n")])])]),a("ul",[a("li",[s._v("启动服务")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("service redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server start\n")])])]),a("h2",{attrs:{id:"更改软件安装源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改软件安装源"}},[s._v("#")]),s._v(" 更改软件安装源")]),s._v(" "),a("p",[s._v("备份一下软件源")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sudo cp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list_bak\n")])])]),a("p",[s._v("将"),a("code",[s._v("/etc/apt/sources.list")]),s._v(" 文件中 "),a("code",[s._v("Debian")]),s._v(" 默认的源地址 "),a("a",{attrs:{href:"http://deb.debian.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://deb.debian.org/"),a("OutboundLink")],1),s._v(" 替换为 "),a("a",{attrs:{href:"http://mirrors.ustc.edu.cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://mirrors.ustc.edu.cn"),a("OutboundLink")],1),s._v(" 即可。")]),s._v(" "),a("p",[s._v("当然也可以直接编辑"),a("code",[s._v("vi /etc/apt/sources.list")]),s._v(" 文件(需要使用 "),a("code",[s._v("sudo")]),s._v(")")]),s._v(" "),a("p",[s._v("加入如下内容即可")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("deb http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian stable main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n# deb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian stable main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\ndeb http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian stable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("updates main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n# deb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian stable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("updates main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\ndeb http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian stable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("proposed"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("updates main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n# deb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian stable"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("proposed"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("updates main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n")])])]),a("p",[s._v("中科大软件")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EOF")]),s._v("\ndeb http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" buster main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n# deb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" buster main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\ndeb http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" buster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("updates main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n# deb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" buster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("updates main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\ndeb http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" buster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("backports main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n# deb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" buster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("backports main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\ndeb http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("security buster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("updates main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n# deb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ustc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("edu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("security buster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("updates main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EOF")]),s._v("\n\n")])])]),a("p",[s._v("网易")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("cat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EOF")]),s._v("\ndeb http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("163.")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" buster main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n# deb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("163.")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" buster main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\ndeb http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("163.")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" buster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("updates main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n# deb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("163.")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" buster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("updates main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\ndeb http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("163.")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" buster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("backports main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n# deb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("163.")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" buster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("backports main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\ndeb http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("163.")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("security buster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("updates main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n# deb"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("src http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mirrors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("163.")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("debian"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("security buster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("updates main contrib non"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("free\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EOF")]),s._v("\n")])])]),a("p",[s._v("敲击i键进入插入模式，组合键"),a("kbd",[s._v("ctrl")]),s._v(" + "),a("kbd",[s._v("shift")]),s._v(" + "),a("kbd",[s._v("v")]),s._v("将复制内容粘贴至源文件中，敲击两次"),a("code",[s._v("esc")]),s._v("键进入命令模式，输入引号内键"),a("code",[s._v("：wq!")]),s._v("保存并退出\n更改完 "),a("code",[s._v("sources.list")]),s._v(" 文件后请运行 "),a("code",[s._v("sudo apt-get update")]),s._v(" 更新索引以生效。")]),s._v(" "),a("h2",{attrs:{id:"安装curl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装curl"}},[s._v("#")]),s._v(" 安装curl")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sudo apt install curl\n")])])]),a("h2",{attrs:{id:"安装nvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nvm"}},[s._v("#")]),s._v(" 安装nvm")]),s._v(" "),a("p",[s._v("安装前，虽然在"),a("code",[s._v("linux")]),s._v("中影响不大，但还是建议最好先卸载之前安装过的"),a("code",[s._v("node")]),s._v("，")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/nvm-sh/nvm#install-script",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方最新安装版本命令"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("安装命令(安装的是0.33.11)")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("curl https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("githubusercontent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("creationix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nvm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("master"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" bash\n")])])]),a("p",[s._v("安装指定版本的"),a("code",[s._v("nvm")]),s._v("(我用的，当前最新版本)")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("o"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("raw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("githubusercontent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nvm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nvm"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37.2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" bash\n")])])]),a("h3",{attrs:{id:"通过nvm安装使用node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过nvm安装使用node"}},[s._v("#")]),s._v(" 通过nvm安装使用node")]),s._v(" "),a("ul",[a("li",[s._v("查看远程可安装的所有"),a("code",[s._v("node")]),s._v("版本")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("nvm ls"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("remote\n")])])]),a("ul",[a("li",[s._v("安装"),a("code",[s._v("node")])])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("nvm install "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.9")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v("\n")])])]),a("ul",[a("li",[s._v("查看安装的所有"),a("code",[s._v("node")]),s._v("版本")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("nvm ls\n")])])]),a("ul",[a("li",[s._v("安装最新稳定版"),a("code",[s._v("node")])])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("nvm install latest\n")])])]),a("ul",[a("li",[s._v("安装最新不稳定版"),a("code",[s._v("node")])])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("nvm install unstable\n")])])]),a("p",[s._v("* 安装完成后会提示你，重启当前终端，或者添加到环境变量后才能使用"),a("code",[s._v("nvm")]),s._v("(重启最简单了)")]),s._v(" "),a("ul",[a("li",[s._v("使用某版本的"),a("code",[s._v("node")])])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("nvm use "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.9")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v("\n")])])]),a("ul",[a("li",[s._v("给某个"),a("code",[s._v("node")]),s._v("版本设置别名")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("nvm alias awesome"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),s._v("\n")])])]),a("ul",[a("li",[s._v("不同版本的node环境中，安装的包是不同的，目的是为了防止兼容问题，但是可以用以下命令导入已安装的包")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("nvm install v5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("reinstall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("packages"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.2")]),s._v("\n")])])]),a("p",[s._v("* 从"),a("code",[s._v("4.2")]),s._v(" 导入到"),a("code",[s._v("5.0.0")]),s._v("中")]),s._v(" "),a("ul",[a("li",[s._v("确认某个版本"),a("code",[s._v("Node")]),s._v("的路径")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("nvm which "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),s._v("\n")])])]),a("p",[s._v("使用"),a("code",[s._v("belwo")]),s._v("命令使用所需版本的"),a("code",[s._v("node.js")]),s._v("运行"),a("code",[s._v("Node")]),s._v("脚本(先安装"),a("code",[s._v("belwo")]),s._v(")")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("nvm exec "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.18")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),s._v(" server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\n")])])]),a("h2",{attrs:{id:"安装-pm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-pm2"}},[s._v("#")]),s._v(" 安装 pm2")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npm i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g pm2\n")])])]),a("p",[a("RouterLink",{attrs:{to:"/docs/Tools/npm.html"}},[s._v("使用")])],1),s._v(" "),a("ul",[a("li",[s._v("结束线程")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("pm2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" my"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("nuxt\n")])])]),a("h2",{attrs:{id:"安装redis-内存数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装redis-内存数据库"}},[s._v("#")]),s._v(" 安装redis (内存数据库)")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("sudo apt update\n\nsudo apt install redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("命令")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("含义")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("redis-server")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("redis")]),s._v("服务器")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("redis-cli")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("redis")]),s._v("命令行客户端")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("redis-benchmark")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("redis")]),s._v("性能测试工具")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("redis-check-aof")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("aof")]),s._v("文件修复工具")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("redis-check-dump")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("rdb")]),s._v("文件检查工具")])])])]),s._v(" "),a("p",[s._v("启动 "),a("code",[s._v("Redis")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server\n")])])]),a("p",[s._v("带配置文件启动")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注意配置文件路径")]),s._v("\n")])])]),a("p",[s._v("查看 "),a("code",[s._v("redis")]),s._v(" 是否启动？")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli\n")])])]),a("p",[s._v("以上命令将打开以下终端：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("redis "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[a("code",[s._v("127.0.0.1")]),s._v(" 是本机 "),a("code",[s._v("IP")]),s._v(" ，"),a("code",[s._v("6379")]),s._v(" 是 "),a("code",[s._v("redis")]),s._v(" 服务端口。现在我们输入 "),a("code",[s._v("PING")]),s._v(" 命令。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("redis "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ping\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PONG")]),s._v("\n")])])]),a("p",[s._v("以上说明我们已经成功安装了"),a("code",[s._v("redis")]),s._v(".")]),s._v(" "),a("p",[s._v("停止 "),a("code",[s._v("redis")]),s._v(" 命令")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli shutdown\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);