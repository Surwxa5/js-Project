import { updateCart } from "./updateCart";

export const getcartProductFromls=()=>{
  // sending the data
  let cartProducts=localStorage.getItem("cartProductls"); 
  if(!cartProducts){
    return[]
  }
  cartProducts=JSON.parse(cartProducts) 
    // Update the cart button
  updateCart(cartProducts)
  return cartProducts;  
}