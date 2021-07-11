スケジューラ実行ができるライブラリ、Quartz。

http://www.quartz-scheduler.org/

http://www.quartz-scheduler.org/documentation/quartz-2.2.2/examples/ にサンプルがあります。

## Hello World

https://github.com/Flipkart/quartz/blob/master/distribution/examples/src/main/java/org/quartz/examples/example1/HelloJob.java
https://github.com/Flipkart/quartz/blob/master/distribution/examples/src/main/java/org/quartz/examples/example1/SimpleExample.java

を参照のこと。以下抜粋

```SimpleExample.java
  public void run() throws Exception {
    Logger log = LoggerFactory.getLogger(SimpleExample.class);

    log.info("------- Initializing ----------------------");

    // First we must get a reference to a scheduler
    SchedulerFactory sf = new StdSchedulerFactory();
    Scheduler sched = sf.getScheduler();

    log.info("------- Initialization Complete -----------");

    // computer a time that is on the next round minute
    Date runTime = evenMinuteDate(new Date());

    log.info("------- Scheduling Job  -------------------");

    // define the job and tie it to our HelloJob class
    JobDetail job = newJob(HelloJob.class).withIdentity("job1", "group1").build();

    // Trigger the job to run on the next round minute
    Trigger trigger = newTrigger().withIdentity("trigger1", "group1").startAt(runTime).build();

    // Tell quartz to schedule the job using our trigger
    sched.scheduleJob(job, trigger);
    log.info(job.getKey() + " will run at: " + runTime);

    // Start up the scheduler (nothing can actually run until the
    // scheduler has been started)
    sched.start();

    log.info("------- Started Scheduler -----------------");

    // wait long enough so that the scheduler as an opportunity to
    // run the job!
    log.info("------- Waiting 65 seconds... -------------");
    try {
      // wait 65 seconds to show job
      Thread.sleep(65L * 1000L);
      // executing...
    } catch (Exception e) {
      //
    }

    // shut down the scheduler
    log.info("------- Shutting Down ---------------------");
    sched.shutdown(true);
    log.info("------- Shutdown Complete -----------------");
  }

```


## タスク定期実行等、関連

http://www.atmarkit.co.jp/fjava/javatips/078java008.html


http://www.02.246.ne.jp/~torutk/javahow2/timer.html


メモのようなところですが、以上です。
