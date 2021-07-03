[githubを二段階認証に変更後に起こるエラーの対処方法](https://qiita.com/sayama0402/items/670b6b650ebdd8680a0b) 
[GitHubに二段階認証を設定した後にGit操作できない時の解決策](https://qiita.com/kitoko552/items/3f45de6c876c638b690d)

でも解決しなかった点。

## git clone ができない

```
C:\git\myrepo-doc>git clone https://github.com/myrepo-doc/doc
Cloning into 'doc'...
remote: The `myrepo-doc' organization has enabled or enforced SAML SSO. To access
remote: this repository, you must re-authorize the OAuth Application `Git Credential Manager`.
fatal: unable to access 'https://github.com/myrepo-doc/doc/': The requested URL returned error: 403
```

## 解決策
https://stackoverflow.com/questions/66475833/how-to-re-authorize-the-oauth-application-git-credential-manager

> Open Credential Manager in Windows and delete the existing credential for github.com

Windows 10 における 資格情報マネージャ を開く。
`コントロール パネル > ユーザー アカウント > 資格情報マネージャー`

Windows 資格情報の以下を削除する
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/fa6a7b7a-2aae-093a-59a9-e791ce8fb316.png)
