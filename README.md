# allWebPlugin中间件
allWebPlugin中间件是一款为用户提供安全、可靠、便捷的浏览器插件服务的中间件产品。将第三方（标准协议ActiveX）插件**直接无缝嵌入谷歌、Edge、火狐等浏览器，实现ActiveX插件加载、接口调用、事件回调等中间件产品**，产品拥有自主知识产权。产品具有支持多浏览器、多操作系统、ActiveX、NPAPI标准协议控件的特点，并且调用接口友好、集成方便，为用户提供“Web系统 + allWebPlugin + 插件 + 多浏览器”的解决方案。
## 产品特点
1. 自创定位算法，**实现插件与页面布局无缝衔接，极致用户体验**。
2. 自创插件接口调用方法，**保持原汁原味的接口调用及事件响应方式，轻松实现OA系统升级改造**。
3. 支持同一页面或不同页面同时加载多个插件，**适应各种复杂应用场景**。
4. 自主创新、安全可控，**不受浏览器插件技术限制，支持更多浏览器（谷歌、火狐、Edge、360浏览器等）**。
5. 创新沙箱机制,隔离插件与浏览器运行环境，**增强插件与浏览器稳定性和安全性**。
6. 攻克诸多技术难点，实现插件不修改、不注册也能使用，**极大的降低插件开发量和维护量**。
## 集成步骤
​第一步：为了页面集成插件，需要引入allWebPlugin.Common.js allWebPlugin.UI.j及allWebPlugin.Main.js文件。如下图所示：
```
<script type="text/javascript" src="js/allWebPlugin.Common.v2.0.0.28.js"></script>
<script type="text/javascript" src="js/allWebPlugin.UI.v2.0.0.28.js"></script>
<script type="text/javascript" src="js/allWebPlugin.Main.v2.0.0.28.js"></script>
```	
第二步：添加定位元素，在需要展示插件的位置添加canvas页面元素(注意：也可以使用其他页面元素)。如下图所示：
```
<canvas id="allWebOfficeAx_zw" width="1024" height="600">
<p class="error">Sorry, It looks as though your browser does not support the canvas tag.</p>
</canvas>
```

第三步：使用awp_CreatePlugin接口创建ActiveX插件对象。在页面加载初始化接口内，调用**awp_CreatePlugin**接口。使用**定位元素id同名对象**访问插件，像传统插件接口调用一样，调用插件对象的方法和属性，特别注意，**调用读属性与调用插件方法接口一致**。如图所示，页面元素canvas的id属性为allWebOfficeAx_zw；则可以直接试用allWebOfficeAx_zw对象访问插件接口。
```
function init(){
var installPackageUrl = "http://127.0.0.1:6651/install/allwebPlugin_x86_v2.0.1.16_20240806.exe";
var installPackageVersion = "2.0.0.28";	
if(awp_IsInstall(installPackageVersion,installPackageUrl)){
    awp_CreatePlugin("allWebOfficeAx_zw","{6888ECA8-57D0-6E0E-9B9B-F1FF9B2DBD86}");
	allWebOfficeAx_zw.GetDisplayStyle().ShowMenuBar = false;
	allWebOfficeAx_zw.GetDisplayStyle().ShowOpenProgress = false;
}
}
```
第四步：为了响应插件事件，需要在网页内实现插件响应函数。如下代码所示
```
function OnCreated(){
	alert("OnCreated 事件");//allWebOffice 插件创建事件
}
```
## 演示示例
下载本程序，运行allWebPluginServer.exe程序，在谷歌、火狐、Edge等浏览器中输入地址(http://127.0.0.1:6651)。即可查看Demo示例。本工程将提供越来越多的ActiveX、NPAPI插件使用Demo，方便大家学习交流。[博客](https://blog.csdn.net/yunkaipx) 


​
