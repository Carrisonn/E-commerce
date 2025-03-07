import { Products } from "../classes/Products.js";

const productInstance = new Products();

export function validateQueryParams() {
  const queryParams = window.location.search;
  queryParams.slice(0, 4) === '?id=' ? getProduct() : window.location.href = '/';
};

async function getProduct() {
  const divSpinner = document.querySelector('#div-spinner');
  divSpinner.classList.remove('hide-spinner');

  const queryParams = window.location.search;
  const productId = queryParams.slice(4);
  const productIdToNumber = Number(productId);

  try {
    const productUrl = `https://api.escuelajs.co/api/v1/products/${productIdToNumber}`;
    const response = await fetch(productUrl);
    const product = await response.json();
    productInstance.renderSingleProduct(product);
  } catch (error) {
    console.error(error);
    alert(`Ha ocurrido un error al buscar el producto:\n ${error}.\n Pulse aceptar para volver a intentarlo`);
    window.location.reload();
  }
};