## 完成形
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/9c2284e9-ea52-dca5-7dac-e8542f8fee94.png)

## MarkdownでGoogle Sitesを編集できるスクリプト

https://github.com/tutts/google-sites-markdown

便利なものを置いてくださっている方がいました。上記にて、Google SitesをMarkdownで編集できます。

> Google SitesはテーブルやMarkdownをサポートしていない。このスクリプトを使えば、Google Sites内のHTMLスニペットの中にMarkdownを記述することができる。

> **使用方法**
> - Googleサイトのページを編集中にダブルクリックして、ページオプションを表示させます。
> - <> 埋め込み を選択します。
> - 埋め込みコード] タブに変更します。
> - 以下の例のコードを貼り付けて、Markdownを自分のものに置き換えてください。
> - そして、保存

### 以下を「埋め込み」

```js
<script src="https://cdn.jsdelivr.net/gh/tutts/google-sites-markdown/index.js"></script>

<script>
markdown`
# Superheroes

Look I can write Markdown in Google Sites!

> Are tables now possible?

- [X] Yep!
- [ ] No

## Hero Table

| ID  | Name         | Hero      |
| --- | ------------ | --------- |
| 1   | Peter Parker | Spiderman | 
| 2   | Bruce Wayne  | Batman    |

*What about lists?*

- Yep
- Hooray! 🎉
`
</script> 
```

## 動機

Google Sites。便利ですが表現に制約があったりちょっとした機能追加をしたくなったりなどを想像すると、いつでも移行しやすいようにしておくべきなのでは、などと考えることがあります。

Google Sites の移行ツールとして発見しているのは以下。
[sih4sing5hong5/google-sites-liberation: Fork Version: This is an import/export tool for Google Sites.](https://github.com/sih4sing5hong5/google-sites-liberation)

だがやはり、そもそもMarkdownにしておきたい、編集しやすくしたい。
で、以上です～

