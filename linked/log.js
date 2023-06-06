// Mendapatkan waktu akses
function getCurrentTime() {
  var date = new Date();
  return date.toISOString();
}

// Mendapatkan informasi pengunjung
function getVisitorInfo() {
  var ip = "<?php echo $_SERVER['REMOTE_ADDR']; ?>"; // Alamat IP pengunjung
  var userAgent = navigator.userAgent; // User-Agent pengunjung
  var location = ""; // Lokasi pengunjung

  // Kirim permintaan AJAX ke GeoIP API untuk mendapatkan informasi lokasi berdasarkan IP address
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.geoiplookup.io/" + ip, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      location = response.city + ", " + response.country_name; // Menggabungkan informasi kota dan negara

      // Catat log histori dengan informasi yang telah diperoleh
      var logEntry = getCurrentTime() + " - IP: " + ip + ", User-Agent: " + userAgent + ", Lokasi: " + location + "\n";

      // Kirim permintaan AJAX untuk memperbarui file log.txt di repositori
      var xhr2 = new XMLHttpRequest();
      xhr2.open("GET", "log.txt", true);
      xhr2.onload = function() {
        if (xhr2.status === 200) {
          var existingContent = xhr2.responseText;
          var updatedContent = "";

          // Pengecekan apakah waktu saat ini adalah pukul 00:00
          var now = new Date();
          if (now.getHours() === 0 && now.getMinutes() === 0) {
            updatedContent = logEntry; // Jika pukul 00:00, log direset
          } else {
            updatedContent = existingContent + logEntry; // Jika bukan pukul 00:00, tambahkan log baru ke log yang ada
          }

          // Kirim permintaan AJAX untuk memperbarui file log.txt di repositori
          var xhr3 = new XMLHttpRequest();
          xhr3.open("PUT", "log.txt", true);
          xhr3.send(updatedContent);
        } else {
          // Terjadi kesalahan saat mengambil file log.txt dari repositori
          // Handle error sesuai kebutuhan Anda
        }
      };
      xhr2.send();
    } else {
      // Terjadi kesalahan saat mendapatkan informasi lokasi
      // Handle error sesuai kebutuhan Anda
    }
  };
  xhr.send();
}

// Memanggil fungsi getVisitorInfo saat halaman dimuat
window.onload = getVisitorInfo;
