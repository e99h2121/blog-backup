[10 Trending projects on GitHub for web developers - 13th August 2021](https://dev.to/iainfreestone/10-trending-projects-on-github-for-web-developers-13th-august-2021-4bf2) で紹介されていた Color Thief というもの。

https://lokeshdhakar.com/projects/color-thief/#examples

https://github.com/lokesh/color-thief

「例」引用: 
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/6e985eb5-208e-b8b0-7432-396c3d40d91f.png)


## 画像から色を抽出してくれる Color Thief

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/9cf331a1-f247-f272-5c93-594916e93f0c.png)


お試し。

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
</head>
<body>

<h2>https://lokeshdhakar.com/projects/color-thief/<h2>
<img id="thomas" src="thomas.png" width=30% height=30% crossorigin="anonymous" />
<label id="label1">Do you like Train?</label>
<img id="scene" src="lime.jpg" width=40% height=40% crossorigin="anonymous" />
<label id="label2">So beautiful.</label>

<script src="https://cdnjs.cloudflare.com/ajax/libs/color-thief/2.3.0/color-thief.umd.js"></script>
<script>
    const colorThief = new ColorThief();
    const img1 = document.querySelector('img#thomas');
    var color;
    // Make sure image is finished loading
    if (img1.complete) {
      color = colorThief.getColor(img1);
    } else {
      image.addEventListener('load', function() {
        color = colorThief.getColor(img1);
      });
    }
    var rbg = color[0] + "," + color[1] + "," + color[2];
    document.getElementById("label1").style.color = "rgb("+ rbg +")" ;//機関車の画像の色
    
    
    const img2 = document.querySelector('img#scene');
    if (img2.complete) {
      color = colorThief.getColor(img2);
    } else {
      image.addEventListener('load', function() {
        color = colorThief.getColor(img2);
      });
    }
    rbg = color[0] + "," + color[1] + "," + color[2];
    document.getElementById("label2").style.color = "rgb("+ rbg +")" ; //レモンの画像の色
</script>
</body>
</html>
```

## Trouble using Color Thief?

[疑問があったらStackoverflowを使おうという潔さ](https://lokeshdhakar.com/projects/color-thief/#support)

> 1. Search Stackoverflow to see if other people have run into the same issue you are having.
> 2. If your issue is unique, then post a new question on Stackoverflow. Use the color-thief tag to make it easier to find.

> 1.Stackoverflowを検索して、あなたが抱えている問題と同じ問題に他の人が遭遇していないかを確認しましょう。
> 2.問題がみつからない場合は、Stackoverflowに新しい質問を投稿しましょう。検索しやすいようにcolor-thiefタグを使いましょう。


以上、触ってみたところのメモ書きです。参考になればさいわいです。
