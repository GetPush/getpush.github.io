window.addEventListener('DOMContentLoaded', (event) => {
  const textArray = [
    "Update Config HTTP Custom",
    "Update Config V2ray HTTP Custom",
    "Update Config HTTP Injector",
    "Update Config Netmod Syna",
    "Update Config Dark Tunnel",
    "Update Config V2ray Dark Tunnel",
    "Update Config Open Tunnel",
    "Update Config eV2ray",
    "Update Config Napsternet",
    "Update Config KPN Tunnel"
  ];

  const textContainer = document.getElementById("teks-config");

  let index = 0;
  let currentText = "";
  let letter = "";

  function type() {
    if (index === textArray.length) {
      index = 0;
    }
    currentText = textArray[index];
    letter = currentText.slice(0, ++letter.length);

    textContainer.textContent = letter;

    if (letter.length === currentText.length) {
      index++;
      letter = "";
    }

    setTimeout(type, 200);
  }

  type();
});

