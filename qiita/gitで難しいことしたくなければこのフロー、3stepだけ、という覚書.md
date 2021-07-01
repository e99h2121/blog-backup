初心者向け。自分はほぼ以下だけでgitと付き合っていますという覚書。

## おさらい

チートシート: https://training.github.com/downloads/ja/github-git-cheat-sheet.pdf

`C:\git\misc>mkdir gittest`

`C:\git\misc>cd gittest`

```
C:\git\misc\gittest>git
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone             Clone a repository into a new directory
   init              Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add               Add file contents to the index
   mv                Move or rename a file, a directory, or a symlink
   restore           Restore working tree files
   rm                Remove files from the working tree and from the index
   sparse-checkout   Initialize and modify the sparse-checkout

examine the history and state (see also: git help revisions)
   bisect            Use binary search to find the commit that introduced a bug
   diff              Show changes between commits, commit and working tree, etc
   grep              Print lines matching a pattern
   log               Show commit logs
   show              Show various types of objects
   status            Show the working tree status

grow, mark and tweak your common history
   branch            List, create, or delete branches
   commit            Record changes to the repository
   merge             Join two or more development histories together
   rebase            Reapply commits on top of another base tip
   reset             Reset current HEAD to the specified state
   switch            Switch branches
   tag               Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch             Download objects and refs from another repository
   pull              Fetch from and integrate with another repository or a local branch
   push              Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
See 'git help git' for an overview of the system.
```

## Step1. 修正作業をはじめる

### git pull 

最新履歴取得。

```
C:\git\misc\gittest>git pull
Already up to date.
```

### git branch 

今いるブランチを確認。現在のリポジトリ上のすべてのローカルブランチを一覧で表示する。

```
C:\git\misc\gittest>git branch
* master
```

### git branch \<new branch name>

修正するための新規ブランチを作成。`ticket-1` を作成している。

```
C:\git\misc\gittest>git branch ticket-1
```

```
C:\git\misc\gittest>git branch
* master
  ticket-1
```

### git switch <branch name>

移動。

```
C:\git\misc\gittest>git switch ticket-1
Switched to branch 'ticket-1'
```
https://qiita.com/yukibear/items/4f88a5c0e4b1801ee952

```
C:\git\misc\gittest>git branch
  master
* ticket-1
```


### 修正作業

`C:\git\misc\gittest\newfile.txt` を作成した。


### git add \<file name>


```
C:\git\misc\gittest>git add .

C:\git\misc\gittest>git status
On branch ticket-1
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   newfile.txt
```


### git commit -m "\<commit message>"


```
C:\git\misc\gittest>git commit -m "refs #1 initial commit"
[ticket-1 612efa3] refs #1 initial commit
 1 file changed, 1 insertion(+)
 create mode 100644 gittest/newfile.txt
```

### git push --set-upstream origin \<branch name> 

```
C:\git\misc\gittest>git push
fatal: The current branch ticket-1 has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin ticket-1


C:\git\misc\gittest>git push --set-upstream origin ticket-1
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (4/4), 378 bytes | 378.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'ticket-1' on GitHub by visiting:
remote:      https://github.com/e99h2121/misc/pull/new/ticket-1
remote:
To https://github.com/e99h2121/misc.git
 * [new branch]      ticket-1 -> ticket-1
Branch 'ticket-1' set up to track remote branch 'ticket-1' from 'origin'.
```


### 更に修正作業

C:\git\misc\gittest\newfile.txt を修正。
C:\git\misc\gittest\anothernewfile.txt を作成。


```
C:\git\misc\gittest>git add *
```

```
C:\git\misc\gittest>git status
On branch ticket-1
Your branch is up to date with 'origin/ticket-1'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   anothernewfile.txt
        modified:   newfile.txt
```

### git commit -m "\<commit message>"

```
C:\git\misc\gittest>git commit -m "refs #1 new file and modifying"
[ticket-1 ebe3735] refs #1 new file and modifying
 2 files changed, 2 insertions(+)
 create mode 100644 gittest/anothernewfile.txt
```
 
### git push

```
C:\git\misc\gittest>git push
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (5/5), 480 bytes | 480.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/e99h2121/misc.git
   612efa3..ebe3735  ticket-1 -> ticket-1
```

これで `ticket-1` ブランチにpushできた。


## Step2. 修正物完成

https://github.com/e99h2121/misc/tree/ticket-1


### GitHub上で pull request (GitLab上で merge request)

https://github.com/e99h2121/misc/pull/2


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2ba36e0b-d365-e9fd-27ce-971bb572fd48.png)

ここで色々修正点を書きます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/bc9612a7-1c24-e963-8547-fd53860c8800.png)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2310960d-9aec-40c7-7f33-4dc8cf349a0f.png)


## Step3. レビューで指摘を貰って、更に修正する時

`git commit -m "コメント" `
まで同様。更にコメントをきれいにするなら --amend 等。

### git commit --amend -m "\<comment>"

```
C:\git\misc\gittest>git status
On branch ticket-1
Your branch is up to date with 'origin/ticket-1'.

nothing to commit, working tree clean

C:\git\misc\gittest>git add *

C:\git\misc\gittest>git status
On branch ticket-1
Your branch is up to date with 'origin/ticket-1'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   anothernewfile.txt

C:\git\misc\gittest>git commit -m "refs #1 modifying"
[ticket-1 e22c9ef] refs #1 modifying
 1 file changed, 1 insertion(+)

C:\git\misc\gittest>git commit --amend -m "refs #1 add comment"
[ticket-1 18f2ce5] refs #1 add comment
 Date: Tue Jun 22 06:31:45 2021 +0900
 1 file changed, 1 insertion(+)
```


### git commit --amend --no-edit

```
C:\git\misc\gittest>git add *

C:\git\misc\gittest>git commit --amend --no-edit
[ticket-1 227cd93] refs #1 add comment
 Date: Tue Jun 22 06:31:45 2021 +0900
 1 file changed, 2 insertions(+)
```

その後、git commit を数度。


## commit を整理してみる

### ここからは必要に応じて以下を参考


https://qiita.com/suzuki-hoge/items/cc91877ce69527ced692

https://qiita.com/getty104/items/a9b56f30744dfe52a05f

https://qiita.com/eyuta/items/a26bcc327139e9fd81d4



### git log --oneline

```
C:\git\misc\gittest>git log --oneline
971973e (HEAD -> ticket-1) refs #1 modify file
ba00667 ref #1 add file
227cd93 refs #1 add comment
ebe3735 (origin/ticket-1) refs #1 new file and modifying
612efa3 refs #1 initial commit
```

### git rebase -i \<commit>

`git rebase -i 227cd93` などとすることで vim式に書き換えができる。
vim弱者は : [よく使う Vim のコマンドまとめ - Qiita](https://qiita.com/hide/items/5bfe5b322872c61a6896) など参照

```
C:\git\misc\gittest>git log --oneline
227cd93 (HEAD) refs #1 add comment
ebe3735 (origin/ticket-1) refs #1 new file and modifying
612efa3 refs #1 initial commit
9d55768 (origin/master, master) aaa
2bd96b6 add
073a553 add

```

### git rebase --continue

``` 
C:\git\misc\gittest>git rebase --continue
Successfully rebased and updated refs/heads/ticket-1.

C:\git\misc\gittest>git push
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 801 bytes | 400.00 KiB/s, done.
Total 8 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/e99h2121/misc.git
   ebe3735..5376112  ticket-1 -> ticket-1

```

で、`git push `

### 本当に完成

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/62221a16-d134-78e1-8a43-7dabe0b99579.png)



## まとめ

https://qiita.com/TaaaZyyy/items/b2b68aec99789374a204

結局自分で操作してみるのが一番だったりしますが、参考になればさいわいです。

