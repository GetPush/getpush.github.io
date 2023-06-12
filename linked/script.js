const scripts = [ 
   "linked/favicon.js", 
   "linked/bg_random_color.js", 
   "linked/base.js", 
   "linked/pembuka.js", 
   "linked/penutup.js", 
   "linked/script.js", 
   "linked/google.js", 
   "linked/teks-kedip.js", 
   "linked/ip-address.js", 
   "linked/update.js", 
   "linked/teks-config.js", 
   "linked/speed.js", 
   "linked/komenwa.js", 
   "linked/jam-digital.js", 
   "linked/jam-analog.js", 
   "linked/names.js" 
 ]; 
  
 function loadScript(url) { 
   return new Promise((resolve, reject) => { 
     const script = document.createElement('script'); 
     script.src = url; 
     script.onload = resolve; 
     script.onerror = reject; 
     document.head.appendChild(script); 
   }); 
 } 
  
 async function loadScripts() { 
   for (const script of scripts) { 
     await loadScript(script).catch(error => { 
     }); 
   } 
 } 
  
 loadScripts();