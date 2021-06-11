## 前提
`document.execCommand("copy")`

https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand

が既に非推奨になっている。代替手段として以下。

- HTML5のClipboard API
- IE対応ではwindow.clipboardData


## Clipboard API（IE以外）

`navigator.clipboard.writeText()`

https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText


```javascript
var clipboardText = "clipboard";
navigator.clipboard.writeText(clipboardText);

```

IE以外は対応している。
*[Compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText#browser_compatibility)

## window.clipboardData（IE）

`window.clipboardData.setData`

```javascript
var clipboardText = "clipboard";
window.clipboardData.setData('Text', clipboardText ); 
```

## 両方対応する場合

```javascript
var clipboardText = "clipboard";
if(navigator.clipboard == undefined) {
    window.clipboardData.setData('Text', clipboardText);
} else {
    navigator.clipboard.writeText(clipboardText);
}

```

## 参考

https://qiita.com/butakoma/items/642c0ec4b77f6bb5ebcf

- [クリップボードとのやりとり - Mozilla | MDN](https://developer.mozilla.org/ja/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [ClipboardEvent.clipboardData - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent/clipboardData)
- [JavaScript からクリップボードを扱える Async Clipboard API がそろそろ見えてきました](https://qiita.com/grapswiz/items/c9cfa986a8fe3cc6b41a)
- [Clipboard API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
- [JavaScript まとめ - クリップボード操作](http://cya.sakura.ne.jp/js/clipboardData.htm)

以上メモのみ。
