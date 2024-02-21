# Git Commands

Command-line interface commands typical in GIT.

## git init 
creates a new local repository in the directory you are in
```sh
$ git init
```

## git status
shows the status of your files in the directory you are working in

## git clone
makes a copy of an existing remote repository
```sh
$ git clone "repository name"
```

## git pull
downloads the latest commits from the remote repository.
```sh
$ git pull "repository name"
```

## git merge
allows merging changes from one branch into another branch, creating a new commit if no problem is found
```sh
$ git merge
```

## git diff
shows the differences between 2 commits, branches, files, etc
```sh
$ git diff
diff --git a/staff/xavi-gonzalez/git/README.md b/staff/xavi-gonzalez/git/README.md
index e69de29..3829526 100644
--- a/staff/xavi-gonzalez/git/README.md
+++ b/staff/xavi-gonzalez/git/README.md
```

## git log 
check commit status
```sh
$ git log

commit 3d5f56bfc51f2e5c677bc6437e5d8ddea48451ef (HEAD -> feature/git, origin/feature/git)
```

## git branch
check current branch
```sh
$ git branch

  develop
  feature/arrays
* feature/bash
  feature/complex-structure
  feature/playground
  feature/space-invaders
  feature/strings
  main
```

## git branch -D
delete a branch
```sh
$ git branch -D feature/branch name to remove
```


## git branch "new branch name"
creates a new branch
```sh
$ git branch feature/branch name to create
```

## git checkout 
access a different branch
```sh
$ git checkout feature/playground
```

## git add
add new file/folder ready to commit & push
```sh
$ git add staff/xavi-gonzalez/git   
```

## git commit -m
prepares file to be uploaded with an specific written command
```sh
$ git commit -m 'add git #162'
```

## git push
upload new commit
```sh
$ git push
```


## git push -u origin 
forces upload when push gives an error
```sh
$ git push -u origin feature/git  
```

## git push -f
forces the upload if the previous step don't work

## git commit --amend
replace the last commit uploaded

## git log --graph
check branches in line shape
```sh
$ git log --graph  

* commit b7f55c89951ce407cc32a24f588355d5d15cc5ba (HEAD -> feature/playground, origin/feature/playground)
| Author: Xavi Gonzalez <xavigs1989@gmail.com>
| Date:   Thu Feb 15 14:27:01 2024 +0100
| 
|     deleted space-invaders from playground
```

## git log --all --decorate --oneline --graph
checks all the branches created
```sh
$ git log --all --decorate --oneline --graph

* 11fcfd3 (origin/feature/bash, feature/exampleclear, feature/bash) deleted bad README from Bash #248
* 7b4dc25 borrada carpeta hello world from bash
* 18c57eb boorada carpeta challenge
* fdc4b6e add bash doc 110
| * b7f55c8 (HEAD -> feature/playground, origin/feature/playground) deleted space-invaders from playground
| * 010477a update mondrian grid to playground #226
| * 8668f85 update new mondrian files to playground #226
| * 4b6a53b add git ignoring #226
|/  

```

## git reset 'commit number (#)'
erases an specific commit
```sh
$ git log reset 

commit 11fcfd3158341ff8e3a32574fbb3a8eaa3189900 (HEAD -> feature/bash, origin/feature/bash)
```