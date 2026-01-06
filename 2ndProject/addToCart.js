export const addToCart=(event,id,stock)=>{
// getting all the value user clicked
  let arrLocalStorageProduct=getcartProductFromls()
  const currentProdElem=document.querySelector(`#card${id}`);
  const quantity=currentProdElem.querySelector(".productQuantity").innertext
  let price=currentProdElem.querySelector(".productPrice").innertext;
};