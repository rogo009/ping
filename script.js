//- See hover states for all interactive elements on the page
//- Submit their email address using an `input` field
//- Receive an error message when the `form` is submitted if:
// 	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
// 	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

//Step 1: create variables to target all elements
const email = document.getElementById('email'); // targets email input
const submitButton = document.getElementById('submitEmailBtn'); // targets submit button
const errorElement = document.getElementById('errorMessage'); // target error div
let message = [];

// Handler
submitButton.addEventListener('click', validateEmail);

//function

//function one runs each validation method
//function two checks if input is empty
//function three checks if input is formatted correctly
//function four assign valid or invalid message

function validateEmail() {
    // let message = [];
    if (email.value === ''); {
        errorElement.innerText = message;
        message.push('Whoops! It looks like you forgot to add your email.');
        email.style.border = '1.2px red solid';
    }
}

// function checks if input is empty
function isEmpty(value) {
    if(value === '' || value == null) return true;
    return false;
}

isEmpty(email);

function setInvalid() {
    message.push('Whoops! It looks like you forgot to add your email.');
}

function setValid() {
    message.push('');
}
