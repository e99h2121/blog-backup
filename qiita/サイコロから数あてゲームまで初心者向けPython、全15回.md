初心者向けPython、全15回
[Python Projects for Beginners (15 Part Series)](https://dev.to/mindninjax/series/11147)
というdev.to記事がPython初心者な自分のPython理解に、お題も楽しくてちょうど良かったのでメモがてら書いておく。

GitHubにも一通り揃えてくださっている。
https://github.com/mindninjaX/Python-Projects-for-Beginners


## 全15回

### 1. Pythonで頭字語ジェネレータをつくろう

https://dev.to/mindninjax/acronym-generator-beginner-python-project-source-code-49h1

＊Acronym、頭字語。Tokyo Disney Land ... TDL みたいなやつですね。

### 2. Pythonでアラームをつくろう

https://dev.to/mindninjax/alarm-clock-python-project-4jn4

### 3. Pythonでメールスライサーをつくろう

https://dev.to/mindninjax/how-to-build-an-email-slicer-using-python-1m4m

＊メールスライサー...yamada@gmail.com を @前後で分ける。yamada, gmail.com 等

### 4. Pythonでランダムストーリージェネレータをつくろう

https://dev.to/mindninjax/how-to-build-a-random-story-generator-using-python-1oah

＊いつ、どこで、誰が、何を をランダムで使ってオモシロ文を作るゲーム。

```story.py
when = ['むかしむかし、', '昨日、', 'あなたが生まれるもっと前、', '近い将来']
who = ['Shazamが', 'Iron Manが', 'Batmanが', 'Supermanが', 'Captain Americaが']
went = ['Arkham Asylumで', 'Gotham Cityで', 'Stark Towerで', 'Bat Caveで', 'Avengers HQで']
what = ['たくさんケーキを食べた', '正義の為に戦った', 'アイスクリームを盗んだ', 'ダンスした']
```

### 5. Pythonでパスワードジェネレータをつくろう

https://dev.to/mindninjax/how-to-build-a-password-generator-using-python-39gp

### 6. Pythonでじゃんけんゲームをつくろう

https://dev.to/mindninjax/how-to-build-rock-paper-scissors-game-in-python-383d

### 7. Pythonでサイコロをつくろう

https://dev.to/mindninjax/how-to-build-a-dice-roller-in-python-18j3

### 8. PythonでQRコードジェネレータをつくろう

https://dev.to/mindninjax/how-to-build-a-qr-code-generator-in-python-1c13

### 9. Pythonでクイズゲームをつくろう

https://dev.to/mindninjax/how-to-build-a-quiz-game-in-python-10ik

```quiz.py
quiz = {
    1 : {
        "question" : "Iron Manのファーストネームは?",
        "answer" : "Tony"
    },
    2 : {
        "question" : "アベンジャーズでアメリカ国旗の盾をもっているのは?",
        "answer" : "Captain America"
    }
}
# 等など
```

### 10. Pythonでカラーテキストをつくろう

https://dev.to/mindninjax/how-to-build-a-color-text-printer-in-python-3bi6

例:
![](https://res.cloudinary.com/practicaldev/image/fetch/s--oYV9WJyx--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/a3p33purzm7su183cr67.png)

### 11. PythonでBMI計算機をつくろう

https://dev.to/mindninjax/how-to-build-a-bmi-calculator-in-python-4g2g

### 12. Pythonで華氏・摂氏コンバータをつくろう

https://dev.to/mindninjax/how-to-build-an-fahrenheit-to-celsius-converter-in-python-3a2a

### 13. Pythonでエコーチャットボットをつくろう

https://dev.to/mindninjax/how-to-build-an-echo-chatbot-in-python-e9l

### 14. Pythonで数あてゲームをつくろう

https://dev.to/mindninjax/how-to-build-a-guess-the-number-game-in-python-eff

### 15. PythonでMadlibゲームをつくろう

https://dev.to/mindninjax/how-to-build-a-madlib-game-in-python-50nl

＊Madlibは、適当な名詞、動詞を入れてオモシロ文を作る英語圏の遊びらしい。

https://xn--eckq0ineg0c.net/2016/01/21/%E6%A5%BD%E3%81%97%E3%81%8F%E8%AA%9E%E5%BD%99%E3%82%92%E5%A2%97%E3%82%84%E3%81%99%EF%BC%9Amad-libs-junior/


## 解説

全記事、難しい英語ではないし、本題はソースコードなので、頑張って読むのがオススメ。
日本語版にカスタマイズしてみると良いかもしれない。

「[Guess the Number Game in Python](https://dev.to/mindninjax/how-to-build-a-guess-the-number-game-in-python-eff) / Pythonで数あてゲームをつくろう」など、シンプルにこんな感じ。
https://github.com/e99h2121/Python-Projects-for-Beginners/blob/master/Guess%20the%20number%20(computer)/guessthenumber_computer_ja.py

```guessthenumber_computer_ja.py
import random

max_num = 30

random_number = random.randint(1, max_num)
guess = 0
while guess != random_number:
    guess = int(input(f"1 から {max_num}: の間の数を当ててください！"))
    if guess < random_number:
        print("はずれ！ もっと大きい数です")
    elif guess > random_number:
        print("はずれ！ もっと小さい数です")
print(f"正解！答えは {random_number} でした")
```

```
root@d545fa0ed72b:~/opt# python guessthenumber_computer_ja.py
1 から 30: の間の数を当ててください！25
はずれ！ もっと小さい数です
1 から 30: の間の数を当ててください！20
はずれ！ もっと小さい数です
1 から 30: の間の数を当ててください！15
はずれ！ もっと小さい数です
1 から 30: の間の数を当ててください！10
はずれ！ もっと小さい数です
1 から 30: の間の数を当ててください！8
はずれ！ もっと小さい数です
1 から 30: の間の数を当ててください！5
はずれ！ もっと大きい数です
1 から 30: の間の数を当ててください！7
正解！答えは 7 でした
```

以上お楽しみいただければさいわいです。
