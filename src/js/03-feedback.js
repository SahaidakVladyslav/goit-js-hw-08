import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = Array.from(formEl)[0];
const messageEl = Array.from(formEl)[1];
const btnEl = Array.from(formEl)[2];


const data = {
    email: '',
    message: ''
};


// const emailInput = (event) => {
//     data.email = emailEl.value;
//     localStorage.setItem("feedback-form-state", JSON.stringify(data));
//     console.log(emailEl.value);
// }



emailEl.addEventListener('input', throttle(function emailInput(event) {
    data.email = emailEl.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
    console.log(emailEl.value);
}, 1000))



messageEl.addEventListener('input', (event) => {
    data.message = messageEl.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
    console.log(messageEl.value);
});
btnEl.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(data);
    formEl.reset();
});

