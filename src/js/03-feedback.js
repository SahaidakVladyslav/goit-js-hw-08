import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = Array.from(formEl)[0];
const messageEl = Array.from(formEl)[1];
const btnEl = Array.from(formEl)[2];
const data = {
    email: '',
    message: ''
};
function saveDataStorage() {
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}
const dataStorage = localStorage.getItem("feedback-form-state");
const dataEmailValue = () => {
    if (dataStorage) {
        return JSON.parse(dataStorage).email
    }
};
const dataMessageValue = () => {
    if (dataStorage) {
        return JSON.parse(dataStorage).message;
    }
}


emailEl.addEventListener('input', throttle(function emailInput(event) {
    data.email = emailEl.value;
    saveDataStorage();
}, 500));

messageEl.addEventListener('input', throttle(function (event) {
    data.message = messageEl.value;
    saveDataStorage();
}, 500));

btnEl.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(data);
    if (emailEl.value !== "" && messageEl.value !== "") {
        formEl.reset();
    }
    else {
        alert('please write all information for us')
    }
});

if (localStorage.getItem("feedback-form-state")) {
    console.log('yes, files is saved in localStorage')
    emailEl.value = dataEmailValue();
    messageEl.value = dataMessageValue();
} else {
    false
};


// document.querySelector('body').insertAdjacentHTML('afterend', `<button  style="margin: 30px;background-color: tomato;color:white;" class="reset">reset localStorage data</button>`)
// const resetEl = document.querySelector('.reset');
// resetEl.addEventListener('click', (event) => {
//     localStorage.removeItem("feedback-form-state")
// });
