export const getcartProductFromls=()=>{
  // sending the data
  let cartProducts=localStorage.getItem("cartProductls"); 
  if(!cartProducts){
    return[]
  }
  cartProducts=JSON.parse(cartProducts) 
  return cartProducts;  
}