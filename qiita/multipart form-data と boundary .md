サンプル: 
https://developer.mozilla.org/ja/docs/Web/HTTP/Methods/POST#:~:text=multipart/form%2Ddata%20%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%82%BF%E3%82%A4%E3%83%97%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%81%A7%E3%81%99%E3%80%82

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/14243772-3981-1359-52f7-2a4a026e59aa.png)

```
POST https://httpbin.org/post
Content-Type: multipart/form-data;boundary="HOGEHOGE"

--HOGEHOGE
Content-Disposition: form-data; name="field1"

value1
--HOGEHOGE
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--HOGEHOGE--
```


結果:
```
HTTP/1.1 200 OK
Date: Tue, 20 Jun 2023 21:29:00 GMT
Content-Type: application/json
Content-Length: 493
Connection: close
Server: gunicorn/19.9.0
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true

{
  "args": {},
  "data": "",
  "files": {
    "field2": "value2"
  },
  "form": {
    "field1": "value1"
  },
  "headers": {
    "Accept-Encoding": "gzip, deflate",
    "Content-Length": "174",
    "Content-Type": "multipart/form-data;boundary=\"HOGEHOGE\"",
    "Host": "httpbin.org",
    "User-Agent": "vscode-restclient",
    "X-Amzn-Trace-Id": "Root=1-64921a1c-3d90ffc007917d634b21b54d"
  },
  "json": null,
  "origin": "106.72.201.193",
  "url": "https://httpbin.org/post"
}
```

テストはここでできる。

https://httpbin.org/#/HTTP_Methods/post_post
