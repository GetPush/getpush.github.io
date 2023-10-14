document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    var comment = document.getElementById("comment-input").value;

    // Ganti nomor WhatsApp dan pesan sesuai dengan kebutuhan Anda
    var phoneNumber = "082311529002";
    var message = "Komentar: " + comment;

    // Membuat link WhatsApp dengan nomor dan pesan
    var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

    // Membuka link WhatsApp di tab baru
    window.open(whatsappLink, "_blank");

    // Mengosongkan kolom komentar setelah pengiriman
    document.getElementById("comment-input").value = "";
});
