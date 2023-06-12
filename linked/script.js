const pembukaHTML = `   
   <div class="nav-row-1">    
     <nav>    
       <ul class="nav-container">    
         <h1 class="title"></h1>    
         <li>    
           <a href="/about/grup-telegram.html">Telegram</a>    
         </li>    
         <li>    
           <a href="https://pena-internet.blogspot.com/">Pena Internet</a>    
         </li>    
         <li>    
           <a href="/page/ssh/direct.html">Create SSH</a>    
         </li>    
         <li>    
           <a href="/about/sosmed.html">Sosmed</a>    
         </li>    
         <li>    
           <a href="/linked/images/donasi.png">Donasi</a>    
         </li>    
         <li>    
           <a href="https://apppintar.blogspot.com/">Blog</a>    
         </li>    
       </ul>    
     </nav>    
   </div>    
   <div class="nav-row-2">    
     <nav>    
       <ul class="nav-container">    
         <h1 class="title"></h1>    
         <li>    
           <a href="/page/home.html">Beranda</a>    
         </li>    
         <li>    
           <a href="/page/tutorial.html">Tutorial</a>    
         </li>    
         <li>    
           <a href="/page/apps.html">Aplikasi</a>    
         </li>    
         <li>    
           <a href="https://www.youtube.com/channel/UCeMezZCLKzcpQyYFSiW6DCA?sub_confirmation=1">YouTube</a>    
         </li>    
         <li>    
           <a href="/page/dana-kaget/direct.html">Dana Kaget</a>    
         </li>    
         <li>    
           <a href="https://apppintar.blogspot.com/">Selengkapnya =></a>    
         </li>    
       </ul>    
     </nav>    
   </div>  
 `; 
  
   window.addEventListener("DOMContentLoaded", function () { 
     var pembukaElement = document.getElementById("pembuka"); 
     if (pembukaElement) { 
       pembukaElement.innerHTML = pembukaHTML; 
     } 
   });

        // Fungsi untuk mendapatkan warna acak dalam format RGB 
         function getRandomColor() { 
             var r = Math.floor(Math.random() * 256); 
             var g = Math.floor(Math.random() * 256); 
             var b = Math.floor(Math.random() * 256); 
             return 'rgb(' + r + ',' + g + ',' + b + ')'; 
         } 
  
         // Fungsi untuk memeriksa apakah warna sebelumnya tersimpan 
         function getSavedColor() { 
             return localStorage.getItem('backgroundColor'); 
         } 
  
         // Fungsi untuk mengatur warna latar belakang 
         function setBackgroundColor(color) { 
             document.body.style.backgroundColor = color; 
             localStorage.setItem('backgroundColor', color); // Simpan warna baru di penyimpanan lokal 
         } 
  
         // Hapus warna yang tersimpan saat halaman diperbarui 
         function clearSavedColor() { 
             localStorage.removeItem('backgroundColor'); 
         } 
  
         // Periksa apakah warna sebelumnya tersimpan 
         var savedColor = getSavedColor(); 
  
         // Jika warna tersimpan, gunakan warna tersebut 
         if (savedColor) { 
             setBackgroundColor(savedColor); 
         } else { 
             // Jika warna belum tersimpan, atur warna acak baru 
             var randomColor = getRandomColor(); 
             setBackgroundColor(randomColor); 
         } 
  
         // Hapus warna yang tersimpan saat halaman diperbarui 
         clearSavedColor();

// Generate random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Set favicon color
function setFaviconColor(color) {
  var favicon = document.querySelector("link[rel*='icon']");
  var canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  var context = canvas.getContext('2d');
  context.fillStyle = color;
  context.fillRect(0, 0, canvas.width, canvas.height);
  favicon.href = canvas.toDataURL('image/png');
}

// Set random color as favicon
setFaviconColor(getRandomColor());

// cek ip address
fetch('https://api.ipify.org/?format=json') 
         .then(response => response.json()) 
         .then(data => { 
           const ipAddress = data.ip; 
           const ipAddressElement = document.getElementById('ip-address'); 
           ipAddressElement.textContent = ipAddress; 
         }) 
         .catch(error => { 
           console.error('Terjadi kesalahan saat mengambil data IP', error); 
         });

// menampilkan jam analog
function drawClock() { 
   const now = new Date(); 
  
   // Mendapatkan elemen canvas dan menginisialisasi variabel context 
   const canvas = document.getElementById('clock'); 
   const ctx = canvas.getContext('2d'); 
  
   // Membersihkan canvas sebelum menggambar 
   ctx.clearRect(0, 0, canvas.width, canvas.height); 
  
   // Menggambar lingkaran jam 
   const radius = canvas.width / 2; 
   ctx.beginPath(); 
   ctx.arc(radius, radius, radius - 10, 0, 2 * Math.PI); 
   ctx.lineWidth = 10; 
   ctx.strokeStyle = '#333'; 
   ctx.stroke(); 
  
   // Menggambar angka pada jam 
   ctx.font = 'bold 20px Arial'; 
   ctx.textAlign = 'center'; 
   ctx.textBaseline = 'middle'; 
   for (let i = 1; i <= 12; i++) { 
     const angle = i * Math.PI / 6; 
     const x = radius + (radius - 30) * Math.sin(angle); 
     const y = radius - (radius - 30) * Math.cos(angle); 
     ctx.fillText(i, x, y); 
   } 
  
   // Menggambar jarum detik 
   const second = now.getSeconds(); 
   const secondAngle = second * Math.PI / 30; 
   ctx.beginPath(); 
   ctx.moveTo(radius, radius); 
   ctx.lineTo(radius + (radius - 40) * Math.sin(secondAngle), radius - (radius - 40) * Math.cos(secondAngle)); 
   ctx.strokeStyle = '#f00'; 
   ctx.lineWidth = 2; 
   ctx.stroke(); 
  
   // Menggambar jarum menit 
   const minute = now.getMinutes(); 
   const minuteAngle = (minute + second / 60) * Math.PI / 30; 
   ctx.beginPath(); 
   ctx.moveTo(radius, radius); 
   ctx.lineTo(radius + (radius - 60) * Math.sin(minuteAngle), radius - (radius - 60) * Math.cos(minuteAngle)); 
   ctx.strokeStyle = '#333'; 
   ctx.lineWidth = 5; 
   ctx.stroke(); 
  
   // Menggambar jarum jam 
   const hour = now.getHours(); 
   const hourAngle = (hour + minute / 60) * Math.PI / 6; 
   ctx.beginPath(); 
   ctx.moveTo(radius, radius); 
   ctx.lineTo(radius + (radius - 80) * Math.sin(hourAngle), radius - (radius - 80) * Math.cos(hourAngle)); 
   ctx.strokeStyle = '#333'; 
   ctx.lineWidth = 10; 
   ctx.stroke(); 
 } 
  
 setInterval(drawClock, 1000); 
  
 // Tambahan kode JavaScript untuk menambahkan jarum jam analog 
 const hourHand = document.querySelector('.hour-hand'); 
  
 function setRotation() { 
   const now = new Date(); 
   const hour = now.getHours(); 
   const minute = now.getMinutes(); 
   const hourAngle = (hour + minute / 60) * 30; // menghitung sudut rotasi berdasarkan waktu 
   hourHand.style.transform = `rotate(${hourAngle}deg)`; // mengubah sudut rotasi jarum jam 
 } 
  
 setInterval(setRotation, 1000);

// menampilkan jam digital
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

// menampilkan random names
function randomName() { 
   var firstName = ""; 
   var lastName = ""; 
  
   var vowels = "aeiou"; 
   var consonants = "bcdfghjklmnpqrstvwxyz"; 
  
   // Generate first name 
   var length = Math.floor(Math.random() * 4) + 3; 
   var useVowel = Math.random() < 0.5; 
  
   for (var i = 0; i < length; i++) { 
     var randomIndex; 
     if (useVowel) { 
       randomIndex = Math.floor(Math.random() * vowels.length); 
       firstName += vowels.charAt(randomIndex); 
     } else { 
       randomIndex = Math.floor(Math.random() * consonants.length); 
       firstName += consonants.charAt(randomIndex); 
     } 
  
     useVowel = !useVowel; 
   } 
  
   // Generate last name 
   length = Math.floor(Math.random() * 4) + 3; 
   useVowel = Math.random() < 0.5; 
  
   for (var i = 0; i < length; i++) { 
     var randomIndex; 
     if (useVowel) { 
       randomIndex = Math.floor(Math.random() * vowels.length); 
       lastName += vowels.charAt(randomIndex); 
     } else { 
       randomIndex = Math.floor(Math.random() * consonants.length); 
       lastName += consonants.charAt(randomIndex); 
     } 
  
     useVowel = !useVowel; 
   } 
  
   return firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1); 
 } 
  
 function updateNames() { 
   var fullName = randomName(); 
  
   document.getElementById('randomNames1').textContent = fullName; 
   document.getElementById('randomNames2').textContent = fullName; 
 } 
  
 window.addEventListener('load', updateNames); 
  
 window.addEventListener('beforeunload', function() { 
   window.removeEventListener('load', updateNames); 
 });

// scrolling website smooth
function autoScroll() {
    window.scrollBy(0, 10); // Mengatur kecepatan scroll ke bawah
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        location.reload(); // Refresh halaman setelah mencapai bagian paling bawah
    }
}

setInterval(autoScroll, 500); // Mengatur interval waktu scroll, contohnya 100 milidetik atau 0.1 detik

// menampilkan kecepatan internet
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
   download.src = "/display/media/images/bg.jpg" + cacheBuster; 
  
   function showSpeed() { 
     var duration = (endTime - startTime) / 1000; 
     var bitsLoaded = 1.14 * 8; // Ukuran gambar dalam bit 
     var speedBps = (bitsLoaded / duration).toFixed(2); 
     var speedKbps = (speedBps / 1024).toFixed(2); 
     var speedMbps = (speedKbps / 1024).toFixed(2); 
  
     speedElement.innerHTML = "Kecepatan Internet Anda: " + speedMbps + " Mbps"; 
   } 
 }

// menampilkan animasi mengetik teks, contoh teks config
window.addEventListener('DOMContentLoaded', (event) => { 
   const textArray = [ 
     "Update Config HTTP Custom", 
     "Update Config V2ray HTTP Custom", 
     "Update Config HTTP Injector", 
     "Update Config Netmod Syna", 
     "Update Config Dark Tunnel", 
     "Update Config V2ray Dark Tunnel", 
     "Update Config Open Tunnel", 
     "Update Config Napsternet", 
     "Update Config KPN Tunnel" 
   ]; 
  
   const textContainer = document.getElementById("teks-config"); 
  
   let index = 0; 
   let currentText = ""; 
   let letter = ""; 
  
   function type() { 
     if (index === textArray.length) { 
       index = 0; 
     } 
     currentText = textArray[index]; 
     letter = currentText.slice(0, ++letter.length); 
  
     textContainer.textContent = letter; 
  
     if (letter.length === currentText.length) { 
       index++; 
       letter = ""; 
     } 
  
     setTimeout(type, 200); 
   } 
  
   type(); 
 });

// menampilkan waktu update dan expired 
 var today = new Date();  
  
 // Mendapatkan tanggal pembuatan dengan format dd/mm/yyyy  
 var created = new Date(today.getFullYear(), today.getMonth(), today.getDate());  
 var createdDay = ("0" + created.getDate()).slice(-2);  
 var createdMonth = ("0" + (created.getMonth() + 1)).slice(-2);  
 var createdYear = created.getFullYear();  
 var createdDate = createdDay + "/" + createdMonth + "/" + createdYear;  
  
 // Mendapatkan tanggal kadaluwarsa dengan masa aktif 7 hari dengan format dd/mm/yyyy  
 var expires = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);  
 var expiresDay = ("0" + expires.getDate()).slice(-2);  
 var expiresMonth = ("0" + (expires.getMonth() + 1)).slice(-2);  
 var expiresYear = expires.getFullYear();  
 var expiresDate = expiresDay + "/" + expiresMonth + "/" + expiresYear;  
  
 // Menampilkan tanggal pembuatan dan tanggal kadaluwarsa di halaman HTML  
 document.getElementById("created").innerHTML = "Created: " + createdDate;  
 document.getElementById("expired").innerHTML = "Expired: " + expiresDate;  
  
   //<p id="created"></p> 
   //<p id="expired"></p>

// agar komentar website masuk ke WhatsApp
document.getElementById("comment-form").addEventListener("submit", function(event) { 
     event.preventDefault(); // Mencegah pengiriman formulir secara default 
  
     var comment = document.getElementById("comment-input").value; 
  
     // Ganti nomor WhatsApp dan pesan sesuai dengan kebutuhan Anda 
     var phoneNumber = "082311529002"; 
     var message = "Komentar: " + comment; 
  
     // Membuat link WhatsApp dengan nomor dan pesan 
     var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message); 
  
     // Membuka link WhatsApp di tab baru 
     window.open(whatsappLink, "_blank"); 
  
     // Mengosongkan kolom komentar setelah pengiriman 
     document.getElementById("comment-input").value = ""; 
 });

// penutup konten website
  const penutupHTML = ` 
 <br> 
  <p>Buy Me ☕</p>   
   <h3>QR Code Ini Support Untuk Semua Dompet</h3>   
   <br>   
       <img src="/linked/images/QRcode.png" alt="QR Code" width="400" height="400">  
 <div> 
 <br> 
    <p>Saat Ini Di Update Oleh: [ <span id="randomNames2" style="font-size: 35px;"></span> ]</p>  
 <style> 
 h1 { 
     text-align: center; 
 } 
  
 #comment-form { 
     text-align: center; 
     margin-top: 20px; 
 } 
  
 #comment-input { 
     width: 300px; 
     height: 100px; 
     resize: none; 
 } 
  
 button { 
     margin-top: 10px; 
 } 
 </style> 
     <h1>komentar</h1> 
     <form id="comment-form"> 
         <textarea id="comment-input" placeholder="Masukkan komentar Anda"></textarea> 
         <button type="submit">Kirim</button> 
     </form> 
 </div> 
     <br> 
     <!-- penutup konten --> 
     <h1 style="font-size: 17px; font-weight: 400;"> untuk versi Prem silahkan contact admin kami !!!</h1> 
     <br> 
     <div style="text-align: center;"> 
       <a href="mailto:munirggplay@gmail.com" style="display: inline-block; margin-right: 10px;"> 
         <img alt="Gmail Logo" height="32" src="https://www.gstatic.com/images/icons/material/product/2x/gmail_64dp.png" width="32" /> Email 
       </a> 
       <a href="https://wa.me/6283838367172" rel="noopener noreferrer" target="_blank" style="display: inline-block; margin-right: 10px;"> 
         <img alt="WhatsApp logo" height="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" width="30" /> WhatsApp 
       </a> 
       <a href="https://t.me/telgruptoppayofficial" target="_blank" style="display: inline-block;"> 
         <img alt="Telegram" height="30" src="https://telegram.org/img/t_logo.svg" width="30" /> Telegram 
       </a> 
     </div> 
     <h3 style="color: #3e005d;"> 
       <br /> We will revert you as soon as possible...! 
     </h3> 
     <h1 style="font-size: medium; font-weight: 400; text-align: center;"> 
       <p style="color: #3e005d;"> Thank you for contacting us! <br /> 
         <b>Have a great day</b> 
       </p> 
     </h1> 
     <p> 
       <strong>TERIMAKASIH</strong> 
     </p> 
     </div> 
     <div class="nav-row-3"> 
       <ul> 
         <li> 
           <a href="/info/disclaimer.html">Disclaimer</a> 
         </li> 
         <li> 
           <a href="/info/about.html">About</a> 
         </li> 
         <li> 
           <a href="/public/sitemap.xml">sitemap</a> 
         </li> 
         <li> 
           <a href="/info/contacts.html">Contacts</a> 
         </li> 
         <li> 
           <a href="/info/privacy-policy.html">Privacy Policy</a> 
         </li> 
         <li> 
           <a href="/info/terms-and-conditions.html">Terms And Conditions</a> 
         </li> 
       </ul> 
     </div> 
     <div class="footer"> 
       <footer> 
         Copyright 2023 / website <a href="https://wa.me/6283838367172">template</a> 
       </footer> 
     </div> 
   `; 
  
       window.addEventListener("DOMContentLoaded", function () {  
      var penutupElement = document.getElementById("penutup");  
      if (penutupElement) {  
        penutupElement.innerHTML = penutupHTML;  
      }  
    });