# -*- coding: utf-8 -*-

import json
import os
import sys
import requests
import subprocess

def abort(msg):
    print('Error!: {0}'.format(msg))
    sys.exit(1)

def get(url, params, headers):
    r = requests.get(url, params=params, proxies=proxies, headers=headers)
    return r

def post(url, data_dict, headers_dict):
    r = requests.post(url, data=json.dumps(data_dict),
                      proxies=proxies, headers=headers_dict)
    return r

def print_response(r, title=''):
    c = r.status_code
    h = r.headers
    print('{0} Response={1}, Detail={2}'.format(title, c, h))

def assert_response(r, title=''):
    c = r.status_code
    h = r.headers
    if c<200 or c>299:
        abort('{0} Response={1}, Detail={2}'.format(title, c, h))

class Article:
    def __init__(self, d):
        self._title      = d['title']
        self._html_body  = d['rendered_body']
        self._md_body    = d['body']
        self._tags       = d['tags']
        self._created_at = d['created_at']
        self._updated_at = d['updated_at']
        self._url        = d['url']

        user = d['user']
        self._userid   = user['id']
        self._username = user['name']

    def save_as_markdown(self):

        title = self._title
        body  = self._md_body.encode('utf8')

        filename = '{0}.md'.format(title)   
        fullpath = os.path.join(MYDIR, filename)
        # バイナリモードに変更
        # 参考）https://go-journey.club/archives/7113
        with open(fullpath, 'wb') as f:
            f.write(body)

# ファイル出力先を指定。出力したいディレクトリを指定してください。
MYDIR = os.path.abspath("./qiita")

proxies = {
    "http": os.getenv('HTTP_PROXY'),
    "https": os.getenv('HTTPS_PROXY'),
}

# Qiitaアクセストークン取得
# token = os.getenv('QIITA_ACCESS_TOKEN')
# 環境変数で指定しない場合は以下のように設定する
token = '{enter your token}'

headers = {
    'content-type'  : 'application/json',
    'charset'       : 'utf-8',
    'Authorization' : 'Bearer {0}'.format(token)
}

# 認証ユーザの投稿一覧
url = 'https://qiita.com/api/v2/authenticated_user/items'
params = {
    'page'     : 2,
    'per_page' : 100,
}
r = get(url, params, headers)
assert_response(r)
# print_response(r)

items = r.json()
print('{0} entries.'.format(len(items)))
for i,item in enumerate(items):
    print('[{0}/{1}] saving...'.format(i+1, len(items)))
    article = Article(item)
    article.save_as_markdown()

# GithubにPush
# 参考）https://www.atmarkit.co.jp/ait/articles/2003/13/news031.html
#subprocess.run(["cd", "/Users/shin/github/Qiita"])
# 更新内容をインデックスに追加（ステージングエリアに追加）→コミット対象にしている
#subprocess.run(["git", "add", "-A"])
# ローカルリポジトリにコミット
#subprocess.run(["git", "commit", "-a", "-m", "AutomaticUpdate"])
# ローカルリポジトリの内容をリモートリポジトリに反映
#subprocess.run(["git", "push", "origin", "master"])
