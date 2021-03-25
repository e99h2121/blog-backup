ついにクリスマスイブ、この日を待っていました。[アジャイルを使ってクリスマスまでに彼女を作ろうとしていた彼は幸せな夜を過ごせるのでしょうか](https://qiita.com/Let_kdm_free/items/7287325f4a3541e4551e)… 
某社のアドベントカレンダーは

[「Develop fun!」を体現する Works Human Intelligence Advent Calendar 2020](https://qiita.com/advent-calendar/2020/whi)
[「Develop fun!」を体現する Works Human Intelligence #2 Advent Calendar 2020](https://qiita.com/advent-calendar/2020/whi2)

だが気にせず[^1] 今月は頑張って色々書いた。そして私は [こんな記事や](https://qiita.com/e99h2121/items/b5c2497000c32d6fd3c3), [こんな記事](https://qiita.com/e99h2121/items/3c54a05adccc40ff83b8), [こんな記事](https://qiita.com/e99h2121/items/4a0aa999b40f9a2b30bd)  を多くの人に読んでいただけて、また感想が聞けてというサイクルがあってとても楽しかった。[アドベントカレンダーではありますまいか Advent Calendar 2020](https://qiita.com/advent-calendar/2020/mba) は合計304LGTMを頂いている。そういえばこの私のカレンダー名の大元ネタであった[この記事](https://qiita.com/e99h2121/items/237628abd85329b14a81)は結局どれくらいの人に読んでもらったんだろう
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/a868a006-6e68-f323-ade8-3d40834c8676.png)
いや決して少ない数とは言わない（読んでくれている皆様ありがとう）。しかし以下を見てほしい
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/66865191-73d3-69c2-cf01-1b10229a7401.png)
LGTM数はたったの1だ。なんだ皆そんなに社名特定が怖いのか、、踏み絵は踏みたくないということなのか、、？ Yesと答えた方、、、ブラウザバックで直ちに戻ってくれたまえ。[^2]


今日はこれができると言えれば普通に<s>転職先も幅が広がるだろう</s> イマドキな話。普段お仕事で扱うのはゴリゴリの業務アプリ（しかも主戦場がバックエンド）な私だが、たまには私もお洒落でハートフルなコンシューマー向けアプリを作ってみたいなと思うことがあるんだ。Yes、それにはAndroidアプリ！[^3] [バッチジョブ](https://qiita.com/e99h2121/items/d9a83a6e47a53dcfbfbd) だけ担当していては生涯作れないかもしれない、手のひらで楽しく使えるかわいいやつを作る基礎をもう一度おさらいしたいと思った。

作るのは[モストブレイクスルーアプリ](https://qiita.com/e99h2121/items/237628abd85329b14a81)です。

## 準備ですぞ
[Android Studio](https://developer.android.com/studio)
[Android Stuidioを使ってAndroidプロジェクトを作成する](https://www.javadrive.jp/android/step/index1.html)
スペックは以下あったほうが良いようだ。
> RAM 3GB 以上，推奨は 8GB 以上，エミュレータを使う場合は +1GB
ディスクの空き容量 2GB 以上，推奨は 4GB 以上
画面解像度 1280 × 800 以上

## MostBreakthroughApplication
名前をつけました。ここで選択するActivityはごくシンプルなものが最初は適切です。
下の画像はBottom Navigation Activityとか選んじゃってるから注意な。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/b578c229-9c97-2f93-422f-652db6e3e180.png)

参考：[最初なので使いやすい「Empty Activity」を選択します。（Basic …と思いがちですが、実はシンプルではなく最初は使いにくいので間違えないように）](https://akira-watson.com/android/helloworld.html)
[HAXM](https://docs.microsoft.com/ja-jp/xamarin/android/get-started/installation/android-emulator/hardware-acceleration?pivots=windows) という言葉が画面に出てきてイチイチこれはなんだろうとなるが問題解決こそが仕事だからググリながら作業を進めれば良い。エミュレーターなどが立ち上がる。


## HelloWorldですぞ
ひとまず以下のようになります。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/067876b3-0237-d613-1ac4-df4c29eac4d8.png)

[HelloWorld! アプリ作成](https://akira-watson.com/android/helloworld.html) に基づき[エミュレータの設定](https://akira-watson.com/android/avd-manager.html) をしたうえで、実行する。このVirtual Deviceなるやつも数GBにてディスクを圧迫するから気をつけてほしい。
エミュレータにHelloWorld表示成功でありますまいか。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/3b447108-1b33-617c-95e0-09ba9b3d804b.png)


## [ボタンを置きますまいか](https://akira-watson.com/android/button.html#3) 
何もコーディングしていないが、気にせず動作をさせていきます。`onClick`で表示が変わる。

```MainActivity.java
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // ボタンを設定
        Button breakthrough = findViewById(R.id.button);
        editTexttop = findViewById(R.id.editTextTextMultiLineTop);
        editTextbottom = findViewById(R.id.editTextTextMultiLineBottom);
        breakthrough.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                // ...
                if(buttonTap){
                    editTextbottom.setText("あります");
                    buttonTap= false;
                }
                else{
                    editTextbottom.setText("まいか");
                    buttonTap= true;
                }
            }
        });
    }
```
[Android StudioでConstraintLayoutが自動補完されずにエラーが出る](https://asmsuechan.hatenablog.com/entry/2018/12/05/213205) にまさに遭遇したが以下で解決する。
[Androidの新しいLayout、ConstraintLayoutことはじめ](https://qiita.com/tomoima525/items/0584be581a0d3a4db8c5)
ConstraintLayoutとは
> ConstraintLayoutは自動的にレイアウトの位置をマテリアルデザインに沿った最適な位置に調整してくれます。

トラブルシュートしつつここで以下にコミットしますぞ。
https://github.com/e99h2121/MostBreakthroughApp/blob/main/app/src/main/java/com/example/mostbreakthroughapp/MainActivity.java


![arimasumaika.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/8eafaa9f-0284-48b9-df2f-15fd0e6561c1.gif)
無事モストブレイクスルーしていることを確認しよう。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/dd4ef845-2e7e-0c3c-2c57-0251cd75cd28.png)
xml側のプロパティを変えることで文字色などを変えることができる。


## 動作確認ですぞ
ここまでくれば、いつもの[ありますまいか的な](https://qiita.com/e99h2121/items/237628abd85329b14a81)置換をすれば動作するではありますまいか。

### 期待動作
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/7e35dc63-03cc-9e93-aa40-01c3fda60e4a.png)
### テスト
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/8719d6fa-96f7-a238-0317-a5fbfc22e7b1.png)

既にクリティカルな仕事に詳しい君たちに圧倒的にかんたんだが、アプリを公開したくなった時にはこのページを見てほしい：[アプリを公開する](https://developer.android.com/studio/publish?hl=ja) 
[リリースしたことがなければPlay Storeへの開発者登録が必要だが](https://qiita.com/rkowase/items/f7518fe7eae2492f7adc#%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9) 25ドルは問題解決にかけるコストとしては容易い。[Google Play Console](https://play.google.com/console/u/0/signup)

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/dd5865b3-d17a-a60b-f813-08767aeab2b9.png)


## 本当の仕事とは何か大きな問題に直面したときから始まる
Ho Ho Ho...　ありますまいかはいつの間にか社内SlackのBotすらエナジャイズしていたではありますまいか。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/4c90d94d-4cc3-d9d4-28c0-95326aa0a695.png)

### 得られたもの
[ここまでの元ネタ](https://qiita.com/e99h2121/items/237628abd85329b14a81#%E5%85%83%E3%83%8D%E3%82%BF) を共有できていないと何も面白くないかもしれないなと思いつつ、Androidアプリ作成そのものはいつでも手の届く、いつもの楽しい開発作業だとクリティカルな君たちにはお勧めできること間違いなしだと実感できるに至った。

Javaだけではなく[Kotlin](https://developer.android.com/kotlin?hl=ja)も主になってくるからブレイクスルーなクリエイティビティを磨くには絶好の題材だ。もちろんHelloworld的な工程はこの記事の通りにやればできるからやったことのない人はぜひやってみて！近いうち盆栽を愛でるように自分のために、真面目にチビッコ達に遊んでもらえるようなモノくらいは作りたいなと思いましたぞ。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/7a3c180f-2ccd-c4a3-b602-39402baeb1de.png)


素敵なクリスマスをお過ごしください。明日はアドベントカレンダー総括します。

[^1]: [新卒１年目が荒れ果てた開発環境に１年間でCIを導入し単体テストを布教した話](https://qiita.com/autotaker1984/items/894bf0df0009c621da11) も当然あるんだけど彼の記事に泥を塗るからここでは触れられない。

[^2]: [アジャイルを使ってクリスマスまでに彼女を作る方法を考えてみる](https://qiita.com/Let_kdm_free/items/7287325f4a3541e4551e)参照。

[^3]: [時をかけるタコライス](https://qiita.com/taco-rice/items/4cd7bdbd5997676d114c)さんから比べて濃縮還元は否めない。記事を書き始めた私のタイミングのミスなので許してほしい。
