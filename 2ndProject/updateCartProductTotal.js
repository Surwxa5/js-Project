export const updateCartProductTotal = ()=>{
   let localCartProduct = getcartProductFromls();
 let totalProductprice=  localCartProduct.reduce(()=>{},initialValue)
}