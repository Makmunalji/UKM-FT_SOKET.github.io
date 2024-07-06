// const dropdown =document.querySelectorAll('.dropdown-trigger');
// M.Dropdown.init(dropdown)

// const dropdownDepan = document.querySelectorAll('.depan');
// M.Dropdown.init(dropdownDepan)

// const sidenav=document.querySelectorAll('.sidenav');
// M.Sidenav.init(sidenav);
// const slider=document.querySelectorAll('.slider');
// M.Slider.init(slider,{
//   indicators:false,
//   height:500,
//   transition:600,
//   interval:3000
// });
// const parallax=document.querySelectorAll('.parallax');
// M.Parallax.init(parallax);
// const materialBox=document.querySelectorAll('.materialboxed');
// M.Materialbox.init(materialBox,{
//   transition:5000
// });
// const scrol=document.querySelectorAll('.scrollspy');
// M.ScrollSpy.init(scrol,{
//   transition:6000,
//   scrollOffset:50
// });

// AOS.init();

// const scriptURL = 'https://script.google.com/macros/s/AKfycbwi07c7lHC9VrhzslnV0I_2AzOfGrbKg8xej9vTRjVLP-wDFkUk9nJYSGz2hQhOeMU1/exec';
// // const form = document.forms['submit-to-google-sheet'];
// const form = document.getElementById('myFrom');
// const btnKirim = document.querySelector('.kirim');
// const btnLoad = document.querySelector('.load');
// const myAlert = document.querySelector('.card-alert');
    
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   // ketika tombol di submit
//   // tampilkan tombol loading, hilangkan tombol kirim
//   btnLoad.classList.toggle('load');
//   btnKirim.classList.toggle('kirim');
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//       // tampilkan tombol loading, hilangkan tombol kirim
//       btnLoad.classList.toggle('load');
//       btnKirim.classList.toggle('kirim');
//       // tampilkan alert
//       myAlert.classList.toggle('card-alert');
//       // reset formnya
//       form.reset();
//       console.log('Success!', response);
//     })
//     .catch(error => console.log('Error!', error.message))
//   });

