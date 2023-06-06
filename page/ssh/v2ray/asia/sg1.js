    function showText() {
      var text1 = "vmess://eyJhZGQiOiJzZzEtdjJyYXkuc3Noa2l0Lm9yZyIsImFpZCI6IjAiLCJhbHBuIjoiIiwiZnAiOiIiLCJob3N0Ijoic2cxLXYycmF5LnNzaGtpdC5vcmciLCJpZCI6ImM2NzQ3ZGE0LWZiMmUtNGEyYS1iZGI3LTg2MTRiZGQ2YjBiMyIsIm5ldCI6IndzIiwicGF0aCI6Ii9zc2hraXQvMTgyODM5Njg5NC82NDRiNzZlOWIxMDRhLyIsInBvcnQiOiI4MCIsInBzIjoic2cxLTIwMjMtMDUtMjgiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6IiIsInYiOiIyIn0=";
      var text2 = "vmess://eyJhZGQiOiJzZzEtdjJyYXkuc3Noa2l0Lm9yZyIsImFpZCI6IjAiLCJhbHBuIjoiIiwiZnAiOiIiLCJob3N0Ijoic2cxLXYycmF5LnNzaGtpdC5vcmciLCJpZCI6ImM2NzQ3ZGE0LWZiMmUtNGEyYS1iZGI3LTg2MTRiZGQ2YjBiMyIsIm5ldCI6IndzIiwicGF0aCI6Ii9zc2hraXQvMTgyODM5Njg5NC82NDRiNzZlOWIxMDRhLyIsInBvcnQiOiI4MCIsInBzIjoic2cxLTIwMjMtMDUtMjgiLCJzY3kiOiJhdXRvIiwic25pIjoiIiwidGxzIjoiIiwidHlwZSI6IiIsInYiOiIyIn0=";
      var now = new Date();
      now.setDate(now.getDate() + 7); // Set expired time to 7 days from now
      var expired = now.toLocaleString();
      var text3 = "created: " + now.toLocaleString() + "<br>expired: " + expired;
      var textContainer = document.getElementById("text-container");
      var textContainer2 = document.getElementById("text-container-2");
      var textContainer3 = document.getElementById("text-container-3");
      textContainer.innerHTML = text1;
      textContainer2.innerHTML = text2;
      textContainer3.innerHTML = text3;
      var copyButton1 = document.getElementById("copy-button-1");
      var copyButton2 = document.getElementById("copy-button-2");
      var copyButton3 = document.getElementById("copy-button-3");
      copyButton1.style.display = "inline-block";
      copyButton2.style.display = "inline-block";
      copyButton3.style.display = "inline-block";
    }
  
    function copyText(num) {
      var textContainer = document.getElementById("text-container");
      var textContainer2 = document.getElementById("text-container-2");
      var textContainer3 = document.getElementById("text-container-3");
      var text;
      switch (num) {
        case 1:
          text = textContainer.innerText;
          break;
        case 2:
          text = textContainer2.innerText;
          break;
        case 3:
          text = textContainer3.innerHTML.replace(/<br>/g, "\r\n");
          break;
        default:
          text = "";
      }
      navigator.clipboard.writeText(text).then(function() {
        alert("Teks berhasil dicopy!");
      }, function() {
        alert("Gagal menyalin teks, silakan coba lagi.");
      });
    }
