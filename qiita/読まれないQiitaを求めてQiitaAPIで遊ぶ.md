ご存知だろうか

https://qiita.com/tags/%e3%82%86%e3%82%8b%e3%81%b5%e3%82%8f

などというタグがあることを。私は知らなかった。ということでQiitaAPIを利用して読まれないQiitaタグを発掘した、したい。というおもちゃづくりメモです。技術的には初心者向け。

## 話の前提

4月に入りQiitaのトップが変わった。

https://blog.qiita.com/feed-update-202103/

> コミュニティが大きくなるにつれ、使ってくれているユーザーも多様になってきており、それに従って投稿される記事もプログラミング言語、技術、思想、コミュニティ、レベル感などが多様になってきていると思います。これ自体は決してこれは悪いことではなく、Qiitaというエンジニアコミュニティがもつ可能性を示してくれていると思っています。

> 今のQiitaが抱える課題は、多種多様な記事の中から自分がほしい情報を得たり、整理ができなくなってきていることです。

> Qiitaが提供しているコンテンツはマス的なものが多く、全てのユーザーの活動を元に1つのコンテンツを作っています。今回のフィード変更は、Qiitaを「**ユーザー一人一人が発見、学びを楽しめるプラットフォーム**」にすることを目指して行うものです。

なるほど、なるほど。QiitaのこのアップデートからはQiitaの埋もれた良記事発掘という、新たな楽しみ方が提案されたと考えることにします。であればもっとその先を見たいというのが人情です。Qiitaで最も読まれていないタグの記事たちにはどんな原石が転がっているのか。

## QiitaAPIを使ってみる

とても簡単。Docsは以下。
https://qiita.com/api/v2/docs#get-apiv2tags

> タグ一覧を作成日時の降順で返します。
> sort
並び順 (countで記事数順、nameで名前順)

以下が記事数順、1ページ目
https://qiita.com/api/v2/tags?page=1&per_page=100&sort=count
以下なら作成日時順、100ページ目
https://qiita.com/api/v2/tags?page=100&per_page=100

こんな感じになりますね。

https://e99h2121.github.io/playground/qiita.html

### 記事数順
<a href="https://e99h2121.github.io/playground/qiita.html" alt="画像"><img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/f89d1b00-9b0a-2ddf-9315-d1e87cbef01c.png"></a>

### 作成日時順
<a href="https://e99h2121.github.io/playground/qiita.html" alt="画像"><img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/bed73c11-7539-8309-6cbe-d4d87e847e50.png"></a>


作成日時でみるとスパム多いな！...というのは一旦さておいて、
ひとまず記事数順にてページをめくれば
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/9db4373c-6c3f-370f-97e9-2c361f244ea6.png)
5171位にプリキュア

https://qiita.com/tags/%e3%83%97%e3%83%aa%e3%82%ad%e3%83%a5%e3%82%a2

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/42302e08-1eef-02ea-17ae-4c30bb7b102b.png)
5711位にさだまさし

https://qiita.com/tags/%e3%81%95%e3%81%a0%e3%81%be%e3%81%95%e3%81%97

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/20f98a19-5339-be4c-1fd4-67b0fa0c92c3.png)
7698位、料理。

https://qiita.com/tags/%e6%96%99%e7%90%86

![ok.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/661092/75c4fcfd-a4a0-8a21-2593-2113db7c9c52.png)

https://qiita.com/7note/items/c877556abd984140336a

キャッチーなもの見つかる。



## 過去記事

https://qiita.com/teradonburi/items/3957bf1773b3282cc46f


同じような思考の人も見つけた。


## そしてQiita進化

https://blog.qiita.com/notice-community-guideline-update/


大衆向けサービスを開発するって大変だなあ。


## まとめ

今回の成果物は結局いつものjQueryを使ってしまったので、メモ。

https://qiita.com/tatesuke/items/b9548dd484b01b139b74

https://qiita.com/naruto/items/fdb61bc743395f8d8faf


```抜粋.html
<!DOCTYPE html>
<html lang="ja">
<head>
    <title>Qiita Tags</title>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script type="text/javascript">
        function jumpPage(){
        var page =  $("#page").val();
        $.getJSON("https://qiita.com/api/v2/tags?page=" +page+ "&per_page=100&sort=count", function(json){
            //テーブルクリア
            $("#tbl").find("tr:gt(0)").remove();
            var rows = "";
            //テーブルとして表示するため、htmlを構築
            for (i = 0; i < json.length; i++) {
                rows += "<tr>";
                rows += "<td>";
                rows += i+1+(page*100-100);
                rows += "</td>";
                rows += "<td>";
                rows += "<img border=0 src=\""+ json[i].icon_url +"\" width=\"32\" height=\"32\" alt=\"アイコン\"> ";
                rows += "</td>";
                rows += "<td>"; 
                rows += "<a href=\"https://qiita.com/tags/"+ json[i].id +"\" target=\"_blank\">"+ json[i].id +"</a>";
                rows += "</td>";
                rows += "<td>";
                rows += json[i].items_count;
                rows += "</td>";
                rows += "<td>";
                rows += json[i].followers_count;
                rows += "</td>";
                rows += "</tr>";
            }
            //テーブルに作成したhtmlを追加する
            $("#tbl").append(rows);
        });
    $(function() {
        //fetchボタンのクリック
        $("#fetch").click(function(){
            jumpPage();
        });
    });
    window.onload = jumpPage;
    </script>
</head>
<body>
    <p><label>Qiitaのタグランキング</label></p>
    <input id="page" type="number" size="10" value="1" max="100" min="1"><input id="fetch" type="button" value="ページ目のデータ取得" />
    <table id="tbl">
        <tbody>
            <tr>
                <th>順位</th><th>アイコン</th><th>タグ</th><th>記事数</th><th>フォロワー数</th>
            </tr>
        </tbody>
    </table>
```


以上Qiitaさんの中の人にねぎらいの念をこめつつ遊んだ記録。
お楽しみいただければさいわいです。

