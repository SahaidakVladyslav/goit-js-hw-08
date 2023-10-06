const formEl = document.querySelector('.feedback-form');
const emailEl = Array.from(formEl)[0];
const messageEl = Array.from(formEl)[1];
const btnEl = Array.from(formEl)[2];

console.log(formEl);
console.log(emailEl);
console.log(messageEl);
console.log(btnEl);
btnEl.textContent = 'mamba';
const data = {
    email: '',
    message: ''
};
// localStorage.setItem(key, value)
emailEl.addEventListener('input', (event) => {
    data.email = event.currentTarget.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
    console.log(event.currentTarget.value);
})

messageEl.addEventListener('input', (event) => {
    data.message = event.currentTarget.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
    console.log(event.currentTarget.value);
});
btnEl.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(data);
    formEl.reset();
});

// throttle(function (data) {
//     player.getCurrentTime().then(function (seconds) {
//         console.log(seconds);
//         localStorage.setItem("videoplayer-current-time", seconds);
//     })
// }, 2000)