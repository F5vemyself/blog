---
title: Something about the first task
date: 2018-10-18 22:08:24
tags: 一些琐碎的知识
---

* Git

    * 工作区和暂存区
    * 撤销修改
    * 远程仓库
    * 分支合并与删除
    * 打标签
    * ssh密钥
* Hexo主题的修改
    * 我喜欢的主题链接：[湖绿风](https://github.com/wizardforcel/hexo-theme-cyanstyle)
    * 操作步骤




<font color="darkred">【Git】  工作区和暂存区</font>


```
一些小知识点总结：
$ git add readme.txt              将readme.txt文件从工作区保存到暂存区域
$ git commit -m "readme.txt"      将readme.txt文件从暂存区提交到版本库
$ git diff HEAD -- readme.txt     查看工作区和版本库里面最新版本的区别
```
<hr />

<font color="darkred">【Git】  撤销修改</font>


情况一：没有使用 `$ git add readme.txt`  提交到暂存区 
直接使用`$ git checkout -- readme.txt` ，即可撤销

情况二：已经使用 `$ git add readme.txt`  命令提交到暂存区了
此时分两步：
1.使用`$ git reset HEAD readme.txt`使其返回到情况一！
2.使用情况一的命令`$ git checkout -- readme.txt`即可撤销

---

<font color="darkred">【Git】  删除文件</font>

```
一般情况下，你通常直接在文件管理器中把没用的文件删了，或者用rm命令删了：
$ rm readme.txt   
```
 这个时候，Git知道你删除了文件，因此，工作区和版本库就不一致了，`git status`命令会立刻告诉你哪些文件被删除了：

```
 $ git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    deleted:    readme.txt

no changes added to commit (use "git add" and/or 
"git commit -a")
```
<br /><br />
现在你有两个选择：
1.假如你是误删，使用`$ git checkout --readme.txt`,就可以恢复了




2.如果确实要从版本库中删除该文件，那就用命令`$ git rm`删掉，并且`$ git commit`：
```
$ git rm readme.txt
rm 'readme.txt'

$ git commit -m "remove readme.txt"
[master d46f35e] remove readme.txt
 1 file changed, 1 deletion(-)
 delete mode 100644 test.txt

```
现在文件就从版本库中被删除了！
<br /><br />

<font color="red">假如你突然后悔了!</font>
但是此时 ~~readme.txt~~ 已经从版本库删除了，因为你已经commit了，那么怎么办呢？此时你可以利用`版本回退`功能
`$ git reset --hard HEAD^`通过此命令可以返回上一个版本！
<br /><br />

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<font color="darkred">【Git】  远程仓库</font>

多人开发的时候，如果想参与开发，怎么办呢？
1.在github里找到别人的仓库，Fork一份（此时你的仓库里有一份一模一样的）
2.把Fork的仓库clone到本地仓库，这样就可以在git里对其就行操作啦！（Fork过来了，就是我个人的仓库啦，想怎么修改怎么修改）
3.如果你认为你开发的部分已经相对完善，在github上pull request一下，如果原仓库持有者认为你的分支不错，会将你的分支merge到master分支上
<br /><br />

`补充：`怎么样知道自己的本地仓库有没有和远程仓库建立联系呢？
又或者已经建立了联系，但不知道和谁建立了联系？
如何删除已建立的联系呢?
1.使用`$ git remote `命令查看是否建立联系， 如果已经建立了联系，会出现`origin`
2.使用`$ git remote -v `查看和谁建立了联系
![remote-v](/img/remote-v.png)
3.如果已经建立联系了
![remote-rm](/img/remote-rm.png) 此时利用此命令取消联系

---
<font color="darkred">【Git】  分支合并与修改</font>

在`dev`分支上，已经`add`，并且`commit`了`dev01.txt`文件，此时准备将其合并到master分支！
<font color="orange">一定要先将其切回`master`分支，在master分支上</font>，执行如下命令行：
`$ git merge dev`(此方法为快速合并)
另一种合并方法：`$ git  merge --no-ff -m "bulabulabula" dev ` （非快速合并）

合并之后可以用`$ git log --graph --pretty=oneline --abbrev-commit`查看历史分支

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<font color="darkred">【Git】  打标签</font>
![tag1](/img/tag1.png)
![tag2](/img/tag2.png)
![tag3](/img/tag3.png)
![tag4](/img/tag4.png)
![tag5](/img/tag5.png)

---

<font color="darkred">【Git】  ssh密钥</font>
![ssh](/img/ssh.png)

<font color="red">```注意：```一个ssh密钥只能绑定一个github账号</font>

---

<font color="darkred">【Hexo】  主题修改操作步骤</font>
![change](/img/change.png)


---

>THE END
参考链接：
[远程仓库-廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001374385852170d9c7adf13c30429b9660d0eb689dd43a000)
[Hexo 博客搭建参考链接](http://www.cnblogs.com/liuxianan/p/build-blog-website-by-hexo-github.html)