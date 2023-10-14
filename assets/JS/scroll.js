function autoScroll() {
    window.scrollBy(0, 10); // Mengatur kecepatan scroll ke bawah
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        location.reload(); // Refresh halaman setelah mencapai bagian paling bawah
    }
}

setInterval(autoScroll, 500); // Mengatur interval waktu scroll, contohnya 100 milidetik atau 0.1 detik
