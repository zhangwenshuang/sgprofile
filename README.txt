在github上创建仓库：
Create a new repository on the command line


touch README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/BrentHuang/MyRepo.git
git push -u origin master


在本地新建一个分支： git branch Branch1
切换到你的新分支: git checkout Branch1
将新分支发布在github上： git push origin Branch1
在本地删除一个分支： git branch -d Branch1
在github远程端删除一个分支： git push origin :Branch1   (分支名前的冒号代表删除)

直接使用git pull和git push的设置
git branch --set-upstream-to=origin/master master 
git branch --set-upstream-to=origin/ThirdParty ThirdParty
git config --global push.default matching







####################################################
git支持很多种工作流程，我们采用的一般是这样，远程创建一个主分支，本地每人创建功能分支，日常工作流程如下：

去自己的工作分支
$ git checkout work

工作
....

提交工作分支的修改
$ git commit -a

回到主分支
$ git checkout master

获取远程最新的修改，此时不会产生冲突
$ git pull

回到工作分支
$ git checkout work

用rebase合并主干的修改，如果有冲突在此时解决
$ git rebase master

回到主分支
$ git checkout master

合并工作分支的修改，此时不会产生冲突。
$ git merge work

提交到远程主干
$ git push
这样做的好处是，远程主干上的历史永远是线性的。每个人在本地分支解决冲突，不会在主干上产生冲突。
