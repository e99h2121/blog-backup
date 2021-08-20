[GitLabでmasterへのコミットを防ぐ - Qiita](https://qiita.com/no-use-kuro/items/810895688d508f699ae9) をおこなったうえで、[GitHub Issueを用いた開発手順](https://zenn.dev/ogakuzuko/articles/2250f7c7331106) と同様、手順を整理したもの。

## Issueの作成
1. GitLab上の該当プロジェクトのタブからIssuesを選択する。
2. New issueを選択する。
3. Issueのタイトルと内容を記入してCreate issueを押す。（Issueが追加される）

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/270c719a-4cc1-2d2f-78af-979407ca1515.png)


## Issueを用いた修正手順

### 登録されているIssueから新たにブランチを作成する

`Create merge request` ボタンから作成できる。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/11d33b5f-6738-cc25-906e-310da160fa8c.png)

### 作成したブランチに移動する

### 修正する

コミット `git commit -m "refs #issue番号 コミットメッセージ `

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/8c3627ce-46b7-7099-6364-94c7d2d6b534.png)

対応するissue番号を付け加えることで、そのIssueに関するコミットだということを関連付けることができる。

### 作業が完了したらgit pushする

作業が全て完了したらMerge Request（Pull Request）を作成し、リモートのmainブランチにmergeする。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d1356102-fb1e-c901-a4f6-3e85756066db.png)

上の通り、`Merge`.。

ひとまず簡単に以上です。
