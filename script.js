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
    const userEntry = userEmail.value
    if (userEntry === "") {
        fieldError.style.display = "block"
        formatError.style.display = "none"
        return false;
    }
    // else if (!emailPattern.test(userEmail)) {
    //     formatError.style.display = "block";
    //     fieldError.style.display = "none"
    //     return false;
    // }
    else {
        containerAll.style.display = "none"
        sucessContainer.style.display = "flex"
        userInput.innerHTML = userEntry;
        formatError.style.display = "none";
        fieldError.style.display = "none"
    }
    userEntry = '';
    userEmail.focus();
})
userEmail.addEventListener('input', function() {
    if (userEmail.validity.typeMismatch) {
        formatError.style.display = "block";
        fieldError.style.display = "none"
    }
})

dismissMail.addEventListener('click', function() {
    containerAll.style.display = "flex"
    sucessContainer.style.display = "none"
    form.reset();
    fieldError.style.display = "none"
    formatError.style.display = "none"
    userEmail.focus();
})















6