const userEmail = document.querySelector('#mail');
const form = document.querySelector('form')
const containerAll = document.querySelector('.container')
const sucessContainer = document.querySelector('.sucess-container')
const dismissMail = document.querySelector('.dismissmail')
const fieldError = document.querySelector('#field-error')
const formatError = document.querySelector('#format-error')
const userInput = document.querySelector('#user-input')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// console.log(userInput)

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (!userEmail.validity.valid) {
        showError();
    }
    else if (userEmail.value === "") {
        fieldError.style.display = "block"
        formatError.style.display = "none"
    }
    else {
        fieldError.style.display = "none"
        formatError.style.display = "none"
        sucessContainer.style.display = "flex"
        containerAll.style.display = "none"
        userInput.innerHTML = userEmail.value;
    }
})

userEmail.addEventListener('input', function() {
    if (userEmail.validity.valid) {
        fieldError.style.display = "none";
        formatError.style.display = "none";
    }
    else {
        showError();
    }
})

function showError() {
    if (!emailPattern.test(userEmail)) {
        formatError.style.display = "block";
        fieldError.style.display = "none"
    }
}

dismissMail.addEventListener('click', function() {
    containerAll.style.display = "flex"
    sucessContainer.style.display = "none"
    form.reset();
    fieldError.style.display = "none"
    formatError.style.display = "none"
    userEmail.focus();
})
