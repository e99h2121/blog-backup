### At most once
- メッセージは 1 回以上配信されない。
- メッセージが失われることはあっても、再配信されることはない。高いレベルで配信速度が速い。
- 使用例: メトリクスの監視など、少々のデータ損失は許容できるようなケース。

### At least once
- メッセージを複数回配信することを許容し、メッセージを失わない。
- 使用例: 同じメッセージが複数回配信される可能性があるため、ユーザーの観点からは理想的ではないが、データの重複が大きな問題でない、あるいはコンシューマー側で重複排除が可能なユースケースで、十分な効果を発揮する。例えば、各メッセージに一意キーがあれば、重複するデータをデータベースに書き込む際に、メッセージを拒否することができる。

### Exactly once
- 最も実装が難しい。ユーザーには優しいが、システムの性能と複雑さにコストがかかる。
- 使用例: 金融関連のユースケース（決済、取引、会計など）。重複が許されず、下流のサービスやサードパーティがidempotencyをサポートしていない場合。


## 参考
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/9eb55c43-c9a7-2746-1488-0a86705670c3.png)

図引用: [At most once, at least once, exactly once - by Alex Xu](https://blog.bytebytego.com/p/at-most-once-at-least-once-exactly)
[エンタープライズのためのAkka 〜 Akkaで信頼できるメッセージを送る - Qiita](https://qiita.com/yugolf/items/fbbdd3eeb838f0eec2a2)
[Akka Actorのメッセージデリバリーの信頼性について - Qiita](https://qiita.com/sifue/items/3e4ffb845577d0caab02)
