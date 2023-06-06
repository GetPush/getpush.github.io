
  var shortlinks = [
    {
      url: 'https://besargaji.com/',
      api: 'a0ac298444f074ffe73a360a43ef78330dea10fd',
      include: ["safefileku.com"],
      script: "//snacklink.id/js/web-script.js"
    },
    {
      url: 'https://bicolink.com/',
      api: '9542ba30d04cecf8230a59ae50256880268baf92',
      advert: 2,
      domains: ["safefileku.com"],
      script: "//bicolink.com/js/full-page-script.js"
    },
    {
      url: 'https://arahlink.com/',
      api: 'b8423bff9bfcfc0269a3022083696686c86c39f3',
      advert: 2,
      domains: ["safefileku.com"],
      script: "//arahlink.com/js/full-page-script.js"
    },
    {
      token: 'fTBXS1na',
      domains: ['safefileku.com'],
      script: "//cdn.ouo.io/js/full-page-script.js"
    },
    {
      url: 'https://adbull.me/',
      api: 'cf5bbe5b95e775e29bb9120433e40dec4d2d875b',
      advert: 2,
      domains: ["safefileku.com"],
      script: "//adbull.me/js/full-page-script.js"
    },
    {
      url: 'https://linkmonet.com/',
      api: '97d344e42713693257a5bbcb320bf95afd3f6395',
      advert: 2,
      domains: ["safefileku.com"],
      script: "//linkmonet.com/js/full-page-script.js"
    },
    {
      url: 'https://adpaylink.com/',
      api: '204827d0fadefd45c6a92fc8ec4ea1d20a24948a',
      advert: 2,
      domains: ["safefileku.com"],
      script: "//adpaylink.com/js/full-page-script.js"
    }
  ];

  function loadScript(scriptUrl) {
    var script = document.createElement('script');
    script.src = scriptUrl;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  function getRandomShortlink() {
    var randomIndex = Math.floor(Math.random() * shortlinks.length);
    var shortlink = shortlinks[randomIndex];

    if (shortlink.url) {
      var go_url = shortlink.url;
      var api = shortlink.api;
      var shorten_includ = shortlink.include;

      loadScript(shortlink.script);
    }

    if (shortlink.token) {
      var ouo_token = shortlink.token;
      var domains = shortlink.domains;

      loadScript(shortlink.script);
    }

    if (shortlink.advert) {
      var app_url = shortlink.url;
      var app_api_token = shortlink.api;
      var app_advert = shortlink.advert;
      var app_domains = shortlink.domains;

      loadScript(shortlink.script);
    }
  }

  getRandomShortlink();

