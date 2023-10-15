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
linkStylesheet.setAttribute('href', '/assets/style.css');
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
   <script src="/assets/JS/penutup.js"></script>  
   <script src="/assets/JS/names.js"></script>  
   <script src="/assets/JS/speed.js"></script>  
   <script src="/assets/JS/teks-config.js"></script>
<!-- sidebar konten -->
	<header class="bg-transparant px2 py1 m0 flex items-center white">
		<div class="burger pointer flex flex-column justify-between mr2">
			<span class="bg-red"></span>
			<span class="bg-yellow"></span>
			<span class="bg-green"></span>
		</div>
<!-- Atap website -->
<a class="white caps text-decoration-none h3 bold" href="#" style="text-align: left;">Logo</a>
		<nav class="ml-auto">
			<ul class="list-reset m0 h5 caps">
				<li class="inline-block btn p0 mr1">About</li>
				<li class="inline-block btn p0">Blog</li>
			</ul>
		</nav>
	</header>
<!-- ######## START FOCUS SIDEBAR CODE HERE -->
	<div id="sidenav" class="fixed z4 top-0 left-0 bg-white p2">
		<div class="close flex items-center justify-center relative pointer mb2 right">
			<div class="absolute cross bg-gray left"></div>
			<div class="absolute cross bg-gray right"></div>
		</div>

		<div class="bg-blue circle mb2 flex items-center justify-center white" style="width: 68px;height: 68px">
			<svg aria-hidden="true" class="block" width="36" role="img" xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 22 20">
				<g fill="currentColor">
					<path d="M15,0.7L12.6,0c-0.1,0-0.2,0-0.2,0.1l-0.7,2.4c0,0.1,0,0.2,0.1,0.2l2.4,0.7c0.1,0,0.2,0,0.2-0.1l0.7-2.4
                    C15.1,0.8,15.1,0.7,15,0.7z"></path>
					<path d="M13.8,4.8l-2.4-0.7c-0.1,0-0.2,0-0.2,0.1L6.9,19.1c0,0.1,0,0.2,0.1,0.2L9.4,20c0.1,0,0.2,0,0.2-0.1L13.9,5
                    C14,4.9,13.9,4.8,13.8,4.8z"></path>
					<path d="M4.9,11.1l-0.8-0.8l-0.3-0.3l0.3-0.3l0.6-0.6l2.4-2.4c0.1-0.1,0.1-0.4,0-0.5L5.7,4.7c-0.1-0.1-0.4-0.1-0.5,0L0.1,9.8
                    C0,10,0,10.2,0.1,10.4l5.1,5.1c0.1,0.1,0.4,0.1,0.5,0L7.2,14c0.1-0.1,0.1-0.4,0-0.5L4.9,11.1z"></path>
					<path d="M17.1,9.1l0.8,0.8l0.3,0.3l-0.3,0.3L17.2,11l-2.4,2.4c-0.1,0.1-0.1,0.4,0,0.5l1.5,1.5c0.1,0.1,0.4,0.1,0.5,0l5.1-5.1
                    c0.1-0.1,0.1-0.4,0-0.5l-5.1-5.1c-0.1-0.1-0.4-0.1-0.5,0l-1.5,1.5c-0.1,0.1-0.1,0.4,0,0.5L17.1,9.1z">
					</path>
				</g>
			</svg>
		</div>
		<p class="m0 muted bold">nama menu sidebar icon</p>

		<hr>
<!-- menu sidebar bagian satu -->
		<ul class="list-reset muted m0">
			<li class="h6 caps mb2">about</li>
			<li class="pointer mb2">
				<svg class="inline-block align-middle mr2" width="22" height="22" viewBox="0 0 16 16"
					fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
					<path fill-rule="evenodd"
						d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
				</svg>
				<span class="align-middle">About</span>
			</li>
			<li class="pointer mb2">
				<svg class="inline-block align-middle mr2" width="22" height="22" viewBox="0 0 16 16"
					fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
				</svg>
				<span class="align-middle">Email</span>
			</li>
			<li class="pointer mb2">
				<svg class="inline-block align-middle mr2" width="22" height="22" viewBox="0 0 16 16"
					fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
					<path d="M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
					<path fill-rule="evenodd"
						d="M2.5 3.5a1 1 0 0 1 1-1c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1 6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1-1-1z" />
				</svg>
				<span class="align-middle">RSS</span>
			</li>
		</ul>

		<hr>

<!-- menu sidebar bagian dua -->
		<ul class="list-reset muted m0">
			<li class="h6 caps mb2">Categories</li>
			<li class="pointer mb2">
				<svg class="inline-block align-middle mr2" width="22" height="22" viewBox="0 0 16 16"
					fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
					<path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z" />
					<path fill-rule="evenodd"
						d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
				</svg>
				<span class="align-middle">Category Item</span>
			</li>
			<li class="pointer mb2">
				<svg class="inline-block align-middle mr2" width="22" height="22" viewBox="0 0 16 16"
					fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
					<path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z" />
					<path fill-rule="evenodd"
						d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
				</svg>
				<span class="align-middle">Category Item</span>
			</li>
			<li class="pointer mb2">
				<svg class="inline-block align-middle mr2" width="22" height="22" viewBox="0 0 16 16"
					fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4 1h5v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6h1v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
					<path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 0 1 9 4.5z" />
					<path fill-rule="evenodd"
						d="M5 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
				</svg>
				<span class="align-middle">Category Item</span>
			</li>
		</ul>
	</div>
<!-- ######## END FOCUS SIDEBAR CODE HERE -->
	<!-- ######## START FOCUS JS CODE HERE -->
	<script>
		let burger = document.querySelector('.burger');
		let close = document.querySelector('.close');
		let sidenav = document.querySelector('#sidenav');

		// Burger click function
		burger.addEventListener('click', function () {
			sidenav.classList.add('active');
		});
		// Close click function
		close.addEventListener('click', function () {
			sidenav.classList.remove('active');
		});
	</script>
	<!-- ######## /END FOCUS JS CODE HERE -->


<header>
   <div class="nav-row-1">    
     <nav>    
       <ul class="nav-container">    
         <h1 class="title"></h1>    
         <li>    
           <a href="/page/home.html">Beranda</a>    
         </li>  
         <li>    
           <a href="https://www.youtube.com/channel/UCeMezZCLKzcpQyYFSiW6DCA?sub_confirmation=1">YouTube</a>    
         </li>    
         <li>    
           <a href="/page/dana-kaget/direct.html">Dana Kaget</a>    
         </li>    
         <li>    
           <a href="qhttps://s.bankneo.co.id/iMl110/#register?r_code=D2TYA2">Cuan Legit</a>    
         </li>   
         <li>    
           <a href="https://apppintar.blogspot.com/">Blog</a>    
         </li>    
         </ul>    
     </nav>    
  </div>    
  <!--     <div class="nav-row-2">    
     <nav>    
       <ul class="nav-container">    
         <h1 class="title"></h1> 
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
           <a href="/about/grup-telegram.html">Telegram</a>    
         </li>
         <li>    
           <a href="/page/tutorial.html">Tutorial</a>    
         </li>    
         <li>    
           <a href="/page/apps.html">Aplikasi</a>    
         </li>    
         <li>    
           <a href="https://apppintar.blogspot.com/">Selengkapnya =></a>    
         </li> 
       </ul>    
     </nav>    
   </div>  -->
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
      "/assets/JS/bg_random_color.js", 
      "/assets/JS/sidenav.js", 
      "/assets/JS/favicon.js",
      "/assets/JS/google.js", 
      "/assets/JS/ip-address.js", 
      "/assets/JS/jam-digital.js",  
      "/assets/JS/jam-analog.js",
   //   "/assets/JS/scroll.js", 
      "/assets/JS/update.js", 
      "/assets/JS/whatsapp.js"
    ];  
  
    window.onload = function() {  
      loadScripts(scriptsToLoad, function() {  
      });  
    };
