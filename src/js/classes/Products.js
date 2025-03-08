import { Notification } from './Notification.js';
import { divProductsContainer, formProducts, userProductObj } from '../products/constants.js';
import { divProductContainer } from '../product/constants.js';

export class Products {
  constructor() {
    this.products = [];
  }

  renderAllProducts(products) {
    const removeSpinner = document.querySelector('#div-spinner');
    removeSpinner.classList.add('hide-spinner');

    products.length === 0 ? new Notification('No products found', 'error', 'productsForm') : null;

    while (divProductsContainer.firstChild) {
      divProductsContainer.removeChild(divProductsContainer.firstChild);
    }

    products.forEach(product => {
      const { id, title, price, category: { name }, images: [image] } = product;

      const divProduct = document.createElement('div');
      divProduct.classList.add('product-card');
      divProduct.innerHTML = `
        <a href="product.html?id=${id}"> 
          <img loading="lazy" src="${image}" class="product-image" alt="Product Image">
        </a>
        <h3 class="product-title">${title}</h3>
        <p class="product-category-name">${name}</p>
        <div class="div-product-buy">
          <p class="price">Price: <span class="price-span">$${price}</span></p>
          <button class="btn-product-add-to-cart" data-id="${id}">Add To Cart</button>
        </div>
      `;
      divProductsContainer.appendChild(divProduct);
    })
    userProductObj.product = '';
    formProducts.reset();
  };

  renderSingleProduct(product) {
    const removeSpinner = document.querySelector('#div-spinner');
    removeSpinner.classList.add('hide-spinner');

    const { id, title, price, description, category: { name }, images: [image1, image2, image3] } = product;
    const divProductCard = document.createElement('div');
    divProductCard.classList.add('single-product-card');
    divProductCard.innerHTML = `
      <div class="div-images-container"> 
      <div class="div-small-images">
        <img loading="lazy" src="${image2}" class="product-image" alt="Product Image">
        <img loading="lazy" src="${image3}" class="product-image" alt="Product Image">
      </div>
      <img loading="lazy" src="${image1}" class="product-image" alt="Product Image">
      </div>
      <div class="div-product-info">
        <h3 class="product-title">${title}</h3>
        <p class="product-category-name">${name}</p>
        <p class="product-description">${description}</p>
        <div class="div-product-buy">
          <p class="price">Price: <span class="price-span">$${price}</span></p>
          <button class="btn-product-add-to-cart" data-id="${id}">Add To Cart</button>
        </div>
      </div>
    `;
    divProductContainer.appendChild(divProductCard);
  }
};