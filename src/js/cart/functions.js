import { Products } from '../classes/Products.js';
import { divCartInfo } from './constants.js';

const productsInstance = new Products();

export function getUserProductsFromStorage() {
  if (!localStorage.getItem('userProducts')) {
    const emptyCartMsg = document.createElement('p');
    emptyCartMsg.textContent = 'Oops... it looks like you haven\'t added any products to your cart';
    divCartInfo.appendChild(emptyCartMsg);
    return;
  }

  const userProducts = JSON.parse(localStorage.getItem('userProducts'));
  productsInstance.renderCartProducts(userProducts);
  //eventToBtnDeleteProducts();
}