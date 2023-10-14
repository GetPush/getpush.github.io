// Mendapatkan tanggal sekarang 
var today = new Date(); 

// Mendapatkan tanggal pembuatan dengan format dd/mm/yyyy 
var created = new Date(today.getFullYear(), today.getMonth(), today.getDate()); 
var createdDay = ("0" + created.getDate()).slice(-2); 
var createdMonth = ("0" + (created.getMonth() + 1)).slice(-2); 
var createdYear = created.getFullYear(); 
var createdDate = createdDay + "/" + createdMonth + "/" + createdYear; 

// Mendapatkan tanggal kadaluwarsa dengan masa aktif 7 hari dengan format dd/mm/yyyy 
var expires = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7); 
var expiresDay = ("0" + expires.getDate()).slice(-2); 
var expiresMonth = ("0" + (expires.getMonth() + 1)).slice(-2); 
var expiresYear = expires.getFullYear(); 
var expiresDate = expiresDay + "/" + expiresMonth + "/" + expiresYear; 

// Menampilkan tanggal pembuatan dan tanggal kadaluwarsa di halaman HTML 
document.getElementById("created").innerHTML = "Created: " + createdDate; 
document.getElementById("expired").innerHTML = "Expired: " + expiresDate; 

  //<p id="created"></p>
  //<p id="expired"></p>
