import { Products } from "../classes/Products.js";
import { Notification } from "../classes/Notification.js";
import { userProductObj } from "./constants.js";

const productsInstance = new Products();

export async function getProducts() {
  const divSpinner = document.querySelector('#div-spinner');
  divSpinner.classList.remove('hide-spinner');

  try {
    const urlProducts = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=20';
    const response = await fetch(urlProducts);
    const products = await response.json();
    productsInstance.renderAllProducts(products);
    eventToBtnAddToCart();
  } catch (error) {
    console.error(error);
    alert(`Ha ocurrido un error al cargar los productos:\n ${error}.\n Pulse aceptar para volver a intentarlo`);
    window.location.reload();
  }
};

export function valueToProductObj(event) {
  userProductObj.product = event.target.value;
};

export function validateData(event) {
  event.preventDefault();
  const { product } = userProductObj;
  !product ? new Notification('Please, enter a product name', 'error', 'productsForm') : searchProducts();
};

async function searchProducts() {
  const divSpinner = document.querySelector('#div-spinner');
  divSpinner.classList.remove('hide-spinner');

  try {
    const { product } = userProductObj;
    const urlProduct = `https://api.escuelajs.co/api/v1/products/?title=${product}`;
    const response = await fetch(urlProduct);
    const userProduct = await response.json();
    productsInstance.renderAllProducts(userProduct);
  } catch (error) {
    console.error(error);
    alert(`Ha ocurrido un error al buscar los productos:\n ${error}.\n Pulse aceptar para volver a intentarlo`);
    window.location.reload();
  }
};

function eventToBtnAddToCart() {
  const btnsAddToCart = document.querySelectorAll('.btn-product-add-to-cart');
  btnsAddToCart.forEach(btnAddToCart => btnAddToCart.addEventListener('click', selectCardInformation));
}

export function selectCardInformation(event) {
  const productCard = event.target.parentElement.parentElement

  const productAddedToCartObj = {
    id: productCard.querySelector('.btn-product-add-to-cart').dataset.id,
    title: productCard.querySelector('.product-title').textContent,
    price: productCard.querySelector('.price-span').textContent,
    image: productCard.querySelector('.product-image').src,
    quantity: 1
  };

  productsInstance.userAddedProduct(productAddedToCartObj);
}