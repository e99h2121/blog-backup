脈絡もないこと甚だしいが、お試しして面白かったものをメモがてら。

## PythonからTweetする
Tweeter.py: 
https://github.com/geekcomputers/Python/blob/master/tweeter.py

[Twitter APIキーとトークンの取得方法](https://blog.palettecms.jp/article/20103) を設定しておく。
https://developer.twitter.com/en/apps/
一度 [Read-only application cannot POST. がでた](https://qiita.com/butsuli_shine/items/78fd5ee6fdb4a0581652) が、無事成功。

https://twitter.com/e99h2121/status/1375877138444742657?s=20

`pip install tweepy` の後、以下。

```tweet.py
from __future__ import print_function
import os
import tweepy

try:
    input = raw_input
except NameError:
    pass

def getStatus():
    lines = []
    while True:
        line = input()
        if line:
            lines.append(line)
        else:
            break
    status = '\n'.join(lines)
    return status

def tweetthis(type):
    if type == "text":
        print("Enter your tweet " + user.name)
        tweet = getStatus()
        try:
            api.update_status(tweet)
        except Exception as e:
            print(e)
            return
    elif type == "pic":
        print("Enter pic path " + user.name)
        pic = os.path.abspath(input())
        print("Enter status " + user.name)
        title = getStatus()
        try:
            api.update_with_media(pic, status=title)
        except Exception as e:
            print(e)
            return
    print("\n\nDONE!!")

def initialize():
    global api, auth, user
    ck = "コンシューマキー"  # consumer key
    cks = "コンシューマキー シークレット"  # consumer key SECRET
    at = "アクセストークン"  # access token
    ats = "アクセストークン シークレット"  # access token SECRET
    auth = tweepy.OAuthHandler(ck, cks)
    auth.set_access_token(at, ats)
    api = tweepy.API(auth)
    user = api.me()

def main():
    doit = int(input("\n1. text\n2. picture\n"))
    initialize()
    if doit == 1:
        tweetthis("text")
    elif doit == 2:
        tweetthis("pic")
    else:
        print("OK, Let's try again!")
        main()

main()
```

## PythonでQRコード生成

QRCode.py: 
https://github.com/geekcomputers/Python/blob/master/QR_code_generator/qrcode.py

`pip install pyqrcode` 
`pip install pypng` 
しておく。

``` qrcode.py
import pyqrcode
import png
from pyqrcode import QRCode
# Text which is to be converted to QR code
print("Enter text to convert")
s=input(": ")
# Name of QR code png file
print("Enter image name to save")
n=input(": ")
# Adding extension as .pnf
d=n+".png"
# Creating QR code
url=pyqrcode.create(s)
# Saving QR code as  a png file
url.show()
url.png(d, scale =6)

```

なんていうふうにして、例えば以下をQRコードとして読み取ると、Hello と言う文字列。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/9e806cf5-5b61-5a0f-d6f2-82c398805b84.png)


## ディレクトリやファイルの情報を取得する

実用。
https://github.com/geekcomputers/Python/blob/master/osinfo.py
https://github.com/geekcomputers/Python/blob/master/fileinfo.py
https://github.com/geekcomputers/Python/blob/master/folder_size.py

```folder_size.py
import os
import sys  # Load the library module and the sys module for the argument vector'''

try:
    directory = sys.argv[1]  # Set the variable directory to be the argument supplied by user.
except IndexError:
    sys.exit("Must provide an argument.")

dir_size = 0  # Set the size to 0
fsizedicr = {'Bytes': 1,
             'Kilobytes': float(1) / 1024,
             'Megabytes': float(1) / (1024 * 1024),
             'Gigabytes': float(1) / (1024 * 1024 * 1024)}
for (path, dirs, files) in os.walk(
        directory):  # Walk through all the directories. For each iteration, os.walk returns the folders, subfolders and files in the dir.
    for file in files:  # Get all the files
        filename = os.path.join(path, file)
        dir_size += os.path.getsize(filename)  # Add the size of each file in the root dir to get the total size.

fsizeList = [str(round(fsizedicr[key] * dir_size, 2)) + " " + key for key in fsizedicr]  # List of units

if dir_size == 0:
    print("File Empty")  # Sanity check to eliminate corner-case of empty file.
else:
    for units in sorted(fsizeList)[::-1]:  # Reverse sort list of units so smallest magnitude units print first.
        print("Folder Size: " + units)
```

OS情報、ファイル情報、フォルダ情報の例。

```
root@d545fa0ed72b:~/opt# python test.py
architecture: ('64bit', 'ELF')
mac_ver: ('', ('', '', ''), '')
machine: x86_64
node: d545fa0ed72b
platform: Linux-4.19.128-microsoft-standard-x86_64-with-glibc2.28
processor:
python_build: ('default', 'Feb 19 2021 17:11:58')
python_compiler: GCC 8.3.0
python_version: 3.9.2
release: 4.19.128-microsoft-standard
system: Linux
uname: uname_result(system='Linux', node='d545fa0ed72b', release='4.19.128-microsoft-standard', version='#1 SMP Tue Jun 23 12:58:10 UTC 2020', machine='x86_64')
version: #1 SMP Tue Jun 23 12:58:10 UTC 2020
```

```
file name  = a.txt
file size  = 9518 bytes
last modified  = 25/03/2021 07:33:11 PM
last accessed  = 25/03/2021 07:33:16 PM
creation time  = 25/03/2021 07:33:11 PM
Total number of lines are  = 102
Total number of characters are  = 4916
```


```
root@d545fa0ed72b:~/opt# python test.py "./"
Folder Size: 210654276 Bytes
Folder Size: 205717.07 Kilobytes
Folder Size: 200.9 Megabytes
Folder Size: 0.2 Gigabytes
```

## 出典

My Best Python Examples for education から見つけたもの。
他にもスクレイピングの練習などできそう〜。

https://github.com/geekcomputers/Python

お楽しみいただければさいわいです。
