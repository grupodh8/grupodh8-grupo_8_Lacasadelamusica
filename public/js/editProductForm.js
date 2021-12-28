window.addEventListener("load", function () {

    let form = document.querySelector('form') 

    // VALIDACION CAMPO NOMBRE 
    let errorsName = ''
    let name = document.querySelector('input.name')
    let divName = document.querySelector('#errors-name')
    let backName = document.querySelector('#validation1');

    name.addEventListener('blur', function () {        
        if (backName) {
            backName.style.display = "none";
            }
        if (name.value == '') {
            name.classList.add('input-danger')
            errorsName = 'Debes ingresar un nombre'
        } else if (name.value.length < 5) {
            name.classList.add('input-danger')
            errorsName = 'El nombre debe tener al menos cinco caracteres'
        } else {
            name.classList.remove('input-danger')
            errorsName = ''
        }

        if (errorsName.length > 0) {
            divName.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsName
        } else {
            divName.innerHTML = ""
        }
    })

    // VALIDACION CAMPO PRECIO
    let errorsPrice = ''
    let price = document.querySelector('input.price')
    let divPrice = document.querySelector('#errors-price')
    let backPrice = document.querySelector('#validation2');

    price.addEventListener('blur', function () {
        if (backPrice) {
        backPrice.style.display = "none";
        }
        if (price.value == '') {
            price.classList.add('input-danger')
            errorsPrice = 'Debes ingresar un precio'
        } else if (price.value.length < 2) {
            price.classList.add('input-danger')
            errorsPrice = 'El apellido debe tener al menos dos caracteres'
        } else {
            price.classList.remove('input-danger')
            errorsPrice = ''
        }

        if (errorsPrice.length > 0) {
            divPrice.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsPrice
        } else {
            divPrice.innerHTML = ""
        }
    })

    // VALIDACION CAMPO SKU 
    let errorsSku = ''
    let sku = document.querySelector('input.sku')
    let divSku = document.querySelector('#errors-sku')
    let backSku = document.querySelector('#validation3');

    sku.addEventListener('blur', function () {
        if (backSku) {
            backSku.style.display = "none";
            }
        if (sku.value == '') {
            sku.classList.add('input-danger')
            errorsSku = 'Debes ingresar un SKU'
        } else if (sku.value.length != 6) {
            sku.classList.add('input-danger')
            errorsSku = 'El SKU debe tener 6 digitos'
        } else {
            sku.classList.remove('input-danger')
            errorsSku = ''
        }

        if (errorsSku.length > 0) {
            divSku.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsSku
        } else {
            divSku.innerHTML = ""
        }
    })

    // VALIDACION CAMPO STOCK
    let errorsStock = ''
    let stock = document.querySelector('input.stock')
    let divStock = document.querySelector('#errors-stock')
    let backStock = document.querySelector('#validation4');

    stock.addEventListener('blur', function () {
        if (backStock) {
            backStock.style.display = "none";
            }
        if (stock.value == '') {
            stock.classList.add('input-danger')
            errorsStock = 'Debes ingresar una cantidad de stock'
        } else if (stock.value == 0) {
            stock.classList.add('input-danger')
            errorsStock = 'El stock debe ser mayor a 0'
        } else {
            stock.classList.remove('input-danger')
            errorsStock = ''
        }

        if (errorsStock.length > 0) {
            divStock.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsStock
        } else {
            divStock.innerHTML = ""
        }
    })

    // VALIDACION CAMPO CLASIFICACION
    let errorsClassification = ''
    let classification = document.querySelector('select.classification')
    let divClassification = document.querySelector('#errors-classification')
    let backClassification = document.querySelector('#validation5');

    classification.addEventListener('click', function () {

        if (backClassification) {
            backClassification.style.display = "none";
            }
        if (classification.value == '') {
            classification.classList.add('input-danger')
            errorsClassification = 'Debes seleccionar una clasificacion'
        } else {
            classification.classList.remove('input-danger')
            errorsClassification = ''
        }

        if (errorsClassification.length > 0) {
            divClassification.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsClassification
        } else {
            divClassification.innerHTML = ""
        }
    })

    // VALIDACION CAMPO CATEGORIA
    let errorsCategory = ''
    let category = document.querySelector('select.category')
    let divCategory = document.querySelector('#errors-category')
    let backCategory = document.querySelector('#validation6');

    category.addEventListener('click', function () {

        if (backCategory) {
            backCategory.style.display = "none";
            }
        if (category.value == '') {
            category.classList.add('input-danger')
            errorsCategory = 'Debes seleccionar una categoria'
        } else {
            category.classList.remove('input-danger')
            errorsCategory = ''
        }

        if (errorsCategory.length > 0) {
            divCategory.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsCategory
        } else {
            divCategory.innerHTML = ""
        }
    })

    // VALIDACION CAMPO CATEGORIA
    let errorsBrand = ''
    let brand = document.querySelector('select.brand')
    let divBrand = document.querySelector('#errors-brand')
    let backBrand = document.querySelector('#validation7');

    brand.addEventListener('click', function () {

        if (backBrand) {
            backBrand.style.display = "none";
            }
        if (brand.value == '') {
            brand.classList.add('input-danger')
            errorsBrand = 'Debes seleccionar una categoria'
        } else {
            brand.classList.remove('input-danger')
            errorsBrand = ''
        }

        if (errorsBrand.length > 0) {
            divBrand.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsBrand
        } else {
            divBrand.innerHTML = ""
        }
    })

    // VALIDACION CAMPO TIPO 
    let errorsType = ''
    let type = document.querySelector('input.type')
    let divType = document.querySelector('#errors-type')
    let backType = document.querySelector('#validation8');

    type.addEventListener('blur', function () {        
        if (backType) {
            backType.style.display = "none";
            }
        if (type.value == '') {
            type.classList.add('input-danger')
            errorsType = 'Debes ingresar un tipo de producto'
        } else if (type.value.length < 5) {
            type.classList.add('input-danger')
            errorsType = 'El tipo de producto debe tener al menos dos caracteres'
        } else {
            type.classList.remove('input-danger')
            errorsType = ''
        }

        if (errorsType.length > 0) {
            divType.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsType
        } else {
            divType.innerHTML = ""
        }
    })

    // VALIDACION CAMPO DESCRIPCION
    let errorsDescription = ''
    let description = document.querySelector('#description')
    let divDescription = document.querySelector('#errors-description')
    let backDescription = document.querySelector('#validation9');

    description.addEventListener('blur', function () {        
        if (backDescription) {
            backDescription.style.display = "none";
            }
        if (description.value == '') {
            description.classList.add('input-danger')
            errorsDescription = 'Debes ingresar una descripcion'
        } else if (description.value.length < 20) {
            description.classList.add('input-danger')
            errorsDescription = 'El nombre debe tener al menos veinte caracteres'
        } else {
            description.classList.remove('input-danger')
            errorsDescription = ''
        }

        if (errorsDescription.length > 0) {
            divDescription.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsDescription
        } else {
            divDescription.innerHTML = ""
        }
    })

    // VALIDACION CAMPO IMAGEN
    let errorsImage = '';
    let image = document.querySelector('input.image');
    let divImage = document.querySelector('#errors-image');
    let backImage = document.querySelector('#validation10');

    image.addEventListener('change', function () {
        if (backImage) {
            backImage.style.display = "none";
            }
        if (image.value == "") {
            image.classList.add('input-danger')
            errorsImage = 'Debes subir una imagen'
        } else if (!image.value.endsWith('.jpg') && !image.value.endsWith('.png') && !image.value.endsWith('.gif')) {
            image.classList.add('input-danger')
            errorsImage = 'Las extensiones aceptadas son .jpg, .png y .gif'
        } else {
            image.classList.remove('input-danger')
            errorsImage = ''
        }


        if (errorsImage.length > 0) {
            divImage.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + errorsImage
        } else {
            divImage.innerHTML = ""
        }
    })

    form.addEventListener('submit', function(e) {
        if (errorsName != '' || errorsPrice != '' || errorsSku != '' || errorsStock != '' || errorsClassification != '' || errorsCategory != '' || errorsBrand != '' || errorsType != '' || errorsDescription != '' || errorsImage != '') {
            e.preventDefault()
        }
    })

})
