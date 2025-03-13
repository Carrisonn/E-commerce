import { Products } from "../classes/Products.js";
import { Notification } from "../classes/Notification.js";
import { userProductObj, divProductsContainer } from "./constants.js";

const productsInstance = new Products();

export async function getProducts() {
  const divSpinner = document.querySelector('#div-spinner');
  divSpinner.classList.remove('hide-spinner');

  try {
    const urlProducts = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=20';
    const response = await fetch(urlProducts);
    const products = await response.json();
    productsInstance.renderAllProducts(products);
    selectCardInformation();
  } catch (error) {
    console.error(error);
    alert(`There was an error loading the products:\n ${error}.`);
    window.location.href = '/';
  }
};

export function valueToProductObj(event) {
  userProductObj.product = event.target.value.trim();
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
    selectCardInformation();
  } catch (error) {
    console.error(error);
    alert(`There was an error searching for the products:\n ${error}.`);
    window.location.href = '/';
  }
};

function selectCardInformation() {
  divProductsContainer.addEventListener('click', event => {
    if (event.target.classList.contains('btn-product-add-to-cart')) {
      const productCard = event.target.parentElement.parentElement;

      const productAddedToCartObj = {
        id: productCard.querySelector('.btn-product-add-to-cart').dataset.id,
        title: productCard.querySelector('.product-title').textContent,
        price: productCard.querySelector('.price-span').textContent,
        image: productCard.querySelector('.product-image').src,
        quantity: 1
      };
      productsInstance.userProductAddedToCart(productAddedToCartObj);
      new Notification('Product added to cart', 'success', productCard);
    }
  })
};