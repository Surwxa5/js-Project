import { getcartProductFromls } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);

  const productQuantity =
    currentCardElement.querySelector(".productQuantity");

  const productPrice =
    currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  let localCartProduct = getcartProductFromls();
  let existingProd = localCartProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd) {
    quantity = Number(existingProd.quantity);
    localStoragePrice = Number(existingProd.price);
  } else {
    localStoragePrice = price;
  }

  //  INCREMENT
  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    }
  }

  //  DECREMENT
  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  //  FIX 1: calculate correct price
  localStoragePrice = price * quantity;
  localStoragePrice=Number(localStoragePrice.toFixed(2))

  //  FIX 2: UPDATE UI IN REAL TIME
  productQuantity.innerText = quantity;
  productPrice.innerText = `Rs${localStoragePrice}`;

  //  FIX 3: UPDATE LOCAL STORAGE CORRECTLY
  const updatedCart = localCartProduct.map((curProd) => {
    if (curProd.id === id) {
      return {
        ...curProd,
        quantity: quantity,
        price: localStoragePrice,
      };
    }
    return curProd;
  });

  localStorage.setItem(
    "cartProductls",
    JSON.stringify(updatedCart)
  );
  // calculating the card total in our cartproducts page
  updateCartProductTotal();
};
