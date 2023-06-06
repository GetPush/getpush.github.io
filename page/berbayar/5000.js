// Fungsi untuk memverifikasi pembayaran
function verifikasiPembayaran() {
  var form = document.getElementById("uploadForm");
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    var screenshotFile = document.getElementById("screenshot").files[0];
    var idPembayaran = document.getElementById("idPembayaran").value;

    var nominal = 5000; // Nominal pembayaran yang diharapkan

    // Mengambil nilai pembayaran dari pengguna
    var pembayaran = parseInt(idPembayaran);

    if (pembayaran >= nominal) {
      // Lakukan verifikasi pembayaran dengan mengirim data ke server atau melakukan validasi di sini
      // ...

      // Set cookie pembayaran yang telah terverifikasi
      setCookie("status_pembayaran", "terverifikasi", 30);

      // Menampilkan tombol untuk melanjutkan ke halaman berikutnya
      var tombolLanjut = document.getElementById("tombolLanjut");
      tombolLanjut.style.display = "block";

      // Mengizinkan akses ke halaman selanjutnya
      var linkHalamanSelanjutnya = document.getElementById("linkHalamanSelanjutnya");
      linkHalamanSelanjutnya.href = "/page/thanks/v2ray.htm";
    } else {
      // Jika pembayaran kurang dari nominal yang diharapkan
      alert("Pembayaran minimal Rp 5000. Mohon lakukan pembayaran dengan nominal yang sesuai.");
    }
  });

  // Tampilkan QR code menggunakan library atau logika pembuatan QR code
  var qrcodeElement = document.getElementById("qrcode");
  // Generate QR code dengan menggunakan data yang sesuai, seperti ID pembayaran
  var qrCodeData = "contoh_data"; // Ganti dengan data yang sesuai
  // ...
  // Tampilkan QR code ke dalam elemen dengan ID "qrcode"
  qrcodeElement.innerHTML = qrCodeData; // Ganti dengan logika tampilan QR code yang sesuai
}

