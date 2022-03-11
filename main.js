// Validate on user input if content is valid or not
// and change the visual indicator accordingly
    //First Name validation
    const firstNameInput = document.querySelector('#firstName');
    firstNameInput.addEventListener('input', () => {
    firstNameInput.setCustomValidity('');
    if(firstNameInput.reportValidity()){
        firstNameInput.style.background = "url(./imgs/green_check.svg)"
    }else{
        firstNameInput.setCustomValidity('This field can only contain upper and lowercase letters.\n Try again!');
        firstNameInput.style.background = "url(./imgs/Red_X.svg)";
    };
    firstNameInput.style.backgroundColor = "white";
    firstNameInput.style.backgroundSize = "10px";
    firstNameInput.style.backgroundRepeat = "no-repeat";
    firstNameInput.style.backgroundPosition = "5px 5px";
    });

    //Last Name validation
    const lastNameInput = document.querySelector('#lastName');

    lastNameInput.addEventListener('input', () => {
    lastNameInput.setCustomValidity('');
    if(lastNameInput.reportValidity()){
        lastNameInput.style.background = "url(./imgs/green_check.svg)"
    }else{
        lastNameInput.setCustomValidity('This field can only contain upper and lowercase letters.\n Try again!');
        lastNameInput.style.background = "url(./imgs/Red_X.svg)";
    };
    lastNameInput.style.backgroundColor = "white";
    lastNameInput.style.backgroundSize = "10px";
    lastNameInput.style.backgroundRepeat = "no-repeat";
    lastNameInput.style.backgroundPosition = "5px 5px";
    });

    //E-mail validation
    const mailInput = document.querySelector('#mail');

    mailInput.addEventListener('input', () => {
    mailInput.setCustomValidity('');
    if(mailInput.reportValidity()){
        mailInput.style.background = "url(./imgs/green_check.svg)"
    }else{
        mailInput.style.background = "url(./imgs/Red_X.svg)";
    };
    mailInput.style.backgroundColor = "white";
    mailInput.style.backgroundSize = "10px";
    mailInput.style.backgroundRepeat = "no-repeat";
    mailInput.style.backgroundPosition = "5px 5px";
    });

    //Phone validation
    const phoneInput = document.querySelector('#phone');

    phoneInput.addEventListener('input', () => {
    phoneInput.setCustomValidity('');
    if(phoneInput.reportValidity()){
        phoneInput.style.background = "url(./imgs/green_check.svg)"
    }else{
        //phoneInput.setCustomValidity('This field must contain \n Try again!');
        phoneInput.style.background = "url(./imgs/Red_X.svg)";
    };
    phoneInput.style.backgroundColor = "white";
    phoneInput.style.backgroundSize = "10px";
    phoneInput.style.backgroundRepeat = "no-repeat";
    phoneInput.style.backgroundPosition = "5px 5px";
    });