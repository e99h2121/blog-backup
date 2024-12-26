[O'Reilly Japan - Web API: The Good Parts](https://www.oreilly.co.jp/books/9784873116860/) の読書メモです。

![](https://www.oreilly.co.jp/books/images/picture_large978-4-87311-686-0.jpeg)


日本語に準拠しているというか、日本語にも親切だなと読んでいたら著者は日本の方 水野 貴明 さんという方であった。
[プログラミング歴40年 ソフトウェア開発者 水野さんの仕事の流儀 - Tech Team Journal](https://ttj.paiza.jp/archives/2023/04/25/5518/)
[mizuno_takaakiの日記](https://takaaki.hatenablog.com/)

端的には:
- 初めて Web API の設計をするなら読んでおくと良し
- 初めて Web API を扱うならその流儀を知るために読んでおくと良し

と思いました。

### 第1章 Web APIとは何か
- Web APIを公開していないなら、すぐにその公開を検討しよう
- Web APIを美しく設計しよう
- RESTという言葉にこだわりすぎないようにしよう

### 第2章 エンドポイントの設計とリクエストの形式
- 覚えやすく、どんな機能を持つかがひと目でわかるエンドポイントにしよう
- 適切な HTTP メソッドを利用しよう
- 適切な英単語を利用し、単数形、複数形にも注意しよう
- 認証には OAuth 2.0 を使おう

### 第3章 レスポンスデータの設計
- 多くのAPIで同じ意味に利用されている一般的な単語を用いよう
- なるべく少ない単語数で表現しよう
- 複数の単語を連結する場合、その連結方法はAPI全体を通して統一しよう
- 変な省略形は極力利用しないようにしよう
- 単数形／複数形に気をつけよう
- JSON、あるいは目的に応じたデータ形式を採用しよう
- データを不要なエンベロープで包まないようにしよう
- レスポンスをできるかぎりフラットな構造にしよう
- 各データの名前を簡潔で理解しやすくし、適切な単数複数を用いよう
- エラーの形式を統一し、クライアント側でエラー詳細を機械的に理解可能にしよう

### 第4章 HTTPの仕様を最大限利用する
- HTTPの仕様を最大限利用し、独自仕様の利用を最低限にとどめよう
- 適切なステータスコードを用いよう
- 適切な、なるべく一般的なメディアタイプを返そう
- クライアントが適切なキャッシュを行えるように情報を返そう

### 第5章 設計変更をしやすいWeb APIを作る
- API のバージョンの更新は最低限にとどめ、後方互換性にも注意しよう
- API のバージョンはメジャーバージョンを URI に含めよう
- API の提供終了時はすぐに終了するのではなく最低 6 ヶ月公開を続けよう


### 第6章 堅牢なWeb APIを作る
- 個人情報など特定のユーザー以外に漏洩したくない情報がある場合はHTTPSを使おう
- XSS、XSRF など通常のウェブと同様のセキュリティだけでなくJSONハイジャックなどAPI特有の脆弱性に気を配ろう
- セキュリティ強化につながる HTTP ヘッダをきちんと付けよう
- レートリミットを設けることで一部のユーザーによる過度のアクセスによる負荷を防ごう

### その他
- https://apiblueprint.org/


## 参考

[Web API: The Good Partsを読んだまとめ #設計 - Qiita](https://qiita.com/mitsuya/items/e33d5ac202b41447cfec)
[Web API The Good Partsを読んだのでまとめる #設計 - Qiita](https://qiita.com/ryosuk/items/36d5b5e0d1c03d099193)
[【Oreilly】Web API The Good Parts](https://zenn.dev/aew2sbee/articles/oreilly-web-api-the-good-parts)
[Web API The Good Partsを読んだ感想 | フューチャー技術ブログ](https://future-architect.github.io/articles/20221110a/)


以上です～
