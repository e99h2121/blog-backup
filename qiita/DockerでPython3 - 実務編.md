ひとしきり、最低限の手順です。

## 準備

Docker for windows desktop等 (記事末尾参照)

```
├ Readme.md
├ Dockerfile
├ docker-compose.yml
└ opt
    ├ foo.py
    └ bar.py

```
### docker-compose.yml

```docker-compose.yml
version: '3'
services:
  python3:
    restart: always
    build: .
    container_name: 'python3'
    working_dir: '/root/'
    tty: true
    volumes:
      - ./opt:/root/opt

```

### Dockerfile

```Dockerfile
FROM python:3
USER root
RUN apt-get update
RUN apt-get -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
ENV TZ JST-9
ENV TERM xterm
RUN apt-get install -y vim less
RUN pip install --upgrade pip
RUN pip install --upgrade setuptools
RUN pip install psycopg2
RUN pip install svn
RUN pip install requests

```


## コンテナ起動

`docker-compose up -d --build`




## コンテナへ接続
`docker-compose exec python3 bash`


## installされているもの確認

```
root@c75334aa5328:~/opt# python -m pip list
Package            Version
------------------ ---------
certifi            2021.5.30
charset-normalizer 2.0.3
idna               3.2
nose               1.3.7
pip                21.1.3
psycopg2           2.9.1
python-dateutil    2.8.2
requests           2.26.0
setuptools         57.2.0
six                1.16.0
svn                1.0.1
urllib3            1.26.6
wheel              0.36.2
```

## Python プログラム実行

`python3 foo.py` など。

Enjoy!


## コンテナが要らなくなったら...

下記で削除する。

`docker-compose down`




## 参考

### Docker Desktop

https://qiita.com/zaki-lknr/items/db99909ba1eb27803456

https://qiita.com/KoKeCross/items/a6365af2594a102a817b

https://qiita.com/hiyuzawa/items/81490020568417d85e86#docker-compose

### Python3

https://qiita.com/reflet/items/4b3f91661a54ec70a7dc

https://qiita.com/jhorikawa_err/items/fb9c03c0982c29c5b6d5

以上参考になればさいわいです。
