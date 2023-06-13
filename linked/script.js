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
     "/linked/favicon.js", 
     "/linked/bg_random_color.js", 
     "/linked/base.js", 
     "/linked/pembuka.js", 
     "/linked/penutup.js", 
     "/linked/whatsapp.js", 
     "/linked/google.js", 
     "/linked/teks-kedip.js", 
     "/linked/ip-address.js", 
     "/linked/update.js", 
     "/linked/teks-config.js", 
     "/linked/speed.js", 
     "/linked/komenwa.js", 
     "/linked/jam-digital.js", 
     "/linked/jam-analog.js", 
     "/linked/names.js" 
   ]; 
  
   window.onload = function() { 
     loadScripts(scriptsToLoad, function() { 
     }); 
   };