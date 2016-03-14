ANDROID API镜像站
=

本项目将android doc文档的页面进行处理，以加快打开速度，目前已将其部署在七牛空间以及github.io，

访问地址：

[http://androiddoc.qiniudn.com/](http://androiddoc.qiniudn.com)

[http://msdx.github.io/androiddoc/docs/](http://msdx.github.io/androiddoc/docs/)

[http://7ktv9b.com1.z0.glb.clouddn.com](http://7ktv9b.com1.z0.glb.clouddn.com)

目前版本：android 6.0。欢迎检出及部署。

---

几个文件介绍：

`pathtool`: 我自己写的一个小工具，用于计算两个文件的相对路径

`handleajax`: 一个脚本，用于把docs内引用到墙外的资源替换为docs/ajax里的资源

`handledocs`: 一个脚本，调用handleajax和其他命令对docs进行处理。

`handleabspath.groovy`: 一个Groovy脚本，用于把文档中的绝对路径转换为相对路径，以解决部署在非根目录时无法正常显示的问题。

###打赏

目前所部署的七牛空间的每月消耗5G左右的流量，18万次的API请求，七牛每月提供10G的流量以及100万次的API请求，暂不需要打赏。如有想打赏的，请备注，我将把收到的金额充值到七牛空间，以备以后访问增加的情况。但更希望的是，有需要的人能把此项目部署到自己的空间上。

![微信打赏](http://7xpdix.com1.z0.glb.clouddn.com/wechat.png)
