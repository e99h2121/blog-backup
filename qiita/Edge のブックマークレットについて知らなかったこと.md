2020 年からアドベントカレンダー期に毎日何かを投稿するという奇祭に参加する習わしがあり今年もゆるゆる参加してみようと思い書くもの。

[ブックマークレットの登録方法 - Qiita](https://qiita.com/aqril_1132/items/b5f9040ccb8cbc705d04)
[今見ているページのタイトルとURLをMarkdown形式で取得するブックマークレット - Qiita](https://qiita.com/rohinomiya/items/55111e2b8e73b4542b89)
[Tips: Qiitaに書いている文字数が知りたい - Qiita](https://qiita.com/e99h2121/items/8c556a1317b5e71d4931)

などということを Chrome でしていたがさて Edge ではどうすればよいのか。
と、思っていたところこんなことが書いてあった。

[任意の Web ページで JavaScript のスニペットを実行する - Microsoft Edge Development | Microsoft Learn](https://learn.microsoft.com/ja-jp/microsoft-edge/devtools-guide-chromium/javascript/snippets?WT.mc_id=twitter#open-the-snippets-tab)

> スニペットは ブックマークレット の代替手段であり、スニペットは DevTools でのみ実行され、URL の許可された長さに制限されないという違いがあります。

スニペットだという。
つまりまあ

```js
console.log(  `[${document.title}](${location.href})`);
```
みたいなものをスニペットのところに登録しておいて

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/abf0e5f6-869c-2879-54a1-02cc5b54940d.png)

F12 押して実行してねっていうことかなあ。

```出力
[Azure サービス プリンシパルを作成する – Azure CLI | Microsoft Learn](https://learn.microsoft.com/ja-jp/cli/azure/create-an-azure-service-principal-azure-cli)
```

IE モードについて調べだすとハマりそうだったので一旦このページを貼って本日の小ネタとしておく。
[IE モードのよくあるご質問 | Japan Developer Support Internet Team Blog](https://jpdsi.github.io/blog/internet-explorer-microsoft-edge/ie-mode-faq/) 
以上私が知らなかったことでした :snowboarder: 
