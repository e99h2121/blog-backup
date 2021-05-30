https://dev.to/coderslang/what-is-typescript-and-why-should-you-use-it-3mfd

上の記事を参考に、そろそろ入門しておかないといけないなと思っている人（私）のためにごく基本的なことを整理した。以下。

- TypeScriptとは何か。
- どのようにして、我々がよりよいコードを書くのに役立つのか。
- TypeScriptならではの機能がどのように我々の生活を楽にしてくれるか。



## TypeScriptとは何か？

- Microsoft社が開発・保守しているプログラミング言語。
- 厳密な型付け（変数を特定のデータ型に束縛する）などの追加機能をJavaScriptに導入したもの。
- JavaScriptにコンパイルできる。


### 公式

https://www.typescriptlang.org/

https://github.com/microsoft/TypeScript


## TypeScriptにはどのような機能があるのか？

- TypeScriptは、JavaScriptにいくつかの機能を追加したものと言える。
- 最も重要なものは厳密な型付け。静的型付け・強い型付け、等とも訳される。
- それ以外にも、Interfaces、Mixin classes、Enums などの多くの機能が導入されている。

### 参考

https://qiita.com/toryuneko/items/c023031b61886cae2a99


## なぜTypeScriptを使うのか？

上記だけではTypeScriptの使用を納得できないという方に。

- TypeScriptは、JavaScriptの「最大の問題点」を克服している。型変換問題がJavaScriptのランタイム中にしか検出できず、その結果、バグのあるアプリケーションがエンドユーザーに出荷される可能性がある、という点。
- この問題はもともと、ユーザーエクスペリエンスを阻害することで、あらゆるビジネスに悪影響を及ぼす。 
- TypeScriptでは、コンパイル時に問題がないかどうかをチェックすることで、この問題を解消している。

次のスクリプトは、JavaScriptを使用している場合にはエラーは発生しない。TypeScriptを使用している場合には、コンパイラがオブジェクトobjにnonExistentPropertyが存在しないことを指摘する例。

```ts
const obj = {
    foo: "baz",
};

console.log(obj.nonExistentProperty);
```

`getWeatherDetails()` は、TypeScriptが指摘するboolean値を受け入れるが、JavaScriptではそれができない。


## TypeScriptを始める

実際に手を動かしてみよう。以下、ローカルで動かすには Node.js とパッケージマネージャ（npmまたはyarn、この記事ではnpmを使用）が必要。あるいは以下など。

https://www.typescriptlang.org/ja/play

TypeScriptをインストールするには以下。[グローバルインストールかローカルインストールかという話はこちら参照](https://qiita.com/kijitoraneko/items/175ef29d45d155b3f405
)

`npm i -D typescript`

これで、あらゆるTypeScriptコードをJavaScriptにコンパイルできる。基本的なスニペットを使ってテスト。

```ts
const obj = {
    foo: "baz",
};

console.log(obj);
```

ファイルをコンパイルするには以下（上ではローカルインストールしたので、各コマンドの前にnpxを付ける）。[npxとは何かはこちら参照](https://zenn.dev/ryuu/articles/what-npxcommand#what%EF%BC%9Fnpx)

`npx tsc <ファイル名>.ts`

同じフォルダに新しいファイル <filename>.js が作成される。このファイルは他のJavaScriptファイルと同様に実行できる。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/3969b8a0-84cf-2555-fe94-01e06a148efe.png)



## TypeScriptとJavaScriptのジレンマ

さてここで2つ疑問。

1. なぜ、TypeScriptのコードをJavaScriptにコンパイルする必要があるのか？
2. もしコードがJavaScriptにコンパイルされるなら、なぜわざわざTypeScriptで書かなければならないのか？

1つ目の質問に対する答えは、TypeScriptはどのブラウザでも理解できないので、ブラウザがコードを実行できるようにJavaScriptに変換する必要がある、となる。

2つ目の質問に対する答えは、JavaScriptではなくTypeScriptを使うべき理由と同じで、実行時ではなくコンパイル時に型チェックを行うことができるからである。もし、test.tsを（「なぜTypeScriptを使うのか？」で示したような）エラーを含んだ状態でコンパイルしようとすると、コンパイラはエラーを投げて、間違ったコードについて警告する。

## TypeScriptの特徴

ということで先に述べたように、TypeScriptにはJavaScriptに比べていくつかの追加機能がある。

### 型システム

TypeScriptで利用できるデフォルトの型は以下。

- **Number**
    - 数値 倍精度の64ビット浮動小数点値。整数と分数の両方を表すことができる。
- **String**
    - 文字 Unicode 文字の並びを表す。
- **Boolean**
    - 論理値、true および false を表す。
- **void**
    - void 戻り値のない関数を表す。
- **Null**
    - null オブジェクトの値が存在しないことを表す。
- **Undefined**
    - undefined 初期化されていないすべての変数を表す。

TypeScriptでは、2つ以上のデータ型を組み合わせることもできる。

```ts
let union: number | string;

union = 10;
union = "Hello World";

// union = true // ERROR!!!! union`には、数値または文字列しか指定できない。
```

JavaScriptの場合、エラーが指摘されず、後々のバグにつながる可能性がある。


### interface

TypeScriptの interface では、JavaScriptでは不可能な、オブジェクトがどのように見えるかを記述することができる。

```ts
// Interfaces for Objects
interface IObjectDefination {
    foo: number[]; // foo は number型 array
    baz: Date; // baz は date
    [key: number]: string; // key (number型) と value (string型)
}

let obj: IObjectDefination;

// Interfaces for Classes
interface IClassDefination {
    data: string;
    func: () => void;
}

class Class implements IClassDefination {
    data: string;

    func() {
        return;
    }
}
```

### Enums

Enums を使用すると、一連の名前付き定数を定義することができる。意図を明確化することが容易になる。

```ts
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

function move(direction: Direction) {
    // ...
}

move(Direction.Up);
move(Direction.Down);
```

同様の結果をJavaScriptで実現するには、それぞれのキーを持つオブジェクトを作成する必要がある。その場合でも、move()でDirectionのデータタイプを指定することはできない。

```ts
const Direction = {
    Up: "Up",
    Down: "Down",
    Left: "Left",
    Right: "Right",
};
```

### TypeScriptのコンパイルの効率化

先ほど、単一のTypeScriptファイルのコンパイルにtscを使用した。これは、何千ものファイルを持つ大規模なプロジェクトの場合に問題となる可能性がある。そのような場合に、変更を監視するリスナーを設定することができる。

変更を監視するためには、プロジェクトのルートディレクトリに `tsconfig.json` ファイルを作成し、以下を追加する。

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "outDir": "dist"
    },
    "include": ["src"],
    "exclude": ["node_modules", "dist"]
}
```

あるいは、`tsc --init` を使ってファイルを作成することもできる（不要なものはコメントアウトされたすべてのオプションとともに生成される）。

```
C:\workspaces\nodejs\tsplayground>npx tsc --init
message TS6071: Successfully created a tsconfig.json file.
```

これで、リスナーの設定ができた。

`tsc -w`

これで以下、src (tsconfig.include)フォルダに作成したり変更したりしたTypeScriptファイルは、変更するたびにdist (tsconfig.compilerOptions.outDir)フォルダのJavaScriptファイルにコンパイルされる。例えば TypeScriptを始める で書いた first.ts ファイルをテキトウに書き換えたら以下。

```ts
const obj = {
    foo: "baz",
};

console.log(obj);
console.log(obj2); //must be error 
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/2aecfd0b-468c-0146-5855-2f9a5a187f52.png)

怒ってくれた。これがTypeScriptのやさしさ。
この tsconfig.json を任意のNodeパッケージに追加して、JavaScriptプロジェクトからTypeScriptプロジェクトに変換することができる。


## まとめ

- **TypeScriptとは何か。**
    - 厳密な型付け（変数を特定のデータ型に束縛する）などの追加機能をJavaScriptに導入したもの。
    - JavaScriptにコンパイルできる。
- **どのようにしてよりよいコードを書くのに役立つのか。**
    - 最も重要なものは厳密な型付け。
- **TypeScriptが提供するいくつかの機能と、EnumやInterfacesといった機能がどのように生活を楽にしてくれるか。**
    - TypeScriptでは、コンパイル時に問題がないかどうかをチェックする。JavaScriptではランタイム中にしか検出できず、その結果、バグのあるアプリケーションがエンドユーザーに出荷される可能性がある、というJavaScriptの最大の問題点を克服している。


ということでいよいよTypeScriptを書き出すことができる、というメモでした。参考になればさいわいです。
