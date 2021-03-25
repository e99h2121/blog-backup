<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">賢そうな人って頭良さそうですよね。 <a href="https://twitter.com/hashtag/%E5%B0%8F%E6%B3%89%E9%80%B2%E6%AC%A1%E9%83%8E%E6%A7%8B%E6%96%87?src=hash&amp;ref_src=twsrc%5Etfw">#小泉進次郎構文</a> <a href="https://t.co/8KhJVxyeFM">pic.twitter.com/8KhJVxyeFM</a></p>&mdash; 小泉進次郎構文bot (@NanimoBot) <a href="https://twitter.com/NanimoBot/status/1354011479242993664?ref_src=twsrc%5Etfw">January 26, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>




## 作った (この記事で伝えたいこと)
https://qiita.com/pocket_kyoto/items/1e5d464b693a8b44eda5

を読み、WordNetというものを知ったという自己の学びの記録（そんなすごい話じゃない）。なので、興味のある方はぜひ元記事を読んで下さい。とてもわかりやすかったし、本来色々と応用するはずのもの。そしてPythonはたのしい。とても楽しい。

環境は以下。
Microsoft Windows 10 Pro
Python 3.8.6 (tags/v3.8.6:db45529, Sep 23 2020, 15:52:53) [MSC v.1927 64 bit (AMD64)]

## デモ

![sinjiro.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/674dcf33-0330-6f28-8548-a816a210d849.gif)

## ソース
[元記事](https://qiita.com/pocket_kyoto/items/1e5d464b693a8b44eda5) を詳細は参照のほど。

```sinjiro.py
import random
import sqlite3
conn = sqlite3.connect("wnjpn.db")

word = input("どうぞ、好きな言葉を入力してください: ")

# 特定の単語を入力とした時に、類義語を検索する関数
# Wordnet http://compling.hss.ntu.edu.sg/wnja/ のwnjpn.dbを利用

# 日本語ワードネット 2009-2011 NICT, 2012-2015 Francis Bond and 2016-2017 Francis Bond, Takayuki Kuribayashi
# linked to http://compling.hss.ntu.edu.sg/wnja/index.ja.html

def SearchSimilarWords(word):

    # 問い合わせしたい単語がWordnetに存在するか確認する
    cur = conn.execute(f"select wordid from word where lemma='{word}'")
    word_id = 99999999  #temp 
    for row in cur:
        word_id = row[0]

    # Wordnetに存在する語であるかの判定
    if word_id==99999999:
        print(f"「{word}」は、Wordnetに存在しない単語です。")
        return
    else:
        print(f"【「{word}」の類似語はね、以下ですよ】\n")

    # 入力された単語を含む概念を検索する
    cur = conn.execute(f"select synset from sense where wordid='{word_id}'")
    synsets = []
    for row in cur:
        synsets.append(row[0])

    # 概念に含まれる単語を検索して画面出力する
    no = 1
    l_empty = []
    for synset in synsets:
        cur1 = conn.execute(f"select name from synset where synset='{synset}'")
        for row1 in cur1:
            print("%sつめの概念 : %s" %(no, row1[0]))
        cur2 = conn.execute("select def from synset_def where (synset='%s' and lang='jpn')" % synset)
        sub_no = 1
        for row2 in cur2:
            print("意味%s : %s" %(sub_no, row2[0]))
            # 対象に追加
            l_empty.append(row2[0])
            sub_no += 1
        cur3 = conn.execute(f"select wordid from sense where (synset='{synset}' and wordid!={word_id})")
        sub_no = 1
        for row3 in cur3:
            target_word_id = row3[0]
            cur3_1 = conn.execute(f"select lemma from word where wordid={target_word_id}")
            for row3_1 in cur3_1:
                print("類義語%s : %s" % (sub_no, row3_1[0]))
                # 対象に追加
                l_empty.append(row3_1[0])
                sub_no += 1
        print("\n")
        no += 1
    
    answer = random.choice(l_empty)
    l_phrase = []
    l_phrase.append(f"私はね、{word} とはですね、言ってみればもはや {answer} だと思うんですよ。")
    l_phrase.append(f"{word} ってことはですよ、{answer} とも考えられるということですよ。")
    l_phrase.append(f"{word} って、もう {answer} ですよね。")
    phrase = random.choice(l_phrase)
    print(phrase)

SearchSimilarWords(word)

```

## Ver.1.0の供養

```py
import random
noun = input("気になる言葉を入力して下さい: ")
phrase = [f"{noun} ということはですね、いわば {noun} だということなんですよ。", f"私はね、気づいたんですよ {noun} なんだと。だからこそ {noun} だったのです。", f"私はね、 {noun} なのですから。だからこそ {noun} だとして全力を尽くします。"]
print(random.choice(phrase))
```


``` 
root@d545fa0ed72b:~/opt# python sinjiro.py
気になる言葉を入力して下さい: 焼肉定食
私はね、 焼肉定食 なのですから。だからこそ 焼肉定食 だとして全力を尽くします。
root@d545fa0ed72b:~/opt#
``` 
位のものを現実逃避気味に深夜に作って遊んでいたら、冒頭の記事をみつけた。そしてたどり着いたVer.2。

![sinjiro2.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/6279a618-01e3-c179-fcfa-b2703900a24f.gif)
夢ってもう、希望ですよね。
![sinjiro3.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/798509fe-bb24-e8b7-518c-6ac3ffab7ad1.gif)
猫ってことは、にゃんにゃんとも考えられるということですよ。
実際にそんなこと仰る方なんて居るのかな。

## まとめ
```
私はね、ソース とはですね、言ってみればもはや 付け汁 だと思うんですよ。
root@d545fa0ed72b:~/opt#
```

###日本語Wordnet
[日本語WordNetを知る](https://qiita.com/hiraski/items/50fea4c489bcc4823bc4)
[日本語WordNetを使って、類義語を検索できるツールをpythonで作ってみた](https://qiita.com/pocket_kyoto/items/1e5d464b693a8b44eda5) 
https://ja.wikipedia.org/wiki/WordNet
アイディア元: https://twitter.com/NanimoBot
ソース: https://github.com/e99h2121/sinjiro/blob/master/sinjiro_v2.py

###学んだPython記事
[Pythonの文字列が標準でf文字列になる（かも）](https://qiita.com/ksato9700/items/44caf7bf0329fb987499)

###ここまで書いてしまってからの過去記事発見

https://qiita.com/omiita/items/0f811f15e569bf2539b8


まいっか。やっぱりPythonは楽しい。
なお便宜上、本記事のタグに「クソアプリ」を使用させていただきますが、「私のプログラムがクソ」なだけであって、元となるアイディアを頂いたところのBot、人物等などを貶める意図は筆者にはありません。

お楽しみいただければさいわいです。
