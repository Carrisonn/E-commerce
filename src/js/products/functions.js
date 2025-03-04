import { Products } from "../classes/Products.js";

const productsInstance = new Products();

export async function getProducts() {
  try {
    const urlProducts = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=20';
    const response = await fetch(urlProducts);
    const products = await response.json();
    productsInstance.renderProducts(products);
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};