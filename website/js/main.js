const form = document.querySelector("form");
const firstName = document.querySelector('#firstName').value;
const lastName = document.querySelector('#lastName').value;
const email = document.querySelector('#email').value;
const requestTypeCheck = document.querySelector('input[name="request-type"]:checked').value;
const question = document.querySelector('[name="question"]').value;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const Valid = checkForm();


    if (Valid) {
        console.log('Form submitted');
        form.submit();
    } else {
        console.log('failed, showing errors');
    }
});

function checkForm() {

    if (firstName.trim() === "") {
        document.querySelector('#firstName-error').textContent = "first name required";
        return { valid: false, message: 'First name is required' };
    }
    else if (lastName.trim() === '') {
        document.querySelector('#lastName-error').textContent = "last name required";
        return { valid: false, message: 'Last name is required' };
    }
    else if (email.trim() === '') {
        document.querySelector('#lastName-error').textContent = "email required";

        return { valid: false, message: 'Email is required' };
    }
    else if (requestTypeCheck === "pre order") {
        if (question.trim() === '') {
            return { valid: false, message: 'Question name is required' };
        }
    }
    else if (requestTypeCheck === "general question") {
        if (question.trim() === '') {
            return { valid: false, message: 'item details are required' };
        }
    }
    else { return { valid: true, message: '' } };

}



console.log("External script loaded successfully");
