import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getcartProductFromls } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";


let cartProducts=getcartProductFromls();

let filterProducts=products.filter((curProd)=>{
 return cartProducts.some((curElem)=>curElem.id===curProd.id) 

}) 
console.log(filterProducts)

// to update the add to cart lage
const cartElement=document.querySelector("#productCartContainer")
const templateContainer=document.querySelector("#productTemplate");


const showCartProcuct=()=>{
filterProducts.forEach((curProd)=>{

  const {category,id,image,name,stock,price}=curProd
  let productClone=document.importNode(templateContainer.content,true);
  
const lsAcutalData = fetchQuantityFromCartLS(id,price)

   productClone.querySelector('#cardValue').setAttribute('id',`card${id}`)
  productClone.querySelector('.category').textContent = category;
   productClone.querySelector('.productName').textContent=name;
    productClone.querySelector('.productImage').src=image;
// for qunatity
    productClone.querySelector(".productQuantity").textContent=lsAcutalData.quantity
    // for price
    productClone.querySelector(".productPrice").textContent=lsAcutalData.price

// handle increment and decrement button\
productClone.querySelector(".stockElement").addEventListener("click",(event)=>{
  incrementDecrement(event,id,stock,price)
})

// working on remove to cart button
productClone.querySelector('.remove-to-cart-button').addEventListener('click',()=>removeProdFromCart(id))





  cartElement.append(productClone)


})
}


// showing the carts Products
showCartProcuct()