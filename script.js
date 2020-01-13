//- See hover states for all interactive elements on the page
//- Submit their email address using an `input` field
//- Receive an error message when the `form` is submitted if:
// 	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
// 	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

const submitEmailBtn = document.getElementById('submitEmail');
const email = document.getElementById('email')
const errorElement = document.getElementById('errorMessage');

//function
function validateEmail() {
    let message = [];
    if (email.value === '' || email.value == null); {
        message.push('Please provide a valid email.');
        // console.log('Button clicked, but input is empty.');
    } 
    
    if (message.length > 0) {
        errorElement.innerText = message.join(', ');
        email.style.border = '1.2px red solid';
    }
}

submitEmailBtn.addEventListener('click', validateEmail);
