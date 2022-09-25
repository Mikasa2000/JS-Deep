### 一.浏览器的渲染过程
* 下载有html文件 -> 开始解析（通过浏览器内核进行解析 HtmlParser -> 将html渲染成DOM tree）
* 同时下载css文件 -> 解析css（CssParser解析 -> Style Rules）
* 结合 DomTree + StyleRules = Attachment -> RenderTree（构建RenderTree）（在css未解析完成，页面不会渲染）
* 遇到js文件就会停止html，css解析，开始优先下载js（在引入顺序上，CSS 资源先于 JavaScript 资源。
JavaScript 应尽量少的去影响 DOM 的构建。）(v8引擎)


1）设置 defer 属性

给 script 标签设置 defer 属性，浏览器会重新开启一个线程下载脚本文件，同时继续解析 HTML，等 HTML 全部解析完、DOM 加载完成之后，再去执行下载好的 JS 脚本。只适用于引用外部 JS 文件，并且可以确保所有加了 defer 属性的脚本会按顺序执行。

2）设置 async 属性

async 属性和 defer 属性类似，也是会开启一个线程去下载 JS 文件，但 aysnc 会在 JS 加载完成后立刻执行，而不是会等到 DOM 加载完成之后再执行，所以还是有可能会造成阻塞。同样的也是只适用于外部 JS 文件，如果有多个设置了 aysnc 的 JS 文件，不能像 defer 那样保证按照顺序执行。 

* 构建rendertree后进行painting -> display


### 二.回流（重排）
回流就是说，当你页面中的部分或全部元素的几何属性（第一次页面渲染，浏览器窗口发生改变width,height,display，字体大小，激活css伪类）

避免操作DOM，创建一个documentFragment或div，在它上面应用所有DOM操作，最后再把它添加到window.document。也可以在一个display:none的元素上进行操作，最终把它显示出来。因为display:none上的DOM操作不会引发回流和重绘。



### 三.重绘
当页面中元素的样式不影响他在文档流中的位置（color,bgc,visibility）





### 四.v8引擎

* 词法分析(scanner)：对每一个词进行切割，分割成一个个的tokens：[{type:'keyworld',value:'const'},{},{}]
* 语法分析: 对tokens里面的每一个对象进行语法分析，转化成抽象语法树

* 通过（Ignition）字节码（windows mac linux 可能有不同的cpu架构 -> 能执行的集器指令是不一样的）

* (TurboFan 优化)将字节码转换成不同cpu可以运行的汇编代码再转换成机器指令







