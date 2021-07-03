[草を生やす](https://qiita.com/sakaizay/items/e4ae74bfecd026925e3b#1-%E6%AF%8E%E6%97%A5%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E6%9B%B8%E3%81%8F%E8%8D%89%E3%82%92%E7%94%9F%E3%82%84%E3%81%99) とはご存知、GitHubに毎日何かしらコントリビュートしてグラフに色を付けていこうという話。[GitHub 芝生入門/芝生応用](https://qiita.com/sta/items/2c1f0252a6a9ce5e2087) では草を生やすことそのものを遊ぶGitfityというプログラムが紹介されている。ということでそれをやってみたという小話。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/785f6926-f3e5-caf4-a226-b3c355d2f038.png)

## Gitfiti
https://github.com/gelstudios/gitfiti

> 1. Create a new github repo to store your handiwork.
1. Run gitfiti.py and follow the prompts for username, art selection, offset, and repo name.
1. Run the generated gitfiti.sh or gitfiti.ps1 from your home directory (or any non-git tracked dir) and watch it go to work.


1. 作成した作品を保存するために、新しいgithub repoを作成します。
1. gitfiti.py を実行し、ユーザ名、アートの選択、オフセット、リポジトリ名を入力するプロンプトに従います。
1. 生成された gitfiti.sh または gitfiti.ps1 をホームディレクトリ (または git 以外のディレクトリ) で実行し、作業が始まるのを確認します。

という手順。


### 手順詳細

まずリポジトリ準備: https://github.com/e99h2121/shibafu-art

対話式でこたえていく。

- **Enter GitHub URL (leave blank to use https://github.com/):**
    - GitHubのURL。そのままで良い。
- **Enter your GitHub username:**
    - GitHubのUsername。私の場合: e99h2121 
- **Enter the name of the repository to use by gitfiti:**
    - 用意したリポジトリ名。私の場合: shibafu-art 
- **Enter the number of weeks to offset the image (from the left):**
    - グラフの左端から数えて何列目から絵を書きたいか。私の場合: 2
- **By default gitfiti.py matches the darkest pixel to the highest number of commits found in your GitHub commit/activity calendar, Currently this is: 22 commits Enter the word "gitfiti" to exceed your max(this option generates WAY more commits) Any other input will cause the default matching behavior**
    - Gitfity.py は最大コミット数（最も濃い色）を見て色の調整をかけてくれる。その最大を越えさせるか。私の場合: まあ越えなくしたいのでそのままにした。
- **Enter file(s) to load images from (blank if not applicable)**
    - オリジナルな絵を読み込みたい場合。一旦つかわない。
- **Enter the image name to gitfiti Images: kitty, oneup, oneup2, hackerschool, octocat, octocat2, hello, heart1, heart2, hireme, oneup_str, beer, gliders, heart, heart_shiny**
    - 用意されているアートの名前。私の場合: kitty
- **Enter the target shell (bash or powershell):**
    - bash


全体は以下。

```
root@d545fa0ed72b:~/opt# python gitfity.py

          _ __  _____ __  _
   ____ _(_) /_/ __(_) /_(_)
  / __ `/ / __/ /_/ / __/ /
 / /_/ / / /_/ __/ / /_/ /
 \__, /_/\__/_/ /_/\__/_/
/____/

Enter GitHub URL (leave blank to use https://github.com/):
Enter your GitHub username: e99h2121
Enter the name of the repository to use by gitfiti: shibafu-art
Enter the number of weeks to offset the image (from the left): 2
By default gitfiti.py matches the darkest pixel to the highest
number of commits found in your GitHub commit/activity calendar,

Currently this is: 22 commits

Enter the word "gitfiti" to exceed your max
(this option generates WAY more commits)
Any other input will cause the default matching behavior
>
Enter file(s) to load images from (blank if not applicable)
>
Enter the image name to gitfiti
Images: kitty, oneup, oneup2, hackerschool, octocat, octocat2, hello, heart1, heart2, hireme, oneup_str, beer, gliders, heart, heart_shiny
> kitty
Enter the target shell (bash or powershell): bash
gitfiti.sh saved.
Create a new(!) repo named shibafu-art at https://github.com/ and run the script
```

これで gitfiti.sh が完成したので中身を見てみます。

### Gitへのcommitスクリプトができた

```bash
#!/usr/bin/env bash
REPO=shibafu-art
git init $REPO
cd $REPO
touch README.md
git add README.md
touch gitfiti
git add gitfiti

GIT_AUTHOR_DATE=2020-08-03T12:00:00 GIT_COMMITTER_DATE=2020-08-03T12:00:00 git commit --allow-empty -m "gitfiti" > /dev/null
GIT_AUTHOR_DATE=2020-08-03T12:00:00 GIT_COMMITTER_DATE=2020-08-03T12:00:00 git commit --allow-empty -m "gitfiti" > /dev/null

## (中略) 

GIT_AUTHOR_DATE=2020-10-01T12:00:00 GIT_COMMITTER_DATE=2020-10-01T12:00:00 git commit --allow-empty -m "gitfiti" > /dev/null
GIT_AUTHOR_DATE=2020-10-01T12:00:00 GIT_COMMITTER_DATE=2020-10-01T12:00:00 git commit --allow-empty -m "gitfiti" > /dev/null
GIT_AUTHOR_DATE=2020-10-01T12:00:00 GIT_COMMITTER_DATE=2020-10-01T12:00:00 git commit --allow-empty -m "gitfiti" > /dev/null
GIT_AUTHOR_DATE=2020-10-01T12:00:00 GIT_COMMITTER_DATE=2020-10-01T12:00:00 git commit --allow-empty -m "gitfiti" > /dev/null
GIT_AUTHOR_DATE=2020-10-01T12:00:00 GIT_COMMITTER_DATE=2020-10-01T12:00:00 git commit --allow-empty -m "gitfiti" > /dev/null
GIT_AUTHOR_DATE=2020-10-01T12:00:00 GIT_COMMITTER_DATE=2020-10-01T12:00:00 git commit --allow-empty -m "gitfiti" > /dev/null
GIT_AUTHOR_DATE=2020-10-01T12:00:00 GIT_COMMITTER_DATE=2020-10-01T12:00:00 git commit --allow-empty -m "gitfiti" > /dev/null
GIT_AUTHOR_DATE=2020-10-01T12:00:00 GIT_COMMITTER_DATE=2020-10-01T12:00:00 git commit --allow-empty -m "gitfiti" > /dev/null
GIT_AUTHOR_DATE=2020-10-01T12:00:00 GIT_COMMITTER_DATE=2020-10-01T12:00:00 git commit --allow-empty -m "gitfiti" > /dev/null
GIT_AUTHOR_DATE=2020-10-01T12:00:00 GIT_COMMITTER_DATE=2020-10-01T12:00:00 git commit --allow-empty -m "gitfiti" > /dev/null

git branch -M main
git remote add origin git@github.com:e99h2121/$REPO.git
git pull origin main
git push -u origin main

```
これを実行すればできあがり。



## 私の完成形
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/785f6926-f3e5-caf4-a226-b3c355d2f038.png)
shibafu-art リポジトリを消せば、元通りになる。

## 余談

作れる絵の中には `HIREME` というのもありますね。

```gitfity.py
HIREME = [
  [1,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [3,3,3,0,2,0,3,3,3,0,2,3,3,0,0,3,3,0,3,0,0,2,3,3],
  [4,0,4,0,4,0,4,0,0,0,4,0,4,0,0,4,0,4,0,4,0,4,0,4],
  [3,0,3,0,3,0,3,0,0,0,3,3,3,0,0,3,0,3,0,3,0,3,3,3],
  [2,0,2,0,2,0,2,0,0,0,2,0,0,0,0,2,0,2,0,2,0,2,0,0],
  [1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1],
]

```




https://www.reddit.com/r/ProgrammerHumor/comments/2t7y6k/hire_me/

でも話題になっていたが
> It's cool, but I'd be quicker to hire the person who wrote the tool to generate that history

といわれている。笑。

### その他
- [そもそも芝生で遊ぶのって OK なん？](https://qiita.com/sta/items/2c1f0252a6a9ce5e2087#%E3%81%9D%E3%82%82%E3%81%9D%E3%82%82%E8%8A%9D%E7%94%9F%E3%81%A7%E9%81%8A%E3%81%B6%E3%81%AE%E3%81%A3%E3%81%A6-ok-%E3%81%AA%E3%82%93) (Push は一回なので問題ないだろうという話) 
- [芝生の画像化ができるサービス](https://grass-graph.moshimo.works/)
- [芝生をかっこよくスカイラインな立体にしてくれるもの](https://skyline.github.com/)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/aee36452-bb06-6ce8-20ec-0d1fbcbf79af.png)


- [芝生立体化エクステンション](https://qiita.com/pekepek/items/a334ab9e201c486aed3f)
- 芝生の下書きが描けるCodepen
<p class="codepen" data-height="365" data-theme-id="light" data-default-tab="js,result" data-user="sebdeckers" data-slug-hash="vOXeKV" style="height: 365px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Gitfiti Painter">
  <span>See the Pen <a href="https://codepen.io/sebdeckers/pen/vOXeKV">
  Gitfiti Painter</a> by Sebastiaan Deckers (<a href="https://codepen.io/sebdeckers">@sebdeckers</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
- その他色々

https://github.com/gelstudios/gitfiti#notable-derivatives-or-mentions


芝生、愛されているようです。
[芝生応用](https://qiita.com/sta/items/2c1f0252a6a9ce5e2087#%E8%8A%9D%E7%94%9F%E3%82%A2%E3%83%BC%E3%83%88) で書かれている通り、`Gitfity.py` はソースコードリーディングによさそう。
以上お楽しみいただければさいわいです。


追記: [GitHubプロフィールをカッコ良くする方法](https://qiita.com/e99h2121/items/59ce92f5c2215ecb9f89) 

