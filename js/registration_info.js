let $name = document.querySelector('#name')
let $email = document.querySelector('#email')
let $password = document.querySelector('#password')
let $confirmPassword = document.querySelector('#confirm_password')

document.querySelector('#submit')
    .addEventListener('click', function () {
        localStorage.setItem('name', $name.value)
        localStorage.setItem('email', $email.value)
        localStorage.setItem('password', $password.value)
        localStorage.setItem('confirm password', $confirmPassword.value)
    })

console.log('Local Storage:')
console.log(localStorage)
