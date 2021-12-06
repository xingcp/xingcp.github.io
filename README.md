本项目为使用Markdown维护的个人主页模板。

# 使用指南

## 1.文件说明

[./source/img/logo.jpg](./source/img/logo.jpg)为头像或者logo，使用时可将其替换为自己的照片，需改名为logo.jpg

[./config.json](./config.json)中为配置信息，目前仅有Name值，修改Name的值为自己的名字，这会影响到网页的title以及导航栏左上角的标牌。

[./contact.md](./contact.md)中为使用markdown书写的个人联系方式，根据需要更改

[./index.md](./index.md)中为Home界面的主要内容

[./pages/course/index.md](./pages/course/index.md)为Course界面的主要内容

[./pages/resume/index.md](./pages/resume/index.md)为Resume界面的主要内容

[./pages/publications/index.md](./pages/publications/index.md)为Publications界面的主要内容

[./pages/link/index.md](./pages/link/index.md)为Links界面的主要内容

## 2.Github网站搭建

1. 登录Github，点击右上角加号，选择新建仓库
   ![image-20210621165937290](C:\Users\KuangYi\AppData\Roaming\Typora\typora-user-images\image-20210621165937290.png)

2. 创建一个名为username.github.io的仓库，**username**为账户名
   ![image-20210621170127499](C:\Users\KuangYi\AppData\Roaming\Typora\typora-user-images\image-20210621170127499.png)

3. 将该项目clone到本地
   ![image-20210621170408452](C:\Users\KuangYi\AppData\Roaming\Typora\typora-user-images\image-20210621170408452.png)

4. 将本项目复制粘贴进空白的仓库中，注意如果显示隐藏文件，不要删除**.git**文件夹。
   ![image-20210621170605978](C:\Users\KuangYi\AppData\Roaming\Typora\typora-user-images\image-20210621170605978.png)
   ![image-20210621170631461](C:\Users\KuangYi\AppData\Roaming\Typora\typora-user-images\image-20210621170631461.png)

5. 保存更改，提交并推送到远程仓库，等待系统刷新

   ```git
   git add *
   git commit -am "first commit"
   git push
   ```

   

&nbsp;

&nbsp;

# Markdown语法简介

推荐使用[Typora](https://typora.io/)进行markdown文件的读写。


# 一级标题

`#一级标题`

## 二级标题

`##二级标题`

### 三级标题

`###三级标题`

#### 四级标题

`####四级标题`

---

`---`分割线（三个减号）

无序列表

- class1
- class2
- class3
  - item1
  - item2
    - subitem1
    - ……
- ……

```markdown
- class1
- class2
- class3
  - item1
  - item2
    - subitem1
    - ……
- ……
```

有序列表

1. class1
2. class2
3. class3
   1. item1
   2. item2
      1. subitem1
      2. ……
4. ……

```markdown
1. class1
2. class2
3. class3
   1. item1
   2. item2
      1. subitem1
      2. ……
4. ……
```

代码环境：行内：两个 ` 符号中间（键盘esc下方，tab上方那个键，切换成英文）

多行：前三个，后三个 ` 符号中间

[超链接](https://www.baidu.com)

`[超链接](https://www.baidu.com)`

图片

![logo](./source/img/logo.jpg =100x100)

`![logo](./source/img/logo.jpg =100x100)`，最后的=100x100是用于限制图片大小。