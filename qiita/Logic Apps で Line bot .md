Logic Apps で Line bot が作れる。少々癖があったのでメモ。

## 準備
[Line Message (独立系発行者) - Connectors | Microsoft Learn](https://learn.microsoft.com/ja-jp/connectors/linemessageip/)
[LINE Developers](https://developers.line.biz/ja/)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/b1fe8fe1-22e4-3a93-a944-5a6fc6c60096.png)
あらかじめ準備済み

## ワークフロー

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d8466e81-6f7b-e20f-a35c-a7cc339342bc.png)

## 接続の作成

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/a331c76d-f331-209f-de84-a7d46782dd94.png)
接続名は任意。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/11136d0e-69b2-6d42-9989-06ac7d26a7b9.png)
ここのトークンとあわせて「`Bearer <Token>`」の形で API Key 欄に入れる。


## TO

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/3c7ec72b-3f1a-3eeb-95d1-6fbdfc66c8a0.png)

https://qiita.com/shinbunbun_/items/59c81f796c80bd26e3fb#%E8%87%AA%E5%88%86%E3%81%AEuserid%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%9F%E5%A0%B4%E5%90%88

User Id とはこれのこと。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/7af1ca38-78dc-9856-c063-72f6949ccc46.png)

## 送信

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/f2fc256c-d927-b9fd-6a64-6b74a032b632.png)

送信できた～
