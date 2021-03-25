ユーザーIDはデータベース上で何桁必要なものなのか、調べてみたもののまとめ。

### 考察

[IDの桁数についての話](http://underscore42rina.hatenablog.com/entry/2013/09/05/130302)
- PasswordではなくIDについての制限のメリット等の考察。`桁数制限いるの？、上限が必要な理由とかある？、６とか１４って数字は？` 等
- Passwordについては、[チョコっとプラスパスワード(IPA)](https://www.ipa.go.jp/chocotto/pw.html)

メールアドレスの長さについては、RFC5321 4.5.3で規定されている。255。
https://tools.ietf.org/html/rfc5321#section-4.5.3


### 参考

GmailユーザID [6～30 文字](https://support.google.com/mail/answer/9211434?hl=ja)
Facebook [5文字以上](https://ja-jp.facebook.com/help/105399436216001)
Apple ID [メールアドレス](https://support.apple.com/ja-jp/HT201356)
Microsoft [256 文字](https://docs.microsoft.com/en-us/windows-hardware/customize/desktop/unattend/microsoft-windows-shell-setup-autologon-username#:~:text=Values,-Table%201&text=Specifies%20the%20user%20account%20name,maximum%20length%20of%20256%20characters.)
[Linuxにおいて、ユーザのアカウントとパスワードの文字列長の制限はいくつでしょうか？（ポリシーをお聞きしているのではありません）](https://q.hatena.ne.jp/1116521370)
