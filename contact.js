const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const form = document.querySelector('#contact_form');
let UsernameValidation = () => {

    let errorsFound = false;
    let username = usernameEl.value.trim();

    if (username.length <= 5 || username.length >= 25) {
        showError(usernameEl, `Username must be between 5 and 25 characters.`);
    } else {
        showSuccess(usernameEl);
        errorsFound = true;
    }
    return errorsFound;
};


let EmailValidation = () => {
    let errorsFound = false;
    let email = emailEl.value.trim();
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email)) {
        showError(emailEl, 'Invalid or missing email address.');
    } else {
        showSuccess(emailEl);
        errorsFound = true;
    }
    return errorsFound;
};
 

const showError = (input, message) => {
   
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let UsernameValid = UsernameValidation(),
        EmailValid = EmailValidation();

    let FormValid = UsernameValid &&EmailValid;

    // submit to the server if the form is valid
    if (FormValid) {

    }
    
});

