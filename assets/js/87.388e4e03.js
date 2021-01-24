(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{590:function(v,_,e){"use strict";e.r(_);var t=e(2),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"深入理解content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深入理解content"}},[v._v("#")]),v._v(" 深入理解"),e("code",[v._v("content")])]),v._v(" "),e("h2",{attrs:{id:"content与替换元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content与替换元素"}},[v._v("#")]),v._v(" "),e("code",[v._v("content")]),v._v("与替换元素")]),v._v(" "),e("h3",{attrs:{id:"_1-什么是替换元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是替换元素"}},[v._v("#")]),v._v(" 1. 什么是替换元素")]),v._v(" "),e("p",[v._v("通过修改某个属性值呈现的内容就可以被替换的元素称为"),e("strong",[v._v("替换元素")]),v._v("。因此，"),e("code",[v._v("img")]),v._v("、"),e("code",[v._v("object")]),v._v("、"),e("code",[v._v("video")]),v._v("、"),e("code",[v._v("iframe")]),v._v("或者表单元素"),e("code",[v._v("textarea")]),v._v("和"),e("code",[v._v("input")]),v._v("都是典型的替换元素。")]),v._v(" "),e("p",[v._v("替换元素除了内容可替换这一特性外，还有一些特性：")]),v._v(" "),e("ol",[e("li",[e("strong",[v._v("内容的外观不受页面上的CSS的影响")]),v._v("。样式表现在CSS作用域之外。更改替换元素自身的外观需要浏览器自身暴露的一些样式接口。")]),v._v(" "),e("li",[e("strong",[v._v("有自己的尺寸")]),v._v("。替换元素在没有明确尺寸设定的情况下，其默认的尺寸（不包括边框）是"),e("code",[v._v("300px*150px")]),v._v("。")]),v._v(" "),e("li",[v._v("**在很多CSS属性上有自己的一套表现规则。**比较具有代表性的就是"),e("code",[v._v("vertical-align")]),v._v("属性。对于非替换元素，"),e("code",[v._v("vertical-align")]),v._v("的默认值是"),e("code",[v._v("baseline")]),v._v("，被定义为字符"),e("code",[v._v("x")]),v._v("的下边缘；对于替换元素的内容没有字符"),e("code",[v._v("x")]),v._v("，替换元素的基线就被定义为元素的下边缘。")])]),v._v(" "),e("h3",{attrs:{id:"_2-替换元素的默认display值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-替换元素的默认display值"}},[v._v("#")]),v._v(" 2. 替换元素的默认"),e("code",[v._v("display")]),v._v("值")]),v._v(" "),e("p",[v._v("所有的替换元素都是内联元素，也就是替换元素和替换元素、替换元素和文字都是可以在一行显示的。")]),v._v(" "),e("blockquote",[e("p",[v._v("各个替换元素的默认"),e("code",[v._v("display")]),v._v("属性值（P46）")])]),v._v(" "),e("p",[v._v("**"),e("code",[v._v("input")]),v._v("和"),e("code",[v._v("button")]),v._v("按钮的区别在什么地方？**区别在于两种按钮默认的"),e("code",[v._v("white-space")]),v._v("值不一样，前者是"),e("code",[v._v("pre")]),v._v("，后者是"),e("code",[v._v("normal")]),v._v("，所表现出来的差异是："),e("strong",[v._v("当按钮文字足够多时，"),e("code",[v._v("input")]),v._v("按钮不会自动换行，"),e("code",[v._v("button")]),v._v("按钮则会。")])]),v._v(" "),e("blockquote",[e("p",[v._v("替换元素的"),e("code",[v._v("display")]),v._v("是"),e("code",[v._v("inline")]),v._v("、"),e("code",[v._v("block")]),v._v("和"),e("code",[v._v("inline-block")]),v._v("中的任意一个，其尺寸计算规则都是一样的。")])]),v._v(" "),e("h3",{attrs:{id:"_3-替换元素的尺寸计算规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-替换元素的尺寸计算规则"}},[v._v("#")]),v._v(" 3. 替换元素的尺寸计算规则")]),v._v(" "),e("p",[v._v("替换元素的尺寸从内到外分为3类：固有尺寸、HTML尺寸和CSS尺寸。")]),v._v(" "),e("ol",[e("li",[v._v("固有尺寸指的是替换内容原本的尺寸。")]),v._v(" "),e("li",[v._v("HTML尺寸"),e("code",[v._v("img")]),v._v("、"),e("code",[v._v("input")]),v._v("只能通过HTML原生属性改变。")]),v._v(" "),e("li",[v._v("CSS尺寸指的是可以通过CSS的"),e("code",[v._v("width")]),v._v("和"),e("code",[v._v("height")]),v._v("或者"),e("code",[v._v("max-width/min-width")]),v._v("和"),e("code",[v._v("max-height/min-width")]),v._v("设置的尺寸，对应盒尺寸的"),e("code",[v._v("content box")]),v._v("。")])]),v._v(" "),e("blockquote",[e("p",[v._v("可以影响替换元素的3层结构（由里到外）：固有尺寸->HTML尺寸->CSS尺寸")])]),v._v(" "),e("p",[v._v("这3层结构的计算规则：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("如果没有CSS尺寸和HTML尺寸，使用固有尺寸作为最终的宽高。")]),v._v(" "),e("img",{attrs:{src:"1.jpg",alt:""}})])]),v._v(" "),e("p",[v._v("页面显示宽高就是图片自身的尺寸"),e("code",[v._v("256px*192px")]),v._v("。")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("如果没有CSS尺寸，则使用HTML尺寸作为最终的宽高。")]),v._v(" "),e("img",{attrs:{src:"1.jpg",width:"128",height:"128",alt:""}})])]),v._v(" "),e("p",[v._v("通过HTML属性"),e("code",[v._v("width")]),v._v("和"),e("code",[v._v("height")]),v._v("限定了图片的HTML尺寸，因此最终图片所呈现的宽高就是"),e("code",[v._v("128px*128px")]),v._v("。")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("如果有CSS尺寸，则最终尺寸由CSS属性决定。")]),v._v(" "),e("p",[v._v("img {\nwidth: 200px;\nheight: 150px;\n}\n"),e("img",{attrs:{src:"1.jpg",width:"128",height:"128",alt:""}})])])]),v._v(" "),e("p",[v._v("此时，固有尺寸、CSS尺寸和HTML尺寸同时存在，起作用的是CSS属性限定的尺寸，因此，最终图片所呈现的宽高就是"),e("code",[v._v("200px*150px")]),v._v("。")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("如果固有尺寸含有固有的宽高比例，同时仅设置了宽度或高度，则元素依然按照固有的宽高比例显示。")]),v._v(" "),e("p",[v._v("img {\nwidth: 200px;\n}\n"),e("img",{attrs:{src:"1.jpg",alt:""}})])])]),v._v(" "),e("p",[v._v("设置的宽度，因为图片自身有着固定的宽高比例，所以最终图片呈现的宽高就是"),e("code",[v._v("200px*150px")]),v._v("（"),e("code",[v._v("150=200+192/256")]),v._v("）")]),v._v(" "),e("ul",[e("li",[v._v("如果条件不符合，在所有现代浏览器下的尺寸表现都是"),e("code",[v._v("300px*150px")]),v._v("。")]),v._v(" "),e("li",[v._v("内联替换元素和块级替换元素使用上面同一套尺寸计算规则。")])]),v._v(" "),e("blockquote",[e("p",[v._v("实际开发中，为了提高加载性能和节约带宽费用，首屏图片采用滚屏的方式异步加载，并且使用一张透明的图片占位。一般直接使用"),e("code",[v._v("<img>")]),v._v("。")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("img {\n    visibility: hidden;\n}\n\nimg[src] {\n    visibility: visible;\n}\n")])])]),e("p",[v._v("当"),e("code",[v._v("img")]),v._v("标签中有"),e("code",[v._v("src")]),v._v("属性时，即使为空，浏览器依然会发起请求，而且请求的是当前页面数据。当图片的"),e("code",[v._v("src")]),v._v("缺省时，图片不会有任何请求，是最高效的实现方式。")]),v._v(" "),e("p",[v._v("Firefox下"),e("code",[v._v("img")]),v._v("的表现是一个内联元素，而非替换元素，因此很多设置都它下面无效。要修复这个问题非常简单，就是直接设置"),e("code",[v._v("img {display:inline-block;}")])]),v._v(" "),e("blockquote",[e("p",[v._v("在CSS中，图片的固有尺寸是无法改变的，显示的仅仅是设定的"),e("code",[v._v("content box")]),v._v("尺寸，图片中的"),e("code",[v._v("content")]),v._v("替换内容默认的适配方式是填充"),e("code",[v._v("fill")]),v._v("。\n尺寸变化的本质并不是改变固有尺寸，而是采用了填充作为适配HTML尺寸和CSS尺寸的方式。\n在CSS3中，"),e("code",[v._v("img")]),v._v("以及其它替换元素的适配方式可以通过"),e("code",[v._v("object-fit")]),v._v("属性进行修改。")])]),v._v(" "),e("h3",{attrs:{id:"_4-替换元素和非替换元素的距离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-替换元素和非替换元素的距离"}},[v._v("#")]),v._v(" 4. 替换元素和非替换元素的距离")]),v._v(" "),e("p",[e("strong",[v._v("观点1：替换元素和非替换元素之间只隔了一个"),e("code",[v._v("src")]),v._v("属性")])]),v._v(" "),e("p",[v._v("如果把"),e("code",[v._v("img")]),v._v("的"),e("code",[v._v("src")]),v._v("属性去掉，"),e("code",[v._v("img")]),v._v("就是一个和"),e("code",[v._v("span")]),v._v("类似的普通的内联标签，也就变成了一个非替换元素。")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("img {\n    display: block;\n    outline: 1px solid;\n}\n<img>\n")])])]),e("p",[v._v("在Firefox下，最终的宽度是100%自适应父容器的可用宽度。"),e("strong",[e("code",[v._v("span")]),v._v("标签设置"),e("code",[v._v("width")]),v._v("和"),e("code",[v._v("height")]),v._v("是无效的。如果设置"),e("code",[v._v('<img alt="图片">')]),v._v("不为空的"),e("code",[v._v("alt")]),v._v("值，Chrome下也会有同样的表现。")])]),v._v(" "),e("blockquote",[e("p",[v._v("在IE中有个默认的占位替换内容，当"),e("code",[v._v("src")]),v._v("属性缺失时，会使用这个默认的占位内容，这也是IE浏览器下默认"),e("code",[v._v("img")]),v._v("尺寸是"),e("code",[v._v("28*30")]),v._v("，而不是Chrome下的"),e("code",[v._v("0*0")]),v._v("的原因。")])]),v._v(" "),e("p",[v._v("另一个证明"),e("strong",[v._v("替换元素和非替换元素的区别在于"),e("code",[v._v("src")]),v._v("属性")]),v._v("的实例就是"),e("strong",[v._v("基于伪元素的图片内容生成技术。")])]),v._v(" "),e("p",[v._v("可以对"),e("code",[v._v("img")]),v._v("元素使用"),e("code",[v._v("::before")]),v._v("和"),e("code",[v._v("::after")]),v._v("伪元素进行内容生成以及样式构建，为了解决兼容性问题，需要注意一些技术点：")]),v._v(" "),e("ol",[e("li",[v._v("不能有"),e("code",[v._v("src")]),v._v("属性（关键所在）")]),v._v(" "),e("li",[v._v("不能使用"),e("code",[v._v("content")]),v._v("属性生成图片（针对Chrome）")]),v._v(" "),e("li",[v._v("需要有"),e("code",[v._v("alt")]),v._v("属性并且有值（针对Chrome）")]),v._v(" "),e("li",[v._v("Firefox下"),e("code",[v._v("::before")]),v._v("伪元素的"),e("code",[v._v("content")]),v._v("值会被无视，"),e("code",[v._v("::after")]),v._v("无此问题，应该与Firefox自己占用了"),e("code",[v._v("::before")]),v._v("伪元素的"),e("code",[v._v("content")]),v._v("有关。")])]),v._v(" "),e("blockquote",[e("p",[e("strong",[v._v("基于伪元素的图片内容生成技术")]),v._v("，在图片还没有加载时把"),e("code",[v._v("alt")]),v._v("信息呈现出来。\n实例Demo："),e("a",{attrs:{href:"http://demo.cssworld.cn/4/1-2.php",target:"_blank",rel:"noopener noreferrer"}},[v._v("src缺省时img元素的alt信息展示"),e("OutboundLink")],1)])]),v._v(" "),e("p",{staticClass:"codepen",attrs:{"data-height":"365","data-theme-id":"0","data-slug-hash":"ejzPKV","data-default-tab":"css","data-user":"whjin","data-embed-version":"2","data-pen-title":"替换元素src"}},[v._v("See the Pen "),e("a",{attrs:{href:"https://codepen.io/whjin/pen/ejzPKV/"}},[v._v("替换元素src")]),v._v(" by whjin ("),e("a",{attrs:{href:"https://codepen.io/whjin"}},[v._v("@whjin")]),v._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[v._v("CodePen")]),v._v(".")]),v._v(" "),e("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),v._v(" "),e("p",[e("strong",[v._v("观点2：替换元素和非替换元素之间只隔了一个CSS"),e("code",[v._v("content")]),v._v("属性")])]),v._v(" "),e("p",[e("code",[v._v("content")]),v._v("属性决定了是替换元素还是非替换元素。")]),v._v(" "),e("p",[v._v("以下两个实例是等效的：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('//组一\nimg {\n    content: url("https://www.baidu.com/img/bd_logo1.png");\n}\n<img>\n\n<img src="https://www.baidu.com/img/bd_logo1.png">\n\n//组二\n<img src="https://www.baidu.com/img/bd_logo1.png">\n\nimg:hover {\n    content: url("logo.jpg");\n}\n')])])]),e("p",[v._v("使用"),e("code",[v._v("content")]),v._v("属性，可以让普通标签元素变成替换元素。")]),v._v(" "),e("h3",{attrs:{id:"_5-content与替换元素关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-content与替换元素关系"}},[v._v("#")]),v._v(" 5. "),e("code",[v._v("content")]),v._v("与替换元素关系")]),v._v(" "),e("p",[e("code",[v._v("content")]),v._v("生成的内容和普通内容有很多不同的特性表现：")]),v._v(" "),e("ol",[e("li",[v._v("使用"),e("code",[v._v("content")]),v._v("生成的文本无法选中、无法复制，无法被屏幕阅读设备读取，也无法被搜索引擎抓取。")]),v._v(" "),e("li",[v._v("不能左右"),e("code",[v._v(":empty")]),v._v("伪类。"),e("code",[v._v(":empty")]),v._v("是一个CSS选择器，当元素里面无内容时进行匹配。")]),v._v(" "),e("li",[e("code",[v._v("content")]),v._v("动态生成值无法获取。"),e("code",[v._v("content")]),v._v("可以实现计算器效果，可以自动累加数值。")])]),v._v(" "),e("h2",{attrs:{id:"content内容生成技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#content内容生成技术"}},[v._v("#")]),v._v(" "),e("code",[v._v("content")]),v._v("内容生成技术")]),v._v(" "),e("h3",{attrs:{id:"_1-content辅助元素生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-content辅助元素生成"}},[v._v("#")]),v._v(" 1. "),e("code",[v._v("content")]),v._v("辅助元素生成")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v(".element:before {\n    content: '';\n}\n")])])]),e("p",[v._v("辅助元素最常见的应用就是"),e("strong",[v._v("清除浮动")]),v._v("带来的影响：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v(".clear:after {\n    content: '';\n    display: table; /*也可以是block*/\n    clear: both;\n}\n")])])]),e("p",[v._v("另一个很具有代表性的应用就是"),e("strong",[v._v("辅助实现“两端对齐”以及“垂直居中/上边缘/下边缘对齐”效果")])]),v._v(" "),e("p",[e("code",[v._v(":before")]),v._v("伪元素用于辅助实现底对齐，"),e("code",[v._v(":after")]),v._v("伪元素用于辅助实现两端对齐。")]),v._v(" "),e("h3",{attrs:{id:"_2-content字符内容生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-content字符内容生成"}},[v._v("#")]),v._v(" 2. "),e("code",[v._v("content")]),v._v("字符内容生成")]),v._v(" "),e("p",[v._v("直接写入字符内容，常见应用是配合"),e("code",[v._v("@font-face")]),v._v("规则实现图标字体效果。")]),v._v(" "),e("p",[v._v("插入Unicode字符，典型应用是插入换行符来实现某些布局或效果。")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v(":after {\n    content: '\\A';\n    white-space: pre;\n}\n")])])]),e("p",[e("code",[v._v("\\A")]),v._v("是换行符中的LF字符，其Unicode编码是"),e("code",[v._v("000A")]),v._v("，在CSS的"),e("code",[v._v("content")]),v._v("属性中则直接写成"),e("code",[v._v("\\A")]),v._v(";换行符中的CR字符，其Unicode编码是"),e("code",[v._v("000D")]),v._v("，在CSS的"),e("code",[v._v("content")]),v._v("属性中则直接写成"),e("code",[v._v("\\D")]),v._v("。分别指回车"),e("code",[v._v("CR")]),v._v("和换行"),e("code",[v._v("LF")]),v._v("。")]),v._v(" "),e("p",{staticClass:"codepen",attrs:{"data-height":"265","data-theme-id":"0","data-slug-hash":"jpMYoO","data-default-tab":"css,result","data-user":"whjin","data-embed-version":"2","data-pen-title":"content字符内容生成"}},[v._v("See the Pen "),e("a",{attrs:{href:"https://codepen.io/whjin/pen/jpMYoO/"}},[v._v("content字符内容生成")]),v._v(" by whjin ("),e("a",{attrs:{href:"https://codepen.io/whjin"}},[v._v("@whjin")]),v._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[v._v("CodePen")]),v._v(".")]),v._v(" "),e("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),v._v(" "),e("h3",{attrs:{id:"_3-content图片生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-content图片生成"}},[v._v("#")]),v._v(" 3. "),e("code",[v._v("content")]),v._v("图片生成")]),v._v(" "),e("p",[e("code",[v._v("base64")]),v._v("图片由于内联在CSS文件中，直接出现没有尺寸为"),e("code",[v._v("0")]),v._v("的状态，同时无须额外设置"),e("code",[v._v("display:block/inline-block;")]),v._v("，CSS代码更省。")]),v._v(" "),e("h3",{attrs:{id:"_4-content开启闭合符号生成p63"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-content开启闭合符号生成p63"}},[v._v("#")]),v._v(" 4. "),e("code",[v._v("content")]),v._v("开启闭合符号生成P63")]),v._v(" "),e("h3",{attrs:{id:"_5-content-attr属性值内容生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-content-attr属性值内容生成"}},[v._v("#")]),v._v(" 5. "),e("code",[v._v("content attr")]),v._v("属性值内容生成")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v(".icon:before {\n    content: attr(data-title);\n}\n")])])]),e("h3",{attrs:{id:"_6-深入理解content计数器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-深入理解content计数器"}},[v._v("#")]),v._v(" 6. 深入理解"),e("code",[v._v("content")]),v._v("计数器")]),v._v(" "),e("ol",[e("li",[e("p",[v._v("属性"),e("code",[v._v("counter-reset")]),v._v("，计数器重置，还可以设置为"),e("code",[v._v("none")]),v._v("和"),e("code",[v._v("inherit")]),v._v("。取消重置以及继承重置。")])]),v._v(" "),e("li",[e("p",[v._v("属性"),e("code",[v._v("counter-increment")]),v._v("，计数器递增，计数器数值变化遵循HTML渲染顺序，遇到一个"),e("code",[v._v("increment")]),v._v("计数器就变化，"),e("code",[v._v("counter")]),v._v("输出的时候就是此时的计数值。")]),v._v(" "),e("p",[e("code",[v._v("counter-increment")]),v._v("的其他特性：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("counter-reset")]),v._v("可以一次命名两个计数器名称，"),e("code",[v._v("counter-increment")]),v._v("相对应的设定。")]),v._v(" "),e("li",[v._v("变化的值可以灵活设定。")]),v._v(" "),e("li",[v._v("值可以是"),e("code",[v._v("none")]),v._v("或"),e("code",[v._v("inherit")])])])]),v._v(" "),e("li",[e("p",[v._v("方法"),e("code",[v._v("counter()/counters()")]),v._v("。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("counter(name)")])]),v._v(" "),e("li",[e("code",[v._v("counter(name,style)")]),v._v("，"),e("code",[v._v("style")]),v._v("参数支持关键字值是"),e("code",[v._v("list-style-type")]),v._v("所支持的值。它的作用是：除了递增递减数字，还可以是英文字母或罗马字符等。")]),v._v(" "),e("li",[e("code",[v._v("counter")]),v._v("还支持级联。一个"),e("code",[v._v("counter")]),v._v("属性值可有多个"),e("code",[v._v("coutner()")]),v._v("方法。")])])])]),v._v(" "),e("p",[e("code",[v._v("coutners()")]),v._v("方法就是"),e("strong",[v._v("嵌套计数")]),v._v("，基本用法是"),e("code",[v._v("counters(name,string);")]),v._v("，其中，"),e("code",[v._v("string")]),v._v("参数为字符串（需要引号，是必需参数），表示子序号的连接字符串。")]),v._v(" "),e("p",[v._v("实现嵌套，"),e("strong",[v._v("必须让每个列表容器拥有一个唯一的计数源")]),v._v("，通过子辈对父辈的"),e("code",[v._v("counter-reset")]),v._v("重置、配合"),e("code",[v._v("counters()")]),v._v("方法才能实现计数嵌套效果。")]),v._v(" "),e("blockquote",[e("p",[v._v("一个容器的"),e("code",[v._v("counter-reset")]),v._v("是唯一的，一旦子元素出现"),e("code",[v._v("counter-reset")]),v._v("。就会改变整个容器的嵌套关系。")])]),v._v(" "),e("p",[e("code",[v._v("counters()")]),v._v("支持"),e("code",[v._v("style")]),v._v("自定义递增形式：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("counters(name, string, style);\n")])])]),e("h3",{attrs:{id:"_7-content内容生成的混合特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-content内容生成的混合特性"}},[v._v("#")]),v._v(" 7. "),e("code",[v._v("content")]),v._v("内容生成的混合特性")]),v._v(" "),e("p",[e("code",[v._v("content")]),v._v("内容生成的混合特性指的是各种"),e("code",[v._v("content")]),v._v("内容生成语法可以混合在一起使用。")]),v._v(" "),e("h1",{attrs:{id:"温和的padding属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#温和的padding属性"}},[v._v("#")]),v._v(" 温和的"),e("code",[v._v("padding")]),v._v("属性")]),v._v(" "),e("h2",{attrs:{id:"padding与元素的尺寸"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#padding与元素的尺寸"}},[v._v("#")]),v._v(" "),e("code",[v._v("padding")]),v._v("与元素的尺寸")]),v._v(" "),e("p",[v._v("CSS中默认的"),e("code",[v._v("box-sizing")]),v._v("是"),e("code",[v._v("content-box")]),v._v("，使用"),e("code",[v._v("padding")]),v._v("会增加元素的尺寸。")]),v._v(" "),e("p",[v._v("内联元素的"),e("code",[v._v("padding")]),v._v("在垂直方向会影响布局，影响视觉表现。内联元素没有可视宽度/高度（"),e("code",[v._v("clientWidth/clientHeight")]),v._v("永远为"),e("code",[v._v("0")]),v._v("），垂直方向的行为表现完全受"),e("code",[v._v("line-height")]),v._v("和"),e("code",[v._v("vertical-align")]),v._v("的影响。")]),v._v(" "),e("p",[e("strong",[v._v("利用内联元素的"),e("code",[v._v("padding")]),v._v("实现高度可控的分割线。")])]),v._v(" "),e("p",[v._v("网页通过地址栏的"),e("code",[v._v("hash")]),v._v("值和页面HTML的"),e("code",[v._v("id")]),v._v("值一样发生锚点定位。")]),v._v(" "),e("blockquote",[e("p",[e("strong",[v._v("内联元素设置"),e("code",[v._v("padding")]),v._v("不会影响布局，但是块级元素就会。")])])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('<h3><span id="hash">标题</span></h3>\nh3 {\n    line-height: 30px;\n    font-size: 14px;\n}\n\nh3 > span {\n    padding-top: 58px;\n}\n')])])]),e("p",[e("strong",[v._v("对于非替换元素的内联元素，不仅"),e("code",[v._v("padding")]),v._v("不会加入行盒高度的计算，"),e("code",[v._v("margin/border")]),v._v("也都是如此，都是不计算高度，但实际上在内联盒周围发生了渲染。")])]),v._v(" "),e("h2",{attrs:{id:"padding的百分比值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#padding的百分比值"}},[v._v("#")]),v._v(" "),e("code",[v._v("padding")]),v._v("的百分比值")]),v._v(" "),e("p",[e("code",[v._v("padding")]),v._v("属性值不支持负值，支持百分比值，"),e("code",[v._v("padding")]),v._v("百分比值无论是水平方向还是垂直方向均是相对于宽度计算。")]),v._v(" "),e("p",[e("strong",[v._v("实现一个固定比例（宽高比）的头图效果。")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v(".box {\n    padding: 10% 50%;\n    position: relative;\n}\n\n.box > img {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n}\n")])])]),e("p",[v._v("内联元素和块状元素应用百分比值的表现：")]),v._v(" "),e("ul",[e("li",[v._v("同样相对于宽度计算；")]),v._v(" "),e("li",[v._v("默认的高度和宽度细节有差异；")]),v._v(" "),e("li",[e("code",[v._v("padding")]),v._v("会断行。")])]),v._v(" "),e("p",[e("strong",[v._v("内联元素的垂直"),e("code",[v._v("padding")]),v._v("会让“幽灵空白节点”出现。")])]),v._v(" "),e("p",[v._v("内联元素默认的高度完全受"),e("code",[v._v("font-size")]),v._v("大小控制。通过以下方法使得“幽灵空白节点”高度变为"),e("code",[v._v("0")]),v._v("。")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("span{\n    padding: 50%;\n    font-size: 0;\n    background-color: gray;\n}\n")])])]),e("h2",{attrs:{id:"标签元素内置的padding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签元素内置的padding"}},[v._v("#")]),v._v(" 标签元素内置的"),e("code",[v._v("padding")])]),v._v(" "),e("ol",[e("li",[e("code",[v._v("ol/ul")]),v._v("列表内置"),e("code",[v._v("padding-left")]),v._v("，单位是"),e("code",[v._v("px")]),v._v("，如果列表中的"),e("code",[v._v("font-size")]),v._v("值很小，则"),e("code",[v._v("li")]),v._v("元素的项目符号就会在"),e("code",[v._v("ol/ul")]),v._v("元素的左边缘距离很开。")]),v._v(" "),e("li",[v._v("表单元素大都内置"),e("code",[v._v("padding")]),v._v("。\n"),e("ul",[e("li",[v._v("所有浏览器"),e("code",[v._v("input/textarea")]),v._v("输入框内置"),e("code",[v._v("padding")])]),v._v(" "),e("li",[v._v("所有浏览器"),e("code",[v._v("button")]),v._v("按钮内置"),e("code",[v._v("padding")])]),v._v(" "),e("li",[v._v("部分浏览器"),e("code",[v._v("select")]),v._v("下拉内置"),e("code",[v._v("padding")])]),v._v(" "),e("li",[v._v("所有浏览器"),e("code",[v._v("radio/checkbox")]),v._v("单复选框无内置"),e("code",[v._v("padding")])]),v._v(" "),e("li",[e("code",[v._v("button")]),v._v("按钮元素的"),e("code",[v._v("padding")]),v._v("最难控制")])])])]),v._v(" "),e("p",[e("strong",[v._v("使用"),e("code",[v._v("label")]),v._v("元素解决"),e("code",[v._v("button")]),v._v("按钮在不同浏览器下"),e("code",[v._v("padding")]),v._v("表现不一致的问题")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("button {\n    position: absolute;\n    clip: rect(0 0 0 0);\n}\n\nlabel {\n    display: inline-block;\n    line-height: 20px;\n    padding: 10px;\n}\n")])])]),e("h2",{attrs:{id:"padding与图形绘制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#padding与图形绘制"}},[v._v("#")]),v._v(" "),e("code",[v._v("padding")]),v._v("与图形绘制")]),v._v(" "),e("p",[e("strong",[v._v("“三道杠”小图标")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('<div class="icon-menu"></div>\n.icon-menu {\n    display: inline-block;\n    width: 100px;\n    height: 8px;\n    padding: 20px 0;\n    border-top: 8px solid;\n    border-bottom: 8px solid;\n    background-color: currentColor;\n    background-clip: content-box;\n}\n')])])]),e("p",[e("strong",[v._v("“双层圆点”图")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('<div class="icon-dot"></div>\n.icon-dot {\n    display: inline-block;\n    width: 100px;\n    height: 100px;\n    padding: 10px;\n    border: 10px solid;\n    border-radius: 50%;\n    background-color: currentColor;\n    background-clip: content-box;\n}\n')])])]),e("h1",{attrs:{id:"激进的margin属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#激进的margin属性"}},[v._v("#")]),v._v(" 激进的"),e("code",[v._v("margin")]),v._v("属性")]),v._v(" "),e("h2",{attrs:{id:"margin与元素尺寸以及相关布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#margin与元素尺寸以及相关布局"}},[v._v("#")]),v._v(" "),e("code",[v._v("margin")]),v._v("与元素尺寸以及相关布局")]),v._v(" "),e("p",[e("strong",[v._v("1. 元素尺寸")])]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("元素尺寸")]),v._v("：对应jQuery中的"),e("code",[v._v("$().width/$().height()")]),v._v("方法，包括"),e("code",[v._v("padding/border")]),v._v("，也就是元素的"),e("code",[v._v("border box")]),v._v("的尺寸。在原生的"),e("strong",[v._v("DOM API")]),v._v("中写成"),e("code",[v._v("offsetWidth/offsetHeight")]),v._v("，也称为"),e("strong",[v._v("元素偏移尺寸")]),v._v("。")]),v._v(" "),e("li",[e("strong",[v._v("元素内部尺寸")]),v._v("：对应jQuery中的"),e("code",[v._v("$().innerWidth()/$().innerHeight()")]),v._v("方法，表示元素的内部尺寸，包括"),e("code",[v._v("padding")]),v._v("但不包括"),e("code",[v._v("border")]),v._v("，也就是元素的"),e("code",[v._v("padding box")]),v._v("的尺寸。在原生的"),e("strong",[v._v("DOM API")]),v._v("中写成"),e("code",[v._v("clientWidth/clientHeight")]),v._v("，也称为"),e("strong",[v._v("元素可视尺寸")]),v._v("。")]),v._v(" "),e("li",[e("strong",[v._v("元素外部尺寸")]),v._v("：对应jQuery中的"),e("code",[v._v("$().outerWidth(true)/$().outerHeight(true)")]),v._v("方法，表示元素的外部尺寸，包括"),e("code",[v._v("padding/border/margin")]),v._v("，也就是元素的"),e("code",[v._v("margin box")]),v._v("的尺寸。没有对应的原生的"),e("strong",[v._v("DOM API")]),v._v("。")])]),v._v(" "),e("p",[e("strong",[v._v("2. "),e("code",[v._v("margin")]),v._v("与元素的内部尺寸")])]),v._v(" "),e("blockquote",[e("p",[e("strong",[v._v("一侧定宽的两栏自适应布局效果")])])]),v._v(" "),e("ol",[e("li",[v._v("如果图片左侧定位：")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v('<div class="box">\n    <img src="1.jpg" alt="">\n    <p>文字内容...</p>\n</div>\n.box {\n    overflow: hidden;\n}\n\n.box > img {\n    float: left;\n}\n\n.box > p {\n    margin-left: 140px;\n}\n')])])]),e("p",[v._v("文字内容根据"),e("code",[v._v(".box")]),v._v("盒子的宽度变化而自动排列，形成自适应布局效果。")]),v._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[v._v("如果图片右侧定位：改变浮动和"),e("code",[v._v("margin")]),v._v("方向。借助"),e("code",[v._v("margin")]),v._v("负值定位实现。")]),v._v(" "),e("li",[v._v("如果图片右侧定位，同时顺序一致：")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v('<div class="box">\n    <div class="full">\n        <p>文字内容...</p>\n    </div>\n    <img src="1.jpg" alt="">\n</div>\n.box {\n    overflow: hidden;\n}\n\n.full {\n    width: 100%;\n    float: left;\n}\n\n.box > img {\n    float: left;\n    margin-left: -128px;\n}\n\n.full > p {\n    margin-right: 140px;\n}\n')])])]),e("ol",{attrs:{start:"3"}},[e("li",[v._v("如果图片右侧定位，同时顺序一致。")])]),v._v(" "),e("blockquote",[e("p",[v._v("需求：列表块两端对齐，一行显示3个，中间有2个"),e("code",[v._v("20px")]),v._v("的间隙。")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v("ul {\n    list-style-type: none;\n    margin-right: -20px;\n}\n\nul > li {\n    float: left;\n    width: 100px;\n    margin-right: 20px;\n    background-color: #a0b3d6;\n}\n")])])]),e("p",[e("strong",[v._v("3. "),e("code",[v._v("margin")]),v._v("与元素的外部尺寸")])]),v._v(" "),e("blockquote",[e("p",[v._v("借助"),e("code",[v._v("margin")]),v._v("的外部尺寸特性来实现底部留白。只能使用子元素的"),e("code",[v._v("margin-bottom")]),v._v("来实现滚动容器的底部留白。")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('<div style="height: 200px;">\n    <img src="1.jpg" alt="" style="margin: 50px 0;">\n</div>\n')])])]),e("blockquote",[e("p",[v._v("利用"),e("code",[v._v("margin")]),v._v("外部尺寸实现等高布局。此布局多出现在分栏有背景色或中间有分割线的布局中。"),e("code",[v._v("height:100%")]),v._v("需要在父级设定具体高度值时才有效。")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('<div class="column-box">\n    <div class="column-left"></div>\n    <div class="column-right"></div>\n</div>\n.column-box {\n    overflow: hidden;\n}\n\n.column-left, .column-right {\n    margin-bottom: -9999px;\n    padding-bottom: 9999px;\n}\n')])])]),e("blockquote",[e("p",[e("strong",[v._v("等高布局实现原理")])])]),v._v(" "),e("p",[v._v("垂直方向"),e("code",[v._v("margin")]),v._v("无法改变元素的内部尺寸，但却能改变外部尺寸。默认情况下，垂直方向块级元素上下距离是"),e("code",[v._v("0")]),v._v("，一旦设置"),e("code",[v._v("margin-bottom:-9999px;")]),v._v("后面所有元素和上面元素的空间距离变成"),e("code",[v._v("-9999px")]),v._v("，就是后面元素都往上移动"),e("code",[v._v("9999px")]),v._v("。"),e("code",[v._v("padding-bottom:9999px;")]),v._v("增加元素高度，正负一抵消，对布局层并无影响，但视觉层多了"),e("code",[v._v("9999px")]),v._v("高度的可使用的背景色。配合"),e("code",[v._v("overflow:hidden;")]),v._v("把多余的色块背景隐藏，实现视觉上的等高布局效果。")]),v._v(" "),e("h2",{attrs:{id:"margin的百分比值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#margin的百分比值"}},[v._v("#")]),v._v(" "),e("code",[v._v("margin")]),v._v("的百分比值")]),v._v(" "),e("p",[v._v("元素设置"),e("code",[v._v("margin")]),v._v("在垂直方向上无法改变元素自身的内部尺寸，往往需要父元素作为载体，此外，由于"),e("code",[v._v("margin")]),v._v("合并的存在，垂直方向往往需要双倍尺寸才能和"),e("code",[v._v("padding")]),v._v("表现一致。")]),v._v(" "),e("h3",{attrs:{id:"margin合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#margin合并"}},[v._v("#")]),v._v(" "),e("code",[v._v("margin")]),v._v("合并")]),v._v(" "),e("p",[v._v("块级元素的上边距"),e("code",[v._v("margin-top")]),v._v("与下边距"),e("code",[v._v("margin-bottom")]),v._v("有时会合并为单个外边距。")]),v._v(" "),e("ol",[e("li",[e("strong",[v._v("块级元素")]),v._v("，但不包括浮动和绝对定位元素。")]),v._v(" "),e("li",[e("strong",[v._v("只发生在垂直方向")]),v._v("，默认文档流是水平的，因此发生"),e("code",[v._v("margin")]),v._v("合并就是垂直方向。")])]),v._v(" "),e("p",[e("strong",[e("code",[v._v("margin")]),v._v("合并的3种场景")])]),v._v(" "),e("ol",[e("li",[v._v("相邻兄弟元素"),e("code",[v._v("margin")]),v._v("合并。")]),v._v(" "),e("li",[v._v("父级和第一个/最后一个子元素。")])]),v._v(" "),e("p",[e("strong",[v._v("阻止"),e("code",[v._v("margin")]),v._v("合并")])]),v._v(" "),e("p",[v._v("对于"),e("code",[v._v("margin-top")]),v._v("合并，可以进行如下操作（满足一个条件即可）：")]),v._v(" "),e("ul",[e("li",[v._v("父元素设置为块状格式化上下文元素")]),v._v(" "),e("li",[v._v("父元素设置"),e("code",[v._v("border-top")]),v._v("值；")]),v._v(" "),e("li",[v._v("父元素设置"),e("code",[v._v("padding-top")]),v._v("值；")]),v._v(" "),e("li",[v._v("父元素和第一个子元素之间添加内联元素进行分隔。")])]),v._v(" "),e("p",[v._v("对于"),e("code",[v._v("margin-bottom")]),v._v("合并，可以进行如下操作（满足一个条件即可）：")]),v._v(" "),e("ul",[e("li",[v._v("父元素设置为块状格式化上下文元素")]),v._v(" "),e("li",[v._v("父元素设置"),e("code",[v._v("border-bottom")]),v._v("值；")]),v._v(" "),e("li",[v._v("父元素设置"),e("code",[v._v("padding-bottom")]),v._v("值；")]),v._v(" "),e("li",[v._v("父元素和第一个子元素之间添加内联元素进行分隔。")]),v._v(" "),e("li",[v._v("父元素设置"),e("code",[v._v("height")]),v._v("、"),e("code",[v._v("min-height")]),v._v("、"),e("code",[v._v("max-height")])])]),v._v(" "),e("p",[e("code",[v._v("margin")]),v._v("合并导致头图掉下来可以添加"),e("code",[v._v(".container{overlfow:hidden;}")]),v._v("进行修复。")]),v._v(" "),e("p",[v._v("其原理是通过设置"),e("code",[v._v("overflow")]),v._v("属性让父级元素块状格式化上下文。")]),v._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[v._v("空块级元素的"),e("code",[v._v("margin")]),v._v("合并。"),e("code",[v._v("border")]),v._v("阻断"),e("code",[v._v("margin")]),v._v("合并。")])]),v._v(" "),e("blockquote",[e("p",[v._v("不希望空"),e("code",[v._v("div")]),v._v("元素有"),e("code",[v._v("margin")]),v._v("合并，可以进行如下操作：")])]),v._v(" "),e("ul",[e("li",[v._v("设置垂直方向的"),e("code",[v._v("border")])]),v._v(" "),e("li",[v._v("设置垂直方向的"),e("code",[v._v("padding")])]),v._v(" "),e("li",[v._v("里面添加内联元素（直接Space空格键无效）")]),v._v(" "),e("li",[v._v("设置"),e("code",[v._v("height")]),v._v("或"),e("code",[v._v("min-height")])])]),v._v(" "),e("p",[e("strong",[v._v("3. "),e("code",[v._v("margin")]),v._v("合并的计算规则")])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("margin")]),v._v("合并的计算规则总结为"),e("strong",[v._v("正正取大值")]),v._v("，"),e("strong",[v._v("正负值相加")]),v._v("，"),e("strong",[v._v("负负最负值")])])]),v._v(" "),e("p",[e("strong",[v._v("4. "),e("code",[v._v("margin")]),v._v("合并的意义")])]),v._v(" "),e("p",[v._v("合并机制可以保证元素上下间距一致。")]),v._v(" "),e("p",[v._v("父子"),e("code",[v._v("margin")]),v._v("合并的意义在于：在页面上任何地方嵌套或直接放入任何空"),e("code",[v._v("div")]),v._v("，都不会影响原来的块布局。")]),v._v(" "),e("p",[v._v("遇到列表或模块，全部保留上下"),e("code",[v._v("margin")]),v._v("设置：")]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v(".list {\n    margin-top: 15px;\n    margin-bottom: 15px;\n}\n")])])]),e("h2",{attrs:{id:"margin-auto"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#margin-auto"}},[v._v("#")]),v._v(" "),e("code",[v._v("margin:auto")])]),v._v(" "),e("ol",[e("li",[v._v("元素没有设置"),e("code",[v._v("width/height")]),v._v("，也会自动填满容器。")]),v._v(" "),e("li",[v._v("元素没有设置"),e("code",[v._v("width/height")]),v._v("，也会自动填满包含块容器。")])]),v._v(" "),e("p",[e("code",[v._v("margin:auto")]),v._v("的填充规则：")]),v._v(" "),e("ol",[e("li",[v._v("如果一侧定值，一侧"),e("code",[v._v("auto")]),v._v("，则"),e("code",[v._v("auto")]),v._v("为剩余空间大小。")]),v._v(" "),e("li",[v._v("如果两侧均是"),e("code",[v._v("auto")]),v._v("，则平分剩余空间。")])]),v._v(" "),e("p",[e("code",[v._v("auto")]),v._v("用于计算对应方向所获得的剩余空间大小。")]),v._v(" "),e("p",{staticClass:"codepen",attrs:{"data-height":"265","data-theme-id":"0","data-slug-hash":"VBbENM","data-default-tab":"css,result","data-user":"whjin","data-pen-title":"margin:auto-1"}},[v._v("See the Pen "),e("a",{attrs:{href:"https://codepen.io/whjin/pen/VBbENM/"}},[v._v("margin:auto-1")]),v._v(" by whjin ("),e("a",{attrs:{href:"https://codepen.io/whjin"}},[v._v("@whjin")]),v._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[v._v("CodePen")]),v._v(".")]),v._v(" "),e("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),v._v(" "),e("p",[e("strong",[v._v("实现右对齐效果，"),e("code",[v._v("margin")]),v._v("属性的"),e("code",[v._v("auto")]),v._v("计算就是为块级元素左中右对齐而设计的，和内联元素使用"),e("code",[v._v("text-align")]),v._v("控制左中右对齐相对应。")])]),v._v(" "),e("p",{staticClass:"codepen",attrs:{"data-height":"265","data-theme-id":"0","data-slug-hash":"bjWyLK","data-default-tab":"css,result","data-user":"whjin","data-pen-title":"margin-auto左中右居中"}},[v._v("See the Pen "),e("a",{attrs:{href:"https://codepen.io/whjin/pen/bjWyLK/"}},[v._v("margin-auto左中右居中")]),v._v(" by whjin ("),e("a",{attrs:{href:"https://codepen.io/whjin"}},[v._v("@whjin")]),v._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[v._v("CodePen")]),v._v(".")]),v._v(" "),e("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),v._v(" "),e("p",[e("strong",[v._v("居中对齐左右同时"),e("code",[v._v("auto")]),v._v("计算即可")])]),v._v(" "),e("p",{staticClass:"codepen",attrs:{"data-height":"265","data-theme-id":"0","data-slug-hash":"yqbWRW","data-default-tab":"css,result","data-user":"whjin","data-pen-title":"margin-auto-3"}},[v._v("See the Pen "),e("a",{attrs:{href:"https://codepen.io/whjin/pen/yqbWRW/"}},[v._v("margin-auto-3")]),v._v(" by whjin ("),e("a",{attrs:{href:"https://codepen.io/whjin"}},[v._v("@whjin")]),v._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[v._v("CodePen")]),v._v(".")]),v._v(" "),e("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),v._v(" "),e("p",[e("strong",[v._v("绝对定位垂直水平居中")])]),v._v(" "),e("p",{staticClass:"codepen",attrs:{"data-height":"265","data-theme-id":"0","data-slug-hash":"BPZBvP","data-default-tab":"css,result","data-user":"whjin","data-pen-title":"margin-auto垂直水平居中"}},[v._v("See the Pen "),e("a",{attrs:{href:"https://codepen.io/whjin/pen/BPZBvP/"}},[v._v("margin-auto垂直水平居中")]),v._v(" by whjin ("),e("a",{attrs:{href:"https://codepen.io/whjin"}},[v._v("@whjin")]),v._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[v._v("CodePen")]),v._v(".")]),v._v(" "),e("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),v._v(" "),e("h2",{attrs:{id:"margin无效情形解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#margin无效情形解析"}},[v._v("#")]),v._v(" "),e("code",[v._v("margin")]),v._v("无效情形解析")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("display")]),v._v("计算值"),e("code",[v._v("inline")]),v._v("的非替换元素的垂直"),e("code",[v._v("margin")]),v._v("无效。")]),v._v(" "),e("li",[v._v("表格中"),e("code",[v._v("tr")]),v._v("和"),e("code",[v._v("td")]),v._v("元素或设置"),e("code",[v._v("display")]),v._v("计算值是"),e("code",[v._v("table-cell")]),v._v("或"),e("code",[v._v("table-row")]),v._v("的元素的"),e("code",[v._v("margin")]),v._v("都是无效。")]),v._v(" "),e("li",[e("code",[v._v("margin")]),v._v("合并的时候，更改"),e("code",[v._v("margin")]),v._v("值可能没有效果。")]),v._v(" "),e("li",[v._v("绝对定位元素非定位方位的"),e("code",[v._v("margin")]),v._v("值无效。绝对定位元素的渲染是独立的，所以设置了"),e("code",[v._v("top")]),v._v("、"),e("code",[v._v("left")]),v._v("方位，再设置"),e("code",[v._v("margin-right")]),v._v("无效。")]),v._v(" "),e("li",[v._v("定高容器的子元素的"),e("code",[v._v("margin-bottom")]),v._v("或定宽容器的子元素的"),e("code",[v._v("margin-right")]),v._v("的定位失效。"),e("strong",[v._v("使用"),e("code",[v._v("margin")]),v._v("属性改变自身的位置，必须是和当前元素定位方向一样的"),e("code",[v._v("margin")]),v._v("属性，否则"),e("code",[v._v("margin")]),v._v("只能影响后面的元素或父元素。")])]),v._v(" "),e("li",[v._v("鞭长莫及导致的"),e("code",[v._v("margin")]),v._v("无效。")]),v._v(" "),e("li",[v._v("内联特性导致的"),e("code",[v._v("margin")]),v._v("无效。")])]),v._v(" "),e("h1",{attrs:{id:"功勋卓著的border属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功勋卓著的border属性"}},[v._v("#")]),v._v(" 功勋卓著的"),e("code",[v._v("border")]),v._v("属性")]),v._v(" "),e("h2",{attrs:{id:"为什么border-width不支持百分比值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么border-width不支持百分比值"}},[v._v("#")]),v._v(" 为什么"),e("code",[v._v("border-width")]),v._v("不支持百分比值")]),v._v(" "),e("p",[e("code",[v._v("border-width")]),v._v("支持关键字，"),e("code",[v._v("thin")]),v._v("、"),e("code",[v._v("medium")])]),v._v(" "),e("h2",{attrs:{id:"了解各种border-style类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解各种border-style类型"}},[v._v("#")]),v._v(" 了解各种"),e("code",[v._v("border-style")]),v._v("类型")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("border-style:none")]),v._v("，默认值")]),v._v(" "),e("li",[e("code",[v._v("border-style:solid")]),v._v("，实线边框")]),v._v(" "),e("li",[e("code",[v._v("border-style:dashed")]),v._v("，虚线边框")]),v._v(" "),e("li",[e("code",[v._v("border-style:dotted")]),v._v("，点线边框")]),v._v(" "),e("li",[e("code",[v._v("border-style:double")]),v._v("，双线边框")]),v._v(" "),e("li",[v._v("其他"),e("code",[v._v("border-style")]),v._v("类型，"),e("code",[v._v("inset")]),v._v("内凹，"),e("code",[v._v("outset")]),v._v("外凸，"),e("code",[v._v("groove")]),v._v("沟槽，"),e("code",[v._v("ridge")]),v._v("山脊")])]),v._v(" "),e("h2",{attrs:{id:"border-color和color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#border-color和color"}},[v._v("#")]),v._v(" "),e("code",[v._v("border-color")]),v._v("和"),e("code",[v._v("color")])]),v._v(" "),e("p",[e("code",[v._v("border-color")]),v._v("默认颜色就是"),e("code",[v._v("color")]),v._v("色值。")]),v._v(" "),e("p",{staticClass:"codepen",attrs:{"data-height":"265","data-theme-id":"0","data-slug-hash":"rrwGLP","data-default-tab":"css,result","data-user":"whjin","data-pen-title":"加号按钮"}},[v._v("See the Pen "),e("a",{attrs:{href:"https://codepen.io/whjin/pen/rrwGLP/"}},[v._v("加号按钮")]),v._v(" by whjin ("),e("a",{attrs:{href:"https://codepen.io/whjin"}},[v._v("@whjin")]),v._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[v._v("CodePen")]),v._v(".")]),v._v(" "),e("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),v._v(" "),e("h2",{attrs:{id:"border与透明边框技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#border与透明边框技巧"}},[v._v("#")]),v._v(" "),e("code",[v._v("border")]),v._v("与透明边框技巧")]),v._v(" "),e("p",[e("strong",[v._v("1. 右下方"),e("code",[v._v("background")]),v._v("定位技巧")])]),v._v(" "),e("p",[v._v("方法一："),e("strong",[v._v("使用透明边框")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v(".box {\n    border: 50px solid transparent;\n    background-position: 100% 50%;\n}\n")])])]),e("p",[e("strong",[v._v("2. 增加点击区域大小")])]),v._v(" "),e("p",[e("strong",[v._v("3. 三角等图形绘制")])]),v._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[v._v('.box {\n    width: 0;\n    border: 10px solid;\n    border-color: #f30 transparent transparent;\n}\n<div class="box"></div>\n')])])]),e("h2",{attrs:{id:"border与图形构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#border与图形构建"}},[v._v("#")]),v._v(" "),e("code",[v._v("border")]),v._v("与图形构建")]),v._v(" "),e("h2",{attrs:{id:"border等高布局技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#border等高布局技术"}},[v._v("#")]),v._v(" "),e("code",[v._v("border")]),v._v("等高布局技术")]),v._v(" "),e("p",{staticClass:"codepen",attrs:{"data-height":"265","data-theme-id":"0","data-slug-hash":"PBKwVZ","data-default-tab":"css,result","data-user":"whjin","data-pen-title":"border等高布局"}},[v._v("See the Pen "),e("a",{attrs:{href:"https://codepen.io/whjin/pen/PBKwVZ/"}},[v._v("border等高布局")]),v._v(" by whjin ("),e("a",{attrs:{href:"https://codepen.io/whjin"}},[v._v("@whjin")]),v._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[v._v("CodePen")]),v._v(".")]),v._v(" "),e("script",{attrs:{async:"",src:"https://static.codepen.io/assets/embed/ei.js"}}),v._v(" "),e("p",[e("strong",[v._v("父容器不能使用"),e("code",[v._v("overflow:hidden;")]),v._v("清除浮动影响，因为溢出隐藏是基于"),e("code",[v._v("padding box")]),v._v("的，如果设置了则左浮动的导航列表元素就会被隐藏掉。")])])])}),[],!1,null,null,null);_.default=o.exports}}]);