// Fungsi untuk mengatur warna latar belakang situs web dan #sidenav
function setBackgroundColor(color) {
  document.body.style.backgroundColor = color; // Atur latar belakang situs web
  document.querySelector('#sidenav.active').style.backgroundColor = color; // Atur latar belakang #sidenav saat aktif
  localStorage.setItem('backgroundColor', color);
}

// Fungsi untuk mendapatkan warna yang telah disimpan di localStorage
function getSavedColor() {
  return localStorage.getItem('backgroundColor');
}

// Fungsi untuk mendapatkan warna acak dalam format RGB
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

var savedColor = getSavedColor();

if (savedColor) {
  setBackgroundColor(savedColor);
} else {
  var randomColor = getRandomColor();
  setBackgroundColor(randomColor);
}
