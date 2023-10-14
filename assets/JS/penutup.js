  const penutupHTML = `
<br>
<style>
h1 {
    text-align: center;
}

#comment-form {
    text-align: center;
    margin-top: 20px;
}

#comment-input {
    width: 300px;
    height: 100px;
    resize: none;
}

button {
    margin-top: 10px;
}
</style>
    <h1>komentar</h1>
    <form id="comment-form">
        <textarea id="comment-input" placeholder="Masukkan komentar Anda"></textarea>
        <button type="submit">Kirim</button>
    </form>
</div>
    <br>
    <!-- penutup konten -->
    <h1 style="font-size: 17px; font-weight: 400;"> untuk versi Prem silahkan contact admin kami !!!</h1>
    <br>
<br>
<div style="text-align: center;">
  <!-- Tautan ke Media Sosial -->
  <a href="https://www.facebook.com/Toppayofficial?mibextid=ZbWKwL" target="_blank" style="display: inline-block; margin-right: 10px;">
    <img alt="Facebook Logo" height="32" src="https://link.ke/logo-facebook" width="32" /> Facebook
  </a>
  <a href="https://www.instagram.com/akun-instagram-anda" target="_blank" style="display: inline-block; margin-right: 10px;">
    <img alt="Instagram Logo" height="32" src="https://link.ke/logo-instagram" width="32" /> Instagram
  </a>
  <a href="https://www.tiktok.com/@akun-tiktok-anda" target="_blank" style="display: inline-block; margin-right: 10px;">
    <img alt="TikTok Logo" height="32" src="https://link.ke/logo-tiktok" width="32" /> TikTok
  </a>
  <a href="https://www.snackvideo.com/@akun-snackvideo-anda" target="_blank" style="display: inline-block; margin-right: 10px;">
    <img alt="SnackVideo Logo" height="32" src="https://link.ke/logo-snackvideo" width="32" /> SnackVideo
  </a>
  <a href="https://shopee.co.id/akun-shopee-anda" target="_blank" style="display: inline-block; margin-right: 10px;">
    <img alt="Shopee Logo" height="32" src="https://link.ke/logo-shopee" width="32" /> Shopee
  </a>
  <a href="https://www.lazada.co.id/akun-lazada-anda" target="_blank" style="display: inline-block; margin-right: 10px;">
    <img alt="Lazada Logo" height="32" src="https://link.ke/logo-lazada" width="32" /> Lazada
  </a>
  <a href="https://www.youtube.com/channel/UCeMezZCLKzcpQyYFSiW6DCA" target="_blank" style="display: inline-block; margin-right: 10px;">
    <img alt="YouTube Logo" height="32" src="https://link.ke/logo-youtube" width="32" /> YouTube
  </a>

  <!-- Tautan ke Kontak -->
  <a href="mailto:munirggplay@gmail.com" style="display: inline-block; margin-right: 10px;">
    <img alt="Gmail Logo" height="32" src="https://www.gstatic.com/images/icons/material/product/2x/gmail_64dp.png" width="32" /> Email
  </a>
  <a href="https://wa.me/6283838367172" rel="noopener noreferrer" target="_blank" style="display: inline-block; margin-right: 10px;">
    <img alt="WhatsApp Logo" height="32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" width="32" /> WhatsApp
  </a>
  <a href="https://t.me/telgruptoppayofficial" target="_blank" style="display: inline-block;">
    <img alt="Telegram Logo" height="32" src="https://telegram.org/img/t_logo.svg" width="32" /> Telegram
  </a>
</div>

    <h3 style="color: #3e005d;">
      <br /> We will revert you as soon as possible...!
    </h3>
    <h1 style="font-size: medium; font-weight: 400; text-align: center;">
      <p style="color: #3e005d;"> Thank you for contacting us! <br />
        <b>Have a great day</b>
      </p>
    </h1>
    </div>
<header>
    <div class="nav-row-3">
      <ul>
        <li>
          <a href="/about/disclaimer.html">Disclaimer</a>
        </li>
        <li>
          <a href="/about/about.html">About</a>
        </li>
        <li>
          <a href="/about/sitemap.xml">sitemap</a>
        </li>
        <li>
          <a href="/about/contacts.html">Contacts</a>
        </li>
        <li>
          <a href="/about/privacy-policy.html">Privacy Policy</a>
        </li>
        <li>
          <a href="/about/terms-and-conditions.html">Terms And Conditions</a>
        </li>
      </ul>
    </div>
</header>
<hr>
    <div class="footer">
      <footer>
        Copyright 2023 / website <a href="https://wa.me/6283838367172">template</a>
      </footer>
    </div>
  `;

document.addEventListener("DOMContentLoaded", function () {
  var penutupElement = document.getElementById("penutup");
  if (penutupElement) {
    penutupElement.innerHTML = penutupHTML;
  }
});
