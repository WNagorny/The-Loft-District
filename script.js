let cta_inputs = document.querySelectorAll('.form__input')
let cta_btn = document.querySelector('.form__btn')

const resetInputs = () => {
   cta_inputs.forEach(input => {
      input.value = "";
   });
}


cta_btn.addEventListener('click', resetInputs)