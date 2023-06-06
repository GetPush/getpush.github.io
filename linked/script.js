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
    "/display/favicon.js",
    "/display/base.js",
    "/display/bg_random_color.js",
    "/display/google.js",
    "/display/teks-kedip.js",
    "/display/ip-address.js",
    "/display/update.js",
    "/display/teks-config.js",
    "/display/speed.js",
    "/display/jam-digital.js",
    "/display/jam-analog.js",
    "/display/penutup.js",
    "/display/names.js"
];

loadScripts(scripts, function() {
});
