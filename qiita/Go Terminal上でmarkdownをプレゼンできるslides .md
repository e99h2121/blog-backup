GitHub上で流行っていたもののお試し。

http://maaslalani.com/slides/

https://github.com/maaslalani/slides

![gif](http://maaslalani.com/slides/assets/slides.gif?raw=true)

## インストール

あらかじめ golang が必要。

`go install github.com/maaslalani/slides@latest` 

```
git clone https://github.com/maaslalani/slides.git
cd slides
go install
```


## 使い方

`slides sample.md`
![slides.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/a5377b7f-baef-c9f0-e3f2-692080a546f7.gif)



```sample.md
# page1 

自己紹介


---

# page2 

はじめまして


---

 `---` で区切るだけで改ページ。

```markdown
# Slide 1
Some stuff


---

1. 表にもできる

| Tables | Too    |
| ------ | ------ |
| Even   | Tables |

---

改行は LF でないといけないようだ。

---

# That's it.

Thank you!!

```

＊改行は LF でないと改ページしてくれないようだ。

簡単ですが以上です。
