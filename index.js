let newsCheckOne = document.getElementById('firstcheck')
let newsCheckTwo = document.getElementById('secondcheck')
let checkBtnOne = document.getElementById('btn-check');
let checkBtnTwo = document.getElementById('btn-check-two');
const APIURL = "https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/";

newsCheckOne.addEventListener('change', matchCheckBox, false);
newsCheckTwo.addEventListener('change', matchCheckBox, false);
checkBtnOne.addEventListener('click', checkBtnSubmit, false);
checkBtnTwo.addEventListener('click', checkBtnSubmit, false);


function matchCheckBox(newsCheck){
    var isChecked = newsCheck.target.checked;
        newsCheckTwo.checked = isChecked;
        newsCheckOne.checked = isChecked;
}

function checkBtnSubmit(newsCheck){
  if(newsCheckOne.checked === false){
    alert('Please Check The Checkboxes Before Continuing');
  } else {
    fetch(APIURL)
    .then((res) => {
      return res.json();
    }).then(res => {
        var toObj = JSON.parse(res.body);
        document.getElementById('respbtn').innerHTML = toObj.submitok;
        document.getElementById('btn-check-two').innerHTML = toObj.submitok;
      }
    )
  }
}




 let futureDate = new Date();
 futureDate.setDate(futureDate.getDate() + 5);
 futureDate.setHours(24,0,0,0);
  setInterval(function(){
    var NOW = new Date();
    var millisecTilMidnight = futureDate - NOW;
    // divide miliseconds by 1000 to get seconds
    var second = (millisecTilMidnight / 1000) % 60;
    var seconds = Math.trunc(second);
    document.getElementById('seconds').innerHTML = seconds  + ' seconds';
    // divide seconds by 60 to get minutes
    var minute = (millisecTilMidnight / 60000) % 60;
    var minutes = Math.trunc(minute)
    document.getElementById('minutes').innerHTML = minutes  + ' minutes';
    // divide minutes by 60 to get hours
    var hour = (millisecTilMidnight / 3600000) % 60;
    var hours = Math.trunc(hour);
    document.getElementById('hours').innerHTML = hours  + ' hours';
    // divide hours by 24 to get days
    var day = (millisecTilMidnight / 86400000) % 24;
    var days = Math.trunc(day);
    document.getElementById('days').innerHTML = days + ' days';
  }, 1000)