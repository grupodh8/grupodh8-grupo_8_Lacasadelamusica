window.addEventListener("load", function () {

    // VALIDACION CAMPO NOMBRE 
    let errorsFirstName = []
    let firstName = document.querySelector('input.first-name')
    let divFirstName = document.querySelector('#errors-first-name')
    let backFirstName = document.querySelector('#validation1');

    firstName.addEventListener('blur', function () {        
        if (backFirstName) {
            backFirstName.style.display = "none";
            }
        if (firstName.value == '') {
            firstName.classList.add('input-danger')
            errorsFirstName.push('Debes ingresar un nombre')
        } else if (firstName.value.length < 2) {
            firstName.classList.add('input-danger')
            errorsFirstName.push('El nombre debe tener al menos dos caracteres')
        } else {
            firstName.classList.remove('input-danger')
            errorsFirstName = []
        }

        if (errorsFirstName.length > 0) {
            divFirstName.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsFirstName
        } else {
            divFirstName.innerHTML = ""
        }
        errorsFirstName.pop();
    })

    // VALIDACION CAMPO APELLIDO
    let errorsLastName = []
    let lastName = document.querySelector('input.last-name')
    let divLastName = document.querySelector('#errors-last-name')
    let backLastName = document.querySelector('#validation2');

    lastName.addEventListener('blur', function () {
        if (backLastName) {
        backLastName.style.display = "none";
        }
        if (lastName.value == '') {
            lastName.classList.add('input-danger')
            errorsLastName.push('Debes ingresar un apellido')
        } else if (lastName.value.length < 2) {
            lastName.classList.add('input-danger')
            errorsLastName.push('El apellido debe tener al menos dos caracteres')
        } else {
            lastName.classList.remove('input-danger')
            errorsLastName = []
        }

        if (errorsLastName.length > 0) {
            divLastName.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsLastName
        } else {
            divLastName.innerHTML = ""
        }
        errorsLastName.pop();
    })

    // VALIDACION CAMPO DIRECCION 
    let errorsAddress = []
    let address = document.querySelector('input.address')
    let divAddress = document.querySelector('#errors-address')
    let backAddress = document.querySelector('#validation3');

    address.addEventListener('blur', function () {
        if (backAddress) {
            backAddress.style.display = "none";
            }
        if (address.value == '') {
            address.classList.add('input-danger')
            errorsAddress.push('Debes ingresar una direccion')
        } else if (address.value.length < 2) {
            address.classList.add('input-danger')
            errorsAddress.push('Debes ingresar una direccion valida')
        } else {
            address.classList.remove('input-danger')
            errorsAddress = []
        }

        if (errorsAddress.length > 0) {
            divAddress.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsAddress
        } else {
            divAddress.innerHTML = ""
        }
        errorsAddress.pop();
    })

    // VALIDACION CAMPO CIUDAD
    let errorsCity = []
    let city = document.querySelector('input.city')
    let divCity = document.querySelector('#errors-city')
    let backCity = document.querySelector('#validation4');

    city.addEventListener('blur', function () {
        if (backCity) {
            backCity.style.display = "none";
            }
        if (city.value == '') {
            city.classList.add('input-danger')
            errorsCity.push('Debes ingresar una ciudad')
        } else if (city.value.length < 2) {
            city.classList.add('input-danger')
            errorsCity.push('Debes ingresar una ciudad valida')
        } else {
            city.classList.remove('input-danger')
            errorsCity = []
        }

        if (errorsCity.length > 0) {
            divCity.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsCity
        } else {
            divCity.innerHTML = ""
        }
        errorsCity.pop();
    })

    // VALIDACION CAMPO CODIGO POSTAL
    let errorsZip = []
    let zip = document.querySelector('input.zip')
    let divZip = document.querySelector('#errors-zip')
    let backZip = document.querySelector('#validation5');

    zip.addEventListener('blur', function () {
        if (backZip) {
            backZip.style.display = "none";
            }
        if (zip.value == '') {
            zip.classList.add('input-danger')
            errorsZip.push('Debes ingresar un codigo postal')
        } else if (zip.value.length < 4 || zip.value.length > 5) {
            zip.classList.add('input-danger')
            errorsZip.push('El codigo postal debe tener de 4 a 5 digitos')
        } else {
            zip.classList.remove('input-danger')
            errorsZip = []
        }

        if (errorsZip.length > 0) {
            divZip.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsZip
        } else {
            divZip.innerHTML = ""
        }
        errorsZip.pop();
    })

    // VALIDACION CAMPO EMAIL
    let errorsEmail = []
    let email = document.querySelector('input.email')
    let divEmail = document.querySelector('#errors-email')
    let backEmail = document.querySelector('#validation6');

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
            errorsEmail.push('Debes ingresar un email')
        } else if (email.value.length > 0) {
            if (validateEmail(email.value) == false) {
                email.classList.add('input-danger')
                errorsEmail.push('Ingresa un email valido')
            } else {
                email.classList.remove('input-danger')
                errorsEmail = []
            }
        }

        if (errorsEmail.length > 0) {
            divEmail.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsEmail
        } else {
            divEmail.innerHTML = ""
        }
        errorsEmail.pop();
    })

    // VALIDACION CAMPO PASSWORD
    let errorsPassword = []
    let password = document.querySelector('input.password')
    let divPassword = document.querySelector('#errors-password')
    let passwordRequirements = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    let backPassword = document.querySelector('#validation7');

    password.addEventListener('blur', function () {
        if (backPassword) {
            backPassword.style.display = "none";
            }
        if (password.value == '') {
            password.classList.add('input-danger')
            errorsPassword.push('Debes ingresar una contraseña')
        } else if (!password.value.match(passwordRequirements)) {
            password.classList.add('input-danger')
            errorsPassword.push('Tu contraseña debe tener al menos 8 caracteres, incluir una letra mayuscula, una minuscula y un numero')
        } else {
            password.classList.remove('input-danger')
            errorsPassword = []
        }

        if (errorsPassword.length > 0) {
            divPassword.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsPassword
        } else {
            divPassword.innerHTML = ""
        }
        errorsPassword.pop();
    })

    // VALIDACION CAMPO IMAGEN
    let errorsImage = [];
    let image = document.querySelector('input.image');
    let divImage = document.querySelector('#errors-image');
    let backImage = document.querySelector('#validation8');

    image.addEventListener('change', function () {
        if (backImage) {
            backImage.style.display = "none";
            }
        if (image.value == "") {
            image.classList.add('input-danger')
            errorsImage.push('Debes subir una imagen')
        } else if (!image.value.endsWith('.jpg') && !image.value.endsWith('.png') && !image.value.endsWith('.gif')) {
            image.classList.add('input-danger')
            errorsImage.push('Las extensiones aceptadas son .jpg, .png y .gif')
        } else {
            image.classList.remove('input-danger')
            errorsImage = []
        }


        if (errorsImage.length > 0) {
            divImage.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsImage
        } else {
            divImage.innerHTML = ""
        }
        errorsImage.pop();
    })

})
