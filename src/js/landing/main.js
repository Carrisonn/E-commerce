import { form, inputEmail } from './constants.js';
import { submitForm, valueToEmailObj } from './functions.js';

window.addEventListener('load', () => form.reset());

document.addEventListener('DOMContentLoaded', () => {
  inputEmail.addEventListener('input', valueToEmailObj);
  form.addEventListener('submit', submitForm);
});
