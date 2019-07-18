let newsCheckOne = document.getElementById('firstcheck')
let newsCheckTwo = document.getElementById('secondcheck')


newsCheckOne.addEventListener('change', matchCheckBox, false);
newsCheckTwo.addEventListener('change', matchCheckBox, false);



function matchCheckBox(newsCheck){
    var isChecked = newsCheck.target.checked;
        newsCheckTwo.checked = isChecked;
        newsCheckOne.checked = isChecked;
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
    document.getElementById('seconds').innerHTML = seconds;
    // divide seconds by 60 to get minutes
    var minute = (millisecTilMidnight / 60000) % 60;
    var minutes = Math.trunc(minute)
    document.getElementById('minutes').innerHTML = minutes;
    // divide minutes by 60 to get hours
    var hour = (millisecTilMidnight / 3600000) % 60;
    var hours = Math.trunc(hour);
    document.getElementById('hours').innerHTML = hours;
    // divide hours by 24 to get days
    var day = (millisecTilMidnight / 86400000) % 24;
    var days = Math.trunc(day);
    document.getElementById('days').innerHTML = days;
  }, 1000)