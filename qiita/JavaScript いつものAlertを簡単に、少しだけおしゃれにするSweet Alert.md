## Sweet Alert

流行っているらしいのでやってみた。
[10 Trending projects on GitHub for web developers - 12th March 2021](https://iainfreestone.hashnode.dev/10-trending-projects-on-github-for-web-developers-12th-march-2021)


### GitHub

https://github.com/t4t5/sweetalert



https://sweetalert.js.org/


### お試し
<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-user="e99h2121" data-slug-hash="VwmgBYm" style="height: 365px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="SweetAlert">
  <span>See the Pen <a href="https://codepen.io/e99h2121/pen/VwmgBYm">
  SweetAlert</a> by YAMADA Nobuko (<a href="https://codepen.io/e99h2121">@e99h2121</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


```html
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<button type=“button” onclick="basicSample()">やさしいアラート</button>

<button type=“button” onclick="amazingSample()">すばらしいアラート</button>
```
```js
function basicSample(){
  swal("きをつけてね。");
}

function amazingSample() {
  swal({
    title: "すばらしい！！",
    text: "You clicked the button!",
    icon: "success",
　});
}
```

自分用に使いたいときが来たらと思うメモ。
