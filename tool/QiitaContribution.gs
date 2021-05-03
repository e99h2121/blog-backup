// 日付レイアウトの変換メソッド
function dateStyle(date, format) {
    format = format.replace(/YYYY/, date.getFullYear());
    format = format.replace(/MM/, date.getMonth() + 1);
    format = format.replace(/DD/, date.getDate());
    return format;
}

function main () {
  var now = new Date();
  var today = dateStyle(new Date(now.getFullYear(), now.getMonth(), now.getDate()), 'YYYY/MM/DD'); //日付を整形して取得
  let count = countContribution();
  //console.log(count);
  write2SpreadSheet(today, count);
}

function countContribution() {
  const URL = 'https://qiita.com/e99h2121'; //mypage
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
  sheet.appendRow([today, count]);
}
