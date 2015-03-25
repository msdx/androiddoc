ANDROID API镜像站
=

本项目将android doc文档的页面进行处理，以加快打开速度，目前已将其部署在七牛空间，访问地址：[http://androiddoc.qiniudn.com/](http://androiddoc.qiniudn.com)

目前版本：android 5.1。欢迎检出及部署。

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

    ./handledocs gp-referral-ga.png "\/\/3.bp.blogspot.com\/-_8WvpdTVGsE\/UkxxxrVoNNI\/AAAAAAAACj8\/FrQyA-BO11c\/s1600\/gp-referral-ga.png" html

    ./handledocs icons.png "\/\/2.bp.blogspot.com\/-HfoO6KNFBKA\/UeiyRoELb7I\/AAAAAAAAAFs\/bHR-5viktU4\/s1000\/icons.png" html 2.bp.blogspot.com

    ./handledocs beautifulapps_4.png "\/\/1.bp.blogspot.com\/-k8DZYu0daT4\/UdRt1AzstvI\/AAAAAAAAAFM\/CvEkb2yh-i0\/s965\/beautifulapps_4.png" html

    sed -i "s/\/\/3.bp.blogspot.com\/-k33rf398Lqw\/UlRUMQQRUNI\/AAAAAAAAClM\/pSwz2YgQpmY\/s1600\/gps-play_games_logo.png/..\/images\/google\/gps-play_games_logo.png/g" develop/index.html
