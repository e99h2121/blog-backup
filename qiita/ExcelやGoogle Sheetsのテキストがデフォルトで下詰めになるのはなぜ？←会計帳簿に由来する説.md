表題の素朴な疑問をたどってみた小話メモです。

## 結論

MSのフォーラムからは「そういうものだから」だが、StackExchangeにて
[tables - Why spreadsheets (like Excel or Google sheets) align text at the bottom of cells? - User Experience Stack Exchange](https://ux.stackexchange.com/questions/140152/why-spreadsheets-like-excel-or-google-sheets-align-text-at-the-bottom-of-cells) で以下からとの説。

> なぜなら、これはテーブルのデフォルトの垂直配向だからです。W3.orgのSpecs for Visual Formatting Modelや、MDNのVertical Alignを参照してください。

https://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align

https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align




## 議論

以下、そう思う。

https://twitter.com/ixkaito/status/1448205159603978241?s=20

https://twitter.com/Feisas/status/2180908845?s=20

https://twitter.com/____rina____/status/1263030393848033280?s=20

https://qiita.com/hachi8833/items/81fed08b8da22468d0bc


## MSのフォーラム

疑問は、こと日本だからかと思いきやそんなこともなかった。以下DeepL翻訳
[Why are spreadsheet cells bottom-aligned by default? - Microsoft Community](https://answers.microsoft.com/en-us/msoffice/forum/all/why-are-spreadsheet-cells-bottom-aligned-by/96afd0f7-c086-4e9d-98d7-c46e3389c1f7)

### 質問

> 私が最初に遭遇したのはGoogle Sheetsのドキュメントで、ある行のあるセルには複数の行があり、行の少ない他のセルは下に並んでいるため、大きなセルが見えるページからはみ出しているか、十分に近くで見ていないと、セル内に何もないように見えるというものでした。その後、これはデフォルトで、Excelも同じことをしているとの話を読みました。
> なぜでしょうか？
> このロジックには理由がなく、不愉快だし、問題が生じる可能性があります。

### ボランティアの回答1

>> この論理には理由がなく、不愉快であり、問題があると思います。

> 上記の発言は少し不公平です。選択肢の1つはデフォルトであるべきで、ある人には合っていても、他の人には合わないのですから、誰がどうあるべきかを言いましょう。

> Excelの場合、「ホーム」リボンの「整列」ブロックから選択できます。縦方向は上、中、下、横方向は左、中央、右と設定できます。

### 回答2

> いつも全く同じ疑問を持っていました。なぜ？これはどういう理屈なんだろう？
> 私はこれを見つけた： https://www.quora.com/Why-are-cells-in-Microsoft-Excel-aligned-at-the-bottom-by-default

> どうやら、これは会計上の要求事項のようです。

## Quora の質問

なるほどということで以下。

https://www.quora.com/Why-are-cells-in-Microsoft-Excel-aligned-at-the-bottom-by-default

### UI的に考えてのこと

> **セルの値を上、中央、下のどれに揃えるかは、一見恣意的に見えるかもしれませんが、UI的に考えてのことなのでしょう。** 例えば、テキストにアンダースコアを付けた場合、セルの値を下以外に揃えたら「正しい」ように見えるでしょうか。また、Lotus 1-2-3のワークブックをExcelで開いて印刷した場合、Lotus 1-2-3で開いて印刷した場合と同じように見えるでしょうか？

### 直し方

> 37年前、Excelが初めて導入されたとき、UI担当者が下した「恐ろしい」決定をどのように乗り越えればいいのでしょうか。そのための良い方法の1つは、セルの標準スタイルを変更することです。ホーム]-[セルスタイル]-[標準]リボンアイテムを右クリックし、表示されたダイアログから[修正]を選択します。表示されたダイアログの「書式」ボタンをクリックし、「整列」を選択して、お好みの垂直方向の整列を選択します。この設定は、ワークブック全体に適用されます。

### デフォルト設定の直し方

> この設定を新しく作成したワークブックにも適用させたい場合はどうしたらよいでしょうか。その場合、Book.xltxと名付けたワークブックで通常スタイルを変更し、Excelがそれを見つけることを期待する場所に格納します。問題は、MicrosoftがExcel 2010以降のExcelでこのファイルを見つけることを非常に難しくしていることです。以前はファイル...新規作成...ダイアログが使用できましたが、現在は全く別のワークブックが表示され、新しく作成されたファイルを変更することはできません。代わりに、CTRL + Nを使用して、変更したテンプレートを使用して新規作成コマンドを起動する必要があります。それでは、変更を加え、XLSTARTフォルダーにBook.Clydeとして保存してください。

> Bill Jelenは、彼のウェブサイトのExcel TipsセクションでBook.xltxの作成について、これらのテンプレート・ファイルでできることについての完全な議論も行っています。一読の価値ありです。

端的には、解決策としてはテンプレートとして保存せよとの話。由来は少々消化不良... 。

関連

https://phys-edu.net/wp/?p=25239



## StackExchange

そこへ以下。
[tables - Why spreadsheets (like Excel or Google sheets) align text at the bottom of cells? - User Experience Stack Exchange](https://ux.stackexchange.com/questions/140152/why-spreadsheets-like-excel-or-google-sheets-align-text-at-the-bottom-of-cells)

> なぜなら、これはテーブルのデフォルトの垂直配向だからです。[W3.orgのSpecs for Visual Formatting Model](https://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align)や、[MDNのVertical Align](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align)を参照してください。



https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align


### 根拠

> The following values only have meaning with respect to a parent inline element, or to the strut of a parent block container element.

> In the following definitions, for inline non-replaced elements, the box used for alignment is the box whose height is the 'line-height' (containing the box's glyphs and the half-leading on each side, see above). For all other elements, the box used for alignment is the margin box.

> baseline Align the baseline of the box with the baseline of the parent box. If the box does not have a baseline, align the bottom margin edge with the parent's baseline.

> **baseline ボックスのベースラインを親ボックスのベースラインに合わせます。ボックスがベースラインを持たない場合、底部マージンのエッジを親のベースラインに合わせます。**

### 解説

> なぜこのようなデフォルトにしたかというと、各セルの終わりを考慮することで、隣接するコンテンツが読みやすくなるからです（少なくともかつてはそうでした）。これは、古い会計帳簿に由来するもので、以下の例を見ると、左の列（複数行）のコンテンツのベースラインに金額が表示されていることがわかります。

> ただし、この動作は各エージェント依存であり、ブラウザ、プログラミング言語、ソフトウェアが好きなようにデフォルトを宣言できることに留意してください。例えば、Latexは中央揃え、古いMS DOSソフトは上揃えにするのが普通です。

画像引用: 
![](https://i.stack.imgur.com/BrbS5.jpg)


> なるほど、**スプレッドシートのメインタスクは会計だから** ということで、より納得がいきました

> **Google Sheetsは定義上、ウェブアプリケーションであり、Googleは常に製品をW3に標準化しています。Excelもおそらく古い会計帳簿に基づいて同じルートを取ったのでしょう。** 一種類の整合性を選択しなければならなかったので、既にある程度の検証を受けたもの（古い帳簿やW3）を選択したのでしょう。WWW以前のテーブルはトップアライメントだったので、Webの文化的影響は多くのGUIの決定に影響を与えたようです。

フォーラム上の説からでした。以上です。
