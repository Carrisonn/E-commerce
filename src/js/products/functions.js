import { Products } from "../classes/Products.js";

const productsInstance = new Products()

export async function getProducts() {
  const urlProducts = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=30';
  const response = await fetch(urlProducts);
  const products = await response.json();
  productsInstance.renderProducts(products)
}
