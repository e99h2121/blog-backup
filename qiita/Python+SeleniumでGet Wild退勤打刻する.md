PythonでSeleniumを覚えたので使ってみたかった。環境は以下。

- Microsoft Windows 10 Pro
- Python 3.8.6 (tags/v3.8.6:db45529, Sep 23 2020, 15:52:53) [MSC v.1927 64 bit (AMD64)]

## 動機

Get Wild退勤。
[ネットで話題の「Ｇｅｔ　Ｗｉｌｄ退勤」とは？　ＳＮＳ大盛り上がり「あー分かります！」「今度してみますｗ」「出勤時はセルフコントロール」](https://www.iza.ne.jp/kiji/life/news/200911/lif20091116010028-n1.html) 元ネタは以下らしい。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">友達から退勤する時にドアを開けると同時にGet Wildを聴く「Get Wild退勤」を教えてもらって試したらマジでめちゃくちゃ良い仕事した気持ちになるし何なら後ろの建物（会社）が爆破してる脳内妄想が起こってオススメ。</p>&mdash; shotac (@shotac_) <a href="https://twitter.com/shotac_/status/1304019792228016129?ref_src=twsrc%5Etfw">September 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

コロナ禍の今、以前のようにさっそうとオフィスを後にすることもなかなかできなくなってしまった。在宅勤務でも、Get Wild で退勤したい。


## Python+SeleniumでブラウザからGet Wild退勤打刻する

私は毎日、いわゆる普通の打刻画面からぽちぽちやっている。

### こういうやつ
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/482dddda-acf3-6865-fe39-ab2cf41eae8a.png) 
記事の説得力8割減だが大人の事情でお絵かきにしておいた (Powered by https://cacoo.com/ )。「退勤」ボタンを押すのが私の退勤。これに、以下をプラスしたらWild and Toughである。(Youtube: Get Wild)


<iframe width="1019" height="573" src="https://www.youtube.com/embed/NHKq8IOXPxA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## 実装
```getwildandtough_taikin.py
#!python3.8

import time
import chromedriver_binary

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys

# https://selenium-python.readthedocs.io/
# この辺は退勤アプリに合わせる。あくまで私の場合。

url = "｛退勤打刻URL｝"
elem_name_inp_uid = "｛user_id｝"
elem_val_inp_uid = "｛ユーザID｝"
elem_name_inp_pwd = "｛password｝"
elem_val_inp_pwd = "｛パスワード｝"
elem_name_btn_logout = "｛退勤ボタン｝"

# driver = webdriver.Chrome() このコメントアウトの理由は後述
driver = webdriver.Chrome(ChromeDriverManager().install())

# タブを開く
# OSにあわせて (Keys.COMMAND + 't') にしたりするようだ
driver.find_element_by_tag_name('body').send_keys(Keys.CONTROL + 't') 

# GetWild を開く
driver.get('https://www.youtube.com/watch?v=NHKq8IOXPxA')

# 再生ボタンをクリック
driver.find_element_by_class_name('ytp-play-button').click()

# 広告をスキップしたいけど、広告が出ないこともある
# https://github.com/1993jayant/youtube_adskipper/blob/master/youtube_adskipper.py
# https://github.com/douasin/youtube-ad-skipper/blob/master/youtube_ad_skipper.py
# https://stackoverflow.com/questions/62745175/how-to-click-the-skip-ads-button-in-youtube-using-selenium-in-python-3
# https://stackoverflow.com/questions/36503730/continue-the-script-if-an-element-is-not-found-using-selenium-in-python

# 一旦、3回分チャレンジ
# 例外が出たら次へ
for i in range(3):
    time.sleep(10)
    try:
        driver.find_element_by_class_name('ytp-ad-skip-button.ytp-button').click()
    except:
        print("ex occured");

# 最終的に、もう30秒間Getwildに浸る
time.sleep(30)

driver.find_element_by_tag_name('body').send_keys(Keys.CONTROL + 't') 

# ようやく打刻
driver.get(url)

elem_inp_uid = driver.find_element_by_name(elem_name_inp_uid) 
elem_inp_uid.clear()
elem_inp_uid.send_keys(elem_val_inp_uid)
elem_inp_pwd = driver.find_element_by_name(elem_name_inp_pwd)
elem_inp_pwd.clear()
elem_inp_pwd.send_keys(elem_val_inp_pwd)
elem_btn_logout = driver.find_element_by_class_name(elem_name_btn_logout)
elem_btn_logout.click()

# お疲れさまでした
time.sleep(5)
```

GitHub: https://github.com/e99h2121/python_selenium_login/blob/main/getwildandtough_taikin.py


## ひとりでは解けない愛のパズル
処理フローは以下。

1. ブラウザ起動。
2. Youtubeに遷移。
3. 広告が出たり、出なかったり、5秒で出たり、スキップしないと1分かかったりするから、できればスキップしたい。
4. しかし出ないときもあるから、スキップボタンを押せなかったら、構わず進まないといけない。
5. 脳内がGet Wildに染まったら、爆破されたオフィスを妄想しながら、退勤打刻。
6. お疲れさまでした。


### ケース1: スキップできる広告の場合

![getwild4.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/955783e5-70a4-8291-6d6e-38bda2428a87.gif)

### ケース2: スキップしない広告の場合

![getwild3.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2ee11590-4c3e-3d44-9bfd-2d9b398ab0fe.gif)


### 以下がChance and luck という処理のゴール
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/6e4590be-301b-346a-ac6e-b737c692c3f3.png)
画像はイメージです。



## アスファルトがタイヤを切りつけてきたポイント4点

### 1. 広告の長さが変わるYoutubeとどう付き合うか

Youtubeの広告をSeleniumでいかに処理するかは工夫どころのようだ。
参考: [動画広告（15 秒動画広告、30 秒動画広告、スキッパブル動画広告）](https://support.google.com/displayspecs/answer/6244541?hl=ja&ref_topic=6244532&visit_id=637491629757687411-3203496776&rd=1)
動画を開いた時に以下パターンがある。

- 数秒の広告動画（スキップできない）が流れる
- 数秒後に「広告をスキップ」できる広告動画が流れる
- 広告が流れない

本編の動画に極力ストレスなくPython+Seleniumで画面遷移させたい。

#### GitHubより
GitHubのadskipper.
https://github.com/1993jayant/youtube_adskipper
> This is a program written in python programming language. It automatically clicks on the 'skip ad' button on the youtube ads. It uses opencv library's Template Matching functionality to do that.

あるいは、
https://github.com/douasin/youtube-ad-skipper/blob/master/youtube_ad_skipper.py

```py
    def check_ad(self):
        try:
           self.driver.find_element_by_class_name("videoAdUiPreSkipButton").click()
            self.has_ad = True
            return self.driver.find_element_by_class_name("videoAdUiPreSkipText").text
        except:
            return None

    def skip_ad(self):
        try:
            self.has_ad = False
            self.total_skip_ad += 1
            print("已跳過{}個廣告".format(self.total_skip_ad))
            self.driver.find_element_by_class_name("videoAdUiSkipButton").click()
            sleep(1)
            #return self.driver.find_element_by_class_name("videoAdUiSkipButtonExperimentalText").text
        except:
            return None
```
#### Stackoverflowより

どうやってスキップボタンを押すか。
[How to click the 'skip ads' button in youtube using selenium in python 3](https://stackoverflow.com/questions/62745175/how-to-click-the-skip-ads-button-in-youtube-using-
selenium-in-python-3)
要素が見つからない時、どう処理するか。
[Continue the script if an element is not found using selenium in Python
](https://stackoverflow.com/questions/36503730/continue-the-script-if-an-element-is-not-found-using-selenium-in-python)

#### シンプルにPython例外処理の基礎
https://www.atmarkit.co.jp/ait/articles/1909/06/news019.html
で、有限回数リトライを以下、今回のGet Wild退勤では妥協点とした。

```抜粋.py
# 一旦、3回分チャレンジ
# 例外が出たら次へ
for i in range(3):
    time.sleep(10)
    try:
        driver.find_element_by_class_name('ytp-ad-skip-button.ytp-button').click()
    except:
        print("ex occured");
```

### 2. ブラウザで別タブをどう開くのか

[Open web in new tab Selenium + Python](https://stackoverflow.com/questions/28431765/open-web-in-new-tab-selenium-python)
これも分かっていれば簡単だが、大事なのでメモする。

```引用.py
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()
driver.get("http://www.google.com/")

# タブを開く
driver.find_element_by_tag_name('body').send_keys(Keys.COMMAND + 't') 
# You can use (Keys.CONTROL + 't') on other OSs

# ページを読み込む 
driver.get('http://stackoverflow.com/')
# 必要に応じて画面処理

# これも必要に応じて閉じる。今回のGetWild退勤打刻では、打刻画面に更に遷移
# (Keys.CONTROL + 'w') on other OSs.
driver.find_element_by_tag_name('body').send_keys(Keys.COMMAND + 'w') 
```

### 3. `find_elements_by_class_name` と `find_element_by_class_name` は別物である

複数形と、単数形があるのですね。

```
AttributeError: 'list' object has no attribute 'click'
```

などというエラーが出ていたが `driver.find_elements_by_class_name(elem_name_btn_logout)` 等と `elements` (複数形) を選択していたからであった。以下で動作。

```py
elem_btn_logout = driver.find_element_by_class_name(elem_name_btn_logout)
elem_btn_logout.click()
```
参考: [AttributeError: 'list' object has no attribute 'click' - Selenium Webdriver]( https://stackoverflow.com/questions/11223011/attributeerror-list-object-has-no-attribute-click-selenium-webdriver)
写経をミスった凡ミスなのですが。勉強になりました。


### 4. ChromeDriver、更新されたらどうなるの

> Python × Selenium × Chromeでブラウザ操作自動化をしてるけど、ブラウザバージョン更新のたびにChromeDriverを手動で更新するのが面倒すぎる！

たしかに今は動いていても、そのうちUpdateされたらいつの間にかエラーになりそうだ。
そんな時にこれ。

https://yuki.world/python-selenium-chromedriver-auto-update/

抜粋すると以下。

```before.py

from selenium import webdriver
import chromedriver_binary
 
driver = webdriver.Chrome()
driver.get('https://google.com')
```

導入後

```after.py

from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
 
driver = webdriver.Chrome(ChromeDriverManager().install())
driver.get('https://google.com')
```


## まとめ: この街で優しさに甘えていたくはない

デバッグしていると脳内がWild and Toughだった。
というか退勤ボタンポチるためだけに何やってるのか早く退勤しろ社会人（私）。

- [【全13サイト】各金融機関サイトにPythonとSeleniumを使ってログインするサンプル一覧と注意点](https://qiita.com/yoshi2045/items/a58a7fbebcb9faad3e15)
- [Seleniumでchromedriverのエラーが出るとき](https://qiita.com/gabiQ/items/18836611b47d2a1e56c4)
- [【なんでなん】pythonコマンド叩いたらPermission deniedしたけどPYコマンドで動いた](https://qiita.com/saito_ry/items/7b449966259b7aac77bd)

等、自分の理解の助けになりました。It's your pain or my pain or somebody's painです。
[Python と Playwright でブラウザを自動操作させるコードを自動生成したよ](https://qiita.com/mainy/items/3a9de19f440991f67f34) も使えるのかなあ等とおもいつつの勉強記録でした。デイリーポータルみたいだな
お楽しみいただけたらさいわいです。

