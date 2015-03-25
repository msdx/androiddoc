ANDROID API镜像站
=

本项目将android doc文档的页面进行处理，以加快打开速度，目前已将其部署在七牛空间，访问地址：[http://androiddoc.qiniudn.com/](http://androiddoc.qiniudn.com)

目前版本：android 5.0。欢迎检出及部署。

---
关于修改android doc加快打开速度的所用到的几行脚本：

    deb http://cz.archive.ubuntu.com/ubuntu vivid main 

    sudo apt-get update

    sudo apt-get install realpath

    find . -name "*.html" |xargs sed -i "/www.google.com\/jsapi/d"

    find . -name "*.html" |xargs sed -i "s/fonts.googleapis.com/fonts.useso.com/g"

    ./handledocs plusone.js "https:\/\/apis.google.com\/js\/plusone\.js" js

    ./handledocs analytics.js "www.google-analytics.com\/analytics.js" html

    ./handledocs ga.js "\/\/www.google-analytics.com\/ga.js" html

    ./handledocs ga.js "('https:' == document.location.protocol.*ga\.js';" html

    sed -i 's/\/\/lh4.ggpht.com\/-lfjzgG5Dqrk\/UHMThRtpRwI\/AAAAAAAABpk\/h4d3nsmkgPM\/s400\/mint.png/..\/images\/distribute\/mint.png/' develop/index.html 

    ./handledocs swfobject.js "\/\/swfobject.googlecode.com\/svn\/trunk\/swfobject\/swfobject.js" html swfobject.googlecode.com

    ./handledocs swfobject.js "\/\/ajax.googleapis.com\/ajax\/libs\/swfobject\/2.2\/swfobject.js" html ajax.googleapis.com

    ./handledocs ytblogger_lists_unified.js "https:\/\/developer.android.com\/ytblogger_lists_unified.js" html
