### V$SESSION と V$PROCESS の ER 的な関係

https://www.shift-the-oracle.com/view/dynamic-performance-view/session-process.html


DBへの同時接続数が増えるとORA-00020,ORA-12516,ORA-12519,ORA-12520といったエラーが発生してDBに接続できなくなります。


### アラートログより

アラートログからDB停止時のログを探す。
LICENSE_HIGH_WATER_MARKの値を確認。


### V$RESOURCE_LIMITで現状を確認

起動中のDBの最大接続数を確認。

```sql
SELECT * FROM v$resource_limit
where upper(resource_name)='PROCESSES'
/
```

RESOURCE_NAME リソース名(上記ではprocessesのレコードのみ表示)
CURRENT_UTILIZATION 現在の値
MAX_UTILIZATION 起動後の最大値
INITIAL_ALLOCATION 初期割当
LIMIT_VALUE 制限値


単純にPROCESSESが小さい場合(ORA-00020)は、

・processesを大きくする
または、
・アプリケーションのコネクション開放漏れを調査する

という流れ。



実行中のSQLを調べるSQL。


【1】

```sql
SELECT a.sid SID, a.serial# SERIAL, 
a.terminal TERMINAL, 
floor(a.last_call_et/3600)||':'|| 
floor(mod (a.last_call_et,3600)/60)||':'|| mod(mod(a.last_call_et,3600),60) "TIME", 
SUBSTRB(a.program,1,10) PROGRAM, b.sql_text SQLTEXT 
FROM v$session a, v$sqltext b
WHERE a.sql_address = b.address AND a.status='ACTIVE' AND a.sql_hash_value = b.hash_value AND 
a.username is not null ORDER BY a.sid,b.piece 
```

【2】

```sql
SELECT a.sid SID, a.serial# SERIAL, 
a.terminal TERMINAL, 
floor(a.last_call_et/3600)||':'|| 
floor(mod (a.last_call_et,3600)/60)||':'|| mod(mod(a.last_call_et,3600),60) "TIME", 
SUBSTRB(a.program,1,10) PROGRAM, b.sql_text SQLTEXT 
FROM v$session a, v$sqltext b
WHERE a.sql_address = b.address AND a.sql_hash_value = b.hash_value AND 
a.username is not null ORDER BY a.sid,b.piece 
```

【3】

```sql
SELECT 
to_char(sysdate,'yyyy/mm/dd hh24:mi:ss') NOWTIME,
decode(l.lmode,6,'ロックセッション','待機セッション') kind,
s.sid,s.serial#,s.machine,s.program,s.username,s.status,
to_char((sysdate-last_call_et/86400),'YY/MM/DD HH24:MI:SS') start_time,
floor(s.last_call_et/3600)||'時間'||
floor(mod(s.last_call_et,3600)/60)||'分'||
mod(mod(s.last_call_et,3600),60)||'秒' "TTIME",
last_call_et ,
w.event,
o.object_name,
q.piece,
q.sql_text,
l.type,l.lmode,l.request
FROM v$session_wait w,v$session s,v$sqltext q,v$lock l,v$locked_object lo,dba_objects o
where w.sid=s.sid
and q.hash_value=s.sql_hash_value
and l.sid=s.sid
and lo.session_id=s.sid
and o.object_id=lo.object_id
and o.owner<>'SYS'
and last_call_et > 30
and (l.lmode=6 or l.request=6)
order by lo.object_id,l.lmode,start_time ,sid,lmode,piece
```


【切断方法】

```sql
alter system kill session '<sidの値>,<serial#の値>';
```
  
