---
title: Delphi: Resource Hacker を使う（そしてバイナリファイル比較など）
tags: ツール Delphi
author: e99h2121
slide: false
---
http://www.angusj.com/resourcehacker/

https://ja.wikipedia.org/wiki/Resource_Hacker

いうまでもなく、のところとして自作のExeに対して使うことが妥当。(以下 Wikipedia 引用)
> コンパイルしたファイルに余計なリソースが含まれている場合、そのリソースを削除することで、実行ファイル等の余分なファイルサイズを削ることができる。また、アイコンを自由に置き換えることができるため、コンパイル元のソフトウェアでアイコンが指定できない場合、Resource Hackerを利用して置き換える。また、通常では変更できないプログラムの内容の変更をするために利用する。

## Resource Hacker で Project1.exe を覗いたところ

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/4d8c2b04-202c-d1c7-d4ca-e4c6cb41e583.png)


### Project1.exe サンプル 

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/4a80743c-e454-1055-a87e-fbc042d921a5.png)

```pascal
unit Unit1;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls;

type
  TForm1 = class(TForm)
    Button1: TButton;
    procedure Button1Click(Sender: TObject);
  private
    { Private 宣言 }
  public
    { Public 宣言 }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.Button1Click(Sender: TObject);
begin
  Showmessage('Hello World!');
end;

end.
```

## 他、バイナリを比較、解析するツール

https://peryaudo.hatenablog.com/entry/20110105/1294209734

https://www.softpedia.com/get/Programming/Debuggers-Decompilers-Dissasemblers/DeDe.shtml


https://freebsd.sing.ne.jp/tool/03/08/03.html

https://www.dcom-web.co.jp/lab/etc/different_bitmap

https://forest.watch.impress.co.jp/docs/news/749354.html

https://www.zynamics.com/software.html

BinDiffはIDA（アイダ）のプラグイン

https://www.hex-rays.com/products/ida/support/download_freeware.shtml

で、IDAはリバースエンジニアリングのデファクトスタンダードらしい。

https://www.atmarkit.co.jp/ait/articles/1108/22/news110.html

しかし商用利用NGとのことなので代替品を探す。

https://error4hack.com/best-ida-pro-alternatives/

https://github.com/NationalSecurityAgency/ghidra


以上メモのみ。
