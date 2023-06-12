// Buat elemen meta
var head = document.getElementsByTagName('head')[0];

var metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');

var metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=0.5');

var metaXUACompatible = document.createElement('meta');
metaXUACompatible.setAttribute('http-equiv', 'X-UA-Compatible');
metaXUACompatible.setAttribute('content', 'ie=edge');

var metaDescription = document.createElement('meta');
metaDescription.setAttribute('name', 'description');
metaDescription.setAttribute('content', 'Temukan berbagai konfigurasi terbaru untuk aplikasi HTTP Injector dan pengaturan kuota terbaru dari operator seperti Axis, Indosat, dan Telkomsel. Dapatkan config terbaru untuk akses gratis ke game, musik, edukasi, dan layanan media populer seperti Netflix. Kami menyediakan update config terbaru, cara mengubah kuota, dan tips trik untuk memaksimalkan penggunaan kuota Anda. Unduh config terbaru dan tingkatkan pengalaman internet Anda dengan akses tak terbatas. Raih kemudahan akses dan informasi lengkap mengenai config dan pengaturan terbaru untuk memenuhi kebutuhan digital Anda.');

var metaKeywords = document.createElement('meta');
metaKeywords.setAttribute('name', 'keywords');
metaKeywords.setAttribute('content', 'config hc, config http injector, config http injector axis game, config http injector axis game terbaru, config http injector indosat, config http injector telkomsel, config http injector terbaru, config edukasi axis terbaru, config indosat edukasi terbaru, config indosat edukasi http injector, config telkomsel kuota belajar, ubah kuota multimedia jadi reguler, ubah kuota game axis terbaru, ubah kuota edukasi, config axis suhiroll, config axis sushiroll terbaru, config axis musik terbaru, config axis musik, config axis edukasi hc, axis game unlock, axis game unlock ssh, cus sushiroll terbaru, config axis musik terbaru, config axis edukasi hc, axis game unlock, axis game unlock ssh, config axis Edukasi hc, pesulap merah dan gus samsudin, pesulap merah, config axis opok unlimited, telkomsel opok http custom, ubah kuota netflix, config telkomsel gamemax, config telkomsel gamemax terbaru, config gamemax telkomsel terbaru http injector, config gamemax telkomsel terbaru http custom, config gamemax telkomsel http custom, config gamemax telkomsel hc, config kuota tiktok axis, config axis sushiroll http custom, config axis sushiroll, config axis sushiroll hc, config axis sushiroll terbaru, config sushiroll axis terbaru hd, config axis musik, config axis musik terbaru, config axis music, config axis kuota musik, cara ubah kuota musik axis jadi reguler, cara merubah kuota musik axis, cara ubah kuota axis edukasi, cara ubah kuota axis edukasi ke reguler, cara ubah kuota edukasi axis jadi reguler, cara ubah kuota edukasi axis jadi reguler terbaru, config axis edukasi terbaru, config axis edukasi http custom, config axis ed');
head.appendChild(metaKeywords);

var metaAuthor = document.createElement('meta');
metaAuthor.setAttribute('name', 'author');
metaAuthor.setAttribute('content', window.location.hostname);
head.appendChild(metaAuthor);

var metaRobots = document.createElement('meta');
metaRobots.setAttribute('name', 'robots');
metaRobots.setAttribute('content', 'index, follow');
head.appendChild(metaRobots);

var metaGooglebot = document.createElement('meta');
metaGooglebot.setAttribute('name', 'googlebot');
metaGooglebot.setAttribute('content', 'index, follow');
head.appendChild(metaGooglebot);

var metaBingbot = document.createElement('meta');
metaBingbot.setAttribute('name', 'bingbot');
metaBingbot.setAttribute('content', 'index, follow');
head.appendChild(metaBingbot);

// Buat elemen meta untuk Social Media Meta Tags
var metaOgTitle = document.createElement('meta');
metaOgTitle.setAttribute('property', 'og:title');
metaOgTitle.setAttribute('content', 'Judul Halaman');
head.appendChild(metaOgTitle);

var metaOgDescription = document.createElement('meta');
metaOgDescription.setAttribute('property', 'og:description');
metaOgDescription.setAttribute('content', 'Temukan berbagai konfigurasi terbaru untuk aplikasi HTTP Injector dan pengaturan kuota terbaru dari operator seperti Axis, Indosat, dan Telkomsel. Dapatkan config terbaru untuk akses gratis ke game, musik, edukasi, dan layanan media populer seperti Netflix. Kami menyediakan update config terbaru, cara mengubah kuota, dan tips trik untuk memaksimalkan penggunaan kuota Anda. Unduh config terbaru dan tingkatkan pengalaman internet Anda dengan akses tak terbatas. Raih kemudahan akses dan informasi lengkap mengenai config dan pengaturan terbaru untuk memenuhi kebutuhan digital Anda."');

var metaOgImage = document.createElement('meta');
metaOgImage.setAttribute('property', 'og:image');
metaOgImage.setAttribute('content', 'URL gambar yang mewakili halaman ini');
head.appendChild(metaOgImage);

var metaOgUrl = document.createElement('meta');
metaOgUrl.setAttribute('property', 'og:url');
metaOgUrl.setAttribute('content', 'URL halaman ini');
head.appendChild(metaOgUrl);

// Buat elemen link untuk Favicon
var linkFavicon = document.createElement('link');
linkFavicon.setAttribute('rel', 'icon');
linkFavicon.setAttribute('href', 'URL favicon');
linkFavicon.setAttribute('type', 'image/png');
head.appendChild(linkFavicon);

// Buat elemen link untuk CSS Stylesheets
var linkStylesheet = document.createElement('link');
linkStylesheet.setAttribute('rel', 'stylesheet');
linkStylesheet.setAttribute('href', '/linked/style.css');
head.appendChild(linkStylesheet);

// Mendapatkan judul halaman
var pageTitle = document.title;
var domain = window.location.hostname;
// Mengganti nama domain dalam judul halaman
var updatedTitle = pageTitle.split('-')[0] + '- ' + domain;
document.title = updatedTitle;

// Memasukkan elemen-elemen ke dalam <head> tag 
 head.appendChild(metaCharset); 
 head.appendChild(metaViewport); 
 head.appendChild(metaXUACompatible); 
 head.appendChild(metaDescription); 
 head.appendChild(metaKeywords); 
 head.appendChild(metaAuthor); 
 head.appendChild(metaRobots); 
 head.appendChild(metaGooglebot); 
 head.appendChild(metaBingbot); 
 head.appendChild(metaOgTitle); 
 head.appendChild(metaOgDescription); 
 head.appendChild(metaOgImage); 
 head.appendChild(metaOgUrl); 
 head.appendChild(linkFavicon); 
 head.appendChild(linkStylesheet);

function loadScript(path) {
  var script = document.createElement('script');
  script.src = path;
  document.head.appendChild(script);
}

loadScript("linked/favicon.js");
loadScript("linked/bg_random_color.js");
loadScript("linked/base.js");
loadScript("linked/pembuka.js");
loadScript("linked/penutup.js");
loadScript("linked/script.js");
loadScript("linked/google.js");
loadScript("linked/teks-kedip.js");
loadScript("linked/ip-address.js");
loadScript("linked/update.js");
loadScript("linked/teks-config.js");
loadScript("linked/speed.js");
loadScript("linked/komenwa.js");
loadScript("linked/jam-digital.js");
loadScript("linked/jam-analog.js");
loadScript("linked/names.js");


// pembuka an
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
  
         function getSavedColor() { 
             return localStorage.getItem('backgroundColor'); 
         } 
  
         function setBackgroundColor(color) { 
             document.body.style.backgroundColor = color; 
             localStorage.setItem('backgroundColor', color);  
         } 
  
         function clearSavedColor() { 
             localStorage.removeItem('backgroundColor'); 
         } 
         var savedColor = getSavedColor(); 
  
         if (savedColor) { 
             setBackgroundColor(savedColor); 
         } else { 
             var randomColor = getRandomColor(); 
             setBackgroundColor(randomColor); 
         } 
         clearSavedColor();

// penutup an
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
