この記事は [Microsoft Azure Tech Advent Calendar 2022](https://qiita.com/advent-calendar/2022/microsoft-azure-tech) の 6 日目の記事です。

## 自己紹介
- [バッチサーバーFargate化プロジェクトのまとめ - Qiita](https://qiita.com/e99h2121/items/38cb0e004d51dffd2716) のようなお仕事をしてきました。
- 前職では会計開発、人事給与開発を.経て上海事業所に赴任、妊娠を機に帰任して開発所属通翻訳チームのマネジメント、産育休後、開発に復帰しての後、20年弱勤続。2021年、[Qiita Top Contributor](https://qiita.com/Qiita/items/28e1aa0967e607d145fa#contribution%E3%83%A9%E3%83%B3%E3%82%AD%E3%83%B3%E3%82%B0) 受賞、[ウーマンデブサミ](https://codezine.jp/article/detail/15285) 登壇 みたいなことをしていました。20年って何なんですかね... 2022年10月に新たに学びを求め Azure 界隈の人に。

## Azure Logic Apps 

そんな社会人もへそで茶を沸かす転職してレベル 1 駆け出しエンジニアな私なので、フレッシュな気持ちを炸裂させて気追わず等身大のことを書いていこうと思います！

この子、例えば「毎日定時に ServiceNow からレコードを取得しメールで通知」
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/7ad1daa5-726b-b71c-a171-b0129c988c6d.png)
もちろんファイル化したり、アップロードしたりを挟むことも可能です。いわゆるノーコード、ローコードなワークフローがサクッと作れるやつなのですが、これだけでももう自前でスケジューラとか開発しなくていいじゃん！という気持ち、オンプレ育ちの私の眼からは零れ落ちるものが多数。


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/110c4e99-f0e4-8950-db4b-5509f2a6e3cb.png)
Microsoft 製品はさることながら、Amazon* とも連携します。

用語: [概要 - Azure Logic Apps | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/logic-apps/logic-apps-overview#key-terms)
コネクタ一覧: [すべての Logic Apps コネクタの一覧 | Microsoft Learn](https://learn.microsoft.com/ja-jp/connectors/connector-reference/connector-reference-logicapps-connectors) 
Slack や WorkDay、ServiceNow、SAP、Oracle などなども見つかります。


## Azure Logic Apps と Power Automate 

概要は以上のようなところで、意外と見かける話題を解説してみます。この子、ワークフローがサクッと作れるやつ という語彙力のない表現ですと、製品を見比べる中で「Power Automate」との違いに説明が欲しくなりますね。Azure Logic Apps と Power Automate の違いについて公式ドキュメントを集めてみました。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2ae4d950-8743-dd8a-71f4-c734d4321cff.png)

### 公式
- 比較[「Microsoft Power Automate と Azure Logic Apps の比較」](https://learn.microsoft.com/ja-JP/azure/azure-functions/functions-compare-logic-apps-ms-flow-webjobs#compare-microsoft-power-automate-and-azure-logic-apps)

> Power Automate と Logic Apps はどちらも、ワークフローを作成できる "デザイナー第一" の統合サービスです。 どちらのサービスも、各種の SaaS アプリケーションやエンタープライズ アプリケーションと統合されます。
> Power Automate は Logic Apps の上に構築されています。 どちらも同じワークフロー デザイナーと同じコネクタを共有します。
> Power Automate を使用すると、オフィスの従業員がだれでも、開発者や IT 部門の力を借りることなくシンプルな統合 (SharePoint ドキュメント ライブラリでの承認プロセスなど) を実現できます。 Logic Apps でも、エンタープライズレベルの Azure DevOps とセキュリティ対策を必要とする高度な統合 (B2B プロセスなど) が可能になります。 ビジネスで使用するワークフローは、時間の経過と共に複雑さを増してくるものです。


- じゃあどうやって選ぶの → [サービスを選ぶ方法](https://learn.microsoft.com/ja-jp/training/modules/choose-azure-service-to-integrate-and-automate-business-processes/3-analyze-the-decision-criteria)

> 最初の質問は、GUI デザイナー ツールでワークフローを設計したいか、またはコードを記述したいかです。 デザイン優先ツールを使用する正当な理由は次のとおりです。
> ワークフローを設計する人にコーディングの経験がない。
> 後の設計者やユーザーがグラフィカルな設計を見て、ワークフローのしくみを明確に理解できる。
> または、次のような理由があれば、コード優先ツールの使用を選択できます。
> ワークフローを設計するユーザーが開発者であり、すべての処理をコードで行うことを好む。
> コーディング担当者以外にはワークフローの詳細が見えないようにする必要がある。


- [Power Automate vs Logic Apps (英語のみ)](https://learn.microsoft.com/ja-JP/microsoft-365/community/power-automate-vs-logic-apps)
- [Power Automate と Power Apps からロジック アプリを呼び出す](https://learn.microsoft.com/ja-jp/azure/logic-apps/call-from-power-automate-power-apps#export-your-logic-app-as-a-custom-connector)
    - Power Automate からロジック アプリに接続することもできます。


### つまり

- Power Automate も Azure Logic Apps も、「ワークフロー」を開発できるツールところは共通です。
- いずれでも **SaaS アプリケーションやエンタープライズ アプリケーション** を利用する際にGUI ベースで容易に構築することが可能です。
- しかし大きな違いは想定ユーザー。Power Automate は会社内の一般従業員、Logic Apps は開発者を主に想定しているとのこと。
	- Logic Apps ではワークフローを GUI 以外にもコード（JSON 形式）で作り込みでき、Visual Studio Code のような統合開発ツールからデプロイすることが可能です。
	- **B2B シナリオの利用シーンにも対応したワークフロー** を作成することができ、Power Automate よりも複雑な構成を作り込むことが可能です。
		- ただし Power Automate に比べて開発者としてのスキルが必要となる。
		- 一方 [きめ細かいコントロール - Power Platform | Microsoft Learn](https://learn.microsoft.com/ja-jp/power-platform/admin/dlp-granular-controls#connector-action-control)  など Power Platform のみでできる一般エンドユーザーを考慮した制御なども存在する。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/462d3b55-109b-597d-0a33-b6d504fe003f.png)

ということで掲題のとおり **Azure Logic Apps でバッチ処理** させたら楽しかろうと私は思うわけであります。いやバッチ処理 ってのも雑なのですが [ちょっとした任意のタイミングで回したくなる何かとか](https://qiita.com/e99h2121/items/38cb0e004d51dffd2716#%E5%88%A5%E6%A1%88)、載せ替えたらいいじゃないですかねって。



### そのほかの Tips

- **リソースの保存先が異なる**
	- Logic Apps は Power Platform とはリソースの管理元が異なっており、
Azure 側のリソースグループに構築されるリソースとなる。
- **Logic Apps は大きく従量課金タイプ（マルチテナント）とStandard タイプ（シングルテナント）タイプがある**
	- 従量課金タイプ: 他テナントのお客様と同じサーバーリソースを利用する。
	- Standard タイプ: App Service の仕組みを利用し、お客様の構築したお客様固有の環境上でワークフローを実行することや、サーバー上の細かい設定が可能。
		- Standard は比較的若い機能
			- 進化中: [Logic Apps Standard Plan updates in public preview | Azure の更新情報 | Microsoft Azure](https://azure.microsoft.com/ja-jp/updates/logic-apps-standard-plan-updates-2/)
			- [Azure Logic Apps Announcement - Fall 2021 Release - Microsoft Community Hub](https://techcommunity.microsoft.com/t5/azure-developer-community-blog/azure-logic-apps-announcement-fall-2021-release/ba-p/2911923)
- **課金も細かい**
	- [Logic Apps の価格](https://azure.microsoft.com/ja-jp/pricing/details/logic-apps/)
	- [Azure Logic Apps の使用量の測定、課金、各価格モデル](https://learn.microsoft.com/ja-jp/azure/logic-apps/logic-apps-pricing)
	- 従量課金タイプの Logic Apps はワークフローを呼び出した際のトリガー起動数やアクションの実行数によって料金が発生する。
	- Standard タイプの Logic Apps は、利用している App Service プランのリソースの利用料金が発生する。
- 同じ系譜の [MSMQ](https://learn.microsoft.com/ja-jp/dotnet/framework/wcf/samples/installing-message-queuing-msmq)、[BizTalk Server](https://learn.microsoft.com/ja-jp/biztalk/core/introducing-biztalk-server) などというものとの歴史も書こうかと思ったがまた別の機会に... 。


## 参考

https://learn.microsoft.com/en-us/training/modules/intro-to-logic-apps/4-when-to-use-logic-apps

https://twitter.com/ITSupportBlog/status/1590095453005438977?s=20


- What are your favourite Microsoft Azure learning resources?
	- [Microsoft Learn: キャリアの扉を開くスキルを身につける](https://learn.microsoft.com/ja-jp/)
	- [(73) Azure Academy - YouTube](https://www.youtube.com/c/AzureAcademy)
	- [(73) John Savill's Technical Training - YouTube](https://www.youtube.com/c/NTFAQGuy)
	- [Welcome to the Azure Community](https://techcommunity.microsoft.com/t5/azure/ct-p/Azure?WT.mc_id=AZ-MVP-5003430)
	- [AzureCrazy - Microsoft Azure Blog](https://azurecrazy.com/)
	- [Tim Warner's Website](https://techtrainertim.com/)
	- [Microsoft Azure のオススメの学習方法についてまとめてみる - Qiita](https://qiita.com/nakazax/items/9311ed4b20d045c094d4)
	- [(74) クラウドデベロッパーちゃんねる - YouTube](https://www.youtube.com/channel/UCMmRHq3E_9Hc9noZeo3zDCw)
    - [Azure定番システム設計・実装・運用ガイド 改訂新版](https://www.amazon.co.jp/dp/4296080121)

- [Microsoft Power Automateのカレンダー | Advent Calendar 2022 - Qiita](https://qiita.com/advent-calendar/2022/powerautomate)


さて、前職の記憶をもとに軽く「バッチ処理しよう」なんてかいてしまった...。が、実際は銀の弾丸などないわけで課金計算や業務想定やら複雑にチューニングは必要になるから私も途方にくれたんだよな。ともあれ可能性のひとつとして Logic Apps 楽しいよ、というところがオンプレの民にもつたわったらうれしいです。最後までお読みいただきありがとうございました！！！
