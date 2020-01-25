//- See hover states for all interactive elements on the page
//- Submit their email address using an `input` field
//- Receive an error message when the `form` is submitted if:
// 	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
// 	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

const email = document.getElementById('email');
const submitButton = document.getElementById('submitEmailBtn');
const errorElement = document.getElementById('errorMessage');

//function

//this is not working properly, will NOT validate correctly entered email addresses, with every input the error message appears.
function validateEmail() {
    let message = [];
    if (email.value === ''); {
        message.push('Whoops! It looks like you forgot to add your email.');
        errorElement.innerText = message;
        email.style.border = '1.2px red solid';
    }
}

function isEmpty(value) {
    if(value === '') return true;
    return false;
}

submitButton.addEventListener('click', validateEmail);