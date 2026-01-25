
import { getcartProductFromls } from "./getCartProducts.js";



let cartProducts=getcartProductFromls();

async function loadProducts() {
  const response = await fetch("./api/products.json");
  const products = await response.json();

let filterProducts = products.filter((curProd) => {
  return curProd.id; // or any condition 
});
}

loadProducts();



