import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputMessage = document.querySelector('textarea[name="message"]');
const formValue = {};
const LOCALSTORAGE_KEY = 'feedback-form-state';
const storageData = localStorage.getItem(LOCALSTORAGE_KEY);
const obj = JSON.parse(storageData);

setOutput();

form.addEventListener('input', throttle(setDataToStorage, 500));
form.addEventListener('submit', resetFormData);

function setDataToStorage(e) {
  const output = e.target.value;
  formValue[e.target.name] = output;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValue));
}

function resetFormData(e) {
  e.preventDefault();
  localStorage.clear();
  form.reset();
  console.log(obj);
}
// formValue.email = form.elements.email.value;
// formValue.message = form.elements.message.value;
// localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValue));

function setOutput() {
  if (!storageData) {
    return;
  }
  inputEmail.value = obj.email || '';
  inputMessage.value = obj.message || '';
}

//   if (obj.email) {
//     inputEmail.value = obj.email;
//   }
//   if (obj.message) {
//     inputMessage.value = obj.message;
//   }
