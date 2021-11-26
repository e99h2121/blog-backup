ごく簡単な説明目的で記載しています。

## ファイルに保存

```sample.pas
procedure TForm1.Button1Click(Sender: TObject);
var
  MyText: TStringlist;
begin

  MyText:= TStringlist.create;
  try
    MyText.Add('line 1');
    MyText.Add('line 2');
    MyText.SaveToFile('E:\filename.txt');
  finally
    MyText.Free
  end; {try}
end;

procedure TForm1.Button2Click(Sender: TObject);
var
  MyText: TStringlist;
  dt:TDateTime;
begin
  dt:=Now;
  MyText:= TStringlist.create;

  try
    MyText.Add(DateTimeToStr(dt));
    MyText.SaveToFile('E:\filename.txt');
  finally
    MyText.Free
  end; {try}
end;
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/41db2c0d-a6aa-e0a4-f6d5-1a7900cf3eea.png)


## 参考

https://www.ipentec.com/document/delphi-get-now-datetime


以上です。
