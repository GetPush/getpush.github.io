// Generate random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Set favicon color
function setFaviconColor(color) {
  var favicon = document.querySelector("link[rel*='icon']");
  var canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  var context = canvas.getContext('2d');
  context.fillStyle = color;
  context.fillRect(0, 0, canvas.width, canvas.height);
  favicon.href = canvas.toDataURL('image/png');
}

// Set random color as favicon
setFaviconColor(getRandomColor());
