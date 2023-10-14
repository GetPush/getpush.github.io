var isPageActive = true;

function displayTime() {
  if (isPageActive) {
    var date = new Date();
    var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    var day = days[date.getDay()];
    var currentDate = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var amPM = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    var timeString = hour + ":" + minute + ":" + second + " " + amPM;
    var dateString = day + ", " + currentDate + " " + month + " " + year + " pkl " + timeString;
    document.getElementById("jam-dua").innerHTML = dateString;
    document.getElementById("jam-sambutan").innerHTML = dateString;
  }
}

window.addEventListener("focus", function () {
  isPageActive = true;
  displayTime();
});

window.addEventListener("blur", function () {
  isPageActive = false;
});

displayTime();
