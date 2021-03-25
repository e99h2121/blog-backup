I have Fargated the batch server in our product. So this is the translation now I'm planning to give an presentation. (This is a memo for my presentation)

日本語スライドはこちら: https://qiita.com/e99h2121/items/cd0dea16b946869e1846

## What's great about it?
You won't have to keep a batch server running 24/365.

The relationship between jobs will be limited, so there will be no more job jams.
It's a big step for our cloud-friendly product.

We estimate that it will save the company **** per year.

## Here is the history of our product batch job 

### Ver.5x
The world only had clients and database servers. Nightly batch was kicked out of the C++ service.

### Ver.6x
In the early 2000's, it was structured in three tiers via the application server. The queue management service lives in the AP Server. When the queue starts to get jammed, the screen system and the screen management system are also jammed....

### Ver.7x
In the 2010's, the queue management service was separated from the application server, and the ability to maintain it independently was huge. It's a big deal to be able to maintain it independently.

### Ver.8x
And batch server is now fargated...


## Reference 

[Fargateでバッチサーバを作る(Creating a Batch Server with Fargate)](https://qiita.com/fnaoto/items/d6523786daa128ddfe60)

[Fargateでサーバレスバッチ基盤を構築した話(The story of building a serverless batch infrastructure with Fargate)](https://engineer.crowdworks.jp/entry/2020/07/20/180014)


### Other
Technical notes on the way to Fargate (written by Yamada)

- [WindowsローカルのAWS SDKでJavaプログラムを動かすまで(How to run a Java program on a Windows local AWS SDK)](https://qiita.com/e99h2121/items/7b153c12f61470ffdf48)
- [AWS SDK for Java 1.11.x と 2.x を共存させる(AWS SDK for Java 1.11.x and 2.x coexisting)](https://qiita.com/e99h2121/items/2dd857fc5bc20796d691)
- [AWS SDK で出会った例外(Exceptions encountered in the AWS SDK)](https://qiita.com/e99h2121/items/21cd273ac3b880e6b6ab)

Briefly speaking the most difficult point was to resolve the dependency disaster of our jar ...

## Usage (Internal use)
You can use the features by including the word "Fargate" in the batch server code. If you login with yamada_n9/yamada_n9, you can start all jobs with Fargate :smiley_cat: 

## Next 
I try to run an interface job in Fargate!

That's all for my internal memo.

