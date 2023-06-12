        // Fungsi untuk mendapatkan warna acak dalam format RGB
        function getRandomColor() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return 'rgb(' + r + ',' + g + ',' + b + ')';
        }

        function getSavedColor() {
            return localStorage.getItem('backgroundColor');
        }

        function setBackgroundColor(color) {
            document.body.style.backgroundColor = color;
            localStorage.setItem('backgroundColor', color); 
        }

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
        clearSavedColor();
