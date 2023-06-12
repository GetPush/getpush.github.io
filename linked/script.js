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