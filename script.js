window.addEventListener('scroll', () => {
    const navbar = document.getElementById('gradline');
    if (window.scrollY > 0) {
      gradline.classList.remove('bg-transparent');
      gradline.classList.add('bg-gradient-radial'); // Change to the desired background color
    } else {
        gradline.classList.remove('bg-gradient-radial');
        gradline.classList.add('bg-transparent');
    }
});





window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.remove('bg-transparent');
      navbar.classList.add('bg-black/70', 'backdrop-blur-md'); // Change to the desired background color
    } else {
      navbar.classList.remove('bg-black/70', 'backdrop-blur-md');
      navbar.classList.add('bg-transparent');
    }
});





// var header = document.querySelector('navbar');
// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > 100) {
//         header.classList.add ('bg-black/70', 'backdrop-blur-md', ' backdrop-filter');
//     } else {
//         header.classList.remove();
//     }
// });

//bg-black/70 backdrop-blur-md backdrop-filter

//bg-gradient-radial