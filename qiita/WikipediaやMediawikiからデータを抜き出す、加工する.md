## 抜き出す

### Python

```python
import requests
import json

url1 = 'https://ja.wikipedia.org/w/api.php?action=parse&page=COBOL&prop=wikitext&formatversion=2&format=json'
res = requests.get(url1)
list = res.json()
print(list.get("parse").get("wikitext"))
print("\n")
```

結果:

```結果.txt
{{Infobox プログラミング言語
| fetchwikidata          = ALL
| onlysourced            = false
| name                   = COBOL
| released               = {{start date and age|1959}}
| developer              = [[グレース・ホッパー]], William Selden, Gertrude Tierney, Howard Bromberg, Howard Discount, Vernon Reeves, [[ジーン・E・サメット]]
| latest release version = COBOL 2014
| latest release date    = 
| typing                 = [[型システム|強い]][[静的型付け]]
| implementations        =
{{plainlist}}
* フリー: [https://sourceforge.net/projects/open-cobol/ GnuCOBOL], [http://tiny-cobol.sourceforge.net/index.php TinyCOBOL], [http://www.cobol-it.com/index.php?page=products COBOL-IT]
* [[UNIX]]: COBOL X/Open

(中略)
== 関連項目 ==
* [[グレース・ホッパー]] - COBOLの開発者。俗に「COBOLの母」と呼ばれる。
* [[FORTRAN]]
* [[COBOL/S]] - [[NEC]]の汎用機（[[Advanced Comprehensive Operating System|ACOS]]）用COBOL。

== 外部リンク ==
*[http://www.cobol.gr.jp/ COBOLコンソーシアム]
*[http://itpro.nikkeibp.co.jp/article/COLUMN/20100319/345985/ 社会を支えるCOBOL、50年の歩み - 日経コンピュータ]
*[https://sourceforge.net/projects/open-cobol/ GnuCOBOL (formerly OpenCOBOL)] フリーウェアとしてのコボル言語処理系

{{プログラミング言語一覧}}
{{authority control}}
[[Category:プログラミング言語]]
[[Category:グレース・ホッパー]]
[[Category:COBOL|*]]
[[Category:基本情報技術者試験]]

```

### Python wikiextractor

https://ja.wikipedia.org/wiki/%E7%89%B9%E5%88%A5:%E3%83%87%E3%83%BC%E3%82%BF%E6%9B%B8%E3%81%8D%E5%87%BA%E3%81%97

で、対象ページを xml 形式で抜き出す。

https://qiita.com/atsushieee/items/7b64b605de7d1646bf41

https://github.com/attardi/wikiextractor

`pip install wikiextractor`

例えば Wikipedia-20210715230147.xml というファイルから、本文を以下で抜き出せる。

`python -m wikiextractor.WikiExtractor Wikipedia-20210715230147.xml`

```例
<doc id="1060176" url="?curid=1060176" title="COBOL">
COBOL

COBOL（コボル）は、1959年に事務処理用に開発されたプログラミング言語である。名前は「」（共通事務処理用言語）に由来する。
概要.
非理系の事務員や官吏でもプログラミングできる言語として設計されたため、自然言語である英語に近い記述をめざしたコマンド語彙や構文（シンタックス）が採用されている。特に金額計算など事務処理用に広く使われている。COBOLは自然言語（英語）に近い構文を持つため、そのソースコードは記述が冗長にはなるが、可読性が高い。本のように、部、節、段落、文という階層で記述される。人によっては関数や数式だらけの言語よりもハードルが低い。リフレクションができないなど、モダンなプログラミング言語に比べて論理制御機能は貧弱である。一方、文字列解析や文字列編集、帳票、画面編集などの事務処理機能は豊富である。
COBOLは仕様の古い言語である。ただ、言語規格は拡張が続けられていて、2002年版以降ではオブジェクト指向にも対応して部品性を向上した。現実のプロジェクトで制約となるのは、COBOLの言語機能の不足よりは、稼働プラットフォーム、業務運用あるいは保守体制である場合も多い。
COBOLは、科学技術計算向けのFORTRANに次いで国際的な標準化が行われた、初期のプログラミング言語である。過去のバージョンとの互換性を重視した国際標準規格にしたがって多くのプラットフォームでコンパイラが開発されてきたので、COBOL to COBOLのマイグレーション（プラットフォームの更新）は比較的容易である。
(中略)

</doc>

```


### Mediawiki API

https://qiita.com/yubessy/items/16d2a074be84ee67c01f

https://mediawiki.org/wiki/API:Tutorial/ja


json 形式で取得の例

例: `https://ja.wikipedia.org/w/api.php?action=query&prop=revisions&titles=COBOL&rvslots=*&rvprop=content&formatversion=2&format=json
`

```例
"content":"{{Infobox プログラミング言語\n| fetchwikidata          = ALL\n| onlysourced            = false\n| name                   = COBOL\n| released               = {{start date and age|1959}}\n| developer              = [[グレース・ホッパー]], William Selden, Gertrude Tierney, Howard Bromberg, Howard Discount, Vernon Reeves, [[ジーン・E・サメット]]\n| latest release version = COBOL 2014\n| latest release date    = \n| typing                 = [[型システム|強い]][[静的型付け]]\n| implementations        =\n{{plainlist}}\n* フリー: [https://sourceforge.net/projects/open-cobol/ GnuCOBOL], [http://tiny-cobol.sourceforge.net/index.php TinyCOBOL], [http://www.cobol-it.com/index.php?page=products COBOL-IT]\n* [[UNIX]]: COBOL X/Open\n* [[富士通]]: [http://software.fujitsu.com/jp/cobol/ NetCOBOL], COBOL97, [http://globalserver.fujitsu.com/jp/software/cobol/ COBOL85], COBOL G\n* [[日立]]: COBOL2002, [http://www.hitachi.co.jp/Prod/comp/soft1/cobol85/product/overview.html COBOL85]\n* [[日本電気|NEC]]: [http://jpn.nec.com/cobol/index.html COBOL], [http://www.nec.co.jp/cced/nxcob/ COBOL85 for IPF]\n* [[ヒューレット・パッカード|HP]]: [http://h71000.www7.hp.com/commercial/cobol/ HP COBOL for OpenVMS], DEC COBOL, VAX COBOL\n* [[IBM]]: [http://www-06.ibm.com/software/jp/zseries/products/awdtools_cobol_zos.html Enterprise COBOL for z/OS], [http://www-03.ibm.com/software/products/us/en/cobolaix COBOL for AIX], COBOL for OS/390 & VM, COBOL for MVS & VM, COBOL for VSE/ESA, SAA AD/Cycle COBOL/370, COBOL/400, ILE COBOL, VS COBOL II, OS/VS COBOL, DOS/VS COBOL\n* [[ICL]] (International Computers Limited) : ICL COBOL\n* [[:en:Liant|Liant Software Corporation]](Ryan McFarland): RM/COBOL\n* [[マイクロフォーカス]]: [http://www.microfocus.co.jp/products/COBOL/visualcobol/Visual_COBOL_Datasheet.asp Visual COBOL], [http://www.microfocus.co.jp/products/COBOL/netexpress/ Net Express], 
（中略）

** （変更）再実行機能\n** （変更）独立項目記述と一連項目記述の相対位置の自由化\n* COBOL-76\n** （追加）データベース機能\n** （追加）ビット列操作\n** （変更）ファイル定義方法の整理\n** （廃止）独立項目（レベル番号77）\n** （廃止）ALTER\n* COBOL-78\n** 第3次規格の元になる。\n** （追加）構造化プログラミング機能\n*** EVALUATE文\n*** PERFORM文の機能拡張\n*** 名前の有効範囲の規定の整備\n** （変更）プログラム間連絡機能\n** （変更）データベース機能\n* COBOL-81\n** （追加）浮動小数点\n** （追加）算術式による添字\n** （変更）正書法の改訂（自由書式の導入）\n** （廃止）デバッグ機能（デバッグ行以外）\n** （廃止）ENTER文\n** （廃止）CORRESPONDING機能\n* COBOL-84（25周年記念版）\n** 第3次規格（補追）の元になる。\n** （追加）組み込み関数\n** （追加）データ検証 (VALIDATE) 機能\n** （追加）行の一部分に注釈を書く方法\n** （廃止）RERUN機能\n* COBOL-88\n** （追加）表SORT機能\n** （追加）定数の連結\n** （追加）画面制御機能\n** （追加）いくつかの組み込み関数\n** （廃止）区分化機能\n** （変更）語の長さを60字以下までとする。\n* COBOL-93（最終版）\n** （追加）マルチオクテット処理\n** （追加）ファイルの排他共用制御\n** （追加）いくつかの組み込み関数\n** （変更）語の長さを30字以下までにもどす。\n\n== 脚注 ==\n{{脚注ヘルプ}}\n{{Reflist|2}}\n\n== 関連項目 ==\n* [[グレース・ホッパー]] - COBOLの開発者。俗に「COBOLの母」と呼ばれる。\n* [[FORTRAN]]\n* [[COBOL/S]] - [[NEC]]の汎用機（[[Advanced Comprehensive Operating System|ACOS]]）用COBOL。\n\n== 外部リンク ==\n*[http://www.cobol.gr.jp/ COBOLコンソーシアム]\n*[http://itpro.nikkeibp.co.jp/article/COLUMN/20100319/345985/ 社会を支えるCOBOL、50年の歩み - 日経コンピュータ]\n*[https://sourceforge.net/projects/open-cobol/ GnuCOBOL (formerly OpenCOBOL)] フリーウェアとしてのコボル言語処理系\n\n{{プログラミング言語一覧}}\n{{authority control}}\n[[Category:プログラミング言語]]\n[[Category:グレース・ホッパー]]\n[[Category:COBOL|*]]\n[[Category:基本情報技術者試験]]"}}}]}]}}
```

http://blog.snowcait.info/2016/07/09/format-json-on-visual-studio-code/




## 加工する

### Pandoc

https://qiita.com/kyo_nanba/items/5e11cfa5a19e594accd5

- [多様なフォーマットに対応！ドキュメント変換ツールPandocを知ろう](https://qiita.com/sky_y/items/80bcd0f353ef5b8980ee)
    - 例: `pandoc wiki.txt -f mediawiki -t markdown_github -o wiki.md` などという感じで使える。


----
以上各種ツールです。
お役に立てばさいわいです。
