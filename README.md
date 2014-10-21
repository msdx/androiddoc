ANDROID API镜像站
=

本项目将android doc文档的页面进行处理，以加快打开速度，目前已将其部署在七牛空间，访问地址：[http://androiddoc.qiniudn.com/](http://androiddoc.qiniudn.com)

目前版本：android 5.0。欢迎检出及部署。

---
关于修改android doc加快打开速度的几行脚本：

    find . -name "*.html" |xargs sed -i "/www.google.com\/jsapi/d"

    find . -name "*.html" |xargs sed -i "s/fonts.googleapis.com/fonts.useso.com/g"

    find . -name "*.js" |xargs sed -i "s/https:\/\/apis.google.com\/js\/plusone\.js/http:\/\/googleapiscdn.qiniudn.com\/apis.google.com\/js\/plusone.js/g"

    find . -name "*.html" |xargs sed -i "s/www.google-analytics.com\/analytics.js/googleapiscdn.qiniudn.com\/www.google-analytics.com\/analytics.js/g"

    find . -name "*.html" |xargs sed -i "s/\/\/www.google-analytics.com\/ga.js/\/\/googleapiscdn.qiniudn.com\/www.google-analytics.com\/ga.js/g" 

    //find . -name "*.html" |xargs sed -i "s/\/\/www.google.com\/jsapi/\/\/googleapiscdn.qiniudn.com\/www.google.com\/jsapi/g"

    find . -name "*.html" | xargs sed -i "s/ga\.src = .*ga\.js';/ga\.src = \'http:\/\/googleapiscdn.qiniudn.com\/www\.google-analytics\.com\/ga\.js\';/"

