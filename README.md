ANDROID API镜像站

访问地址：[http://androiddoc.qiniudn.com/](http://androiddoc.qiniudn.com)

关于修改android doc加快打开速度的几行脚本：

第一行慎用:
```find . -name "*.html" |xargs sed -i "/www.google.com\/jsapi/d"
```

更新字体
```find . -name "*.html" |xargs sed -i "s/fonts.googleapis.com/fonts.useso.com/g"
```

更新+1按钮
```find . -name "*.js" |xargs sed -i "s/https:\/\/apis.google.com\/js\/plusone\.js/http:\/\/googleapiscdn.qiniudn.com\/apis.google.com\/js\/plusone.js/g"
```

更新谷歌分析
```find . -name "*.html" |xargs sed -i "s/www.google-analytics.com\/analytics.js/googleapiscdn.qiniudn.com\/www.google-analytics.com\/analytics.js/g"
```
