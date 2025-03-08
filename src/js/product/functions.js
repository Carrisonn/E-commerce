import { Products } from "../classes/Products.js";
import { queryParams } from "./constants.js";

const productInstance = new Products();

export function validateQueryParams() {
  queryParams.slice(0, 4) === '?id=' ? getProduct() : window.location.href = '/';
};

async function getProduct() {
  const divSpinner = document.querySelector('#div-spinner');
  divSpinner.classList.remove('hide-spinner');

  const productId = queryParams.slice(4);
  if (productId === '') return window.location.href = '/';

  try {
    const productUrl = `https://api.escuelajs.co/api/v1/products/${productId}`;
    const response = await fetch(productUrl);
    if (!response.ok) {
      alert(`Producto no encontrado por el siguiente motivo:\n ${response.statusText}.`);
      return window.location.href = '/';
    }
    const product = await response.json();
    productInstance.renderSingleProduct(product);
  } catch (error) {
    console.error(error);
    alert(`Ha ocurrido un error al buscar el producto:\n ${error}.`);
    window.location.href = '/';
  }
};