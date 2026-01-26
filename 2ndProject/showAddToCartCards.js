import products from "./api/products.json";
import { getcartProductFromls } from "./getCartProducts";


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
  

   productClone.querySelector('#cardValue').setAttribute('id',`card${id}`)
  productClone.querySelector('.category').textContent = category;
   productClone.querySelector('.productName').textContent=name;
    productClone.querySelector('.productImage').src=image;

  cartElement.append(productClone)
})
}


// showing the carts Products
showCartProcuct()