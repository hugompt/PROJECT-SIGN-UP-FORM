// Validate on user input if content is valid or not
// and change the visual indicator accordingly
    //First Name validation
    const firstNameInput = document.querySelector('#firstName');
    firstNameInput.addEventListener('input', () => {
    firstNameInput.setCustomValidity('');
    if(firstNameInput.reportValidity()){
        firstNameInput.style.background = "url(./imgs/green_check.svg)"
        firstNameInput.style.border = "2px solid green";
    }else{
        firstNameInput.setCustomValidity('This field can only contain upper and lowercase letters.\n Try again!');
        firstNameInput.style.background = "url(./imgs/Red_X.svg)";
        firstNameInput.style.border = "2px solid red";
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


    //Passwords validation
    const pwd1 = document.querySelector('#pwd');
    const pwd2 = document.querySelector('#pwdConfirm');

    let check = function() {
        if (document.getElementById('pwd').value ==
          document.getElementById('pwdConfirm').value && document.getElementById('pwd').value != "") {
            pwd1.style.background = "url(./imgs/green_check.svg)"
            pwd1.style.border = "2px solid green";
            
            pwd2.style.background = "url(./imgs/green_check.svg)"
            pwd2.style.border = "2px solid green";

            document.getElementById('pwdCheck').style.color = 'greenyellow';
            document.getElementById('pwdCheck').textContent = 'Passwords are matching! :)';
            document.getElementById('pwdCheck').hidden = false;
            document.getElementById('pwdCheck').style.fontSize = "13px";
        } else if(document.getElementById('pwd').value !=
        document.getElementById('pwdConfirm').value){
            pwd1.style.background = "url(./imgs/Red_X.svg)";
            pwd1.style.border = "2px solid red";

            pwd2.style.background = "url(./imgs/Red_X.svg)";
            pwd2.style.border = "2px solid red";

            document.getElementById('pwdCheck').style.color = 'red';
            document.getElementById('pwdCheck').textContent = 'The passwords are not matching :(';
            document.getElementById('pwdCheck').hidden = false;
            document.getElementById('pwdCheck').style.fontSize = "13px";
            document.getElementById('pwdCheck').style.textShadow = "1px 1px 1px solid grey";
        }else{
            document.getElementById('pwdCheck').hidden = true;
            pwd1.style.background = "";
            pwd2.style.background = "";

            pwd1.style.border = "2px solid black";
            pwd2.style.border = "2px solid black";

        }
        pwd1.style.backgroundColor = "white";
        pwd1.style.backgroundSize = "10px";
        pwd1.style.backgroundRepeat = "no-repeat";
        pwd1.style.backgroundPosition = "5px 5px";
        pwd2.style.backgroundColor = "white";
        pwd2.style.backgroundSize = "10px";
        pwd2.style.backgroundRepeat = "no-repeat";
        pwd2.style.backgroundPosition = "5px 5px";
      }