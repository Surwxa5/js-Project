import { getcartProductFromls } from "./getCartProducts";

export const updateCartProductTotal = ()=>{
  let productSubTotal = document.querySelector(".productSubTotal")
  let productFinalTotal=document.querySelector(".productFinalTotal");
   let localCartProduct = getcartProductFromls();
   let initialValue=0
 let totalProductprice=  localCartProduct.reduce((accum,curElem)=>{
  let productPrice=parseInt(curElem.price)||0
  return accum + productPrice
 },initialValue)
 productSubTotal.textContent=totalProductprice;

 productFinalTotal.textContent= `Rs${totalProductprice+50}`

} 