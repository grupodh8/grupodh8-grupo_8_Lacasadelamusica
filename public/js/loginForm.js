window.addEventListener("load", function () {

let form = document.querySelector('form') 

// VALIDACION CAMPO EMAIL
let errorsEmail = ''
let email = document.querySelector('input.email')
let divEmail = document.querySelector('#errors-email')
let backEmail = document.querySelector('#validation1');

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

email.addEventListener('blur', function () {
    if (backEmail) {
        backEmail.style.display = "none";
        }
    if (email.value == '') {
        email.classList.add('input-danger')
        errorsEmail = 'Debes ingresar un email'
    } else if (email.value.length > 0) {
        if (validateEmail(email.value) == false) {
            email.classList.add('input-danger')
            errorsEmail = 'Ingresa un email valido'
        } else {
            email.classList.remove('input-danger')
            errorsEmail = ''
        }
    }

    if (errorsEmail.length > 0) {
        divEmail.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsEmail
    } else {
        divEmail.innerHTML = ""
    }
})

// VALIDACION CAMPO PASSWORD
let errorsPassword = ''
let password = document.querySelector('input.password')
let divPassword = document.querySelector('#errors-password')
let backPassword = document.querySelector('#validation2');

password.addEventListener('blur', function () {
    if (backPassword) {
        backPassword.style.display = "none";
        }
    if (password.value == '') {
        password.classList.add('input-danger')
        errorsPassword = 'Debes ingresar una contraseña'
    } else {
        password.classList.remove('input-danger')
        errorsPassword = ''
    }

    if (errorsPassword.length > 0) {
        divPassword.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsPassword
    } else {
        divPassword.innerHTML = ""
    }
})

form.addEventListener('submit', function(e) {
    if (errorsEmail != '' || errorsPassword != '') {
        e.preventDefault()
    }
})

})