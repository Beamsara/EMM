(function() {
  'use strict';

  function getDate() {
    var date = new Date();
    var weekday = date.getDay();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear()+543;
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hour < 10) hour = "0" + hour;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    var monthNames = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

    var weekdayNames = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
    
  //    var monthColors = ["#1E90FF", "#FF69B4", "#00FFFF", "#7CFC00", "#00CED1", "#FF1493", "#00008B", "#FF7F50", "#C71585", "#FF4500", "#FFD700", "#800000"]



    

    var showDate = weekdayNames[weekday]  + " ที่ " + day + " " + monthNames[month] +    " พ.ศ. " + year;

    var showTime = hour + " : " + minutes + " : " + seconds;
    
  //   var color = monthColors[month];

    document.getElementById('date').innerHTML = showDate;

    document.getElementById('time').innerHTML = showTime;
    
  //   document.bgColor = color;
    

    requestAnimationFrame(getDate);
  }

  getDate();

}());

// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}



function on_off_led1() {
  var x = document.getElementById("tog1");
  

  if (x.innerHTML === "ปิด") {
    x.innerHTML = "เปิด";
    document.getElementById("theImage1").src = "ledon.png"
  } else {
    x.innerHTML = "ปิด";
    document.getElementById("theImage1").src = "ledoff.png"

  }
}

function on_off_led2() {
  var x = document.getElementById("tog2");
  

  if (x.innerHTML === "ปิด") {
    x.innerHTML = "เปิด";
    document.getElementById("theImage2").src = "ledon.png"
  } else {
    x.innerHTML = "ปิด";
    document.getElementById("theImage2").src = "ledoff.png"

  }
  
}
function on_off_led3() {
  var x = document.getElementById("tog3");
  

  if (x.innerHTML === "ปิด") {
    x.innerHTML = "เปิด";
    document.getElementById("theImage3").src = "ledon.png"
  } else {
    x.innerHTML = "ปิด";
    document.getElementById("theImage3").src = "ledoff.png"

  }
  
}

function myAccFunc1() {
  var x = document.getElementById("demoAcc1");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Click on the "สถานะของไฟ" link on page load to open the accordion for demo purposes
document.getElementById("myBtn1").click();

function myAccFunc2() {
  var x = document.getElementById("demoAcc2");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Click on the "สถานะของไฟ" link on page load to open the accordion for demo purposes
document.getElementById("myBtn2").click();

function on_off_plug1() {
  var x = document.getElementById("togp1");
  

  if (x.innerHTML === "ปิด") {
    x.innerHTML = "เปิด";
    document.getElementById("theImagep1").src = "plugon.png"
  } else {
    x.innerHTML = "ปิด";
    document.getElementById("theImagep1").src = "plugoff.png"

  }
}

function on_off_plug2() {
  var x = document.getElementById("togp2");
  

  if (x.innerHTML === "ปิด") {
    x.innerHTML = "เปิด";
    document.getElementById("theImagep2").src = "plugon.png"
  } else {
    x.innerHTML = "ปิด";
    document.getElementById("theImagep2").src = "plugoff.png"

  }
}

function on_off_plug3() {
  var x = document.getElementById("togp3");
  

  if (x.innerHTML === "ปิด") {
    x.innerHTML = "เปิด";
    document.getElementById("theImagep3").src = "plugon.png"
  } else {
    x.innerHTML = "ปิด";
    document.getElementById("theImagep3").src = "plugoff.png"

  }
}