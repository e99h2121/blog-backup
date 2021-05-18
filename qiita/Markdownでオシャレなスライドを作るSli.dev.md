Sli.dev は Beta Version。あらかじめ

> Slidev is still under heavy development. API and usages are not set in stone yet.

らしいので注意。しかしこれまで Markdown でスライド作るなら日本製 [fusuma](https://hiroppy.github.io/fusuma/) あるいは [Marp](https://qiita.com/msp0310/items/0e54f69457f81bc64754) かなと思っていたが、`npm init slidev` したら爆速でMarkdownでスライドのガワが `http://localhost:3030/` にできた。(以下gifの日本語は筆者が入れた)

![slidev.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/81da2091-53c4-9795-3f58-9f53ee1987c1.gif)


## sli.dev

https://sli.dev/

使い方

```
C:\workspaces\nodejs\slidev>npm init slidev
npx: installed 22 in 6.101s

  ●■▲
  Slidev Creator  v0.6.2

? Project name: » slidev
```




...以上。プレゼンターモードというのもあって右上に時間が表示されている。
`http://localhost:3030/presenter/1`

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/5e18cbb4-4b7f-66d6-ef9a-f32e4666ec15.png)


slide.md ファイル、結局シンプルに以下だけ。

```md
---
layout: cover
background: https://generative-placeholders.glitch.me/image?width=600&height=300&style=triangles&gap=100
---

# Slidev をお試し。

Presentation Slides for Developers

---

# Page 2

- 📄 Write slides in a single Markdown file
- 🌈 Themes, code blocks, interactive components
- 😎 Read the docs to learn more!|

```

### VSCode拡張

https://marketplace.visualstudio.com/items?itemName=antfu.slidev

### Export

`Install playwright-chromium`
を行って、
`slidev export`
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/ce0a55a1-2aa4-906b-025c-09bf27b3702e.png)


## 参考

これまでMarkdownでスライドを作るに以下辺りを参考にしていたがまた選択肢が増えたようだ...。

https://qiita.com/moomooya/items/45398e06f189d4a26227

https://qiita.com/unbabel/items/bf5d7e9e847190ddb0ee

https://notepm.jp/blog/5994

同じく紹介記事発見 :smiley: 

https://zenn.dev/ryo_kawamata/articles/introduce-slidev

簡単ながら以上、参考になればさいわいです。
