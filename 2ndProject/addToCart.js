import { getcartProductFromls } from "./getCartProducts";
import { updateCart } from "./updateCart";

export const addToCart=(event,id,stock)=>{
// getting all the value user clicked
  let arrLocalStorageProduct=getcartProductFromls()
  const currentProdElem=document.querySelector(`#card${id}`);
  
  const quantity=currentProdElem.querySelector(".productQuantity").innerText
  let price=Number(currentProdElem.querySelector(".productPrice").innerText);
  
console.log(price,"price")

  let existingProd=arrLocalStorageProduct.find((curProd)=>curProd.id===id)
  if(existingProd){
    return false;
  }
  price=price*quantity;
  console.log("Price",price)
//  let updatecart={id,quantity,price}
  arrLocalStorageProduct.push({id,quantity,price})
  localStorage.setItem('cartProductls',JSON.stringify(arrLocalStorageProduct))

  // Update the cart button
  updateCart(arrLocalStorageProduct)


};