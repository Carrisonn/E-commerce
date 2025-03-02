import { Notification } from './classes/Notification.js';
import { emailObj, form, inputEmail } from './constants.js';

export function valueToEmailObj(event) {
  emailObj.email = event.target.value;
}

export function submitForm(event) {
  event.preventDefault();
  const { email } = emailObj;

  if (!validateEmail(email)) {
    new Notification('Please, enter a valid email address', 'error');
    return;
  }

  new Notification('Thank you for subscribing', 'success');
  form.reset();
  inputEmail.value = '';
  emailObj.email = '';
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
