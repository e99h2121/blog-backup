好きな技術、好きなアプリ、好きな言語はありますか。Power Automate はとても有名だと思います。単体でアドベントカレンダーが成立するほどに…

https://qiita.com/advent-calendar/2023/powerautomate

コミュニティも多数存在するほどに…

https://qiita.com/MiyakeMito/items/d98a9a63d73754bc38c6

## PowerAutomate と Logic Apps 何が違うの？

そんな Power Automate にそっと添えられている存在があります。Logic Apps です。去年書いた記事です。

https://qiita.com/e99h2121/items/a69e40d016f5df01b061#azure-logic-apps-%E3%81%A8-power-automate

おさらい:

> Power Automate も Azure Logic Apps も、「ワークフロー」を開発できるツールであるところは共通です。いずれでも SaaS アプリケーションやエンタープライズ アプリケーション を利用する際にGUI ベースで容易に構築することが可能です。

> しかし大きな違いは想定ユーザー。Power Automate は会社内の一般従業員、Logic Apps は開発者を主に想定しているとのこと。Logic Apps ではワークフローを GUI 以外にもコード（JSON 形式）で作り込みでき、Visual Studio Code のような統合開発ツールからデプロイすることが可能です。

> B2B シナリオの利用シーンにも対応したワークフロー を作成することができ、Power Automate よりも複雑な構成を作り込むことが可能です。


## Power Automate から Logic Apps を呼び出す


光と陰な両者、というかフロントとバック、これ、Power Automate から Logic Apps を呼び出すこともできるのです。

https://learn.microsoft.com/ja-jp/azure/logic-apps/call-from-power-automate-power-apps


下ごしらえ。my-Playground-temp という名でエクスポートしておきます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/4b41dae2-5e58-02a2-aa3f-12ecfee97bda.png)

と Power Automate 側から my-Playground-temp が発見できます。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/3386d0a8-374f-2bc5-0496-fadc189631fe.png)

発火させるで～。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/8e23dc24-233c-aa4b-9f4b-4d8f84be9ff5.png)

成功しました。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2af9f123-368a-23be-5177-5d325caf4fc2.png)

以下、Logic Apps が Running していることがご覧いただけます。これ [人事システム「COMPANY」のバッチ処理の裏(側) の話 #トラブルシューティング - Qiita](https://qiita.com/e99h2121/items/d9a83a6e47a53dcfbfbd) を思い起こすとバッチ処理を超簡単にぽちっとできるとおもうよね。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/5dc52814-fb04-2ff7-8f2b-89cc3ea81fe4.png)

## つづく

好きな技術、好きなアプリ、好きな言語はありますか。仕事で好きな技術に携われるって幸せですね。推し活がてらアドベントカレンダー Logic Apps にまつわる話のこの 3 日目、Power Automate の日陰の存在のように見えて実は功労者たる Logic Apps の小話でした。つづく。
