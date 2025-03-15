import { Notification } from '../classes/Notification.js';
import { emailObj, form } from './constants.js';

export function valueToEmailObj(event) {
  emailObj.email = event.target.value.trim();
}

export function submitForm(event) {
  event.preventDefault();

  const { email } = emailObj;
  if (!validateEmail(email)) return new Notification('Please, enter a valid email address', 'error', 'landingForm');

  new Notification('Thank you for subscribing', 'success', 'landingForm');
  emailObj.email = '';
  form.reset();
}

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
