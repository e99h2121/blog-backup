2020 年からアドベントカレンダー期に毎日何かを投稿するという奇祭に参加する習わしがあり今年もゆるゆる参加してみようと思い書くもの。最近、PowerShell をせっかくなら使おうとおもっている。
[PowerShellとコマンドプロンプトの違いを簡単に解説します | MacRuby](https://macruby.info/powershell/how-powershell-differs-from-command-prompt.html)

とりあえず grep
[PowerShellでgrep (Select-String) を使う | 晴耕雨読](https://tex2e.github.io/blog/powershell/Select-String)
`Get-ChildItem -Recurse | Select-String -Pattern "REGEX" `

とか、そういうのは、以下。
[Get-Alias (Microsoft.PowerShell.Utility) - PowerShell | Microsoft Learn](https://learn.microsoft.com/ja-jp/powershell/module/microsoft.powershell.utility/get-alias?view=powershell-7.3)

`Get-Alias` をすると教えてくれる

```powershell
PS C:\workspaces> Get-Alias dir

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Alias           dir -> Get-ChildItem


PS C:\workspaces> get-Alias cd

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Alias           cd -> Set-Location
```

あと `netstat`
[PowerShell で netstat をするにはどうするの - tech.guitarrapc.cóm](https://tech.guitarrapc.com/entry/2013/08/10/220848)
を見ると `Get-NetTCPConnection` らしいのだが、以下だと怒られるんだな。

```powershell
PS C:\workspaces> get-alias netstat
get-alias : name 'netstat' を含むエイリアスは存在しないため、このコマンドは一致するエイリアスを見つけられません。
発生場所 行:1 文字:1
+ get-alias netstat
+ ~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (netstat:String) [Get-Alias], ItemNotFoundException
    + FullyQualifiedErrorId : ItemNotFoundException,Microsoft.PowerShell.Commands.GetAliasCommand
```


結論: [PowerShell 使い方メモ - Qiita](https://qiita.com/opengl-8080/items/bb0f5e4f1c7ce045cc57) 

まあ何事も慣れである。以上私が知らなかったことでした :unlock: 
