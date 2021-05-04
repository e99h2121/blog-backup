function main () {
  var now = new Date(); //現在日時を取得
  var time = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');
  let count = countContribution();
  //console.log(count);
  write2SpreadSheet(time, count);
}

function countContribution() {
  const URL = 'https://qiita.com/e99h2121';//mypage
  let responseDataGET = UrlFetchApp.fetch(URL).getContentText();
  let myRegexp = /<span class=\"css-mf9wc5\">([\d]+)<\/span>/;
  let contribution = responseDataGET.match(myRegexp);
  let out = contribution[0].replace("<span class=\"css-mf9wc5\">","").replace("<\/span>","");
  return out;
}

function write2SpreadSheet(today, count) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  // 書き込みタブの名前と揃える。
  var sheet = ss.getSheetByName('count');
  var row = sheet.getLastRow();
  var lastval = sheet.getRange(row,2).getValue();
  var plus = count - lastval; 
  sheet.appendRow([today, count, plus]);
}
