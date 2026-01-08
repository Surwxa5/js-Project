import { getcartProductFromls } from "./getCartProducts";

export const addToCart=(event,id,stock)=>{
// getting all the value user clicked
  let arrLocalStorageProduct=getcartProductFromls()
  const currentProdElem=document.querySelector(`#card${id}`);
  
  const quantity=currentProdElem.querySelector(".productQuantity").innerText
  let price=currentProdElem.querySelector(".productPrice").innerText;
  
console.log(quantity,price)
  price=price.replace("Rs","" )
  price=price*quantity;
  
 
  arrLocalStorageProduct.push({id,quantity,price})
  localStorage.setItem('cartProductls',JSON.stringify(arrLocalStorageProduct))

};