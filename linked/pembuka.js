const pembukaHTML = `  
 <h1>ألسلام عليهم ورحمة الله وبركاته</h1> 
  <br>
   <div id="teks1">Halo, selamat datang!</div>  
    <div style="text-align: left;">  
     <p>• Sebagai umat manusia, kita semua saling membutuhkan, saling membantu, dan saling mendukung.</p>  
     <div>• Semoga yang mengunjungi website ini, pada hari <span style="display: inline;">  
       <div id="jam-sambutan" style="display: inline;"></div>  
      </span> selalu diberikan kesehatan, keselamatan, dan kebahagiaan dalam hidupnya. </div>  
     <p>• Dan semoga apa yang Anda cari dapat ditemukan di website ini, serta bermanfaat dan bisa membawa manfaat untuk diri sendiri dan orang lain.</p>  
    </div> 
`;

  window.addEventListener("DOMContentLoaded", function () {
    var pembukaElement = document.getElementById("pembuka");
    if (pembukaElement) {
      pembukaElement.innerHTML = pembukaHTML;
    }
  });