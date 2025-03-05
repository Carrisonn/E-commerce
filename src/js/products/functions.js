import { Products } from "../classes/Products.js";

const productsInstance = new Products();

export async function getProducts() {
  const divSpinner = document.querySelector('#div-spinner');
  divSpinner.classList.remove('hide-spinner');

  try {
    const urlProducts = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=20';
    const response = await fetch(urlProducts);
    const products = await response.json();
    productsInstance.renderProducts(products);
  } catch (error) {
    console.error(error);
    alert(`Ha ocurrido un error al cargar los productos:\n ${error}\n Intentelo de nuevo mas tarde`);
    window.location.href = '/';
  }
};