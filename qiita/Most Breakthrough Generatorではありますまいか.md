## この記事は
Works Human Intelligence社、ワークス社とは関係ない、文責：個人の趣味の投稿です。
[私は何がやりたいのか、あるいは何がやりたくないのかという話、私の場合](https://qiita.com/e99h2121/items/7e44c4b84a5bd630386a) を考えたついでにバランスを取りたくて書きました。

## [Most Breakthrough Generator](https://e99h2121.github.io/breakthrough-generator/)とは
日常の何気ない文章をものすごい問題解決にしてくれるブレイクスルーエンジンです。[クソアプリアドベントカレンダー](https://qiita.com/advent-calendar/2020/kuso-app2) が[とても賑わっているようですが](https://qiita.com/advent-calendar/2020/kuso-app)、これは決してクソアプリではなくモストブレイクスルーアプリです。

### https://e99h2121.github.io/breakthrough-generator/

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/d409f9af-6798-8503-c608-e1cf334305a7.png)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/21770e26-7830-1be3-a05e-bf5c6e5b1dd5.png)


<s> というかジョークおもちゃです、こんなの業務中に作っててごめんなさい</s> 
なるほど、ブレイクスルーしています。

## Most Breakthrough

[Most Breakthroughとは、かつてのワークスアプリケーションズ社時代の社内表彰です。](https://www.facebook.com/worksap.career/photos/mbmmost-breakthrough-member%E5%8F%97%E8%B3%9E%E8%80%85%E3%81%AE%E4%B8%89%E5%90%8D%E3%81%A7%E3%81%99/478715008886201/)英語としてどうなの。


## 裏側
https://github.com/e99h2121/breakthrough-generator/blob/main/index.html

### 完全にクライアントサイド
javascriptだけで作っています。[javascriptはお手軽で良かった](https://qiita.com/yociya-nakada/private/a9cdb4a56117240c20ef)。
全てクライアントサイドで解析を行うため、セキュリティの観点から見て安全です。

### Ver.1　ランダム、文字列置換
```ver1.js
<script type="text/javascript">
    function breakthrough() {
        const messages = ['問題解決こそが仕事でありますぞ。',
                          '本当の仕事とは、何か大きな問題に直面したときから始まる。',
                          'プロ、もしくはプロであるべきポジションの仕事人の無自覚や無神経さを「まぬけ」と呼びます。',
                          '例えば「どこでもつながる携帯電話」というのを考えるとしましょう。これは理想として言えば、世界中のどこに行ってもつながる、地下だろうが高い山のてっぺんだろうが、太平洋のど真ん中だろうが通話ができるっていうのが理想じゃありませんか？'];
        const messageNo = Math.floor( Math.random() * messages.length);
        const suffix = ['ではありますまいか。',
                          'ぞ。'];
        const suffixNo = Math.floor( Math.random() * suffix.length);

        var mackytext;
        mackytext =  messages[messageNo] + '\n';
    	mackytext =  mackytext + '\n' + document.getElementById('origin').value.replace(/。/g, suffix[suffixNo]);
        document.getElementById('mackytext').value = mackytext;
    }
</script>
```
```index.html
      <TD><textarea cols="80" rows="5" id="origin"></textarea></TD>
(中略)
        <p><input type="button" value="ブレイクスルーする" onclick="breakthrough();"></p>
(中略)
        <p><textarea cols="80" rows="10" id="mackytext">ここに表示されるのですぞ。</textarea></p>
```
30分くらいでつくりましたが、細かい命名には、気をつけました（色々な意味において）。


#### Ver.1　参考文献
[特定の文字列を全て置換する[Javascript]](https://qiita.com/DecoratedKnight/items/103ab57431b6c448e535)
[文字列ランダム表示](https://techacademy.jp/magazine/25665)


### Ver.2 形態素解析ライブラリとTweet

```ver2.js
<script type="text/javascript" src="tiny_segmenter.js" charset="UTF-8"></script>
<script type="text/javascript" charset="UTF-8">
    var segmenter = new TinySegmenter();

    function breakthrough() {
        var segmenter = new TinySegmenter();
        var segs = segmenter.segment(document.getElementById('origin').value);
        var conv = "";
        for (const elem of segs) {
            var str = elem;
            str = str.replace("です", "ですぞ")
            str = str.replace("でした", "でしたぞ")
            str = str.replace("ます", "ますまいか");
            str = str.replace("た", "たぞ");
            conv = conv + str;
        }
        const messages = ['問題解決こそが仕事でありますぞ。',
                          '本当の仕事とは、何か大きな問題に直面したときから始まる。',
                          'プロ、もしくはプロであるべきポジションの仕事人の無自覚や無神経さを「まぬけ」と呼びます。',
                          '例えば「どこでもつながる携帯電話」というのを考えるとしましょう。これは理想として言えば、世界中のどこに行ってもつながる、地下だろうが高い山のてっぺんだろうが、太平洋のど真ん中だろうが通話ができるっていうのが理想じゃありませんか？'];
        const messageNo = Math.floor( Math.random() * messages.length);
        const suffixNo = Math.floor( Math.random() * suffix.length);

        var mackytext = "";
    	//mackytext =  mackytext + '\n' + document.getElementById('origin').value.replace(/。/g, suffix[suffixNo]);
    	mackytext =  conv + '\n';
        mackytext =  mackytext + messages[messageNo] ;
    	document.getElementById('mackytext').value = mackytext;
    }
    function tweet() {
        var left = Math.round(window.screen.width / 2 - 275);
        var top = (window.screen.height > 420) ? Math.round(window.screen.height / 2 - 210) : 0;
        window.open(
            "https://twitter.com/intent/tweet?text=" + encodeURIComponent(document.getElementById("mackytext").value + " at: https://e99h2121.github.io/breakthrough-generator/" ),
            null,
            "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + left + ",top=" + top);
    }
</script>
```
もう少し真面目にやりだしました。形態素解析Javascriptという、便利なライブラリがありました。


#### Ver.2　参考文献
[TinySegmenter:Javascriptだけで書かれたコンパクトな分かち書きソフトウェア](http://chasen.org/~taku/software/TinySegmenter/)
[オープンソースのコードを取り込んだ時のライセンス表記について](https://mozxxx.hatenadiary.org/entry/20110529/p4)
[オリジナルのツイートボタンの呟き内容をjavascriptsで動的に変える方法](https://cthuwebdice.com/javascripts/tweet_text_change/)


## 公開
当然自分でホストすれば良いんですが、これを発見
https://sites.google.com/view/how-to-with-new-sites/embeds/embed-with-htmljavascript
することで、まずは社内でも簡単に公開できました。

Editey というものもあるようだ。参考：[WebブラウザでUnityで作ったシーンを歩き廻ろう！](https://qiita.com/ChinatsuMatsumoto/items/c99457cc85318da892cb)
考えているうちに、https://pages.github.com/ で良いか。となりました。


## 解説

私の会社の、前の名前の会社の創業者、「牧野正幸」氏の謎の口癖？ブログ上の人格？に多分にエナジャイズされた <s>社内ウケを狙ったジョークおもちゃ </s> モストブレイクスルーです。

### 元ネタ

[「問題解決」こそ仕事](https://ameblo.jp/masayukimakino/entry-11093770761.html)


### 在職エントリ

私の勤めるWorks Human Intelligence社は2019年、ワークスアプリケーションズ社から分割して誕生しました。引用：https://www.works-hi.co.jp/news/20190801

当時のことを黒歴史のように語るのはタブーに触れる行為のように多々おもわれる節を感じたり、感じなかったり、かもしれませんが、内部で新卒時代からそれなりに業務をこなせるようになった今を過ごしてきたひとりにとって、そしてひとりの「開発」にとって、会社の「枠」なんて、わりとどうでもいいことです。単にそこに「1000をゆうに数える日本の大企業であるお客様の業務を支えている」という圧倒的な面白みがあるから相変わらず続けている、というのが、私個人の気持ちです。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/0ee582bb-8473-c8f7-55b8-7b0daa820583.png)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/1f6a0123-ebb8-1b8c-be7c-e9525c822394.png)
Delphiでこんなものも作ったりしていた新人時代。

「卒業生」もそれなりに多くの分野で活躍しており、私も「卒業してこそ一人前」「まだまだ自分はその度胸がない」な～という気持ちでいるのですが、弊社、開発者が実名で、会社のタイトルを明かしつつも内部の雰囲気を語るという機会がなぜかない（少ない？）。中はそれなりに相変わらず楽しいよと、どこかで一発、在職エントリをかましてやりたいなと思っていました。偉い人から怒られそうな気もしますが、私なりの会社愛として受け止めてくれると信用する意味で投稿しています。



後日消されていたら察してください。



-----
以下記事が最近トレンドに載ったのでこちらも宣伝。
[Delphiなんかで開発していて恥ずかしくないの？](https://qiita.com/e99h2121/items/e5b823ae69ce418ea235)
[「失敗を許容する」なんて言われても失敗したくないです](https://qiita.com/e99h2121/items/873281d73cc504e5a64d)
[真面目なことも書いてるよ](https://qiita.com/e99h2121/private/7e44c4b84a5bd630386a)

また12/5 には人事プロダクト「COMPANY」のバッチ処理の裏側を、きちんと投稿する予定です。
[Develop fun!を体現する Works Human Intelligence Advent Calendar 2020](https://qiita.com/advent-calendar/2020/whi)
[Develop fun!を体現する Works Human Intelligence #2 Advent Calendar 2020](https://qiita.com/advent-calendar/2020/whi-2)

では！
