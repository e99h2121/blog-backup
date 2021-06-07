完成形
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/666fbb18-d3a3-5ffb-87a2-8135268dccf8.png)

## Google Map React

https://dev.to/devdefinitive/33-github-projects-i-have-bookmarked-and-you-should-298o

でも紹介されているGoogle Map React。いくつか過去記事がある。

https://qiita.com/Mitsuw0/items/b026c637c4294de0ccbf

https://qiita.com/theFirstPenguin/items/dc94aeb1595df1a0aa56

今回使うのは以下。

https://github.com/google-map-react/google-map-react

`npm install --save google-map-react`


### サンプル

```Main.js
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 35.66, // 緯度経度
      lng: 139.74
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'{API キーをここに}' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={35.667345081692176}
            lng={139.7401442420512}
            text="アークヒルズはここ"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

```


## トラブルシューティング

### 依存関係の解決

https://qiita.com/koh97222/items/c46d1ef2a63b92bb6c15

`npm install --save --legacy-peer-deps google-map-react`


### APIキー

https://developers.google.com/maps/documentation/android-sdk/get-api-key?hl=ja

> このページでは Google マップが正しく読み込まれませんでした。JavaScript コンソールで技術情報をご確認ください。

https://club.jidaikobo.com/knowledge/127.html

> 「Google Maps JavaScript API」で「有効にする」ことで、このエラーを抑止して、利用できるようになります。

> You must enable Billing on the Google Cloud Project at https://console.cloud.google.com/project/_/billing/enable 
> Learn more at https://developers.google.com/maps/gmp-get-started

### Zoomとは

https://developers.google.com/maps/documentation/javascript/maxzoom

Zoom は 0 to 18。


ということで超簡単にできた！という以上メモ書きだが、なにがしか参考になればさいわいです。
