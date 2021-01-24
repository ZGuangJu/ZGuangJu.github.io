(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{669:function(a,e,s){"use strict";s.r(e);var t=s(2),v=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"webpack简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack简介"}},[a._v("#")]),a._v(" webpack简介")]),a._v(" "),s("p",[a._v("webpack是一个 "),s("strong",[a._v("模块打包工具")]),a._v("，支持所有的打包语法，比如 "),s("code",[a._v("ES Module")]),a._v("、"),s("code",[a._v("CommonJS")]),a._v("、"),s("code",[a._v("CMD")]),a._v("、"),s("code",[a._v("AMD")]),a._v("。初期的webpack是用来模块打包js的，发展到现在，已经可以打包很多种文件类型，比如 "),s("code",[a._v("css")]),a._v("、"),s("code",[a._v("img")]),a._v(" 。")]),a._v(" "),s("p",[a._v("优化打包速度最有效的方法就是保持 "),s("code",[a._v("nodejs")]),a._v(" 和 "),s("code",[a._v("webpack")]),a._v(" 为最新版本。")]),a._v(" "),s("h3",{attrs:{id:"类似的打包工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类似的打包工具"}},[a._v("#")]),a._v(" 类似的打包工具")]),a._v(" "),s("p",[a._v("gulp//")]),a._v(" "),s("h2",{attrs:{id:"webpack能做什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack能做什么"}},[a._v("#")]),a._v(" webpack能做什么")]),a._v(" "),s("p",[a._v("代码转换 【es6-es5，less-css】， 文件优化 【代码压缩】 ，代码分割 【公共模块抽离】 ，模块合并，自动刷新【热更新】代码校验，自动发布【发布到服务器】")]),a._v(" "),s("h2",{attrs:{id:"webpack和node的关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack和node的关系"}},[a._v("#")]),a._v(" webpack和node的关系")]),a._v(" "),s("p",[a._v("使用webpack前需要了解node的知识...")]),a._v(" "),s("h3",{attrs:{id:"nodejs的基础语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodejs的基础语法"}},[a._v("#")]),a._v(" nodejs的基础语法")]),a._v(" "),s("ul",[s("li",[a._v("module.exports 导出一个语法")]),a._v(" "),s("li",[a._v("require引入一个模块")]),a._v(" "),s("li",[a._v("path：nodejs内置的路径模块")]),a._v(" "),s("li",[a._v("__dirname:文件夹的绝对路径")])]),a._v(" "),s("h3",{attrs:{id:"_1-初始化环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化环境"}},[a._v("#")]),a._v(" 1.初始化环境")]),a._v(" "),s("p",[a._v("初始化npm包文件，配置package.json文件 & -y表示所有配置都是yes")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" npm init -y\n")])])]),s("h3",{attrs:{id:"_2-webpack安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack安装"}},[a._v("#")]),a._v(" 2.webpack安装")]),a._v(" "),s("ol",[s("li",[a._v("全局安装")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm i -g webpack webpack-cli\n")])])]),s("p",[a._v("卸载")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm uninstall -g webpack  webpack-cli\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("局部安装")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm i -D webpack webpack-cli\n")])])]),s("p",[a._v("卸载")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm uninstall -D/-S webpack  webpack-cli\n")])])]),s("ul",[s("li",[a._v("优先使用局部，优点是：便于管理版本\n【webpack-cli只在v4x版以后可用】")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("--save-dev  /  -D    //开发环境\n--save      /  -S    //生产环境 （生产环境和开发环境都要用的依赖）\n--global    /  -g    //全局安装\n")])])]),s("h3",{attrs:{id:"_3-webpack-的0配置-就是从0开始一点点自己配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-webpack-的0配置-就是从0开始一点点自己配置"}},[a._v("#")]),a._v(" 3.webpack 的0配置(就是从0开始一点点自己配置)")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("直接运行webpack就可以进行打包，webpack默认有两个文件夹 src源代码 dist 编译后的代码目录")])]),a._v(" "),s("li",[s("p",[a._v("在命令行npx webpack 会自动找目录下的src文件夹，打包出一个dist目录，里面是打包后的代码")])]),a._v(" "),s("li",[s("p",[a._v("npm v5.2.0 引入的一条命令（npx），npx 会帮你执行依赖包里的二进制文件。引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。")])]),a._v(" "),s("li",[s("p",[a._v("npx是用来运行本地项目中的依赖，如果本地项目依赖不存在，会自动下载，用完后，会默认删除掉，下载的依赖包")])]),a._v(" "),s("li",[s("p",[a._v("npm 是运行package.json。 文件中的script命令的，默认会在当前目录的node_modules包中找，找不到就去全局找，直到找到，实在找不到报错给你看")])]),a._v(" "),s("li",[s("p",[a._v("五大组成部分")]),a._v(" "),s("ol",[s("li",[a._v("入口 entry")]),a._v(" "),s("li",[a._v("出口 output")]),a._v(" "),s("li",[a._v("装载机 module-loader")]),a._v(" "),s("li",[a._v("插件 plugins")]),a._v(" "),s("li",[a._v("模式 mode")]),a._v(" "),s("li",[a._v("优化 optimization")])])])]),a._v(" "),s("h3",{attrs:{id:"webpack-打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-打包"}},[a._v("#")]),a._v(" webpack 打包")]),a._v(" "),s("p",[a._v("webpack默认就是打包js的，默认只能是编译es6的模块【export import】，【class】不能编译")]),a._v(" "),s("ul",[s("li",[a._v("当默认使用webpack命令的时候，它会自动执行node_modules包里 的默认配置文件，webpack.config.js")]),a._v(" "),s("li",[a._v("当我们在项目里创建了webpack.config.js后，在使用npx webpacck的话，它会优先执行我们创建的这个配置文件")]),a._v(" "),s("li",[a._v("我们可以用命令指定webpack加载别名的配置文件")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("  npx webpack --config webpack.config.dev.js\n")])])]),s("h3",{attrs:{id:"webpack-dev-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-dev-server"}},[a._v("#")]),a._v(" webpack-dev-server")]),a._v(" "),s("ul",[s("li",[a._v("它是wxpress封装的")]),a._v(" "),s("li",[a._v("使用它来启动webpack服务，它会执行编译，编译的文件main.js不会产生物理文件(默认在项目根目录中)，会将编译存到内存条中")]),a._v(" "),s("li",[a._v("一般使用它需要使用html-webpack-plugin配合开发")])]),a._v(" "),s("h3",{attrs:{id:"html-webpack-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-webpack-plugin"}},[a._v("#")]),a._v(" html-webpack-plugin")]),a._v(" "),s("ul",[s("li",[a._v("是一个插件，写在webpack配置中的plugins数组中")]),a._v(" "),s("li",[a._v("它是将html模板进行编译，并把webpack编译好的脚本注入到html页面里")])])])}),[],!1,null,null,null);e.default=v.exports}}]);