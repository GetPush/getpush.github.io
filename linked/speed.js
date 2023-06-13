function measureInternetSpeed(speedElementId) {
  var speedElement = document.getElementById(speedElementId);

  var startTime, endTime;
  var download = new Image();
  download.onload = function() {
    endTime = (new Date()).getTime();
    showSpeed();
  };

  download.onerror = function(err, msg) {
    console.log("Download error", err, msg);
    showSpeed();
  };

  startTime = (new Date()).getTime();
  var cacheBuster = "?nnn=" + startTime;
  download.src = "/linked/images/bg.jpg" + cacheBuster;

  function showSpeed() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = 1.14 * 8; // Ukuran gambar dalam bit
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);

    speedElement.innerHTML = "Kecepatan Internet Anda: " + speedMbps + " Mbps";
  }
}
