    const scripts = [
      "/linked/favicon.js",
      "/linked/bg_random_color.js",
      "/linked/pembuka.js",
      "/linked/penutup.js",
      "/linked/base.js",
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

    scripts.forEach(script => {
      document.write(`<script src="${script}"></script>`);
    });