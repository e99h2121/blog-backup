話の結論は [「いいえ」と「キャンセル」の違いって？](https://www.itmedia.co.jp/news/articles/1206/08/news003.html)
となるのだが以下小話まじえて説明です。
ここに4つ実行ボタンがある。センスの欠片もない画面だが許してください。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/c5296d93-2009-fbc7-cadd-decd3b7f59f5.png)

## 実行ボタン1

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/200ad230-b1cf-69e6-9d04-a07f5b943f43.png)

```pascal
procedure TForm1.Button1Click(Sender: TObject);
begin
  if MessageDlg('サンプル'+ #13#10 +'です。実行してよろしいですか？', mtWarning, [mbOK, mbNo, mbCancel], 0) <> mrOk then
  begin
    showmessage('Cancelしました');
    exit;
  end;
  Showmessage('実行しました');
end;
```
というようなことがやりたいとする。


## 実行ボタン2

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/7bfefbb8-0dd4-baac-7862-621429c62f26.png)

```pascal
procedure TForm1.Button2Click(Sender: TObject);
begin
  if MessageDlg('サンプル'+ #13#10 +'です。実行してよろしいですか？', mtWarning, [mbOK, mbCancel], 0) <> mrCancel then
  begin
    showmessage('実行しました');
  end;
end;
```
別パターン。

## 実行ボタン3

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/32ba95ab-fd77-e08c-6fa4-f58fd581b2fc.png)

```pascal
procedure TForm1.Button3Click(Sender: TObject);
begin
  if MessageDlg('サンプル'+ #13#10 +'です。実行してよろしいですか？', mtWarning, [mbOK, mbNo, mbCancel], 0) = mrOK then
  begin
    showmessage('実行しました');
  end;
end;
```
これも別パターン。


## 実行ボタン4 (アンチパターン)

問題のパターンです。以下ソースは罠なので注意ください。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/66070b99-2ca4-65c1-68e8-de8b1ba71c4d.png)

```pascal
//罠
procedure TForm1.Button4Click(Sender: TObject);
begin
  if MessageDlg('サンプル'+ #13#10 +'です。実行してよろしいですか？', mtWarning, [mbOK, mbNo], 0) <> mrNo then
  begin
    showmessage('実行しました');
  end;
end;
```
2 や 3 と何が違うのか？というと `mrCancel` が画面上からなくなり `mrNo` になっているだけに見える。
CancelもNoも同じじゃないかと感じそうだがここで事故が起こる。


### 事故の再現映像
![test.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/85e21949-3276-fb82-f82c-b2562b709145.gif)

### ソースは一見「実行ボタン2」「実行ボタン3」と似ているが
![test.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/14f0428b-3474-1449-c528-ee459abd4dca.gif)
![test.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/3a7691c7-397d-f496-d4af-db6a4c9e0b96.gif)

こちらはCancelされるんですね。
Delphiの `dialog.pas` の中身を見るともう少し紐解けるのですがいったんここは別の機会に譲りつつ

```pascal
function CreateMessageDialog(const Msg: string; DlgType: TMsgDlgType;
  Buttons: TMsgDlgButtons): TForm;
```


つまりは[「いいえ」と「キャンセル」は明確に違う](https://www.itmedia.co.jp/news/articles/1206/08/news003.html)。本来下のような用途。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/687bd86d-11b1-0d1a-8e24-26bb0ae7e501.png)
> つまりこの場合の「はい」と「いいえ」は、表面上は文書を保存するかどうかを確認しているのですが、どちらも暗黙的に「アプリを終了する」という事を意味しています。これに対し「キャンセル」は、メニューから「アプリの終了」を“選択した事自体”をキャンセルしますので、何もしません。したがって、アプリも終了しません。


この誤解により昔に大事故があった（右上のｘボタンを押したのに処理が...）ようなので確かめてみました。以上参考になればさいわいです。



