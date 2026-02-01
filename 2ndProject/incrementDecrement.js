import { getcartProductFromls } from "./getCartProducts";

export const incrementDecrement=(event,id,stock,price)=>{
  const currentCardElement=document.querySelector(`#card${id}`)

// accesing the only productquentity data 
const productQuantity=currentCardElement.querySelector(".productQuantity")

const productPrice=currentCardElement.querySelector(".productPrice")

let quantity=1;
let localStoragePrice=0;


// get the data form localStorage
// get the data form ls if you have any id to check if that id exit in ls or not
  let localCartProduct = getcartProductFromls();
  let existingProd=localCartProduct.find((curProd)=>curProd.id===id);

  if(existingProd){
    quantity= existingProd.quantity
    localStoragePrice=existingProd.price;
  }
  else{
    localStoragePrice=price
    price = price
  }

if (event.target.className==="cartIncrement")
{
  if(quantity<stock){
    quantity+=1;
  }
  else if(quantity===stock){
    quantity=stock;
    localStoragePrice = price * stock;
  }
}

if (event.target.className==="cartDecrement")
{
  if(quantity>1){
    quantity-=1;
  }
}

// finally we have to update actual local storage price
localStoragePrice=price*quantity

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
    updatedCart(updatedCart);
    return;
}