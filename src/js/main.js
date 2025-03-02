import { form, inputEmail } from './constants.js';
import { submitForm, valueToEmailObj } from './functions.js';

window.addEventListener('load', () => {
  form.reset();
});

form.addEventListener('submit', submitForm);
inputEmail.addEventListener('input', valueToEmailObj);