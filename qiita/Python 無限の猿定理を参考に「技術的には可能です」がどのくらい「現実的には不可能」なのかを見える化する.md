## 概要
「技術的には可能です」、がどのくらい「現実的には不可能です」なのかをお猿の打鍵理論で紐解く。

https://ja.wikipedia.org/wiki/%E7%84%A1%E9%99%90%E3%81%AE%E7%8C%BF%E5%AE%9A%E7%90%86

https://qiita.com/POPOPON/items/dd810f60256c809b9b3e

を参考にした。


## プログラム実行

```py
import random
import pandas as pd

PATTERN = ['お','さ','る']

# さるがおさるの三種類で打鍵し、おさるを返却する関数
def do_monkey():
    monkey_list = []
    while monkey_list[-3:] != PATTERN:
        monkey_list.append(random.choice(['お','さ','る']))
    return len(monkey_list)

# 1万回実行してリストに格納
monkey_len_list = []
for i in range(1, 10001):
    monkey_len_list.append(do_monkey())

# 実行結果の統計量
df = pd.DataFrame(monkey_len_list, columns=["monkey length"])
print(df.describe())
```

https://qiita.com/0NE_shoT_/items/bf700662b2c36aee0f8e#describe
> describe()は、DataFrameの基本統計量を表示します。上から、データ数（count）、平均値（mean）、標準偏差（std）、最小値（min）、第一四分位数（25%）、中央値（50%）、第三四分位数（75%）、最大値（max）です。

でまあ、その場合このくらい。

```
root@d545fa0ed72b:~/opt# python monkey.py
       monkey length
count   10000.000000 # データ数
mean       26.764600 # 平均値
std        24.185737 # 標準偏差
min         3.000000 # 最小値
25%        10.000000
50%        19.000000 # 中央値
75%        36.000000
max       240.000000 # 最大値
```

では、以下どうなる。

```py
import random
import pandas as pd

PATTERN = ['s','a','r','u']

# さるがsaruの4種類で打鍵し、saruを返却する関数
def do_monkey():
    monkey_list = []
    while monkey_list[-4:] != PATTERN:
        monkey_list.append(random.choice(['s','a','r','u']))
    return len(monkey_list)

# 1万回実行してリストに格納
monkey_len_list = []
for i in range(1, 10001):
    monkey_len_list.append(do_monkey())

# 実行結果の統計量
df = pd.DataFrame(monkey_len_list, columns=["monkey length"])
print(df.describe())
```

こうなる。

```
root@d545fa0ed72b:~/opt# python monkey.py
       monkey length
count   10000.000000 # データ数
mean      254.502600 # 平均値
std       245.504897 # 標準偏差
min         4.000000 # 最小値
25%        79.000000
50%       178.000000 # 中央値
75%       354.000000
max      1898.000000 # 最大値
```

どんどんゆこう。
これを 'o','s','a','r','u' にすると更にこうなり

```
root@d545fa0ed72b:~/opt# python monkey.py
       monkey length
count   10000.000000 # データ数
mean     3145.247400 # 平均値
std      3181.358275 # 標準偏差
min         5.000000 # 最小値
25%       915.750000
50%      2185.000000 # 中央値
75%      4344.750000
max     32088.000000 # 最大値
```

'm','o','n','k','e','y' では最大348252回でおさるは monkey にたどり着くのだった。

```
root@d545fa0ed72b:~/opt# python monkey.py
       monkey length
count   10000.000000 # データ数
mean    46172.005200 # 平均値
std     45393.360479 # 標準偏差
min         8.000000 # 最小値
25%     13683.750000
50%     32099.500000 # 中央値
75%     64138.000000
max    348252.000000 # 最大値
```

## まとめ
なーんてことをやっていけばいつかはシェイクスピアも書けるのが、「技術的には可能です」である。しかしそんなのは「現実的には不可能です」なので、こういう数字を持って、難しい話をするときには説明できたら良いのかななんて思うが、そんな余裕は大概ない。

というポエム。
