    function generatePassword() {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
      const passwordLength = 50;
      let password = "";
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      document.getElementById("password").value = password;
    }

    function copyPassword() {
      const passwordInput = document.getElementById("password");
      passwordInput.select();
      passwordInput.setSelectionRange(0, 99999);
      document.execCommand("copy");
      alert("Password berhasil disalin ke clipboard!");
    }
