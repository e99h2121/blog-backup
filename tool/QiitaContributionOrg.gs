const slackurl = 'https://hooks.slack.com/workflows/SlackURL';

// Slackに投稿するためのAPIリクエスト
var Slack = {
  post: function(message){
    var url = slackurl;
    var payload = {
      text: message
    };
    var options = {
      'method': 'POST',
      'contentType': 'application/json',
      'payload': JSON.stringify(payload)
    }
    var response = UrlFetchApp.fetch(url, options);
    return response;
  },
}

function main () {
  var now = new Date(); //現在日時を取得
  var time = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');
  let data= []; 
  data = countItemAndContribution();
  //console.log(count);
  write2SpreadSheet(time, data);
  var message = "ただいま " + data[0] + " 記事、" +data[1]+ " LGTM :tada: \n https://qiita.com/organizations/works-hi"; 
  Slack.post(message)
}

function test() {
  const URL = 'https://qiita.com/organizations/works-hi';//organization page
  const response = UrlFetchApp.fetch(URL);
  const html = response.getContentText();

  let contributions;
  let countposts;
  // NOTE: HTML構成変わると動かなくなる。そのときはHTMLソース表示して該当箇所を見つけて修正する。
  // NOTE: なぜかスクレイピングするとLGTMの後ろにsがつくっぽい。謎だがとりあえず放置。
  const searchTagLGTM = 'LGTMs</p><p class="op-CounterItem_count">';
  const searchTagCOUNT = 'Posts</p><p class="op-CounterItem_count">';
  let indexLGTM = html.indexOf(searchTagLGTM)
  if (indexLGTM !== -1) {
    let tmp = html.substring(indexLGTM + searchTagLGTM.length);
    indexLGTM = tmp.indexOf('</p>');
    if (indexLGTM !== -1) {
      contributions = tmp.substring(0, indexLGTM);
    }
  }
  let indexCOUNT = html.indexOf(searchTagCOUNT)
  if (indexCOUNT !== -1) {
    let tmp = html.substring(indexCOUNT + searchTagCOUNT.length);
    indexCOUNT = tmp.indexOf('</p>');
    if (indexCOUNT !== -1) {
      countposts = tmp.substring(0, indexCOUNT);
    }
  }

  console.log(contributions);
  console.log(countposts);
}

function countItemAndContribution() {
  const URL = 'https://qiita.com/organizations/works-hi';//organization page
  const response = UrlFetchApp.fetch(URL);
  const html = response.getContentText();

  let contributions;
  let countposts;
  // NOTE: HTML構成変わると動かなくなる。そのときはHTMLソース表示して該当箇所を見つけて修正する。
  // NOTE: なぜかスクレイピングするとLGTMの後ろにsがつくっぽい。謎だがとりあえず放置。
  const searchTagLGTM = 'LGTMs</p><p class="op-CounterItem_count">';
  const searchTagCOUNT = 'Posts</p><p class="op-CounterItem_count">';
  let indexLGTM = html.indexOf(searchTagLGTM)
  if (indexLGTM !== -1) {
    let tmp = html.substring(indexLGTM + searchTagLGTM.length);
    indexLGTM = tmp.indexOf('</p>');
    if (indexLGTM !== -1) {
      contributions = tmp.substring(0, indexLGTM);
    }
  }
  let indexCOUNT = html.indexOf(searchTagCOUNT)
  if (indexCOUNT !== -1) {
    let tmp = html.substring(indexCOUNT + searchTagCOUNT.length);
    indexCOUNT = tmp.indexOf('</p>');
    if (indexCOUNT !== -1) {
      countposts = tmp.substring(0, indexCOUNT);
    }
  }
  let out = [];

  out[0] = countposts;
  out[1] = contributions;
  return out;
}

function write2SpreadSheet(today, data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  // 書き込みタブの名前と揃える。
  var sheet = ss.getSheetByName('count');
  var row = sheet.getLastRow();
  var lastval = sheet.getRange(row,2).getValue();
  var plus = data[1] - lastval; 
  sheet.appendRow([today, data[1], plus, data[0]]);
}
