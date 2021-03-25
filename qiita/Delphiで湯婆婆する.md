元ネタ: [Javaで湯婆婆を実装してみる](https://qiita.com/Nemesis/items/c7192a7c510788d2cba2)

## Delphi婆婆
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/b4a75c0c-eac1-880f-3bec-f12827354788.png)

## 中身
```yubaba.pas
procedure TForm1.Button1Click(Sender: TObject);
var
  len, pos :Integer;
  str, org :WideString;
begin
  org := Edit1.Text;
  len := Length(org);

  if MessageDlg('ふん。' + org +'というのかい。', mtConfirmation, [mbYes, mbNo], 0) = mrYes then
  begin
    pos := random(len);
    str := Copy(org, pos, 1);
    MessageDlg('贅沢な名だね。今日からお前の名前は ' + str +' だよ。', mtWarning, [mbYes], 0)
  end;

end;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1ed54e8a-b273-e9fa-dd1b-104b63802f3f.png)

はしょり気味婆婆。

## 参考
http://kwikwi.cocolog-nifty.com/blog/2005/12/delphi_2bd5.html

https://www.petitmonte.com/bbs/answers?question_id=5641


