[無料で使える公開 API のリスト：48 カテゴリ](https://qiita.com/eigs/items/967ed54c0520beb3f775) という過去Qiita記事で非常に便利そうなAPI集が紹介されていた。

https://github.com/public-apis/public-apis/blob/master/README.md

が、その中にただただ癒やされたいためだけに触りたいカテゴリが存在したのでそのメモ。


## 癒やされたいためだけのAPI抜粋

### ねこ
#### Cat Facts
- [Cat Facts](https://alexwohlbruck.github.io/cat-facts/) 
    - ねこネタを返してくれる
    - 実行例: `https://cat-fact.herokuapp.com/facts`
    
```
"text":"Domestic cats spend about 70 percent of the day sleeping and 15 percent of the day grooming."
"text":"Cats make about 100 different sounds. Dogs make only about 10."
```

#### Cats
- [Cats](https://docs.thecatapi.com/) 
    - Tumblrからのねこデータ
    - 実行例: `https://api.thecatapi.com/v1/images/search`

```
[{"breeds":[],"id":"c5b","url":"https://cdn2.thecatapi.com/images/c5b.jpg","width":627,"height":650}]
```
<img src="https://cdn2.thecatapi.com/images/c5b.jpg" width=50%>


#### RandomCat

- [RandomCat](https://aws.random.cat/meow) 
    - ねこをランダムで表示してくれる 
    - 実行例: `https://aws.random.cat/meow`

```
{"file":"https:\/\/purr.objects-us-east-1.dream.io\/i\/1222.jpg"}
```

<img src="https://purr.objects-us-east-1.dream.io/i/1222.jpg" width=50%>

#### HTTPCat
- [HTTPCat](https://http.cat/) 
    - HTTP Status とねこ
    - 実行例: `https://http.cat/[ステータスコード]`
    - やっぱり https://http.cat/404 がかわいい

### いぬ
#### Dogs
- [Dogs](https://dog.ceo/dog-api/) 
    - Stanford Dogs Datasetからのいぬデータ
    - 実行例: `https://dog.ceo/api/breeds/image/random`

```
{
    "message": "https://images.dog.ceo/breeds/terrier-fox/n02095314_1820.jpg",
    "status": "success"
}
```
<img src="https://images.dog.ceo/breeds/terrier-fox/n02095314_1820.jpg" width=50%>


<p class="codepen" data-height="600" data-theme-id="light" data-default-tab="result" data-user="e99h2121" data-slug-hash="XWNvEBY" style="height: 600px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Dog Api Sample">
  <span>See the Pen <a href="https://codepen.io/e99h2121/pen/XWNvEBY">
  Dog Api Sample</a> by YAMADA Nobuko (<a href="https://codepen.io/e99h2121">@e99h2121</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>



```html
<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" ></script>
<script>
        function getDog(){
            $.getJSON("https://dog.ceo/api/breeds/image/random", function( data ) {
                $(".json pre").html(JSON.stringify(data, null, 4));
                $(".image-content").html("<img src='" + data.message + "'>");
            });
        }
        $(document).ready(function() {
            getDog();
        });
</script>
</head>
<body>
  <h4>Image</h4>
  <button type=“button” onclick="getDog()">いぬ取得</button>
  <div class="image-content">
</div>
</body>
</html>

```

#### RandomDogs
- [RandomDog](https://random.dog/) 
    - いぬをランダムで表示してくれる 
    - 実行例: `https://random.dog/woof.json`

```
{"fileSizeBytes":1597870,"url":"https://random.dog/ca765459-c054-4d0f-9ecd-c4ea059c3fc6.JPG"}
```
<img src="https://random.dog/ca765459-c054-4d0f-9ecd-c4ea059c3fc6.JPG" width=50%>


### キツネ
#### RandomFox
- [RandomFox](https://randomfox.ca/) 
    - キツネをランダムで表示してくれる 
    - 実行例: `https://randomfox.ca/floof/`

```
{"image":"https:\/\/randomfox.ca\/images\/23.jpg","link":"https:\/\/randomfox.ca\/?i=23"}
```

![](https://randomfox.ca/images/23.jpg)


### 柴犬
- [Shibe.Online](http://shibe.online/) 
    - 柴犬をランダムで表示してくれる
    - 実行例: `http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`

```
["https://cdn.shibe.online/shibes/9afff646be431f037509233e42f6b27a6fc74a99.jpg"]
```
<img src="https://cdn.shibe.online/shibes/9afff646be431f037509233e42f6b27a6fc74a99.jpg" width=50%>


### ジブリ
- [Studio Ghibli](https://ghibliapi.herokuapp.com)
    - 何それと思ったが Unofficial、fan-made らしい: https://github.com/janaipakos/ghibliapi
    - 実行例: `https://ghibliapi.herokuapp.com/films`

```
{
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "original_title": "天空の城ラピュタ",
    "original_title_romanised": "Tenkū no shiro Rapyuta",
    "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
    "release_date": "1986",
    "running_time": "124",
    "rt_score": "95",
    "people": [
      "https://ghibliapi.herokuapp.com/people/"
    ],
    "species": [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
    ],
    "locations": [
      "https://ghibliapi.herokuapp.com/locations/"
    ],
    "vehicles": [
      "https://ghibliapi.herokuapp.com/vehicles/"
    ],
    "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
  },
```



以上メモ。
もしなにがしか参考になればさいわいです。
