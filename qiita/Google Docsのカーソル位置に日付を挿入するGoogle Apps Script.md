Google Docsの、Tools内、Script editorを選択します。スクリプトエディターが開きます。

## Google Apps Script (GAS)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/c5692481-f77a-3e6d-6b3e-b147e789232a.png)

以下をスクリプトとして保存したら、Google Docs自身を一旦閉じ、再度開きます。


```javascript
/**
 * onOpen functionは Google Docsを開いた際に自動的に実行される。
 * 詳細は以下
 * 
 * Extending Google Docs developer guide:
 *     https://developers.google.com/apps-script/guides/docs
 *
 * Document service reference documentation:
 *     https://developers.google.com/apps-script/reference/document/
 */
function onOpen() {
  // 「ユーティリティ」メニューを追加する。サブメニューには「Insert Date」
  DocumentApp.getUi().createMenu('ユーティリティ')
      .addItem('Insert Date', 'insertAtCursor')
      .addToUi();
}

/**
 * 現在のカーソルに日付を挿入する
 */
function insertAtCursor() {
  var cursor = DocumentApp.getActiveDocument().getCursor();

  if (cursor) {
    // カーソル位置へのテキストの挿入。挿入が null を返した場合は
    // カーソルのある要素がテキストの挿入を許可していないことになる
    var date = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd"); // "yyyy-MM-dd'T'HH:mm:ss'Z'"
    var element = cursor.insertText(date);
    if (element) {
      element.setBold(true);
    } else {
      DocumentApp.getUi().alert('このカーソル位置にテキストを挿入できません。');
    }
  } else {
    DocumentApp.getUi().alert('ドキュメント内のカーソルが見つかりません。');
  }
}
```

メニューに `ユーティリティ` > `Insert Date` が表示されていれば完成です。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/cd9a1c55-8f2f-8d4a-04b3-7b396a2b260c.png)


## 参考

https://webapps.stackexchange.com/questions/58965/is-there-a-way-to-insert-today-s-date-into-a-google-docs

上記を参考にしています。
