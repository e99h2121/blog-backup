今年を振り返る「なんかかく」アドベントカレンダー 23 日目です。昨日の記事では [怪しい動きをするコネクタ](https://qiita.com/e99h2121/items/5693f418d24951ae02e8) を用いましたが、そういえばそれらを使ってワークフローを構築するための Logic Apps デザイナーは 2024、今年ちょっときれいになりました。

「新しい Azure Logic Apps Designer のご紹介： より速く、よりスムーズに、より確実に」

https://techcommunity.microsoft.com/blog/integrationsonazureblog/introducing-the-new-azure-logic-apps-designer-for-consumption-faster-smoother-an/4095261

上の記事自体は Mar 26, 2024 なので大分日も経ち、何をいまさらなのですが、Logic Apps 的に 2024 年すこし張り切ったと思われる 新しいデザイナー を紹介した記事を引用しつつ、便利情報をまとめてみます。issues 起票するの楽しいよ。

## 「どこでも同じデザイナー」

> 従量課金版の新しいデザイナーの一般提供により、サポートされるすべてのプラットフォームでデザイナー エクスペリエンスを統一しました。これは、Standard 版 Azure Logic Apps、Standard 版 Azure Logic Apps Visual Studio Code 拡張機能、および従量課金版 Azure Logic Apps のエクスペリエンスを網羅します。

## 「古いデザイナーを使いたい場合は？」

前略、「古いデザイナーを使いたい場合は？」

> What if I want to use the old designer?

> 新しいデザイナーが何らかの理由でお客様のニーズに合わない場合は、ご意見をお聞かせください。https://github.com/Azure/LogicAppsUX で issue を作成するか、laux@microsoft.com まで直接メールをお送りください。

> ただし、何らかの理由で旧デザイナーを使用したい場合は、今のところオプションとして残しておきます。デザイナーのコマンドバーから Enable Legacy Designer をクリックすることでアクセスできます。

(※ 注: Enable Legacy Designer は 2024 年 12 月現在既に除去されております。)

> また、何らかの理由でデザイナーへのアクセスに問題がある場合は、https://aka.ms/lafallback 。レガシーデザイナーは今後完全にサポートされることはありません。レガシーデザイナーを好まれる方のために、できる限りレガシーデザイナーをメンテナンスする予定です。

## UX の Issue を眺めてみよう

ということでデザイナーについてお気づきのことがあれば GitHub から issue を登録することができます。こちら。

https://github.com/Azure/LogicAppsUX



## Azure とか MicrosoftDocs とか色々起票できる 

というわけで、Logic Apps のデザイナーに限らず Azure に関するリポジトリは探索しがいがあります。

https://github.com/Azure/logicapps

https://github.com/Azure/azure-powershell

https://github.com/Azure/azure-cli

https://github.com/MicrosoftDocs/azure-docs

こんとりびゅーとしていきましょう。以上です～
