import { getcartProductFromls } from "./getCartProducts";
import { updateCart } from "./updateCart";
getcartProductFromls()
export const addToCart=(event,id,stock)=>{
// getting all the value user clicked
  let arrLocalStorageProduct=getcartProductFromls()
  const currentProdElem=document.querySelector(`#card${id}`);
  
  const quantity=currentProdElem.querySelector(".productQuantity").innerText
  let price=Number(currentProdElem.querySelector(".productPrice").innerText.replace(/[^\d.]/g,""));
  

  let existingProd=arrLocalStorageProduct.find((curProd)=>curProd.id===id)

  if(existingProd && quantity>1){
    quantity = Number(existingProd.quantity)+Number(quantity)
    price=Number(price*quantity)
    let updatedcart={id,quantity,price}
   updatedcart= arrLocalStorageProduct.map((curProd)=>{
        return(curProd.id===id)?updatedcart:   curProd;   
    })
     localStorage.setItem('cartProductls',JSON.stringify(updatedcart)) 
    console.log(updatedcart)
  }
  if(existingProd)
     return false

  price=Number(price*quantity)
  quantity=Number(quantity)
//  let updatecart={id,quantity,price}
  arrLocalStorageProduct.push({id,quantity,price})
  localStorage.setItem('cartProductls',JSON.stringify(arrLocalStorageProduct))

  // Update the cart button
  updateCart(arrLocalStorageProduct)


};