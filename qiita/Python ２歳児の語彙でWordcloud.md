完成品
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/fe7ee166-d0f6-47e9-80d4-0cd37fb0f1a2.png)


## 用意するもの

- `pip install wordcloud`
- フォントファイル、以下では `mini-wakuwaku.otf` を使用した。
    - http://mini-design.jp/font/mini-wakuwaku.html
    - https://photoshopvip.net/japanese-kawaii-free-fonts
- **イヤイヤする２歳児を観察し発言を耳コピ** 


```wordcloudtest.py
from wordcloud import WordCloud

text = "やだ, \
       やだ,\
       ばす,\
       ちがうの,\
       ばす,\
       やだ,\
       こっち,\
       こっち,\
       やだ,\
       ぱとかー,\
       こっち"

wordcloud = WordCloud(background_color="white",
    font_path="./TakaoPGothic.ttf",
    width=800,height=600).generate(text)

wordcloud.to_file("./wordcloud_sample.png")

```

## 参考記事

工夫はない。初心者向け。いくらでも凝ったことをやろうかなと思えるが、オシャレなものは既に色々あったので、調査のみ。

https://qiita.com/str32/items/4539e417a9cb333abd52

https://qiita.com/kiyokiyo_kzsby/items/554c571404f3f9844aaf

https://qiita.com/uminchu987/items/07baa1a354cf96d2564b

https://qiita.com/Kuma_T/items/ec0d97bda154407cfccc

オマケ: 

https://github.com/TheRaphael0000/nge_wordcloud

*[他、スクレイピング注意事項](https://qiita.com/nezuq/items/c5e827e1827e7cb29011)


## まとめ

非常にネタみが強くなってしまったが、Wordcloud って、本来の用途以上にもはや芸術なのではと思うことが多々ある...。今回のソースではひとまず初心者の初心者でもこのくらいのかわいいお遊びができるというお話でした。ちなみに上の子（４歳女子）はこんなです。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/781843a9-9dee-ccfb-44ca-da4178b00ce8.png)

以上お楽しみいただければさいわいです。
