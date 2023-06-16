let cta_inputs = document.querySelectorAll('.form__input')
let cta_btn = document.querySelector('.form__btn')

const navBtn = document.querySelector('.nav-icon-btn')
const navIcon = document.querySelector('.nav-icon')
const topRow = document.querySelector('.header__top-row')


etInputs = () => {
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

