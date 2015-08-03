ANDROID API镜像站
=

本项目将android doc文档的页面进行处理，以加快打开速度，目前已将其部署在七牛空间，访问地址：[http://androiddoc.qiniudn.com/](http://androiddoc.qiniudn.com)

目前版本：android 5.1。欢迎检出及部署。

---

几个文件介绍：

`pathtool`: 我自己写的一个小工具，用于计算两个文件的相对路径

`handleajax`: 一个脚本，用于把docs内引用到墙外的资源替换为docs/ajax里的资源

`handledocs`: 一个脚本，调用handleajax和其他命令对docs进行处理。

