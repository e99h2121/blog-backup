AutoItツールを自分用に使ってみる



## メリット 
[なぜautoitを使うのか…](http://blogs.yahoo.co.jp/nullpage_vwxyz/44110527.html)

- 良く文書化されている -- 「Autoitは.chmファイルとオンラインの両方で詳しい資料を提供しています。また多くの利用例もあり、これをコピーして実行する事は理解を助けます。またAutoItウェブサイトには親しみ易いフォーラムがあって第三者からの支援を容易に受ける事が出来ます。」
- USBメモリに入れていつでもインストール無しで利用できる -- 「インストールする事でシステムを破壊する事は有りません。また、どこのPCにもオートメーション環境を持ち歩く事が出来ます。」
- 標準的なエディタ・統合開発環境を持っている -- 「AutoitはSciTeエディタを使ってそれをAutoit用に設定します。AU3ファイルの編集や作成を簡単にする完全なIDE環境を提供します。」
- スクリプトをexeファイルにする事が出来る -- 「これによりテスト自動化機能を単体で利用できる小さなユーティリティの部品にすることができます。そしてAutoitでGUI部分だけを別に作る事によりこれらの部品を組み合わせるだけでいろいろな事が簡単にできるようになります。」
- Basicとそっくりである -- 「これは多くの人にとってプラスになる事が多いはずです。Basicは初心者でも覚えやすくとっつきやすい事は経験的に判っています。暫くAutoitプログラミングのブランクが有ったとしてもその書き方や感覚を忘れてしまう事を心配する必要がありません。例えばPerlGUITestを学んで使い込むと、Perlのプラス面が多い事は良く解りますが、それよりもとにかく直ぐにはじめやすい事が重要です。」


## セットアップ 
### ダウンロード
[AutoIt](http://www.download3k.com/Install-AutoIt.html)
[AutoIt_v3](http://www.autoitscript.com/autoit3/downloads.shtml)

### AutoItMacroGenerator02.exeのダウンロード

[AutoIt_v3](http://www.autoitscript.com/autoit3/downloads.shtml)

- AutoIt Script Editorをダウンロード。%AutoIt3%\SciTE\AutoItMacroGenerator以下にexeがダウンロードされる



## 簡単な利用方法
- AutoItMacroGeneratorを起動し、キー操作をスクリプトに変換する
- Helpの参照(かなり充実している)
- Sciteのヘルプ
- AutoIt3フォルダ以下に多くのSampleがある。 --　Examples,Extras,Include
- Au3Info.exeを利用してコンポーネント情報を調べる。例)ContolIdやWindowNameなどはこのexeを実行することで把握することが出来る


## AutoItでできること
- キー操作記録
- キーボード操作 [http://www.autoitscript.com/autoit3/docs/functions/Send.htm キーの一覧]
- マウス操作

※画面の操作を自動記録するには、SciTE ScriptEditorより「ツール」→「AU3Recorder」を選択し録画ボタンを押すことにより、スクリプトを自動生成してくれます。

- コンポーネント操作
- ユーザー定義関数の作成
- 変数宣言
- EXEファイルの作成-AutoItが入っていないクライアントでも*.au3ファイルをコンパイルしてexe化することで実行できる。

## スクリプト例

- ログインしてF3で終了

```
; Test


; Prompt the user to run the script - use a Yes/No prompt (4 - see help file)
$answer = MsgBox(4, "AutoIt Example", "This script will Execute the Company_U.exe and login by all/all and then quit.  Run?")


; Check the user's answer to the prompt (see the help file for MsgBox return values)
; If "No" was clicked (7) then exit the script
If $answer = 7 Then
    MsgBox(0, "AutoIt", "OK.  Bye!")
    Exit
EndIf


; Run the TEST.bat
Run("TEST.bat")


; Wait for TEST.exe become active
WinWaitActive("ログイン")

Send("all")

Send("{TAB 1}")

Send("all")

Send("{F1}")

Sleep(500)

Send("{ENTER}")

; Now quit by sending a "close" request to TEST
Send("{F3}")

Send("{ALT}&{y}")

; Finished!
```

- メニューの選択方法
 `WinMenuSelectItem($WindowTitle,"Rumix Banner","ファイル(&F)","CSVファイルに書き出す(&C)...")`

- ComboBoxの選択方法
 `ControlCommand(WindowTitle,"Rumix Banner","ComboBox1","SelectString",$String)`

- OKボタン押下方法
 `ControlClick($WindowTitle, "", "[CLASS:Button; TEXT:OK; INSTANCE:1]")`

- Hundleの取得方法
 `$hCombobox = ControlGetHandle($WindowTitle,"",$ComboControlId)`

## 関連
- [AutoItFUNCTION説明のページ](http://www.autoitscript.com/autoit3/docs/functions.htm)

- [AutoHotKey](http://lukewarm.s101.xrea.com/)　…　AutoItよりも簡単らしい。

