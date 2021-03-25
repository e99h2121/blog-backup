[pythonを三行でセグフォらせる](https://qiita.com/autotaker1984/items/a8ba955acdc81c907b3d)
[pythonを2行でセグフォらせる](https://qiita.com/sh1ma/items/a6dd1bcca0d9725e7e67)
[pythonを1行でセグフォらせる](https://qiita.com/MysteriousMonkey/items/0e389ccdc12988dd4263)
[C言語で16文字でセグフォらせる](https://qiita.com/yasuo-ozu/items/ddc5d3e8e4a97eaa470c)
[Pythonを33文字でセグフォらせる](https://qiita.com/kanimum/items/95a45d8be31ef75d4332)
[Rustを5行でセグフォらせる](https://qiita.com/YoshiTheChinchilla/items/b9f4a6e92266e8ec9d3d)
[C 言語で 5 文字でセグフォらせる](https://qiita.com/zk_phi/items/bd59111e677e6d0e5720)
[6行でJavaをセグフォらせる](https://qiita.com/gazeuse1442/items/3ab17cf72ade90090981)

を見て、たまたまそこにDelphiがあったので適当に書いたが
[Delphi で最少のソースコードを書いてみる](https://qiita.com/ht_deko/items/c81a8bacd7e299c45340)を見て反省して書き直し。


```Project.dpr
program Project1;
uses Classes, Forms; {$R *.res}
var list: TStringList;
begin Application.Initialize; list.Delete(-1); Application.Run;
end.
```

これでいいみたい。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/35b1d279-bcbc-5235-8fd2-4f324bb12c76.png)



## 以下初回作
```Unit1.pas
procedure TForm1.FormCreate(Sender: TObject);
var
 data:array[0..0] of string; i:integer;
begin
  for i:=0 to 1 do begin showmessage(data[i]); end;
end;
```
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/bdb7a58c-c140-7db3-fefa-baff05f21926.png)

[Delphi 言語 / Object Pascal について](https://qiita.com/pik/items/c34ca15bffc8f09127e6)


