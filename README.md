# 下载网站图片

配置chrome不询问下载位置，否则每个文件都弹框。

重复下载的文件有的还是会弹框

1. 在插件启用保存图片
2. 访问指定网页
3. 打开控制台（F12)
4. 重新加载网页，所有网页请求图片会触发下载请求
    - 很多论坛编辑器，图片是访问才加载的，需要手工去把表情的每一页翻页，触发浏览器的加载
5. 图片会下载到chrome默认的下载文件夹，并且按不同网站地址创建文件夹