export class Products {
  constructor() {
    this.products = [];
  }

  renderProducts(products) {
    const removeSpinner = document.querySelector('#div-spinner');
    removeSpinner.classList.add('hide-spinner');

    products.forEach(product => {
      const divProductsContainer = document.querySelector('#div-products-container');
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
          <button class="btn-product-add-to-cart">Add To Cart</button>
        </div>
      `;

      divProductsContainer.appendChild(divProduct)
    })
  }
}