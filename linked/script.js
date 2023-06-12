function loadScripts(scripts) {
  var promises = [];

  function loadScript(src) {
    return new Promise(function(resolve, reject) {
      var script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  for (var i = 0; i < scripts.length; i++) {
    promises.push(loadScript(scripts[i]));
  }

  return Promise.all(promises);
}

var scripts = [
  "/linked/favicon.js",
  "/linked/bg_random_color.js",
  "/linked/pembuka.js",
  "/linked/penutup.js",
  "/linked/google.js",
  "/linked/teks-kedip.js",
  "/linked/ip-address.js",
  "/linked/update.js",
  "/linked/teks-config.js",
  "/linked/speed.js",
  "/linked/komenwa.js",
  "/linked/jam-digital.js",
  "/linked/jam-analog.js",
  "/linked/names.js",
  "/linked/log.js"
];

loadScripts(scripts)
  .then(function() {
  })
  .catch(function(error) {
    console.error(error);
  });
