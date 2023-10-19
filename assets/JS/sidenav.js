 let burger = document.querySelector('.burger'); 
 let close = document.querySelector('.close'); 
 let sidenav = document.querySelector('#sidenav'); 
  
 // Burger click function 
 burger.addEventListener('click', function () { 
   sidenav.style.left = '0'; 
   document.body.style.overflow = 'hidden'; // Menghilangkan scroll pada badan dokumen 
 }); 
  
 // Close click function 
 close.addEventListener('click', function () { 
   sidenav.style.left = '-150%'; // Mengembalikan sidenav ke posisi semula 
   document.body.style.overflow = 'auto'; // Mengaktifkan kembali scroll pada badan dokumen 
 }); 