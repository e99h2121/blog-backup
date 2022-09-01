## Linux Command Line Basics

[Linux Command Line Basics: Learn Linux Command Line | Udemy](https://www.udemy.com/course/linux-command-line-volume1/) の学びのメモ

## Few simple commands
- Open the terminal
- Try command "date"
    - Command is case sensitive

```
e99h2121@DESKTOP-8PG96UV:/mnt/c/Windows/system32$ date
Fri Aug 12 10:21:29 JST 2022

e99h2121@DESKTOP-8PG96UV:/mnt/c/Windows/system32$ Date

Command 'Date' not found, did you mean:

  command 'kate' from deb kate (4:19.12.3-0ubuntu1)
  command 'date' from deb coreutils (8.30-3ubuntu2)
  command 'late' from deb late (0.1.0-13build1)

Try: sudo apt install <deb name>
```

- `cal`

```
e99h2121@DESKTOP-8PG96UV:/mnt/c/Windows/system32$ cal
    August 2022
Su Mo Tu We Th Fr Sa
    1  2  3  4  5  6
 7  8  9 10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30 31

e99h2121@DESKTOP-8PG96UV:/mnt/c/Windows/system32$ cal -3
                            2022
        July                 August              September
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
                1  2      1  2  3  4  5  6               1  2  3
 3  4  5  6  7  8  9   7  8  9 10 11 12 13   4  5  6  7  8  9 10
10 11 12 13 14 15 16  14 15 16 17 18 19 20  11 12 13 14 15 16 17
17 18 19 20 21 22 23  21 22 23 24 25 26 27  18 19 20 21 22 23 24
24 25 26 27 28 29 30  28 29 30 31           25 26 27 28 29 30
31
```

- `clear`


## File system

- `pwd`
- `cd /`
- `cd ~`
- `cd -`
- /opt as “reserved for the installation of add-on application software packages

## Links

- Softlinks
    - aka symboliclink
    - like Shortcut
        - `ln -s ~/Desktop/NUMBERS softlinkname`
- Hardlinks
    - Same file

## ls command options

- `ls -l`
- `ls -a`
- `ls -t`
- `ls -r`
- `ls -tr`
- `ls -ia`

## Working with files

- touch
- mkdir
- rm
- cp
- mv
- file

```
e99h2121@DESKTOP-8PG96UV:/mnt/c/workspaces/linux_playground$ file file1
file1: empty
```

- 空白、特殊文字
- [補完機能、ヒストリ、エイリアスでコマンドラインの入力を“楽”にしよう：“応用力”をつけるためのLinux再入門（5）（1/2 ページ） - ＠IT](https://atmarkit.itmedia.co.jp/ait/articles/1603/09/news019.html)


## Viewing and Editing files

- gedit
- nano
- less
- cat, tac
- head, tail
- wc

```
e99h2121@DESKTOP-8PG96UV:/mnt/c/workspaces/linux_playground$ wc test.txt
 2  1 14 test.txt
```

## Help Yourself!

```
e99h2121@DESKTOP-8PG96UV:/mnt/c/workspaces/linux_playground$ which which
/usr/bin/which
```

`man cp`

```
CP(1)                                               User Commands                                               CP(1)

NAME
       cp - copy files and directories

SYNOPSIS
       cp [OPTION]... [-T] SOURCE DEST
       cp [OPTION]... SOURCE... DIRECTORY
       cp [OPTION]... -t DIRECTORY SOURCE...

DESCRIPTION
       Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.

       Mandatory arguments to long options are mandatory for short options too.

       -a, --archive
              same as -dR --preserve=all

       --attributes-only
              don't copy the file data, just the attributes
```

## おまけ

[Command Line for Beginners – How to Use the Terminal Like a Pro [Full Handbook]](https://www.freecodecamp.org/news/command-line-for-beginners/)

[Conquering the Command Line](https://www.freecodecamp.org/news/conquering-the-command-line-f85f5e46c07c/)

[UNIX系OSのコマンドラインインターフェイス操作を克服できる学習サイト - Qiita](https://qiita.com/v_avenger/items/a8b96852ce8c7d7e1e19)
[Linux Command Line Cheat Sheet by DaveChild - Download free from Cheatography - Cheatography.com: Cheat Sheets For Every Occasion](https://cheatography.com/davechild/cheat-sheets/linux-command-line/)
[Linux Command Cheat Sheet](https://www.guru99.com/linux-commands-cheat-sheet.html)

以上です～
![LINUX Command line basics.jpg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/93824/f328baf9-2b6f-53c3-748f-f2d3972362b5.jpeg)
