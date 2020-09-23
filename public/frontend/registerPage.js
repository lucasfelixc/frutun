const form = document.querySelector('#formRegister')

const inputShow = document.getElementById('showPassword')
const password = form.querySelector('.password')
const confirmPassword = form.querySelector('.passwordTwo')

inputShow.addEventListener('click', e => {
    const el = e.target

    if(el.checked) {
        password.type = 'text'
        confirmPassword.type = 'text'
    } else {
        password.type = 'password'
        confirmPassword.type = 'password'
    }
})