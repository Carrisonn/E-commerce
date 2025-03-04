import { getProducts } from "./functions.js";
import { formProducts } from "./constants.js";

window.addEventListener('load', () => formProducts.reset());

document.addEventListener('DOMContentLoaded', () => {
  getProducts()
});