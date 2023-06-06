function drawClock() {
  const now = new Date();

  // Mendapatkan elemen canvas dan menginisialisasi variabel context
  const canvas = document.getElementById('clock');
  const ctx = canvas.getContext('2d');

  // Membersihkan canvas sebelum menggambar
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Menggambar lingkaran jam
  const radius = canvas.width / 2;
  ctx.beginPath();
  ctx.arc(radius, radius, radius - 10, 0, 2 * Math.PI);
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#333';
  ctx.stroke();

  // Menggambar angka pada jam
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (let i = 1; i <= 12; i++) {
    const angle = i * Math.PI / 6;
    const x = radius + (radius - 30) * Math.sin(angle);
    const y = radius - (radius - 30) * Math.cos(angle);
    ctx.fillText(i, x, y);
  }

  // Menggambar jarum detik
  const second = now.getSeconds();
  const secondAngle = second * Math.PI / 30;
  ctx.beginPath();
  ctx.moveTo(radius, radius);
  ctx.lineTo(radius + (radius - 40) * Math.sin(secondAngle), radius - (radius - 40) * Math.cos(secondAngle));
  ctx.strokeStyle = '#f00';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Menggambar jarum menit
  const minute = now.getMinutes();
  const minuteAngle = (minute + second / 60) * Math.PI / 30;
  ctx.beginPath();
  ctx.moveTo(radius, radius);
  ctx.lineTo(radius + (radius - 60) * Math.sin(minuteAngle), radius - (radius - 60) * Math.cos(minuteAngle));
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 5;
  ctx.stroke();

  // Menggambar jarum jam
  const hour = now.getHours();
  const hourAngle = (hour + minute / 60) * Math.PI / 6;
  ctx.beginPath();
  ctx.moveTo(radius, radius);
  ctx.lineTo(radius + (radius - 80) * Math.sin(hourAngle), radius - (radius - 80) * Math.cos(hourAngle));
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 10;
  ctx.stroke();
}

setInterval(drawClock, 1000);

// Tambahan kode JavaScript untuk menambahkan jarum jam analog
const hourHand = document.querySelector('.hour-hand');

function setRotation() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const hourAngle = (hour + minute / 60) * 30; // menghitung sudut rotasi berdasarkan waktu
  hourHand.style.transform = `rotate(${hourAngle}deg)`; // mengubah sudut rotasi jarum jam
}

setInterval(setRotation, 1000);
