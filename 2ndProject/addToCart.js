import { getcartProductFromls } from "./getCartProducts";
import { updateCart } from "./updateCart";

export const addToCart = (event, id, stock) => {
  event.preventDefault();

  // Get cart from localStorage
  let arrLocalStorageProduct = getcartProductFromls();

  // Get current product card
  const currentProdElem = document.querySelector(`#card${id}`);
  if (!currentProdElem) return;

  // Get quantity (convert to number)
  const quantity = Number(
    currentProdElem.querySelector(".productQuantity").innerText
  );

  // Get price (remove currency symbol & convert to number)
  const price = Number(
    currentProdElem
      .querySelector(".productPrice")
      .innerText.replace(/[^\d.]/g, "")
  );

  // Check stock
  if (quantity > stock) {
    alert("Not enough stock available");
    return;
  }

  // Check if product already exists
  const existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  //  If product exists → update quantity & price
  if (existingProd) {
    const updatedCart = arrLocalStorageProduct.map((curProd) => {
      if (curProd.id === id) {
        const newQuantity = Number(curProd.quantity) + quantity;

        if (newQuantity > stock) {
          alert("Stock limit exceeded");
          return curProd;
        }

        return {
          ...curProd,
          quantity: newQuantity,
          price: price * newQuantity,
        };
      }
      return curProd;
    });

    localStorage.setItem("cartProductls", JSON.stringify(updatedCart));
    updateCart(updatedCart);
    return;
  }

  // ✅ If product does not exist → add new
  const newProduct = {
    id,
    quantity,
    price: price * quantity,
  };

  arrLocalStorageProduct.push(newProduct);
  localStorage.setItem(
    "cartProductls",
    JSON.stringify(arrLocalStorageProduct)
  );

  updateCart(arrLocalStorageProduct);
};
