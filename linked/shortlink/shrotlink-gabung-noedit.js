// Metode caching
const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.setRequestHeader('Cache-Control', 'no-cache');
xhr.setRequestHeader('If-Modified-Since', localStorage.getItem('lastModified')); // Menggunakan nilai terakhir dari localStorage
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      // Mengolah respons data
      localStorage.setItem('lastModified', xhr.getResponseHeader('Last-Modified')); // Menyimpan nilai Last-Modified ke localStorage
    } else if (xhr.status === 304) {
      // Tidak ada perubahan pada file di repository, menggunakan data yang disimpan di cache
      const cachedData = JSON.parse(localStorage.getItem('cachedData'));
      // Mengolah data yang disimpan di cache
    }
  }
};
xhr.send();
