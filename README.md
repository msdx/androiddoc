ANDROID API镜像站

访问地址：[http://androiddoc.qiniudn.com/](http://dd.ma/jTXLdQsq)

关于修改android doc加快打开速度的几行脚本：
```
   find . -name "*.html" |xargs sed -i "/www.google.com\/jsapi/d"
```

```
   find . -name "*.html" |xargs sed -i "s/fonts.googleapis.com/fonts.useso.com/g"
```