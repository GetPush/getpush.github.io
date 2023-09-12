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

// header
const headerHTML = `   
   <script src="/linked/penutup.js"></script>  
     <script src="/linked/names.js"></script>  
      <script src="/linked/speed.js"></script>  
       <script src="/linked/teks-config.js"></script>
<hr>
<hr>
<header>
   <div class="nav-row-1">    
     <nav>    
       <ul class="nav-container">    
         <h1 class="title"></h1>    
    <!--     <li>    
           <a href="/about/grup-telegram.html">Telegram</a>    
         </li>   -->
         <li>    
           <a href="/page/home.html">Beranda</a>    
         </li>  
         <li>    
           <a href="qhttps://s.bankneo.co.id/iMl110/#register?r_code=D2TYA2">Cuan Legit</a>    
         </li>   
    <!--     <li>
           <a href="/page/ssh/direct.html">Create SSH</a>    
         </li>    
         <li>    
           <a href="/about/sosmed.html">Sosmed</a>    
         </li>    
         <li>    
           <a href="/linked/images/donasi.png">Donasi</a>    
         </li>    -->
         <li>    
           <a href="https://apppintar.blogspot.com/">Blog</a>    
         </li>    
    <!--   </ul>    
     </nav>    
  </div>    
   <div class="nav-row-2">    
     <nav>    
       <ul class="nav-container">    
         <h1 class="title"></h1>    -->  
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
     <!--    <li>    
           <a href="https://apppintar.blogspot.com/">Selengkapnya =></a>    
         </li>    -->
       </ul>    
     </nav>    
   </div>  
</header>
<hr>
 `; 
  
   window.addEventListener("DOMContentLoaded", function () { 
     var headerElement = document.getElementById("header"); 
     if (headerElement) { 
       headerElement.innerHTML = headerHTML; 
     } 
   });

   function loadScripts(scripts, callback) {  
      var loadedCount = 0;  
  
      function scriptLoaded() {  
        loadedCount++;  
        if (loadedCount === scripts.length) {  
          callback();  
        }  
      }  
  
      function loadScript(script) {  
        var scriptElement = document.createElement("script");  
        scriptElement.src = script;  
        scriptElement.onload = scriptLoaded;  
        document.head.appendChild(scriptElement);  
      }  
  
      for (var i = 0; i < scripts.length; i++) {  
        loadScript(scripts[i]);  
      }  
    }  
  
    var scriptsToLoad = [  
      "/linked/bg_random_color.js", 
      "/linked/favicon.js",
      "/linked/google.js", 
      "/linked/ip-address.js", 
      "/linked/jam-digital.js",  
      "/linked/jam-analog.js",
   //   "/linked/scroll.js", 
      "/linked/update.js", 
      "/linked/whatsapp.js"
    ];  
  
    window.onload = function() {  
      loadScripts(scriptsToLoad, function() {  
      });  
    };