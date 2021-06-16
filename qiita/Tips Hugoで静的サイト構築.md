各種静的サイト構築を試す遊びに興じてしまいそれぞれをメモしている。
[3000文字Tips - 知ると便利なTipsをみんなへ届けよう](https://qiita.com/official-events/d523df99d6479293ffa7) にあやかりHugoで静的サイト構築までを書きます。

環境: Microsoft Windows 10 Home

## 公式

https://gohugo.io/

## Install

githubのHugoで https://github.com/spf13/hugo/releases よりwindowsの64bitバージョンを選び、
`C:\hugo_0.83.1_Windows-64bit` に置いた。
Hugoのbinフォルダを作りexeを配置。パスを通す。

`C:\hugo_0.83.1_Windows-64bit\bin\hugo.exe`

```
set path=%path%;C:\hugo_0.83.1_Windows-64bit\bin;
```

`hugo help` などが使えることを確認。

Hugoの初期フォルダを作る。ここでは `blog-hugo`。
`cd C:\git\blog-hugo`
`hugo new site <サイト名>` でサイトが作れる。


```cmd
C:\git\blog-hugo>hugo new site InitialSites
Congratulations! Your new Hugo site is created in C:\git\blog-hugo\InitialSites.

Just a few more steps and you're ready to go:

1. Download a theme into the same-named folder.
   Choose a theme from https://themes.gohugo.io/ or
   create your own with the "hugo new theme <THEMENAME>" command.
2. Perhaps you want to add some content. You can add single files
   with "hugo new <SECTIONNAME>\<FILENAME>.<FORMAT>".
3. Start the built-in live server via "hugo server".

Visit https://gohugo.io/ for quickstart guide and full documentation.
```

### Theme

https://themes.gohugo.io/

テーマをインストール。今回は `github-style` にした。


```
cd InitialSites
mkdir themes
cd themes

git clone https://github.com/MeiK2333/github-style
```


```
C:\git\blog-hugo\InitialSites>hugo new readme.md
C:\git\blog-hugo\InitialSites\content\readme.md created
```

### 起動

`cd ..` InitialSitesに戻り、以下で起動してみる。


```
hugo server -t github-style -D -w
```

`https://localhost:1313/`
サイトプレビュー停止には中断コマンドの `Ctrl+C`


### config.toml の設定

```config.toml
baseURL = "https://e99h2121.github.io/blog-hugo/"
publishDir = "docs"
languageCode = "ja-ja"
title = "e99h2121's New Hugo Site"
theme = "github-style"
googleAnalytics = "UA-1234567890"
pygmentsCodeFences = true
pygmentsUseClasses = true

[params]
  author = "yamada_n"
  description = ""
  github = "e99h2121"
  twitter = "e99h2121"
  url = "https://e99h2121.github.io/"
  rss = true
  lastmod = true
  location = "Japan"

  [[params.links]]
    title = "Link"
    href = "https://e99h2121.github.io/"

[frontmatter]
  lastmod = ["lastmod", ":fileModTime", ":default"]

```


https://yonehub.y10e.com/2019/10/22/20191022_hugo_githubio/

https://taikii.net/posts/2017/10/build-site-by-hugo/


## 記事を書く

`hugo -t github-style` で公開ファイルを生成。
`cd C:\git\blog-hugo-src\InitialSites`
例: `hugo new post/newpost202106091417.md`

```
C:\git\blog-hugo-src\InitialSites>hugo new post/newpost202106091417.md
C:\git\blog-hugo-src\InitialSites\content\post\newpost202106091417.md created
```

`hugo server -t github-style -D -w` で動作確認。
`hugo -t github-style` で生成。

```config.toml
publishDir = "docs"
```
と、config.toml に設定することで、docs 以下を GitHubPages化しているリポジトリにコピーすればまずは手動公開できる。

https://github.com/<ユーザー名>/<リポジトリ名>/tree/main/docs


## 参考

静的サイトは群雄割拠ですね。色々比較軸があります。

https://helve-blog.com/posts/web-technology/migration-hatena-hugo/

https://tatsy.github.io/blog/posts/2020-12-21-%E5%80%8B%E4%BA%BA%E3%82%B5%E3%82%A4%E3%83%88%E3%82%92hugo%E3%81%AB%E7%A7%BB%E7%AE%A1%E3%81%97%E3%81%9F%E8%A9%B1/


以上です。
