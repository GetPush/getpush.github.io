// Fungsi untuk mendapatkan warna acak dalam format RGB
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// Fungsi untuk mendapatkan warna latar belakang dari localStorage
function getSavedColor() {
  return localStorage.getItem('backgroundColor');
}

// Fungsi untuk mengatur warna latar belakang untuk website dan #sidenav
function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
  document.querySelector('#sidenav.active').style.backgroundColor = color;
  localStorage.setItem('backgroundColor', color);
}

// Fungsi untuk menghapus warna latar belakang yang disimpan di localStorage
function clearSavedColor() {
  localStorage.removeItem('backgroundColor');
}

var savedColor = getSavedColor();

if (savedColor) {
  setBackgroundColor(savedColor);
} else {
  var randomColor = getRandomColor();
  setBackgroundColor(randomColor);
}
