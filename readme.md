readme.md

1、gh-pages分支目录结构

index.html--|--css

            |--js

            |--img

            |--html--|--shanhaiching.html--|--shanhaiching-1.html

                                           |--shanhaiching-2.html

------首页----|---------|----各主题裸奔目录页-----|------------详细内容页面

2、导航按钮

页面中涉及ajax加载的链接，都有一个属性data，值为需要加载的文件路径；

另外，class值也有限定，返回首页为back2index，返回目录页为back2con。如：

//返回首页

<a class="back2index" href="" data="index.html">...</a>

//返回目录页

<a class="back2con" href="" data="html/shanhaiching.html">...</a>

//加载详细内容页面

<a href="" data="html/shanhaiching/shanhaiching-1.html">...</a>

