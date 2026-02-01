import { getcartProductFromls } from "./getCartProducts";

export const removeProdFromCart =(id)=>{
  
  let cartProducts=getcartProductFromls();
 cartProducts = cartProducts.filter((curProd) => curProd.id !== id);


// update the local storage after removing the item
localStorage.setItem("cartProductls", JSON.stringify(cartProducts));
   


// to remove the  div click

let removeDiv=document.getElementById(`card${id}`)
if(removeDiv)
{
  removeDiv.remove();
}
updateCart(cartProducts)
}