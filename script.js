let cta_inputs = document.querySelectorAll('.form__input')
let cta_btn = document.querySelector('.form__btn')

const navBtn = document.querySelector('.nav-icon-btn')
const navIcon = document.querySelector('.nav-icon')
const topRow = document.querySelector('.header__top-row')


resetInputs = () => {
   cta_inputs.forEach(input => {
      input.value = "";
   });
}


const showMobileMenu = () => {
   navIcon.classList.toggle('nav-icon--active')
   topRow.classList.toggle('header__top-row--mobile')
   document.body.classList.toggle('no-scroll')
}




cta_btn.addEventListener('click', resetInputs)
navBtn.addEventListener('click', showMobileMenu)


document.addEventListener('DOMContentLoaded', function() {
   const sr = ScrollReveal({
     distance: '120px',
     duration: 2500,
     delay: 300,
     reset: true
   });
 
   sr.reveal('.header__title', { delay: 200, origin: 'top' });
   sr.reveal('.left', { delay: 400, origin: 'left' });
   sr.reveal('.right', { delay: 400, origin: 'right' });
   sr.reveal('.map', { delay: 400, origin: 'bottom' });
 });

