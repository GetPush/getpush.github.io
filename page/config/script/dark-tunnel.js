// prioritas dan rotasi
var urls = [
  "https://besargaji.com/s4PhO",
  "https://link.bicolink.net/1JPE0CWI",
  "https://arahlink.id/rvemzAz",
  "https://ouo.io/iH30b7",
  "https://adbull.me/VteWqQ",
  "https://to.aoutoqw.xyz/jsRGBx8v",
  "https://go.aoutoqw.xyz/BRi1I9"
];

var priorityUrls = [
  "https://besargaji.com/AgnbeUD",
  "https://link.bicolink.net/gZ1oZbQ1",
  "https://arahlink.id/CgFAcYr"
];

function redirect() {
  var index = 0;

  // Check if the user has already visited priority URLs
  for (var i = 0; i < priorityUrls.length; i++) {
    if (localStorage.getItem(priorityUrls[i])) {
      index = i + 1;
    }
  }

  // If all priority URLs have been visited, generate random index
  if (index >= priorityUrls.length) {
    index = Math.floor(
      Math.random() * (urls.length - priorityUrls.length)
    ) + priorityUrls.length;
  }

  // Redirect to the selected URL
  window.location.replace(urls[index]);

  // Store visited priority URLs in localStorage
  if (index < priorityUrls.length) {
    localStorage.setItem(priorityUrls[index], true);
  }
}

if (typeof history.pushState === "function") {
  history.pushState("jibberish", null, null);
  window.addEventListener("popstate", function () {
    history.pushState("newjibberish", null, null);
  });
}

// Panggil fungsi redirect saat dokumen selesai dimuat
redirect();

