https://community.dynamics.com/blogs/post/?postid=7ae27d87-888e-45ca-85b8-6202e9c2feea

Dynamics 365 Business Central and integration workflows: why Azure Logic Apps are often a better choice than Power Automate

Dynamics 365 Business Centralと統合ワークフロー：Power Automate よりも Azure Logic Apps の方が良い場合が多い理由 の要点のざっくり翻訳です。

## 元記事

https://demiliani.com/2022/10/03/dynamics-365-business-central-and-integration-workflows-why-azure-logic-apps-are-often-a-better-choice-than-power-automate/


> 私はここで、「統合には必ず Azure Logic Apps を使う必要がある」と言いたいわけではありません。Power Automate が適切なワークフローシナリオもあれば、Power Automate の使用は乱用であり、アーキテクチャーエラーである場合もあります。

> このトピックに関する私の2つの意見：ローコードワークフローで統合タスクを解決しようと考えている場合、いくつかの質問をしてみてください：

> このワークフローはユーザー中心で、ユーザーによって実行されるのか？Power Automateが選択できるだろう。
> このワークフローは、信頼性が必要で、ユーザーコンテキストなしで実行されるサイレントプロセスですか？Logic Appsが適しています。
> 信頼性が高く、スケーラブルでセキュアな統合ワークフローが必要ですか？Logic Appsが最適です。
ミッションクリティカルで、高スループット、低レイテンシーのワークフローが必要ですか？Power Automateをお忘れなく。Logic Appsは良い選択だが、多くの場合、フルコードのアプローチの方が良い（Durable Functionsはこのために生まれた。  ).


[Azure における統合と自動化のプラットフォームの選択 | Microsoft Learn](https://learn.microsoft.com/ja-jp/azure/azure-functions/functions-compare-logic-apps-ms-flow-webjobs#next-steps)

>Power Automate と Azure Logic Apps はどちらも、ワークフローを作成できる "デザイナー第一" の統合サービスです。 どちらのサービスも、各種の SaaS アプリケーションやエンタープライズ アプリケーションと統合されます。

>Power Automate は、Azure Logic Apps プラットフォーム上に構築されています。 どちらも同様のワークフロー デザイナーとコネクタを提供します。

>Power Automate を使用すると、オフィスの従業員がだれでも、開発者や IT 部門の力を借りることなくシンプルな統合 (SharePoint ドキュメント ライブラリでの承認プロセスなど) を実現できます。 Logic Apps でも、エンタープライズレベルの Azure DevOps とセキュリティ対策を必要とする高度な統合 (B2B プロセスなど) が可能になります。 ビジネスで使用するワークフローは、時間の経過と共に複雑さを増してくるものです。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/eb3c3c87-5743-b8fe-82f1-8d06180b7c9c.png)


## つづく

推し活の続き。Power AutomateよりもAzure Logic Appsの方が良い場合が多い理由 てな記事の小ネタでした。つづく。
