import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer= document.querySelector('#productContainer');
const productTemplate=document.querySelector('#productTemplate')

// check if the product exit or not 2nd
export const showProductContainer=(products)=>{
  if(!products){
    return false;
  }

  products.forEach((curProd)=>{
    const {category,description,id,image,name,price,stock}=curProd;

    // to clone the content of  template element we have to use importNode
    
    const productClone=document.importNode(productTemplate.content,true);

    productClone.querySelector('#cardValue').setAttribute('id',`card${id}`)


    productClone.querySelector('.category').textContent=category;
    productClone.querySelector('.productName').textContent=name;
    productClone.querySelector('.productImage').src=image;
    productClone.querySelector('.productImage').alt=image;
     productClone.querySelector('.productDescription').textContent=description;
      productClone.querySelector('.productStock').textContent=stock;
      productClone.querySelector('.productPrice').textContent=`Rs${price}`;
      productClone.querySelector('.productActualPrice').textContent=`Rs${price *2}`;

      // from here working on increment and decrement of the button
      productClone.querySelector(".stockElement")
      .addEventListener("click",(event)=>{
        // ctrl and space for automatic space
        homeQuantityToggle(event,id,stock)
      })

      // retrive the current product quantity and price in card element
      productClone.querySelector(".add-to-cart-button").addEventListener('click',(event)=>{
        addToCart(event,id,stock)
      })

    productContainer.append(productClone)

  });


};