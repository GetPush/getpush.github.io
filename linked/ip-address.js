fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => {
          const ipAddress = data.ip;
          const ipAddressElement = document.getElementById('ip-address');
          ipAddressElement.textContent = ipAddress;
        })
        .catch(error => {
          console.error('Terjadi kesalahan saat mengambil data IP', error);
        });
