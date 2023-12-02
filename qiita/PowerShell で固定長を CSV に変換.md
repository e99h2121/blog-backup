自分のためにメモ

## 固定長を CSV に変換
```
$fileContent = Get-Content -Path 'C:\workspaces\test\FixedLength.txt'
$csvData | Set-Content -Path 'C:\workspaces\test\output.csv'
$csvData = $fileContent | ForEach-Object {
    $field1 = $_.Substring(0, 10).Trim()
    $field2 = $_.Substring(10, 10).Trim()
    $field3 = $_.Substring(20, 10).Trim()
    "$field1,$field2,$field3"
}
$csvData | Set-Content -Path 'C:\workspaces\test\output.csv'
```


## サンプル

```TXT:固定長
1234567890ｱｲｳｴｵｶｷｸｹｺAAAAAAAAAA
1234567890ｻｼｽｾｿﾀﾁﾂﾃﾄAAAAAAAAAA
1234567890ﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎAAAAAAAAAA

```


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/b2206b98-c2e1-2082-a29b-5653744934c7.png)


![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/44842515-4dd7-46ea-6465-607dee7b8339.png)


以上です～
