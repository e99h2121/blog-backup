数学界隈では何を今更という話になりそうだが、知らなかった者にとってはアートだったのです。初学者の手習い。

![barnsley.gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/08a21186-e721-ddf0-ac59-e20a1c844773.gif)

## いくつか描いた
### [バーンズリーのシダ(Wikipedia)](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%BC%E3%83%B3%E3%82%BA%E3%83%AA%E3%83%BC%E3%81%AE%E3%82%B7%E3%83%80) より

```barnsley1.py
#!python3.8

import turtle
import random

pen = turtle.Turtle()
pen.speed(20)
pen.color('green')
pen.penup()

x = 0
y = 0
for n in range(100000):
    pen.goto(85*x, 57*y-275)  # 57はシダの拡大、-275は下から描き始める意図
    pen.pendown()
    pen.dot()
    pen.penup()
    r = random.random()  # 確率を得る
    r = r * 100
    xn = x
    yn = y
    if r < 1:  # 確率に基づいたelif
        x = 0
        y = 0.16 * yn
    elif r < 86:
        x = 0.85 * xn + 0.04 * yn
        y = -0.04 * xn + 0.85 * yn + 1.6
    elif r < 93:
        x = 0.20 * xn - 0.26 * yn
        y = 0.23 * xn + 0.22 * yn + 1.6
    else:
        x = -0.15 * xn + 0.28 * yn
        y = 0.26 * xn + 0.24 * yn + 0.44
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/5499445b-f2c1-5973-d22c-d1fdd32229ce.png)


### [pythonでバーンズリーのシダを描いてみよう＜pythonでフラクタル＞](https://miurabo.com/barnsley-fern/) より

```barnsley2.py
#!python3.8

import matplotlib.pyplot as plt
import random

# 原点を(0, 0)に設定
x, y = 0, 0

# 計算したx座標とy座標を格納するリストを生成
X_list = []
Y_list = []

# X_listとY_listに原点の座標を追加しておく
X_list.append(0)
Y_list.append(0)

# 100000回繰り返す
for i in range(100000):
    #1から100までの乱数を発生させる
    s = random.randint(1, 100)
    if s <=1:      # 1%の確率でこれが起きる
        X = 0.0
        Y = 0.16*y
    
    elif 2 <= s <= 8:      # 7%の確率でこれが起きる
        X = 0.2*x - 0.26*y
        Y = 0.23*x + 0.22*y + 1.6
    
    elif 9 <= s <= 15:      # 7%の確率でこれが起きる
        X = -0.15*x + 0.28*y
        Y = 0.26*x + 0.24*y + 0.44
    
    else:      # 85%の確率でこれが起きる
        X = 0.85*x + 0.04*y
        Y = -0.04*x + 0.85*y + 1.6
    
    X_list.append(X)      # X_listにXの値を追加
    Y_list.append(Y)      # Y_listにYの値を追加
    x = X
    y = Y

plt.scatter(X_list, Y_list, s=0.01, c='green')      # X_listとY_listに入っている値を散布図として描画(サイズは0.01、色は緑)
plt.xlim(-5, 5)      # 散布図のx座標の範囲を設定
plt.ylim(0, 10)      # 散布図のy座標の範囲を設定
plt.show()      # 描画した図を表示
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/c7ca01b3-d535-0323-b52a-78b572186658.png)




### [バーンスレイのシダ（フラクタル）をPythonで描いてみる](https://math-fun.net/20190916/2933/) より

```barnsley3.py
#!python3.8

import matplotlib.pyplot as plt
import random

def transformation_1(p): # 85%でこれが選ばれる。茎を右上へ伸ばしていく。時計回りに少し回転させ、少し小さくする。大きく上にシフトする。
    x = p[0]
    y = p[1]
    x_1 =  0.85*x + 0.04*y
    y_1 = -0.04*x + 0.85*y + 1.6
    return x_1,y_1
 
def transformation_2(p): # 茎に対して左側の葉っぱを作るように左大回転、かなり小さくする。大きく上にシフトする。
    x = p[0]
    y = p[1]
    x_1 =  0.20*x - 0.26*y
    y_1 =  0.23*x + 0.22*y + 1.6
    return x_1,y_1
 
def transformation_3(p): # 茎に対して右側の葉っぱを作るように右大回転、かなり小さくする。少し上にシフトする。
    x = p[0]
    y = p[1]
    x_1 = -0.15*x + 0.28*y
    y_1 =  0.26*x + 0.24*y + 0.44
    return x_1,y_1
 
def transformation_4(p): # 中央下部の茎を作る。今までの横推移(x)を中央(0)に戻し、下部の茎まで戻す。
    x = p[0]
    y = p[1]
    x_1 = 0
    y_1 = 0.16*y
    return x_1,y_1
 
def get_index(probability): # 乱数に応じて、変換を割り当てる指数を決める
    r = random.random() # 乱数 0<=r<=1 を生成する
    c_probability = 0
    sum_probability = []
    for p in probability:
        c_probability += p # 確率リストの値をc_probabilityに加えていく
        sum_probability.append(c_probability) # c_probabilityをリストに追加する
    for item, sp in enumerate(sum_probability): # itemをインデックス、spをそのインデックスでのリストの値とする
        if r <= sp:
            return item # 乱数<=リスト(sum_probability)の値になったとき、そのインデックス(0,1,2)を返す。
    return len(probability)-1 # sum_probabilityの値がすべてrより小さいなら、インデックスは3とする
 
def transform(p): # 点pを確率的に変換して返す
    transformations = [transformation_1, transformation_2, transformation_3, transformation_4]
    probability = [0.85,0.07,0.07,0.01] # それぞれの変換が選ばれる確率を指定
    tindex = get_index(probability) # 確率に応じて1~4のインデックスを決める
    x,y = transformations[tindex](p) # 決まったインデックスの変換を施す
    return x,y
 
def draw_fern(n): # 全体を描写する
    x=[0]
    y=[0]
    x_1,y_1 = 0,0 # 初期値は(0,0)
    for i in range(n):
        x_1,y_1 = transform((x_1,y_1)) # 確率的に点を変換する
        x.append(x_1)
        y.append(y_1) # 変換した点をリストに保存し、その点を再び変換していく
    return x,y
 
x,y = draw_fern(100000) # プロット数。多いと時間がかかるので各自調整。

plt.plot(x,y,'.',markersize=1,color='green')
plt.show()
```

### [Barnsley Fern Python script](https://stackoverflow.com/questions/38651113/barnsley-fern-python-script) より

```barnsley4.py
#!python3.8

from PIL import Image
import random
import matplotlib.pyplot as plt
A=[]
mat=[[0.0,0.0,0.0,0.16,0.0,0.0,0.01],
[0.85,0.04,-0.04,0.85,0.0,1.6,0.85],
[0.2,-0.26,0.23,0.22,0.0,1.6,0.07],
[-0.15,0.28,0.26,0.24,0.0,0.44,0.07]]
x=0.0
y=0.0
for k in range(0,100000):
    p=random.random()
    if p <= mat[0][6]:
        i=0
    elif p <= mat[0][6] + mat[1][6]:
        i=1
    elif p <= mat[0][6] + mat[1][6] + mat[2][6]:
        i=2
    else:
        i=3

    x0 = x * mat[i][0] + y * mat[i][1] + mat[i][4]
    y  = x * mat[i][2] + y * mat[i][3] + mat[i][5]
    x = x0

    ptn=[x,y]
    A.append(ptn)

plt.figure(figsize=(10,15))
plt.scatter( *zip(*A),marker='o', color='g',s=0.1)
plt.show()

```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/572138fe-26f7-8590-5da1-6dbd7e9de8e8.png)


## その他

https://github.com/topics/barnsley-fern

### Qiita参考

https://qiita.com/sci_Haru/items/a6faca220972278ad5cc

https://qiita.com/physics303/items/5d4fb4708fe72ba48fb0

### こちらはJavaScript
https://github.com/foobar167/fractals


数学って本来面白いものだったんだよな...。
以上お楽しみいただければさいわいです。
