
[ブロック BLOB、追加 BLOB、ページ BLOB について - Azure Storage | Microsoft Learn](https://learn.microsoft.com/ja-jp/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs)

## ブロック BLOB

> ブロック BLOB は、大量のデータを効率的にアップロードするために最適化されています。 

## 追加 BLOB

> 追加 BLOB はブロックで構成され、追加操作用に最適化されています。 追加 BLOB を変更すると、ブロックは追加ブロック操作を介してのみ BLOB の末尾に 追加 されます。 既存のブロックの更新または削除はサポートされていません。

[AzureFunction経由でBlobにログを書き込む（AppendBlob） - Qiita](https://qiita.com/uzresk/items/b624c5b27cc417694797)


## ページ BLOB

> ページ BLOBは、ランダムな読み取りと書き込みの操作用に最適化された 512 バイトのページのコレクションです。 

> Azure 仮想マシン ディスクは、ページ BLOB によってサポートされます。 Azure には、Premium と Standard の 2 種類の永続ディスク ストレージが用意されています。 


## 参考
[BLOB Storageの概念 - Azure Storage | Microsoft Learn](https://learn.microsoft.com/ja-jp/rest/api/storageservices/blob-service-concepts)

[静的サイトにおけるAzure BLOB Storageの各BLOBの選択について - Qiita](https://qiita.com/changeworld/items/c6f4ca48f4b336c0f6ec)
