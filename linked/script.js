function loadScripts(scripts, callback) {
    var loadedCount = 0;

    function scriptLoaded() {
        loadedCount++;

        if (loadedCount === scripts.length) {
            callback();
        }
    }

    for (var i = 0; i < scripts.length; i++) {
        var script = document.createElement('script');
        script.src = scripts[i];
        script.onload = scriptLoaded;
        document.head.appendChild(script);
    }
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

loadScripts(scripts, function () {
    // Kode ini akan dijalankan setelah semua skrip berhasil dimuat
});
