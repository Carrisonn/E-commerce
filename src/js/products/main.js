import { getProducts, valueToProductObj, validateData } from './functions.js';
import { formProducts, inputSearchProducts } from './constants.js';

window.addEventListener('load', () => formProducts.reset());

document.addEventListener('DOMContentLoaded', () => {
  getProducts();
  inputSearchProducts.addEventListener('input', valueToProductObj);
  formProducts.addEventListener('submit', validateData);
});