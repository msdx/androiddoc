ANDROID API镜像站

访问地址：[http://androiddoc.qiniudn.com/](http://androiddoc.qiniudn.com)

关于修改android doc加快打开速度的几行脚本：

第一行慎用:

    find . -name "*.html" |xargs sed -i "/www.google.com\/jsapi/d"

    find . -name "*.html" |xargs sed -i "s/fonts.googleapis.com/fonts.useso.com/g"

    //find . -name "*.js" |xargs sed -i "s/https:\/\/apis.google.com\/js\/plusone\.js/http:\/\/googleapiscdn.qiniudn.com\/apis.google.com\/js\/plusone.js/g"

    find . -name "*.html" |xargs sed -i "s/www.google-analytics.com\/analytics.js/googleapiscdn.qiniudn.com\/www.google-analytics.com\/analytics.js/g"

    find . -name "*.html" |xargs sed -i "s/\/\/www.google-analytics.com\/ga.js/\/\/googleapiscdn.qiniudn.com\/www.google-analytics.com\/ga.js/g" 

    find . -name "*.html" |xargs sed -i "s/\/\/www.google.com\/jsapi/\/\/googleapiscdn.qiniudn.com\/www.google.com\/jsapi/g"

