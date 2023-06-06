
        // Fungsi untuk mendapatkan warna acak dalam format RGB
        function getRandomColor() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return 'rgb(' + r + ',' + g + ',' + b + ')';
        }

        // Fungsi untuk memeriksa apakah warna sebelumnya tersimpan
        function getSavedColor() {
            return localStorage.getItem('backgroundColor');
        }

        // Fungsi untuk mengatur warna latar belakang
        function setBackgroundColor(color) {
            document.body.style.backgroundColor = color;
            localStorage.setItem('backgroundColor', color); // Simpan warna baru di penyimpanan lokal
        }

        // Hapus warna yang tersimpan saat halaman diperbarui
        function clearSavedColor() {
            localStorage.removeItem('backgroundColor');
        }

        // Periksa apakah warna sebelumnya tersimpan
        var savedColor = getSavedColor();

        // Jika warna tersimpan, gunakan warna tersebut
        if (savedColor) {
            setBackgroundColor(savedColor);
        } else {
            // Jika warna belum tersimpan, atur warna acak baru
            var randomColor = getRandomColor();
            setBackgroundColor(randomColor);
        }

        // Hapus warna yang tersimpan saat halaman diperbarui
        clearSavedColor();
